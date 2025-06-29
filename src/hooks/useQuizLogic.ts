
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Question } from '@/types/quiz';

export const useQuizLogic = (questions: Question[]) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!startTime) {
      setStartTime(new Date());
    }
  }, []);

  const saveQuizResults = async (finalAnswers: number[], timeSpent: number) => {
    if (!user) return;
    
    setSaving(true);
    try {
      const score = getScoreFromAnswers(finalAnswers);
      const percentage = Math.round((score / questions.length) * 100);

      // Save quiz results
      const { error: quizError } = await supabase
        .from('quiz_results')
        .insert({
          user_id: user.id,
          score,
          total_questions: questions.length,
          percentage,
          time_spent_seconds: timeSpent,
          answers: finalAnswers
        });

      if (quizError) throw quizError;

      // Save incorrect answers to error_questions
      const incorrectQuestions = questions
        .map((q, index) => ({ ...q, userAnswer: finalAnswers[index], index }))
        .filter(q => q.userAnswer !== q.correct);

      if (incorrectQuestions.length > 0) {
        const errorData = incorrectQuestions.map(q => ({
          user_id: user.id,
          question_id: q.id,
          question_text: q.question,
          options: q.options,
          correct_answer: q.correct,
          user_answer: q.userAnswer,
          explanation: q.explanation,
          difficulty: q.difficulty
        }));

        const { error: errorError } = await supabase
          .from('error_questions')
          .upsert(errorData, { 
            onConflict: 'user_id,question_id',
            ignoreDuplicates: false 
          });

        if (errorError) throw errorError;
      }

      toast({
        title: "Results Saved",
        description: "Your quiz results have been saved successfully!",
      });
    } catch (error) {
      console.error('Error saving quiz results:', error);
      toast({
        title: "Error",
        description: "Failed to save quiz results. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = async () => {
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      const endTime = new Date();
      setEndTime(endTime);
      setQuizCompleted(true);
      
      if (startTime) {
        const timeSpent = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        await saveQuizResults(newAnswers, timeSpent);
      }
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setAnswers([]);
    setQuizCompleted(false);
    setStartTime(new Date());
    setEndTime(null);
  };

  const getScore = () => {
    return getScoreFromAnswers(answers);
  };

  const getScoreFromAnswers = (answerArray: number[]) => {
    return answerArray.filter((answer, index) => answer === questions[index].correct).length;
  };

  const getTimeSpent = () => {
    if (startTime && endTime) {
      const diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    return '0:00';
  };

  return {
    currentQuestion,
    setCurrentQuestion,
    selectedAnswer,
    showResult,
    answers,
    quizCompleted,
    saving,
    handleAnswerSelect,
    handleNextQuestion,
    handleShowResult,
    resetQuiz,
    getScore,
    getTimeSpent
  };
};

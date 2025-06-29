
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, BookOpen, RotateCcw, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ErrorQuestion {
  id: string;
  question_id: number;
  question_text: string;
  options: string[];
  correct_answer: number;
  user_answer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const ErrorBin = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [errorQuestions, setErrorQuestions] = useState<ErrorQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [practiceMode, setPracticeMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [practiceAnswers, setPracticeAnswers] = useState<number[]>([]);
  const [practiceCompleted, setPracticeCompleted] = useState(false);

  useEffect(() => {
    if (user) {
      loadErrorQuestions();
    }
  }, [user]);

  const loadErrorQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('error_questions')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setErrorQuestions(data || []);
    } catch (error) {
      console.error('Error loading error questions:', error);
      toast({
        title: "Error",
        description: "Failed to load error questions.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const clearErrorBin = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('error_questions')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      setErrorQuestions([]);
      setPracticeMode(false);
      setCurrentQuestion(0);
      setSelectedAnswer('');
      setShowResult(false);
      setPracticeAnswers([]);
      setPracticeCompleted(false);

      toast({
        title: "Success",
        description: "Error bin cleared successfully!",
      });
    } catch (error) {
      console.error('Error clearing error bin:', error);
      toast({
        title: "Error",
        description: "Failed to clear error bin.",
        variant: "destructive",
      });
    }
  };

  const removeQuestion = async (questionId: string) => {
    try {
      const { error } = await supabase
        .from('error_questions')
        .delete()
        .eq('id', questionId)
        .eq('user_id', user?.id);

      if (error) throw error;

      const updatedErrors = errorQuestions.filter(q => q.id !== questionId);
      setErrorQuestions(updatedErrors);

      toast({
        title: "Success",
        description: "Question removed from error bin!",
      });
    } catch (error) {
      console.error('Error removing question:', error);
      toast({
        title: "Error",
        description: "Failed to remove question.",
        variant: "destructive",
      });
    }
  };

  const startPractice = () => {
    if (errorQuestions.length === 0) return;
    setPracticeMode(true);
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setPracticeAnswers([]);
    setPracticeCompleted(false);
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleNextQuestion = async () => {
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...practiceAnswers, answerIndex];
    setPracticeAnswers(newAnswers);

    // If answered correctly, remove from error bin
    if (answerIndex === errorQuestions[currentQuestion].correct_answer) {
      await removeQuestion(errorQuestions[currentQuestion].id);
    }

    if (currentQuestion < errorQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      setPracticeCompleted(true);
    }
  };

  const exitPractice = () => {
    setPracticeMode(false);
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setPracticeAnswers([]);
    setPracticeCompleted(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading error questions...</p>
        </div>
      </div>
    );
  }

  if (practiceCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
        <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button variant="ghost" size="sm" onClick={exitPractice}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Error Bin
              </Button>
              <h1 className="text-xl font-bold text-gray-900">Practice Complete</h1>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Great Job!</h2>
          <p className="text-xl text-gray-600 mb-8">
            You've completed your error bin practice session.
          </p>
          <div className="space-y-4">
            <Button onClick={exitPractice} className="bg-red-600 hover:bg-red-700 mr-4">
              Return to Error Bin
            </Button>
            <Link to="/quiz">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Take Full Quiz Again
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (practiceMode && errorQuestions.length > 0) {
    const currentQ = errorQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / errorQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
        <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button variant="ghost" size="sm" onClick={exitPractice}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Exit Practice
              </Button>
              <div className="text-center">
                <h1 className="text-xl font-bold text-gray-900">Error Bin Practice</h1>
                <p className="text-sm text-gray-600">Question {currentQuestion + 1} of {errorQuestions.length}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  Difficulty: <span className={`font-semibold ${
                    currentQ.difficulty === 'easy' ? 'text-green-600' :
                    currentQ.difficulty === 'medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {currentQ.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">{currentQ.question_text}</CardTitle>
              <CardDescription>
                This question was previously answered incorrectly. Answer correctly to remove it from your error bin.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showResult ? (
                <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                  {currentQ.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-4">
                  {currentQ.options.map((option, index) => (
                    <div 
                      key={index} 
                      className={`p-3 rounded-lg border-2 ${
                        index === currentQ.correct_answer 
                          ? 'border-green-500 bg-green-50' 
                          : index === parseInt(selectedAnswer) && index !== currentQ.correct_answer
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center">
                        {index === currentQ.correct_answer && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                        <span className={index === currentQ.correct_answer ? 'font-semibold' : ''}>{option}</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">{currentQ.explanation}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end">
            {!showResult ? (
              <Button 
                onClick={handleShowResult}
                disabled={!selectedAnswer}
                className="bg-red-600 hover:bg-red-700"
              >
                Show Answer
              </Button>
            ) : (
              <Button 
                onClick={handleNextQuestion}
                className="bg-red-600 hover:bg-red-700"
              >
                {currentQuestion < errorQuestions.length - 1 ? 'Next Question' : 'Finish Practice'}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Error Bin</h1>
            {errorQuestions.length > 0 && (
              <Button 
                variant="destructive" 
                size="sm"
                onClick={clearErrorBin}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {errorQuestions.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Errors Yet!</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Your error bin is empty. Take the quiz to see questions you got wrong appear here for review.
            </p>
            <Link to="/quiz">
              <Button className="bg-red-600 hover:bg-red-700">
                Take Quiz
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Error Bin</h2>
              <p className="text-gray-600 mb-6">
                Review and practice the {errorQuestions.length} question{errorQuestions.length !== 1 ? 's' : ''} you got wrong
              </p>
              <Button 
                onClick={startPractice}
                className="bg-red-600 hover:bg-red-700 mr-4"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Practice All Questions
              </Button>
            </div>

            <div className="grid gap-6">
              {errorQuestions.map((question) => (
                <Card key={question.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mr-2 ${
                            question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                            question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {question.difficulty}
                          </span>
                          <span className="text-sm text-gray-500">Question #{question.question_id}</span>
                        </div>
                        <CardTitle className="text-lg">{question.question_text}</CardTitle>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeQuestion(question.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, optIndex) => (
                        <div 
                          key={optIndex}
                          className={`p-2 rounded border ${
                            optIndex === question.correct_answer 
                              ? 'border-green-500 bg-green-50 font-semibold' 
                              : 'border-gray-200'
                          }`}
                        >
                          {optIndex === question.correct_answer && '✓ '}{option}
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium mb-1">Explanation:</p>
                      <p className="text-sm text-blue-700">{question.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ErrorBin;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const Quiz = () => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: t('quiz.q1.question'),
      options: [t('quiz.q1.opt1'), t('quiz.q1.opt2'), t('quiz.q1.opt3'), t('quiz.q1.opt4')],
      correct: 0,
      explanation: t('quiz.q1.explanation'),
      difficulty: 'easy'
    },
    {
      id: 2,
      question: t('quiz.q2.question'),
      options: [t('quiz.q2.opt1'), t('quiz.q2.opt2'), t('quiz.q2.opt3'), t('quiz.q2.opt4')],
      correct: 1,
      explanation: t('quiz.q2.explanation'),
      difficulty: 'medium'
    },
    {
      id: 3,
      question: t('quiz.q3.question'),
      options: [t('quiz.q3.opt1'), t('quiz.q3.opt2'), t('quiz.q3.opt3'), t('quiz.q3.opt4')],
      correct: 2,
      explanation: t('quiz.q3.explanation'),
      difficulty: 'easy'
    },
    {
      id: 4,
      question: t('quiz.q4.question'),
      options: [t('quiz.q4.opt1'), t('quiz.q4.opt2'), t('quiz.q4.opt3'), t('quiz.q4.opt4')],
      correct: 1,
      explanation: t('quiz.q4.explanation'),
      difficulty: 'easy'
    },
    {
      id: 5,
      question: t('quiz.q5.question'),
      options: [t('quiz.q5.opt1'), t('quiz.q5.opt2'), t('quiz.q5.opt3'), t('quiz.q5.opt4')],
      correct: 1,
      explanation: t('quiz.q5.explanation'),
      difficulty: 'medium'
    },
    {
      id: 6,
      question: t('quiz.q6.question'),
      options: [t('quiz.q6.opt1'), t('quiz.q6.opt2'), t('quiz.q6.opt3'), t('quiz.q6.opt4')],
      correct: 1,
      explanation: t('quiz.q6.explanation'),
      difficulty: 'medium'
    },
    {
      id: 7,
      question: t('quiz.q7.question'),
      options: [t('quiz.q7.opt1'), t('quiz.q7.opt2'), t('quiz.q7.opt3'), t('quiz.q7.opt4')],
      correct: 1,
      explanation: t('quiz.q7.explanation'),
      difficulty: 'medium'
    },
    {
      id: 8,
      question: t('quiz.q8.question'),
      options: [t('quiz.q8.opt1'), t('quiz.q8.opt2'), t('quiz.q8.opt3'), t('quiz.q8.opt4')],
      correct: 1,
      explanation: t('quiz.q8.explanation'),
      difficulty: 'easy'
    },
    {
      id: 9,
      question: t('quiz.q9.question'),
      options: [t('quiz.q9.opt1'), t('quiz.q9.opt2'), t('quiz.q9.opt3'), t('quiz.q9.opt4')],
      correct: 0,
      explanation: t('quiz.q9.explanation'),
      difficulty: 'medium'
    },
    {
      id: 10,
      question: t('quiz.q10.question'),
      options: [t('quiz.q10.opt1'), t('quiz.q10.opt2'), t('quiz.q10.opt3'), t('quiz.q10.opt4')],
      correct: 1,
      explanation: t('quiz.q10.explanation'),
      difficulty: 'hard'
    },
    {
      id: 11,
      question: t('quiz.q11.question'),
      options: [t('quiz.q11.opt1'), t('quiz.q11.opt2'), t('quiz.q11.opt3'), t('quiz.q11.opt4')],
      correct: 1,
      explanation: t('quiz.q11.explanation'),
      difficulty: 'easy'
    },
    {
      id: 12,
      question: t('quiz.q12.question'),
      options: [t('quiz.q12.opt1'), t('quiz.q12.opt2'), t('quiz.q12.opt3'), t('quiz.q12.opt4')],
      correct: 1,
      explanation: t('quiz.q12.explanation'),
      difficulty: 'hard'
    },
    {
      id: 13,
      question: t('quiz.q13.question'),
      options: [t('quiz.q13.opt1'), t('quiz.q13.opt2'), t('quiz.q13.opt3'), t('quiz.q13.opt4')],
      correct: 1,
      explanation: t('quiz.q13.explanation'),
      difficulty: 'medium'
    },
    {
      id: 14,
      question: t('quiz.q14.question'),
      options: [t('quiz.q14.opt1'), t('quiz.q14.opt2'), t('quiz.q14.opt3'), t('quiz.q14.opt4')],
      correct: 1,
      explanation: t('quiz.q14.explanation'),
      difficulty: 'hard'
    },
    {
      id: 15,
      question: t('quiz.q15.question'),
      options: [t('quiz.q15.opt1'), t('quiz.q15.opt2'), t('quiz.q15.opt3'), t('quiz.q15.opt4')],
      correct: 0,
      explanation: t('quiz.q15.explanation'),
      difficulty: 'hard'
    },
    {
      id: 16,
      question: t('quiz.q16.question'),
      options: [t('quiz.q16.opt1'), t('quiz.q16.opt2'), t('quiz.q16.opt3'), t('quiz.q16.opt4')],
      correct: 1,
      explanation: t('quiz.q16.explanation'),
      difficulty: 'medium'
    },
    {
      id: 17,
      question: t('quiz.q17.question'),
      options: [t('quiz.q17.opt1'), t('quiz.q17.opt2'), t('quiz.q17.opt3'), t('quiz.q17.opt4')],
      correct: 0,
      explanation: t('quiz.q17.explanation'),
      difficulty: 'hard'
    },
    {
      id: 18,
      question: t('quiz.q18.question'),
      options: [t('quiz.q18.opt1'), t('quiz.q18.opt2'), t('quiz.q18.opt3'), t('quiz.q18.opt4')],
      correct: 0,
      explanation: t('quiz.q18.explanation'),
      difficulty: 'easy'
    },
    {
      id: 19,
      question: t('quiz.q19.question'),
      options: [t('quiz.q19.opt1'), t('quiz.q19.opt2'), t('quiz.q19.opt3'), t('quiz.q19.opt4')],
      correct: 3,
      explanation: t('quiz.q19.explanation'),
      difficulty: 'hard'
    },
    {
      id: 20,
      question: t('quiz.q20.question'),
      options: [t('quiz.q20.opt1'), t('quiz.q20.opt2'), t('quiz.q20.opt3'), t('quiz.q20.opt4')],
      correct: 1,
      explanation: t('quiz.q20.explanation'),
      difficulty: 'medium'
    },
    {
      id: 21,
      question: t('quiz.q21.question'),
      options: [t('quiz.q21.opt1'), t('quiz.q21.opt2'), t('quiz.q21.opt3'), t('quiz.q21.opt4')],
      correct: 2,
      explanation: t('quiz.q21.explanation'),
      difficulty: 'medium'
    },
    {
      id: 22,
      question: t('quiz.q22.question'),
      options: [t('quiz.q22.opt1'), t('quiz.q22.opt2'), t('quiz.q22.opt3'), t('quiz.q22.opt4')],
      correct: 1,
      explanation: t('quiz.q22.explanation'),
      difficulty: 'medium'
    },
    {
      id: 23,
      question: t('quiz.q23.question'),
      options: [t('quiz.q23.opt1'), t('quiz.q23.opt2'), t('quiz.q23.opt3'), t('quiz.q23.opt4')],
      correct: 2,
      explanation: t('quiz.q23.explanation'),
      difficulty: 'easy'
    },
    {
      id: 24,
      question: t('quiz.q24.question'),
      options: [t('quiz.q24.opt1'), t('quiz.q24.opt2'), t('quiz.q24.opt3'), t('quiz.q24.opt4')],
      correct: 1,
      explanation: t('quiz.q24.explanation'),
      difficulty: 'medium'
    },
    {
      id: 25,
      question: t('quiz.q25.question'),
      options: [t('quiz.q25.opt1'), t('quiz.q25.opt2'), t('quiz.q25.opt3'), t('quiz.q25.opt4')],
      correct: 1,
      explanation: t('quiz.q25.explanation'),
      difficulty: 'easy'
    },
    {
      id: 26,
      question: t('quiz.q26.question'),
      options: [t('quiz.q26.opt1'), t('quiz.q26.opt2'), t('quiz.q26.opt3'), t('quiz.q26.opt4')],
      correct: 1,
      explanation: t('quiz.q26.explanation'),
      difficulty: 'hard'
    },
    {
      id: 27,
      question: t('quiz.q27.question'),
      options: [t('quiz.q27.opt1'), t('quiz.q27.opt2'), t('quiz.q27.opt3'), t('quiz.q27.opt4')],
      correct: 1,
      explanation: t('quiz.q27.explanation'),
      difficulty: 'medium'
    },
    {
      id: 28,
      question: t('quiz.q28.question'),
      options: [t('quiz.q28.opt1'), t('quiz.q28.opt2'), t('quiz.q28.opt3'), t('quiz.q28.opt4')],
      correct: 1,
      explanation: t('quiz.q28.explanation'),
      difficulty: 'hard'
    },
    {
      id: 29,
      question: t('quiz.q29.question'),
      options: [t('quiz.q29.opt1'), t('quiz.q29.opt2'), t('quiz.q29.opt3'), t('quiz.q29.opt4')],
      correct: 1,
      explanation: t('quiz.q29.explanation'),
      difficulty: 'medium'
    },
    {
      id: 30,
      question: t('quiz.q30.question'),
      options: [t('quiz.q30.opt1'), t('quiz.q30.opt2'), t('quiz.q30.opt3'), t('quiz.q30.opt4')],
      correct: 0,
      explanation: t('quiz.q30.explanation'),
      difficulty: 'hard'
    }
  ];

  useEffect(() => {
    if (!startTime) {
      setStartTime(new Date());
    }
  }, []);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      setEndTime(new Date());
      
      // Save incorrect answers to localStorage for error bin
      const incorrectAnswers = questions.filter((q, index) => newAnswers[index] !== q.correct);
      const existingErrors = JSON.parse(localStorage.getItem('errorBin') || '[]');
      const updatedErrors = [...existingErrors, ...incorrectAnswers.filter(q => 
        !existingErrors.some(existing => existing.id === q.id)
      )];
      localStorage.setItem('errorBin', JSON.stringify(updatedErrors));
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
    return answers.filter((answer, index) => answer === questions[index].correct).length;
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

  if (quizCompleted) {
    const score = getScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
        <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('quiz.home')}
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-gray-900">{t('quiz.results')}</h1>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Trophy className={`mx-auto h-16 w-16 mb-4 ${percentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('quiz.completed')}</h2>
            <p className="text-xl text-gray-600">
              {t('quiz.scored')} {score} {t('quiz.outOf')} {questions.length} {t('quiz.questions')}
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="text-6xl font-bold mb-4" style={{ color: percentage >= 70 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444' }}>
                {percentage}%
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-semibold">{t('quiz.timeSpent')}</div>
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {getTimeSpent()}
                  </div>
                </div>
                <div>
                  <div className="font-semibold">{t('quiz.grade')}</div>
                  <div className="font-bold">
                    {percentage >= 90 ? t('quiz.excellent') : percentage >= 70 ? t('quiz.goodJob') : percentage >= 50 ? t('quiz.notBad') : t('quiz.keepStudying')}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button onClick={resetQuiz} className="bg-red-600 hover:bg-red-700 mr-4">
              <RotateCcw className="h-4 w-4 mr-2" />
              {t('quiz.retryQuiz')}
            </Button>
            <Link to="/error-bin">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                {t('quiz.reviewMistakes')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('quiz.home')}
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">{t('quiz.title')}</h1>
              <p className="text-sm text-gray-600">{t('quiz.questionNumber')} {currentQuestion + 1} {t('quiz.of')} {questions.length}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">
                {t('quiz.difficulty')}: <span className={`font-semibold ${
                  currentQ.difficulty === 'easy' ? 'text-green-600' :
                  currentQ.difficulty === 'medium' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {t(`quiz.${currentQ.difficulty}`)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{currentQ.question}</CardTitle>
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
                      index === currentQ.correct 
                        ? 'border-green-500 bg-green-50' 
                        : index === parseInt(selectedAnswer) && index !== currentQ.correct
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      {index === currentQ.correct && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                      {index === parseInt(selectedAnswer) && index !== currentQ.correct && <XCircle className="h-5 w-5 text-red-500 mr-2" />}
                      <span className={index === currentQ.correct ? 'font-semibold' : ''}>{option}</span>
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

        {/* Actions */}
        <div className="flex justify-between">
          <div>
            {currentQuestion > 0 && !showResult && (
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                {t('quiz.previous')}
              </Button>
            )}
          </div>
          <div>
            {!showResult ? (
              <Button 
                onClick={handleShowResult}
                disabled={!selectedAnswer}
                className="bg-red-600 hover:bg-red-700"
              >
                {t('quiz.showAnswer')}
              </Button>
            ) : (
              <Button 
                onClick={handleNextQuestion}
                className="bg-red-600 hover:bg-red-700"
              >
                {currentQuestion < questions.length - 1 ? t('quiz.nextQuestion') : t('quiz.finishQuiz')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

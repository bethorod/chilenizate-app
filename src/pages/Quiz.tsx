
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuizQuestions } from '@/data/quizQuestions';
import { useQuizLogic } from '@/hooks/useQuizLogic';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResults from '@/components/quiz/QuizResults';

const Quiz = () => {
  const { t } = useLanguage();
  const questions = useQuizQuestions();
  
  const {
    currentQuestion,
    setCurrentQuestion,
    selectedAnswer,
    showResult,
    quizCompleted,
    saving,
    handleAnswerSelect,
    handleNextQuestion,
    handleShowResult,
    resetQuiz,
    getScore,
    getTimeSpent
  } = useQuizLogic(questions);

  if (quizCompleted) {
    const score = getScore();
    const timeSpent = getTimeSpent();
    
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        timeSpent={timeSpent}
        saving={saving}
        onResetQuiz={resetQuiz}
      />
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <QuizHeader 
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        currentQ={currentQ}
      />

      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <QuizQuestion
          question={currentQ}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          onAnswerSelect={handleAnswerSelect}
        />

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
                disabled={saving}
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

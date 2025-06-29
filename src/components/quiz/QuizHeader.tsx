
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Question } from '@/types/quiz';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  currentQ: Question;
  isResults?: boolean;
}

const QuizHeader = ({ currentQuestion, totalQuestions, currentQ, isResults = false }: QuizHeaderProps) => {
  const { t } = useLanguage();

  return (
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
            <h1 className="text-xl font-bold text-gray-900">
              {isResults ? t('quiz.results') : t('quiz.title')}
            </h1>
            {!isResults && (
              <p className="text-sm text-gray-600">
                {t('quiz.questionNumber')} {currentQuestion + 1} {t('quiz.of')} {totalQuestions}
              </p>
            )}
          </div>
          {!isResults && (
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
          )}
        </div>
      </div>
    </header>
  );
};

export default QuizHeader;

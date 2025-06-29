
import { Link } from 'react-router-dom';
import { Trophy, Clock, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import QuizHeader from './QuizHeader';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  timeSpent: string;
  saving: boolean;
  onResetQuiz: () => void;
}

const QuizResults = ({ score, totalQuestions, timeSpent, saving, onResetQuiz }: QuizResultsProps) => {
  const { t } = useLanguage();
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <QuizHeader currentQuestion={0} totalQuestions={totalQuestions} currentQ={{} as any} isResults />

      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Trophy className={`mx-auto h-16 w-16 mb-4 ${percentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('quiz.completed')}</h2>
          <p className="text-xl text-gray-600">
            {t('quiz.scored')} {score} {t('quiz.outOf')} {totalQuestions} {t('quiz.questions')}
          </p>
          {saving && <p className="text-sm text-blue-600 mt-2">Saving results...</p>}
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
                  {timeSpent}
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
          <Button onClick={onResetQuiz} className="bg-red-600 hover:bg-red-700 mr-4">
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
};

export default QuizResults;

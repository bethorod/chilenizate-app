import { Calendar, MapPin, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface HistoricalPeriodData {
  id: string;
  title: string;
  period: string;
  description: string;
  keyPoints: string[];
  keyFigures: string[];
  color: string;
}

interface HistoricalPeriodProps {
  period: HistoricalPeriodData;
  index: number;
  isExpanded: boolean;
  onToggle: (periodId: string) => void;
}

const HistoricalPeriod = ({ period, index, isExpanded, onToggle }: HistoricalPeriodProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader 
        className="cursor-pointer"
        onClick={() => onToggle(period.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${period.color} flex items-center justify-center text-white font-bold text-lg`}>
              {index + 1}
            </div>
            <div>
              <CardTitle className="text-xl">{period.title}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                {period.period}
              </CardDescription>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <p className="text-gray-600 mt-2">{period.description}</p>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {t('sections.keyEvents')}
              </h4>
              <ul className="space-y-2">
                {period.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="h-4 w-4 mr-2" />
                {t('sections.keyFigures')}
              </h4>
              <div className="space-y-2">
                {period.keyFigures.map((figure, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-900">{figure}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default HistoricalPeriod;

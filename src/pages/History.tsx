
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HistoricalPeriod from '@/components/history/HistoricalPeriod';
import CulturalSection from '@/components/history/CulturalSection';
import { historicalPeriods, culturalSections } from '@/data/historyData';

const History = () => {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);
  const [expandedCultural, setExpandedCultural] = useState<string | null>(null);

  const togglePeriod = (periodId: string) => {
    setExpandedPeriod(expandedPeriod === periodId ? null : periodId);
  };

  const toggleCultural = (sectionId: string) => {
    setExpandedCultural(expandedCultural === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🇨🇱</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Chilean History & Culture
              </h1>
            </div>
            <Link to="/quiz">
              <Button className="bg-red-600 hover:bg-red-700">
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Chile: History, Culture & Geography
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the rich tapestry of Chilean civilization, from ancient history to modern culture, geography, and traditions
          </p>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Historical Timeline</span>
            </TabsTrigger>
            <TabsTrigger value="culture" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Culture & Geography</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <div className="space-y-6">
              {historicalPeriods.map((period, index) => (
                <HistoricalPeriod
                  key={period.id}
                  period={period}
                  index={index}
                  isExpanded={expandedPeriod === period.id}
                  onToggle={togglePeriod}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="culture">
            <div className="space-y-6">
              {culturalSections.map((section) => (
                <CulturalSection
                  key={section.id}
                  section={section}
                  isExpanded={expandedCultural === section.id}
                  onToggle={toggleCultural}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link to="/quiz">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8">
              Test Your Knowledge
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;

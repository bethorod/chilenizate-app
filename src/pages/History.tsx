import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Globe, Map, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HistoricalPeriod from '@/components/history/HistoricalPeriod';
import CulturalSection from '@/components/history/CulturalSection';
import { useLanguage } from '@/contexts/LanguageContext';
import ChileCommunesMap from '@/components/mapa/ChileCommunesMap';
import { historicalPeriods, culturalSections } from '@/data/historyData';

const History = () => {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);
  const [expandedCultural, setExpandedCultural] = useState<string | null>(null);
  const { t } = useLanguage();

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
                  {t('header.back')}
                </Button>
              </Link>
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🇨🇱</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                {t('header.title')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/quiz">
                <Button className="bg-red-600 hover:bg-red-700">
                  {t('header.takeQuiz')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('main.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('main.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{t('tabs.history')}</span>
            </TabsTrigger>
            <TabsTrigger value="culture" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>{t('tabs.culture')}</span>
            </TabsTrigger>
            <TabsTrigger value="himno" className="flex items-center space-x-2">
              <Music className="h-4 w-4" />
              <span>Himno</span>
            </TabsTrigger>
            <TabsTrigger value="mapa" className="flex items-center space-x-2">
              <Map className="h-4 w-4" />
              <span>Mapa</span>
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

          <TabsContent value="himno">
            <div className="space-y-6">
              <article className="bg-white/70 rounded-xl shadow-sm p-6 border">
                <h3 className="text-lg font-semibold mb-2">Himno Nacional de Chile</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Letra principal del himno para leer y aprender.
                </p>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>Puro, Chile, es tu cielo azulado; puras brisas te cruzan también,</p>
                  <p>y tu campo de flores bordado es la copia feliz del Edén.</p>
                  <p>Majestuosa es la blanca montaña que te dio por baluarte el Señor,</p>
                  <p>y ese mar que tranquilo te baña te promete futuro esplendor.</p>
                </div>
              </article>
            </div>
          </TabsContent>

          <TabsContent value="mapa">
            <div className="space-y-4">
              <ChileCommunesMap />
              <p className="text-sm text-muted-foreground">
                Pasa el cursor por cada comuna para ver su nombre y región.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link to="/quiz">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8">
              {t('main.testKnowledge')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;

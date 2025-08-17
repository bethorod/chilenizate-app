
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Trophy, AlertCircle, ChevronRight, MapPin, Calendar, Users, LogOut, User, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { t } = useLanguage();
  const { user, signOut } = useAuth();

  const features = [
    {
      id: 'history',
      title: t('features.exploreHistory'),
      description: t('features.exploreHistoryDesc'),
      icon: Book,
      color: 'from-red-500 to-red-600',
      link: '/history'
    },
    {
      id: 'quiz',
      title: t('features.quiz30'),
      description: t('features.quiz30Desc'),
      icon: Trophy,
      color: 'from-blue-500 to-blue-600',
      link: '/quiz'
    },
    {
      id: 'errors',
      title: t('features.errorBin'),
      description: t('features.errorBinDesc'),
      icon: AlertCircle,
      color: 'from-amber-500 to-amber-600',
      link: '/error-bin'
    },
    {
      id: 'mapa',
      title: 'Geografía territorial',
      description: 'Navega por las 16 regiones y sus comunas para comprender la organización territorial del país.',
      icon: MapPin,
      color: 'from-emerald-500 to-emerald-600',
      link: '/mapa'
    },
    {
      id: 'himno',
      title: 'Símbolos patrios',
      description: 'Conoce el himno nacional, su significado y contexto histórico.',
      icon: Music2,
      color: 'from-fuchsia-500 to-fuchsia-600',
      link: '/himno'
    }
  ];

  const stats = [
    { icon: MapPin, label: t('stats.regionsCovered'), value: '16' },
    { icon: Calendar, label: t('stats.historicalPeriods'), value: '8' },
    { icon: Users, label: t('stats.keyFigures'), value: '50+' }
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Conoce Chile en profundidad
            <span className="block text-xl md:text-3xl text-red-600 mt-2">Tu guía completa para estudios e integración</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre la historia, cultura y territorio chileno. Ideal para estudiantes, investigadores y extranjeros que buscan integrarse al país.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <>
                <Link to="/history">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    {t('main.startLearning')}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                    {t('main.takeQuiz')}
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/history">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    Explorar contenido
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/practica">
                  <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                    Evaluar conocimientos
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('features.title')}</h3>
            <p className="text-gray-600 text-lg">{t('features.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link key={feature.id} to={feature.link}>
                <Card 
                  className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                    hoveredCard === feature.id ? 'ring-2 ring-red-200' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🇨🇱</span>
            </div>
            <h4 className="text-xl font-bold">Chilenízate</h4>
          </div>
          <p className="text-gray-400 mb-6">{t('main.interactiveWay')}</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link to="/history" className="hover:text-white transition-colors">{t('nav.history')}</Link>
            <Link to="/mapa" className="hover:text-white transition-colors">Mapa</Link>
            <Link to="/himno" className="hover:text-white transition-colors">Himno</Link>
            <Link to="/quiz" className="hover:text-white transition-colors">{t('nav.quiz')}</Link>
            <Link to="/error-bin" className="hover:text-white transition-colors">{t('nav.errorBin')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

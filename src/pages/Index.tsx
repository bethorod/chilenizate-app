
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Trophy, AlertCircle, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      id: 'history',
      title: 'Explore History',
      description: 'Discover Chile\'s rich historical timeline from pre-Columbian times to modern day',
      icon: Book,
      color: 'from-red-500 to-red-600',
      link: '/history'
    },
    {
      id: 'quiz',
      title: '30-Question Quiz',
      description: 'Test your knowledge with our comprehensive Chilean history quiz',
      icon: Trophy,
      color: 'from-blue-500 to-blue-600',
      link: '/quiz'
    },
    {
      id: 'errors',
      title: 'Error Bin',
      description: 'Review and retry questions you got wrong to improve your understanding',
      icon: AlertCircle,
      color: 'from-amber-500 to-amber-600',
      link: '/error-bin'
    }
  ];

  const stats = [
    { icon: MapPin, label: 'Regions Covered', value: '16' },
    { icon: Calendar, label: 'Historical Periods', value: '8' },
    { icon: Users, label: 'Key Figures', value: '50+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🇨🇱</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                I wanna Chilean
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/history" className="text-gray-700 hover:text-red-600 transition-colors">History</Link>
              <Link to="/quiz" className="text-gray-700 hover:text-red-600 transition-colors">Quiz</Link>
              <Link to="/error-bin" className="text-gray-700 hover:text-red-600 transition-colors">Error Bin</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Learn Chilean History
            <span className="block text-3xl text-red-600 mt-2">The Interactive Way</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the fascinating story of Chile through interactive lessons, engaging quizzes, 
            and personalized learning tools. From ancient civilizations to modern democracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/history">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Start Learning
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/quiz">
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                Take Quiz
              </Button>
            </Link>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Learn</h3>
            <p className="text-gray-600 text-lg">Comprehensive tools designed to make Chilean history engaging and memorable</p>
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
            <h4 className="text-xl font-bold">I wanna Chilean</h4>
          </div>
          <p className="text-gray-400 mb-6">Learn Chilean history the interactive way</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link to="/history" className="hover:text-white transition-colors">History</Link>
            <Link to="/quiz" className="hover:text-white transition-colors">Quiz</Link>
            <Link to="/error-bin" className="hover:text-white transition-colors">Error Bin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const History = () => {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);

  const historicalPeriods = [
    {
      id: 'pre-columbian',
      title: 'Pre-Columbian Era',
      period: '12,000 BCE - 1540 CE',
      description: 'The earliest inhabitants of Chile and their civilizations',
      keyPoints: [
        'The Mapuche people dominated central and southern Chile',
        'The Incas briefly controlled northern Chile in the 15th century',
        'Hunter-gatherer societies in Patagonia and the north',
        'Advanced agricultural techniques in the Atacama Desert',
        'Rich oral traditions and spiritual beliefs'
      ],
      keyFigures: ['Lautaro', 'Caupolicán', 'Galvarino'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'spanish-conquest',
      title: 'Spanish Conquest & Colonial Period',
      period: '1540 - 1810',
      description: 'Spanish colonization and the establishment of colonial society',
      keyPoints: [
        'Pedro de Valdivia founded Santiago in 1541',
        'Fierce resistance by Mapuche warriors in the Arauco War',
        'Establishment of encomienda system',
        'Growth of mestizo population',
        'Development of mining and agriculture'
      ],
      keyFigures: ['Pedro de Valdivia', 'Inés de Suárez', 'García Hurtado de Mendoza'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'independence',
      title: 'Independence Movement',
      period: '1810 - 1823',
      description: 'The struggle for independence from Spanish rule',
      keyPoints: [
        'First National Government Junta formed in 1810',
        'Patria Vieja (Old Fatherland) period 1810-1814',
        'Battle of Rancagua and Spanish reconquest',
        'San Martín and O\'Higgins crossed the Andes',
        'Battle of Chacabuco secured independence in 1817'
      ],
      keyFigures: ['Bernardo O\'Higgins', 'José Miguel Carrera', 'José de San Martín'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'early-republic',
      title: 'Early Republic',
      period: '1823 - 1891',
      description: 'Formation of the Chilean state and territorial expansion',
      keyPoints: [
        'Conservative Republic established stable government',
        'War of the Pacific (1879-1884) expanded territory',
        'Nitrate boom brought economic prosperity',
        'Immigration from Europe increased',
        'Parliamentary system gradually developed'
      ],
      keyFigures: ['Diego Portales', 'Manuel Bulnes', 'José Manuel Balmaceda'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'parliamentary',
      title: 'Parliamentary Republic',
      period: '1891 - 1925',
      description: 'Parliamentary system and social changes',
      keyPoints: [
        'Civil War of 1891 established parliamentary system',
        'Nitrate wealth funded public works',
        'Growth of middle class and labor movement',
        'Women\'s rights movements emerged',
        'Social problems from rapid urbanization'
      ],
      keyFigures: ['Arturo Alessandri', 'Luis Emilio Recabarren', 'Gabriela Mistral'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'presidential',
      title: 'Presidential Republic',
      period: '1925 - 1973',
      description: 'Return to presidential system and political polarization',
      keyPoints: [
        'New constitution strengthened presidency',
        'Great Depression severely impacted economy',
        'Import substitution industrialization',
        'Land reform and social programs',
        'Political polarization increased in 1960s'
      ],
      keyFigures: ['Carlos Ibáñez del Campo', 'Eduardo Frei Montalva', 'Salvador Allende'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'military-government',
      title: 'Military Government',
      period: '1973 - 1990',
      description: 'Military coup and authoritarian rule',
      keyPoints: [
        'Military coup overthrew Allende government',
        'Implementation of free-market economic policies',
        'Severe human rights violations occurred',
        'New constitution adopted in 1980',
        'Economic crisis in early 1980s led to protests'
      ],
      keyFigures: ['Augusto Pinochet', 'Chicago Boys economists', 'Vicaría de la Solidaridad'],
      color: 'from-gray-600 to-gray-700'
    },
    {
      id: 'return-democracy',
      title: 'Return to Democracy',
      period: '1990 - Present',
      description: 'Democratic transition and modern Chile',
      keyPoints: [
        'Peaceful transition to democracy in 1990',
        'Truth and Reconciliation Commission',
        'Continued economic growth and development',
        'Social movements and constitutional debates',
        'Chile becomes regional leader in many areas'
      ],
      keyFigures: ['Patricio Aylwin', 'Michelle Bachelet', 'Sebastián Piñera'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const togglePeriod = (periodId: string) => {
    setExpandedPeriod(expandedPeriod === periodId ? null : periodId);
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
                Chilean History
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
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Journey Through Chilean History
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the rich and complex history of Chile, from ancient civilizations to modern democracy
          </p>
        </div>

        <div className="space-y-6">
          {historicalPeriods.map((period, index) => (
            <Card key={period.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => togglePeriod(period.id)}
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
                  {expandedPeriod === period.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <p className="text-gray-600 mt-2">{period.description}</p>
              </CardHeader>

              {expandedPeriod === period.id && (
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Key Events & Developments
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
                        Key Figures
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
          ))}
        </div>

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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, ChevronDown, ChevronUp, Mountain, TreePine, Coins, Flag, Leaf, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const History = () => {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);
  const [expandedCultural, setExpandedCultural] = useState<string | null>(null);

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

  const culturalSections = [
    {
      id: 'idioms',
      title: 'Chilean Idioms & Expressions',
      icon: Users,
      color: 'from-yellow-500 to-yellow-600',
      content: [
        {
          phrase: "¡Bacán!",
          meaning: "Cool! Awesome!",
          usage: "Used to express approval or excitement"
        },
        {
          phrase: "Al tiro",
          meaning: "Right away, immediately",
          usage: "When you want something done quickly"
        },
        {
          phrase: "Cachai",
          meaning: "You get it? You understand?",
          usage: "Used to check if someone understands"
        },
        {
          phrase: "Fome",
          meaning: "Boring",
          usage: "Describes something uninteresting"
        },
        {
          phrase: "Pololo/Polola",
          meaning: "Boyfriend/Girlfriend",
          usage: "Chilean way to refer to romantic partners"
        },
        {
          phrase: "Carrete",
          meaning: "Party",
          usage: "A social gathering or celebration"
        }
      ]
    },
    {
      id: 'folklore',
      title: 'Chilean Folklore & Traditions',
      icon: Flag,
      color: 'from-red-500 to-red-600',
      content: [
        {
          name: "Cueca",
          description: "Chile's national dance, representing courtship between rooster and hen",
          significance: "Performed during Fiestas Patrias (Independence celebrations)"
        },
        {
          name: "La Pincoya",
          description: "Mythical mermaid of Chiloé who brings good fortune to fishermen",
          significance: "Symbol of marine abundance and protection"
        },
        {
          name: "El Trauco",
          description: "Forest dwarf from Chiloé mythology who seduces young women",
          significance: "Represents the mysterious forces of nature"
        },
        {
          name: "Empanadas",
          description: "Traditional pastries filled with meat, onions, and spices",
          significance: "Essential food for Independence Day celebrations"
        },
        {
          name: "Rodeo",
          description: "Traditional sport involving horsemen and cattle",
          significance: "Celebrates Chilean cowboy (huaso) culture"
        }
      ]
    },
    {
      id: 'geography',
      title: 'Geography & Regions',
      icon: MapPin,
      color: 'from-green-500 to-green-600',
      content: {
        regions: [
          { name: "Arica y Parinacota", capital: "Arica", features: ["Atacama Desert", "Lauca National Park"] },
          { name: "Tarapacá", capital: "Iquique", features: ["Nitrate ghost towns", "Pica Oasis"] },
          { name: "Antofagasta", capital: "Antofagasta", features: ["Copper mining", "Valley of the Moon"] },
          { name: "Atacama", capital: "Copiapó", features: ["Driest desert", "Flowering desert"] },
          { name: "Coquimbo", capital: "La Serena", features: ["Pisco production", "Elqui Valley"] },
          { name: "Valparaíso", capital: "Valparaíso", features: ["Historic port", "Wine valleys"] },
          { name: "Metropolitana", capital: "Santiago", features: ["National capital", "Andes foothills"] },
          { name: "O'Higgins", capital: "Rancagua", features: ["Copper mining", "Agriculture"] }
        ],
        naturalWonders: [
          "Torres del Paine National Park",
          "Atacama Desert",
          "Easter Island (Rapa Nui)",
          "Marble Caves of Patagonia",
          "Elqui Valley",
          "Chiloé Island",
          "Valle de la Luna",
          "Pumalín Park"
        ]
      }
    },
    {
      id: 'resources',
      title: 'Natural Resources',
      icon: Mountain,
      color: 'from-amber-500 to-amber-600',
      content: [
        {
          resource: "Copper",
          description: "Chile is the world's largest copper producer",
          locations: ["Chuquicamata", "El Teniente", "Escondida"]
        },
        {
          resource: "Lithium",
          description: "Second-largest lithium reserves globally",
          locations: ["Salar de Atacama", "Salar de Uyuni region"]
        },
        {
          resource: "Wine",
          description: "World-renowned wine production",
          locations: ["Maipo Valley", "Colchagua Valley", "Casablanca Valley"]
        },
        {
          resource: "Salmon",
          description: "Major aquaculture industry",
          locations: ["Southern Chile", "Patagonian fjords"]
        },
        {
          resource: "Forestry",
          description: "Pine and eucalyptus plantations",
          locations: ["Central and southern regions"]
        }
      ]
    },
    {
      id: 'symbols',
      title: 'National Symbols',
      icon: TreePine,
      color: 'from-emerald-500 to-emerald-600',
      content: {
        animals: [
          {
            name: "Huemul",
            description: "Endangered Andean deer, national animal",
            habitat: "Patagonian Andes"
          },
          {
            name: "Condor",
            description: "Andean condor, largest flying bird in the world",
            significance: "Symbol of freedom and power"
          },
          {
            name: "Chinchilla",
            description: "Native rodent prized for its fur",
            conservation: "Nearly extinct in wild"
          }
        ],
        trees: [
          {
            name: "Araucaria (Monkey Puzzle Tree)",
            description: "Ancient coniferous tree, living fossil",
            location: "Southern Andes and coastal ranges"
          },
          {
            name: "Alerce",
            description: "Long-lived tree, can live over 3,000 years",
            status: "Protected species"
          },
          {
            name: "Copihue",
            description: "National flower, climbing vine with red bell-shaped flowers",
            symbolism: "Pride and national identity"
          }
        ]
      }
    },
    {
      id: 'currency',
      title: 'Currency History',
      icon: Coins,
      color: 'from-blue-500 to-blue-600',
      content: [
        {
          period: "Colonial Era (1540-1817)",
          currency: "Spanish Real",
          description: "Spanish colonial currency system used throughout the empire"
        },
        {
          period: "Early Republic (1817-1851)",
          currency: "Chilean Real",
          description: "First independent Chilean currency, decimal system adopted"
        },
        {
          period: "Mid-19th Century (1851-1925)",
          currency: "Chilean Peso (Old)",
          description: "Replaced the real, backed by silver and later gold standard"
        },
        {
          period: "20th Century (1925-1975)",
          currency: "Escudo",
          description: "Replaced peso during monetary reform, subdivided into centésimos"
        },
        {
          period: "Modern Era (1975-Present)",
          currency: "Chilean Peso (New)",
          description: "Current currency, floating exchange rate since 1999, symbol: $"
        }
      ]
    }
  ];

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
          </TabsContent>

          <TabsContent value="culture">
            <div className="space-y-6">
              {culturalSections.map((section) => (
                <Card key={section.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleCultural(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center text-white`}>
                          <section.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                      </div>
                      {expandedCultural === section.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>

                  {expandedCultural === section.id && (
                    <CardContent className="pt-0">
                      {section.id === 'idioms' && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {section.content.map((idiom, idx) => (
                            <div key={idx} className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                              <h5 className="font-bold text-yellow-800 text-lg">{idiom.phrase}</h5>
                              <p className="text-yellow-700 font-medium">{idiom.meaning}</p>
                              <p className="text-yellow-600 text-sm mt-1">{idiom.usage}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.id === 'folklore' && (
                        <div className="space-y-4">
                          {section.content.map((item, idx) => (
                            <div key={idx} className="bg-red-50 p-4 rounded-lg">
                              <h5 className="font-bold text-red-800 text-lg">{item.name}</h5>
                              <p className="text-red-700">{item.description}</p>
                              <p className="text-red-600 text-sm mt-2 font-medium">{item.significance}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.id === 'geography' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Regions of Chile</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {section.content.regions.map((region, idx) => (
                                <div key={idx} className="bg-green-50 p-4 rounded-lg">
                                  <h5 className="font-bold text-green-800">{region.name}</h5>
                                  <p className="text-green-700">Capital: {region.capital}</p>
                                  <p className="text-green-600 text-sm">{region.features.join(', ')}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Natural Wonders</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {section.content.naturalWonders.map((wonder, idx) => (
                                <div key={idx} className="bg-green-100 p-3 rounded text-center text-green-800 font-medium">
                                  {wonder}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === 'resources' && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {section.content.map((resource, idx) => (
                            <div key={idx} className="bg-amber-50 p-4 rounded-lg">
                              <h5 className="font-bold text-amber-800 text-lg">{resource.resource}</h5>
                              <p className="text-amber-700">{resource.description}</p>
                              <p className="text-amber-600 text-sm mt-1">{resource.locations.join(', ')}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.id === 'symbols' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">National Animals</h4>
                            <div className="space-y-3">
                              {section.content.animals.map((animal, idx) => (
                                <div key={idx} className="bg-emerald-50 p-4 rounded-lg">
                                  <h5 className="font-bold text-emerald-800">{animal.name}</h5>
                                  <p className="text-emerald-700">{animal.description}</p>
                                  <p className="text-emerald-600 text-sm">{animal.habitat || animal.significance || animal.conservation}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">National Trees & Flora</h4>
                            <div className="space-y-3">
                              {section.content.trees.map((tree, idx) => (
                                <div key={idx} className="bg-emerald-50 p-4 rounded-lg">
                                  <h5 className="font-bold text-emerald-800">{tree.name}</h5>
                                  <p className="text-emerald-700">{tree.description}</p>
                                  <p className="text-emerald-600 text-sm">{tree.location || tree.status || tree.symbolism}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === 'currency' && (
                        <div className="space-y-4">
                          {section.content.map((era, idx) => (
                            <div key={idx} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                              <h5 className="font-bold text-blue-800">{era.period}</h5>
                              <p className="font-medium text-blue-700">{era.currency}</p>
                              <p className="text-blue-600 text-sm mt-1">{era.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
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

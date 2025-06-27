
import { Users, MapPin, Mountain, TreePine, Coins, Flag, Leaf } from 'lucide-react';

export const historicalPeriods = [
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

export const culturalSections = [
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

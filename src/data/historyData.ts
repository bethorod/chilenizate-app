
import { Users, MapPin, Mountain, TreePine, Coins, Flag, Leaf } from 'lucide-react';

export const historicalPeriods = [
  {
    id: 'pre-columbian',
    title: 'Era Precolombina',
    period: '12,000 a.C. - 1540 d.C.',
    description: 'Los primeros habitantes de Chile y sus civilizaciones',
    keyPoints: [
      'El pueblo mapuche dominó el centro y sur de Chile',
      'Los incas controlaron brevemente el norte de Chile en el siglo XV',
      'Sociedades cazadoras-recolectoras en la Patagonia y el norte',
      'Técnicas agrícolas avanzadas en el desierto de Atacama',
      'Ricas tradiciones orales y creencias espirituales'
    ],
    keyFigures: ['Lautaro', 'Caupolicán', 'Galvarino'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'spanish-conquest',
    title: 'Conquista Española y Período Colonial',
    period: '1540 - 1810',
    description: 'Colonización española y establecimiento de la sociedad colonial',
    keyPoints: [
      'Pedro de Valdivia fundó Santiago en 1541',
      'Feroz resistencia de los guerreros mapuches en la Guerra de Arauco',
      'Establecimiento del sistema de encomiendas',
      'Crecimiento de la población mestiza',
      'Desarrollo de la minería y agricultura'
    ],
    keyFigures: ['Pedro de Valdivia', 'Inés de Suárez', 'García Hurtado de Mendoza'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'independence',
    title: 'Movimiento de Independencia',
    period: '1810 - 1823',
    description: 'La lucha por la independencia del dominio español',
    keyPoints: [
      'Primera Junta Nacional de Gobierno formada en 1810',
      'Período de la Patria Vieja 1810-1814',
      'Batalla de Rancagua y reconquista española',
      'San Martín y O\'Higgins cruzaron los Andes',
      'Batalla de Chacabuco aseguró la independencia en 1817'
    ],
    keyFigures: ['Bernardo O\'Higgins', 'José Miguel Carrera', 'José de San Martín'],
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'early-republic',
    title: 'República Temprana',
    period: '1823 - 1891',
    description: 'Formación del estado chileno y expansión territorial',
    keyPoints: [
      'República Conservadora estableció gobierno estable',
      'Guerra del Pacífico (1879-1884) expandió el territorio',
      'Auge del salitre trajo prosperidad económica',
      'Aumentó la inmigración desde Europa',
      'Sistema parlamentario se desarrolló gradualmente'
    ],
    keyFigures: ['Diego Portales', 'Manuel Bulnes', 'José Manuel Balmaceda'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'parliamentary',
    title: 'República Parlamentaria',
    period: '1891 - 1925',
    description: 'Sistema parlamentario y cambios sociales',
    keyPoints: [
      'Guerra Civil de 1891 estableció sistema parlamentario',
      'Riqueza del salitre financió obras públicas',
      'Crecimiento de la clase media y movimiento obrero',
      'Surgieron movimientos de derechos de la mujer',
      'Problemas sociales por rápida urbanización'
    ],
    keyFigures: ['Arturo Alessandri', 'Luis Emilio Recabarren', 'Gabriela Mistral'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'presidential',
    title: 'República Presidencial',
    period: '1925 - 1973',
    description: 'Retorno al sistema presidencial y polarización política',
    keyPoints: [
      'Nueva constitución fortaleció la presidencia',
      'Gran Depresión impactó severamente la economía',
      'Industrialización por sustitución de importaciones',
      'Reforma agraria y programas sociales',
      'Polarización política aumentó en los años 1960'
    ],
    keyFigures: ['Carlos Ibáñez del Campo', 'Eduardo Frei Montalva', 'Salvador Allende'],
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'military-government',
    title: 'Gobierno Militar',
    period: '1973 - 1990',
    description: 'Golpe militar y régimen autoritario',
    keyPoints: [
      'Golpe militar derrocó al gobierno de Allende',
      'Implementación de políticas económicas de libre mercado',
      'Graves violaciones a los derechos humanos',
      'Nueva constitución adoptada en 1980',
      'Crisis económica de principios de 1980 llevó a protestas'
    ],
    keyFigures: ['Augusto Pinochet', 'Economistas Chicago Boys', 'Vicaría de la Solidaridad'],
    color: 'from-gray-600 to-gray-700'
  },
  {
    id: 'return-democracy',
    title: 'Retorno a la Democracia',
    period: '1990 - Presente',
    description: 'Transición democrática y Chile moderno',
    keyPoints: [
      'Transición pacífica a la democracia en 1990',
      'Comisión de Verdad y Reconciliación',
      'Crecimiento económico y desarrollo continuo',
      'Movimientos sociales y debates constitucionales',
      'Chile se convierte en líder regional en muchas áreas'
    ],
    keyFigures: ['Patricio Aylwin', 'Michelle Bachelet', 'Sebastián Piñera'],
    color: 'from-teal-500 to-teal-600'
  }
];

export const culturalSections = [
  {
    id: 'idioms',
    title: 'Modismos y Expresiones Chilenas',
    icon: Users,
    color: 'from-yellow-500 to-yellow-600',
    content: [
      {
        phrase: "¡Bacán!",
        meaning: "¡Genial! ¡Increíble!",
        usage: "Se usa para expresar aprobación o emoción"
      },
      {
        phrase: "Al tiro",
        meaning: "De inmediato, ahora mismo",
        usage: "Cuando quieres que algo se haga rápidamente"
      },
      {
        phrase: "Cachai",
        meaning: "¿Entiendes? ¿Comprendes?",
        usage: "Se usa para verificar si alguien entiende"
      },
      {
        phrase: "Fome",
        meaning: "Aburrido",
        usage: "Describe algo sin interés"
      },
      {
        phrase: "Pololo/Polola",
        meaning: "Novio/Novia",
        usage: "Forma chilena de referirse a parejas románticas"
      },
      {
        phrase: "Carrete",
        meaning: "Fiesta",
        usage: "Una reunión social o celebración"
      }
    ]
  },
  {
    id: 'folklore',
    title: 'Folclore y Tradiciones Chilenas',
    icon: Flag,
    color: 'from-red-500 to-red-600',
    content: [
      {
        name: "Cueca",
        description: "Danza nacional de Chile, representa el cortejo entre gallo y gallina",
        significance: "Se baila durante las Fiestas Patrias (celebraciones de Independencia)"
      },
      {
        name: "La Pincoya",
        description: "Sirena mítica de Chiloé que trae buena fortuna a los pescadores",
        significance: "Símbolo de abundancia marina y protección"
      },
      {
        name: "El Trauco",
        description: "Enano del bosque de la mitología de Chiloé que seduce a mujeres jóvenes",
        significance: "Representa las fuerzas misteriosas de la naturaleza"
      },
      {
        name: "Empanadas",
        description: "Pasteles tradicionales rellenos de carne, cebolla y especias",
        significance: "Comida esencial para las celebraciones del Día de la Independencia"
      },
      {
        name: "Rodeo",
        description: "Deporte tradicional que involucra jinetes y ganado",
        significance: "Celebra la cultura del cowboy chileno (huaso)"
      }
    ]
  },
  {
    id: 'geography',
    title: 'Geografía y Regiones',
    icon: MapPin,
    color: 'from-green-500 to-green-600',
    content: {
      regions: [
        { name: "Arica y Parinacota", capital: "Arica", features: ["Desierto de Atacama", "Parque Nacional Lauca"] },
        { name: "Tarapacá", capital: "Iquique", features: ["Pueblos fantasma del salitre", "Oasis de Pica"] },
        { name: "Antofagasta", capital: "Antofagasta", features: ["Minería del cobre", "Valle de la Luna"] },
        { name: "Atacama", capital: "Copiapó", features: ["Desierto más árido", "Desierto florido"] },
        { name: "Coquimbo", capital: "La Serena", features: ["Producción de pisco", "Valle del Elqui"] },
        { name: "Valparaíso", capital: "Valparaíso", features: ["Puerto histórico", "Valles vitivinícolas"] },
        { name: "Metropolitana", capital: "Santiago", features: ["Capital nacional", "Precordillera andina"] },
        { name: "O'Higgins", capital: "Rancagua", features: ["Minería del cobre", "Agricultura"] }
      ],
      naturalWonders: [
        "Parque Nacional Torres del Paine",
        "Desierto de Atacama",
        "Isla de Pascua (Rapa Nui)",
        "Cuevas de Mármol de la Patagonia",
        "Valle del Elqui",
        "Isla de Chiloé",
        "Valle de la Luna",
        "Parque Pumalín"
      ]
    }
  },
  {
    id: 'resources',
    title: 'Recursos Naturales',
    icon: Mountain,
    color: 'from-amber-500 to-amber-600',
    content: [
      {
        resource: "Cobre",
        description: "Chile es el mayor productor mundial de cobre",
        locations: ["Chuquicamata", "El Teniente", "Escondida"]
      },
      {
        resource: "Litio",
        description: "Segundas reservas de litio más grandes del mundo",
        locations: ["Salar de Atacama", "Región del Salar de Uyuni"]
      },
      {
        resource: "Vino",
        description: "Producción vitivinícola de renombre mundial",
        locations: ["Valle del Maipo", "Valle de Colchagua", "Valle de Casablanca"]
      },
      {
        resource: "Salmón",
        description: "Importante industria de acuicultura",
        locations: ["Sur de Chile", "Fiordos patagónicos"]
      },
      {
        resource: "Forestal",
        description: "Plantaciones de pino y eucalipto",
        locations: ["Regiones central y sur"]
      }
    ]
  },
  {
    id: 'symbols',
    title: 'Símbolos Nacionales',
    icon: TreePine,
    color: 'from-emerald-500 to-emerald-600',
    content: {
      animals: [
        {
          name: "Huemul",
          description: "Ciervo andino en peligro de extinción, animal nacional",
          habitat: "Andes patagónicos"
        },
        {
          name: "Cóndor",
          description: "Cóndor andino, ave voladora más grande del mundo",
          significance: "Símbolo de libertad y poder"
        },
        {
          name: "Chinchilla",
          description: "Roedor nativo apreciado por su pelaje",
          conservation: "Casi extinto en estado silvestre"
        }
      ],
      trees: [
        {
          name: "Araucaria (Pehuén)",
          description: "Árbol conífero ancestral, fósil viviente",
          location: "Andes del sur y cordilleras costeras"
        },
        {
          name: "Alerce",
          description: "Árbol longevo, puede vivir más de 3,000 años",
          status: "Especie protegida"
        },
        {
          name: "Copihue",
          description: "Flor nacional, enredadera con flores rojas en forma de campana",
          symbolism: "Orgullo e identidad nacional"
        }
      ]
    }
  },
  {
    id: 'currency',
    title: 'Historia de la Moneda',
    icon: Coins,
    color: 'from-blue-500 to-blue-600',
    content: [
      {
        period: "Era Colonial (1540-1817)",
        currency: "Real Español",
        description: "Sistema monetario colonial español usado en todo el imperio"
      },
      {
        period: "República Temprana (1817-1851)",
        currency: "Real Chileno",
        description: "Primera moneda chilena independiente, se adoptó sistema decimal"
      },
      {
        period: "Mediados del Siglo XIX (1851-1925)",
        currency: "Peso Chileno (Antiguo)",
        description: "Reemplazó al real, respaldado por plata y luego patrón oro"
      },
      {
        period: "Siglo XX (1925-1975)",
        currency: "Escudo",
        description: "Reemplazó al peso durante reforma monetaria, subdividido en centésimos"
      },
      {
        period: "Era Moderna (1975-Presente)",
        currency: "Peso Chileno (Nuevo)",
        description: "Moneda actual, tipo de cambio flotante desde 1999, símbolo: $"
      }
    ]
  }
];

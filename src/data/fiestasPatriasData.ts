export type FiestaItem = {
  name: string;
  description: string;
  detail: string;
  emoji: string;
};

export const foods: FiestaItem[] = [
  {
    name: 'Empanada de pino',
    description: 'La infaltable de la mesa dieciochera.',
    detail: 'Masa horneada rellena con carne, cebolla, huevo duro, aceituna y, según la receta familiar, pasas.',
    emoji: '🥟',
  },
  {
    name: 'Anticucho',
    description: 'Brochetas cocinadas a la parrilla.',
    detail: 'Alternan carne, cebolla y pimentón. En muchas fondas conviven recetas tradicionales y versiones vegetarianas.',
    emoji: '🍢',
  },
  {
    name: 'Choripán',
    description: 'Un clásico rápido de parrilla.',
    detail: 'Longaniza o chorizo servido en pan, normalmente acompañado de pebre chileno.',
    emoji: '🥖',
  },
  {
    name: 'Mote con huesillos',
    description: 'El refresco dulce más tradicional.',
    detail: 'Trigo mote cocido con duraznos deshidratados en un jugo especiado y acaramelado.',
    emoji: '🍑',
  },
  {
    name: 'Sopaipillas',
    description: 'Masa frita, simple y compartida.',
    detail: 'Se preparan con harina y zapallo, y se comen con pebre o en versión dulce.',
    emoji: '🫓',
  },
  {
    name: 'Pebre',
    description: 'El acompañamiento que despierta la mesa.',
    detail: 'Mezcla fresca de tomate, cebolla, cilantro, ají, aceite y un toque ácido.',
    emoji: '🌶️',
  },
];

export const dances: FiestaItem[] = [
  {
    name: 'Cueca central',
    description: 'La pareja representa un juego de encuentro y conquista.',
    detail: 'Se baila con pañuelo, desplazamientos circulares, medias lunas, escobillado y zapateo.',
    emoji: '💃',
  },
  {
    name: 'Cueca nortina',
    description: 'Una variante ligada a las bandas de bronce del norte.',
    detail: 'Suele ser instrumental, con un carácter festivo y pasos influenciados por el mundo andino.',
    emoji: '🎺',
  },
  {
    name: 'Cueca chilota',
    description: 'Versión enérgica del archipiélago de Chiloé.',
    detail: 'Destaca por su zapateo vigoroso y una interpretación marcada por el clima y la cultura isleña.',
    emoji: '🪗',
  },
  {
    name: 'Sajuriana',
    description: 'Danza de pareja presente en el folclore de la zona central.',
    detail: 'Comparte protagonismo con la cueca en presentaciones y encuentros de música tradicional.',
    emoji: '🎶',
  },
];

export const clothing: FiestaItem[] = [
  {
    name: 'Huaso de fiesta',
    description: 'Elegancia campesina de la zona central.',
    detail: 'Sombrero corralero, chaqueta corta, faja, pantalón oscuro, botas o botines y manta o chamanto.',
    emoji: '🤠',
  },
  {
    name: 'Vestido de huasa',
    description: 'Color y movimiento para la cueca.',
    detail: 'Vestido floreado de falda amplia, con vuelos o encajes, acompañado de zapatos firmes para zapatear.',
    emoji: '👗',
  },
  {
    name: 'Vestimenta nortina',
    description: 'Colores intensos y herencia andina.',
    detail: 'Faldas, mantas, sombreros y tejidos de colores vivos varían según la danza y la localidad.',
    emoji: '🧶',
  },
  {
    name: 'Conjunto chilote',
    description: 'Abrigo y sencillez para el clima austral.',
    detail: 'Predominan prendas de lana; en el baile se usan polleras, chalecos, gorros y calzado resistente.',
    emoji: '🧥',
  },
];

export const traditionalGames: FiestaItem[] = [
  {
    name: 'Rayuela',
    description: 'Lanzar tejos y acercarse a la línea.',
    detail: 'Gana precisión: el objetivo es hacer caer el tejo sobre o lo más cerca posible de la lienza.',
    emoji: '🎯',
  },
  {
    name: 'Emboque',
    description: 'Coordinación en una sola mano.',
    detail: 'Se impulsa una pieza de madera unida por un cordel para encajarla en el mango.',
    emoji: '🪀',
  },
  {
    name: 'Trompo',
    description: 'Destreza, cuerda y equilibrio.',
    detail: 'El reto es lanzarlo para que gire; las competencias premian duración y trucos.',
    emoji: '🌀',
  },
  {
    name: 'Carrera en sacos',
    description: 'Una carrera familiar llena de saltos.',
    detail: 'Cada participante avanza dentro de un saco hasta la meta, idealmente en terreno despejado.',
    emoji: '🏁',
  },
  {
    name: 'Volantín',
    description: 'Colores que anuncian la primavera.',
    detail: 'Se eleva en espacios abiertos, lejos del tendido eléctrico y siempre sin hilo curado.',
    emoji: '🪁',
  },
  {
    name: 'Palo ensebado',
    description: 'Un desafío tradicional de equilibrio y fuerza.',
    detail: 'El objetivo es subir por un poste resbaladizo para alcanzar el premio de la parte superior.',
    emoji: '🧗',
  },
];

export const traditions = [
  {
    date: '18 SEP',
    title: 'Primera Junta de Gobierno',
    text: 'La fecha recuerda la formación de la Primera Junta Nacional de Gobierno en 1810, un hito del proceso de independencia.',
  },
  {
    date: 'LA FONDA',
    title: 'Encuentro y celebración',
    text: 'Ramadas y fondas reúnen música, baile, gastronomía y juegos. Son el corazón comunitario de la celebración.',
  },
  {
    date: 'LA CUECA',
    title: 'Pañuelo al viento',
    text: 'En plazas, escuelas y fondas, parejas de todas las edades comparten la danza nacional y sus variantes regionales.',
  },
  {
    date: '19 SEP',
    title: 'Glorias del Ejército',
    text: 'La celebración continúa con una jornada cívica conmemorada tradicionalmente mediante la Parada Militar.',
  },
];

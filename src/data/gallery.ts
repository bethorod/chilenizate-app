export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  year?: string;
  imageUrl: string; // External source URL
  sourceName: string;
  sourceUrl: string;
}

export const historyGallery: GalleryItem[] = [
  {
    id: 'maipo-embrace',
    title: 'Independencia y símbolos',
    description: 'Iconografía patriótica y símbolos nacionales que representaron la independencia de Chile.',
    year: '1810-1818',
    imageUrl: 'https://source.unsplash.com/1200x800/?chile,flag',
    sourceName: 'Unsplash (consulta: chile,flag)',
    sourceUrl: 'https://unsplash.com/',
  },
  {
    id: 'valparaiso',
    title: 'Puerto de Valparaíso',
    description: 'Valparaíso, puerto histórico y patrimonio de la humanidad, clave en el comercio del Pacífico.',
    imageUrl: 'https://source.unsplash.com/1200x800/?valparaiso,chile',
    sourceName: 'Unsplash (consulta: valparaiso,chile)',
    sourceUrl: 'https://unsplash.com/',
  },
  {
    id: 'atacama',
    title: 'Desierto de Atacama',
    description: 'Paisaje del desierto más árido del mundo, territorio clave para minería y astronomía.',
    imageUrl: 'https://source.unsplash.com/1200x800/?atacama,desert,chile',
    sourceName: 'Unsplash (consulta: atacama,desert,chile)',
    sourceUrl: 'https://unsplash.com/',
  },
  {
    id: 'chuquicamata',
    title: 'Minería del cobre',
    description: 'Chuquicamata y la gran minería del cobre, eje económico e identitario del siglo XX y XXI.',
    imageUrl: 'https://source.unsplash.com/1200x800/?mine,copper,chile',
    sourceName: 'Unsplash (consulta: mine,copper,chile)',
    sourceUrl: 'https://unsplash.com/',
  },
  {
    id: 'la-moneda',
    title: 'Palacio de La Moneda',
    description: 'Sede del Poder Ejecutivo y símbolo del sistema político chileno.',
    imageUrl: 'https://source.unsplash.com/1200x800/?la%20moneda,santiago,chile',
    sourceName: 'Unsplash (consulta: la moneda,santiago,chile)',
    sourceUrl: 'https://unsplash.com/',
  },
  {
    id: 'torres-del-paine',
    title: 'Torres del Paine',
    description: 'Patrimonio natural y parte esencial de la identidad geográfica y cultural de Chile.',
    imageUrl: 'https://source.unsplash.com/1200x800/?torres%20del%20paine,chile',
    sourceName: 'Unsplash (consulta: torres del paine,chile)',
    sourceUrl: 'https://unsplash.com/',
  },
]

export interface SectionImage {
  title: string;
  imageUrl: string;
  sourceName: string;
  sourceUrl: string;
}

export const culturalSectionImages: Record<string, SectionImage[]> = {
  laws_institutions: [
    {
      title: 'Congreso Nacional de Chile',
      imageUrl: 'https://source.unsplash.com/800x600/?congress,santiago,chile',
      sourceName: 'Unsplash (consulta: congress,santiago,chile)',
      sourceUrl: 'https://unsplash.com/',
    },
    {
      title: 'Contraloría General y edificios públicos',
      imageUrl: 'https://source.unsplash.com/800x600/?public,building,santiago',
      sourceName: 'Unsplash (consulta: public,building,santiago)',
      sourceUrl: 'https://unsplash.com/',
    },
  ],
  political_system: [
    {
      title: 'Palacio de La Moneda',
      imageUrl: 'https://source.unsplash.com/800x600/?la%20moneda,chile',
      sourceName: 'Unsplash (consulta: la moneda,chile)',
      sourceUrl: 'https://unsplash.com/',
    },
  ],
  mining_history: [
    {
      title: 'Minería del cobre en el norte',
      imageUrl: 'https://source.unsplash.com/800x600/?mine,copper,chile',
      sourceName: 'Unsplash (consulta: mine,copper,chile)',
      sourceUrl: 'https://unsplash.com/',
    },
    {
      title: 'Desierto de Atacama',
      imageUrl: 'https://source.unsplash.com/800x600/?atacama,desert',
      sourceName: 'Unsplash (consulta: atacama,desert)',
      sourceUrl: 'https://unsplash.com/',
    },
  ],
  folklore: [
    {
      title: 'Cueca chilena',
      imageUrl: 'https://source.unsplash.com/800x600/?cueca,chile',
      sourceName: 'Unsplash (consulta: cueca,chile)',
      sourceUrl: 'https://unsplash.com/',
    },
  ],
};

export const historicalPeriodImages: Record<string, SectionImage[]> = {
  independence: [
    {
      title: 'Símbolos de Independencia',
      imageUrl: 'https://source.unsplash.com/800x600/?chile,flag',
      sourceName: 'Unsplash (consulta: chile,flag)',
      sourceUrl: 'https://unsplash.com/',
    },
  ],
  'pre-columbian': [
    {
      title: 'Patagonia y culturas originarias',
      imageUrl: 'https://source.unsplash.com/800x600/?patagonia,chile',
      sourceName: 'Unsplash (consulta: patagonia,chile)',
      sourceUrl: 'https://unsplash.com/',
    },
  ],
  'spanish-conquest': [
    {
      title: 'Arquitectura colonial',
      imageUrl: 'https://source.unsplash.com/800x600/?colonial,architecture,chile',
      sourceName: 'Unsplash (consulta: colonial,architecture,chile)',
      sourceUrl: 'https://unsplash.com/',
    },
  ],
  'return-democracy': [
    {
      title: 'Santiago moderno y democracia',
      imageUrl: 'https://source.unsplash.com/800x600/?santiago,chile,city',
      sourceName: 'Unsplash (consulta: santiago,chile,city)',
      sourceUrl: 'https://unsplash.com/',
    },
  ],
};

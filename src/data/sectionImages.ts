export interface SectionImage {
  title: string;
  imageUrl: string;
  sourceName: string;
  sourceUrl: string;
}

export const culturalSectionImages: Record<string, SectionImage[]> = {
  laws_institutions: [
    {
      title: 'Edificio del Congreso Nacional (Valparaíso)',
      imageUrl: '/images/history/congreso-valparaiso.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Edificio_del_Congreso_Nacional_de_Chile_(Valpara%C3%ADso).jpg',
    },
    {
      title: 'Palacio de La Moneda',
      imageUrl: '/images/history/la-moneda.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:La_Moneda_Palace_Santiago_Chile.jpg',
    },
  ],
  political_system: [
    {
      title: 'Palacio de La Moneda',
      imageUrl: '/images/history/la-moneda.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:La_Moneda_Palace_Santiago_Chile.jpg',
    },
  ],
  mining_history: [
    {
      title: 'Mina de Chuquicamata',
      imageUrl: '/images/history/chuquicamata.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chuquicamata_panorama.jpg',
    },
    {
      title: 'Laguna Tebinquinche (Atacama)',
      imageUrl: '/images/history/atacama-laguna.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Laguna_Tebinquinche,_desierto_de_Atacama,_Chile,_2016-02-06,_DD_30.jpg',
    },
  ],
  folklore: [
    // Pendiente de fuente estable con licencia: por ahora no se muestra si no está disponible
  ],
};

export const historicalPeriodImages: Record<string, SectionImage[]> = {
  // Podemos ir agregando imágenes por período con fuentes de Commons
};

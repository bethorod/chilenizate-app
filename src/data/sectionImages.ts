export interface SectionImage {
  title: string;
  imageUrl: string;
  sourceName?: string;
  sourceUrl?: string;
  kind?: 'photo' | 'illustration';
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
    {
      title: 'Una fonda durante las Fiestas Patrias',
      imageUrl: '/images/fiestas/fonda-hero.png',
      kind: 'illustration',
    },
  ],
  geography: [
    {
      title: 'Torres del Paine, Patagonia chilena',
      imageUrl: '/images/history/torres-paine.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cuernos_del_Paine,_Parque_Nacional_Torres_del_Paine,_Chile10.jpg',
    },
    {
      title: 'Laguna Tebinquinche, desierto de Atacama',
      imageUrl: '/images/history/atacama-laguna.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Laguna_Tebinquinche,_desierto_de_Atacama,_Chile,_2016-02-06,_DD_30.jpg',
    },
  ],
  resources: [
    {
      title: 'Mina de Chuquicamata',
      imageUrl: '/images/history/chuquicamata.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chuquicamata_panorama.jpg',
    },
  ],
  symbols: [
    {
      title: 'Huemul, cóndor y copihue',
      imageUrl: '/images/symbols/naturaleza-chilena.jpg',
      kind: 'illustration',
    },
  ],
};

export const historicalPeriodImages: Record<string, SectionImage[]> = {
  'pre-columbian': [
    {
      title: 'Pueblos y territorios antes de la llegada española',
      imageUrl: '/images/history/generated/pueblos-originarios.jpg',
      kind: 'illustration',
    },
  ],
  independence: [
    {
      title: 'Primera Junta Nacional de Gobierno, 1810',
      imageUrl: '/images/history/generated/primera-junta-1810.jpg',
      kind: 'illustration',
    },
  ],
  'early-republic': [
    {
      title: 'Puerto de Valparaíso y expansión comercial',
      imageUrl: '/images/history/valparaiso-port.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Valparaiso_Port_(Chile)_-_new.jpg',
    },
  ],
  parliamentary: [
    {
      title: 'Valparaíso, ciudad portuaria y política',
      imageUrl: '/images/history/valparaiso-port.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Valparaiso_Port_(Chile)_-_new.jpg',
    },
  ],
  presidential: [
    {
      title: 'Palacio de La Moneda',
      imageUrl: '/images/history/la-moneda.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:La_Moneda_Palace_Santiago_Chile.jpg',
    },
    {
      title: 'Industrialización y minería en Chuquicamata',
      imageUrl: '/images/history/chuquicamata.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chuquicamata_panorama.jpg',
    },
  ],
  'return-democracy': [
    {
      title: 'Congreso Nacional en Valparaíso',
      imageUrl: '/images/history/congreso-valparaiso.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Edificio_del_Congreso_Nacional_de_Chile_(Valpara%C3%ADso).jpg',
    },
    {
      title: 'Palacio de La Moneda en democracia',
      imageUrl: '/images/history/la-moneda.jpg',
      sourceName: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:La_Moneda_Palace_Santiago_Chile.jpg',
    },
  ],
};

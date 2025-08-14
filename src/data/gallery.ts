export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  year?: string;
  imageUrl: string; // Local file served from public/
  sourceName: string;
  sourceUrl: string;
}

export const historyGallery: GalleryItem[] = [
  {
    id: 'la-moneda',
    title: 'Palacio de La Moneda',
    description: 'Sede del Poder Ejecutivo y símbolo del sistema político chileno.',
    imageUrl: '/images/history/la-moneda.jpg',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:La_Moneda_Palace_Santiago_Chile.jpg',
  },
  {
    id: 'congreso-valparaiso',
    title: 'Congreso Nacional (Valparaíso)',
    description: 'Institución clave del Poder Legislativo en Chile.',
    imageUrl: '/images/history/congreso-valparaiso.jpg',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Edificio_del_Congreso_Nacional_de_Chile_(Valpara%C3%ADso).jpg',
  },
  {
    id: 'chuquicamata',
    title: 'Minería del cobre (Chuquicamata)',
    description: 'Emblema de la gran minería del cobre, eje de la economía chilena.',
    imageUrl: '/images/history/chuquicamata.jpg',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chuquicamata_panorama.jpg',
  },
  {
    id: 'atacama',
    title: 'Laguna Tebinquinche (Atacama)',
    description: 'Paisaje del desierto de Atacama, patrimonio natural y científico.',
    imageUrl: '/images/history/atacama-laguna.jpg',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Laguna_Tebinquinche,_desierto_de_Atacama,_Chile,_2016-02-06,_DD_30.jpg',
  },
  {
    id: 'valparaiso',
    title: 'Puerto de Valparaíso',
    description: 'Puerto histórico y patrimonio clave en el comercio del Pacífico.',
    imageUrl: '/images/history/valparaiso-port.jpg',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Valparaiso_Port_(Chile)_-_new.jpg',
  },
  {
    id: 'torres-del-paine',
    title: 'Torres del Paine',
    description: 'Ícono del sur de Chile y su biodiversidad.',
    imageUrl: '/images/history/torres-paine.jpg',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cuernos_del_Paine,_Parque_Nacional_Torres_del_Paine,_Chile10.jpg',
  },
];

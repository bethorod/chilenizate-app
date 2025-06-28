import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  es: {
    // Header
    'header.title': 'Historia y Cultura Chilena',
    'header.takeQuiz': 'Hacer Quiz',
    'header.back': 'Volver',
    
    // Main content
    'main.title': 'Descubre Chile: Historia, Cultura y Geografía',
    'main.subtitle': 'Explora el rico tapiz de la civilización chilena, desde la historia antigua hasta la cultura moderna, geografía y tradiciones',
    'main.testKnowledge': 'Pon a Prueba tu Conocimiento',
    'main.learnHistory': 'Aprende Historia Chilena',
    'main.interactiveWay': 'De Forma Interactiva',
    'main.discover': 'Descubre la fascinante historia de Chile a través de lecciones interactivas, cuestionarios entretenidos y herramientas de aprendizaje personalizadas. Desde civilizaciones antiguas hasta la democracia moderna.',
    'main.startLearning': 'Comenzar Aprendizaje',
    'main.takeQuiz': 'Hacer Quiz',
    
    // Navigation
    'nav.history': 'Historia',
    'nav.quiz': 'Quiz',
    'nav.errorBin': 'Bin de Errores',
    
    // Features
    'features.title': 'Todo lo que Necesitas para Aprender',
    'features.subtitle': 'Herramientas integrales diseñadas para hacer la historia chilena atractiva y memorable',
    'features.exploreHistory': 'Explorar Historia',
    'features.exploreHistoryDesc': 'Descubre la rica cronología histórica de Chile desde tiempos precolombinos hasta hoy',
    'features.quiz30': 'Quiz de 30 Preguntas',
    'features.quiz30Desc': 'Pon a prueba tu conocimiento con nuestro cuestionario integral de historia chilena',
    'features.errorBin': 'Bin de Errores',
    'features.errorBinDesc': 'Revisa y vuelve a intentar preguntas que respondiste mal para mejorar tu comprensión',
    
    // Stats
    'stats.regionsCovered': 'Regiones Cubiertas',
    'stats.historicalPeriods': 'Períodos Históricos',
    'stats.keyFigures': 'Figuras Clave',
    
    // Tabs
    'tabs.history': 'Cronología Histórica',
    'tabs.culture': 'Cultura y Geografía',
    
    // Sections
    'sections.keyEvents': 'Eventos y Desarrollos Clave',
    'sections.keyFigures': 'Figuras Clave',
    'sections.nationalAnimals': 'Animales Nacionales',
    'sections.nationalTrees': 'Árboles y Flora Nacional',
    'sections.regionsOfChile': 'Regiones de Chile',
    'sections.naturalWonders': 'Maravillas Naturales',
    'sections.capital': 'Capital',
    
    // Language selector
    'language.spanish': 'Español',
    'language.portuguese': 'Português'
  },
  pt: {
    // Header
    'header.title': 'História e Cultura Chilena',
    'header.takeQuiz': 'Fazer Quiz',
    'header.back': 'Voltar',
    
    // Main content
    'main.title': 'Descubra o Chile: História, Cultura e Geografia',
    'main.subtitle': 'Explore a rica tapeçaria da civilização chilena, desde a história antiga até a cultura moderna, geografia e tradições',
    'main.testKnowledge': 'Teste Seu Conhecimento',
    'main.learnHistory': 'Aprenda História Chilena',
    'main.interactiveWay': 'De Forma Interativa',
    'main.discover': 'Descubra a fascinante história do Chile através de lições interativas, questionários envolventes e ferramentas de aprendizagem personalizadas. Desde civilizações antigas até a democracia moderna.',
    'main.startLearning': 'Começar Aprendizagem',
    'main.takeQuiz': 'Fazer Quiz',
    
    // Navigation
    'nav.history': 'História',
    'nav.quiz': 'Quiz',
    'nav.errorBin': 'Lixeira de Erros',
    
    // Features
    'features.title': 'Tudo o que Você Precisa para Aprender',
    'features.subtitle': 'Ferramentas abrangentes projetadas para tornar a história chilena envolvente e memorável',
    'features.exploreHistory': 'Explorar História',
    'features.exploreHistoryDesc': 'Descubra a rica cronologia histórica do Chile desde os tempos pré-colombianos até hoje',
    'features.quiz30': 'Quiz de 30 Perguntas',
    'features.quiz30Desc': 'Teste seu conhecimento com nosso questionário abrangente de história chilena',
    'features.errorBin': 'Lixeira de Erros',
    'features.errorBinDesc': 'Revise e tente novamente perguntas que você errou para melhorar sua compreensão',
    
    // Stats
    'stats.regionsCovered': 'Regiões Cobertas',
    'stats.historicalPeriods': 'Períodos Históricos',
    'stats.keyFigures': 'Figuras Principais',
    
    // Tabs
    'tabs.history': 'Cronologia Histórica',
    'tabs.culture': 'Cultura e Geografia',
    
    // Sections
    'sections.keyEvents': 'Eventos e Desenvolvimentos Principais',
    'sections.keyFigures': 'Figuras Principais',
    'sections.nationalAnimals': 'Animais Nacionais',
    'sections.nationalTrees': 'Árvores e Flora Nacional',
    'sections.regionsOfChile': 'Regiões do Chile',
    'sections.naturalWonders': 'Maravilhas Naturais',
    'sections.capital': 'Capital',
    
    // Language selector
    'language.spanish': 'Español',
    'language.portuguese': 'Português'
  },
  en: {
    // Header
    'header.title': 'Chilean History and Culture',
    'header.takeQuiz': 'Take Quiz',
    'header.back': 'Back',
    
    // Main content
    'main.title': 'Discover Chile: History, Culture and Geography',
    'main.subtitle': 'Explore the rich tapestry of Chilean civilization, from ancient history to modern culture, geography and traditions',
    'main.testKnowledge': 'Test Your Knowledge',
    'main.learnHistory': 'Learn Chilean History',
    'main.interactiveWay': 'In an Interactive Way',
    'main.discover': 'Discover the fascinating history of Chile through interactive lessons, engaging quizzes and personalized learning tools. From ancient civilizations to modern democracy.',
    'main.startLearning': 'Start Learning',
    'main.takeQuiz': 'Take Quiz',
    
    // Navigation
    'nav.history': 'History',
    'nav.quiz': 'Quiz',
    'nav.errorBin': 'Error Bin',
    
    // Features
    'features.title': 'Everything You Need to Learn',
    'features.subtitle': 'Comprehensive tools designed to make Chilean history engaging and memorable',
    'features.exploreHistory': 'Explore History',
    'features.exploreHistoryDesc': 'Discover Chile\'s rich historical timeline from pre-Columbian times to today',
    'features.quiz30': '30-Question Quiz',
    'features.quiz30Desc': 'Test your knowledge with our comprehensive Chilean history quiz',
    'features.errorBin': 'Error Bin',
    'features.errorBinDesc': 'Review and retry questions you got wrong to improve your understanding',
    
    // Stats
    'stats.regionsCovered': 'Regions Covered',
    'stats.historicalPeriods': 'Historical Periods',
    'stats.keyFigures': 'Key Figures',
    
    // Tabs
    'tabs.history': 'Historical Timeline',
    'tabs.culture': 'Culture and Geography',
    
    // Sections
    'sections.keyEvents': 'Key Events and Developments',
    'sections.keyFigures': 'Key Figures',
    'sections.nationalAnimals': 'National Animals',
    'sections.nationalTrees': 'National Trees and Flora',
    'sections.regionsOfChile': 'Regions of Chile',
    'sections.naturalWonders': 'Natural Wonders',
    'sections.capital': 'Capital',
    
    // Language selector
    'language.spanish': 'Español',
    'language.portuguese': 'Português',
    'language.english': 'English'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Spanish as default

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

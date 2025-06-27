
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'pt';

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

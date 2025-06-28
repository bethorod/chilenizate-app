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
    'language.portuguese': 'Português',
    'language.english': 'English',

    // Quiz Interface
    'quiz.title': 'Quiz de Historia Chilena',
    'quiz.home': 'Inicio',
    'quiz.results': 'Resultados del Quiz',
    'quiz.completed': '¡Quiz Completado!',
    'quiz.scored': 'Obtuviste',
    'quiz.outOf': 'de',
    'quiz.questions': 'preguntas',
    'quiz.timeSpent': 'Tiempo Transcurrido',
    'quiz.grade': 'Calificación',
    'quiz.excellent': '¡Excelente!',
    'quiz.goodJob': '¡Buen Trabajo!',
    'quiz.notBad': '¡No Está Mal!',
    'quiz.keepStudying': '¡Sigue Estudiando!',
    'quiz.retryQuiz': 'Repetir Quiz',
    'quiz.reviewMistakes': 'Revisar Errores',
    'quiz.questionNumber': 'Pregunta',
    'quiz.of': 'de',
    'quiz.difficulty': 'Dificultad',
    'quiz.easy': 'fácil',
    'quiz.medium': 'medio',
    'quiz.hard': 'difícil',
    'quiz.previous': 'Anterior',
    'quiz.showAnswer': 'Mostrar Respuesta',
    'quiz.nextQuestion': 'Siguiente Pregunta',
    'quiz.finishQuiz': 'Finalizar Quiz',

    // Quiz Questions
    'quiz.q1.question': '¿Quién fundó la ciudad de Santiago en 1541?',
    'quiz.q1.opt1': 'Pedro de Valdivia',
    'quiz.q1.opt2': 'Diego de Almagro',
    'quiz.q1.opt3': 'Francisco Pizarro',
    'quiz.q1.opt4': 'Hernán Cortés',
    'quiz.q1.explanation': 'Pedro de Valdivia fundó Santiago el 12 de febrero de 1541, nombrándola Santiago del Nuevo Extremo.',

    'quiz.q2.question': '¿Cuál era el nombre del feroz guerrero mapuche que lideró la resistencia contra los españoles?',
    'quiz.q2.opt1': 'Caupolicán',
    'quiz.q2.opt2': 'Lautaro',
    'quiz.q2.opt3': 'Galvarino',
    'quiz.q2.opt4': 'Colocolo',
    'quiz.q2.explanation': 'Lautaro fue un joven guerrero mapuche que aprendió las tácticas militares españolas y lideró campañas exitosas contra los conquistadores.',

    'quiz.q3.question': '¿En qué año Chile declaró su independencia?',
    'quiz.q3.opt1': '1810',
    'quiz.q3.opt2': '1817',
    'quiz.q3.opt3': '1818',
    'quiz.q3.opt4': '1820',
    'quiz.q3.explanation': 'Chile declaró formalmente su independencia el 12 de febrero de 1818, aunque el proceso comenzó en 1810.',

    'quiz.q4.question': '¿Quién es conocido como el "Padre de la Independencia Chilena"?',
    'quiz.q4.opt1': 'José Miguel Carrera',
    'quiz.q4.opt2': 'Bernardo O\'Higgins',
    'quiz.q4.opt3': 'José de San Martín',
    'quiz.q4.opt4': 'Manuel Rodríguez',
    'quiz.q4.explanation': 'Bernardo O\'Higgins es considerado el Padre de la Independencia Chilena y sirvió como el primer Director Supremo.',

    'quiz.q5.question': 'La Guerra del Pacífico (1879-1884) fue luchada entre Chile y ¿qué países?',
    'quiz.q5.opt1': 'Argentina y Bolivia',
    'quiz.q5.opt2': 'Perú y Bolivia',
    'quiz.q5.opt3': 'Perú y Ecuador',
    'quiz.q5.opt4': 'Bolivia y Brasil',
    'quiz.q5.explanation': 'La Guerra del Pacífico fue luchada entre Chile contra Perú y Bolivia, resultando en ganancias territoriales chilenas.',

    'quiz.q6.question': '¿Qué poeta chileno ganó el Premio Nobel de Literatura en 1945?',
    'quiz.q6.opt1': 'Pablo Neruda',
    'quiz.q6.opt2': 'Gabriela Mistral',
    'quiz.q6.opt3': 'Vicente Huidobro',
    'quiz.q6.opt4': 'Nicanor Parra',
    'quiz.q6.explanation': 'Gabriela Mistral fue la primera mujer latinoamericana en ganar el Premio Nobel de Literatura en 1945.',

    'quiz.q7.question': '¿Cuál fue la principal exportación que hizo rico a Chile a finales del siglo XIX?',
    'quiz.q7.opt1': 'Cobre',
    'quiz.q7.opt2': 'Nitratos',
    'quiz.q7.opt3': 'Plata',
    'quiz.q7.opt4': 'Trigo',
    'quiz.q7.explanation': 'Los nitratos del desierto del norte hicieron a Chile extremadamente rico durante finales del siglo XIX y principios del XX.',

    'quiz.q8.question': '¿Quién fue la primera mujer presidenta de Chile?',
    'quiz.q8.opt1': 'Soledad Alvear',
    'quiz.q8.opt2': 'Michelle Bachelet',
    'quiz.q8.opt3': 'Evelyn Matthei',
    'quiz.q8.opt4': 'Carolina Tohá',
    'quiz.q8.explanation': 'Michelle Bachelet sirvió como la primera presidenta de Chile de 2006-2010 y nuevamente de 2014-2018.',

    'quiz.q9.question': 'El golpe militar que derrocó a Salvador Allende ocurrió en ¿qué fecha?',
    'quiz.q9.opt1': '11 de septiembre de 1973',
    'quiz.q9.opt2': '4 de septiembre de 1973',
    'quiz.q9.opt3': '11 de octubre de 1973',
    'quiz.q9.opt4': '11 de agosto de 1973',
    'quiz.q9.explanation': 'El golpe militar liderado por Augusto Pinochet ocurrió el 11 de septiembre de 1973.',

    'quiz.q10.question': '¿Cuál era el nombre de la coalición política de Salvador Allende?',
    'quiz.q10.opt1': 'Frente Popular',
    'quiz.q10.opt2': 'Unidad Popular',
    'quiz.q10.opt3': 'Alianza Socialista',
    'quiz.q10.opt4': 'Coalición de Izquierda',
    'quiz.q10.explanation': 'Unidad Popular fue la coalición política de izquierda de Allende que ganó las elecciones de 1970.',

    'quiz.q11.question': '¿Qué grupo indígena habitaba principalmente el centro de Chile antes de la llegada española?',
    'quiz.q11.opt1': 'Incas',
    'quiz.q11.opt2': 'Mapuches',
    'quiz.q11.opt3': 'Atacameños',
    'quiz.q11.opt4': 'Tehuelches',
    'quiz.q11.explanation': 'Los mapuches fueron el grupo indígena dominante en el centro y sur de Chile.',

    'quiz.q12.question': '¿Qué fue la política económica de los "Chicago Boys" implementada en Chile?',
    'quiz.q12.opt1': 'Sustitución de importaciones',
    'quiz.q12.opt2': 'Neoliberalismo',
    'quiz.q12.opt3': 'Socialismo de estado',
    'quiz.q12.opt4': 'Economía mixta',
    'quiz.q12.explanation': 'Los "Chicago Boys" implementaron políticas económicas neoliberales basadas en principios de libre mercado durante la era de Pinochet.',

    'quiz.q13.question': '¿Qué batalla aseguró la independencia chilena en 1817?',
    'quiz.q13.opt1': 'Batalla de Rancagua',
    'quiz.q13.opt2': 'Batalla de Chacabuco',
    'quiz.q13.opt3': 'Batalla de Maipú',
    'quiz.q13.opt4': 'Batalla de Cancha Rayada',
    'quiz.q13.explanation': 'La Batalla de Chacabuco el 12 de febrero de 1817 fue la victoria decisiva que aseguró la independencia chilena.',

    'quiz.q14.question': '¿Quién era conocido como el "Guerrillero de la Muerte" durante las guerras de independencia?',
    'quiz.q14.opt1': 'José Miguel Carrera',
    'quiz.q14.opt2': 'Manuel Rodríguez',
    'quiz.q14.opt3': 'Ramón Freire',
    'quiz.q14.opt4': 'Francisco de la Lastra',
    'quiz.q14.explanation': 'Manuel Rodríguez fue un héroe popular conocido por sus tácticas de guerra de guerrillas contra las fuerzas españolas.',

    'quiz.q15.question': '¿Cómo se llamó el período cuando las fuerzas españolas reconquistaron Chile (1814-1817)?',
    'quiz.q15.opt1': 'Reconquista',
    'quiz.q15.opt2': 'Restauración',
    'quiz.q15.opt3': 'Reconstitución',
    'quiz.q15.opt4': 'Reconvención',
    'quiz.q15.explanation': 'La Reconquista fue el período cuando las fuerzas españolas bajo Mariano Osorio reconquistaron Chile.',

    'quiz.q16.question': '¿Qué presidente chileno implementó importantes reformas agrarias en los años 1960?',
    'quiz.q16.opt1': 'Jorge Alessandri',
    'quiz.q16.opt2': 'Eduardo Frei Montalva',
    'quiz.q16.opt3': 'Carlos Ibáñez',
    'quiz.q16.opt4': 'Gabriel González Videla',
    'quiz.q16.explanation': 'Eduardo Frei Montalva implementó reformas agrarias significativas como parte de su programa "Revolución en Libertad".',

    'quiz.q17.question': '¿Cuál fue el nombre de la comisión de la verdad que investigó las violaciones a los derechos humanos?',
    'quiz.q17.opt1': 'Comisión Rettig',
    'quiz.q17.opt2': 'Comisión Valech',
    'quiz.q17.opt3': 'Comisión de la Verdad',
    'quiz.q17.opt4': 'Comisión de Reconciliación',
    'quiz.q17.explanation': 'La Comisión Rettig (oficialmente la Comisión Nacional de Verdad y Reconciliación) investigó las violaciones a los derechos humanos.',

    'quiz.q18.question': '¿Qué desierto en el norte de Chile es considerado el más seco del mundo?',
    'quiz.q18.opt1': 'Desierto de Atacama',
    'quiz.q18.opt2': 'Desierto Patagónico',
    'quiz.q18.opt3': 'Desierto de Monte',
    'quiz.q18.opt4': 'Desierto de Sechura',
    'quiz.q18.explanation': 'El Desierto de Atacama es reconocido como el desierto no polar más seco del mundo.',

    'quiz.q19.question': '¿Quién escribió el influyente ensayo político "La República Portaliana"?',
    'quiz.q19.opt1': 'Diego Portales',
    'quiz.q19.opt2': 'Andrés Bello',
    'quiz.q19.opt3': 'José Victorino Lastarria',
    'quiz.q19.opt4': 'Alberto Edwards',
    'quiz.q19.explanation': 'Alberto Edwards escribió sobre el concepto de "República Portaliana", refiriéndose al sistema político de Diego Portales.',

    'quiz.q20.question': '¿Cuál fue la causa principal de la Guerra del Pacífico?',
    'quiz.q20.opt1': 'Disputas territoriales',
    'quiz.q20.opt2': 'Depósitos de nitrato',
    'quiz.q20.opt3': 'Rutas comerciales',
    'quiz.q20.opt4': 'Diferencias religiosas',
    'quiz.q20.explanation': 'El control sobre los depósitos de nitrato en el Desierto de Atacama fue la causa principal de la Guerra del Pacífico.',

    'quiz.q21.question': '¿Qué ciudad chilena fue la capital antes de Santiago?',
    'quiz.q21.opt1': 'La Serena',
    'quiz.q21.opt2': 'Valparaíso',
    'quiz.q21.opt3': 'No hubo ninguna',
    'quiz.q21.opt4': 'Concepción',
    'quiz.q21.explanation': 'Santiago ha sido la capital de Chile desde su fundación en 1541; no hubo una ciudad capital anterior.',

    'quiz.q22.question': '¿De qué se trataba el "Plebiscito de 1988"?',
    'quiz.q22.opt1': 'Nueva constitución',
    'quiz.q22.opt2': 'Continuación de Pinochet',
    'quiz.q22.opt3': 'Referéndum de independencia',
    'quiz.q22.opt4': 'Autonomía regional',
    'quiz.q22.explanation': 'El plebiscito de 1988 pidió a los chilenos votar "Sí" o "No" sobre extender la presidencia de Pinochet por 8 años más.',

    'quiz.q23.question': '¿Quién fue el último presidente antes del golpe militar de 1973?',
    'quiz.q23.opt1': 'Eduardo Frei Montalva',
    'quiz.q23.opt2': 'Jorge Alessandri',
    'quiz.q23.opt3': 'Salvador Allende',
    'quiz.q23.opt4': 'Carlos Ibáñez',
    'quiz.q23.explanation': 'Salvador Allende fue el presidente democráticamente electo que fue derrocado en el golpe de 1973.',

    'quiz.q24.question': '¿Cuál fue el nombre de la crisis económica que golpeó a Chile en 1982-1983?',
    'quiz.q24.opt1': 'La Gran Depresión',
    'quiz.q24.opt2': 'La Crisis de la Deuda',
    'quiz.q24.opt3': 'La Crisis Bancaria',
    'quiz.q24.opt4': 'La Crisis Monetaria',
    'quiz.q24.explanation': 'Chile sufrió una severa crisis de la deuda en 1982-1983, llevando a un desempleo masivo y recesión económica.',

    'quiz.q25.question': '¿Qué chileno ganó el Premio Nobel de Literatura en 1971?',
    'quiz.q25.opt1': 'Gabriela Mistral',
    'quiz.q25.opt2': 'Pablo Neruda',
    'quiz.q25.opt3': 'Isabel Allende',
    'quiz.q25.opt4': 'Roberto Bolaño',
    'quiz.q25.explanation': 'Pablo Neruda ganó el Premio Nobel de Literatura en 1971 por su poesía.',

    'quiz.q26.question': '¿Qué fue la "Matanza del Seguro Obrero" (1938)?',
    'quiz.q26.opt1': 'Huelga laboral',
    'quiz.q26.opt2': 'Masacre política',
    'quiz.q26.opt3': 'Reforma económica',
    'quiz.q26.opt4': 'Levantamiento militar',
    'quiz.q26.explanation': 'La Matanza del Seguro Obrero fue cuando la policía mató a jóvenes Nacional Socialistas que intentaron un golpe en 1938.',

    'quiz.q27.question': '¿Quién fue el primer presidente de Chile después del retorno a la democracia en 1990?',
    'quiz.q27.opt1': 'Eduardo Frei Ruiz-Tagle',
    'quiz.q27.opt2': 'Patricio Aylwin',
    'quiz.q27.opt3': 'Ricardo Lagos',
    'quiz.q27.opt4': 'Michelle Bachelet',
    'quiz.q27.explanation': 'Patricio Aylwin fue el primer presidente de Chile después del retorno a la democracia, sirviendo de 1990-1994.',

    'quiz.q28.question': '¿De qué se trataba principalmente la "Revolución de 1891"?',
    'quiz.q28.opt1': 'Reformas sociales',
    'quiz.q28.opt2': 'Crisis constitucional',
    'quiz.q28.opt3': 'Políticas económicas',
    'quiz.q28.opt4': 'Disputas territoriales',
    'quiz.q28.explanation': 'La Guerra Civil de 1891 fue una crisis constitucional sobre el equilibrio de poder entre el presidente y el congreso.',

    'quiz.q29.question': '¿Qué país europeo tuvo la mayor inmigración a Chile en el siglo XIX?',
    'quiz.q29.opt1': 'España',
    'quiz.q29.opt2': 'Alemania',
    'quiz.q29.opt3': 'Italia',
    'quiz.q29.opt4': 'Francia',
    'quiz.q29.explanation': 'La inmigración alemana al sur de Chile fue particularmente significativa en el siglo XIX, especialmente a Valdivia y Osorno.',

    'quiz.q30.question': '¿Qué porcentaje de votos "Sí" se necesitaba en el plebiscito de 1988 para que Pinochet continuara?',
    'quiz.q30.opt1': 'Mayoría simple',
    'quiz.q30.opt2': '60%',
    'quiz.q30.opt3': '66%',
    'quiz.q30.opt4': '75%',
    'quiz.q30.explanation': 'Una mayoría simple (más del 50%) de votos "Sí" habría extendido la presidencia de Pinochet, pero el "No" ganó con 56%.'
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
    'language.portuguese': 'Português',
    'language.english': 'English'
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

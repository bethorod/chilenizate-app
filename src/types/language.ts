
export type Language = 'es' | 'en' | 'pt';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

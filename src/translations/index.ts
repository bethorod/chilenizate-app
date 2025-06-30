
import { esTranslations } from './es';
import { enTranslations } from './en';
import { ptTranslations } from './pt';
import type { Language } from '@/types/language';

export const translations: Record<Language, Record<string, string>> = {
  es: esTranslations,
  en: enTranslations,
  pt: ptTranslations,
};


import { useLanguage } from '@/contexts/LanguageContext';
import { Question } from '@/types/quiz';

export const useQuizQuestions = (): Question[] => {
  const { t } = useLanguage();

  return [
    {
      id: 1,
      question: t('quiz.q1.question'),
      options: [t('quiz.q1.opt1'), t('quiz.q1.opt2'), t('quiz.q1.opt3'), t('quiz.q1.opt4')],
      correct: 0,
      explanation: t('quiz.q1.explanation'),
      difficulty: 'easy'
    },
    {
      id: 2,
      question: t('quiz.q2.question'),
      options: [t('quiz.q2.opt1'), t('quiz.q2.opt2'), t('quiz.q2.opt3'), t('quiz.q2.opt4')],
      correct: 1,
      explanation: t('quiz.q2.explanation'),
      difficulty: 'medium'
    },
    {
      id: 3,
      question: t('quiz.q3.question'),
      options: [t('quiz.q3.opt1'), t('quiz.q3.opt2'), t('quiz.q3.opt3'), t('quiz.q3.opt4')],
      correct: 2,
      explanation: t('quiz.q3.explanation'),
      difficulty: 'easy'
    },
    {
      id: 4,
      question: t('quiz.q4.question'),
      options: [t('quiz.q4.opt1'), t('quiz.q4.opt2'), t('quiz.q4.opt3'), t('quiz.q4.opt4')],
      correct: 1,
      explanation: t('quiz.q4.explanation'),
      difficulty: 'easy'
    },
    {
      id: 5,
      question: t('quiz.q5.question'),
      options: [t('quiz.q5.opt1'), t('quiz.q5.opt2'), t('quiz.q5.opt3'), t('quiz.q5.opt4')],
      correct: 1,
      explanation: t('quiz.q5.explanation'),
      difficulty: 'medium'
    },
    {
      id: 6,
      question: t('quiz.q6.question'),
      options: [t('quiz.q6.opt1'), t('quiz.q6.opt2'), t('quiz.q6.opt3'), t('quiz.q6.opt4')],
      correct: 1,
      explanation: t('quiz.q6.explanation'),
      difficulty: 'medium'
    },
    {
      id: 7,
      question: t('quiz.q7.question'),
      options: [t('quiz.q7.opt1'), t('quiz.q7.opt2'), t('quiz.q7.opt3'), t('quiz.q7.opt4')],
      correct: 1,
      explanation: t('quiz.q7.explanation'),
      difficulty: 'medium'
    },
    {
      id: 8,
      question: t('quiz.q8.question'),
      options: [t('quiz.q8.opt1'), t('quiz.q8.opt2'), t('quiz.q8.opt3'), t('quiz.q8.opt4')],
      correct: 1,
      explanation: t('quiz.q8.explanation'),
      difficulty: 'easy'
    },
    {
      id: 9,
      question: t('quiz.q9.question'),
      options: [t('quiz.q9.opt1'), t('quiz.q9.opt2'), t('quiz.q9.opt3'), t('quiz.q9.opt4')],
      correct: 0,
      explanation: t('quiz.q9.explanation'),
      difficulty: 'medium'
    },
    {
      id: 10,
      question: t('quiz.q10.question'),
      options: [t('quiz.q10.opt1'), t('quiz.q10.opt2'), t('quiz.q10.opt3'), t('quiz.q10.opt4')],
      correct: 1,
      explanation: t('quiz.q10.explanation'),
      difficulty: 'hard'
    },
    {
      id: 11,
      question: t('quiz.q11.question'),
      options: [t('quiz.q11.opt1'), t('quiz.q11.opt2'), t('quiz.q11.opt3'), t('quiz.q11.opt4')],
      correct: 1,
      explanation: t('quiz.q11.explanation'),
      difficulty: 'easy'
    },
    {
      id: 12,
      question: t('quiz.q12.question'),
      options: [t('quiz.q12.opt1'), t('quiz.q12.opt2'), t('quiz.q12.opt3'), t('quiz.q12.opt4')],
      correct: 1,
      explanation: t('quiz.q12.explanation'),
      difficulty: 'hard'
    },
    {
      id: 13,
      question: t('quiz.q13.question'),
      options: [t('quiz.q13.opt1'), t('quiz.q13.opt2'), t('quiz.q13.opt3'), t('quiz.q13.opt4')],
      correct: 1,
      explanation: t('quiz.q13.explanation'),
      difficulty: 'medium'
    },
    {
      id: 14,
      question: t('quiz.q14.question'),
      options: [t('quiz.q14.opt1'), t('quiz.q14.opt2'), t('quiz.q14.opt3'), t('quiz.q14.opt4')],
      correct: 1,
      explanation: t('quiz.q14.explanation'),
      difficulty: 'hard'
    },
    {
      id: 15,
      question: t('quiz.q15.question'),
      options: [t('quiz.q15.opt1'), t('quiz.q15.opt2'), t('quiz.q15.opt3'), t('quiz.q15.opt4')],
      correct: 0,
      explanation: t('quiz.q15.explanation'),
      difficulty: 'hard'
    },
    {
      id: 16,
      question: t('quiz.q16.question'),
      options: [t('quiz.q16.opt1'), t('quiz.q16.opt2'), t('quiz.q16.opt3'), t('quiz.q16.opt4')],
      correct: 1,
      explanation: t('quiz.q16.explanation'),
      difficulty: 'medium'
    },
    {
      id: 17,
      question: t('quiz.q17.question'),
      options: [t('quiz.q17.opt1'), t('quiz.q17.opt2'), t('quiz.q17.opt3'), t('quiz.q17.opt4')],
      correct: 0,
      explanation: t('quiz.q17.explanation'),
      difficulty: 'hard'
    },
    {
      id: 18,
      question: t('quiz.q18.question'),
      options: [t('quiz.q18.opt1'), t('quiz.q18.opt2'), t('quiz.q18.opt3'), t('quiz.q18.opt4')],
      correct: 0,
      explanation: t('quiz.q18.explanation'),
      difficulty: 'easy'
    },
    {
      id: 19,
      question: t('quiz.q19.question'),
      options: [t('quiz.q19.opt1'), t('quiz.q19.opt2'), t('quiz.q19.opt3'), t('quiz.q19.opt4')],
      correct: 3,
      explanation: t('quiz.q19.explanation'),
      difficulty: 'hard'
    },
    {
      id: 20,
      question: t('quiz.q20.question'),
      options: [t('quiz.q20.opt1'), t('quiz.q20.opt2'), t('quiz.q20.opt3'), t('quiz.q20.opt4')],
      correct: 1,
      explanation: t('quiz.q20.explanation'),
      difficulty: 'medium'
    },
    {
      id: 21,
      question: t('quiz.q21.question'),
      options: [t('quiz.q21.opt1'), t('quiz.q21.opt2'), t('quiz.q21.opt3'), t('quiz.q21.opt4')],
      correct: 2,
      explanation: t('quiz.q21.explanation'),
      difficulty: 'medium'
    },
    {
      id: 22,
      question: t('quiz.q22.question'),
      options: [t('quiz.q22.opt1'), t('quiz.q22.opt2'), t('quiz.q22.opt3'), t('quiz.q22.opt4')],
      correct: 1,
      explanation: t('quiz.q22.explanation'),
      difficulty: 'medium'
    },
    {
      id: 23,
      question: t('quiz.q23.question'),
      options: [t('quiz.q23.opt1'), t('quiz.q23.opt2'), t('quiz.q23.opt3'), t('quiz.q23.opt4')],
      correct: 2,
      explanation: t('quiz.q23.explanation'),
      difficulty: 'easy'
    },
    {
      id: 24,
      question: t('quiz.q24.question'),
      options: [t('quiz.q24.opt1'), t('quiz.q24.opt2'), t('quiz.q24.opt3'), t('quiz.q24.opt4')],
      correct: 1,
      explanation: t('quiz.q24.explanation'),
      difficulty: 'medium'
    },
    {
      id: 25,
      question: t('quiz.q25.question'),
      options: [t('quiz.q25.opt1'), t('quiz.q25.opt2'), t('quiz.q25.opt3'), t('quiz.q25.opt4')],
      correct: 1,
      explanation: t('quiz.q25.explanation'),
      difficulty: 'easy'
    },
    {
      id: 26,
      question: t('quiz.q26.question'),
      options: [t('quiz.q26.opt1'), t('quiz.q26.opt2'), t('quiz.q26.opt3'), t('quiz.q26.opt4')],
      correct: 1,
      explanation: t('quiz.q26.explanation'),
      difficulty: 'hard'
    },
    {
      id: 27,
      question: t('quiz.q27.question'),
      options: [t('quiz.q27.opt1'), t('quiz.q27.opt2'), t('quiz.q27.opt3'), t('quiz.q27.opt4')],
      correct: 1,
      explanation: t('quiz.q27.explanation'),
      difficulty: 'medium'
    },
    {
      id: 28,
      question: t('quiz.q28.question'),
      options: [t('quiz.q28.opt1'), t('quiz.q28.opt2'), t('quiz.q28.opt3'), t('quiz.q28.opt4')],
      correct: 1,
      explanation: t('quiz.q28.explanation'),
      difficulty: 'hard'
    },
    {
      id: 29,
      question: t('quiz.q29.question'),
      options: [t('quiz.q29.opt1'), t('quiz.q29.opt2'), t('quiz.q29.opt3'), t('quiz.q29.opt4')],
      correct: 1,
      explanation: t('quiz.q29.explanation'),
      difficulty: 'medium'
    },
    {
      id: 30,
      question: t('quiz.q30.question'),
      options: [t('quiz.q30.opt1'), t('quiz.q30.opt2'), t('quiz.q30.opt3'), t('quiz.q30.opt4')],
      correct: 0,
      explanation: t('quiz.q30.explanation'),
      difficulty: 'hard'
    },
    {
      id: 31,
      question: t('quiz.q31.question'),
      options: [t('quiz.q31.opt1'), t('quiz.q31.opt2'), t('quiz.q31.opt3'), t('quiz.q31.opt4')],
      correct: 0,
      explanation: t('quiz.q31.explanation'),
      difficulty: 'easy'
    },
    {
      id: 32,
      question: t('quiz.q32.question'),
      options: [t('quiz.q32.opt1'), t('quiz.q32.opt2'), t('quiz.q32.opt3'), t('quiz.q32.opt4')],
      correct: 2,
      explanation: t('quiz.q32.explanation'),
      difficulty: 'medium'
    },
    {
      id: 33,
      question: t('quiz.q33.question'),
      options: [t('quiz.q33.opt1'), t('quiz.q33.opt2'), t('quiz.q33.opt3'), t('quiz.q33.opt4')],
      correct: 1,
      explanation: t('quiz.q33.explanation'),
      difficulty: 'easy'
    },
    {
      id: 34,
      question: t('quiz.q34.question'),
      options: [t('quiz.q34.opt1'), t('quiz.q34.opt2'), t('quiz.q34.opt3'), t('quiz.q34.opt4')],
      correct: 0,
      explanation: t('quiz.q34.explanation'),
      difficulty: 'medium'
    },
    {
      id: 35,
      question: t('quiz.q35.question'),
      options: [t('quiz.q35.opt1'), t('quiz.q35.opt2'), t('quiz.q35.opt3'), t('quiz.q35.opt4')],
      correct: 2,
      explanation: t('quiz.q35.explanation'),
      difficulty: 'hard'
    },
    {
      id: 36,
      question: t('quiz.q36.question'),
      options: [t('quiz.q36.opt1'), t('quiz.q36.opt2'), t('quiz.q36.opt3'), t('quiz.q36.opt4')],
      correct: 1,
      explanation: t('quiz.q36.explanation'),
      difficulty: 'easy'
    },
    {
      id: 37,
      question: t('quiz.q37.question'),
      options: [t('quiz.q37.opt1'), t('quiz.q37.opt2'), t('quiz.q37.opt3'), t('quiz.q37.opt4')],
      correct: 0,
      explanation: t('quiz.q37.explanation'),
      difficulty: 'medium'
    },
    {
      id: 38,
      question: t('quiz.q38.question'),
      options: [t('quiz.q38.opt1'), t('quiz.q38.opt2'), t('quiz.q38.opt3'), t('quiz.q38.opt4')],
      correct: 3,
      explanation: t('quiz.q38.explanation'),
      difficulty: 'medium'
    },
    {
      id: 39,
      question: t('quiz.q39.question'),
      options: [t('quiz.q39.opt1'), t('quiz.q39.opt2'), t('quiz.q39.opt3'), t('quiz.q39.opt4')],
      correct: 1,
      explanation: t('quiz.q39.explanation'),
      difficulty: 'hard'
    },
    {
      id: 40,
      question: t('quiz.q40.question'),
      options: [t('quiz.q40.opt1'), t('quiz.q40.opt2'), t('quiz.q40.opt3'), t('quiz.q40.opt4')],
      correct: 2,
      explanation: t('quiz.q40.explanation'),
      difficulty: 'easy'
    },
    {
      id: 41,
      question: t('quiz.q41.question'),
      options: [t('quiz.q41.opt1'), t('quiz.q41.opt2'), t('quiz.q41.opt3'), t('quiz.q41.opt4')],
      correct: 0,
      explanation: t('quiz.q41.explanation'),
      difficulty: 'easy'
    },
    {
      id: 42,
      question: t('quiz.q42.question'),
      options: [t('quiz.q42.opt1'), t('quiz.q42.opt2'), t('quiz.q42.opt3'), t('quiz.q42.opt4')],
      correct: 1,
      explanation: t('quiz.q42.explanation'),
      difficulty: 'medium'
    },
    {
      id: 43,
      question: t('quiz.q43.question'),
      options: [t('quiz.q43.opt1'), t('quiz.q43.opt2'), t('quiz.q43.opt3'), t('quiz.q43.opt4')],
      correct: 2,
      explanation: t('quiz.q43.explanation'),
      difficulty: 'medium'
    },
    {
      id: 44,
      question: t('quiz.q44.question'),
      options: [t('quiz.q44.opt1'), t('quiz.q44.opt2'), t('quiz.q44.opt3'), t('quiz.q44.opt4')],
      correct: 0,
      explanation: t('quiz.q44.explanation'),
      difficulty: 'easy'
    },
    {
      id: 45,
      question: t('quiz.q45.question'),
      options: [t('quiz.q45.opt1'), t('quiz.q45.opt2'), t('quiz.q45.opt3'), t('quiz.q45.opt4')],
      correct: 1,
      explanation: t('quiz.q45.explanation'),
      difficulty: 'medium'
    },
    {
      id: 46,
      question: t('quiz.q46.question'),
      options: [t('quiz.q46.opt1'), t('quiz.q46.opt2'), t('quiz.q46.opt3'), t('quiz.q46.opt4')],
      correct: 2,
      explanation: t('quiz.q46.explanation'),
      difficulty: 'hard'
    },
    {
      id: 47,
      question: t('quiz.q47.question'),
      options: [t('quiz.q47.opt1'), t('quiz.q47.opt2'), t('quiz.q47.opt3'), t('quiz.q47.opt4')],
      correct: 1,
      explanation: t('quiz.q47.explanation'),
      difficulty: 'medium'
    },
    {
      id: 48,
      question: t('quiz.q48.question'),
      options: [t('quiz.q48.opt1'), t('quiz.q48.opt2'), t('quiz.q48.opt3'), t('quiz.q48.opt4')],
      correct: 3,
      explanation: t('quiz.q48.explanation'),
      difficulty: 'hard'
    },
    {
      id: 49,
      question: t('quiz.q49.question'),
      options: [t('quiz.q49.opt1'), t('quiz.q49.opt2'), t('quiz.q49.opt3'), t('quiz.q49.opt4')],
      correct: 0,
      explanation: t('quiz.q49.explanation'),
      difficulty: 'medium'
    },
    {
      id: 50,
      question: t('quiz.q50.question'),
      options: [t('quiz.q50.opt1'), t('quiz.q50.opt2'), t('quiz.q50.opt3'), t('quiz.q50.opt4')],
      correct: 1,
      explanation: t('quiz.q50.explanation'),
      difficulty: 'easy'
    }
  ];
};

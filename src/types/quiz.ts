
export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswer: string;
  showResult: boolean;
  answers: number[];
  quizCompleted: boolean;
  startTime: Date | null;
  endTime: Date | null;
  saving: boolean;
}

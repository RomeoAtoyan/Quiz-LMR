import { create } from "zustand";

interface Answer {
  answer: string;
  correct: boolean;
}

interface QuizQuestion {
  question: string;
  time_limit_s: number;
  answers: Answer[];
}

interface QuizStore {
  questionIndex: number;
  selectedAnswers: string[];
  isLoading: boolean;
  quizData: QuizQuestion[];

  selectAnswer: (id: string) => void;
  fetchQuiz: () => Promise<void>;
}

export const useQuizStore = create<QuizStore>()((set) => ({
  questionIndex: 0,
  selectedAnswers: [],
  isLoading: false,
  quizData: [],

  selectAnswer: (id) =>
    set((state) => {
      if (
        state.selectedAnswers.includes(id) ||
        state.selectedAnswers.length >= 3
      ) {
        return {};
      }
      return {
        selectedAnswers: [...state.selectedAnswers, id],
      };
    }),

  fetchQuiz: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/quiz.json");
      if (!response.ok) throw new Error("Error fetching quiz data ...");

      const data = await response.json();
      set({ quizData: data, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },
}));

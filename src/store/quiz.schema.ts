import { create } from "zustand";

export interface Answer {
  answer: string;
  correct: boolean;
}

export interface QuizQuestion {
  question: string;
  time_limit_s: number;
  answers: Answer[];
}

interface QuizStore {
  questionIndex: number;
  selectedAnswers: string[];
  isLoading: boolean;
  quizData: QuizQuestion[];
  currentQuestionTitle: string;
  currentAnswers: Answer[];
  isSelectionComplete: boolean;
  timeLeft: number;

  selectAnswer: (id: string) => void;
  fetchQuiz: () => Promise<void>;
  nextQuestion: () => void;
  decrementTime: () => void;
}

export const useQuizStore = create<QuizStore>()((set) => ({
  questionIndex: 0,
  selectedAnswers: [],
  isLoading: false,
  quizData: [],
  currentQuestionTitle: "",
  currentAnswers: [],
  isSelectionComplete: false,
  timeLeft: 0,

  selectAnswer: (id) =>
    set((state) => {
      const isSelected = state.selectedAnswers.includes(id);
      const newSelected = isSelected
        ? state.selectedAnswers.filter((item) => item !== id)
        : [...state.selectedAnswers, id];

      return {
        selectedAnswers: newSelected,
        isSelectionComplete: newSelected.length >= 1,
      };
    }),

  fetchQuiz: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/quiz.json");
      if (!response.ok) throw new Error("Error fetching quiz data ...");

      const data: QuizQuestion[] = await response.json();
      set({
        quizData: data,
        isLoading: false,
        currentQuestionTitle: data[0]?.question || "",
        currentAnswers: data[0]?.answers || [],
        isSelectionComplete: false,
        timeLeft: data[0]?.time_limit_s || 0,
      });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },

  nextQuestion: () =>
    set((state) => {
      const nextIndex = state.questionIndex + 1;
      const nextQuestion = state.quizData[nextIndex];

      if (!nextQuestion) return {};

      return {
        questionIndex: nextIndex,
        selectedAnswers: [],
        currentQuestionTitle: nextQuestion.question,
        currentAnswers: nextQuestion.answers,
        isSelectionComplete: false,
        timeLeft: nextQuestion.time_limit_s || 0,
      };
    }),

  decrementTime: () =>
    set((state) => {
      if (state.timeLeft <= 0) return {};
      return { timeLeft: state.timeLeft - 1 };
    }),
}));

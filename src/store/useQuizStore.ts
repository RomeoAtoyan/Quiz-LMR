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
  isSubmitted: boolean;
  timeLeft: number;
  error: string | null;

  selectAnswer: (id: string) => void;
  submitAnswer: () => void;
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
  isSubmitted: false,
  timeLeft: 0,
  error: null,

  selectAnswer: (id) =>
    set((state) => {
      if (state.isSubmitted) return {};
      const isSelected = state.selectedAnswers.includes(id);
      const newSelected = isSelected
        ? state.selectedAnswers.filter((item) => item !== id)
        : [...state.selectedAnswers, id];

      return {
        selectedAnswers: newSelected,
        isSelectionComplete: newSelected.length >= 1,
      };
    }),

  submitAnswer: () => set({ isSubmitted: true }),

  fetchQuiz: async () => {
    set({ isLoading: true, error: null });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const response = await fetch("/quiz.json");
      if (!response.ok) throw new Error("Fetch failed");

      const data: QuizQuestion[] = await response.json();
      set({
        quizData: data,
        isLoading: false,
        error: null,
        currentQuestionTitle: data[0]?.question || "",
        currentAnswers: data[0]?.answers || [],
        isSelectionComplete: false,
        isSubmitted: false,
        timeLeft: data[0]?.time_limit_s || 0,
      });
    } catch (error) {
      console.error(error);
      set({ 
        isLoading: false, 
        error: "Er is een fout opgetreden bij het laden van de quiz." 
      });
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
        isSubmitted: false,
        timeLeft: nextQuestion.time_limit_s || 0,
      };
    }),

  decrementTime: () =>
    set((state) => {
      if (state.timeLeft <= 0) return {};
      return { timeLeft: state.timeLeft - 1 };
    }),
}));

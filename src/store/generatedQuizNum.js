import { create } from "zustand";

const useGeneratedQuizNumStore = create((set) => ({
  isSolved: false,
  setIsSolved: (newState) => set({ isSolved: newState }),
}));

export default useGeneratedQuizNumStore;

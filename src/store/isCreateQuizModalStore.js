import { create } from "zustand";

const useIsCreateQuizModalStore = create((set) => ({
  isCreateQuizModal: false,
  setIsCreateQuizModal: (newState) => set({ isCreateQuizModal: newState }),
}));

export default useIsCreateQuizModalStore;

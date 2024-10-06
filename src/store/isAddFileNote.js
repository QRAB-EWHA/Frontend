import { create } from "zustand";

const useIsAddFileNote = create((set) => ({
  isAddFileNote: false,
  setIsAddFileNote: (newState) => set({ isAddFileNote: newState }),
}));

export default useIsAddFileNote;

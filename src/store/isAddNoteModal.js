import { create } from "zustand";

const useIsAddNotModal = create((set) => ({
  isAddNoteModal: false,
  setIsAddNoteModal: (newState) => set({ isAddNoteModal: newState }),
}));

export default useIsAddNotModal;

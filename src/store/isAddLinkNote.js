import { create } from "zustand";

const useIsAddLinkNote = create((set) => ({
  isAddLinkNote: false,
  setIsAddLinkNote: (newState) => set({ isAddLinkNote: newState }),
}));

export default useIsAddLinkNote;

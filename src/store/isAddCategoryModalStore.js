import { create } from "zustand";

const useIsAddCategoryModal = create((set) => ({
  isAddCategoryModal: false,
  setIsAddCategoryModal: (newState) => set({ isAddCategoryModal: newState }),
}));

export default useIsAddCategoryModal;

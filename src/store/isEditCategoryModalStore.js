import { create } from "zustand";

const useIsEditCategoryModal = create((set) => ({
  isEditCategoryModal: false,
  setIsEditCategoryModal: (newState) => set({ isEditCategoryModal: newState }),
}));

export default useIsEditCategoryModal;

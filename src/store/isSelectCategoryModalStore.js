import { create } from "zustand";

const useIsSelectCategoryModal = create((set) => ({
  isSelectCategoryModal: false,
  setIsSelectCategoryModal: (newState) =>
    set({ isSelectCategoryModal: newState }),
}));

export default useIsSelectCategoryModal;

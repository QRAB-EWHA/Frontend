import { create } from "zustand";

const useIsDeleteCategoryModal = create((set) => ({
  isDeleteCategoryModal: false,
  setIsDeleteCategoryModal: (newState) =>
    set({ isDeleteCategoryModal: newState }),
}));

export default useIsDeleteCategoryModal;

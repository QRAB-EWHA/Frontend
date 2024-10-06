import { create } from "zustand";

const useIsBrightModeStore = create((set) => ({
  isBrightMode: false,
  setIsBrightMode: (newState) => set({ isBrightMode: newState }),
}));

export default useIsBrightModeStore;

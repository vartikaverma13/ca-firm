import { create } from "zustand";

type UiState = {
  activeService: string | null;
  setActiveService: (service: string | null) => void;
};

export const useUiStore = create<UiState>((set) => ({
  activeService: null,
  setActiveService: (service) => set({ activeService: service })
}));

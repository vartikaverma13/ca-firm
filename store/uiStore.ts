import { create } from "zustand";

type UiState = {
  activeService: string | null;
  setActiveService: (service: string | null) => void;
  isConsultationOpen: boolean;
  setConsultationOpen: (open: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  activeService: null,
  setActiveService: (service) => set({ activeService: service }),
  isConsultationOpen: false,
  setConsultationOpen: (open) => set({ isConsultationOpen: open }),
}));

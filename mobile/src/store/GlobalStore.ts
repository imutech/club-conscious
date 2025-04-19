import { create } from "zustand";

type GlobalStore = {
  apiError: string | null;
  setApiError: (apiError: string | null) => void;
  apiConnectionFailed: boolean;
  setApiConnectionFailed: (apiConnectionFailed: boolean) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  apiError: null,
  setApiError: (apiError: string | null) => set({ apiError }),
  apiConnectionFailed: false,
  setApiConnectionFailed: (apiConnectionFailed: boolean) =>
    set({ apiConnectionFailed }),
}));

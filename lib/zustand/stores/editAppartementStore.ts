import { createStore } from "zustand/vanilla";

export type EditAppartementState = {
  startEditBasicInfos: boolean;
  startEditDetailsInfos: boolean;
  startEditFinancialInfos: boolean;
  startEditOtherInfos: boolean;
  startEditImages: boolean;
};

export type EditAppartementActions = {
  setStartEditBasicInfos: (newValue: boolean) => void;
  setStartEditDetailsInfos: (newValue: boolean) => void;
  setStartEditFinancialInfos: (newValue: boolean) => void;
  setStartEditOtherInfos: (newValue: boolean) => void;
  setStartEditImages: (newValue: boolean) => void;
  resetEdit: () => void;
};

export type editAppartementStore = EditAppartementState &
  EditAppartementActions;

export const defaultEditAppartementState: EditAppartementState = {
  startEditBasicInfos: false,
  startEditDetailsInfos: false,
  startEditFinancialInfos: false,
  startEditOtherInfos: false,
  startEditImages: false,
};

export const createEditAppartementStore = (
  initState: EditAppartementState = defaultEditAppartementState
) => {
  return createStore<editAppartementStore>()((set) => ({
    ...initState,
    setStartEditBasicInfos: (newValue: boolean) =>
      set((state) => ({ startEditBasicInfos: newValue })),
    setStartEditDetailsInfos: (newValue: boolean) =>
      set((state) => ({ startEditDetailsInfos: newValue })),
    setStartEditFinancialInfos: (newValue: boolean) =>
      set((state) => ({ startEditFinancialInfos: newValue })),
    setStartEditOtherInfos: (newValue: boolean) =>
      set((state) => ({ startEditOtherInfos: newValue })),
    setStartEditImages: (newValue: boolean) =>
      set((state) => ({ startEditImages: newValue })),
    resetEdit: () => set(() => ({ ...defaultEditAppartementState })),
  }));
};

import { create, SetState } from "zustand";

export type EditAppartementState = {
  startEditBasicInfos: boolean;
  startEditDetailsInfos: boolean;
  startEditFinancialInfos: boolean;
  startEditOtherInfos: boolean;
  startEditImages: boolean;
};

type Setters = {
  setStartEditBasicInfos: (newValue: boolean) => void;
  setStartEditDetailsInfos: (newValue: boolean) => void;
  setStartEditFinancialInfos: (newValue: boolean) => void;
  setStartEditOtherInfos: (newValue: boolean) => void;
  setStartEditImages: (newValue: boolean) => void;
};

const initialState: EditAppartementState = {
  startEditBasicInfos: false,
  startEditDetailsInfos: false,
  startEditImages: false,
  startEditFinancialInfos: false,
  startEditOtherInfos: false,
};

export const useEditAppartementState = create<EditAppartementState & Setters>(
  (set) => {
    return {
      ...initialState,
      setStartEditBasicInfos: (newValue: boolean) =>
        set({ startEditBasicInfos: newValue }),
      setStartEditDetailsInfos: (newValue: boolean) =>
        set({ startEditDetailsInfos: newValue }),
      setStartEditFinancialInfos: (newValue: boolean) =>
        set({ startEditFinancialInfos: newValue }),
      setStartEditOtherInfos: (newValue: boolean) =>
        set({ startEditOtherInfos: newValue }),
      setStartEditImages: (newValue: boolean) =>
        set({ startEditImages: newValue }),
    };
  }
);

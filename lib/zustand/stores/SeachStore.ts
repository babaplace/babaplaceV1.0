import { createStore } from "zustand/vanilla";

export type SearchStoreState = {
  title?: string;
  city?: string;
  maxprice?: string;
  minprice?: string;
  address?: string;
  quartier?: string;
  maxChambres?: string;
  minChambres?: string;
  numberChambres?: string;
};

export type SearchStoreActions = {
  setTitle: (newTitle?: string) => void;
  setCity: (newCity?: string) => void;
  setMaxPrice: (newMaxPrice?: string) => void;
  setMinPrice: (newMinPrice?: string) => void;
  setAddress: (newAddress?: string) => void;
  setQuartier: (newQuartier?: string) => void;
  setMaxChambres: (newMaxChambres?: string) => void;
  setMinChambres: (newMinChambres?: string) => void;
  setNumberChambres: (newNumberChambres?: string) => void;
  resetSearch: () => void;
};

export type SearchStore = SearchStoreState & SearchStoreActions;

export const defaultSearchState: SearchStoreState = {
  title: undefined,
  city: undefined,
  maxprice: undefined,
  minprice: undefined,
  address: undefined,
  quartier: undefined,
  maxChambres: undefined,
  minChambres: undefined,
  numberChambres: undefined,
};

export const createSearchStore = (
  initState: SearchStoreState = defaultSearchState
) => {
  return createStore<SearchStore>()((set) => ({
    ...initState,
    setTitle: (newTitle?: string) => set((state) => ({ title: newTitle })),
    setCity: (newCity?: string) => set((state) => ({ city: newCity })),
    setMaxPrice: (newMaxPrice?: string) =>
      set((state) => ({ maxprice: newMaxPrice })),
    setMinPrice: (newMinPrice?: string) =>
      set((state) => ({ minprice: newMinPrice })),
    setAddress: (newAddress?: string) =>
      set((state) => ({ address: newAddress })),
    setQuartier: (newQuartier?: string) =>
      set((state) => ({ quartier: newQuartier })),
    setMaxChambres: (newMaxChambres?: string) =>
      set((state) => ({ maxChambres: newMaxChambres })),
    setMinChambres: (newMinChambres?: string) =>
      set((state) => ({ minChambres: newMinChambres })),
    setNumberChambres: (newNumberChambres?: string) =>
      set((state) => ({ numberChambres: newNumberChambres })),
    resetSearch: () => set(() => ({ ...defaultSearchState })),
  }));
};

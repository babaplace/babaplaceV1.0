"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import {
  type SearchStore,
  createSearchStore,
  defaultSearchState,
} from "../stores/SeachStore";

export const SearchStoreContext = createContext<StoreApi<SearchStore> | null>(
  null
);

export interface SearchStoreProviderProps {
  children: ReactNode;
}

export const CreateSearchStoreProvider = ({
  children,
}: SearchStoreProviderProps) => {
  const storeRef = useRef<StoreApi<SearchStore>>();
  if (!storeRef.current) {
    storeRef.current = createSearchStore(defaultSearchState);
  }

  return (
    <SearchStoreContext.Provider value={storeRef.current}>
      {children}
    </SearchStoreContext.Provider>
  );
};

export const useSearchStore = <T,>(selector: (store: SearchStore) => T): T => {
  const searchStoreContext = useContext(SearchStoreContext);

  if (!searchStoreContext) {
    throw new Error(`useSearchStore must be used within SearchStoreProvider`);
  }

  return useStore(searchStoreContext, selector);
};

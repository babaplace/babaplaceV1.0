// src/providers/Appartement-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import {
  AppartementFormStore,
  createAppartementFormStore,
} from "./stores/appartementCreateStore";

export const AppartementStoreContext =
  createContext<StoreApi<AppartementFormStore> | null>(null);

export interface AppartementStoreStoreProviderProps {
  children: ReactNode;
}

export const CreateAppartementStoreProvider = ({
  children,
}: AppartementStoreStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AppartementFormStore>>();
  if (!storeRef.current) {
    storeRef.current = createAppartementFormStore();
  }

  return (
    <AppartementStoreContext.Provider value={storeRef.current}>
      {children}
    </AppartementStoreContext.Provider>
  );
};

export const useAppartementStore = <T,>(
  selector: (store: AppartementFormStore) => T
): T => {
  const appartementStoreContext = useContext(AppartementStoreContext);

  if (!appartementStoreContext) {
    throw new Error(
      `useAppartementStore must be use within AppartementStoreProvider`
    );
  }

  return useStore(appartementStoreContext, selector);
};

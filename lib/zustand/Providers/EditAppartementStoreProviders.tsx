"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import {
  type editAppartementStore,
  createEditAppartementStore,
} from "../stores/editAppartementStore";

export const EditAppartementStoreContext =
  createContext<StoreApi<editAppartementStore> | null>(null);

export interface EditAppartementStoreProviderProps {
  children: ReactNode;
}

export const CreateEditAppartementStoreProvider = ({
  children,
}: EditAppartementStoreProviderProps) => {
  const storeRef = useRef<StoreApi<editAppartementStore>>();
  if (!storeRef.current) {
    storeRef.current = createEditAppartementStore();
  }

  return (
    <EditAppartementStoreContext.Provider value={storeRef.current}>
      {children}
    </EditAppartementStoreContext.Provider>
  );
};

export const useEditAppartementStore = <T,>(
  selector: (store: editAppartementStore) => T
): T => {
  const editAppartementStoreContext = useContext(EditAppartementStoreContext);

  if (!editAppartementStoreContext) {
    throw new Error(
      `useEditAppartementStore must be used within EditAppartementStoreProvider`
    );
  }

  return useStore(editAppartementStoreContext, selector);
};

import { create } from "zustand";

import { combine, persist } from "zustand/middleware";

export const useContactStore = create(
  persist(
    combine({ isSendContactPartner: false, isSendContact: false }, (set) => ({
      setIsSendContactPartner: (newValue: boolean) =>
        set((state) => ({ isSendContactPartner: newValue })),
      setIsSendContact: (newValue: boolean) =>
        set((state) => ({ isSendContact: newValue })),
    })),
    { name: "contactStore" }
  )
);

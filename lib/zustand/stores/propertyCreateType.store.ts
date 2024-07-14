import { create } from "zustand";

import { combine } from "zustand/middleware";
import { PropertyType } from "@/src/types/property.scheme";

export const usePropertyCreateTypeStore = create(
  combine({ propertytype: null as PropertyType }, (set) => ({
    setPropertyType: (newValue: PropertyType) =>
      set((state) => ({ propertytype: newValue })),
  }))
);

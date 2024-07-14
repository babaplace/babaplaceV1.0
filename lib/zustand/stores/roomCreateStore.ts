import {
  additionalInfoRoomScheme,
  basicInfoRoomScheme,
  imagesStepRoomSheme,
  equipementRoomSheme,
  financialInfoRoomScheme,
} from "@/src/types/room.sheme";
import { createStore } from "zustand/vanilla";

export type RoomFormState = {
  basicInfos: basicInfoRoomScheme;
  financialInfos: financialInfoRoomScheme;
  otherInformations: additionalInfoRoomScheme;
  images: imagesStepRoomSheme;
  equipements: equipementRoomSheme;
};

export type RoomFormActions = {
  setQuartier: (newquartier: string) => void;
  setCity: (newCity: string) => void;
  setAddress: (newAddress: string) => void;
  setPrice: (newPrice: number) => void;
  setCaution: (newCaution: number) => void;
  setDescription: (newDescription: string) => void;
  setBasicInfos: (newBasicInfos: basicInfoRoomScheme) => void;
  setFinancialInfos: (newFinancialInfos: financialInfoRoomScheme) => void;
  setOtherInformations: (
    newOtherInformations: additionalInfoRoomScheme
  ) => void;
  addImages: (newImage: imagesStepRoomSheme[0]) => void;
  removeImageById: (removeImage: imagesStepRoomSheme[0]) => void;
  modifieImagesByKey: (key: string, newImage: imagesStepRoomSheme[0]) => void;
  addEquipement: (newEquipement: equipementRoomSheme[0]) => void;
  removeEquipement: (removeEquipement: equipementRoomSheme[0]) => void;
  setSurface: (newSurface: number) => void; // Added setSurface action
  resetForm: () => void;
};

export const defaultRoomFormState: RoomFormState = {
  basicInfos: {
    quartier: "",
    city: "",
    address: "",
  },

  financialInfos: {
    price: 0,
    caution: 0,
  },
  otherInformations: {
    surface: 0, // Added surface property
    description: "",
  },
  images: [],
  equipements: [],
};
export type RoomFormStore = RoomFormState & RoomFormActions;

export const useRoomFormStore = (
  initState: RoomFormState = defaultRoomFormState
) => {
  return createStore<RoomFormStore>()((set) => ({
    ...initState,
    setQuartier: (newquartier: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, quartier: newquartier },
      })),
    setCity: (newCity: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, city: newCity },
      })),
    setAddress: (newAddress: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, address: newAddress },
      })),
    setPrice: (newPrice: number) =>
      set((state) => ({
        financialInfos: { ...state.financialInfos, price: newPrice },
      })),
    setCaution: (newCaution: number) =>
      set((state) => ({
        financialInfos: { ...state.financialInfos, caution: newCaution },
      })),
    setDescription: (newDescription: string) =>
      set((state) => ({
        otherInformations: {
          ...state.otherInformations,
          description: newDescription,
        },
      })),
    setBasicInfos: (newBasicInfos: basicInfoRoomScheme) =>
      set((state) => ({
        basicInfos: newBasicInfos,
      })),
    setFinancialInfos: (newFinancialInfos: financialInfoRoomScheme) =>
      set((state) => ({
        financialInfos: newFinancialInfos,
      })),
    setOtherInformations: (newOtherInformations: additionalInfoRoomScheme) =>
      set((state) => ({
        otherInformations: newOtherInformations,
      })),
    addImages: (newImage: imagesStepRoomSheme[0]) =>
      set((state) => ({
        images: [...state.images, newImage],
      })),
    removeImageById: (removeImage: imagesStepRoomSheme[0]) =>
      set((state) => ({
        images: state.images.filter((image) => image.key !== removeImage.key),
      })),
    modifieImagesByKey: (key: string, newImage: imagesStepRoomSheme[0]) =>
      set((state) => ({
        images: state.images.map((image) =>
          image.key === key ? newImage : image
        ),
      })),
    addEquipement: (newEquipement: equipementRoomSheme[0]) =>
      set((state) => ({
        equipements: [...state.equipements, newEquipement],
      })),
    removeEquipement: (removeEquipement: equipementRoomSheme[0]) =>
      set((state) => ({
        equipements: state.equipements.filter(
          (equipement) => equipement !== removeEquipement
        ),
      })),
    setSurface: (newSurface: number) =>
      set((state) => ({
        otherInformations: {
          ...state.otherInformations,
          surface: newSurface,
        },
      })),
    resetForm: () => set(() => defaultRoomFormState),
  }));
};

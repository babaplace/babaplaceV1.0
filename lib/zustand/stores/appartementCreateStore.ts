import {
  additionalInfoScheme,
  basicInfoScheme,
  detailsSheme,
  financialInfoScheme,
  imagesStepSheme,
} from "@/src/types/appartement.sheme";
import { createStore } from "zustand/vanilla";

export type AppartementFormState = {
  basicInfos: basicInfoScheme;
  details: detailsSheme;
  financialInfos: financialInfoScheme;
  otherInformations: additionalInfoScheme;
  images: imagesStepSheme;
};

export type AppartementFormActions = {
  setTitle: (newTitle: string) => void;
  setCity: (newCity: string) => void;
  setAddress: (newAddress: string) => void;
  setNumberChambres: (newNumberChambres: string) => void;
  setNumberToilettes: (newNumberToilettes: string) => void;
  setCuisine: (newCuisine: string) => void;
  setNiveauEtage: (newNiveauEtage: string) => void;
  setNumberSalons: (newNumberSalons: string) => void;
  setPrice: (newPrice: string) => void;
  setCaution: (newCaution: string) => void;
  setDescription: (newDescription: string) => void;
  setBasicInfos: (newBasicInfos: basicInfoScheme) => void;
  setDetails: (newDetails: detailsSheme) => void;
  setFinancialInfos: (newFinancialInfos: financialInfoScheme) => void;
  setOtherInformations: (newOtherInformations: additionalInfoScheme) => void;
  addImages: (newImage: imagesStepSheme[0]) => void;
  removeImageById: (removeImage: imagesStepSheme[0]) => void;
  modifieImagesByKey: (key: string, newImage: imagesStepSheme[0]) => void;
  resetForm: () => void;
};

export type AppartementFormStore = AppartementFormState &
  AppartementFormActions;

export const defaultAppartementFormState: AppartementFormState = {
  basicInfos: {
    title: "",
    city: "",
    address: "",
  },
  details: {
    numberChambres: "",
    numberToilettes: "",
    Cuisine: "",
    niveauEtage: "",
    numberSalons: "",
  },
  financialInfos: {
    price: "",
    caution: "",
  },
  otherInformations: {
    description: "",
  },
  images: [],
};

export const createAppartementFormStore = (
  initState: AppartementFormState = defaultAppartementFormState
) => {
  return createStore<AppartementFormStore>()((set) => ({
    ...initState,
    setTitle: (newTitle: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, title: newTitle },
      })),
    setCity: (newCity: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, city: newCity },
      })),
    setAddress: (newAddress: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, address: newAddress },
      })),
    setNumberChambres: (newNumberChambres: string) =>
      set((state) => ({
        details: { ...state.details, numberChambres: newNumberChambres },
      })),
    setNumberToilettes: (newNumberToilettes: string) =>
      set((state) => ({
        details: { ...state.details, numberToilettes: newNumberToilettes },
      })),
    setCuisine: (newCuisine: string) =>
      set((state) => ({
        details: { ...state.details, Cuisine: newCuisine },
      })),
    setNiveauEtage: (newNiveauEtage: string) =>
      set((state) => ({
        details: { ...state.details, niveauEtage: newNiveauEtage },
      })),
    setNumberSalons: (newNumberSalons: string) =>
      set((state) => ({
        details: { ...state.details, numberSalons: newNumberSalons },
      })),
    setPrice: (newPrice: string) =>
      set((state) => ({
        financialInfos: { ...state.financialInfos, price: newPrice },
      })),
    setCaution: (newCaution: string) =>
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
    setBasicInfos: (newBasicInfos: basicInfoScheme) =>
      set((state) => ({
        basicInfos: newBasicInfos,
      })),
    setDetails: (newDetails: detailsSheme) =>
      set((state) => ({
        details: newDetails,
      })),
    setFinancialInfos: (newFinancialInfos: financialInfoScheme) =>
      set((state) => ({
        financialInfos: newFinancialInfos,
      })),
    setOtherInformations: (newOtherInformations: additionalInfoScheme) =>
      set((state) => ({
        otherInformations: newOtherInformations,
      })),
    addImages: (newImage: imagesStepSheme[0]) =>
      set((state) => ({
        images: [...state.images, newImage],
      })),
    removeImageById: (removeImage: imagesStepSheme[0]) =>
      set((state) => ({
        images: state.images.filter((image) => image.key !== removeImage.key),
      })),
    modifieImagesByKey: (key: string, newImage: imagesStepSheme[0]) =>
      set((state) => ({
        images: state.images.map((image) =>
          image.key === key ? newImage : image
        ),
      })),
    resetForm: () =>
      set({
        ...defaultAppartementFormState,
      }),
  }));
};

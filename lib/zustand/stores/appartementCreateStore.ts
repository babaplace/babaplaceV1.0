import {
  additionalInfoScheme,
  basicInfoScheme,
  detailsSheme,
  financialInfoScheme,
  imagesStepSheme,
} from "@/app/appartements/appartement/appartement.sheme";
import { create } from "zustand";

export type AppartementFormStore = {
  basicInfos: basicInfoScheme;
  details: detailsSheme;
  financialInfos: financialInfoScheme;
  otherInformations: additionalInfoScheme;
  images: imagesStepSheme;

  setTitle: (newTitle: string) => void;
  setCity: (newCity: string) => void;
  setAddress: (newAddress: string) => void;
  setNumberChambres: (newNumberChambres: string) => void;
  setNumberToilettes: (newNumberToilettes: string) => void;
  setCuisine: (newCuisine: string) => void; // Corrected parameter type to boolean
  setNiveauEtage: (newNiveauEtage: string) => void;
  setNumberSalons: (newNumberSalons: string) => void;
  setPrice: (newPrice: string) => void;
  setCaution: (newCaution: string) => void;
  setDescription: (newDescription: string) => void;

  setBasicInfos: (newBasicInfos: basicInfoScheme) => void;

  setDetails: (newDetails: detailsSheme) => void; // Corrected function name to setDetails

  setFinancialInfos: (newFinancialInfos: financialInfoScheme) => void; // Corrected function name to setFinancialInfos

  setOtherInformations: (newOtherInformations: additionalInfoScheme) => void; // Corrected parameter name to newOtherInformations

  addImages: (newImage: imagesStepSheme[0]) => void; // New function to add images

  removeImageById: (removeImage: imagesStepSheme[0]) => void; // New function to remove image by ID

  modifieImagesByKey: (key: string, newImage: imagesStepSheme[0]) => void; // New function to modify image by key

  resetForm: () => void;
};

export const useAppartementFormStore = create<AppartementFormStore>((set) => {
  return {
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
      set((state) => ({ basicInfos: newBasicInfos })),

    setDetails: (
      newDetails: detailsSheme // Corrected function name to setDetails
    ) => set((state) => ({ details: newDetails })),

    setFinancialInfos: (
      newFinancialInfos: financialInfoScheme // Corrected function name to setFinancialInfos
    ) => set((state) => ({ financialInfos: newFinancialInfos })),

    setOtherInformations: (
      newOtherInformations: additionalInfoScheme // Corrected parameter name to newOtherInformations
    ) => set((state) => ({ otherInformations: newOtherInformations })),

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
      }),
  };
});

interface FormSteps {
  currentStep: number;
  setCurrentStep: (newStep: number) => void;
}

export const useFormSteps = create<FormSteps>((set) => {
  return {
    currentStep: 0,
    setCurrentStep: (newStep) => set({ currentStep: newStep }),
  };
});

interface Successful {
  successful: boolean;
  setSuccessful: (state: boolean) => void;
}

export const useSuccessful = create<Successful>((set) => {
  return {
    successful: false,
    setSuccessful: (state: boolean) => set({ successful: state }),
  };
});

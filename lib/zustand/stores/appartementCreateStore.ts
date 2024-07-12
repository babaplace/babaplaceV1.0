import {
  additionalInfoScheme,
  basicInfoScheme,
  detailsSheme,
  espaceAnnexeSheme,
  equipementSheme,
  financialInfoScheme,
  imagesStepSheme,
} from "@/src/types/appartement.sheme";
import { createStore } from "zustand/vanilla";
import { PropertyType } from "../../../src/types/appartement.sheme";

export type AppartementFormState = {
  basicInfos: basicInfoScheme;
  details: detailsSheme;
  financialInfos: financialInfoScheme;
  otherInformations: additionalInfoScheme;
  images: imagesStepSheme;
  espaceAnnexe: espaceAnnexeSheme;
  equipements: equipementSheme;
  PropertyType: PropertyType | null;
};

export type AppartementFormActions = {
  setQuartier: (newquartier: string) => void;
  setCity: (newCity: string) => void;
  setPropertyType: (newPropertyType: PropertyType) => void;
  setAddress: (newAddress: string) => void;
  setSurface: (newSurface: number) => void;
  setNumberRooms: (newNumberRooms: number) => void;
  setNumberMaxFloor: (newNumberMaxFloor: number) => void;
  setNumberUnitsPerFloor: (newNumberUnitsPerFloor: number) => void;
  setPrice: (newPrice: number) => void;
  setCaution: (newCaution: number) => void;
  setDescription: (newDescription: string) => void;
  setBasicInfos: (newBasicInfos: basicInfoScheme) => void;
  setDetails: (newDetails: detailsSheme) => void;
  setFinancialInfos: (newFinancialInfos: financialInfoScheme) => void;
  setOtherInformations: (newOtherInformations: additionalInfoScheme) => void;
  addImages: (newImage: imagesStepSheme[0]) => void;
  removeImageById: (removeImage: imagesStepSheme[0]) => void;
  modifieImagesByKey: (key: string, newImage: imagesStepSheme[0]) => void;
  addEspaceAnnexe: (newEspaceAnnexe: espaceAnnexeSheme[0]) => void;
  removeEspaceAnnexe: (removeEspaceAnnexe: espaceAnnexeSheme[0]) => void;
  addEquipement: (newEquipement: equipementSheme[0]) => void;
  removeEquipement: (removeEquipement: equipementSheme[0]) => void;
  resetForm: () => void;
};

export const defaultAppartementFormState: AppartementFormState = {
  basicInfos: {
    quartier: "",
    city: "",
    address: "",
  },
  PropertyType: null,

  details: {
    surface: 0,
    numberRooms: 0,
    numberMaxFloor: 0,
    numberUnitsPerFloor: 0,
  },
  financialInfos: {
    price: 0,
    caution: 0,
  },
  otherInformations: {
    description: "",
  },
  images: [],
  espaceAnnexe: [],
  equipements: [],
};
export type AppartementFormStore = AppartementFormState &
  AppartementFormActions;

export const createAppartementFormStore = (
  initState: AppartementFormState = defaultAppartementFormState
) => {
  return createStore<AppartementFormStore>()((set) => ({
    ...initState,
    setQuartier: (newquartier: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, quartier: newquartier },
      })),
    setCity: (newCity: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, city: newCity },
      })),
    setPropertyType: (newProppertyType: PropertyType) =>
      set((state) => ({
        PropertyType: newProppertyType,
      })),
    setAddress: (newAddress: string) =>
      set((state) => ({
        basicInfos: { ...state.basicInfos, address: newAddress },
      })),
    setSurface: (newSurface: number) =>
      set((state) => ({
        details: { ...state.details, surface: newSurface },
      })),
    setNumberRooms: (newNumberRooms: number) =>
      set((state) => ({
        details: { ...state.details, numberRooms: newNumberRooms },
      })),
    setNumberMaxFloor: (newNumberMaxFloor: number) =>
      set((state) => ({
        details: { ...state.details, numberMaxFloor: newNumberMaxFloor },
      })),
    setNumberUnitsPerFloor: (newNumberUnitsPerFloor: number) =>
      set((state) => ({
        details: {
          ...state.details,
          numberUnitsPerFloor: newNumberUnitsPerFloor,
        },
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
    addEspaceAnnexe: (newEspaceAnnexe: espaceAnnexeSheme[0]) =>
      set((state) => ({
        espaceAnnexe: [...state.espaceAnnexe, newEspaceAnnexe],
      })),
    removeEspaceAnnexe: (removeEspaceAnnexe: espaceAnnexeSheme[0]) =>
      set((state) => ({
        espaceAnnexe: state.espaceAnnexe.filter(
          (espace) => espace !== removeEspaceAnnexe
        ),
      })),
    addEquipement: (newEquipement: equipementSheme[0]) =>
      set((state) => ({
        equipements: [...state.equipements, newEquipement],
      })),
    removeEquipement: (removeEquipement: equipementSheme[0]) =>
      set((state) => ({
        equipements: state.equipements.filter(
          (equipement) => equipement !== removeEquipement
        ),
      })),
    resetForm: () =>
      set({
        ...defaultAppartementFormState,
      }),
  }));
};

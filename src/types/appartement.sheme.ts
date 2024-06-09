import { z } from "zod";

export const basicInfoScheme = z.object({
  title: z
    .string({ required_error: "le titre est requis" })
    .min(1, { message: "Le titre est requis" }),
  city: z
    .string({ required_error: "la ville est requis" })
    .min(1, { message: "La ville est requise" }),
  address: z
    .string({ required_error: "l'addresse est requis" })
    .min(1, { message: "L'addresse est requis" }),
});

export const detailsSheme = z.object({
  numberChambres: z
    .string()
    .min(1, { message: "Le nombre de chambres doit être supérieur à 1" }),
  numberToilettes: z.string().default("0"),
  Cuisine: z.string().default("0"),

  niveauEtage: z
    .string()
    .min(0, { message: "Le niveau d'étage doit être supérieur à 0" }),

  numberSalons: z.string().default("0"),
});

export const financialInfoScheme = z.object({
  price: z.string().min(1, { message: "Le prix est requis" }),
  caution: z.string().optional(),
});

export const additionalInfoScheme = z.object({
  description: z.string().optional(),
});

export const imagesStepSheme = z.array(
  z.object({
    file: z.string(),
    key: z.string(),
    progress: z.union([
      z.literal("PENDING"),
      z.literal("COMPLETE"),
      z.literal("ERROR"),
      z.number(),
    ]),
  })
);

export type basicInfoScheme = z.infer<typeof basicInfoScheme>;
export type detailsSheme = z.infer<typeof detailsSheme>;
export type financialInfoScheme = z.infer<typeof financialInfoScheme>;
export type additionalInfoScheme = z.infer<typeof additionalInfoScheme>;
export type imagesStepSheme = z.infer<typeof imagesStepSheme>;

export const appartementScheme = z.object({
  basicInfoScheme,
  detailsSheme,
  financialInfoScheme,
  additionalInfoScheme,
  imagesStepSheme,
});

export type appartementScheme = z.infer<typeof appartementScheme>;

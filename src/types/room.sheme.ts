import { z } from "zod";

export const basicInfoRoomScheme = z.object({
  address: z
    .string({ required_error: "l'addresse est requis" })
    .min(1, { message: "L'addresse est requis" }),
  city: z
    .string({ required_error: "la ville est requis" })
    .min(1, { message: "La ville est requise" }),
  quartier: z
    .string({ required_error: "le quartier est requis" })
    .min(1, { message: "Le quartier est requis" }),
});

export const financialInfoRoomScheme = z.object({
  price: z.number().min(1, { message: "Le prix est requis" }),
  caution: z.number().optional(),
});

export const additionalInfoRoomScheme = z.object({
  surface: z.number().optional().default(0),
  description: z.string().optional(),
});

export const imagesStepRoomSheme = z.array(
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

export const equipementRoomSheme = z.array(
  z.enum([
    "TOILET",
    "SHOWER",
    "SHARED_BATHROOM",
    "PRIVATE_BATHROOM",
    "BED",
    "CLOSET",
    "DESK",
    "CHAIR",
    "FAN",
    "INTERNET_ACCESS",
  ])
);

export type basicInfoRoomScheme = z.infer<typeof basicInfoRoomScheme>;
export type financialInfoRoomScheme = z.infer<typeof financialInfoRoomScheme>;
export type additionalInfoRoomScheme = z.infer<typeof additionalInfoRoomScheme>;
export type imagesStepRoomSheme = z.infer<typeof imagesStepRoomSheme>;
export type equipementRoomSheme = z.infer<typeof equipementRoomSheme>;

export const appartementRoomScheme = z.object({
  basicInfoRoomScheme,
  financialInfoRoomScheme,
  additionalInfoRoomScheme,
  imagesStepRoomSheme,
  equipementRoomSheme,
});

export type appartementRoomScheme = z.infer<typeof appartementRoomScheme>;

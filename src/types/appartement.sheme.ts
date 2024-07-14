import { z } from "zod";

export const basicInfoScheme = z.object({
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

export const detailsSheme = z.object({
  surface: z.number().optional().default(0),
  numberRooms: z
    .number()
    .min(1, { message: "Le nombre de pièces doit être supérieur à 1" })
    .default(0),
  numberMaxFloor: z.number().optional().default(0),
  numberUnitsPerFloor: z.number().optional().default(0),
});

export const financialInfoScheme = z.object({
  price: z.number().min(1, { message: "Le prix est requis" }),
  caution: z.number().optional(),
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

export const espaceAnnexeSheme = z.array(
  z.enum([
    "BALCONY",
    "SECURITY_GUARD",
    "JARDIN",
    "TERRASSE",
    "ESPACE_VERT",
    "PISCINE",
  ])
);

export const equipementSheme = z.array(
  z.enum([
    "ELEVATOR",
    "SHARED_BATHROOM",
    "PRIVATE_BATHROOM",
    "SHARED_KITCHEN",
    "PRIVATE_KITCHEN",
    "LIVING_ROOM",
    "TOILET",
    "CLIMATISATION",
    "CLOSED_RESIDENCE",
    "SECURITY",
  ])
);

export type basicInfoScheme = z.infer<typeof basicInfoScheme>;
export type detailsSheme = z.infer<typeof detailsSheme>;
export type financialInfoScheme = z.infer<typeof financialInfoScheme>;
export type additionalInfoScheme = z.infer<typeof additionalInfoScheme>;
export type imagesStepSheme = z.infer<typeof imagesStepSheme>;
export type espaceAnnexeSheme = z.infer<typeof espaceAnnexeSheme>;
export type equipementSheme = z.infer<typeof equipementSheme>;

export const appartementScheme = z.object({
  basicInfoScheme,
  detailsSheme,
  financialInfoScheme,
  additionalInfoScheme,
  imagesStepSheme,
  espaceAnnexeSheme,
  equipementSheme,
});

export type appartementScheme = z.infer<typeof appartementScheme>;

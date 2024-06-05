import { z } from "zod";

export const registerSheme = z.object({
  name: z
    .string({ required_error: "le nom est requis" })
    .min(1, "Le nom est requis"),
  phone: z.string().optional(),
  email: z
    .string({ required_error: "l'email est requis" })
    .email("L'adresse e-mail n'est pas valide"),
  password: z
    .string({ required_error: "le mot de passe est obligatoire" })
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export type registerSheme = z.infer<typeof registerSheme>;

export const loginScheme = z.object({
  email: z
    .string({ required_error: "l'email est requis" })
    .email("L'adresse e-mail n'est pas valide"),
  password: z
    .string({ required_error: "le mot de passe est requis" })
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export type loginScheme = z.infer<typeof loginScheme>;

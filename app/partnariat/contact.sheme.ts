import { z } from "zod";

export const contactSheme = z.object({
  role: z.enum(["agence", "bailleur", "client"]).default("client"),
  name: z.string().optional(),
  email: z
    .string({ required_error: "l'email est requis" })
    .email("L'email est nom valide !"),
  message: z.string().optional(),
  subject: z.enum(["partneriat", "contact"]).default("contact"),
});

export const contactShemePartneriat = z.object({
  role: z.enum(["agence", "bailleur", "client"], {
    message: "Veuillez selectionner une option",
  }),
  name: z
    .string({ required_error: "le nom est requis" })
    .min(1, "le nom est requis"),
  email: z
    .string({ required_error: "l'email est requis" })
    .email("L'email est nom valide !"),
  message: z.string().optional(),
  subject: z.enum(["partneriat", "contact"]).default("partneriat"),
});

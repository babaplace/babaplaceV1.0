import { authAction } from "@/lib/safe-action";
import {
  additionalInfoScheme,
  basicInfoScheme,
  detailsSheme,
  financialInfoScheme,
} from "../../appartement.sheme";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const EditappartementEditSheme = basicInfoScheme.extend({
  appartementId: z.string(),
});

export const doEditBasicInfomartionsAppartement = authAction(
  EditappartementEditSheme,
  async (basiInfos, currentUser) => {
    try {
      const appartement = await prisma.appartement.findUnique({
        where: { id: basiInfos.appartementId, ownerId: currentUser.userId },
      });

      if (!appartement) {
        throw new Error("Impossible de modifier cet appartement");
      }

      const newAppartement = await prisma.appartement.update({
        where: { id: basiInfos.appartementId, ownerId: currentUser.userId },
        data: {
          address: basiInfos.address,
          title: basiInfos.title,
          city: basiInfos.city,
        },
      });

      revalidatePath(`/appartements/appartement/${appartement.id}/edit/`);

      return {
        newAppartement,
        message: "Appartement mise à jour !",
      };
    } catch (error) {
      throw new Error("Erreur lors de la mise a jour");
    }
  }
);

const EditdetailsEditScheme = detailsSheme.extend({
  appartementId: z.string(),
});

export const doEditDetailsAppartement = authAction(
  EditdetailsEditScheme,
  async (details, currentUser) => {
    try {
      const appartement = await prisma.appartement.findUnique({
        where: {
          id: details.appartementId,
          ownerId: currentUser.userId,
        },
      });

      if (!appartement) {
        throw new Error("Impossible de modifier cet appartement");
      }

      const newAppartement = await prisma.appartement.update({
        where: { id: details.appartementId, ownerId: currentUser.userId },
        data: {
          numberChambres: Number(details.numberChambres),
          numberToilettes: Number(details.numberToilettes),
          niveauEtage: Number(details.niveauEtage),
          numberSalons: Number(details.numberSalons),
          numberCuisine: Number(details.Cuisine),
        },
      });

      revalidatePath(`/appartements/appartement/${appartement.id}/edit/`);

      return {
        newAppartement,
        message: "Appartement mise à jour !",
      };
    } catch (error) {
      throw new Error(
        "Erreur lors de la mise a jour des détails de l'appartement"
      );
    }
  }
);

const EditfinancialInfoEditScheme = financialInfoScheme.extend({
  appartementId: z.string(),
});

export const doEditFinancialInfoAppartement = authAction(
  EditfinancialInfoEditScheme,
  async (financialInfo, currentUser) => {
    try {
      const appartement = await prisma.appartement.findUnique({
        where: {
          id: financialInfo.appartementId,
          ownerId: currentUser.userId,
        },
      });

      if (!appartement) {
        throw new Error("Impossible de modifier cet appartement");
      }

      const newAppartement = await prisma.appartement.update({
        where: { id: financialInfo.appartementId, ownerId: currentUser.userId },
        data: {
          price: Number(financialInfo.price),
          caution: Number(financialInfo.caution),
        },
      });

      revalidatePath(`/appartements/appartement/${appartement.id}/edit/`);

      return {
        newAppartement,
        message: "Appartement mise à jour !",
      };
    } catch (error) {
      throw new Error(
        "Erreur lors de la mise a jour des informations financières de l'appartement"
      );
    }
  }
);

const EditAdditionalInfoEditScheme = additionalInfoScheme.extend({
  appartementId: z.string(),
});

export const doEditAdditionalInfoAppartement = authAction(
  EditAdditionalInfoEditScheme,
  async (additionalInfo, currentUser) => {
    try {
      const appartement = await prisma.appartement.findUnique({
        where: {
          id: additionalInfo.appartementId,
          ownerId: currentUser.userId,
        },
      });

      if (!appartement) {
        throw new Error("Impossible de modifier cet appartement");
      }

      const newAppartement = await prisma.appartement.update({
        where: {
          id: additionalInfo.appartementId,
          ownerId: currentUser.userId,
        },
        data: {
          description: additionalInfo.description,
        },
      });

      revalidatePath(`/appartements/appartement/${appartement.id}/edit/`);

      return {
        newAppartement,
        message: "Appartement mise à jour !",
      };
    } catch (error) {
      throw new Error(
        "Erreur lors de la mise a jour des informations supplémentaires de l'appartement"
      );
    }
  }
);

const EditimagesStepEditScheme = z.object({
  appartementId: z.string(),
});

export const doEditImagesStepAppartement = authAction(
  EditimagesStepEditScheme,
  async (imagesStep, currentUser) => {
    try {
      // Logic for editing images step of the appartement
    } catch (error) {
      throw new Error(
        "Erreur lors de la mise a jour des étapes d'images de l'appartement"
      );
    }
  }
);

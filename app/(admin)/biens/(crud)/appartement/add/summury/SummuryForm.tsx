"use client";

import React, { FormEventHandler } from "react";
import Image from "next/image";
import { useAppartementStore } from "@/lib/zustand/Providers/CreateAppartementStoreProviders";
import Link from "next/link";
import NavigationStep from "../../../sidebar/NavigationStep";
import { Button, buttonVariants } from "@/components/ui/button";
import { doCreateAppartement } from "../appartement.create.action";
import {
  appartementScheme,
  equipementSheme,
  espaceAnnexeSheme,
  imagesStepSheme,
} from "../../../../../../../src/types/appartement.sheme";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useEdgeStore } from "@/lib/edgestore";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";

const SummaryForm = () => {
  const {
    basicInfos,
    details,
    financialInfos,
    otherInformations,
    images,
    resetForm,
    espaceAnnexe,
    equipements,
  } = useAppartementStore((state) => state);
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  const createMatiereMutation = useMutation({
    mutationFn: async ({
      data,
    }: // imagesUrls,
    {
      data: appartementScheme;
      // imagesUrls: { url: string }[];
    }) => {
      // ajouter dans un store et continuer

      const result = await doCreateAppartement({
        basicInfoScheme: data.basicInfoScheme,
        detailsSheme: data.detailsSheme,
        financialInfoScheme: data.financialInfoScheme,
        additionalInfoScheme: data.additionalInfoScheme,
        imagesStepSheme: data.imagesStepSheme,
        espaceAnnexeSheme: data.espaceAnnexeSheme,
        equipementSheme: data.equipementSheme,
      });
      if (!result.serverError) {
        toast.success(result.data?.message);
        resetForm();
        router.push("/");
      } else {
        toast.error(result.serverError);
      }
    },
  });

  const onSubmit = async () => {
    images.map(async (image) => {
      await edgestore.publicFiles.confirmUpload({
        url: image.file,
      });
    });
    createMatiereMutation.mutate({
      data: {
        basicInfoScheme: basicInfos,
        detailsSheme: details,
        financialInfoScheme: financialInfos,
        additionalInfoScheme: otherInformations,
        imagesStepSheme: images,
        espaceAnnexeSheme: espaceAnnexe,
        equipementSheme: equipements,
      },
    });
  };

  return (
    <div className="h-full w-full flex flex-col justify-between px-4">
      {createMatiereMutation.isPending || createMatiereMutation.isSuccess ? (
        <div className="flex justify-center items-center min-h-60 ">
          <div className="flex flex-col justify-center items-center gap-3">
            <Loader />
            <p>Veuillez patienter ...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-black text-2xl font-bold">
                Appartement informations finales
              </h1>
              <p className="text-gray-500text-sm">verifier les informations</p>
            </div>
            <div className="flex flex-col gap-4 bg-neutro-magnolia rounded-lg ">
              {/* etape1 Localistion */}
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">Localisations</h1>
                  <Link
                    href={"/biens/appartement/add"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="divide-y-2 divide-dotted flex flex-col ">
                  <ItemList label="Adresse" value={basicInfos.address} />
                  <ItemList label="Ville" value={basicInfos.city} />
                  <ItemList label="Quartier" value={basicInfos.quartier} />
                </div>
              </div>
              {/* etape 3 details */}
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">Details</h1>
                  <Link
                    href={"/biens/appartement/add/details"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="divide-y-2 divide-dotted flex flex-col ">
                  <ItemList
                    label="Nombre de chambres"
                    value={details.numberRooms}
                  />
                  <ItemList label="Surface" value={details.surface} />
                  <ItemList
                    label="Nombre d'unités par étage"
                    value={details.numberUnitsPerFloor}
                  />
                  <ItemList
                    label="Nombre d'étages maximum"
                    value={details.numberMaxFloor}
                  />
                </div>
              </div>

              {/* etape : Espaces Annexes  */}
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">Espaces Annexes</h1>
                  <Link
                    href={"/biens/appartement/add/espaceAnnexe"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 ">
                  {espaceAnnexe.map((option, id) => (
                    <CardComposantBien key={id} name={option} />
                  ))}
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">Prix</h1>
                  <Link
                    href={"/biens/appartement/add/financesInfos"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="divide-y-2 divide-dotted flex flex-col ">
                  <ItemList label="Prix" value={financialInfos.price} />
                  <ItemList label="Caution" value={financialInfos.caution} />
                </div>
              </div>

              {/* etape : Espaces Annexes  */}
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold"> Equipements </h1>
                  <Link
                    href={"/biens/appartement/add/equipement"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 ">
                  {equipements.map((option, id) => (
                    <CardComposantBien key={id} name={option} />
                  ))}
                </div>
              </div>

              {/* etape 3 Detais  */}

              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">
                    Autres Details Sur le bien
                  </h1>
                  <Link
                    href={"/biens/appartement/add/othersInformations"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="divide-y-2 divide-dotted flex flex-col ">
                  <ItemList
                    label="Description"
                    value={otherInformations.description}
                  />
                </div>
              </div>

              {/* etape. 4 images */}
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">Images</h1>
                  <Link
                    href={"/biens/appartement/add/imagesStep"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="divide-y-2 divide-dotted flex flex-col ">
                  {images.length > 0 ? ( // Conditional rendering based on uploadedImages state
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {images.map((image) => (
                        <div key={image.key} className="relative">
                          <Image
                            alt="Uploaded Image"
                            className="rounded-lg object-cover"
                            height={300}
                            src={image.file}
                            style={{
                              aspectRatio: "300/300",
                              objectFit: "cover",
                            }}
                            width={300}
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <NavigationStep>
              <Link
                href={"/biens/appartement/add/imagesStep"}
                className={buttonVariants({ variant: "outline" })}
              >
                Precedent
              </Link>
              <form
                action={async () => {
                  await onSubmit();
                }}
              >
                <Button
                  type="submit"
                  disabled={createMatiereMutation.isPending}
                  className="bg-green-500 hover:bg-green-600"
                >
                  {createMatiereMutation.isPending
                    ? "En cours.."
                    : "Enregistrer"}
                </Button>
              </form>
            </NavigationStep>
          </div>
        </>
      )}
    </div>
  );
};

export default SummaryForm;

export const ItemList = ({
  value,
  label,
}: {
  value?: string | number;
  label: string;
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <h4 className="text-black font-semibold">{label} </h4>
      <span className="text-black ">{value}</span>
    </div>
  );
};

export const OptionItem = ({
  show,
  label,
}: {
  show: boolean;
  label: string;
}) => {
  return show ? (
    <p className="p-2 my-4 bg-red-50 border-red-50 shadow-sm font-semibold border text-center rounded-md">
      {label}
    </p>
  ) : null;
};

export const CardComposantBien = ({
  name,
}: {
  name: espaceAnnexeSheme[0] | equipementSheme[0];
}) => {
  const translations: Record<string, string> = {
    BALCONY: "Balcon",
    SECURITY_GUARD: "Gardien de sécurité",
    JARDIN: "Jardin",
    TERRASSE: "Terrasse",
    ESPACE_VERT: "Espace vert",
    PISCINE: "Piscine",
    ELEVATOR: "Ascenseur",
    SHARED_BATHROOM: "Salle de bain partagée",
    PRIVATE_BATHROOM: "Salle de bain privée",
    SHARED_KITCHEN: "Cuisine partagée",
    PRIVATE_KITCHEN: "Cuisine privée",
    SECURITY: "Sécurité",
    LIVING_ROOM: "Salon",
    TOILET: "Toilettes",
    CLIMATISATION: "Climatisation",
    CLOSED_RESIDENCE: "Résidence fermée",
  };

  return (
    <div className="p-4 rounded-sm text-sm text-center border border-white bg-white  flex justify-center items-center">
      {translations[name] || name}
    </div>
  );
};

"use client";

import React, { FormEventHandler } from "react";
import Image from "next/image";
import { useAppartementFormStore } from "@/lib/zustand/stores/appartementCreateStore";
import Link from "next/link";
import NavigationStep from "../NavigationStep";
import { Button, buttonVariants } from "@/components/ui/button";
import { doCreateAppartement } from "../appartement.create.action";
import { appartementScheme, imagesStepSheme } from "../../appartement.sheme";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { uploadImages } from "../UploadImage";
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
  } = useAppartementFormStore();
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
        detailsSheme: data.detailsSheme,
        financialInfoScheme: data.financialInfoScheme,
        additionalInfoScheme: data.additionalInfoScheme,
        basicInfoScheme: data.basicInfoScheme,
        imagesStepSheme: data.imagesStepSheme,
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
                  <h1 className="text-xl font-extrabold">
                    Localisations Et Titre
                  </h1>
                  <Link
                    href={"/appartements/appartement/add"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="divide-y-2 divide-dotted flex flex-col ">
                  <ItemList label="Title" value={basicInfos.title} />
                  <ItemList label="Ville" value={basicInfos.city} />
                  <ItemList label="Adresse" value={basicInfos.address} />
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">Details</h1>
                  <Link
                    href={"/appartements/appartement/add/details"}
                    className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="divide-y-2 divide-dotted flex flex-col ">
                  <ItemList
                    label="Nombre de chambres"
                    value={details.numberChambres}
                  />
                  <ItemList
                    label="Nombre de toilletes"
                    value={details.numberToilettes}
                  />
                  <ItemList label="Cuisine" value={details.Cuisine} />
                  <ItemList
                    label="Niveau d'etage"
                    value={details.niveauEtage}
                  />
                  <ItemList
                    label="Nombre de salons"
                    value={details.numberSalons}
                  />
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">Prix</h1>
                  <Link
                    href={"/appartements/appartement/add/financesInfos"}
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

              {/* etape 3 Detais  */}

              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-extrabold">
                    Autres Details Sur le bien
                  </h1>
                  <Link
                    href={"/appartements/appartement/add/othersInformations"}
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
                    href={"/appartements/appartement/add/imagesStep"}
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
                href={"/appartements/appartement/add/imagesStep"}
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

const ItemList = ({
  value,
  label,
}: {
  value?: string | number;
  label: string;
}) => {
  if (!value) {
    return null;
  }
  return (
    <div className="flex items-center justify-between py-2">
      <h4 className="text-black font-semibold">{label} </h4>
      <span className="text-black ">{value}</span>
    </div>
  );
};

const OptionItem = ({ show, label }: { show: boolean; label: string }) => {
  return show ? (
    <p className="p-2 my-4 bg-red-50 border-red-50 shadow-sm font-semibold border text-center rounded-md">
      {label}
    </p>
  ) : null;
};

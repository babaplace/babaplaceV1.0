import Link from "next/link";
import React from "react";
import { ItemList } from "../../add/summury/SummuryForm";
import { appartementByIdWithMediasUserType } from "../../apartement.query";
import { notFound } from "next/navigation";
import Image from "next/image";

const EditForm = ({
  appartement,
}: {
  appartement: appartementByIdWithMediasUserType;
}) => {
  if (!appartement) {
    notFound();
  }

  return (
    <div>
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
                <ItemList label="Title" value={appartement.title} />
                <ItemList label="Ville" value={appartement.city} />
                <ItemList label="Adresse" value={appartement.address ?? ""} />
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
                  value={appartement.numberChambres}
                />
                <ItemList
                  label="Nombre de toilletes"
                  value={appartement.numberToilettes}
                />
                <ItemList label="Cuisine" value={appartement.numberCuisine} />
                <ItemList
                  label="Niveau d'etage"
                  value={appartement.niveauEtage}
                />
                <ItemList
                  label="Nombre de salons"
                  value={appartement.numberSalons}
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
                <ItemList label="Prix" value={appartement.price} />
                <ItemList label="Caution" value={appartement.caution ?? ""} />
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
                  value={appartement.description ?? ""}
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
                {appartement.medias.length > 0 ? ( // Conditional rendering based on uploadedImages state
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {appartement.medias.map((image) => (
                      <div key={image.id} className="relative">
                        <Image
                          alt="Uploaded Image"
                          className="rounded-lg object-cover"
                          height={300}
                          src={image.url}
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
      </>
    </div>
  );
};

export default EditForm;

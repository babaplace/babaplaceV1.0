import React from "react";
import {
  getAppartementByIdWithMedias,
  getAppartementByIdWithMediasUser,
} from "../../../appartements/appartement/apartement.query";
import { notFound } from "next/navigation";
import { getUserSession } from "@/lib/prisma";
import Container from "@/components/layout/Container";
import EditDetailsInfos from "./EditDetailsInfos";
import EditPriceDetails from "./EditPriceDetails";
import EditOtherInformations from "./EditOtherInformations";
import EditImages from "./EditImages";
import EditBasicInfomartions from "./EditBasicInfomartions";

const page = async ({ params }: { params: { appartementId: string } }) => {
  const session = await getUserSession();

  const appartement = await getAppartementByIdWithMediasUser(
    params.appartementId,
    session.userId ?? ""
  );

  if (!appartement || !appartement) {
    notFound();
  }

  return (
    <Container className="px-8">
      <div>
        <>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-black text-2xl font-bold">
                Appartement informations
              </h1>
              <p className="text-gray-500text-sm">
                Verifier ou Modifier les informations
              </p>
            </div>
            <div className="flex flex-col gap-4 bg-neutro-magnolia rounded-lg ">
              {/* etape1 Localistion */}
              <EditBasicInfomartions
                basicInfos={{
                  title: appartement.title,
                  city: appartement.city,
                  address: appartement.address ?? "",
                }}
                appartementId={appartement.id}
              />

              {/* etape 2 Detais  */}

              <EditDetailsInfos
                appartementId={appartement.id}
                details={{
                  Cuisine: String(appartement.numberCuisine),
                  niveauEtage: String(appartement.niveauEtage),
                  numberSalons: String(appartement.numberSalons),
                  numberChambres: String(appartement.numberChambres),
                  numberToilettes: String(appartement.numberToilettes),
                }}
              />

              {/* etape 3 */}

              <EditPriceDetails
                appartementId={appartement.id}
                priceInfos={{
                  price: String(appartement.price),
                  caution: String(appartement.caution),
                }}
              />

              {/* etape 4 */}

              <EditOtherInformations
                appartementId={appartement.id}
                otherInfomations={{
                  description: appartement.description ?? "",
                }}
              />

              {/* etape. 5 images */}
              <EditImages
                images={appartement.medias}
                appartementId={appartement.id}
              />
            </div>
          </div>
        </>
      </div>
    </Container>
  );
};

export default page;

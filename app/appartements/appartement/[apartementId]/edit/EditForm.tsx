import Link from "next/link";
import React from "react";
import { ItemList } from "../../add/summury/SummuryForm";
import { appartementByIdWithMediasUserType } from "../../apartement.query";
import { notFound } from "next/navigation";
import Image from "next/image";
import EditBasicInfomartions from "./EditBasicInfomartions";
import EditDetailsInfos from "./EditDetailsInfos";
import EditPriceDetails from "./EditPriceDetails";
import EditOtherInformations from "./EditOtherInformations";
import EditImages from "./EditImages";

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

            <EditPriceDetails
              appartementId={appartement.id}
              priceInfos={{
                price: String(appartement.price),
                caution: String(appartement.caution),
              }}
            />
            <EditOtherInformations
              appartementId={appartement.id}
              otherInfomations={{ description: appartement.description ?? "" }}
            />

            {/* etape. 4 images */}
            <EditImages
              images={appartement.medias}
              appartementId={appartement.id}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default EditForm;

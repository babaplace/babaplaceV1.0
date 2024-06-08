import { getAppartementByIdWithMedias } from "@/src/db/apartement.query";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Building,
  Building2,
  BuildingIcon,
  LandPlot,
  LucideIcon,
  MapPinned,
  UtensilsCrossed,
  Waves,
  ZoomInIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import ImagesPageAppartement from "@/components/ImagesPageAppartement";

type PageAppartementProps = {
  params: { appartementId: string };
};

const page = async ({ params: { appartementId } }: PageAppartementProps) => {
  const appartement = await getAppartementByIdWithMedias(appartementId);

  if (!appartement) {
    return notFound();
  }

  return (
    <div>
      {/* <TitlePage /> */}

      <Container className="mb-24 flex justify-between items-start gap-8 p-4  max-md:flex-col">
        {/* images */}
        <ImagesPageAppartement images={appartement.medias} />

        {/* details right */}
        <div className="md:w-1/2 px-4 flex flex-col gap-6">
          {/* title */}
          <h2 className="text-2xl font-extrabold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            {appartement.title}
          </h2>
          {/* address */}
          <div className="flex items-center gap-8 ">
            <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex gap-4 items-center">
              <Building2 />
              <span>{appartement.city}</span>
            </p>
            <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex gap-4 items-center">
              <MapPinned />
              <span>{appartement.address}</span>
            </p>
          </div>
          {/* pricing */}
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                à partir de :
              </span>
              <p className="text-primary text-2xl font-extrabold">
                {appartement.price} DH
              </p>
            </div>
            <div>
              <span className="text-sm font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                caution :
              </span>
              <p className="text-primary font-bold">{appartement.caution} DH</p>
            </div>
          </div>
          {/* description */}
          <div>
            <p>{appartement.description}</p>
          </div>
          {/* actions */}
          <div className="mt-auto">
            <Button>Reserver maintenant</Button>
          </div>
        </div>
      </Container>

      {/* informations */}
      <Container className="bg-white rounded-sm shadow-lg p-8 my-16 md:my-24 max-xl:mx-4  ">
        <h1 className="font-bold  text-2xl">Informations </h1>
        {/* datails */}
        <div>
          <div className="my-4  gap-16  grid max-md:gap-4 md:flex md:justify-between items-center">
            <ItemInfos title="Ville" value={appartement.city} />
            <ItemInfos title="Adresse" value={appartement.address} />
            <ItemInfos title="Caution" value={`MAD  ${appartement.caution}`} />
            <ItemInfos title="Chambres" value={appartement.numberChambres} />
          </div>
        </div>
      </Container>

      {/* Addresse */}
      {/* <Container className="bg-white rounded-sm shadow-lg my-16 md:my-24 py-0  max-xl:mx-4  ">
        <h1 className="font-bold  text-xl italic px-8 py-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          {appartement.city} - {appartement.address}{" "}
        </h1>
        <Image
          src={"/maps.svg"}
          alt="carte de localisation"
          width={600}
          height={600}
          className="w-full  bg-gray-50"
        ></Image>
      </Container> */}

      {/* Details */}
      <Container className="bg-white my-16 md:my-24 shadow-lg rounded-sm p-8 max-xl:mx-4 ">
        <h1 className="font-bold  text-2xl">Details </h1>
        <div>
          <div className="my-6  gap-10 grid grid-cols-2 md:grid-cols-4  items-center flex-wrap">
            <ItemInfosIcon
              Icon={UtensilsCrossed}
              title="Cuisine"
              value={`${appartement.numberCuisine}`}
            />
            <ItemInfosIcon
              Icon={Bed}
              title="Chambres"
              value={`${appartement.numberChambres ?? 0}`}
            />
            <ItemInfosIcon
              Icon={Building2}
              title="Niveau"
              value={`${appartement.niveauEtage ?? 0}`}
            />
            <ItemInfosIcon
              Icon={Building}
              title="Salons"
              value={`${appartement.numberSalons ?? 0}`}
            />
            <ItemInfosIcon
              Icon={Waves}
              title="Toilettes"
              value={`${appartement.numberToilettes ?? 0}`}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;

const ItemInfos = ({
  title,
  value,
}: {
  title: string;
  value?: string | null | number;
}) => {
  return value ? (
    <div>
      <p className="font-extralight my-1 text-xs">{title}</p>
      <h4 className="my-1 text-lg font-semibold">{value}</h4>
    </div>
  ) : null;
};

const ItemInfosIcon = ({
  title,
  value,
  Icon,
}: {
  title: string;
  value?: string | null | number;
  Icon: LucideIcon;
}) => {
  return value ? (
    <div className="flex items-start gap-2">
      <Icon className="text-primary" />
      <div>
        <p className="font-extralight text-xs mb-1  ">{title}</p>
        <h4 className=" text-lg font-semibold">{value}</h4>
      </div>
    </div>
  ) : null;
};

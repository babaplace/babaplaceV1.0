import { getAppartementByIdWithMedias } from "@/app/appartements/appartement/apartement.query";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Building,
  Building2,
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
        <div className="md:w-1/2">
          <div className="grid gap-6">
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
              <Image
                src={appartement.medias[0].url ?? ""}
                alt="Main Image"
                width={800}
                height={600}
                className="[grid-area:stack] object-cover w-full aspect-[4/3]"
              />
              <button className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm rounded-full p-2 hover:bg-white/80 transition-colors">
                <ZoomInIcon className="w-5 h-5" />
                <span className="sr-only">Zoom</span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {appartement.medias.map((image) => (
                <button
                  key={image.id}
                  title="image"
                  className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-md"
                >
                  <Image
                    src={image.url}
                    alt="Thumbnail 1"
                    width={200}
                    height={150}
                    className="[grid-area:stack] object-cover w-full aspect-[4/3] group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
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
      <Container className="bg-white rounded-sm shadow-lg p-8 my-24 max-xl:mx-4  ">
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

      {/* informations */}
      <Container className="bg-white rounded-sm shadow-lg my-24 py-0  max-xl:mx-4  ">
        <h1 className="font-bold  text-xl italic px-8 py-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          {appartement.city} - {appartement.address}{" "}
        </h1>
        {/* datails */}
        <Image
          src={"/maps.svg"}
          alt="carte de localisation"
          width={600}
          height={600}
          className="w-full  bg-gray-50"
        ></Image>
      </Container>

      {/* Details */}
      <Container className="bg-white my-24 shadow-lg rounded-sm p-8 max-xl:mx-4 ">
        <h1 className="font-bold  text-2xl">Details </h1>
        <p className="text-lg font-light ">{appartement.description}</p>
        <div>
          <div className="my-6  gap-10 grid grid-cols-2 md:grid-cols-4  items-center flex-wrap">
            <ItemInfosIcon
              Icon={LandPlot}
              title="Cuisine"
              value={`${appartement.numberCuisine} m2`}
            />
            <ItemInfosIcon
              Icon={Bed}
              title="Chambres"
              value={`${appartement.numberChambres ?? 0}`}
            />
            <ItemInfosIcon
              Icon={UtensilsCrossed}
              title="Salon"
              value={`${appartement.numberSalons ?? 0}`}
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

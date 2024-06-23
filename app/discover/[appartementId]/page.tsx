import { getAppartementByIdWithMedias } from "@/src/db/apartement.query";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Building,
  Building2,
  BuildingIcon,
  CheckIcon,
  LandPlot,
  LucideIcon,
  MapPinned,
  PhoneIcon,
  UtensilsCrossed,
  Waves,
  X,
  ZoomInIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import ImagesPageAppartement from "@/components/ImagesPageAppartement";
import Booking from "./Booking";
import { SuggestedApartments } from "./Suggestions";

type PageAppartementProps = {
  params: { appartementId: string };
};

const page = async ({ params: { appartementId } }: PageAppartementProps) => {
  const appartement = await getAppartementByIdWithMedias(appartementId);

  if (!appartement) {
    return notFound();
  }
  const suggestedApartments = [
    {
      title: "Modern Apartment with Sea View",
      price: 3500,
      image: "apartment1.jpg",
      rating: 4.7,
      reviews: 18,
    },
    {
      title: "Cozy Studio in City Center",
      price: 2800,
      image: "apartment2.jpg",
      rating: 4.5,
      reviews: 23,
    },
    {
      title: "Spacious Family Apartment",
      price: 4200,
      image: "apartment3.jpg",
      rating: 4.8,
      reviews: 15,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {appartement.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {appartement.city}, Maroc
          </p>

          <ImagesPageAppartement images={appartement.medias} />
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              {/* property details */}
              <div className="flex justify-between text-gray-600 mb-6">
                <ItemInfos title="Ville" value={appartement.city} />
                <ItemInfos title="Adresse" value={appartement.address} />
                <ItemInfos
                  title="Caution"
                  value={`MAD  ${appartement.caution}`}
                />
                <ItemInfos
                  title="Chambres"
                  value={appartement.numberChambres}
                />
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  À propos de cet appartement
                </h2>
                <p className="text-gray-600">{appartement.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Localisation</h3>
                <Map location="Route côtière, Casablanca, Maroc" />
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <Booking
                appartementId={appartement.id}
                price={appartement.price}
              />
            </div>
          </div>
        </div>

        <SuggestedApartments currentAppartementCity={appartement.city} />
      </main>
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
    <span>
      <p className="font-extralight my-1 text-xs">{title}</p>
      <h4 className="my-1 text-lg font-semibold">{value}</h4>
    </span>
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
    <div className="flex items-center">
      <i className={`mr-2 text-primary`}>
        <Icon />
      </i>
      <span>
        {value}
        {title}
      </span>
    </div>
  ) : null;
};

type MapProps = {
  location: string;
};

const Map = ({ location }: MapProps) => (
  <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center mb-8">
    {/* Placeholder for an actual map component */}
    <p className="text-gray-600">Carte montrant {location}</p>
  </div>
);

import { getAppartementByIdWithMedias } from "@/src/db/apartement.query";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  FaBed,
  FaBath,
  FaCouch,
  FaWhatsapp,
  FaPhone,
  FaWifi,
  FaParking,
  FaTv,
  FaSwimmingPool,
  FaUtensils,
  FaSnowflake,
} from "react-icons/fa";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import ImagesPageAppartement from "@/app/discover/[appartementId]/ImagesPageAppartement";
import AppartementDetails from "./AppartementDetails";
import Booking from "./Booking";

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
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">
          {appartement.address.city} {appartement.address.quartier}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {appartement.numberRooms} chambres · {appartement.address.address}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ImagesPageAppartement images={appartement.images} />

          <Booking appartementId={appartement.id} price={appartement.price} />
        </div>

        <AppartementDetails appartement={appartement} />

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Politique de réservation</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Arrivée : À partir de 14h00</li>
            <li>Départ : Avant 11h00</li>
            <li>Annulation gratuite jusqu&apos;à 48h avant l&apos;arrivée</li>
            <li>Dépôt de garantie : 1000 MAD (remboursable)</li>
            <li>Non-fumeur</li>
            <li>Pas d&apos;animaux acceptés</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default page;

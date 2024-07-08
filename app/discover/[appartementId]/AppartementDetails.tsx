"use client";
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

import React, { useState } from "react";
import { appartementByIdWithMediasType } from "@/src/db/apartement.query";

const AmenityIcon: React.FC<{ icon: React.ElementType; text: string }> = ({
  icon: Icon,
  text,
}) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-red-600" />
    <span>{text}</span>
  </div>
);

type AppartementDetailsProps = {
  appartement: appartementByIdWithMediasType;
};

const AppartementDetails = ({ appartement }: AppartementDetailsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-12">
      <div className="flex border-b">
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === "description"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === "amenities"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("amenities")}
        >
          Équipements
        </button>
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === "location"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("location")}
        >
          Emplacement
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "description" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">À propos de ce logement</h2>
            <p className="text-gray-600 mb-4">
              Découvrez ce magnifique appartement de 4 chambres situé au cœur de
              Fès. Avec ses espaces généreux et sa décoration soignée, cet
              appartement offre un mélange parfait de confort moderne et de
              charme traditionnel marocain.
            </p>
            <p className="text-gray-600 mb-4">
              Profitez d&apos;une vue imprenable sur la ville depuis le grand
              balcon, cuisinez dans la cuisine entièrement équipée, et
              détendez-vous dans le spacieux salon. Idéalement situé, vous serez
              à proximité des principaux sites touristiques, restaurants et
              commerces.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Points forts de l&apos;appartement :
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>4 chambres spacieuses avec rangements</li>
              <li>2 salles de bain modernes</li>
              <li>Grand salon avec balcon offrant une vue panoramique</li>
              <li>Cuisine entièrement équipée</li>
              <li>Climatisation centralisée</li>
              <li>Accès Wi-Fi haut débit</li>
              <li>Parking sécurisé</li>
            </ul>
          </div>
        )}

        {activeTab === "amenities" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Équipements et services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <AmenityIcon icon={FaWifi} text="Wi-Fi haut débit" />
              <AmenityIcon icon={FaParking} text="Parking sécurisé" />
              <AmenityIcon icon={FaTv} text="TV écran plat" />
              <AmenityIcon icon={FaSwimmingPool} text="Accès piscine" />
              <AmenityIcon icon={FaUtensils} text="Cuisine équipée" />
              <AmenityIcon icon={FaSnowflake} text="Climatisation" />
              <AmenityIcon icon={FaBed} text="Linge de lit" />
              <AmenityIcon icon={FaBath} text="Serviettes" />
              <AmenityIcon icon={FaCouch} text="Salon spacieux" />
            </div>
          </div>
        )}

        {activeTab === "location" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Emplacement</h2>
            <p className="text-gray-600 mb-4">
              Situé dans le quartier prisé de Kanitra, cet appartement bénéficie
              d&apos;un emplacement idéal pour découvrir Fès. Vous serez à
              quelques minutes à pied de la médina, des restaurants renommés et
              des principales attractions touristiques.
            </p>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {/* Placeholder for map - replace with actual map component */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">
                  Carte de l&apos;emplacement
                </span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">À proximité :</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>5 min à pied de la médina de Fès</li>
              <li>10 min à pied du Palais Royal</li>
              <li>Nombreux cafés et restaurants à moins de 5 min</li>
              <li>Supermarché à 3 min à pied</li>
              <li>Arrêt de bus à 2 min</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppartementDetails;

import {
  BadgeDollarSign,
  Handshake,
  LucideIcon,
  MonitorCheck,
  School,
} from "lucide-react";
import React from "react";
import Container from "../layout/Container";
import { FaSearch, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";

type Props = {};

const services = [
  {
    Icon: School,
    title: "Louez",
    description: "Trouvez rapidement votre appartement",
  },
  {
    Icon: BadgeDollarSign,
    title: "Mettre en Location",
    description: "Trouvez des colocataires idéaux",
  },
  {
    Icon: Handshake,
    title: "Affiliation",
    description: "Apportez-nous des bailleurs et gagnez !",
  },
];

const Services = (props: Props) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Pourquoi Choisir BabaPlace ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-600 text-4xl mb-4">
              <FaSearch />
            </div>
            <h3 className="text-xl font-bold mb-2">Recherche Facile</h3>
            <p className="text-gray-600">
              Trouvez rapidement le logement qui vous convient grâce à notre
              moteur de recherche avancé.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-600 text-4xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Localisations Idéales</h3>
            <p className="text-gray-600">
              Découvrez des propriétés dans les meilleurs quartiers et
              emplacements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-600 text-4xl mb-4">
              <FaRegCalendarAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Réservation Simple</h3>
            <p className="text-gray-600">
              Réservez votre visite ou votre location en quelques clics
              seulement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

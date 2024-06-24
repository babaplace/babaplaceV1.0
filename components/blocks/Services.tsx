import {
  BadgeDollarSign,
  Handshake,
  LucideIcon,
  MonitorCheck,
  School,
} from "lucide-react";
import React from "react";
import Container from "../layout/Container";

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

const ServiceCard = ({
  title,
  description,
  Icon,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <div className="px-6 py-8 min-h-80 bg-white rounded-md text-center flex justify-evenly items-center flex-col overflow-hidden shadow-xl hover:shadow-xl transition  transform hover:-translate-y-1 hover:shadow-red-200 ">
      <Icon className="text-primary" size={50} />
      <h2 className="text-4xl font-medium text-gray-800">{title}</h2>
      <p className="max-w-md mx-auto mt-4  text-xl text-gray-400">
        {description}
      </p>
    </div>
  );
};

const Services = (props: Props) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Comment ça marche
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl text-primary mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Recherchez</h3>
            <p>Trouvez l&apos;appartement parfait pour votre séjour</p>
          </div>
          <div className="text-center">
            <div className="text-5xl text-primary mb-4">📅</div>
            <h3 className="text-xl font-bold mb-2">Réservez</h3>
            <p>Choisissez réservez en quelques clics</p>
          </div>
          <div className="text-center">
            <div className="text-5xl text-primary mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">Profitez</h3>
            <p>Installez-vous et profitez de votre séjour</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

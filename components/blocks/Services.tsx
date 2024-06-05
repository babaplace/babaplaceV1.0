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
    <section className="bg-white">
      <Container>
        <div className="mx-auto mb-[60px] text-center">
          <h2 className="mb-3 text-5xl  lg:text-6xl text-dark dark:text-white">
            Tout ce dont vous avez
            <span className="text-primary"> besoin !</span>
          </h2>
        </div>

        <div className="grid justify-center items-center gap-8  mt-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;

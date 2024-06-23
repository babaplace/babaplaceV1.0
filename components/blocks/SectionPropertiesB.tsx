import React from "react";
import Container from "../layout/Container";
import { getAllAppartementsWithImages } from "@/src/db/apartement.query";
import CardPropertyB from "./CardPropertyB";

const SectionPropertiesB = async () => {
  const appartements = await getAllAppartementsWithImages(4);
  return (
    <div className="bg-white">
      <section className="py-16 container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Vous pourriez <span className="text-primary">aimé !</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {appartements.map((appartement) => (
            <CardPropertyB appartement={appartement} key={appartement.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionPropertiesB;

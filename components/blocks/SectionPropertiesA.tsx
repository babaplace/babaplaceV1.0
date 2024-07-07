import React from "react";
import CardPropertyA from "./CardPropertyA";
import { getAllAppartementsWithImages } from "@/src/db/apartement.query";

const SectionPropertiesA = async () => {
  const appartements = await getAllAppartementsWithImages(4);
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Nouveaux Appartements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appartements.map((property) => (
          <CardPropertyA key={property.id} appartement={property} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Voir plus d&apos;appartements
        </button>
      </div>
    </section>
  );
};

export default SectionPropertiesA;

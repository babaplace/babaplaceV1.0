import React from "react";
import Container from "../layout/Container";
import CardPropertyA from "./CardPropertyA";
import { TitleSection } from "./TitleSection";
import { getAllAppartementsWithImages } from "@/src/db/apartement.query";
import Link from "next/link";

const SectionPropertiesA = async () => {
  const appartements = await getAllAppartementsWithImages(4);
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Nouveaux Appartements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {appartements.map((appartement) => (
          <CardPropertyA appartement={appartement} key={appartement.id} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/discover"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
        >
          Voir plus
        </Link>
      </div>
    </section>
  );
};

export default SectionPropertiesA;

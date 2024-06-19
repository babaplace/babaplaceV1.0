import React from "react";
import Container from "../layout/Container";
import CardPropertyA from "./CardPropertyA";
import { TitleSection } from "./TitleSection";
import { getAllAppartementsWithImages } from "@/src/db/apartement.query";

const SectionPropertiesA = async () => {
  const appartements = await getAllAppartementsWithImages(4);
  return (
    <div className="bg-cover  py-16 px-8">
      <TitleSection>
        <h2 className="text-3xl tracking-tighter sm:text-5xl">
          Appartement récemment <span className="text-primary">ajoutée !</span>
        </h2>
      </TitleSection>
      <Container className="flex flex-col justify-center md:grid items-center md:items-start md:grid-cols-4 gap-10 md:justify-between  ">
        {appartements.map((appartement) => (
          <CardPropertyA appartement={appartement} key={appartement.id} />
        ))}
      </Container>
    </div>
  );
};

export default SectionPropertiesA;

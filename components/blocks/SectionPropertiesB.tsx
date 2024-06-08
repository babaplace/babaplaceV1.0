import React from "react";
import Container from "../layout/Container";
import CardPropertyA from "./CardPropertyA";
import { TitleSection } from "./TitleSection";
import { getAllAppartementsWithImages } from "@/src/db/apartement.query";
import CardPropertyB from "./CardPropertyB";

const SectionPropertiesB = async () => {
  const appartements = await getAllAppartementsWithImages(4);
  return (
    <div className="bg-cover  py-16 px-8">
      <TitleSection>
        <h2 className="text-3xl tracking-tighter sm:text-5xl">
          Vous pourriez <span className="text-primary">aimé !</span>
        </h2>
      </TitleSection>
      <Container className="grid items-start md:grid-cols-4 gap-10 justify-between  ">
        {appartements.map((appartement) => (
          <CardPropertyB appartement={appartement} key={appartement.id} />
        ))}
      </Container>
    </div>
  );
};

export default SectionPropertiesB;

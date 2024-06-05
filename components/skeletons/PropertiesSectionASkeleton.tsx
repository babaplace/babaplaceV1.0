import React from "react";
import Container from "../layout/Container";

import PropertyCardASkeleton from "../skeletons/PropertyCardASkeleton";
import { TitleSection } from "../blocks/TitleSection";

const SectionPropertiesASkeleton = () => {
  return (
    <div className=" bg-gray-50 py-16 px-8">
      <TitleSection>
        <h2 className="text-3xl tracking-tighter sm:text-5xl">
          Appartement récemment <span className="text-primary">ajoutée !</span>
        </h2>
      </TitleSection>
      <Container className="flex flex-col items-start md:flex-row gap-10 justify-between  ">
        <PropertyCardASkeleton />
        <PropertyCardASkeleton />
        <PropertyCardASkeleton />
        <PropertyCardASkeleton />
      </Container>
    </div>
  );
};

export default SectionPropertiesASkeleton;

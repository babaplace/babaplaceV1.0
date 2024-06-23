import CardFilter from "@/components/blocks/CardFilter";
import PropertiesHorizontaleSection from "@/components/blocks/PropertiesHorizontaleSecttion";
import SearchMobile from "@/components/blocks/SearchMoble";
import SearchSection from "@/components/blocks/SearchSection";
import { TitlePage } from "@/components/blocks/TitlePage";
import Container from "@/components/layout/Container";

import React from "react";
import { getAllAppartementsWithImages } from "../../src/db/apartement.query";
import Filters from "@/components/blocks/Filters";

export default async function page() {
  const appartements = await getAllAppartementsWithImages();
  return (
    <div className="">
      <TitlePage />
      <div className="hidden xl:block">
        <SearchSection />
      </div>
      <div className="xl:hidden">
        <SearchMobile />
      </div>
      <Container className="flex gap-2 justify-between py-8">
        <Filters />
        <PropertiesHorizontaleSection appartements={appartements} />
      </Container>
    </div>
  );
}

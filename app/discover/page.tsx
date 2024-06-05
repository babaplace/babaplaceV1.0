import CardFilter from "@/components/blocks/CardFilter";
import PropertiesHorizontaleSection from "@/components/blocks/PropertiesHorizontaleSecttion";
import SearchMobile from "@/components/blocks/SearchMoble";
import SearchSection from "@/components/blocks/SearchSection";
import { TitlePage } from "@/components/blocks/TitlePage";
import Container from "@/components/layout/Container";
import PropertiesHorizontaleSectionSkeleton from "@/components/skeletons/PropertiesHorizontaleSectionSkeleton";

import React, { Suspense } from "react";
import { getAllAppartementsWithImages } from "../appartements/appartement/apartement.query";
import { NumberchambresFilters } from "@/src/data/searchData";
import Filters from "@/components/blocks/Filters";

export default async function page() {
  const appartements = await getAllAppartementsWithImages();
  return (
    <div>
      <TitlePage />
      <div className="hidden xl:block">
        <SearchSection />
      </div>
      <div className="xl:hidden">
        <SearchMobile />
      </div>
      <Container className="flex gap-2 justify-between py-8">
        <Filters />
        {/* <Suspense fallback={<PropertiesHorizontaleSectionSkeleton />}> */}
        <PropertiesHorizontaleSection appartements={appartements} />
        {/* </Suspense> */}
      </Container>
    </div>
  );
}

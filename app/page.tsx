import Hero from "@/components/blocks/Hero";
import SectionPropertiesA from "@/components/blocks/SectionPropertiesA";
import SectionPropertiesB from "@/components/blocks/SectionPropertiesB";
import Services from "@/components/blocks/Services";
import SectionPropertiesASkeleton from "@/components/skeletons/PropertiesSectionASkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionPropertiesASkeleton />}>
        <SectionPropertiesA />
      </Suspense>
      <Services />
      <Suspense fallback={<SectionPropertiesASkeleton />}>
        <SectionPropertiesB />
      </Suspense>
    </main>
  );
}

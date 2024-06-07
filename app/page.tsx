import CardPropertyA from "@/components/blocks/CardPropertyA";
import Hero from "@/components/blocks/Hero";
import SectionPropertiesA from "@/components/blocks/SectionPropertiesA";
import Services from "@/components/blocks/Services";

export default async function Home() {
  return (
    <main>
      <Hero />
      {/* <Suspense fallback={<SectionPropertiesASkeleton />}> */}
      <SectionPropertiesA />
      {/* </Suspense> */}
      <Services />
    </main>
  );
}

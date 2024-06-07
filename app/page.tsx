import Hero from "@/components/blocks/Hero";
import SectionPropertiesA from "@/components/blocks/SectionPropertiesA";
import SectionPropertiesB from "@/components/blocks/SectionPropertiesB";
import Services from "@/components/blocks/Services";

export default async function Home() {
  return (
    <main>
      <Hero />
      <SectionPropertiesA />
      <Services />
      <SectionPropertiesB />
    </main>
  );
}

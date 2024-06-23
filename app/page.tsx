import Hero from "@/components/blocks/Hero";
import SearchHero from "@/components/blocks/SearchHero";
import SectionPropertiesA from "@/components/blocks/SectionPropertiesA";
import SectionPropertiesB from "@/components/blocks/SectionPropertiesB";
import Services from "@/components/blocks/Services";
import SectionPropertiesASkeleton from "@/components/skeletons/PropertiesSectionASkeleton";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Trouvez votre propriété idéale
        </h2>
        <SearchHero />
      </section>
      {/*
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Catégories en vedette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Fes", "Mt feuri", "Moins chers", "Villa"].map((categorie) => (
              <div
                key={categorie}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <img
                  src={`${categorie.toLowerCase()}.jpg`}
                  alt={categorie}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{categorie}</h3>
                  <a href="#" className="text-primary hover:underline">
                    Voir les propriétés
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Suspense fallback={<SectionPropertiesASkeleton />}>
        <SectionPropertiesA />
      </Suspense>
      <Services />
      <section className="py-16 container mx-auto px-4">
        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à trouver la maison de vos rêves ?
          </h2>
          <p className="mb-4">
            Laissez-nous vous aider à découvrir la propriété parfaite.
          </p>
          <Link
            href={"/discover"}
            className="bg-white text-primary px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Commencez
          </Link>
        </div>
      </section>

      <Suspense fallback={<SectionPropertiesASkeleton />}>
        <SectionPropertiesB />
      </Suspense>
    </main>
  );
}

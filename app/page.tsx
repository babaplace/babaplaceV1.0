import React from "react";
import Home from "./Temp";
import Hero from "@/components/blocks/Hero";
import SectionPropertiesA from "@/components/blocks/SectionPropertiesA";
import Services from "@/components/blocks/Services";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      <SectionPropertiesA />
      <Services />
    </div>
  );
};

export default page;

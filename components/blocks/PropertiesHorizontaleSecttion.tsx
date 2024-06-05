"use client";

import React, { useMemo } from "react";
import CardPropertyHorizontale from "./CardPropertyHorizontale";
import { allAppartementsWithImagesType } from "../../app/appartements/appartement/apartement.query";
import { useSearchStore } from "@/lib/zustand/stores/SeachStore";

const PropertiesHorizontaleSection = ({
  appartements,
}: {
  appartements: allAppartementsWithImagesType;
}) => {
  const { city, address, maxprice, numberChambres } = useSearchStore();
  const filteredProperties = appartements.filter((property) => {
    if (
      city &&
      !property.city.toLocaleLowerCase().includes(city.toLocaleLowerCase())
    ) {
      return false;
    }
    if (
      address &&
      !property.address
        ?.toLocaleLowerCase()
        .includes(address.toLocaleLowerCase())
    ) {
      return false;
    }
    if (maxprice && property.price > Number(maxprice)) {
      return false;
    }
    if (numberChambres && property.numberChambres !== Number(numberChambres)) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex-1 flex justify-center items-center w-full flex-col gap-4 ">
      {filteredProperties.map((property) => (
        <CardPropertyHorizontale key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertiesHorizontaleSection;

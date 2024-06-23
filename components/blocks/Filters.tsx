"use client";

import React from "react";
import CardFilter from "./CardFilter";
import { NumberchambresFilters } from "@/src/data/searchData";
import { useSearchStore } from "@/lib/zustand/Providers/SearchAppartementStoreProviders";

const Filters = () => {
  const { setNumberChambres, numberChambres } = useSearchStore(
    (state) => state
  );
  return (
    <div className="hidden xl:block">
      <div className="border border-gray-100 p-4 rounded-sm my-2 bg-white">
        <h2 className="text-lg font-bold">Filtrer par : </h2>
      </div>
      <CardFilter
        selectedValue={numberChambres}
        setValue={setNumberChambres}
        label="Nombre de chambres"
        options={NumberchambresFilters}
      />
    </div>
  );
};

export default Filters;

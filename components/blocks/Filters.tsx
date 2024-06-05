"use client";

import React from "react";
import CardFilter from "./CardFilter";
import { NumberchambresFilters } from "@/src/data/searchData";
import { useSearchStore } from "@/lib/zustand/stores/SeachStore";

const Filters = () => {
  const { setNumbreChambres, numberChambres } = useSearchStore();
  return (
    <div className="hidden xl:block">
      <div className="border border-gray-100 p-4 rounded-sm my-2">
        <h2 className="text-lg font-bold">Filtrer par : </h2>
      </div>
      <CardFilter
        selectedValue={numberChambres}
        setValue={setNumbreChambres}
        label="Nombre de chambres"
        options={NumberchambresFilters}
      />
    </div>
  );
};

export default Filters;

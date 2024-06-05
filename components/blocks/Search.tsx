"use client";

import React from "react";

import {
  priceFilter,
  quartiersFilter,
  villesFilter,
} from "@/src/data/searchData";

import { SearchDate, SearchInput } from "../ui/SearchInputs";
import { useSearchStore } from "@/lib/zustand/stores/SeachStore";

type Props = {};

const Search = (props: Props) => {
  const { setCity, setAddress, setMaxPrice, city, address, maxprice } =
    useSearchStore();
  return (
    <div className="md:grid md:grid-cols-3 items-center flex-1 md:justify-between space-y-2 md:space-x-4 md:px-6 gap-4">
      <SearchInput
        selectedValue={city}
        setValue={setCity}
        label="Villes"
        id="location"
        options={villesFilter}
      />

      <SearchInput
        selectedValue={address}
        setValue={setAddress}
        label="Address"
        id="location"
        options={quartiersFilter}
      />
      <SearchInput
        selectedValue={maxprice}
        setValue={setMaxPrice}
        label="Budget"
        id="price"
        options={priceFilter}
      />

      {/* <SearchDate /> */}
    </div>
  );
};

export default Search;

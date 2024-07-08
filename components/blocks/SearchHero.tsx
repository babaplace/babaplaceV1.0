"use client";

import React, { useState } from "react";
import Container from "../layout/Container";

import { buttonVariants } from "../ui/button";
import Search from "./Search";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

type Props = {};

const SearchHero = (props: Props) => {
  const [searchType, setSearchType] = useState<"appartement" | "chambre">(
    "appartement"
  );
  return (
    <Container className=" bg-white rounded-lg max-md:shadow-2xl max-xl:mx-8 shadow-lg p-6">
      <div className="md:flex  justify-between items-end gap-14 ">
        <Search />
        <Link
          href={"/discover"}
          className={cn(buttonVariants(), "max-md:w-full max-md:my-4")}
        >
          Rechercher
        </Link>
      </div>
      {/* <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 rounded-l-full ${
              searchType === "appartement"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSearchType("appartement")}
          >
            Appartement
          </button>
          <button
            className={`px-4 py-2 rounded-r-full ${
              searchType === "chambre"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSearchType("chambre")}
          >
            Chambre
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-primary text-gray-700"
              placeholder="Ville ou quartier"
            />
          </div>
          <div className="relative">
            <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-primary text-gray-700"
              placeholder="Date"
              type="date"
            />
          </div>
          <div className="relative">
            <FaBed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              title="filtre chambre"
              className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-primary text-gray-700 appearance-none"
            >
              <option>Chambres</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>
          <button className="bg-primary hover:bg-primary-foreground text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center">
            <FaSearch className="mr-2" />
            Rechercher
          </button>
        </div>
      </div> */}
    </Container>
  );
};

export default SearchHero;

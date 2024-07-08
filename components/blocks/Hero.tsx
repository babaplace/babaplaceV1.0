"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import SearchHero from "./SearchHero";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  const [searchType, setSearchType] = useState<"appartement" | "chambre">(
    "appartement"
  );
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-image-a"
      // style={{
      //   backgroundImage: "",
      // }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative text-center text-white z-10 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trouvez Votre Chez-Vous Idéal
        </h1>
        <p className="text-xl mb-8">
          Explorez une large gamme de propriétés avec BabaPlace
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
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
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import SearchHero from "./SearchHero";
import { ImagesSlider } from "../ui/acertiny/image-slider";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative  text-white py-24">
      <div className="container mx-auto px-4 z-20 relative">
        <h1 className="text-5xl font-bold mb-4">Mettre Location ou Louer</h1>
        <p className="text-xl mb-8">
          Explorez une large gamme de propriétés avec BabaPlace
        </p>
        <Link
          href={"/discover"}
          className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Commencez votre recherche
        </Link>
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 z-10  bg-black bg-opacity-70"></div>

      <img
        src="/assets/images/hero.png"
        alt="Paysage urbain du Maroc"
        className="absolute inset-0 w-full  h-full object-cover"
      />
    </div>
  );
};

export default Hero;

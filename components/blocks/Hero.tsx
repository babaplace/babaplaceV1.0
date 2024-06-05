"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import SearchHero from "./SearchHero";
import { ImagesSlider } from "../ui/acertiny/image-slider";

type Props = {};

const Hero = (props: Props) => {
  const images = [
    "/assets/images/heroa.jpg",
    "/assets/images/herob.jpg",
    "/assets/images/heroc.jpg",
  ];
  return (
    <div className="relative mb-16 max-md:mb-96">
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 max-md:mx-14 flex flex-col justify-center items-center"
        >
          <motion.h1 className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Trouver un Logement - Mettre en location
          </motion.h1>
          <motion.p className="font-bold text-xs md:text-sm text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 ">
            Des chambres modernes et <br /> confortables à deux pas de votre
            université
          </motion.p>
          <div>
            <div className="flex items-center justify-center space-x-2">
              <Link
                href="/appartements/appartement/add"
                className="px-2 py-2 max-md:text-xs text text-gray-900 bg-gray-300 border  rounded-lg lg:px-8 lg:py-3 hover:bg-gray-100 hover:shadow"
              >
                Mettre en location
              </Link>
              <Link
                href="/biens"
                className="px-4 py-2 max-md:text-xs text-white transition duration-300 bg-primary border border-gray-600 rounded-lg lg:px-8 lg:py-3 hover:bg-secondary hover:shadow-xl"
              >
                Voir les biens
              </Link>
            </div>
          </div>
        </motion.div>
      </ImagesSlider>
      <div className="absolute  left-0 right-0 -bottom-24 max-md:-bottom-96 ">
        <SearchHero />
      </div>
    </div>
  );
};

export default Hero;

"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/ui/modules/aceternityUi/image-slider";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const images = ["/heroa.png", "/herob.png", "heroc.png"];
  return (
    <div>
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
                href="/partners/addproperty"
                className="px-2 py-2 max-md:text-xs text-gray-800 text-gray-900 bg-gray-300 border rounded rounded-lg lg:px-8 lg:py-3 hover:bg-gray-100 hover:shadow"
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
    </div>
  );
};

export default Hero;

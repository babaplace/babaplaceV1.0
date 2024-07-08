"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative h-[300px] flex items-center justify-center bg-cover bg-center bg-image-a">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative text-center flex justify-center items-center flex-col text-white z-10 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trouvez Votre Chez-Vous Idéal
        </h1>
        <p className="text-xl mb-8">
          Explorez une large gamme de propriétés avec BabaPlace
        </p>
        <Link
          href={"/discover"}
          className="bg-black hover:bg-primary-foreground text-white font-bold py-4 px-8 rounded-full transition duration-300 flex items-center justify-center"
        >
          Commencer a explorer
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

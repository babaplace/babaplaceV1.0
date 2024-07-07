"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import ImageSliderCard from "./ImageSliderCard";
import Image from "next/image";
import { appartementByIdWithMediasType } from "@/src/db/apartement.query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";
import { notFound } from "next/navigation";

type cardPropertyProps = { appartement: appartementByIdWithMediasType };

const CardPropertyA = ({ appartement }: cardPropertyProps) => {
  if (!appartement) {
    notFound();
  }
  return (
    <div className="p-0 bg-white w-full ">
      <motion.div
        key={appartement?.id}
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative h-48">
          <Carousel className="w-full relative">
            <CarouselContent>
              {appartement?.medias.map((image) => (
                <CarouselItem key={image.id}>
                  <Image
                    src={image.url}
                    width={400}
                    height={500}
                    alt=""
                    className=" w-full h-60 object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2" />
            <CarouselNext className="absolute right-2" />
          </Carousel>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{appartement?.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-1">
            {appartement?.description}
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-red-600">
              {appartement?.price} DH/mois
            </span>
            <div className="flex space-x-2 text-gray-500">
              <span>
                <FaBed className="inline mr-1" /> {appartement?.numberChambres}
              </span>
              <span>
                <FaBath className="inline mr-1" />{" "}
                {appartement?.numberToilettes}
              </span>
              <span>
                <FaRulerCombined className="inline mr-1" />{" "}
                {appartement?.numberSalons}
              </span>
            </div>
          </div>
          <Link
            href={`/discover/${appartement?.id}`}
            className="w-full bg-red-600 flex flex-col justify-center items-center hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Voir plus
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CardPropertyA;

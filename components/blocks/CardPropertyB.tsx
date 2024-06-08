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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Bed } from "lucide-react";

type cardPropertyProps = { appartement: appartementByIdWithMediasType };

const CardPropertyB = ({ appartement }: cardPropertyProps) => {
  return (
    <Link
      href={`/discover/${appartement?.id}`}
      className="hover:bg-gray-50 hover:bg-opacity-30"
    >
      {/*
      /> */}

      <Carousel className="w-full relative">
        <CarouselContent>
          {appartement?.medias.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={image.url}
                width={400}
                height={500}
                alt=""
                className="rounded-xl w-full h-60 object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2" />
        <CarouselNext className="absolute right-2" />
      </Carousel>
      <div className="flex flex-col my-1 text-sm">
        <div className="flex justify-between items-center">
          <p className="font-bold">{appartement?.city}</p>
          <p className="flex items-center gap-1 text-sm">
            <Bed size={14} className="text-primary" />{" "}
            {appartement?.numberChambres}
          </p>
        </div>
        <p>{appartement?.address}</p>

        <p className="font-bold">
          MAD <span className="text-primary">{appartement?.price}</span>
        </p>
      </div>
    </Link>
  );
};

export default CardPropertyB;

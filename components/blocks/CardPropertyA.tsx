"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import ImageSliderCard from "./ImageSliderCard";
import Image from "next/image";
import { appartementByIdWithMediasType } from "@/app/appartements/appartement/apartement.query";
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

type cardPropertyProps = { appartement: appartementByIdWithMediasType };

const CardPropertyA = ({ appartement }: cardPropertyProps) => {
  return (
    <div className="p-0 bg-white w-full rounded-sm">
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
                className="rounded-t-xl w-full h-60 object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2" />
        <CarouselNext className="absolute right-2" />
      </Carousel>

      <div className="p-3 grid space-y-2">
        <h2 className="font-bold">
          {appartement?.address}, {appartement?.city}
        </h2>
        <p className="text-sm text-gray-400 leading-4 ">
          {appartement?.description}
        </p>
      </div>

      <div className="py-4 p-3 flex justify-between items-center">
        <p className="text-sm">
          á partir de :{" "}
          <span className="text-lg font-bold text-primary">
            {appartement?.price} DH
          </span>
        </p>

        <Link
          href={`/discover/${appartement?.id}`}
          about={appartement?.title}
          className={cn(buttonVariants({ size: "sm" }), "py-2")}
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
};

export default CardPropertyA;

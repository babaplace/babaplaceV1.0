"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

type Props = {};

const ImageSliderCard = (props: Props) => {
  const images = [
    "/assets/images/heroa.png",
    "/assets/images/herob.png",
    "/assets/images/heroc.png",
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <Image
              src={image}
              width={400}
              height={500}
              alt=""
              className="rounded-t-xl w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageSliderCard;

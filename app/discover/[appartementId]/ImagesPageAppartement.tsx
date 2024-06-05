"use client";
import { medias } from "@prisma/client";
import { ZoomInIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ImagesPageAppartement = ({ images }: { images: medias[] }) => {
  const [showImage, setshowImage] = useState<string>(images[0].url);
  return (
    <div className="md:w-1/2">
      <div className="grid gap-6">
        <div className="relative group grid bg-gray-50 [grid-template-areas:stack] overflow-hidden rounded-lg">
          <Image
            src={showImage}
            alt="Main Image"
            width={800}
            height={600}
            className="[grid-area:stack] object-cover  aspect-[4/3] transition-all"
          />
          <button className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm rounded-full p-2 hover:bg-white/80 transition-colors">
            <ZoomInIcon className="w-5 h-5" />
            <span className="sr-only">Zoom</span>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((image) => (
            <button
              onClick={(e) => {
                e.preventDefault();
                setshowImage(image.url);
              }}
              key={image.id}
              title="image"
              className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-md"
            >
              <Image
                src={image.url}
                alt="Thumbnail 1"
                width={200}
                height={150}
                className="[grid-area:stack] object-cover w-full aspect-[4/3] group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesPageAppartement;

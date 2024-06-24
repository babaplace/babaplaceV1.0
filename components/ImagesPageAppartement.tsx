"use client";

import { medias } from "@prisma/client";
import { PlusIcon, ZoomInIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ImagesPageAppartement = ({ images }: { images: medias[] }) => {
  const [showImage, setshowImage] = useState<string>(images[0].url);
  return (
    <div className="space-y-4">
      <div className="relative">
        <Image
          width={600}
          height={600}
          src={showImage ?? ""}
          alt="Appartement"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images[0]?.url && (
          <Image
            onClick={(e) => {
              setshowImage(images[0].url);
            }}
            width={200}
            height={200}
            src={images[0].url}
            alt="Chambre"
            className="w-full h-24 object-cover rounded-lg shadow cursor-pointer hover:opacity-75 transition duration-300"
          />
        )}
        {images[1]?.url && (
          <Image
            onClick={(e) => {
              setshowImage(images[1].url);
            }}
            width={200}
            height={200}
            src={images[1].url}
            alt="Chambre"
            className="w-full h-24 object-cover rounded-lg shadow cursor-pointer hover:opacity-75 transition duration-300"
          />
        )}
        {images[2]?.url && (
          <Image
            onClick={(e) => {
              setshowImage(images[2].url);
            }}
            width={200}
            height={200}
            src={images[2].url}
            alt="Chambre"
            className="w-full h-24 object-cover rounded-lg shadow cursor-pointer hover:opacity-75 transition duration-300"
          />
        )}

        <Dialog>
          <DialogTrigger asChild>
            <div
              className="relative"
              onClick={() => setshowImage(images[3].url)}
            >
              {images[3]?.url && (
                <Image
                  width={200}
                  height={200}
                  src={images[3].url}
                  alt="Chambre"
                  className="w-full h-24 object-cover rounded-lg shadow cursor-pointer hover:opacity-75 transition duration-300"
                />
              )}

              {images.length > 4 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 hover:opacity-75 cursor-pointer transition duration-300 flex items-center justify-center rounded-lg">
                  <span className="text-black bg-white p-1 rounded-full text-center font-semibold">
                    <PlusIcon size={20} />
                  </span>
                </div>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="flex gap-2 w-[800px] overflow-x-auto rounded-none">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                width={600}
                height={600}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow"
              />
            ))}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ImagesPageAppartement;

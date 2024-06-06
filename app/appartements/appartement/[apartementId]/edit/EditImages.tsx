"use client";
import { medias } from "@prisma/client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useEditAppartementState } from "../../../../../lib/zustand/stores/editAppartementStore";

type Props = {
  images: medias[];
  appartementId: string;
};

const EditImages = ({ images, appartementId }: Props) => {
  const { startEditImages, setStartEditImages } = useEditAppartementState();
  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Images</h1>
        {!startEditImages ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              //   setStartEditDetailsInfos(true);
            }}
            className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
          >
            Modifier
          </button>
        ) : null}
      </div>
      <div className="divide-y-2 divide-dotted flex flex-col ">
        {images.length > 0 ? ( // Conditional rendering based on uploadedImages state
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative">
                <Image
                  alt="Uploaded Image"
                  className="rounded-lg object-cover"
                  height={300}
                  src={image.url}
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EditImages;

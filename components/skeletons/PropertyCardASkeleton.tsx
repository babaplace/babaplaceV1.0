import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

const PropertyCardASkeleton = () => {
  return (
    <div className="p-0 bg-white w-full  rounded-xl ">
      {/*
      /> */}

      <Carousel className="w-full relative">
        <CarouselContent>
          <CarouselItem>
            <Skeleton className="rounded-t-xl w-full h-60 " />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2" />
        <CarouselNext className="absolute right-2" />
      </Carousel>

      <div className="p-3 grid space-y-2">
        <h2 className="font-bold">
          <Skeleton className="h-4 w-[200px]" />
        </h2>
        <p className="text-sm text-gray-400 leading-4 ">
          <Skeleton className="h-8 w-[300px]" />
        </p>
      </div>

      <div className="py-4 p-3 flex justify-between items-center">
        <p className="text-sm">
          <Skeleton className="h-4 w-[100px]" />
        </p>

        <Skeleton className=" h-9 w-20" />
      </div>
    </div>
  );
};

export default PropertyCardASkeleton;

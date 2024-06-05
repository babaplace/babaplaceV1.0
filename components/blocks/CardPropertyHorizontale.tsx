import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronRight } from "lucide-react";
import { appartementByIdWithMediasType } from "@/app/appartements/appartement/apartement.query";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type CardPropertyHorizontaleProps = { property: appartementByIdWithMediasType };
export default function CardPropertyHorizontale({
  property,
}: CardPropertyHorizontaleProps) {
  return (
    <Card className="flex w-full  border-gray-100 max-w-4xl  bg-white p-6">
      <div className="w-1/3 rounded-lg overflow-hidden">
        <Carousel className="w-full relative">
          <CarouselContent>
            {property?.medias.map((image) => (
              <CarouselItem key={image.id}>
                <Image
                  src={image.url}
                  width={400}
                  height={500}
                  alt=""
                  className="rounded-t-xl max-sm:h-[120px] max-md:h-[150px]   h-[200px] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 max-md:w-4 max-md:h-4" />
          <CarouselNext className="absolute right-2 max-md:w-4 max-md:h-4" />
        </Carousel>
      </div>
      <div className="flex flex-col justify-between w-2/3 pl-6">
        <div className="flex flex-col md:gap-4 max-md:text-xs ">
          <div className="text-sm max-md:text-[0.5rem] text-gray-500">
            {property?.city}
          </div>
          <div className="text-xl max-md:text-lg leading-3 font-bold">
            {property?.title}
          </div>
          {property?.description ? (
            <p className="text-gray-500 ">{property?.description}</p>
          ) : null}
          <div className="text-gray-500 ">
            <strong>Adresse :</strong> {property?.address}
          </div>
          <div className="flex items-center ">
            <div className="text-gray-500">Disponible maintenant</div>
            <CheckIcon className="ml-2 text-green-500" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/discover/${property?.id}`}
            className="flex items-center pl-4 pr-2  md:py-2 rounded-md justify-between bg-white text-black dark:bg-black dark:text-white border max-md:text-[0.5rem] border-secondary hover:border-primary"
          >
            <span> Voir plus</span>
            <ChevronRight className="max-md:w-4 max-md:h-4" />
          </Link>
          <div className="font-bold text-xs">
            à partir de :{" "}
            <span className="text-primary md:text-lg">
              {property?.price} DH
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

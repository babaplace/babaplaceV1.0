import { Card } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

export default function CardPropertyHorizontaleSkeleton() {
  return (
    <Card className="flex w-full border-gray-100 max-w-4xl bg-white p-6">
      <div className="w-1/3 rounded-lg overflow-hidden">
        <Carousel className="w-full relative">
          <CarouselContent>
            <CarouselItem>
              <Skeleton className="rounded-t-xl  h-[200px] object-cover w-full" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-2" />
          <CarouselNext className="absolute right-2" />
        </Carousel>
      </div>
      <div className="flex flex-col justify-between w-2/3 pl-6">
        <div>
          <div className="text-sm text-gray-500">
            <Skeleton className="h-2 w-12" />
          </div>
          <div className="text-xl font-bold">
            <Skeleton className="w-[200px] my-4 h-4" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            <Skeleton className="h-4 w-[100px]" />
          </p>
          <div className="text-sm text-gray-500 mt-4">
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex my-2">
            <Skeleton className="h-8 w-[100px]" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-[100px]" />
          <div className="text-sm font-bold">
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
      </div>
    </Card>
  );
}

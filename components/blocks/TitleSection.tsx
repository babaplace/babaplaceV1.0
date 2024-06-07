"use client";

import { cn } from "@/lib/utils";
import DotPattern from "../ui/Dotpattern";
import { PropsWithChildren } from "react";

export const TitleSection = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex h-full w-full  items-center justify-center overflow-hidden   px-16 py-8 my-4">
      <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        {children}
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
};

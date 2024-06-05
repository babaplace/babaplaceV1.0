"use client";
import React from "react";
import { Button } from "../ui/button";
import { Vortex } from "../ui/acertiny/vortex";

export function TitlePage() {
  return (
    <div className="w-full mx-auto   overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-xl md:text-5xl font-extrabold  lg:text-6xl text-white">
          Decouvrez votre futur
          <span className="text-primary"> logement !</span>
        </h2>
      </Vortex>
    </div>
  );
}

"use client";

import React from "react";
import Container from "../layout/Container";

import { buttonVariants } from "../ui/button";
import Search from "./Search";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

const SearchHero = (props: Props) => {
  return (
    <Container className=" bg-white rounded-lg max-md:shadow-2xl max-xl:mx-8 shadow-lg p-6">
      <div className="md:flex  justify-between items-end gap-14 ">
        <Search />
        <Link
          href={"/discover"}
          className={cn(buttonVariants(), "max-md:w-full max-md:my-4")}
        >
          Rechercher
        </Link>
      </div>

      {/* <div className="mx-14 mt-9">
        <h2>Vous pourrez aimer ? </h2>
        <div className="flex gap-4 my-4">
          {suggestions.map((suggestion, index) => (
            <Button
              className={cn(
                "bg-black hover:bg-slate-600 text-white rounded-sm"
              )}
              key={index}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div> */}
    </Container>
  );
};

export default SearchHero;

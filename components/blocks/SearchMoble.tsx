"use client";

import { SVGProps } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import CardFilter from "./CardFilter";
import { useSearchStore } from "@/lib/zustand/stores/SeachStore";
import {
  NumberchambresFilters,
  priceFilter,
  villesFilter,
} from "@/src/data/searchData";
import Container from "../layout/Container";

export default function SearchMobile() {
  const {
    numberChambres,
    setNumbreChambres,
    maxprice,
    setMaxPrice,
    city,
    setCity,
    address,
    setAddress,
  } = useSearchStore();

  return (
    <div className="w-full flex-1 flex  gap-2 max-w-6xl  mx-auto p-4 md:p-6">
      <div className="relative flex-1 mr-4 w-full">
        <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          type="text"
          placeholder="Rechercher par emplacement"
          className="pl-10 w-full"
          defaultValue={address}
          onChange={(e) => {
            e.preventDefault();
            setAddress(e.target.value);
          }}
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="shrink-0">
            <FilterIcon className="w-4 h-4 mr-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] max-h-96 overflow-y-scroll p-4">
          <div className="grid gap-2">
            <CardFilter
              options={priceFilter}
              setValue={setMaxPrice}
              selectedValue={maxprice}
              label="Budget Max"
            />
            <CardFilter
              options={NumberchambresFilters}
              setValue={setNumbreChambres}
              selectedValue={numberChambres}
              label="Nombre de chambres"
            />

            <CardFilter
              options={villesFilter}
              setValue={setCity}
              selectedValue={city}
              label="Ville"
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function BedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

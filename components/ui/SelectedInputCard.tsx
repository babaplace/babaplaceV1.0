"use client";

import { cn } from "@/lib/utils";
import { espaceAnnexeSheme } from "@/src/types/appartement.sheme";
import React, { PropsWithoutRef } from "react";

type Props = {
  name: espaceAnnexeSheme[0];
  label: string;
  onSelected: () => void;
  isSelected?: boolean;
};

const SelectedInputCard = ({
  name,
  label,
  onSelected,
  isSelected = false,
}: Props) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onSelected();
      }}
      className={cn(
        "border rounded-md flex cursor-pointer hover:bg-gray-50 justify-center transition-all  items-center border-black text-lg py-6",
        {
          "bg-primary text-white hover:bg-primary-foreground border-none border-primary":
            isSelected,
        }
      )}
    >
      {label}
    </div>
  );
};

export default SelectedInputCard;

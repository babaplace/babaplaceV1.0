"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  label: { name: string; url: string };
  stepCount: number;
}
const StepItem: React.FC<Props> = ({ label, stepCount }) => {
  const pathname = usePathname();
  return (
    <div className={cn("flex items-center gap-4")}>
      <div
        className={cn(
          `grid place-content-center md:w-8 md:h-8 w-6 h-6 border text-white `,
          { "bg-secondary text-white": pathname === label.url }
        )}
      >
        {stepCount + 1}
      </div>
      <div className="hidden md:flex flex-col">
        <span
          className={cn("text-gray-300 text-sm", {
            "text-secondary": pathname === label.url,
          })}
        >
          {stepCount + 1}
        </span>
        <p
          className={cn("text-white font-medium text-sm", {
            "text-secondary": pathname === label.url,
          })}
        >
          {label.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default StepItem;

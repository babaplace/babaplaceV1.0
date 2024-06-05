import { cn } from "@/lib/utils";
import React from "react";

const Loader = ({ size = "base" }: { size?: "base" | "sm" | "lg" }) => {
  return (
    <div
      className={cn(
        "rounded-md border-4 border-t-4 border-primary animate-spin",
        {
          "h-12 w-12": size === "base",
          "w-16 h-16": size === "sm",
          "w-8 h-8": size === "lg",
        }
      )}
    ></div>
  );
};

export default Loader;

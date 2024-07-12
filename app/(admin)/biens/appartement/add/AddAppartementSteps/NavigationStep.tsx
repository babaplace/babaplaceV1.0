import { cn } from "@/lib/utils";
import { CreateAppartementStoreProvider } from "@/lib/zustand/Providers/CreateAppartementStoreProviders";
import { ClassValue } from "class-variance-authority/types";
import React, { ReactNode } from "react";

const NavigationStep = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: ClassValue;
}) => {
  return (
    <div className=" w-full p-4 bg-neutro-white flex items-center ">
      <div
        className={cn("w-full flex items-center justify-between", className)}
      >
        <CreateAppartementStoreProvider>
          {children}
        </CreateAppartementStoreProvider>
      </div>
    </div>
  );
};

export default NavigationStep;

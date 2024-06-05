import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";
import { ClassValue } from "class-variance-authority/types";

type Props = { className?: ClassValue };

const Container = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto py-16", className)}>
      {children}
    </div>
  );
};

export default Container;

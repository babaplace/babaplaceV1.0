"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";

import { useMutation } from "@tanstack/react-query";
import NavigationStep from "./sidebar/NavigationStep";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { usePropertyCreateTypeStore } from "@/lib/zustand/stores/propertyCreateType.store";
import { PropertyType } from "@/src/types/property.scheme";
import { toast } from "sonner";

const PropertyTypeForm = () => {
  const { propertytype, setPropertyType } = usePropertyCreateTypeStore(
    (state) => state
  );

  const router = useRouter();

  const createMatiereMutation = useMutation({
    mutationFn: async () => {
      //ajouter dans un store et continuer

      //   rediriger vers la page de l'appartement
      if (propertytype == "APPARTMENT") {
        router.push("/biens/appartement/add/");
      } else if (propertytype == "ROOM") {
        router.push("/biens/room/add/");
      } else {
        toast.error("Veuillez choisir un type !!");
      }
    },
  });

  const typeOptions: { type: PropertyType; title: String }[] = [
    { type: "APPARTMENT", title: "APPARTEMENT" },
    { type: "ROOM", title: "CHAMBRE" },
  ];

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    createMatiereMutation.mutate();
  };

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">Type </h1>
            <p className="text-gray-500text-sm">
              Quel type de propriété souhaitez-vous louer ?
            </p>
            <div>
              <div className="border border-gray-100 rounded-lg p-4">
                <div className=" grid gap-8 my-4 ">
                  {typeOptions.map((type) => (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setPropertyType(type.type);
                      }}
                      key={type.type}
                      className={cn(
                        "flex justify-center items-center transition-all duration-75  cursor-pointer p-4 border-gray-300 border-2 rounded-sm",
                        {
                          "bg-gray-700 text-white ": propertytype === type.type,
                        }
                      )}
                    >
                      {type.title}
                    </div>
                  ))}
                </div>
              </div>

              <NavigationStep>
                <Link
                  href={"/biens/appartement/add/"}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Precedent
                </Link>
                <Button
                  onClick={(e) => onSubmit(e)}
                  disabled={
                    createMatiereMutation.isPending || propertytype === null
                  }
                >
                  {createMatiereMutation.isPending ? "en cours..." : "Suivant"}
                </Button>
              </NavigationStep>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeForm;

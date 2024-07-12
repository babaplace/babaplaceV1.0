"use client";

import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";

import NavigationStep from "../AddAppartementSteps/NavigationStep";
import { useAppartementStore } from "@/lib/zustand/Providers/CreateAppartementStoreProviders";
import { espaceAnnexeSheme } from "@/src/types/appartement.sheme";
import SelectedInputCard from "@/components/ui/SelectedInputCard";

const EqupementForm: React.FC = () => {
  const { espaceAnnexe, addEspaceAnnexe, removeEspaceAnnexe } =
    useAppartementStore((state) => state);
  const router = useRouter();

  const createMatiereMutation = useMutation({
    mutationFn: async () => {
      router.push("/biens/appartement/add/financesInfos");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      // Gérer l'erreur ici (par exemple, afficher un message à l'utilisateur)
    },
  });

  const formFields: Array<{ name: espaceAnnexeSheme[0]; label: string }> = [
    { name: "BALCONY", label: "Balcon" },
    { name: "SECURITY_GUARD", label: "Garde de sécurité" },
    { name: "JARDIN", label: "JARDIN PRIVATIF" },
    { name: "TERRASSE", label: "Terrasse" },
    { name: "ESPACE_VERT", label: "Espace vert" },
    { name: "PISCINE", label: "Piscine commune" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">
              Quels sont les espaces annexes de votre bien ?{" "}
            </h1>
            <p className="text-gray-500 text-sm">
              Sélectionnez les espaces dont dispose votre bien
            </p>
          </div>

          <div className="my-8 flex-1 space-y-4">
            <div className="border border-gray-100 rounded-lg p-4">
              <div className="divide-dotted grid grid-cols-2 gap-8">
                {formFields.map(({ name, label }) => (
                  <SelectedInputCard
                    isSelected={searchEspaceAnnexe(name, espaceAnnexe)}
                    key={name}
                    label={label}
                    onSelected={() => {
                      if (searchEspaceAnnexe(name, espaceAnnexe)) {
                        removeEspaceAnnexe(name);
                      } else {
                        addEspaceAnnexe(name);
                      }
                    }}
                    name={name}
                  />
                ))}
              </div>
            </div>

            <NavigationStep>
              <Link
                href="/biens/appartement/add/details"
                className={buttonVariants({ variant: "outline" })}
              >
                Precedent
              </Link>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  createMatiereMutation.mutate();
                }}
                disabled={createMatiereMutation.isPending}
              >
                {createMatiereMutation.isPending ? "En cours ..." : "Suivant"}
              </Button>
            </NavigationStep>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EqupementForm;

export const searchEspaceAnnexe = (
  name: espaceAnnexeSheme[0],
  array: espaceAnnexeSheme
): boolean => array.includes(name);

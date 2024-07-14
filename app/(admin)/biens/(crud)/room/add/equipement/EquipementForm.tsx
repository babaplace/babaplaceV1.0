"use client";

import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";

import NavigationStep from "../../../sidebar/NavigationStep";
import { useAppartementStore } from "@/lib/zustand/Providers/CreateAppartementStoreProviders";
import { equipementSheme } from "@/src/types/appartement.sheme";
import SelectedInputCard from "@/components/ui/SelectedInputCard";

const EquipementForm: React.FC = () => {
  const { equipements, addEquipement, removeEquipement } = useAppartementStore(
    (state) => state
  );
  const router = useRouter();

  const createMatiereMutation = useMutation({
    mutationFn: async () => {
      router.push("/biens/appartement/add/othersInformations");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      // Gérer l'erreur ici (par exemple, afficher un message à l'utilisateur)
    },
  });

  const formFields: Array<{ name: equipementSheme[0]; label: string }> = [
    { name: "ELEVATOR", label: "Ascenseur" },
    { name: "SHARED_BATHROOM", label: "Salle de bain partagée" },
    { name: "PRIVATE_BATHROOM", label: "Salle de bain privée" },
    { name: "SHARED_KITCHEN", label: "Cuisine partagée" },
    { name: "PRIVATE_KITCHEN", label: "Cuisine privée" },
    { name: "LIVING_ROOM", label: "Salon" },
    { name: "TOILET", label: "Toilettes" },
    { name: "CLIMATISATION", label: "Climatisation" },
    { name: "CLOSED_RESIDENCE", label: "Résidence fermée" },
    { name: "SECURITY", label: "Dispositif de sécurité" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">
              Quels sont les équipements de votre bien ?
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
                    isSelected={searchEspaceAnnexe(name, equipements)}
                    key={name}
                    label={label}
                    onSelected={() => {
                      if (searchEspaceAnnexe(name, equipements)) {
                        removeEquipement(name);
                      } else {
                        addEquipement(name);
                      }
                    }}
                    name={name}
                  />
                ))}
              </div>
            </div>

            <NavigationStep>
              <Link
                href="/biens/appartement/add/financesInfos"
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

export default EquipementForm;

export const searchEspaceAnnexe = (
  name: equipementSheme[0],
  array: equipementSheme
): boolean => array.includes(name);

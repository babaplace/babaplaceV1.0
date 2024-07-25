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
import SelectedInputCard from "@/components/ui/SelectedInputCard";
import { equipementRoomSheme } from "@/src/types/room.sheme";
import { useRoomCreateStore } from "@/lib/zustand/stores/roomCreateStore";

const EquipementRoomForm: React.FC = () => {
  const { equipements, addEquipement, removeEquipement } = useRoomCreateStore(
    (state) => state
  );
  const router = useRouter();

  const createMatiereMutation = useMutation({
    mutationFn: async () => {
      router.push("/biens/room/add/othersInformations");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      // Gérer l'erreur ici (par exemple, afficher un message à l'utilisateur)
    },
  });

  const formFields: Array<{ name: equipementRoomSheme[0]; label: string }> = [
    { name: "TOILET", label: "Toilettes" },
    { name: "SHOWER", label: "Douche" },
    { name: "SHARED_BATHROOM", label: "Salle de bain partagée" },
    { name: "PRIVATE_BATHROOM", label: "Salle de bain privée" },
    { name: "BED", label: "Lit" },
    { name: "CLOSET", label: "Penderie" },
    { name: "DESK", label: "Bureau" },
    { name: "CHAIR", label: "Chaise" },
    { name: "FAN", label: "Ventilateur" },
    { name: "INTERNET_ACCESS", label: "Accès à internet" },
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

export default EquipementRoomForm;

export const searchEspaceAnnexe = (
  name: equipementRoomSheme[0],
  array: equipementRoomSheme
): boolean => array.includes(name);

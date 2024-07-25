"use client";

import React from "react";
import StepItem from "./StepItem";
import { usePropertyCreateTypeStore } from "@/lib/zustand/stores/propertyCreateType.store";

const SidebarItems = () => {
  const propertyType = usePropertyCreateTypeStore(
    (state) => state.propertytype
  );
  const stepLabelsAppartement = [
    { name: "Localisation", url: "/biens/appartement/add" },

    { name: "Detais", url: "/biens/appartement/add/details" },

    {
      name: "Espaces Annexes",
      url: "/biens/appartement/add/espaceAnnexe",
    },
    {
      name: "Prix",
      url: "/biens/appartement/add/financesInfos",
    },
    {
      name: "Equipements",
      url: "/biens/appartement/add/equipement",
    },
    {
      name: "Autres informations",
      url: "/biens/appartement/add/othersInformations",
    },
    {
      name: "Images",
      url: "/biens/appartement/add/imagesStep",
    },

    {
      name: "Resumé",
      url: "/biens/appartement/add/summury",
    },
  ];

  const stepLabelsRoom = [
    { name: "Localisation", url: "/biens/room/add" },

    { name: "Detais", url: "/biens/room/add/details" },

    {
      name: "Prix",
      url: "/biens/room/add/financesInfos",
    },
    {
      name: "Equipements",
      url: "/biens/room/add/equipement",
    },
    {
      name: "Autres informations",
      url: "/biens/room/add/othersInformations",
    },
    {
      name: "Images",
      url: "/biens/room/add/imagesStep",
    },

    {
      name: "Resumé",
      url: "/biens/appartement/add/summury",
    },
  ];

  const stepLabels =
    propertyType == "APPARTMENT" ? stepLabelsAppartement : stepLabelsRoom;

  return (
    <ul className="relative flex md:flex-col gap-4 md:gap-8 md:p-8 z-10">
      {stepLabels.map((label, index) => (
        <li key={index}>
          <StepItem label={label} stepCount={index} />
        </li>
      ))}
    </ul>
  );
};

export default SidebarItems;

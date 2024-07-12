import React from "react";
import StepItem from "./StepItem";

const SidebarItems = () => {
  const stepLabels = [
    { name: "Localisation", url: "/biens/appartement/add" },

    { name: "Type de biens", url: "/biens/appartement/add/propertytype" },

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

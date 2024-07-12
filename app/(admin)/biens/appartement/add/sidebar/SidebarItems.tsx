import React from "react";
import StepItem from "./StepItem";

const SidebarItems = () => {
  const stepLabels = [
    { name: "Infors Basique", url: "/primary-foreground" },
    { name: "Detais", url: "/biens/appartement/add/details" },
    {
      name: "Infos Financieres",
      url: "/biens/appartement/add/financesInfos",
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

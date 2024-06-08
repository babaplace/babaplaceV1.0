import React from "react";
import StepItem from "./StepItem";

const SidebarItems = () => {
  const stepLabels = [
    { name: "Infors Basique", url: "/appartements/appartement/add" },
    { name: "Detais", url: "/appartements/appartement/add/details" },
    {
      name: "Infos Financieres",
      url: "/appartements/appartement/add/financesInfos",
    },
    {
      name: "Autres informations",
      url: "/appartements/appartement/add/othersInformations",
    },
    {
      name: "Images",
      url: "/appartements/appartement/add/imagesStep",
    },

    {
      name: "Resumé",
      url: "/appartements/appartement/add/summury",
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

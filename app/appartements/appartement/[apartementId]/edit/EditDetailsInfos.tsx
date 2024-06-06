import Link from "next/link";
import React from "react";
import { ItemList } from "../../add/summury/SummuryForm";
import { detailsSheme } from "../../appartement.sheme";
type EditDetailsInfosProps = {
  details: detailsSheme;
};
const EditDetailsInfos = ({ details }: EditDetailsInfosProps) => {
  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Details</h1>
        <Link
          href={"/appartements/appartement/add/details"}
          className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
        >
          Modifier
        </Link>
      </div>
      <div className="divide-y-2 divide-dotted flex flex-col ">
        <ItemList label="Nombre de chambres" value={details.numberChambres} />
        <ItemList label="Nombre de toilletes" value={details.numberToilettes} />
        <ItemList label="Cuisine" value={details.Cuisine} />
        <ItemList label="Niveau d'etage" value={details.niveauEtage} />
        <ItemList label="Nombre de salons" value={details.numberSalons} />
      </div>
    </div>
  );
};

export default EditDetailsInfos;

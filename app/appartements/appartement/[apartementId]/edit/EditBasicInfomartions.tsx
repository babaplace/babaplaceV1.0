import React from "react";
import { basicInfoScheme } from "../../appartement.sheme";
import Link from "next/link";
import { ItemList } from "../../add/summury/SummuryForm";

type Props = { basicInfos: basicInfoScheme };

const EditBasicInfomartions = ({ basicInfos }: Props) => {
  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Localisations Et Titre</h1>
        <Link
          href={"/appartements/appartement/add"}
          className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
        >
          Modifier
        </Link>
      </div>
      <div className="divide-y-2 divide-dotted flex flex-col ">
        <ItemList label="Title" value={basicInfos.title} />
        <ItemList label="Ville" value={basicInfos.city} />
        <ItemList label="Adresse" value={basicInfos.address ?? ""} />
      </div>
    </div>
  );
};

export default EditBasicInfomartions;

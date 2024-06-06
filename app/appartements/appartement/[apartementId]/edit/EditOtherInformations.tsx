import React from "react";
import { additionalInfoScheme } from "../../appartement.sheme";
import Link from "next/link";
import { ItemList } from "../../add/summury/SummuryForm";

type Props = { otherInfomations: additionalInfoScheme };

const EditOtherInformations = ({ otherInfomations }: Props) => {
  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Autres Details Sur le bien</h1>
        <Link
          href={"/appartements/appartement/add/othersInformations"}
          className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
        >
          Modifier
        </Link>
      </div>
      <div className="divide-y-2 divide-dotted flex flex-col">
        <div>
          <ItemList
            label="Description"
            value={otherInfomations.description ?? ""}
          />
        </div>
      </div>
    </div>
  );
};

export default EditOtherInformations;

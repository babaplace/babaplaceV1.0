import React from "react";
import { financialInfoScheme } from "../../appartement.sheme";
import Link from "next/link";
import { ItemList } from "../../add/summury/SummuryForm";

type Props = { priceInfos: financialInfoScheme };

const EditPriceDetails = ({ priceInfos }: Props) => {
  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Prix</h1>
        <Link
          href={"/appartements/appartement/add/financesInfos"}
          className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
        >
          Modifier
        </Link>
      </div>
      <div className="divide-y-2 divide-dotted flex flex-col ">
        <ItemList label="Prix" value={priceInfos.price} />
        <ItemList label="Caution" value={priceInfos.caution ?? ""} />
      </div>
    </div>
  );
};

export default EditPriceDetails;

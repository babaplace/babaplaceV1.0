import { prisma } from "@/lib/prisma";
import { Prisma, appartement } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const getsuggestionsAppartement = (appartementCity: string) =>
  prisma.appartement.findMany({
    where: {
      city: appartementCity,
    },
    take: 3,
    include: {
      medias: true,
    },
  });
export type suggestionsAppartementType = Prisma.PromiseReturnType<
  typeof getsuggestionsAppartement
>;

type ApartmentProps = {
  appartement: suggestionsAppartementType[0];
};

export const SuggestedApartment = ({ appartement }: ApartmentProps) => (
  <Link
    href={`/discover/${appartement.id}`}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <Image
      width={300}
      height={300}
      src={appartement.medias[0].url ?? ""}
      alt={appartement.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{appartement.address}</h3>
      <p className="text-gray-600 mb-2">{appartement.price} MAD </p>
    </div>
  </Link>
);

type ApartmentsProps = {
  currentAppartementCity: string;
};

export const SuggestedApartments = async ({
  currentAppartementCity,
}: ApartmentsProps) => {
  const apartments = await getsuggestionsAppartement(currentAppartementCity);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Propriétés similaires qui pourraient vous intéresser
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apartments.map((apartment, index) => (
          <SuggestedApartment key={index} appartement={apartment} />
        ))}
      </div>
    </div>
  );
};

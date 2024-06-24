import { getAppartementByIdWithMedias } from "@/src/db/apartement.query";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Building,
  Building2,
  BuildingIcon,
  CheckIcon,
  LandPlot,
  LucideIcon,
  MapPinned,
  PhoneIcon,
  UtensilsCrossed,
  Waves,
  X,
  ZoomInIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import ImagesPageAppartement from "@/components/ImagesPageAppartement";
import Booking from "./Booking";
import { SuggestedApartments } from "./Suggestions";

type PageAppartementProps = {
  params: { appartementId: string };
};

const page = async ({ params: { appartementId } }: PageAppartementProps) => {
  const appartement = await getAppartementByIdWithMedias(appartementId);

  if (!appartement) {
    return notFound();
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {appartement.title}
        </h1>

        <div className="flex flex-wrap items-center mb-6 space-x-4">
          <div className="flex items-center text-yellow-500">
            <span className="text-gray-600">
              {appartement.numberChambres} chambres
            </span>
            <i className="fas fa-star"></i>
            {/* <span className="ml-1 text-gray-700 font-semibold">4.8</span> */}
          </div>
          <span className="text-gray-600">{appartement.city}</span>

          <span className="text-gray-600">
            <i className="fas fa-map-marker-alt"></i>
            {appartement.address}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ImagesPageAppartement images={appartement.medias} />
          <Booking appartementId={appartement.id} price={appartement.price} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Appartement entier</h3>
                  {/* <p className="text-gray-600">Hôte : Marie Dupont</p> */}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <i className="fas fa-user-friends text-primary mr-2"></i>
                  <span>{appartement.numberChambres} chambres</span>
                </div>
                <div>
                  <i className="fas fa-bed text-primary mr-2"></i>
                  <span>{appartement.numberSalons} salons</span>
                </div>
                <div>
                  <i className="fas fa-bath text-primary mr-2"></i>
                  <span>{appartement.numberToilettes} salles de bain</span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-calendar-check text-primary mr-4 text-3xl"></i>
                  <div>
                    <h4 className="font-semibold">
                      Étape 1 : Sélectionnez une date de visite
                    </h4>
                    <p className="text-gray-600">
                      Choisissez une date pour réserver une visite de
                      l&apos;appartement.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-user-friends text-primary mr-4 text-3xl"></i>
                  <div>
                    <h4 className="font-semibold">
                      Étape 2 : Valider le logement
                    </h4>
                    <p className="text-gray-600">
                      Assurez-vous que le logement correspond à vos attentes en
                      vérifiant les détails de l&apos;appartement, les
                      équipements et les règles de la maison.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-lock text-primary mr-4 text-3xl"></i>
                  <div>
                    <h4 className="font-semibold">
                      Étape 3 : Finalisez votre réservation
                    </h4>
                    <p className="text-gray-600">
                      Confirmez votre réservation en fournissant vos
                      informations et en payant votre séjour avec le bailleur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">
                À propos de ce logement
              </h3>
              {!appartement.description ? (
                <p className="text-gray-600">{appartement.description}</p>
              ) : (
                <p className="text-gray-600">
                  Aucune description disponible. Veuillez contacter le
                  propriétaire pour plus d&apos;informations.
                </p>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">
                Ce que propose ce logement
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {appartement.numberCuisine > 0 ? (
                  <div className="flex items-center">
                    <i className="fas fa-wifi text-primary mr-2"></i>
                    <span>Cuisine</span>
                  </div>
                ) : null}
                {appartement.numberSalons > 0 ? (
                  <div className="flex items-center">
                    <i className="fas fa-wifi text-primary mr-2"></i>
                    <span>Salon</span>
                  </div>
                ) : null}
                {appartement.numberToilettes > 0 ? (
                  <div className="flex items-center">
                    <i className="fas fa-wifi text-primary mr-2"></i>
                    <span>Toilettes</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">
                Caractéristiques de l&apos;appartement
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Details</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Nombre de chambres : {appartement.numberChambres}</li>
                    <li>Nombre de salons : {appartement.numberSalons}</li>
                    <li>Nombre de toilettes : {appartement.numberToilettes}</li>
                  </ul>
                </div>
                {/* <div>
                  <h4 className="font-semibold">Équipements</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Cuisine équipée</li>
                    <li>Lave-linge</li>
                    <li>Séche-linge</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Emplacement</h3>
          <div className="bg-gray-200 h-96 rounded-lg mb-4">
            <p className="text-center pt-40">Carte interactive</p>
          </div>
          <p className="text-gray-700">
            Situé à quelques pas des Champs-Élysées, cet appartement vous offre
            un accès privilégié aux plus beaux sites de Paris. Le quartier
            regorge de restaurants gastronomiques, de boutiques de luxe et de
            musées de renommée mondiale.
          </p>
        </div> */}

        {/* <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Avis</h3>
            <div className="flex items-center">
              <div className="flex items-center text-yellow-500 mr-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="text-gray-600">4.8 (124 avis)</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fas fa-user text-primary mr-2"></i>
              <div>
                <h4 className="font-semibold">Marie Dupont</h4>
                <p className="text-gray-600">
                  "Superbe appartement, très bien situé. Hôte très
                  accueillante."
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-user text-primary mr-2"></i>
              <div>
                <h4 className="font-semibold">Jean Martin</h4>
                <p className="text-gray-600">
                  "Très bon séjour, appartement conforme à la description."
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-user text-primary mr-2"></i>
              <div>
                <h4 className="font-semibold">Sophie Durand</h4>
                <p className="text-gray-600">
                  "Appartement très agréable, je recommande."
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;

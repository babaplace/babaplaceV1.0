"use client";

import { fr } from "date-fns/locale/fr";
import { Book, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import FormReservationVisite from "./FormReservationVisite";
import { useBookingVisiteStore } from "@/lib/zustand/stores/bookingVisiteStore";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

type Props = { appartementId: string; price: number };

const Booking = ({ appartementId, price }: Props) => {
  const bookingsVisite = useBookingVisiteStore((state) => state.bookingsVisite);

  const isBookingVisite = bookingsVisite.find(
    (book) => book.appartementId === appartementId
  );
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        à partir de <span className="text-red-600">{price} MAD</span>
      </h2>
      <div>
        {isBookingVisite && isBookingVisite.isBooking ? (
          <>
            <p>Reservation de visite :</p>
            <p className="text-green-500 text-xs flex flex-col gap-1 bold">
              Vous avez dejà une reservation de visite pour cet appartement !
              <span className="text-black">
                date:{" "}
                {isBookingVisite.date &&
                  format(isBookingVisite.date, "eeee, d MMMM yyyy", {
                    locale: fr,
                  })}
              </span>
            </p>
          </>
        ) : (
          <FormReservationVisite appartementId={appartementId} />
        )}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300">
          <FaWhatsapp className="mr-2" /> WhatsApp
        </button>
        <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
          <FaPhone className="mr-2" /> Appeler
        </button>
      </div>
      <p className="text-center text-gray-500 mt-4">
        Vous ne serez pas encore débité
      </p>
    </div>
  );
};

export default Booking;

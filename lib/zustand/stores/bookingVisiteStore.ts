import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookingDetails = {
  appartementId: string;
  isBooking: boolean;
  date?: Date;
};

type BookingVisiteStoreType = {
  bookingsVisite: BookingDetails[];
  setBookingsVisite: (newBookingsVisite: BookingDetails) => void;
};

export const useBookingVisiteStore = create<BookingVisiteStoreType>()(
  persist(
    (set) => ({
      bookingsVisite: [],
      setBookingsVisite: (newBookingsVisite: BookingDetails) =>
        set((state) => ({
          bookingsVisite: [...state.bookingsVisite, newBookingsVisite],
        })),
    }),
    { name: "bookingVisiteStore" }
  )
);

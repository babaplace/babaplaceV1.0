"use client";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { doBookingVisite } from "./booking.action";
import { toast } from "sonner";
import { useBookingVisiteStore } from "@/lib/zustand/stores/bookingVisiteStore";

type Props = {
  appartementId: string;
};

const formBookVisiteSheme = z.object({
  name: z.string(),
  date: z.date(),
  phone: z.string(),
});
type formBookVisiteSheme = z.infer<typeof formBookVisiteSheme>;

const FormReservationVisite = ({ appartementId }: Props) => {
  const setBookingVisiteStore = useBookingVisiteStore(
    (state) => state.setBookingsVisite
  );
  const [date, setDate] = useState<Date>();
  const [errors, setErrors] = useState<
    z.ZodError<formBookVisiteSheme> | undefined
  >();
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<any>();

  const bookingVisiteMutation = useMutation({
    mutationFn: async (data: formBookVisiteSheme) => {
      const result = await doBookingVisite({ ...data, appartementId });
      if (result.serverError) {
        toast.error(result.serverError);
      } else {
        toast.success(result.data?.message);
        setBookingVisiteStore({
          appartementId: appartementId,
          isBooking: true,
          date: result.data?.bookingVisite.datevisite,
        });
      }
    },
  });

  const onSubmit = async (data: formBookVisiteSheme) => {
    const dataParse = formBookVisiteSheme.safeParse(data);
    if (dataParse.error?.errors.length ?? 0 > 0) {
      setErrors(dataParse.error);
      console.log(dataParse.error?.formErrors.fieldErrors);
    } else {
      setErrors(undefined);
      bookingVisiteMutation.mutate(data);
    }
  };

  return (
    <form className="grid gap-4">
      <h1 className="font-bold text-lg">Reservez maintenant</h1>
      <div>
        <Input
          placeholder="Nom"
          onChange={(e) => setName(e.currentTarget.value)}
          defaultValue={name}
        />
        {errors?.formErrors.fieldErrors.name && (
          <p className="text-xs text-red-500 m-1">Le nom est requis</p>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <div>
          <PhoneInput
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            )}
            placeholder="Entrer un numero de telephone"
            value={phone}
            //   defaultCountry="MA"
            onChange={setPhone}
          />
          {errors?.formErrors.fieldErrors.phone && (
            <p className="text-xs text-red-500 m-1">Le numero est requis</p>
          )}
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start mb-0 text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Choisir une date</span>}
            </Button>
          </PopoverTrigger>
          {errors?.formErrors.fieldErrors.date && (
            <p className="text-xs text-red-500 mx-1">
              Veuillez choisir une date
            </p>
          )}
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button
        type="submit"
        className="items-end self-end border-primary"
        variant={"outline"}
        disabled={bookingVisiteMutation.isPending}
        onClick={(e) => {
          e.preventDefault();
          onSubmit({ date: date!, phone, name: name! });
        }}
      >
        Reserver
      </Button>
    </form>
  );
};

export default FormReservationVisite;

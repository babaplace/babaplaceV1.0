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

type Props = {};

const FormReservationVisite = (props: Props) => {
  const [date, setDate] = useState<Date>();
  const [phone, setPhone] = useState<any>();

  console.log(phone, date);

  return (
    <div className="grid gap-4">
      <h1 className="font-bold text-lg">Reservez maintenant</h1>

      <div>
        <Input placeholder="Nom"></Input>
      </div>
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
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Choisir une date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Button className="items-end self-end border-primary" variant={"outline"}>
        Reserver
      </Button>
    </div>
  );
};

export default FormReservationVisite;

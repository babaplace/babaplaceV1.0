"use client";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
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

type Props = {};

const FormReservationVisite = (props: Props) => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="grid gap-4">
      <h1 className="font-bold text-lg">Reservez maintenant</h1>

      <div>
        <Input placeholder="Nom"></Input>
      </div>
      <div>
        <Input placeholder="Phone"></Input>
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

"use client";

import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { DatePickerWithRange } from "../ui/DatePiker";

export const SearchInput = ({
  label,
  id,
  options,
  setValue,
  selectedValue,
}: {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  setValue: (value?: string) => void;
  selectedValue?: string;
}) => {
  return (
    <div className="w-full">
      <Label className="ml-2 text-sm" htmlFor={id}>
        {label}
      </Label>
      <Select
        defaultValue={selectedValue}
        onValueChange={(e) => {
          if (e === "all") {
            setValue(undefined);
          } else {
            setValue(e);
          }
        }}
      >
        <SelectTrigger id={id} className="border-none bg-gray-50 w-full">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent className="text-sm border-none w-full">
          {options.map((option) => (
            <SelectItem key={option.label} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export const SearchDate = () => {
  return (
    <div className="w-full">
      <Label htmlFor="date">Date</Label>
      <DatePickerWithRange className="border-none w-full" />
    </div>
  );
};

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  label: string;
  selectedValue?: string;
  setValue: (value?: string) => void;
  options: { label: string; value: string }[];
};

const CardFilter = ({ options, label, selectedValue, setValue }: Props) => {
  return (
    <div className="border border-gray-100 p-4 rounded-sm my-4 ">
      <h3 className="text-sm font-bold mb-4">{label}</h3>
      <div className="grid gap-4 space-y-2 pr-8">
        <RadioGroup
          defaultValue={selectedValue}
          onValueChange={(value) => {
            if (value === "all") {
              setValue(undefined);
            } else {
              setValue(value);
            }
          }}
        >
          {options.map((option) => (
            <div
              className="flex items-center space-x-2 gap-2"
              key={option.label}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default CardFilter;

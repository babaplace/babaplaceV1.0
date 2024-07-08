"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "./input";

const InputIncrement = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex items-center justify-center gap-4 bg-background rounded-lg border p-6">
      <Button
        variant="ghost"
        size="icon"
        className="text-primary"
        onClick={() => setValue(value - 1)}
      >
        <MinusIcon className="w-6 h-6" />
      </Button>
      <div className="text-4xl font-bold">
        <Input
          className="text-4xl font-bold bg-transparent border-0 focus:ring-0 focus:outline-none w-20"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="text-primary"
        onClick={() => setValue(value + 1)}
      >
        <PlusIcon className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default InputIncrement;

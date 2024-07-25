"use client";

import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import NavigationStep from "../../../sidebar/NavigationStep";
import { useRoomCreateStore } from "@/lib/zustand/stores/roomCreateStore";
import { financialInfoRoomScheme } from "@/src/types/room.sheme";

const FinanceInfosRoomForm: React.FC = () => {
  const { financialInfos, setFinancialInfos } = useRoomCreateStore(
    (state) => state
  );
  const router = useRouter();

  const form = useForm<financialInfoRoomScheme>({
    resolver: zodResolver(financialInfoRoomScheme),
    defaultValues: {
      ...financialInfos,
    },
  });

  const createMatiereMutation = useMutation<
    void,
    Error,
    financialInfoRoomScheme
  >({
    mutationFn: async (data: financialInfoRoomScheme) => {
      setFinancialInfos(data);
      router.push("/biens/room/add/equipement");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
    },
  });

  const onSubmit: SubmitHandler<financialInfoRoomScheme> = (data) => {
    createMatiereMutation.mutate(data);
  };

  const formFields: Array<{
    name: keyof financialInfoRoomScheme;
    label: string;
  }> = [
    { name: "price", label: "Prix (DH)" },
    { name: "caution", label: "Caution" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">Prix </h1>
            <p className="text-gray-500 text-sm">
              Informations sur le prix de votre chambre
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="my-8 flex-1 space-y-4"
            >
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="divide-y-4 divide-dotted">
                  {formFields.map(({ name, label }) => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name}
                      render={({ field }) => (
                        <FormItem className="py-2 flex flex-col items-start gap-1 my-2 justify-between">
                          <Label
                            htmlFor={name}
                            className="text-black font-semibold"
                          >
                            {label}
                          </Label>
                          <FormControl className="flex-1">
                            <Input
                              {...field}
                              type="number"
                              min="0"
                              className="p-3 text-start"
                              onChange={(e) => {
                                const value = parseInt(e.target.value, 10);
                                field.onChange(
                                  Number(isNaN(value) ? 0 : value)
                                );
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>

              <NavigationStep>
                <Link
                  href="/biens/room/add/"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Precedent
                </Link>
                <Button
                  type="submit"
                  disabled={createMatiereMutation.isPending}
                >
                  {createMatiereMutation.isPending ? "En cours ..." : "Suivant"}
                </Button>
              </NavigationStep>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FinanceInfosRoomForm;

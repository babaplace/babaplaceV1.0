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
import NavigationStep from "../AddAppartementSteps/NavigationStep";
import { useAppartementStore } from "@/lib/zustand/Providers/CreateAppartementStoreProviders";
import { detailsSheme } from "@/src/types/appartement.sheme";

const DetailsForm: React.FC = () => {
  const { details, setDetails } = useAppartementStore((state) => state);
  const router = useRouter();

  const form = useForm<detailsSheme>({
    resolver: zodResolver(detailsSheme),
    defaultValues: {
      ...details,
    },
  });

  const createMatiereMutation = useMutation<void, Error, detailsSheme>({
    mutationFn: async (data: detailsSheme) => {
      setDetails(data);
      router.push("/biens/appartement/add/espaceAnnexe");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      // Gérer l'erreur ici (par exemple, afficher un message à l'utilisateur)
    },
  });

  const onSubmit: SubmitHandler<detailsSheme> = (data) => {
    createMatiereMutation.mutate(data);
  };

  const updateField = (fieldName: keyof detailsSheme, increment: boolean) => {
    const currentValue = form.getValues(fieldName) || 0;
    const newValue = increment
      ? Number(currentValue) + 1
      : Math.max(0, Number(currentValue) - 1);
    form.setValue(fieldName, Number(newValue));
  };

  const formFields: Array<{ name: keyof detailsSheme; label: string }> = [
    { name: "numberRooms", label: "Nombre de chambres *" },
    { name: "surface", label: "Surface (m2)" },
    { name: "numberMaxFloor", label: "Niveau de l'etage" },
    { name: "numberUnitsPerFloor", label: "Etage de l'appartement" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">Details</h1>
            <p className="text-gray-500 text-sm">
              Quelles sont les caractéristiques principales de votre bien ?
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
                        <>
                          <FormItem className="py-2 flex justify-between items-center">
                            <Label
                              htmlFor={name}
                              className="text-black font-semibold"
                            >
                              {label}
                            </Label>
                            <FormControl>
                              <div className="flex items-center space-x-2">
                                <Button
                                  type="button"
                                  onClick={() => updateField(name, false)}
                                  variant="outline"
                                >
                                  -
                                </Button>
                                <Controller
                                  name={name}
                                  control={form.control}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      type="number"
                                      min="0"
                                      className="w-16 text-center"
                                      onChange={(e) => {
                                        const value = parseInt(
                                          e.target.value,
                                          10
                                        );
                                        field.onChange(
                                          Number(isNaN(value) ? 0 : value)
                                        );
                                      }}
                                    />
                                  )}
                                />
                                <Button
                                  type="button"
                                  onClick={() => updateField(name, true)}
                                  variant="outline"
                                >
                                  +
                                </Button>
                              </div>
                            </FormControl>
                          </FormItem>
                          <FormMessage />
                        </>
                      )}
                    />
                  ))}
                </div>
              </div>

              <NavigationStep>
                <Link
                  href="/biens/appartement/add/propertytype"
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

export default DetailsForm;

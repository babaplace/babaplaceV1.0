"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import { detailsSheme } from "../../appartement.sheme";
import NavigationStep from "../NavigationStep";
import { useAppartementFormStore } from "@/lib/zustand/stores/appartementCreateStore";
import Link from "next/link";

const DetailsForm = () => {
  const { details, setDetails } = useAppartementFormStore();

  const router = useRouter();
  const form = useForm<detailsSheme>({
    resolver: zodResolver(detailsSheme),
    defaultValues: {
      ...details,
    },
  });

  const createMatiereMutation = useMutation({
    mutationFn: async (data: detailsSheme) => {
      //ajouter dans un store et continuer
      setDetails(data);
      router.push("/appartements/appartement/add/financesInfos");
      return;
    },
  });

  const onSubmit = (data: detailsSheme) => {
    createMatiereMutation.mutate(data);
  };

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">Details </h1>
            <p className="text-gray-500text-sm">
              Details sur votre appartement
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="my-8 flex-1  space-y-4 "
            >
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="divide-y-2 divide-dotted ">
                  <FormField
                    control={form.control}
                    name="numberChambres"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">
                          Nombre de Chambres
                        </h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Input
                              id="numberChambres"
                              placeholder="0"
                              type="number"
                              min="0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numberToilettes"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">
                          Nombre de toilettes
                        </h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Input
                              id="numberToilettes"
                              placeholder="0"
                              type="number"
                              min="0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="niveauEtage"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">
                          Niveau d&apos;Etage
                        </h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Input
                              id="niveauEtage"
                              placeholder="0"
                              type="number"
                              min="0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numberSalons"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">
                          Nombre de Salons
                        </h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Input
                              id="numberSalons"
                              placeholder="0"
                              type="number"
                              min="0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <NavigationStep>
                <Link
                  href={"/appartements/appartement/add"}
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
        <div className="hidden md:flex justify-end"></div>
      </div>
    </div>
  );
};

export default DetailsForm;

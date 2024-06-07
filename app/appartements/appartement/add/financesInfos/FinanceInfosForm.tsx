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
import { financialInfoScheme } from "../../appartement.sheme";
import NavigationStep from "../NavigationStep";
import Link from "next/link";
import { useAppartementStore } from "@/lib/zustand/Providers/CreateAppartementStoreProviders";

const FinanceInfosForm = () => {
  const { financialInfos, setFinancialInfos } = useAppartementStore(
    (state) => state
  );
  const router = useRouter();
  const form = useForm<financialInfoScheme>({
    resolver: zodResolver(financialInfoScheme),
    defaultValues: {
      ...financialInfos,
    },
  });

  const createMatiereMutation = useMutation({
    mutationFn: async (data: financialInfoScheme) => {
      //ajouter dans un store et continuer
      setFinancialInfos(data);
      router.push("/appartements/appartement/add/othersInformations");
    },
  });

  const onSubmit = (data: financialInfoScheme) => {
    createMatiereMutation.mutate(data);
  };

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">Prix </h1>
            <p className="text-gray-500text-sm">
              Informations sur le prix de votre appartement
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
                    name="price"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">Prix (DH)</h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Input
                              id="price"
                              placeholder="0"
                              type="number"
                              min={"0"}
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
                    name="caution"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">Caution</h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Input
                              id="caution"
                              placeholder="0"
                              type="number"
                              min={"0"}
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
                  href={"/appartements/appartement/add/details"}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Precedent
                </Link>
                <Button
                  type="submit"
                  disabled={createMatiereMutation.isPending}
                >
                  {createMatiereMutation.isPending ? "en cours..." : "Suivant"}
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

export default FinanceInfosForm;

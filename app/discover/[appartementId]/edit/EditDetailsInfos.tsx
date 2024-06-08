"use client";

import Link from "next/link";
import React from "react";
import { ItemList } from "../../../appartements/appartement/add/summury/SummuryForm";
import { detailsSheme } from "../../../appartements/appartement/appartement.sheme";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { doEditDetailsAppartement } from "./appartement.edit.action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEditAppartementStore } from "@/lib/zustand/Providers/EditAppartementStoreProviders";

type EditDetailsInfosProps = {
  details: detailsSheme;
  appartementId: string;
};

const EditDetailsInfos = ({
  details,
  appartementId,
}: EditDetailsInfosProps) => {
  const { startEditDetailsInfos, setStartEditDetailsInfos } =
    useEditAppartementStore((state) => state);

  const router = useRouter();
  const form = useForm<detailsSheme>({
    resolver: zodResolver(detailsSheme),
    defaultValues: {
      ...details,
    },
  });

  const editMutation = useMutation({
    mutationFn: async (data: detailsSheme) => {
      const result = await doEditDetailsAppartement({
        ...data,
        appartementId,
      });

      if (!result.serverError) {
        toast.success(result.data?.message);
        setStartEditDetailsInfos(false);
      } else {
        toast.error(result.serverError);
      }
    },
  });

  const onSubmit = (data: detailsSheme) => {
    editMutation.mutate(data);
  };
  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Details</h1>
        {!startEditDetailsInfos ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setStartEditDetailsInfos(true);
            }}
            className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
          >
            Modifier
          </button>
        ) : null}
      </div>
      {startEditDetailsInfos ? (
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
                  name="Cuisine"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <h4 className="text-black font-semibold">
                        Nombre de Cuisine
                      </h4>
                      <div className="flex-1">
                        <FormControl className="space-y-2">
                          <Input
                            id="Cuisine"
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

                <Button
                  type="submit"
                  className="w-fit my-2 text-gray-500hover:text-primary text-sm underline justify-end"
                >
                  Enregistrer
                </Button>
              </div>
            </div>
          </form>
        </Form>
      ) : (
        <div className="divide-y-2 divide-dotted flex flex-col ">
          <ItemList label="Nombre de chambres" value={details.numberChambres} />
          <ItemList
            label="Nombre de toilletes"
            value={details.numberToilettes}
          />
          <ItemList label="Cuisine" value={details.Cuisine} />
          <ItemList label="Niveau d'etage" value={details.niveauEtage} />
          <ItemList label="Nombre de salons" value={details.numberSalons} />
        </div>
      )}
    </div>
  );
};

export default EditDetailsInfos;

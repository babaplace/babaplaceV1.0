"use client";

import React from "react";
import { basicInfoScheme } from "../../appartement.sheme";
import Link from "next/link";
import { ItemList } from "../../add/summury/SummuryForm";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { doEditBasicInfomartionsAppartement } from "./appartement.edit.action";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEditAppartementStore } from "@/lib/zustand/Providers/EditAppartementStoreProviders";

type Props = { basicInfos: basicInfoScheme; appartementId: string };

const EditBasicInfomartions = ({ basicInfos, appartementId }: Props) => {
  const { startEditBasicInfos, setStartEditBasicInfos } =
    useEditAppartementStore((state) => state);

  const router = useRouter();
  const form = useForm<basicInfoScheme>({
    resolver: zodResolver(basicInfoScheme),
    defaultValues: {
      ...basicInfos,
    },
  });

  const editMutation = useMutation({
    mutationFn: async (data: basicInfoScheme) => {
      const result = await doEditBasicInfomartionsAppartement({
        ...data,
        appartementId,
      });

      if (!result.serverError) {
        toast.success(result.data?.message);
        setStartEditBasicInfos(false);
      } else {
        toast.error(result.serverError);
      }
    },
  });

  const onSubmit = (data: basicInfoScheme) => {
    editMutation.mutate(data);
  };

  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Localisations Et Titre</h1>
        {!startEditBasicInfos ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setStartEditBasicInfos(true);
            }}
            className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
          >
            Modifier
          </button>
        ) : null}
      </div>
      {startEditBasicInfos ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-8 flex-1  space-y-4 "
          >
            <div className="border border-gray-100 rounded-lg p-4">
              <div className="divide-y-2 divide-dotted ">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <h4 className="text-black font-semibold">Titre</h4>
                      <div className="flex-1">
                        <FormControl className="space-y-2">
                          <Input
                            id="title"
                            placeholder="title"
                            type="text"
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
                  name="city"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <h4 className="text-black font-semibold">Ville</h4>
                      <div className="flex-1">
                        <FormControl>
                          <Input
                            id="city"
                            placeholder="fes"
                            type="text"
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
                  name="address"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <h4 className="text-black font-semibold">Addresse</h4>
                      <div className="flex-1">
                        <FormControl>
                          <Input
                            id="address"
                            placeholder="lot chems Mt fleurie 2"
                            type="text"
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
          <ItemList label="Title" value={basicInfos.title} />
          <ItemList label="Ville" value={basicInfos.city} />
          <ItemList label="Adresse" value={basicInfos.address ?? ""} />
        </div>
      )}
    </div>
  );
};

export default EditBasicInfomartions;

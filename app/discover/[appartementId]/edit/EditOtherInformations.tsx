"use client";

import React from "react";
import { additionalInfoScheme } from "../../../appartements/appartement/appartement.sheme";
import Link from "next/link";
import { ItemList } from "../../../appartements/appartement/add/summury/SummuryForm";
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

import { doEditAdditionalInfoAppartement } from "./appartement.edit.action";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEditAppartementStore } from "@/lib/zustand/Providers/EditAppartementStoreProviders";

type Props = { otherInfomations: additionalInfoScheme; appartementId: string };

const EditOtherInformations = ({ otherInfomations, appartementId }: Props) => {
  const { startEditOtherInfos, setStartEditOtherInfos } =
    useEditAppartementStore((state) => state);

  const router = useRouter();
  const form = useForm<additionalInfoScheme>({
    resolver: zodResolver(additionalInfoScheme),
    defaultValues: {
      ...otherInfomations,
    },
  });

  const editMutation = useMutation({
    mutationFn: async (data: additionalInfoScheme) => {
      const result = await doEditAdditionalInfoAppartement({
        ...data,
        appartementId,
      });

      if (!result.serverError) {
        toast.success(result.data?.message);
        setStartEditOtherInfos(false);
      } else {
        toast.error(result.serverError);
      }
    },
  });

  const onSubmit = (data: additionalInfoScheme) => {
    editMutation.mutate(data);
  };

  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Autres Details Sur le bien</h1>
        {!startEditOtherInfos ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setStartEditOtherInfos(true);
            }}
            className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
          >
            Modifier
          </button>
        ) : null}
      </div>
      {startEditOtherInfos ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-8 flex-1  space-y-4 "
          >
            <div className="border border-gray-100 rounded-lg p-4">
              <div className="divide-y-2 divide-dotted ">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <h4 className="text-black font-semibold">Description</h4>
                      <div className="flex-1">
                        <FormControl className="space-y-2">
                          <Textarea
                            className="min-h-fit "
                            {...field}
                          ></Textarea>
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
        <div className="divide-y-2 divide-dotted flex flex-col">
          {/* descritpitonItem */}
          <div className="flex  flex-col justify-start py-2">
            <h4 className="text-black font-bold my-4">Description : </h4>
            <span className="text-black bg-gray-50 p-2 ">
              {otherInfomations.description}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditOtherInformations;

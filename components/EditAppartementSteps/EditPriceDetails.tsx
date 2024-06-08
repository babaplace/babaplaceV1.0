"use client";
import React from "react";
import { financialInfoScheme } from "../../src/types/appartement.sheme";
import { ItemList } from "../AddAppartementSteps/SummuryForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { doEditFinancialInfoAppartement } from "../../src/actions/appartement.edit.action";
import { useEditAppartementStore } from "@/lib/zustand/Providers/EditAppartementStoreProviders";

type Props = { priceInfos: financialInfoScheme; appartementId: string };

const EditPriceDetails = ({ priceInfos, appartementId }: Props) => {
  const { startEditFinancialInfos, setStartEditFinancialInfos } =
    useEditAppartementStore((state) => state);

  const router = useRouter();
  const form = useForm<financialInfoScheme>({
    resolver: zodResolver(financialInfoScheme),
    defaultValues: {
      ...priceInfos,
    },
  });

  const editMutation = useMutation({
    mutationFn: async (data: financialInfoScheme) => {
      const result = await doEditFinancialInfoAppartement({
        ...data,
        appartementId,
      });

      if (!result.serverError) {
        toast.success(result.data?.message);
        setStartEditFinancialInfos(false);
      } else {
        toast.error(result.serverError);
      }
    },
  });

  const onSubmit = (data: financialInfoScheme) => {
    editMutation.mutate(data);
  };

  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-extrabold">Prix</h1>
        {!startEditFinancialInfos ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setStartEditFinancialInfos(true);
            }}
            className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
          >
            Modifier
          </button>
        ) : null}
      </div>
      {startEditFinancialInfos ? (
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
          <ItemList label="Prix" value={priceInfos.price} />
          <ItemList label="Caution" value={priceInfos.caution ?? ""} />
        </div>
      )}
    </div>
  );
};

export default EditPriceDetails;

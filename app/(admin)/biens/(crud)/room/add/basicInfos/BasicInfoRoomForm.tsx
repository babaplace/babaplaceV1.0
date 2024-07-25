"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import NavigationStep from "../../../sidebar/NavigationStep";
import { basicInfoRoomScheme } from "@/src/types/room.sheme";
import { useRoomCreateStore } from "@/lib/zustand/stores/roomCreateStore";

const BasicInfoRoomForm = () => {
  const { basicInfos, setBasicInfos } = useRoomCreateStore((state) => state);
  const router = useRouter();
  const form = useForm<basicInfoRoomScheme>({
    resolver: zodResolver(basicInfoRoomScheme),
    defaultValues: {
      ...basicInfos,
    },
  });

  const createMatiereMutation = useMutation({
    mutationFn: async (data: basicInfoRoomScheme) => {
      //ajouter dans un store et continuer
      setBasicInfos(data);
      router.push("/biens/room/add/financesInfos");
      return;
    },
  });

  const onSubmit = (data: basicInfoRoomScheme) => {
    createMatiereMutation.mutate(data);
  };

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">Localisation</h1>
            <p className="text-gray-500text-sm">
              Assurez-vous de donnez la bonne location
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
                    name="quartier"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">Quartier</h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Input
                              id="Mt Fleurie"
                              placeholder="Mt Fleurie"
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
                </div>
              </div>

              <NavigationStep className="justify-end">
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

export default BasicInfoRoomForm;

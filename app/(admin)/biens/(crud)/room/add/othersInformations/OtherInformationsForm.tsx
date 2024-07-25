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
import NavigationStep from "../../../sidebar/NavigationStep";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRoomCreateStore } from "@/lib/zustand/stores/roomCreateStore";
import { additionalInfoRoomScheme } from "@/src/types/room.sheme";

const OtherInformationsForm = () => {
  const { otherInformations, setOtherInformations } = useRoomCreateStore(
    (state) => state
  );

  const router = useRouter();
  const form = useForm<additionalInfoRoomScheme>({
    resolver: zodResolver(additionalInfoRoomScheme),
    defaultValues: {},
  });

  const createMatiereMutation = useMutation({
    mutationFn: async (data: additionalInfoRoomScheme) => {
      //ajouter dans un store et continuer
      setOtherInformations(data);
      //   rediriger vers la page de l'appartement
      router.push("/biens/room/add/imagesStep");
    },
  });

  const onSubmit = (data: additionalInfoRoomScheme) => {
    createMatiereMutation.mutate(data);
  };

  return (
    <div className="max-w-6xl mx-auto flex-1">
      <div className="h-full w-full px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-black text-2xl font-bold">Details </h1>
            <p className="text-gray-500text-sm">
              Autres Details sur votre appartement
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="my-8 flex-1  space-y-4 "
            >
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="">
                  <FormField
                    control={form.control}
                    name="surface"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">
                          Surface (m2)
                        </h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Input
                              id="surface"
                              placeholder="surface"
                              type="text"
                              onChange={(e) => {
                                const value = parseInt(e.target.value, 10);
                                field.onChange(
                                  Number(isNaN(value) ? 0 : value)
                                );
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <h4 className="text-black font-semibold">
                          Description
                        </h4>
                        <div className="flex-1">
                          <FormControl className="space-y-2">
                            <Textarea {...field}></Textarea>
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
                  href={"/biens/room/add/equipement"}
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
      </div>
    </div>
  );
};

export default OtherInformationsForm;

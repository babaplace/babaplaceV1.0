"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Added import for Select component
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
import { RequiredInputIndice } from "@/components/ui/RequiredInputIndice";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { contactShemePartneriat } from "./contact.sheme";
import { toast } from "sonner";
import { doSendContactPartenariat } from "./contact.send.action";

type FormData = z.infer<typeof contactShemePartneriat>;

const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(contactShemePartneriat),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const result = await doSendContactPartenariat(data);
      if (!result.serverError) {
        toast.success(result.data?.message);
      } else {
        toast.error(result.serverError);
      }
    },
  });

  const onSubmit = (data: FormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="mx-auto max-w-xl z-10 min-w-full rounded-xl bg-white p-6 shadow-xl md:p-8 lg:p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 ">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="py-2">
                <h4 className="text-sm font-medium text-gray-700">
                  Vous êtes ? <RequiredInputIndice />
                </h4>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger defaultValue="agence">
                      <SelectValue placeholder="Vous êtes" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="agence">Agence</SelectItem>
                    <SelectItem value="bailleur">Bailleur</SelectItem>
                    <SelectItem value="particulier">Particulier</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="py-2">
                <h4 className="text-sm font-medium text-gray-700">
                  Nom <RequiredInputIndice />
                </h4>
                <FormControl>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Entrez votre nom"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="py-2">
                <h4 className="text-sm font-medium text-gray-700">
                  Email
                  <RequiredInputIndice />
                </h4>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Entrez votre email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="py-2">
                <h4 className="text-sm font-medium text-gray-700">Message</h4>
                <FormControl>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Entrez votre message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col my-2 gap-2 min-[400px]:flex-row">
            <Button disabled={contactMutation.isPending} type="submit">
              {contactMutation.isPending
                ? "En cours ..."
                : "Envoyer une demande"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

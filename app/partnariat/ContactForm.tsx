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

const schema = z.object({
  name: z
    .string({ required_error: "le nom est requis " })
    .min(1, "minimiun 1 caracteres"),
  email: z
    .string({ required_error: "l'email est requis" })
    .email("Email invalide"),
  message: z.string().min(1, "Le message ne peut pas être vide"),
  role: z.string({ required_error: "Le rôle est requis" }), // Added role field to schema
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-xl z-10 min-w-full rounded-xl bg-white p-6 shadow-xl md:p-8 lg:p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="py-2">
                <h4 className="text-sm font-medium text-gray-700">Nom</h4>
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
                <h4 className="text-sm font-medium text-gray-700">Email</h4>
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
            name="role"
            render={({ field }) => (
              <FormItem className="py-2">
                <h4 className="text-sm font-medium text-gray-700">Rôle</h4>
                <FormControl>
                  <Select {...field} defaultValue="">
                    <SelectTrigger className="">
                      <SelectValue placeholder="Vous êtes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agence">Agence</SelectItem>
                      <SelectItem value="bailleur">Bailleur</SelectItem>
                      <SelectItem value="particulier">Particulier</SelectItem>
                    </SelectContent>
                  </Select>
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

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Devenez partenaire
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

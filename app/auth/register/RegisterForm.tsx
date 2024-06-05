"use client";

import React, { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link"; // Added Link import
import { Form, FormField, FormMessage } from "@/components/ui/form"; // Added Form components
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSheme } from "../auth.sheme";
import { useMutation } from "@tanstack/react-query";
import { doRegister } from "./register.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function RegisterForm({ children }: PropsWithChildren) {
  const router = useRouter();
  const form = useForm<registerSheme>({
    resolver: zodResolver(registerSheme),
  });

  const registerMutation = useMutation({
    mutationFn: async (data: registerSheme) => {
      const result = await doRegister(data);
      if (!result.serverError) {
        toast.success(result.data?.message);
        router.push("/auth/login");
        //TODO
        //  - redirect
      } else {
        toast.error(result.serverError);
      }
    },
  });

  const onSubmit = (data: registerSheme) => {
    registerMutation.mutate(data);
  };

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Inscription</h1>
        <p className="text-balance text-muted-foreground">
          Entrez votre email ci-dessous pour créer un nouveau compte
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <div className="grid gap-2">
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...field}
                />
                <FormMessage />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="123-456-7890"
                  {...field}
                />
                <FormMessage />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...field}
                />
                <FormMessage />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" {...field} />
                <FormMessage />
              </div>
            )}
          />
          <Button type="submit" className="w-full">
            {registerMutation.isPending ? "En cours..." : "Créer un compte"}
          </Button>
          {children}
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Vous avez déjà un compte ?{" "}
        <Link href="/auth/login" className="underline">
          Se connecter
        </Link>
      </div>
    </div>
  );
}

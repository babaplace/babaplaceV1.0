"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormMessage } from "@/components/ui/form"; // Added Form components
import { PropsWithChildren } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginScheme } from "../auth.sheme";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { doLogin } from "./login.action";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export function LoginForm({ children }: PropsWithChildren) {
  const router = useRouter();
  const form = useForm<loginScheme>({
    resolver: zodResolver(loginScheme),
  });
  const loginMutation = useMutation({
    mutationFn: async (credentials: loginScheme) => {
      const result = await doLogin(JSON.stringify(credentials));
      if (!result.serverError) {
        console.log(result);

        toast.success(result.data?.message);
        router.push("/");
        router.refresh();
      } else {
        toast.error(result.serverError);
      }
    },
  });

  const onSubmit = (credentials: loginScheme) => {
    loginMutation.mutate(credentials);
  };

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Connexion</h1>
        <p className="text-balance text-muted-foreground">
          Entrez votre email ci-dessous pour vous connecter à votre compte
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-8 flex-1  space-y-4 "
        >
          <div className="grid gap-4">
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
            <Button
              disabled={loginMutation.isPending}
              type="submit"
              className="w-full"
            >
              {loginMutation.isPending ? "En cours..." : "Connexion"}
            </Button>
          </div>
          <Separator />
        </form>
        {children}
      </Form>
      <div className="mt-4 text-center text-sm">
        Vous n&apos;avez pas de compte ?{" "}
        <Link href="/auth/register" className="underline">
          S&apos;inscrire
        </Link>
      </div>
    </div>
  );
}

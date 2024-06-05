"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import { LogOut } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { doLogout } from "./logout.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const LogoutMutation = useMutation({
    mutationFn: async () => {
      const result = await doLogout({});
      if (!result.serverError) {
        toast.success(result.data?.message);
        router.push("/");
        router.refresh();
      } else {
        toast.error(result.serverError);
      }
    },
  });
  return (
    <Button
      disabled={LogoutMutation.isPending}
      variant={"outline"}
      onClick={async (e) => {
        e.preventDefault();
        LogoutMutation.mutate();
        toast.success("Vous êtes deconnecté");
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>{LogoutMutation.isPending ? "En cours" : "Se deconnecter"}</span>
    </Button>
  );
};

export default LogoutButton;

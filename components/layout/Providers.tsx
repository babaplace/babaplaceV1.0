"use client";

import React, { PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { EdgeStoreProvider } from "@/lib/edgestore";
import Transition from "./Transition";
import { SessionProvider } from "next-auth/react";
import { CreateSearchStoreProvider } from "@/lib/zustand/Providers/SearchAppartementStoreProviders";
import { CreateAppartementStoreProvider } from "@/lib/zustand/Providers/CreateAppartementStoreProviders";
import { CreateEditAppartementStoreProvider } from "@/lib/zustand/Providers/EditAppartementStoreProviders";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors duration={10000} />
        <CreateSearchStoreProvider>
          <CreateAppartementStoreProvider>
            <CreateEditAppartementStoreProvider>
              {children}
            </CreateEditAppartementStoreProvider>
          </CreateAppartementStoreProvider>
        </CreateSearchStoreProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

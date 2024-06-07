import { CreateEditAppartementStoreProvider } from "@/lib/zustand/Providers/EditAppartementStoreProviders";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <CreateEditAppartementStoreProvider>
      {children}
    </CreateEditAppartementStoreProvider>
  );
};

export default layout;

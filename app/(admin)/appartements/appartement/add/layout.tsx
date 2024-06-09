import React, { PropsWithChildren } from "react";
import SidebarMobile from "../../../../../components/AddAppartementSteps/sidebar/SidebarMobile";
import Sidebar from "../../../../../components/AddAppartementSteps/sidebar/Sidebar";
import Image from "next/image";
import bg from "@/public/assets/images/bg-sidebar-mobile.svg";
import NavigationStep from "../../../../../components/AddAppartementSteps/NavigationStep";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: PropsWithChildren) => {
  const session = await auth();
  if (!session?.user.email) {
    redirect("/auth/login");
  }

  return (
    <main className="relative flex flex-col justify-center items-center ">
      <div className="w-full  relative">
        <Image
          src={bg}
          width={100}
          height={100}
          alt="background aside mobile"
          className=" w-full md:hidden "
        />
        <div>
          <SidebarMobile />
        </div>
      </div>
      <section className="hidden md:flex bg-neutro-white min-h-[80vh] lg:w-3/5 rounded-lg drop-shadow-soft p-4 my-8">
        <Sidebar />
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-center">
            Mettre en Location un appartement
          </h1>
          {children}
        </div>
      </section>
      <section className="mx-4 md:hidden rounded-lg mt-5 w-full">
        <h1 className="text-xl text-center font-bold">
          Mettre en Location un appartement
        </h1>
        {children}
      </section>
    </main>
  );
};

export default layout;

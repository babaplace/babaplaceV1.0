import React, { PropsWithChildren } from "react";
import SidebarMobile from "./sidebar/SidebarMobile";
import Sidebar from "./sidebar/Sidebar";
import Image from "next/image";
import bg from "@/public/assets/images/bg-sidebar-mobile.svg";
import NavigationStep from "./NavigationStep";

const layout = ({ children }: PropsWithChildren) => {
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
        <div className="flex-1">{children}</div>
      </section>
      <section className="mx-4 md:hidden rounded-lg mt-5 w-full">
        {children}
      </section>
    </main>
  );
};

export default layout;

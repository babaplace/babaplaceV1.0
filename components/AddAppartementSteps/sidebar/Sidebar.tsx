import React from "react";
import StepItem from "./StepItem";
import Image from "next/image";
import SidebarItems from "./SidebarItems";
import bg from "@/public/assets/images/bg-sidebar-desktop.svg";

const Sidebar: React.FC = () => {
  return (
    <div className="hidden  md:block relative basis-1/3 bg-primary rounded-lg">
      <Image
        width={500}
        height={500}
        src={bg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover object-center rounded-lg z-0"
      />
      <SidebarItems />
    </div>
  );
};

export default Sidebar;

import React from "react";
import SidebarItems from "./SidebarItems";

const SidebarMobile = () => {
  return (
    <div className=" md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="mx-4">
        <SidebarItems />
      </div>
    </div>
  );
};

export default SidebarMobile;

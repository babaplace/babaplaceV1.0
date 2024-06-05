import React from "react";

const PropertiesHorizontaleSectionSkeleton = async () => {
  return (
    <div className="flex-1 flex justify-center items-center flex-col gap-4 ">
      <PropertiesHorizontaleSectionSkeleton />
      <PropertiesHorizontaleSectionSkeleton />
      <PropertiesHorizontaleSectionSkeleton />
    </div>
  );
};

export default PropertiesHorizontaleSectionSkeleton;

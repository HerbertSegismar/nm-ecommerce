import { productType } from "@/constants/NavData";
import Link from "next/link";
import React from "react";

interface Props {
  selectedTab: string;  
  onTabSelect: (tab: string) => void;
}

const HometabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="text-sm font-semibold flex flex-wrap items-center gap-3">
        {productType?.map((item) => (
          <button
            onClick={() => onTabSelect(item?.name)}
            key={item?.name}
            className={`border border-lightGreen/30 px-4 py-1.5 hover:border-lightGreen
                    md:px-6 md:py-2 rounded-full hover:bg-lightGreen hover:text-white hoverEffect
                    ${selectedTab === item?.name? "bg-lightGreen border-lightGreen text-white" : "bg-lightGreen/10"}`}
          >
            {item?.name}
          </button>
        ))}
      </div>
      <Link
        href="/shop"
        className="border border-lightGreen/30 px-4 py-1.5 hover:border-lightGreen text-sm
                    md:px-6 md:py-2 rounded-full hover:bg-lightGreen hover:text-white hoverEffect"
      >
        See All
      </Link>
    </div>
  );
};

export default HometabBar;

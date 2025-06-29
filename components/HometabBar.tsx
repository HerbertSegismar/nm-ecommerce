import { productType } from "@/constants/NavData";
import React from "react";

const HometabBar = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="text-sm font-semibold flex items-center gap-3">
        {productType?.map((item) => (
          <button
            key={item?.name}
            className={`border border-lightGreen/30 px-4 py-1.5 hover:border-lightGreen
                    md:px-6 md:py-2 rounded-full hover:bg-lightGreen hover:text-white hoverEffect`}
          >
            {item?.name}
          </button>
        ))}
      </div>
      <div>See All</div>
    </div>
  );
};

export default HometabBar;

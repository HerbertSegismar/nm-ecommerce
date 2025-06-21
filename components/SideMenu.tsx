"use client";
import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { navbarData } from "@/constants/NavData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMediaIcons from "./SocialMediaIcons";
import { useOutsideClick } from "@/hooks";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sideMenuRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen w-full left-0 z-50 bg-black/50 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sideMenuRef}
        className="text-white relative flex flex-col justify-between gap-6 px-10 bg-black h-screen hoverEffect w-3/4 border-r border-lightGreen"
      >
        <div className="flex items-center justify-between gap-5 py-4">
          <Logo
            className="text-white"
            spanDesign="text-lightGreen group-hover:text-white"
          />
          <button
            onClick={onClose}
            className="hoverEffect hover:text-lightGreen cursor-pointer"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col items-start absolute gap-7 mt-20 text-[16px] capitalize font-semibold cursor-pointer">
          {navbarData?.map((item) => (
            <Link
              key={item?.name}
              href={item?.path}
              className={`hover:text-lightGreen hoverEffect relative group tracking-widest hover:scale-105 ${
                pathname === item?.path && "text-lightGreen"
              }`}
            >
              {item?.name}
              <span
                className={`${
                  pathname === item?.path
                    ? "group-hover:w-0 w-1/2"
                    : "group-hover:w-1/2 w-0"
                } absolute left-1/2 -bottom-0.5 h-0.5 bg-lightGreen hoverEffect group-hover:left-0`}
              />
              <span
                className={`${
                  pathname === item?.path
                    ? "group-hover:w-0 w-1/2"
                    : "group-hover:w-1/2 w-0"
                } absolute right-1/2 -bottom-0.5 h-0.5 bg-lightGreen hoverEffect group-hover:right-0`}
              />
              <div className="absolute -bottom-0.5 size-full" />
            </Link>
          ))}
        </div>
        <div className="absolute top-1/2 border-t border-lightGreen w-full left-0" />
        <div className="top-1/2 absolute pt-10">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

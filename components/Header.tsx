"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuList from "@/components/MenuList";
import { links } from "@/constants/links";
import { returnSublinks } from "@/utils/helpers";
import hamburger from "@/public/hamburger.svg";
import cart from "@/public/cart.svg";
import close from "@/public/close.svg";
import Image from "next/image";
import List from "./List";
import LinkNavBarMobile from "./Navbar/LinkNavBarMobile";
import { setOpenMobile, setIsHover } from "@/app/features/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import LinkNavbarDesktop from "./Navbar/LinkNavbarDesktop";

export interface Link {
  name: string;
  nameToShow: string;
  link: string;
  sublinks: SubLink[];
}

export interface SubLink {
  name: string;
  link: string;
}

const Header: React.FC = () => {
  const { openMobile, isHover } = useAppSelector((state) => state.navbarSlice);
  const dispatch = useAppDispatch();
  
  return (
    <header className="bg-white ">
      {/* menu mobile */}
      <div
        className={`absolute md:hidden transition-all ${
          openMobile ? "block" : "-translate-x-full"
        }  z-30 w-screen h-screen bg-white`}
      >
        <div className="px-2 py-8">
          <Image
            onClick={()=>dispatch(setOpenMobile(false))}
            src={close}
            alt="hamburger"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <div>
            <List
              className="flex flex-col gap-y-4"
              items={links}
              sourceName="link"
              ItemComponent={LinkNavBarMobile}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col relative bg-white z-20">
        <div className="flex justify-start shadow-md gap-x-4 md:gap-x-0 px-2  md:shadow-none md:justify-center py-8 relative border-b border-black/15">
          <Image
            onClick={() => dispatch(setOpenMobile(true))}
            src={hamburger}
            alt="hamburger"
            width={30}
            height={30}
            className="md:hidden cursor-pointer"
          />
          <h1 className="text-4xl hidden md:block title font-black p-4 rounded">
            Hardcore Merch Shop
          </h1>
          <h1 className="text-2xl md:hidden title font-black">HMS</h1>
          <div className="md:text-2xl text-base absolute right-0 inset-y-0 flex items-center w-auto md:min-w-[150px] md:justify-center px-2">
            <Image
              src={cart}
              alt="cart"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* menu desktop */}
        <nav className="shadow-xl border-b-black">
          <List
              items={links}
              sourceName="link"
              ItemComponent={LinkNavbarDesktop}
              className="justify-center hidden  md:flex container max-w-[1000px]"
            />
        </nav>
      </div>
      <MenuList
        sublinks={returnSublinks(isHover.name)}
        isHover={isHover.isHover}
      />
    </header>
  );
};

export default Header;

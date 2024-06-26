"use client";
import Image from "next/image";
import { Button } from "../Button/button";
import { Dropdown } from "../Dropdown/Dropdown";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import useBreakpoint from "@/hooks/useBreakpoint";

export const Header = () => {
  const { isTabletOrMobile } = useBreakpoint();

  return (
    <div className="p-8">
      {!isTabletOrMobile ? <DesktopHeader /> : <MobileHeader />}
    </div>
  );
};

const DesktopHeader = () => {
  return (
    <div className="flex justify-between">
      <Image width={240} height={60} alt="mainlogo" src="/main_logo.png" />
      <nav className="flex gap-8 items-center justify-between">
        <Dropdown
          title={
            <div className="flex items-center gap-1 font-bold">
              <span>Products</span> <span>{<FaAngleDown />}</span>
            </div>
          }
          options={["Product 1", "Product 2"]}
        />
        <a className="font-bold hover:underline" href="#features">
          Features
        </a>
        <div className="font-bold hover:underline">Pricing</div>
        <div className="font-bold hover:underline">About us</div>
      </nav>
      <div className="flex gap-2 items-center">
        <Button buttonType="secondary" text="Login" />
      </div>
    </div>
  );
};
const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between">
      <Image width={200} height={60} alt="mainlogo" src="/main_logo.png" />
      <button className="" onClick={toggleSidebar}>
        <GiHamburgerMenu size={24} />
      </button>
      {isOpen && (
        <div className="inset-0 z-50 flex flex-col bg-white fixed top-0 left-0 w-screen h-screen p-8 gap-8">
          <div className="flex justify-end">
            <button className="" onClick={toggleSidebar}>
              <IoMdClose size={24} />
            </button>
          </div>
          <nav className="flex flex-col px-4 gap-8 justify-between">
            <Dropdown
              title={
                <div className="flex items-center gap-1 font-bold">
                  <span>Products</span> <span>{<FaAngleDown />}</span>
                </div>
              }
              options={["Product 1", "Product 2"]}
            />
            <a className="font-bold hover:underline" href="#features">
              Features
            </a>
            <div className="font-bold hover:underline">Pricing</div>
            <div className="font-bold hover:underline">About us</div>
          </nav>
          <div className="flex items-center my-4">
            <Button buttonType="secondary" text="Login" style="text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

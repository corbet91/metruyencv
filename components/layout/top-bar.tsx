import React from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import MenuTopBar from "../custome-ui/menu/menu-topbar";
import MenuForm from "./menu-form";
const TopBar = () => {
  return (
    <div
      className="flex justify-between items-center border-gray-200 border-solid p-2
     "
    >
      <CiSearch className="w-6 h-6" />
      <Image src={logo} alt="logo" className="w-10 h-10" />
      <MenuTopBar childreen={<MenuForm />}> 
    
      </MenuTopBar>
    </div>
  );
};

export default TopBar;

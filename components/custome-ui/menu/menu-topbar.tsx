import React, { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import OutLineBar from "@/assets/icons/OutlineBar";
import ToggleMode from "../toggle-mode";

interface IMeNuTopBar {
  childreen: ReactNode;
}

const MenuTopBar = ({childreen}: IMeNuTopBar) => {
  return (
    <Sheet>
      <SheetTrigger asChild> 
        <OutLineBar className="w-7 h-7 cursor-pointer"/>
      </SheetTrigger>
      <SheetContent className="bg-light-gray overflow-auto">
           {childreen}
      </SheetContent>
    </Sheet>
  );
};

export default MenuTopBar;

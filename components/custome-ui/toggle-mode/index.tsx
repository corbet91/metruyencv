"use client";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Sun from "@/assets/icons/Sun";
import Auto from "@/assets/icons/Auto";
import Moon from "@/assets/icons/Moon";
import { Button } from "@/components/ui/button";

const ToggleMode = () => {
  const { theme,setTheme } = useTheme();
  
  const handleGetTheme = (theme:string) => {
    switch (theme) {
      case "dark":
       return <Moon className="text-amber"/>
      case "light":
        return   <Sun className="text-amber"/>
      default:
        return <Auto className="text-amber"/>
    }
  }
  return (
    <DropdownMenu  >
      <DropdownMenuTrigger asChild>
        <Button  size="icon">
          {handleGetTheme(theme as string)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-light-gray border-gray-300 border shadow-xl rounded">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex flex-row gap-4 cursor-pointer">
          <Sun /> Ngày
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex flex-row gap-4 cursor-pointer">
          <Moon /> Đêm
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("auto")} className="flex flex-row gap-4 cursor-pointer">
          <Auto /> Tự động
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleMode;

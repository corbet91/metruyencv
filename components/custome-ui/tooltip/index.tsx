import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProps } from "@radix-ui/react-tooltip";

interface ITooltipUi extends TooltipProps {
    childreen : React.ReactNode;
    content : string
}

const TooltipUi : React.FC<ITooltipUi> = ({childreen,content}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{childreen}</TooltipTrigger>
        <TooltipContent className="bg-gray-900 px-4 py-2 w-64 max-w-xs shadow-md  text-white rounded-[5px] p-2 border-none text-base">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipUi;

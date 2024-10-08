import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

interface IAmberButton extends ButtonProps {
  childreen?: ReactNode
}

export const AmberButton: React.FC<IAmberButton> = ({
  childreen,
  className,
  ...props
}) => {
  return (
    <Button
      className={`bg-amber rounded-xl w-1/2 cursor-pointer text-white text-xl py-2 m-auto ${className}`}
      {...props}
    >
      {childreen}
    </Button>
  );
};

export const AmberOutLineButton: React.FC<IAmberButton> = ({ childreen, className, ...props }) => {
  console.log("childreen", childreen)
  return (
    <Button
      className={`rounded border border-amber text-amber px-2 py-1 text-xs h-6 ${className}`}
      {...props}
    >
      {childreen}
    </Button>
  );
};



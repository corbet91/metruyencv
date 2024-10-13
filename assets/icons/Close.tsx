import * as React from "react";
import { SVGProps } from "react";

const Close = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={`w-6 h-6 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
    data-slot="icon"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);
export default Close;

import * as React from "react";
import { SVGProps } from "react";

const AmberSuccess = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        className={`h-6 w-5 flex-none text-primary ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
            clipRule="evenodd"
        />
    </svg>
);
export default AmberSuccess;

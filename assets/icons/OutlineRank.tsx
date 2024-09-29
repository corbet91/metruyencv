import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const OutlineRank: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 17v-4l-5 3l-5 -3v4l5 3z"></path>
    <path d="M17 8v-4l-5 3l-5 -3v4l5 3z"></path>
  </svg>
);

export default OutlineRank;
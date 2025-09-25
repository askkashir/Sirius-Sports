import { cn } from "@/lib/utils";
import React from "react";

export const SiriusLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className={cn("h-6 w-6", className)}
  >
    <defs>
      <style>{`.cls-1{fill:currentColor;}.cls-2{fill:#ef4444;}`}</style>
    </defs>
    <g>
      <path
        className="cls-1"
        d="M128,24A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"
      />
      <path
        className="cls-2"
        d="M141.1,101.4l13-13L128,62.3l-26.1,26.1,13,13L128,88.3Zm-26.2,53.2-13,13,26.1,26.1,26.1-26.1-13-13L128,167.7Z"
      />
      <path
        className="cls-1"
        d="M150.8,111.3l-19.9,19.9a12.2,12.2,0,0,1-17.2,0l-26-26-17,17,26,26a38.11,38.11,0,0,0,53.8,0l19.9-19.9Z"
      />
      <path
        className="cls-1"
        d="M149.9,94.7,130,114.6a12.16,12.16,0,0,1-17.2,0l-26-26-17,17,26,26a38.11,38.11,0,0,0,53.8,0L167,111.6Z"
      />
    </g>
  </svg>
);

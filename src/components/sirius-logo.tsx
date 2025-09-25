import { cn } from "@/lib/utils";
import React from "react";

export const SiriusLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className={cn("h-6 w-6", className)}
    style={{ fill: "currentColor" }}
  >
    <g>
      <path
        d="M128 36a92 92 0 1 0 0 184 92 92 0 0 0 0-184Zm0 168a76 76 0 1 1 0-152 76 76 0 0 1 0 152Z"
        className="text-foreground"
      />
      
      <path
        d="M112 121 82 91l-46 46 30 30-30 30 46 46 30-30 30 30 46-46-30-30 30-30-46-46-30 30Z"
        style={{ fill: "#ef4444" }}
      />

      <path
        d="M157.4 69.5 128 112h32l-29.4 46.5L160 186h-32l32 40.5 54-54-32.5-49.5 32.5-49.5-54-54Z"
        className="text-foreground"
      />
    </g>
  </svg>
);
'use client';

import { cn } from "@/lib/utils";

export function SiriusLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <g>
        {/* Outer Circle */}
        <circle
          cx="50"
          cy="50"
          r="34"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
        />

        {/* Red Arrows */}
        <path d="M10 50 L40 50 L40 40 L55 50 L40 60 L40 50" fill="#FF0000" />
        <path d="M90 50 L60 50 L60 60 L45 50 L60 40 L60 50" fill="#FF0000" />

        {/* Central 'S' shape */}
        <path
          d="M50 5 L40 45 L60 45 L50 95 L60 55 L40 55 L50 5"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

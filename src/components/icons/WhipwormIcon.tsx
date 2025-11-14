import type { SVGProps } from "react";

export function WhipwormIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 18c4-4 8-4 12-1s4 .5 4 .5" />
      <path d="M20 17.5c-4.4-1.5-8.8-1.5-13.2 0" strokeWidth="1.5" />
    </svg>
  );
}

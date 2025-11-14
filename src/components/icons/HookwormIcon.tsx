import type { SVGProps } from "react";

export function HookwormIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 15c-3.3 0-5.5-2.2-5.5-5.5S15.7 4 19 4" />
      <path d="M13.5 9.5s-1.5-2-3-2-3 2-3 2" />
      <path d="M5 13.5s1 2 2.5 2 2.5-2 2.5-2" />
    </svg>
  );
}

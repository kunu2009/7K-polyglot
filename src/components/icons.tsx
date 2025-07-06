import type { SVGProps } from "react";

export function DiyaLampIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M12 2a9.5 9.5 0 0 0-9.5 9.5c0 3.63 2.06 6.74 5 8.32" />
            <path d="M7.5 20c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2" />
            <path d="M15.5 12a.5.5 0 0 0-1 0a4 4 0 0 1-8 0 .5.5 0 0 0-1 0c0 2.23 1.25 4.19 3 5.18" />
            <path d="M12.5 8a.5.5 0 0 0-1 0 1 1 0 0 1-2 0 .5.5 0 0 0-1 0c0 .9.4 1.7.9 2.2" />
        </svg>
    )
}

export function OmIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M8.5 4.5C12.09 4.5 15 7.41 15 11c0 2.76-1.68 5.1-4 6.25" />
            <path d="M15.5 4.5a5.5 5.5 0 0 1 0 11" />
            <path d="M4 11h1" />
            <path d="M18 11h2" />
            <path d="M6.25 15.25C4.9 14.1 4 12.64 4 11" />
            <path d="m5 4 1 2" />
        </svg>
    )
}

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm36-92a36 36 0 0 1-33.68 35.84a8 8 0 0 1-1.63-15.91A20 20 0 1 0 112 108a8 8 0 0 1-16 0a36 36 0 0 1 72 0Z"/>
    </svg>
  );
}

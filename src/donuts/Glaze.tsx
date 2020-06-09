import React from "react";
import { yellow, brown, pink } from "@material-ui/core/colors";

export const glazeColors: { [color: string]: string } = {
  chocolate: brown[500],
  strawberry: pink[600],
  vanilla: yellow[100],
  none: "",
};
function Glaze({ glazeColor }: { glazeColor?: string }) {
  if (glazeColor === "none") return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 188 188"
      data-testid="glaze"
      color={glazeColor}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill={(glazeColor && glazeColors[glazeColor]) || "grey"}
          d="M179.141 106.569c-2.166-1.713-8.103-.225-12.893 6.446-18.998 26.464-43.439 44.378-80.558 53.376-14.379 3.486-18.91 2.247-19.969 1.777.301-2.431 5.291-10.16 20.248-21.54 3.298-2.509 8.192-6.161 13.86-10.786 10.101-8.238 12.909-13.033 18.922-18.077 8.531-7.153 12.892-8.821 26.802-22.392 12.15-11.854 19.902-19.666 24.805-28.893 3.935-7.408 4.062-13.049.377-16.768-6.11-6.162-20.951-3.179-44.114 8.865-7.095 3.689-9.359 4.942-15.541 8.796-3.191 3.12.396 6.133 7.504 4.503 13.048-4.956 36.286-20.922 46.647-17.215-.036.633 1.697 1.356-1.358 6.446-5.847 9.746-16.623 21.034-31.55 36.641-3.282 3.429-13.228 15.831-16.965 18.998-11.47 9.725-25.377 16.198-36.641 24.768-13.211 10.051-26.049 20.031-21.374 29.856 2.21 4.645 9.659 5.019 15.842 5.019 5.735 0 12.234-1.309 17.746-2.644 39.589-9.598 70.263-35.254 88.468-58.28 1.713-2.166 1.908-7.183-.258-8.896zm-118.227-4.893c-11.404 7.506-19.521 11.091-32.127 14.873-9.929 2.979-13.145 1.988-13.757 1.719-.262-1.607 1.673-8.36 13.828-21.588 13.32-14.496 39.161-36.429 77.001-62.376 3.727-2.557 15.172-8.909 11.787-17.211-3.366-8.253-18.216-3.81-29.769-1.788-24.79 4.338-51.402 17.771-64.8 27.82-4.071 3.053-5.791 5.606-4.107 7.795 1.685 2.188 6.799 4.809 10.214 1.704C40.379 42.447 68.172 25.205 89.971 21.39c10.285-1.8 15.691-1.138 17.801-.453.123 1.832-2.584 5.354-7.342 8.617C61.426 56.3 35.52 74.651 21.495 89.913 7.26 105.404 3.832 115.961 8.149 122.854c4.733 7.557 15 5.827 23.512 3.273 18.982-5.695 26.152-11.621 33.113-18.663 2.478-4.497.765-7.733-3.86-5.788z"
        ></path>
        <path
          fill="#FFFFFE"
          d="M21.489 89.52c6.809-7.93 24.013-22.286 40.92-34.581 16.905-12.295 23.437-15.753 11.142-5.764-12.295 9.99-44.57 37.462-54.943 50.333-10.375 12.871-11.143 6.34 2.881-9.988"
        ></path>
        <path
          fill="#FFFFFE"
          d="M24.563 116.606c5.955-1.536 12.486-3.073 21.515-7.492 9.03-4.418 6.917-.192-1.537 4.802-2.707 1.6-8.796 4.223-13.255 4.996-9.458 1.637-15.186-.123-6.723-2.306"
        ></path>
        <path
          fill="#FFFFFE"
          d="M128.109 56.859c5.377-3.402 15.177-8.26 22.476-9.605 7.3-1.345 5.764.768-6.723 5.379-12.488 4.611-25.166 10.182-15.753 4.226"
        ></path>
        <path
          fill="#FFFFFE"
          d="M159.614 66.081c-1.969 2.46-9.029 11.335-14.024 16.906-4.995 5.572-1.922 4.995 6.724-2.497 8.645-7.493 14.985-24.014 7.3-14.409"
        ></path>
        <path
          fill="#FFFFFE"
          d="M128.684 147.729c10.565-6.34 21.707-14.793 31.697-26.318 4.994-5.764 7.637-11.551 11.143-14.601 3.506-3.05 6.069-2.933 2.881 3.266-3.457 6.723-16.137 19.979-26.319 26.895-13.892 9.436-30.16 17.212-19.402 10.758"
        ></path>
        <path
          fill="#FFFFFE"
          d="M63.559 152.915c6.09-6.586 15.369-13.639 24.014-18.633 8.644-4.996 1.345.191-10.182 10.373-11.527 10.181-23.246 18.442-13.832 8.26"
        ></path>
        <path
          fill="#FFFFFE"
          d="M36.27 33.208c9.236-5.683 31.277-14.824 45.449-17.919 14.172-3.094-9.773 5.213-19.711 9.612-9.936 4.398-40.561 17.429-25.738 8.307"
        ></path>
      </g>
    </svg>
  );
}

export default Glaze;

import { blue, brown, orange, pink } from "@material-ui/core/colors";
import React from "react";

export const frostingColors: { [color: string]: string[] } = {
  blue: [blue[500], blue[200]],
  pink: [pink[500], pink[200]],
  orange: [orange[500], orange[200]],
  brown: [brown[500], brown[200]],
};

function Frosting({ color }: { color?: string }) {
  // dont edit this component

  const [color1, color2] =
    !!color && frostingColors[color]
      ? frostingColors[color]
      : ["gray", "lightgray"];
  return (
    <svg viewBox="0 0 188 188" data-testid="frosting" color={color}>
      <defs>
        <radialGradient
          id={`radialGradient-${color}`}
          cx="50%"
          cy="50%"
          r="53.368%"
          fx="50%"
          fy="50%"
          gradientTransform="scale(-.9936 -1) rotate(89.102 .506 -.51)"
        >
          <stop offset="0%" stopColor={color1}></stop>
          <stop offset="77.106%" stopColor={color2}></stop>
          <stop offset="100%" stopColor={color1}></stop>
        </radialGradient>
        <path
          id="path-2"
          d="M119.267 114.181c-4.902 5.21-8.579-.613-19.611 9.194-3.256 2.893-15.629.919-18.386-3.677-2.758-4.598-7.969-9.5-12.872-11.646-4.904-2.145-4.597-11.339-2.144-16.854 2.451-5.517.611-11.646 6.129-15.629 5.515-3.984 10.111-5.822 14.709-10.42 4.596-4.596 11.951-2.758 16.853.307 4.905 3.065 3.985 5.21 11.953 7.355 7.967 2.145 9.805 7.355 9.194 14.096-.613 6.742-.307 8.581 2.451 13.178 2.758 4.596-3.373 8.886-8.276 14.096zm64.967-29.419c-2.451-4.902-4.902-12.564-4.289-18.693.612-6.129 0-11.339-7.049-15.936-7.046-4.596-6.129-11.337-9.806-16.854-3.678-5.517-8.164-4.665-12.258-11.032-5.516-8.58-9.5-2.758-14.402-8.887-2.166-2.707-7.969-5.21-12.872-3.985-4.902 1.227-9.193-2.451-13.484-4.902-4.291-2.452-5.822-.92-15.016 1.226-9.193 2.145-11.644-3.065-19.306-1.839-7.66 1.226-9.498 7.968-16.547 8.273-7.049.307-11.645 3.065-15.935 7.356-4.292 4.291-7.663 6.435-13.485 10.419-5.822 3.983-8.273 12.259-12.258 16.241-3.982 3.984 0 5.211-5.822 12.564-5.822 7.356-7.049 15.936-6.129 19.307.92 3.371 2.451 3.065-.613 9.193-3.065 6.129-2.451 6.436.307 16.549 2.757 10.113-.614 9.194 1.533 16.548 2.144 7.355 5.209 4.903 6.129 11.339.918 6.436 2.144 11.031 8.886 15.322 6.74 4.289 7.354 5.823 9.5 10.726 2.145 4.903 5.209 6.741 9.5 7.661 4.289.92 8.58 2.758 11.952 8.273 3.371 5.517 11.644 7.049 16.242 6.743 4.595-.307 7.967.92 13.176 3.371 5.208 2.451 7.968 2.144 13.791-.614 5.822-2.757 9.193.307 13.788.614 4.598.306 12.872-.92 17.163-4.29 4.289-3.37 7.049-3.066 11.951-4.904 4.904-1.838 8.886-4.596 11.951-8.273 3.064-3.678 6.742-8.581 10.726-10.727 3.983-2.145 7.967-5.515 9.5-10.725 1.532-5.21 0-6.129 6.436-12.87 6.436-6.743 6.436-15.629 6.74-19.307.307-3.678-1.531-8.58.614-13.791 2.146-5.209 1.84-9.193-.614-14.096z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <mask fill="#fff">
          <use xlinkHref="#path-2"></use>
        </mask>
        <use fill={`url(#radialGradient-${color})`} xlinkHref="#path-2"></use>
      </g>
    </svg>
  );
}

export default Frosting;

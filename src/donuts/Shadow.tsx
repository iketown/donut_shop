import React from "react";

function Shadow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 198 198"
    >
      <defs>
        <path
          id="path-1"
          d="M99 125.074c-14.4 0-26.075-11.673-26.075-26.075C72.925 84.6 84.6 72.926 99 72.926c14.4 0 26.075 11.673 26.075 26.073 0 14.402-11.674 26.075-26.075 26.075zM98.998 5C47.086 5 5 47.085 5 99s42.086 94 93.998 94C150.914 193 193 150.915 193 99S150.914 5 98.998 5z"
        ></path>
        <filter
          id="filter-2"
          width="108%"
          height="108%"
          x="-4%"
          y="-4%"
          filterUnits="objectBoundingBox"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2.5"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        fill="none"
        fillOpacity="1"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <use fill="#000" filter="url(#filter-2)" xlinkHref="#path-1"></use>
      </g>
    </svg>
  );
}

export default Shadow;

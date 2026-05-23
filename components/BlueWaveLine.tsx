import React from "react";

const BlueWaveLine = () => {
  return (
    <svg
      viewBox="0 0 1440 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-auto w-full"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_blue_wave)">
        <path
          d="M0 0H720H1440L1264 17L1085 8.90476L906 17L720 8.90476L534 17L359.5 8.90476L180.5 17L0 0Z"
          fill="#003660"
        />
      </g>

      <defs>
        <clipPath id="clip0_blue_wave">
          <path
            d="M0 17C0 7.61116 7.61116 0 17 0H1423C1432.39 0 1440 7.61116 1440 17H0Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BlueWaveLine;
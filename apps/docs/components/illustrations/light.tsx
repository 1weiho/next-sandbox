import type { SVGProps } from 'react';

const Light = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={900}
    height={773}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.2} filter="url(#a)">
      <ellipse
        cx={449.981}
        cy={386.397}
        rx={311}
        ry={220}
        transform="rotate(-22.82 449.981 386.397)"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={227.413}
        y1={166.397}
        x2={484.225}
        y2={691.252}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D9BF0" />
        <stop offset={1} stopColor="#EEF7FD" />
      </linearGradient>
      <filter
        id="a"
        x={0.816}
        y={0.419}
        width={898.33}
        height={771.955}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={75}
          result="effect1_foregroundBlur_70_8"
        />
      </filter>
    </defs>
  </svg>
);

export default Light;

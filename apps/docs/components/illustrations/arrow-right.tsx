import type { SVGProps } from 'react';

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={111}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="currentColor"
      strokeWidth={1.613}
      strokeLinecap="round"
    >
      <path d="M4.394 4.553c7.272 7.09 26.397 36.054 43.495 42.289 17.097 6.232 49.274-3.977 59.079-4.88M4.035 4.032c7.163 7.188 26.22 37.083 43.358 43.262 17.141 6.179 49.569-5.256 59.483-6.191" />
      <path d="M98.305 46.414c2.823-2.347 5.687-3.206 8.571-5.311Zm0 0c2.69-1.988 5.505-3.267 8.571-5.311ZM96.897 39.663c3.263.068 6.635 1.637 9.979 1.44Zm0 0c3.178.274 6.466 1.242 9.979 1.44Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h111v53.15H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowRight;

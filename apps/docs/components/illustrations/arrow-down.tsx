import type { SVGProps } from 'react';

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={90}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="currentColor"
      strokeWidth={1.903}
      strokeLinecap="round"
    >
      <path d="M7.381 4.759c2.246 7.412 13.66 31.456 13.25 44.867-.41 13.416-12.936 29.848-15.714 35.614M6.806 5.862c2.17 7.25 13.74 29.906 13.397 42.993C19.86 61.938 7.49 78.442 4.755 84.38" />
      <path d="M6.782 72.662c-1.037 3.615-.457 7.73-2.027 11.717Zm0 0c-1.137 4.277-2.046 9.158-2.027 11.717ZM13.842 76.7c-3.178 2.427-4.729 5.32-9.087 7.68Zm0 0c-3.806 2.665-7.426 5.99-9.087 7.68Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h25.399v90H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowDown;

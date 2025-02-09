import * as React from 'react';

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-play"
    {...props}
  >
    <path d="m6 3 14 9-14 9V3z" />
  </svg>
);

export default PlayIcon;

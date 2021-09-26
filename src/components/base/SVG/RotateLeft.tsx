import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const RotateLeft = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      aria-hidden="true"
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 32 32"
      {...props}>
      <Path
        d="M17.91 26.82l.35 2a12.9 12.9 0 004.24-1.54l-1-1.73a10.88 10.88 0 01-3.59 1.27zM24.42 23.07L26 24.35a13 13 0 002.24-3.91l-1.87-.68a11 11 0 01-1.95 3.31zM9.5 27.25a12.9 12.9 0 004.24 1.54l.35-2a10.88 10.88 0 01-3.59-1.3zM5.67 19.76l-1.87.68A13 13 0 006 24.35l.32-.26 1.22-1a11 11 0 01-1.91-3.31zM29 16a12.85 12.85 0 00-.8-4.44l-1.87.68A11.18 11.18 0 0127 16zM26 7.65a13 13 0 00-20 0V4H4v8h8v-2H6.81a11 11 0 0117.61-1.07z"
        fill={fill || '#000'}
      />
    </Svg>
  );
};

export default RotateLeft;

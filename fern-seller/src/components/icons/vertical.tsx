import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type LineProps = Props;

const Line: React.FC<LineProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 2 27"
      {...props}>
      <path
        data-name="Line 192"
        fill="none"
        stroke={props.color ?? IconConfig.defaultColor}
        strokeWidth={1}
        d="M1 0v27"
      />
    </svg>
  );
};

export default Line;

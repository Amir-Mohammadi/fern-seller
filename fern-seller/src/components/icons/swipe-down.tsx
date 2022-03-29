import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type SwipeDownProps = Props;

const SwipeDown: React.FC<SwipeDownProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 12.727 7.07"
      {...props}>
      <path
        id="Path_1949"
        data-name="Path 1949"
        d="M-3634.154-5639.727l6.01,6.01,6.01-6.01"
        transform="translate(3634.507 5640.081)"
        fill="none"
        stroke={props.color ?? IconConfig.defaultColor}
        strokeWidth="1"
      />
    </svg>
  );
};

export default SwipeDown;

import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

type ArrowDownProps = Props;

const ArrowDown: React.FC<ArrowDownProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 12 7">
      <path
        id="Polygon_5"
        data-name="Polygon 5"
        d="M6,0l6,7H0Z"
        transform="translate(12 7) rotate(180)"
        fill={props.color || IconConfig.defaultColor}
      />
    </svg>
  );
};

export default ArrowDown;

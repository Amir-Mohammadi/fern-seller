import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type ShiftProps = Props;

const Shift: React.FC<ShiftProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 6 11"
      {...props}>
      <path data-name="Polygon 6" d="M0 5.5L6 0v11z" fill={props.color ?? IconConfig.defaultColor} />
    </svg>
  );
};

export default Shift;

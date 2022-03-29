import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type WrongProps = Props;

const Wrong: React.FC<WrongProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 14.435 14.439"
      {...props}>
      <path
        data-name="Path 1966"
        d="M11.682 14.102l-.193-.167-4.276-4.283-4.278 4.276a1.719 1.719 0 01-2.6-2.239l.167-.193 4.274-4.274L.495 2.941a1.719 1.719 0 012.236-2.6l.193.167 4.285 4.281L11.485.511a1.719 1.719 0 012.6 2.239l-.167.195-4.281 4.274 4.281 4.28a1.719 1.719 0 01-2.239 2.6z"
        fill={props.color ?? IconConfig.defaultColor}
      />
    </svg>
  );
};

export default Wrong;

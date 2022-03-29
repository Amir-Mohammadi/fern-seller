import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type MassageProps = Props;

const Massage: React.FC<MassageProps> = (props) => {
  return (
    <svg
      data-name="Group 880"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 19.713 15.016"
      {...props}>
      <g data-name="Group 678">
        <path
          data-name="Path 1697"
          d="M17.98 0H1.733A1.736 1.736 0 000 1.733v11.55a1.735 1.735 0 001.733 1.733H17.98a1.735 1.735 0 001.733-1.733V1.733A1.735 1.735 0 0017.98 0zm-.239 1.155L9.893 9 1.977 1.155zM1.155 13.044V1.966l5.563 5.515zm.817.817l5.566-5.566 1.95 1.934a.577.577 0 00.815 0l1.9-1.9 5.536 5.536zm16.586-.817l-5.536-5.536 5.536-5.536z"
          fill={props.color ?? IconConfig.defaultColor}
        />
      </g>
    </svg>
  );
};

export default Massage;

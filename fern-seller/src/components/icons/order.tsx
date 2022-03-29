import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type OrderProps = Props;

const Order: React.FC<OrderProps> = (props) => {
  return (
    <svg
      data-name="Group 882"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 17.047 21.995"
      {...props}>
      <path
        data-name="Path 1708"
        d="M15.672 2.2h-3.3V.825A.825.825 0 0011.548 0H5.5a.825.825 0 00-.825.825V2.2h-3.3A1.376 1.376 0 000 3.574v17.047A1.376 1.376 0 001.375 22h14.3a1.376 1.376 0 001.375-1.375V3.574A1.376 1.376 0 0015.672 2.2zm-9.348-.55h4.4v2.2h-4.4zM15.4 20.346H1.65V3.849h3.024v.825A.825.825 0 005.5 5.5h6.049a.825.825 0 00.825-.825v-.826H15.4z"
        fill={props.color ?? IconConfig.defaultColor}
      />
      <path
        data-name="Path 1709"
        d="M4.564 7.973a.825.825 0 000 1.65h7.918a.825.825 0 000-1.65z"
        fill={props.color ?? IconConfig.defaultColor}
      />
      <path
        data-name="Path 1710"
        d="M6.983 16.222H4.564a.825.825 0 000 1.65h2.419a.825.825 0 100-1.65z"
        fill={props.color ?? IconConfig.defaultColor}
      />
      <path
        data-name="Path 1711"
        d="M12.482 12.097H4.564a.825.825 0 000 1.65h7.918a.825.825 0 000-1.65z"
        fill={props.color ?? IconConfig.defaultColor}
      />
    </svg>
  );
};

export default Order;

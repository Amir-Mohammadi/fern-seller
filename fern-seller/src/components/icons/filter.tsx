import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type FilterProps = Props;

const Filter: React.FC<FilterProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 16.15 16.15"
      {...props}>
      <g data-name="Iconly Light Filter 2">
        <g data-name="Filter 2-4">
          <path
            data-name="Path 99"
            d="M6.057 16.146a.621.621 0 01-.621-.621V9.699L.456 4.21A1.773 1.773 0 010 3.018V1.749A1.735 1.735 0 011.708-.003h12.725a1.741 1.741 0 011.717 1.757v1.235a1.758 1.758 0 01-.511 1.246l-5.4 5.482v4.134a.622.622 0 01-.357.562l-3.561 1.675a.616.616 0 01-.264.058zm8.365-14.907H1.717a.484.484 0 00-.336.15.492.492 0 00-.138.35v1.28a.53.53 0 00.137.358l5.139 5.666a.622.622 0 01.161.417v5.087l2.319-1.092v-4a.617.617 0 01.179-.436l5.579-5.664a.526.526 0 00.152-.372V1.746a.5.5 0 00-.486-.5z"
            fill={props.color ?? IconConfig.defaultColor}
          />
        </g>
      </g>
    </svg>
  );
};

export default Filter;

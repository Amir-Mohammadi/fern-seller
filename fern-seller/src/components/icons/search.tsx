import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type SearchProps = Props;

const Search: React.FC<SearchProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 20 20"
      {...props}>
      <path
        d="M18.82 19.859l-.083-.07-3.128-3.05a9.7 9.7 0 01-6 2.06 9.4 9.4 0 119.614-9.4 9.251 9.251 0 01-2.531 6.349l3.091 3.014a.713.713 0 01.016 1.008l-.016.016a.753.753 0 01-.964.071zM1.48 9.396a8.134 8.134 0 108.131-7.952A8.052 8.052 0 001.48 9.396z"
        fill={props.color ?? IconConfig.defaultColor}
        data-name="Iconly Light-outline Search"
      />
    </svg>
  );
};

export default Search;

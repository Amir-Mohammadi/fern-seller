import React from 'react';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: string;
  size?: string;
}

type DownSwipeProps = Props;

const DownSwipe: React.FC<DownSwipeProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.2 14.2"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      {...props}>
      <path d="M13.9 3.5l-6.8 6.8L.4 3.5" fill="none" stroke="#707070" />
    </svg>
  );
};

export default DownSwipe;

import React from 'react';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: string;
  size?: string;
}
type LeftSwipeProps = Props;
const LeftSwipe: React.FC<LeftSwipeProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.2 14.2"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      {...props}>
      <path d="M10.7 13.9L3.9 7.1l2.3-2.3L10.7.3" fill="none" stroke={props.color ? props.color : '#707070'} />
    </svg>
  );
};

export default LeftSwipe;

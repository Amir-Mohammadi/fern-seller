import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type ChangePassProps = Props;

const ChangePass: React.FC<ChangePassProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 16.15 16.173"
      {...props}>
      <g id="Group_885" data-name="Group 885" transform="translate(-278.999 -1220.904)">
        <path
          id="Message-6"
          d="M283.405,1237.077a4.051,4.051,0,0,1-3.162-1.521,5.866,5.866,0,0,1-1.243-3.743v-5.644a5.866,5.866,0,0,1,1.243-3.743,4.053,4.053,0,0,1,3.162-1.521h7.323a4.778,4.778,0,0,1,4.42,5.065c0,.067,0,.133-.006.2v5.6a5.4,5.4,0,0,1-1.192,3.711,4.3,4.3,0,0,1-3.23,1.593Zm-3.181-10.909v5.644a3.508,3.508,0,0,0,2.971,3.881c.069.006.139.01.208.011h7.309a3.11,3.11,0,0,0,2.336-1.156,3.935,3.935,0,0,0,.865-2.735v-5.685a3.923,3.923,0,0,0-.866-2.7,3.109,3.109,0,0,0-2.337-1.156h-7.307a3.449,3.449,0,0,0-3.19,3.659C280.216,1226.013,280.219,1226.09,280.225,1226.168Z"
          fill={props.color ?? IconConfig.defaultColor}
        />
        <path
          id="Path_1957"
          data-name="Path 1957"
          d="M283.5,1229.065v-1.11h.7v1.11l.96-.56.35.61-.96.55.96.55-.35.61-.96-.55v1.1h-.7v-1.1l-.96.55-.35-.61.95-.55-.95-.55.35-.61Z"
          transform="translate(-0.614 -0.518)"
          fill={props.color ?? IconConfig.defaultColor}
        />
        <path
          id="Path_1958"
          data-name="Path 1958"
          d="M288.6,1229.065v-1.11h.7v1.11l.96-.56.35.61-.96.55.96.55-.35.61-.96-.55v1.1h-.7v-1.1l-.96.55-.35-.61.95-.55-.95-.55.35-.61Z"
          transform="translate(-1.596 -0.518)"
          fill={props.color ?? IconConfig.defaultColor}
        />
        <path
          id="Path_1959"
          data-name="Path 1959"
          d="M293.7,1229.065v-1.11h.7v1.11l.96-.56.35.61-.96.55.96.55-.35.61-.96-.55v1.1h-.7v-1.1l-.96.55-.35-.61.95-.55-.95-.55.35-.61Z"
          transform="translate(-2.579 -0.518)"
          fill={props.color ?? IconConfig.defaultColor}
        />
      </g>
    </svg>
  );
};

export default ChangePass;

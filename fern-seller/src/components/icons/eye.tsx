import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type EyeProps = Props;

const Eye: React.FC<EyeProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 17.997 14.4"
      {...props}>
      <path
        d="M8.741 14.396c-3.514-.117-6.713-2.6-8.561-6.64l-.125-.291a.67.67 0 010-.53 12.847 12.847 0 013.774-5.081A8.4 8.4 0 019-.004h.257c3.51.118 6.713 2.6 8.558 6.643l.125.282a.672.672 0 010 .54 12.845 12.845 0 01-3.775 5.082A8.406 8.406 0 019 14.396zM4.8 2.806a11.087 11.087 0 00-3.24 4.093l-.145.3.152.325a11.248 11.248 0 003.041 3.925 7.183 7.183 0 003.926 1.593l.239.013h.461a7.145 7.145 0 004.171-1.615 11.393 11.393 0 003.173-4.218l.01-.021a11.511 11.511 0 00-3.086-4.159 7.222 7.222 0 00-4.041-1.683l-.239-.013h-.215A7.045 7.045 0 004.8 2.806zM5.482 7.2a3.52 3.52 0 113.542 3.5H9a3.51 3.51 0 01-3.52-3.504zm1.35 0a2.171 2.171 0 102.182-2.16H9a2.166 2.166 0 00-2.17 2.156z"
        fill={props.color ?? IconConfig.defaultColor}
        data-name="Iconly Light-outline Show"
      />
    </svg>
  );
};

export default Eye;

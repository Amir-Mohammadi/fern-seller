import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type ProfileProps = Props;

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <svg
      id="Group_890"
      data-name="Group 890"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 16.392 18.734">
      <g id="Group_714" data-name="Group 714" transform="translate(3.513 0)">
        <g id="Group_713" data-name="Group 713" transform="translate(0)">
          <path
            id="Path_1715"
            data-name="Path 1715"
            d="M260.683,170.667a4.683,4.683,0,1,0,4.683,4.683A4.688,4.688,0,0,0,260.683,170.667Zm0,7.025a2.342,2.342,0,1,1,2.342-2.342A2.344,2.344,0,0,1,260.683,177.692Z"
            transform="translate(-256 -170.667)"
            fill={props.color ?? IconConfig.defaultColor}
          />
        </g>
      </g>
      <g id="Group_716" data-name="Group 716" transform="translate(0 10.538)">
        <g id="Group_715" data-name="Group 715" transform="translate(0 0)">
          <path
            id="Path_1716"
            data-name="Path 1716"
            d="M201.367,362.667h-2.342A7.032,7.032,0,0,0,192,369.692a1.171,1.171,0,1,0,2.342,0,4.688,4.688,0,0,1,4.683-4.683h2.342a4.688,4.688,0,0,1,4.683,4.683,1.171,1.171,0,0,0,2.342,0A7.032,7.032,0,0,0,201.367,362.667Z"
            transform="translate(-192 -362.667)"
            fill={props.color ?? IconConfig.defaultColor}
          />
        </g>
      </g>
    </svg>
  );
};

export default Profile;

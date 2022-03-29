import React from 'react';
import { Color } from '../../constants/color';
import { IconConfig } from '../../constants/config';

interface Props {
  color?: Color | string;
  size?: string;
}

export type CommentProps = Props;

const Comment: React.FC<CommentProps> = (props) => {
  return (
    <svg
      data-name="Iconly Light-outline Chat"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? IconConfig.defaultSize}
      height={props.size ?? IconConfig.defaultSize}
      viewBox="0 0 21.902 21.918"
      {...props}>
      <path
        d="M5.835 20.656l-.05-.017a.018.018 0 01-.011-.013l-.747-.424a.84.84 0 00-.3-.059.448.448 0 00-.123.013 19.487 19.487 0 01-2.379.687l-.148.018h-.045a1.224 1.224 0 01-.968-.389 1.506 1.506 0 01-.329-1.008l.022-.18a20.29 20.29 0 01.742-2.411.582.582 0 00-.047-.438l-.2-.392A10.965 10.965 0 0110.992.001h.043A10.959 10.959 0 115.84 20.657zm-.187-1.85c.1.048.229.117.406.219l.463.266h.007l.314.16a9.46 9.46 0 0010.111-1.205l.241-.2a9.432 9.432 0 00-6.17-16.509h-.314a9.425 9.425 0 00-8.1 13.8l.2.387a2.13 2.13 0 01.138 1.644 19.463 19.463 0 00-.7 2.279l.1-.4.438-.11c.312-.087.606-.175.9-.272l.458-.158a2.249 2.249 0 01.593-.08 2.383 2.383 0 01.91.188zm8.987-7.847a1.251 1.251 0 111.25 1.25 1.251 1.251 0 01-1.248-1.25zm-4.861 0a1.25 1.25 0 111.251 1.25 1.25 1.25 0 01-1.251-1.249zm-4.863 0a1.251 1.251 0 111.251 1.25 1.251 1.251 0 01-1.256-1.249z"
        fill={props.color ?? IconConfig.defaultColor}
      />
    </svg>
  );
};

export default Comment;

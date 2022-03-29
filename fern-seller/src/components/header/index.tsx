import React from 'react';
import { NAV_ITEMS } from '../../utils/mukc';
import MenuBar from '../menu-bar';
import styles from './header.module.scss';

export type MenuBarProps = {
  username: string;
  onClickLogout: () => void;
};

const Header: React.FC<MenuBarProps> = (props) => {
  return (
    <header className={styles.container}>
      <div className={styles.headerBX}>
        <div className={styles.rightSide}> مرکز فروشندگان السل</div>
        <div className={styles.leftSide}>{Logo}</div>
      </div>
      <MenuBar username={props.username} onClickLogout={props.onClickLogout} navigationItems={NAV_ITEMS} />
    </header>
  );
};

export default Header;

const Logo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 207.927 68.863">
    <g id="Group_878" data-name="Group 878" transform="translate(-297.652 276.07)">
      <path
        id="Path_1933"
        data-name="Path 1933"
        d="M385.45-206.166a7.645,7.645,0,0,1-6.088-2.467,7.82,7.82,0,0,1-1.889-5.354v-27h6.823v26.585a2.157,2.157,0,0,0,2.414,2.467h2.624v5.773Z"
        transform="translate(-48.642 -21.377)"
        fill="#db0060"
      />
      <path
        id="Path_1934"
        data-name="Path 1934"
        d="M304.552-225.175q0,6.089,5.983,6.088a8.441,8.441,0,0,0,6.193-2.571l4.146,4.041a14.869,14.869,0,0,1-4.409,3.2,14.617,14.617,0,0,1-5.983,1.1,16.431,16.431,0,0,1-4.724-.63,11.01,11.01,0,0,1-4.041-2.2,10.994,10.994,0,0,1-2.834-4.3,20.125,20.125,0,0,1-1.05-6.876q0-6.56,3.307-10.34a10.911,10.911,0,0,1,8.607-3.621,11.11,11.11,0,0,1,8.818,3.726,13.748,13.748,0,0,1,3.1,9.342v3.044Zm10.392-4.672a7.881,7.881,0,0,0-.63-2.939,4.575,4.575,0,0,0-4.567-2.834,4.575,4.575,0,0,0-4.566,2.834,7.851,7.851,0,0,0-.63,2.939Z"
        transform="translate(-0.111 -21.196)"
        fill="#db0060"
      />
      <path
        id="Path_1935"
        data-name="Path 1935"
        d="M420.292-225.175q0,6.089,5.984,6.088a8.442,8.442,0,0,0,6.193-2.571l4.146,4.041a14.874,14.874,0,0,1-4.409,3.2,14.618,14.618,0,0,1-5.984,1.1,16.426,16.426,0,0,1-4.724-.63,11.011,11.011,0,0,1-4.042-2.2,11,11,0,0,1-2.834-4.3,20.134,20.134,0,0,1-1.05-6.876q0-6.56,3.306-10.34a10.912,10.912,0,0,1,8.608-3.621,11.11,11.11,0,0,1,8.817,3.726,13.748,13.748,0,0,1,3.1,9.342v3.044Zm10.392-4.672a7.88,7.88,0,0,0-.63-2.939,4.575,4.575,0,0,0-4.566-2.834,4.575,4.575,0,0,0-4.566,2.834,7.843,7.843,0,0,0-.63,2.939Z"
        transform="translate(-70.643 -21.196)"
        fill="#db0060"
      />
      <path
        id="Path_1936"
        data-name="Path 1936"
        d="M567.4-225.175q0,6.089,5.984,6.088a8.441,8.441,0,0,0,6.193-2.571l4.146,4.041a14.871,14.871,0,0,1-4.409,3.2,14.615,14.615,0,0,1-5.983,1.1,16.426,16.426,0,0,1-4.724-.63,11.013,11.013,0,0,1-4.042-2.2,11,11,0,0,1-2.834-4.3,20.134,20.134,0,0,1-1.05-6.876q0-6.56,3.306-10.34a10.911,10.911,0,0,1,8.608-3.621,11.11,11.11,0,0,1,8.817,3.726,13.748,13.748,0,0,1,3.1,9.342v3.044Zm10.392-4.672a7.88,7.88,0,0,0-.63-2.939,4.575,4.575,0,0,0-4.566-2.834,4.574,4.574,0,0,0-4.566,2.834,7.839,7.839,0,0,0-.63,2.939Z"
        transform="translate(-160.291 -21.196)"
        fill="#f99300"
      />
      <path
        id="Path_1937"
        data-name="Path 1937"
        d="M721.469-225.175q0,6.089,5.983,6.088a8.442,8.442,0,0,0,6.193-2.571l4.146,4.041a14.876,14.876,0,0,1-4.409,3.2,14.616,14.616,0,0,1-5.983,1.1,16.426,16.426,0,0,1-4.724-.63,11.008,11.008,0,0,1-4.042-2.2,11,11,0,0,1-2.834-4.3,20.133,20.133,0,0,1-1.05-6.876q0-6.56,3.307-10.34a10.912,10.912,0,0,1,8.608-3.621,11.11,11.11,0,0,1,8.818,3.726,13.749,13.749,0,0,1,3.1,9.342v3.044Zm10.392-4.672a7.886,7.886,0,0,0-.63-2.939,4.575,4.575,0,0,0-4.566-2.834,4.575,4.575,0,0,0-4.566,2.834,7.848,7.848,0,0,0-.63,2.939Z"
        transform="translate(-254.18 -21.196)"
        fill="#f99300"
      />
      <path
        id="Path_1938"
        data-name="Path 1938"
        d="M508.627-215.518a14.078,14.078,0,0,1-8.24,2.2q-1.837,0-3.149-.105a15.044,15.044,0,0,1-2.992-.578,12.5,12.5,0,0,1-5.511-3.254l4.461-4.461a8.442,8.442,0,0,0,3.727,2.151,13.472,13.472,0,0,0,3.569.42,7.627,7.627,0,0,0,3.306-.63,2.422,2.422,0,0,0,1.523-2.2q0-2.256-2.887-2.519l-4.3-.42q-7.979-.787-7.978-7.663a7.728,7.728,0,0,1,3.2-6.508,11.9,11.9,0,0,1,7.348-2.2,21.68,21.68,0,0,1,5.827.682,11.394,11.394,0,0,1,4.618,2.519l-4.2,4.252a6.829,6.829,0,0,0-2.887-1.47,14.847,14.847,0,0,0-3.464-.368q-3.885,0-3.884,2.624,0,2.1,2.834,2.362l4.3.42q8.135.787,8.136,8.03A7.725,7.725,0,0,1,508.627-215.518Z"
        transform="translate(-116.446 -21.196)"
        fill="#f99300"
      />
      <path
        id="Path_1939"
        data-name="Path 1939"
        d="M642.27-224.469a7.649,7.649,0,0,1-6.089-2.467,7.822,7.822,0,0,1-1.889-5.354v-26.788h6.823v26.369a2.157,2.157,0,0,0,2.415,2.466h2.624v5.774Z"
        transform="translate(-205.148 -10.355)"
        fill="#f99300"
      />
      <path
        id="Path_1940"
        data-name="Path 1940"
        d="M682.5-224.469a7.649,7.649,0,0,1-6.089-2.467,7.822,7.822,0,0,1-1.889-5.354v-26.788h6.823v26.369a2.157,2.157,0,0,0,2.415,2.466h2.624v5.774Z"
        transform="translate(-229.664 -10.355)"
        fill="#f99300"
      />
      <path
        id="Path_1941"
        data-name="Path 1941"
        d="M805.979-240.714v5.773h-6.145a2.157,2.157,0,0,0-2.415,2.467v19.511H790.6v-19.93a7.821,7.821,0,0,1,1.889-5.354,7.647,7.647,0,0,1,6.089-2.467Z"
        transform="translate(-300.399 -21.546)"
        fill="#f99300"
      />
      <g id="Group_872" data-name="Group 872" transform="translate(342.86 -276.07)">
        <g id="Group_868" data-name="Group 868" transform="translate(9.721 0)">
          <path
            id="Path_1942"
            data-name="Path 1942"
            d="M440.543-266.814a2.264,2.264,0,0,1-2.264-2.264v-4.728a2.265,2.265,0,0,1,2.264-2.264,2.264,2.264,0,0,1,2.264,2.264v4.728A2.264,2.264,0,0,1,440.543-266.814Z"
            transform="translate(-438.279 276.07)"
            fill="#db0060"
          />
        </g>
        <g id="Group_871" data-name="Group 871" transform="translate(0 2.399)">
          <g id="Group_869" data-name="Group 869">
            <path
              id="Path_1943"
              data-name="Path 1943"
              d="M419-262.058a2.257,2.257,0,0,1-1.6-.663l-3.344-3.344a2.264,2.264,0,0,1,0-3.2,2.264,2.264,0,0,1,3.2,0l3.344,3.344a2.264,2.264,0,0,1,0,3.2A2.258,2.258,0,0,1,419-262.058Z"
              transform="translate(-413.391 269.929)"
              fill="#db0060"
            />
          </g>
          <g id="Group_870" data-name="Group 870" transform="translate(16.099 0.146)">
            <path
              id="Path_1944"
              data-name="Path 1944"
              d="M456.872-261.683a2.258,2.258,0,0,1-1.6-.663,2.264,2.264,0,0,1,0-3.2l3.344-3.343a2.264,2.264,0,0,1,3.2,0,2.263,2.263,0,0,1,0,3.2l-3.343,3.344A2.259,2.259,0,0,1,456.872-261.683Z"
              transform="translate(-454.608 269.554)"
              fill="#db0060"
            />
          </g>
        </g>
      </g>
      <g id="Group_877" data-name="Group 877" transform="translate(297.652 -276.07)">
        <g id="Group_873" data-name="Group 873" transform="translate(9.721 0)">
          <path
            id="Path_1945"
            data-name="Path 1945"
            d="M324.8-266.814a2.264,2.264,0,0,1-2.264-2.264v-4.728a2.265,2.265,0,0,1,2.264-2.264,2.264,2.264,0,0,1,2.264,2.264v4.728A2.264,2.264,0,0,1,324.8-266.814Z"
            transform="translate(-322.54 276.07)"
            fill="#db0060"
          />
        </g>
        <g id="Group_876" data-name="Group 876" transform="translate(0 2.399)">
          <g id="Group_874" data-name="Group 874">
            <path
              id="Path_1946"
              data-name="Path 1946"
              d="M303.259-262.058a2.257,2.257,0,0,1-1.6-.663l-3.344-3.344a2.264,2.264,0,0,1,0-3.2,2.264,2.264,0,0,1,3.2,0l3.344,3.344a2.264,2.264,0,0,1,0,3.2A2.258,2.258,0,0,1,303.259-262.058Z"
              transform="translate(-297.652 269.929)"
              fill="#db0060"
            />
          </g>
          <g id="Group_875" data-name="Group 875" transform="translate(16.099 0.146)">
            <path
              id="Path_1947"
              data-name="Path 1947"
              d="M341.133-261.683a2.258,2.258,0,0,1-1.6-.663,2.264,2.264,0,0,1,0-3.2l3.344-3.343a2.264,2.264,0,0,1,3.2,0,2.264,2.264,0,0,1,0,3.2l-3.343,3.344A2.258,2.258,0,0,1,341.133-261.683Z"
              transform="translate(-338.869 269.554)"
              fill="#db0060"
            />
          </g>
        </g>
      </g>
      <path
        id="Path_1948"
        data-name="Path 1948"
        d="M365.057-135.04a59.986,59.986,0,0,1-21.807,8.056,58.757,58.757,0,0,1-22.8-.862,57.663,57.663,0,0,1-20.366-9.3q-.657-.474-1.3-.966a1.03,1.03,0,0,1,1.19-1.679q.653.4,1.317.785a54.327,54.327,0,0,0,19.975,6.8,53.2,53.2,0,0,0,20.629-1.291,52.225,52.225,0,0,0,18.022-8.759,4.586,4.586,0,0,1,6.3.6,4.443,4.443,0,0,1-.756,6.339q-.18.137-.369.253Z"
        transform="translate(-0.436 -80.952)"
        fill="#db0060"
      />
    </g>
  </svg>
);

import React from 'react';
import styles from './star-rating.module.scss';

interface Props {
  overallRate: number;
}

export type RateProps = Props;

const Rate: React.FC<RateProps> = (props) => {
  return (
    <div className={styles.container}>
      <svg id="maskDemo" xmlns="http://www.w3.org/2000/svg" width="95.339" height="14.574" viewBox="0 0 95.339 14.574">
        <defs>
          <mask id="theMask">
            <rect id="maskerH" width="100% " height="100%" x={rtp(props.overallRate)} y="0" fill="#fff" />
          </mask>
        </defs>

        <g id="startColor" fontSize="100" fill="#fff">
          <g id="Group_895" data-name="Group 895" transform="translate(-1455 -422.426)" fill="#fff">
            <g id="Iconly_Light-outline_Star" data-name="Iconly Light-outline Star" transform="translate(857 -869.978)">
              <g id="Star-8" transform="translate(598 1292.404)">
                <path
                  id="Star-9"
                  d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                  transform="translate(-598 -1292.404)"
                  fill="#d3d3d3"
                />
              </g>
            </g>
            <g
              id="Iconly_Light-outline_Star-2"
              data-name="Iconly Light-outline Star"
              transform="translate(877 -869.978)">
              <g id="Star-8-2" data-name="Star-8" transform="translate(598 1292.404)">
                <path
                  id="Star-9-2"
                  data-name="Star-9"
                  d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                  transform="translate(-598 -1292.404)"
                  fill="#d3d3d3"
                />
              </g>
            </g>
            <g
              id="Iconly_Light-outline_Star-3"
              data-name="Iconly Light-outline Star"
              transform="translate(897 -869.978)">
              <g id="Star-8-3" data-name="Star-8" transform="translate(598 1292.404)">
                <path
                  id="Star-9-3"
                  data-name="Star-9"
                  d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                  transform="translate(-598 -1292.404)"
                  fill="#d3d3d3"
                />
              </g>
            </g>
            <g
              id="Iconly_Light-outline_Star-4"
              data-name="Iconly Light-outline Star"
              transform="translate(917 -869.978)">
              <g id="Star-8-4" data-name="Star-8" transform="translate(598 1292.404)">
                <path
                  id="Star-9-4"
                  data-name="Star-9"
                  d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                  transform="translate(-598 -1292.404)"
                  fill="#d3d3d3"
                />
              </g>
            </g>
            <g
              id="Iconly_Light-outline_Star-5"
              data-name="Iconly Light-outline Star"
              transform="translate(937 -869.978)">
              <g id="Star-8-5" data-name="Star-8" transform="translate(598 1292.404)">
                <path
                  id="Star-9-5"
                  data-name="Star-9"
                  d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                  transform="translate(-598 -1292.404)"
                  fill="#d3d3d3"
                />
              </g>
            </g>
          </g>
        </g>

        <g mask="url(#theMask)" fill="#fff">
          <rect id="bgChange" width="50%" height="100%" />

          <g id="end" fill="white" fontSize="100">
            <g id="Group_895" data-name="Group 895" transform="translate(-1455 -422.426)">
              <g
                id="Iconly_Light-outline_Star"
                data-name="Iconly Light-outline Star"
                transform="translate(857 -869.978)">
                <g id="Star-8" transform="translate(598 1292.404)">
                  <path
                    id="Star-9"
                    d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                    transform="translate(-598 -1292.404)"
                    fill="#ffe135"
                  />
                </g>
              </g>
              <g
                id="Iconly_Light-outline_Star-2"
                data-name="Iconly Light-outline Star"
                transform="translate(877 -869.978)">
                <g id="Star-8-2" data-name="Star-8" transform="translate(598 1292.404)">
                  <path
                    id="Star-9-2"
                    data-name="Star-9"
                    d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                    transform="translate(-598 -1292.404)"
                    fill="#ffe135"
                  />
                </g>
              </g>
              <g
                id="Iconly_Light-outline_Star-3"
                data-name="Iconly Light-outline Star"
                transform="translate(897 -869.978)">
                <g id="Star-8-3" data-name="Star-8" transform="translate(598 1292.404)">
                  <path
                    id="Star-9-3"
                    data-name="Star-9"
                    d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                    transform="translate(-598 -1292.404)"
                    fill="#ffe135"
                  />
                </g>
              </g>
              <g
                id="Iconly_Light-outline_Star-4"
                data-name="Iconly Light-outline Star"
                transform="translate(917 -869.978)">
                <g id="Star-8-4" data-name="Star-8" transform="translate(598 1292.404)">
                  <path
                    id="Star-9-4"
                    data-name="Star-9"
                    d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                    transform="translate(-598 -1292.404)"
                    fill="#ffe135"
                  />
                </g>
              </g>
              <g
                id="Iconly_Light-outline_Star-5"
                data-name="Iconly Light-outline Star"
                transform="translate(937 -869.978)">
                <g id="Star-8-5" data-name="Star-8" transform="translate(598 1292.404)">
                  <path
                    id="Star-9-5"
                    data-name="Star-9"
                    d="M601.656,1306.978h0a1.162,1.162,0,0,1-1.164-1.16,1.127,1.127,0,0,1,.014-.182l.683-3.828a.029.029,0,0,0-.008-.023l-2.838-2.731a1.125,1.125,0,0,1-.338-.8,1.184,1.184,0,0,1,.354-.844,1.27,1.27,0,0,1,.637-.307l3.874-.558c.015,0,.031-.007.031-.024l1.733-3.474a1.16,1.16,0,0,1,2.079,0l1.734,3.483c.007.007.015.015.023.015l3.883.56a1.17,1.17,0,0,1,.767.446,1.151,1.151,0,0,1-.123,1.51l-2.814,2.723-.005.008v0h0l.674,3.843a1.162,1.162,0,0,1-.959,1.312,1.206,1.206,0,0,1-.182.014h0a1.142,1.142,0,0,1-.542-.136l-3.468-1.81a.058.058,0,0,0-.031.008l-3.491,1.829A1.152,1.152,0,0,1,601.656,1306.978Zm4-13.454h0l-.008.005a.036.036,0,0,0-.015.017l-1.734,3.475a1.161,1.161,0,0,1-.866.637l-3.858.553-.047.015a.05.05,0,0,0-.007.031l2.838,2.723a1.161,1.161,0,0,1,.33,1.02l-.675,3.82v.016a.035.035,0,0,0,.034.025h.012l3.474-1.822a1.178,1.178,0,0,1,.553-.14h0a1.173,1.173,0,0,1,.533.131l3.452,1.8h.007a.058.058,0,0,0,.022.008h.025l.015-.015-.676-3.821a1.108,1.108,0,0,1,.331-1.027l2.815-2.73.008-.018-.008-.007h-.01a.055.055,0,0,0-.02,0l-3.884-.564a1.158,1.158,0,0,1-.866-.637l-1.734-3.466a.022.022,0,0,0-.006-.018.027.027,0,0,0-.018-.006l-.007-.007Z"
                    transform="translate(-598 -1292.404)"
                    fill="#ffe135"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Rate;

const rtp = (rate: number) => {
  let per = (rate * 100) / 5;

  per = 100 - per;

  return `${-per}%`;
};
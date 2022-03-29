import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import styles from './pie-progress-bar.module.scss';

interface Props {
  value: number;
  text: string;
}

export type PieProgressBarProps = Props;

const PieProgressBar: React.FC<PieProgressBarProps> = (props) => {
  return (
    <div className={styles.container}>
      <ProgressBar
        radius={26}
        progress={props.value}
        strokeWidth={8}
        strokeColor="#DB0060"
        strokeLinecap="butt"
        trackStrokeWidth={1}
        trackStrokeColor="#F2F2F2">
        <div className={styles.indicator}>
          <div>{props.value}%</div>
        </div>
      </ProgressBar>

      <div className={styles.text}> {props.text}</div>
    </div>
  );
};

export default PieProgressBar;

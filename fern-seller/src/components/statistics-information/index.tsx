import React from 'react';
import { Color } from '../../constants/color';
import styles from './statistics-information.module.scss';

interface Props {
  text: string;
  count: number;
  type: Color;
}

export type StatisticsInformationProps = Props;
const StatisticsInformation: React.FC<StatisticsInformationProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.counter} style={{ color: props.type }}>
        {props.count}
      </div>
      <div className={styles.text} style={{ color: props.type }}>
        {props.text}
      </div>
    </div>
  );
};
export default StatisticsInformation;

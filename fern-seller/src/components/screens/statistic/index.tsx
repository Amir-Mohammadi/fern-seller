import React from 'react';
import LineChart, { LineChartProps } from '../../line-chart';
import PageTitle from '../../page-title';
import styles from './statistic.module.scss';

interface Props {}

export type StatisticScreenProps = Props & LineChartProps;

const StatisticScreen: React.FC<StatisticScreenProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <PageTitle title="آمار فروش" />
        </div>
        <div className={styles.row}>
          <div className={styles.box}>
            <LineChart range={props.range} data={props.data} onChangeRange={props.onChangeRange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { StatisticScreen };

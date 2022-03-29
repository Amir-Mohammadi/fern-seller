import classNames from 'classnames';
import React from 'react';
import { Line } from 'react-chartjs-2';
import labels, { TimeRangeType } from '../../utils/range-label-generator';
import styles from './line-chart.module.scss';

interface Props {
  data: number[];
  range: TimeRangeType;
  label?: string;
  onChangeRange: (r: TimeRangeType) => void;
}

export type LineChartProps = Props;

const LineChart: React.FC<LineChartProps> = (props) => {
  return (
    <div className={styles.chartBX}>
      <div className={styles.chartHD}>
        <ul>
          <li
            onClick={() => props.onChangeRange(TimeRangeType.year)}
            className={classNames({
              [styles.focus]: props.range == TimeRangeType.year,
            })}>
            سالیانه
          </li>
          <li
            onClick={() => props.onChangeRange(TimeRangeType.month)}
            className={classNames({
              [styles.focus]: props.range == TimeRangeType.month,
            })}>
            ماهانه
          </li>
          <li
            onClick={() => props.onChangeRange(TimeRangeType.week)}
            className={classNames({
              [styles.focus]: props.range == TimeRangeType.week,
            })}>
            هفتگی
          </li>
          <li
            onClick={() => props.onChangeRange(TimeRangeType.day)}
            className={classNames({
              [styles.focus]: props.range == TimeRangeType.day,
            })}>
            روزانه
          </li>
        </ul>
      </div>
      <div className={styles.chartBD}>
        <Line data={renderChart(props)} width={630} height={405} options={options} />
      </div>
    </div>
  );
};

export default LineChart;

const renderChart = (props: LineChartProps) => {
  return {
    labels: labels(props.range),
    datasets: [
      {
        steppedLine: false,
        label: props.label,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#DB0060',
        borderWidth: 5,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBorderColor: '#DB0060',
        pointBackgroundColor: '#DB0060',
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 10,
        borderJoinStyle: 'round',
        cubicInterpolationMode: 'monotone',
        data: props.data,
      },
    ],
  };
};

const options = {
  layout: {
    padding: {
      top: 20,
      left: 10,
    },
  },
  bezierCurve: true,
  legend: {
    display: false,
    position: 'right',
  },
  scales: {
    yAxes: [
      {
        display: false,
        gridLines: {
          drawOnChartArea: false,
          display: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawTicks: false,
          drawOnChartArea: false,
          color: '#DB0060',
          padding: 14,
        },

        ticks: {
          padding: 10,
          fontSize: 11,
        },
      },
    ],
  },
  steppedLine: false,
};

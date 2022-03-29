import React from 'react';
import PieProgressBar from '../pie-progress-bar';
import Rate, { RateProps } from '../star-rating';
import styles from './user-performance.module.scss';

interface Props {
  title?: string;
  value?: number;
  refereedValue: number;
  canceledValue: number;
  delayedValue: number;
  isLoading?: boolean;
}

export type UserPerformanceProps = Props & RateProps;

const UserPerformance: React.FC<UserPerformanceProps> = (props) => {
  return (
    <div className={styles.performanceBX}>
      <div className={styles.performanceHD}>
        <label>عملکرد شما</label>
      </div>
      <div className={styles.performanceBD}>
        <div className={styles.rate}>
          <Rate overallRate={props.overallRate} />
        </div>
        <div className={styles.performanceUnits}>
          <div>
            <PieProgressBar value={props.refereedValue} text={'بازگشت کالا از مشتری'} />
          </div>
          <div>
            <PieProgressBar value={props.canceledValue} text={'لغو سفارش'} />
          </div>
          <div>
            <PieProgressBar value={props.delayedValue} text={'تاخیر در ارسال'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPerformance;

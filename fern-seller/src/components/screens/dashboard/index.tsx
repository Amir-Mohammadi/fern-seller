import React, { useEffect } from 'react';
import { IShopInProgressOrder } from '../../../api/models';
import { Color } from '../../../constants/color';
import AddProduct from '../../add-product';
import CustomerOrders from '../../customer-orders';
import { IconTypes } from '../../icons';
import StatisticsInformation, { StatisticsInformationProps } from '../../statistics-information';
import UpdateProductQuantity, { UpdateProductQuantityProps } from '../../update-product-quantity';
import UserCard from '../../user-card';
import UserPerformance from '../../user-performance';
import { Target as UpdateProductQuantityTarget } from './../../../components/update-product-quantity';
import styles from './home.module.scss';

export enum Target {
  FORM_LOAD = 'dashboard-screen-form-load',
}

interface Props {
  customerOrders: Array<IShopInProgressOrder>;
  staticInfo: Array<StatisticsInformationProps>;
  action: (target: Target | UpdateProductQuantityTarget, value?: any) => void;
  updateProductQuantity: UpdateProductQuantityProps;
}

export type DashboardScreenProps = Props;

const DashboardScreen: React.FC<DashboardScreenProps> = (props) => {
  useEffect(() => {
    props.action!(Target.FORM_LOAD);
    return () => {};
  }, []);

  console.log(props.staticInfo);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.sideBX}>
          <div className={styles.box}>
            <UserCard
              name={'سید حامد محمدی'}
              navigationItems={[
                { icon: IconTypes.Comment, name: 'پرسش ها', link: '#' },
                { icon: IconTypes.Email, name: 'پیام ها', link: '#' },
                { icon: IconTypes.Profile, name: 'پروفایل', link: '#' },
              ]}
            />
          </div>
          <div className={styles.box}>
            <UserPerformance overallRate={4} canceledValue={25} delayedValue={31} refereedValue={70} />
          </div>
        </div>
        <div className={styles.mainBX}>
          <div className={styles.box}>
            <div className={styles.row}>
              <div className={styles.addCN}>
                <AddProduct title="ثبت محصول جدید" onClick={() => {}} />
              </div>
              <div className={styles.searchCN}>
                <UpdateProductQuantity {...props.updateProductQuantity} action={props.action} />
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <CustomerOrders title={'سفارشات 24 ساعت اخیر مشتری'} items={props.customerOrders} />
          </div>
          <div className={styles.box}>
            <div className={styles.infoBX}>{props.staticInfo.map(renderStatics)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderStatics = (info: { text: string; count: number; type: Color }, i: number) => (
  <div className={styles.infoBD}>
    <StatisticsInformation {...info} />
  </div>
);

export { DashboardScreen };

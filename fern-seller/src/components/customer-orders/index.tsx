import classNames from 'classnames';
import React from 'react';
import { IShopInProgressOrder } from '../../api/models';
import { STATIC_FILE } from '../../config';
import styles from './customer-orders.module.scss';

interface Props {
  title?: string;
  items?: Array<IShopInProgressOrder>;
}

export type CustomerOrdersProps = Props;

const CustomerOrders: React.FC<CustomerOrdersProps> = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>{props.title}</span>
      </div>
      {props.items?.map((item, index) => {
        const imageUrl = STATIC_FILE(item.productImageId, item.productImageRowVersion ?? '');

        return (
          <div className={styles.rowItem} key={index}>
            <div className={classNames(styles.cell, styles.product)}>
              <span className={styles.header}>کالا</span>
              <div className={styles.data}>
                <div className={styles.index}>{index + 1}</div>
                <div className={styles.image}>
                  <img src={imageUrl}></img>
                </div>
                <div className={styles.caption}>
                  <span className={styles.name}>{item.productName} </span>
                  <span className={styles.brand}>برند : {item.brandName}</span>
                </div>
              </div>
            </div>
            <div className={classNames(styles.cell, styles.color)}>
              <span className={styles.header}>رنگ</span>
              <div className={styles.data}>
                <div className={styles.color}>
                  <div className={styles.circleColor} style={{ backgroundColor: '#' + item.colorCode }}></div>
                  <label>{item.colorName} </label>
                </div>
              </div>
            </div>

            <div className={classNames(styles.cell, styles.count)}>
              <span className={styles.header}>تعداد</span>
              <div className={styles.data}>
                <div className={styles.text}> {item.productCount} </div>
              </div>
            </div>

            <div className={classNames(styles.cell, styles.customer)}>
              <span className={styles.header}>نام خریدار</span>
              <div className={styles.data}>
                <div className={styles.text}>{item.customerName}</div>
              </div>
            </div>

            <div className={classNames(styles.cell, styles.delivaryDate)}>
              <span className={styles.header}>تاریخ تحویل</span>
              <div className={styles.data}>
                <div className={styles.text}>{item.deliveryDate}</div>
              </div>
            </div>

            <div className={classNames(styles.cell, styles.address)}>
              <span className={styles.header}>آدرس</span>
              <div className={styles.data}>
                <div className={styles.text}>{item.address}</div>
              </div>
            </div>

            <div className={classNames(styles.cell, styles.action)}>
              <span className={styles.header}>عملیات</span>
              <div className={styles.data}>
                <button onClick={() => console.log('clicked')}>{`ارسال`}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerOrders;

import React from 'react';
import { IBrand } from '../../interfaces/common';
import styles from './brands.module.scss';
interface Props {
  title: string;
  items: IBrand[];
  onClick: (i: number) => void;
}

export type BrandsCardProps = Props;

const BrandsCard: React.FC<BrandsCardProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{props.title}</div>

      <div className={styles.navChart}>
        {props.items.map((target, i) => {
          return (
            <div className={styles.navItem} key={target.id}>
              <span onClick={() => props.onClick(target.id)}>{target.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandsCard;

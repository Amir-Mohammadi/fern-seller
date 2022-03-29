import React from 'react';
import styles from './badge.module.scss';

interface Props {
  maximum: number;
  value?: number;
  isHidden?: boolean;
}

export type BadgeProps = Props;

const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <div className={styles.container}>
      {props.value && !props.isHidden ? (
        <div>
          {props.value >= props.maximum ? (
            <div className={styles.badge}>
              <span>{props.maximum + '+'}</span>
            </div>
          ) : (
            <div className={styles.badge}>
              <span>{props.value}</span>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Badge;

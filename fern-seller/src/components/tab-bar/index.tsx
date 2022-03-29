import classNames from 'classnames';
import React from 'react';
import styles from './tab-bar.module.scss';

export enum TabBarTypes {
  CheckoutTimeTable,
  OrderTabes,
  ProductTabs,
}
interface Props {
  items: {
    title: string;
    countBadge?: number;
    content?: React.ReactElement<any>;
  }[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => any;
  styleType?: TabBarTypes;
}

export type TabBarProps = Props;

const TabBar: React.FC<TabBarProps> = (props) => {
  return (
    <div className={styles.container}>
      <ul className={classNames({ [styles.tabBar]: true })}>
        {props.items.map((tab, i) => (
          <li
            onClick={() => {
              props.setSelectedIndex(i);
            }}
            className={classNames({
              [styles.tab]: true,
              [styles.selectedTab]: i == props.selectedIndex,
            })}
            key={i + '_tabBar'}>
            <div className={styles.tabBarText}>
              <span>{tab.title}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.tabContent}>{(props.items[props.selectedIndex] ?? props.items[0]).content}</div>
    </div>
  );
};

export default TabBar;

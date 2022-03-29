import React from 'react';
import FilterBar, { FilterBarProps } from '../filter-bar';
import styles from './filter.module.scss';

interface Props {
  onCreateNewProduct?: () => {};
  onRequestNewProduct?: () => {};
  filters?: FilterBarProps;
}

export type FilterProps = Props;

const Filter: React.FC<FilterProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.filterHD}>
        <label>فیلترهای اعمال شده:</label>
      </div>
      <div className={styles.filterBD}>
        <FilterBar {...props.filters} />
      </div>
      <div className={styles.filterFT}>
        <div className={styles.right}>
          <label>کالای شما در میان نتایج وجود ندارد؟</label>
          <button onClick={() => {}}>ایجاد کالای جدید</button>
        </div>

        <div className={styles.left}>
          <button onClick={() => {}}>درخواست ایجاد کالا توسط السل</button>
        </div>
      </div>
    </div>
  );
};
export default Filter;

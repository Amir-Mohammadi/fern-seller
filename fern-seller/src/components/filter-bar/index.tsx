import React from 'react';
import Icons, { IconTypes } from '../icons';
import styles from './filter-bar.module.scss';

export type FilterNode = { title: string; type: FilterNodeType };

export enum FilterNodeType {
  category,
  stuffName,
  brand,
}
interface Props {
  title?: string;
  filters?: FilterNode[];
  onRemove?: (filterNode: FilterNode) => void;
}

export type FilterBarProps = Props;

const FilterBar: React.FC<FilterBarProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{props.title}</span>
      </div>
      <div className={styles.filter}>
        {props.filters?.map((value, i) => (
          <span
            key={i}
            onClick={() => {
              if (props.onRemove) props.onRemove(value);
            }}>
            {value.title}
            <Icons type={IconTypes.Wrong} size={'8'} color={'#707070'} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;

import React from 'react';
import Icons, { IconTypes } from '../icons';
import styles from './search-bar.module.scss';

interface Props {
  input: { onChange: (value: string) => any; value: string };
  onSearchButton: () => any;
  onCloseButton: () => any;
}

export type SearchBarProps = Props;

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchHD}>
        <label>جستجوی کالا در میان کالاهای السل بر اساس:</label>
      </div>

      <div className={styles.searchBD}>
        <div className={styles.searchInput}>
          <input
            value={props.input.value}
            placeholder={'نام کالا'}
            onChange={({ target }) => {
              props.input.onChange(target.value);
            }}
          />
        </div>
        <div className={styles.searchActions}>
          <button
            onClick={() => {
              props.onSearchButton!();
            }}>
            <span>جستجو</span>
            <Icons type={IconTypes.Search} size={'20px'} color={'#009289'} />
          </button>

          <button
            onClick={() => {
              props.onCloseButton!();
            }}>
            <Icons type={IconTypes.Wrong} size={'15px'} color={'#DB0060'} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;

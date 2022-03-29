import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FilterBar, { FilterBarProps } from '../filter-bar';
import Icons, { IconTypes } from '../icons';
import styles from './search-and-filter.module.scss';
interface Props {
  items?: Array<FilterType>;
  filter: FilterBarProps;
}

export type FilterType = {
  type: 'dropdown' | 'input' | 'button';
  dropdown?: {
    title?: string;
    placeHolder: string;
    onChange: (index: number) => any;
    contents: string[];
    selectedIndex: number;
    slice?: number;
    defaultItem?: string;
  };
  input?: {
    title?: string;
    placeHolder: string;
    value: string;
    onChange: Function;
    slice?: number;
  };
  button?: {
    title?: string;
    icon?: IconTypes;
    onClick: Function;
    slice?: number;
  };
};

export type SearchFilterProps = Props;
//
const SearchFilter: React.FC<SearchFilterProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.filterHD}>جستجو و فیلتر</div>
      <div className={styles.filterBD}>
        <div className={styles.options}>{props.items?.map(renderFilterItems)}</div>
        {props.filter.filters?.length ? (
          <div className={styles.filters}>
            <div className={styles.title}>فیلترهای اعمال شده:</div>
            <FilterBar title={props.filter.title} filters={props.filter.filters} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchFilter;

const renderFilterItems = (filter: FilterType, i: number) => {
  const [active, setActive] = useState(false);

  switch (filter.type) {
    case 'dropdown':
      return (
        <div style={{ flex: filter.dropdown?.slice }} className={styles.optionBD}>
          <span>{filter.dropdown!.title}</span>
          <div className={styles.dropdownBX}>
            <div
              className={classNames({
                [styles.dropdownBD]: true,
                [styles.dropdownActiveBD]: active,
              })}
              onBlur={() => {
                setActive(false);
              }}
              tabIndex={0}>
              <div
                onClick={() => {
                  setActive(!active);
                }}>
                <span>
                  {filter.dropdown!.selectedIndex == -1
                    ? filter.dropdown!.placeHolder
                    : filter.dropdown?.contents[filter.dropdown.selectedIndex]}
                </span>

                <Icons type={IconTypes.SwipeDown} color="#d3d3d3" size="12px" />
              </div>

              {active ? (
                <>
                  {filter.dropdown?.defaultItem ? (
                    <div
                      onClick={() => {
                        filter.dropdown!.onChange(-1);
                        setActive(false);
                      }}>
                      {filter.dropdown?.defaultItem}
                    </div>
                  ) : null}
                  {filter.dropdown?.contents.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        filter.dropdown!.onChange(index);
                        setActive(false);
                      }}>
                      {item}
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      );

    case 'input':
      return (
        <div style={{ flex: filter.input?.slice }} className={styles.optionBD}>
          <span>{filter.input?.title}</span>
          <input
            type="text"
            value={filter.input?.value}
            placeholder={filter.input?.placeHolder}
            onChange={(e) => filter.input?.onChange(e.target.value)}
          />
        </div>
      );

    case 'button':
      return (
        <div style={{ flex: filter.button?.slice }} className={styles.optionBD}>
          <span>{filter.input?.title}</span>
          <button onClick={() => filter.button?.onClick()}>
            <span>{filter.button?.title}</span>
            <Icons type={filter.button?.icon} size={'20px'} color={'#009289'} />
          </button>
        </div>
      );

    default:
      break;
  }
};

renderFilterItems.propTypes = {
  children: PropTypes.element.isRequired,
};

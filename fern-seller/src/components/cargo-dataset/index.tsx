import classNames from 'classnames';
import React, { useState } from 'react';
import Icons, { IconTypes } from '../icons';
import Table, { TableProps } from '../table';
import styles from './cargo-dataset.module.scss';

interface Props {
  showCount?: {
    selectedIndex: number;
    counts: number[];
    onChange: (i: number) => void;
  };
  data: TableProps;
}

export type CargoDatasetProps = Props;

const CargoDataset: React.FC<CargoDatasetProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          تعداد نتایج: &nbsp;<span>{props.data.rows?.length} مورد</span>
        </div>
        &nbsp; &nbsp;|&nbsp; &nbsp;
        <div>
          تعداد نمایش: <div>{renderDropdownMenus(props.showCount)}</div>
        </div>
      </div>
      <div>
        <Table {...props.data} />
      </div>
    </div>
  );
};

export default CargoDataset;

const renderDropdownMenus = (dropdownMenu?: {
  selectedIndex: number;
  counts: number[];
  onChange: (i: number) => void;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.optionBD}>
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
            <span>{dropdownMenu?.counts[dropdownMenu.selectedIndex]}</span>

            <Icons type={IconTypes.SwipeDown} color="#d3d3d3" size="8px" />
          </div>

          {dropdownMenu?.counts.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                dropdownMenu.onChange(i);
                setActive(false);
              }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// renderDropdownMenus.propTypes = {
//   children: PropTypes.element.isRequired,
// };

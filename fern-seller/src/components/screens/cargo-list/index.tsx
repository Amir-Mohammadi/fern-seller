import React from 'react';
import CargoDataset, { CargoDatasetProps } from '../../cargo-dataset';
import { IconTypes } from '../../icons';
import PageTitle from '../../page-title';
import SearchFilter from '../../search-and-filter';
import styles from './cargo-list.module.scss';

interface Props {
  filterType: {
    orderCode: { value: string; onSubmit: () => void };
    sendDate: { list: string[]; selected: number };
    sendTime: { list: string[]; selected: number };
    depot: { value: string; onSubmit: () => void };
    search: { value: string; submit: () => void };
    shippingName: { value: string; onSubmit: () => void };

    onChange: (
      target: 'orderCode' | 'sendDate' | 'search' | 'sendTime' | 'depot' | 'shippingName',
      v: string | number,
    ) => void;
  };

  list: CargoDatasetProps;
}
export type CargoListScreenProps = Props;

const CargoListScreen: React.FC<CargoListScreenProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <PageTitle title="لیست محموله‌ها" />
          <SearchFilter
            filter={{ filters: [] }}
            items={[
              {
                type: 'input',
                input: {
                  placeHolder: 'شماره سفارش',
                  value: props.filterType.orderCode.value,
                  onChange: (v: string) => props.filterType.onChange('orderCode', v),
                },
              },
              {
                type: 'dropdown',
                dropdown: {
                  contents: props.filterType.sendDate.list,
                  onChange: (i) => props.filterType.onChange('sendDate', i),
                  placeHolder: 'تاریخ ارسال',
                  selectedIndex: props.filterType.sendDate.selected,
                },
              },
              {
                type: 'dropdown',
                dropdown: {
                  contents: props.filterType.sendTime.list,
                  onChange: (i) => props.filterType.onChange('sendTime', i),
                  placeHolder: 'ساعت ارسال',
                  selectedIndex: props.filterType.sendTime.selected,
                },
              },
              {
                type: 'input',
                input: {
                  placeHolder: 'انبار',
                  value: props.filterType.depot.value,
                  onChange: (v: string) => props.filterType.onChange('depot', v),
                },
              },
              {
                type: 'input',
                input: {
                  placeHolder: 'نام باربری',
                  value: props.filterType.shippingName.value,
                  onChange: (v: string) => props.filterType.onChange('shippingName', v),
                },
              },
              {
                type: 'button',
                button: {
                  title: 'جستجو',
                  onClick: props.filterType.search.submit,
                  icon: IconTypes.Search,
                },
              },
            ]}
          />
        </div>
        <div className={styles.row}>
          <CargoDataset {...props.list} />
        </div>
      </div>
    </div>
  );
};

export { CargoListScreen };

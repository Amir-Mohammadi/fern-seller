import React, { useEffect } from 'react';
import { IconTypes } from '../../icons';
import OrderDataset, { OrderDatasetProps } from '../../order-dataset';
import PageTitle from '../../page-title';
import SearchFilter from '../../search-and-filter';
import styles from './order-list.module.scss';

export enum Target {
  FORM_LOAD = 'customer-orders-form-load',
  CATEGORY_FILTER_ON_CHANGE = 'customer-orders-category-filter-on-change',
  BRAND_FILTER_ON_CHANGE = 'customer-orders-brand-filter-on-change',
  SEARCH_FILTER_ON_CHANGE = 'customer-orders-search-filter-on-change',
  SEARCH_FIELD_ON_CHANGE = 'customer-orders-search-field-on-change',
  ON_SEARCH = 'customer-orders-filter-on-search',
}
export interface Props {
  filterType: {
    category: string[];
    brand: string[];
    search: { value: string };
    selectedBrand: number;
    selectedCategory: number;
  };
  list: OrderDatasetProps;
  action: (target: Target, value?: any) => void;
}

export type OrderListScreenProps = Props;

const OrderListScreen: React.FC<OrderListScreenProps> = (props) => {
  useEffect(() => {
    props.action!(Target.FORM_LOAD);
    return () => {};
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <PageTitle title="سفارش‌های مشتریان" />
          <SearchFilter
            filter={{ filters: [] }}
            items={[
              {
                type: 'input',
                input: {
                  placeHolder: 'عبارت مورد نظر را وارد کنید…',
                  value: props.filterType.search.value,
                  onChange: (v: string) => props.action(Target.SEARCH_FILTER_ON_CHANGE, v),
                  slice: 1,
                },
              },
              {
                type: 'button',
                button: {
                  title: 'جستجو',
                  onClick: () => props.action(Target.ON_SEARCH),
                  icon: IconTypes.Search,
                },
              },
              {
                type: 'dropdown',
                dropdown: {
                  contents: props.filterType.category,
                  onChange: (i) => props.action(Target.CATEGORY_FILTER_ON_CHANGE, i),
                  placeHolder: 'انتخاب کنید',
                  selectedIndex: props.filterType.selectedCategory,
                  title: 'گروه کالایی:',
                  defaultItem: 'انتخاب کنید',
                },
              },
              {
                type: 'dropdown',
                dropdown: {
                  contents: props.filterType.brand,
                  onChange: (i) => props.action(Target.BRAND_FILTER_ON_CHANGE, i),
                  placeHolder: 'انتخاب کنید',
                  selectedIndex: props.filterType.selectedBrand,
                  title: 'برند کالا:',
                  defaultItem: 'انتخاب کنید',
                },
              },
            ]}
          />
        </div>
        <div className={styles.row}>
          <OrderDataset {...props.list} />
        </div>
      </div>
    </div>
  );
};

export { OrderListScreen };

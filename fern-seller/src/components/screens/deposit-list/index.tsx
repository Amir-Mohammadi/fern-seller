import React, { useState } from 'react';
import CargoDataset from '../../cargo-dataset';
import { IconTypes } from '../../icons';
import PageTitle from '../../page-title';
import SearchFilter from '../../search-and-filter';
import styles from './deposit-list.module.scss';

export interface FinancialTransaction {
  description: string;
  amount: string;
  date: Date;
  type: 'debit' | 'credit';
}

type Props = {
  transactionDateList: Date[];
  financialTransactions: FinancialTransaction[];
  onClickSearchButton: (selectedTransactionDate?: Date, orderCode?: string) => any;
};

export type DepositListScreenProps = Props;
const DepositListScreen: React.FC<DepositListScreenProps> = (props) => {
  const [selectedTransactionDate, setSelectedTransactionDate] = useState<number>(-1);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <PageTitle title="لیست تراکنش‌های مالی" />
          <SearchFilter
            filter={{ filters: [] }}
            items={[
              {
                type: 'dropdown',
                dropdown: {
                  contents: props.transactionDateList.map((date) => date.toLocaleDateString('fa-IR')),
                  onChange: (index: number) => {
                    setSelectedTransactionDate(index);
                  },
                  placeHolder: 'انتخاب کنید',
                  defaultItem: 'انتخاب کنید',
                  selectedIndex: selectedTransactionDate,
                  title: 'تاریخ تراکنش',
                },
              },
              {
                type: 'button',
                button: {
                  title: 'جستجو',
                  onClick: () => {
                    props.onClickSearchButton(props.transactionDateList[selectedTransactionDate]);
                  },
                  icon: IconTypes.Search,
                },
              },
            ]}
          />
        </div>

        <div className={styles.row}>
          <CargoDataset
            showCount={{
              counts: [5, 10, 15, 20],
              onChange: () => {},
              selectedIndex: 0,
            }}
            data={{
              headers: ['ردیف', 'توضیحات تراکنش', 'نوع تراکنش', 'تاریخ تراکنش', 'مقدار'],
              rows: props.financialTransactions.map((item: FinancialTransaction) => {
                return [
                  {
                    type: 'string',
                    data: {
                      title: item.description,
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: item.type == 'credit' ? 'بستانکار' : 'بدهکار',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: item.date.toLocaleDateString('fa-IR'),
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: item.amount,
                    },
                  },
                ];
              }),
              icon: [{ icon: IconTypes.Edit, size: '18px' }],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { DepositListScreen };

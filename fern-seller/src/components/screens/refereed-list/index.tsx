import React from 'react';
import { CARGO_SEARCH_FILTER } from '../../../utils/mukc';
import CargoDataset from '../../cargo-dataset';
import { IconTypes } from '../../icons';
import PageTitle from '../../page-title';
import SearchFilter from '../../search-and-filter';
import styles from './refereed-list.module.scss';

interface Props {}

export type RefereedListScreenProps = Props;

const RefereedListScreen: React.FC<RefereedListScreenProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <PageTitle title="لیست مرجوعی‌ها" />
          <SearchFilter {...CARGO_SEARCH_FILTER} />
        </div>
        <div className={styles.row}>
          <CargoDataset
            showCount={{
              counts: [5, 10, 15, 20],
              onChange: () => {},
              selectedIndex: 0,
            }}
            data={{
              headers: ['ردیف', ' شماره سفارش', 'تاریخ', ' ساعت ارسال', ' انبار', 'مشخصات باربری', 'جزییات محموله'],
              rows: [
                [
                  {
                    type: 'string',
                    data: {
                      title: '12',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: '99/9/22',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: ' 18:20',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: 'مشخصات باربری',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: 'انبار',
                    },
                  },
                ],
                [
                  {
                    type: 'string',
                    data: {
                      title: '12',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: '99/9/22',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: ' 18:20',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: 'مشخصات باربری',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: 'انبار',
                    },
                  },
                ],
                [
                  {
                    type: 'string',
                    data: {
                      title: '12',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: '99/9/22',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: ' 18:20',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: 'مشخصات باربری',
                    },
                  },
                  {
                    type: 'string',
                    data: {
                      title: 'انبار',
                    },
                  },
                ],
              ],
              icon: [{ icon: IconTypes.Eye, size: '18px' }],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { RefereedListScreen };

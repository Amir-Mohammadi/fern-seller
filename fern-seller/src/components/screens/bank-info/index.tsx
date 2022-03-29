import React from 'react';
import { IconTypes } from '../../icons';
import Info from '../../info';
import UserCard from '../../user-card';
import UserPerformance from '../../user-performance';
import styles from './bank-info.module.scss';

interface Props {
  accountInfo: {
    ibanNumber: string;
    accountOwner: string;
  };
}
export type BankInfoProps = Props;

const BankInfoScreen: React.FC<BankInfoProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.sideBX}>
            <div className={styles.box}>
              <UserCard
                name={'سید حامد محمدی'}
                navigationItems={[
                  {
                    icon: IconTypes.Comment,
                    name: 'پرسش ها',
                    link: '#',
                  },
                  { icon: IconTypes.Email, name: 'پیام ها', link: '#' },
                  {
                    icon: IconTypes.Profile,
                    name: 'پروفایل',
                    link: '#',
                  },
                ]}
              />
            </div>
            <div className={styles.box}>
              <UserPerformance overallRate={4} canceledValue={25} delayedValue={31} refereedValue={70} />
            </div>
          </div>
          <div className={styles.mainBX}>
            <Info title="اطلاعات حساب بانکی" items={bankInfo(props)} />
          </div>
        </div>
      </div>
    </div>
  );
};

const bankInfo = (props: BankInfoProps) => [
  {
    title: 'شماره شبا',
    icon: IconTypes.Edit,
    value: props.accountInfo.ibanNumber,
  },
  {
    title: 'نام و نام خانوادگی صاحب حساب',
    icon: IconTypes.Edit,
    value: props.accountInfo.accountOwner,
  },
];

export { BankInfoScreen };

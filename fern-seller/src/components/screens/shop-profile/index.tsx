import React, { useState } from 'react';
import { IShopAddress, IShopContract, IShopOwnerPersonalInfo } from '../../../interfaces/common';
import { IconTypes } from '../../icons';
import Info from '../../info';
import TabBar from '../../tab-bar';
import UserCard from '../../user-card';
import UserPerformance, { UserPerformanceProps } from '../../user-performance';
import styles from './user-profile.module.scss';

interface Props {
  contract: IShopContract;
  shopOwnerAddress: IShopAddress;
  shopOwnerGeneralInfo: IShopOwnerPersonalInfo;
  userPerformance: UserPerformanceProps;
  userName: string;
}

export type ShopPanelScreenProps = Props;
const UserPanelScreen: React.FC<ShopPanelScreenProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.sideBX}>
            <div className={styles.box}>
              <UserCard
                name={props.userName}
                navigationItems={[
                  { icon: IconTypes.Comment, name: 'پرسش ها', link: '#' },
                  { icon: IconTypes.Email, name: 'پیام ها', link: '#' },
                  { icon: IconTypes.Profile, name: 'پروفایل', link: '#' },
                ]}
              />
            </div>
            <div className={styles.box}>
              <UserPerformance {...props.userPerformance} />
            </div>
          </div>
          <div className={styles.mainBX}>
            <TabBar
              setSelectedIndex={setSelectedTabIndex}
              selectedIndex={selectedTabIndex}
              items={[
                {
                  title: ' اطلاعات فروشنده',
                  content: <Info title="اطلاعات فروشنده" items={sellerI(props.shopOwnerGeneralInfo)} />,
                },
                {
                  title: ' اطلاعات آدرس',
                  content: <Info title=" اطلاعات آدرس" items={addressI(props.shopOwnerAddress)} />,
                },
                {
                  title: 'اطلاعات قرارداد',
                  content: <Info title="اطلاعات قرارداد" items={contractI(props.contract)} />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const contractI = (info: IShopContract) => [
  {
    title: 'شماره قرارداد',
    icon: IconTypes.Edit,
    value: info.code,
  },
  {
    title: 'فایل قرارداد',
    icon: IconTypes.Edit,
    value: info.fileName,
  },
  {
    title: 'تاریخ شروع قرارداد',
    icon: IconTypes.Edit,
    value: info.createDate,
  },
  {
    title: 'تاریخ پایان قرارداد',
    icon: IconTypes.Edit,
    value: info.expireDate,
  },
];

const sellerI = (info: IShopOwnerPersonalInfo) => [
  {
    title: 'نام و نام خانوادگی',
    icon: IconTypes.Edit,
    value: `${info.firstName} ${info.lastName}`,
  },
  {
    title: 'کد فروشنده',
    icon: IconTypes.Edit,
    value: info.userId,
  },
  {
    title: 'نوع فروشنده',
    icon: IconTypes.Edit,
    value: info.userType,
  },
  {
    title: 'جنسیت',
    icon: IconTypes.Edit,
    value: info.gender,
  },
  {
    title: 'تاریخ تولد',
    icon: IconTypes.Edit,
    value: info.birthDate,
  },
  {
    title: 'کد ملی',
    icon: IconTypes.Edit,
    value: info.IDCode,
  },
  {
    title: 'شماره شناسنامه',
    icon: IconTypes.Edit,
    value: info.NationalNumber,
  },
  {
    title: 'رمز عبور',
    icon: IconTypes.Edit,
    value: info.password,
  },
];

const addressI = (info: IShopAddress) => [
  {
    title: 'استان',
    icon: IconTypes.Edit,
    value: info.state,
  },
  {
    title: 'کد پستی',
    icon: IconTypes.Edit,
    value: info.postalCode,
  },
  {
    title: 'شهر',
    icon: IconTypes.Edit,
    value: info.city,
  },
  {
    title: 'تلفن همراه',
    icon: IconTypes.Edit,
    value: info.phone,
  },
  {
    title: 'آدرس',
    icon: IconTypes.Edit,
    value: info.address,
  },
  {
    title: 'تلفن ثابت',
    icon: IconTypes.Edit,
    value: info.tel,
  },
  {
    title: 'ایمیل',
    icon: IconTypes.Edit,
    value: info.email,
  },
  {
    title: 'وب سایت',
    icon: IconTypes.Edit,
    value: info.website,
  },
];

export { UserPanelScreen };

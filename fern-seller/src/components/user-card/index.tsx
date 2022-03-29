import React from 'react';
import Badge from '../badge';
import Icons, { IconTypes } from '../icons';
import styles from './user.module.scss';

interface Props {
  avatarUrl?: string;
  name: string;

  navigationItems: {
    icon: IconTypes;
    count?: number;
    name: string;
    link: string;
  }[];
}

export type UserCardProps = Props;

const UserCard: React.FC<UserCardProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.avatar}>
          <Icons type={IconTypes.Logo} size={'37'} color={'#d3d3d3'} />
        </div>

        <label>{props.name}</label>
      </div>
      <div className={styles.bottom}>
        {props.navigationItems.map((value, i) => (
          <div className={styles.ingredients} key={i}>
            <div className={styles.icon}>
              <div className={styles.badgeIcon}>
                <Icons type={value.icon} size={'17'} color={'#707070'} />
                <div className={styles.badge}>
                  <Badge value={value.count} maximum={99} />
                </div>
              </div>
            </div>
            <a href={value.link}>{value.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;

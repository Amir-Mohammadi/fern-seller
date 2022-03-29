import React from 'react';
import { Link } from 'react-router-dom';
import Icons, { IconTypes } from '../icons';
import styles from './menu-bar.module.scss';

interface Props {
  navigationItems: {
    onClick: Function;
    text: string;
    children: {
      text: string;
      onClick: Function;
      routeName: string;
    }[];
  }[];
  username: string;
  numberOfMessages?: number;
  numberOfOrders?: number;
  onClickLogout: () => void;
}

export type MenuBarProps = Props;

const MenuBar: React.FC<MenuBarProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.menuBX}>
        <ul className={styles.navItems}>
          <li className={styles.menuContainer}>
            <ul className={styles.menuItems}>{props.navigationItems.map(renderNavigationItems)}</ul>
          </li>
          <li className={styles.userArea}>
            <ul className={styles.profileItem}>
              <li>
                <div>
                  <Icons type={IconTypes.Order} color="#707070" size="20px" />
                </div>
              </li>
              <li>
                <div>
                  <Icons type={IconTypes.Email} color="#707070" size="20px" />
                </div>
              </li>

              <li>
                <div className={styles.profileMenu}>
                  <a>
                    <div className={styles.avatarBX}>
                      <Icons type={IconTypes.Logo} color="#D3D3D3" size={'27px'} />
                    </div>
                    <div className={styles.usernameBX}>
                      &nbsp;&nbsp;{props.username}
                      <Icons type={IconTypes.SwipeDown} color="#707070" size={'12px'} />
                    </div>
                  </a>
                  <Link to="profile">
                    <Icons type={IconTypes.Profile} color="#707070" size={'16px'} />
                    &nbsp;اطلاعات کاربری{' '}
                  </Link>
                  <Link to="profile">
                    <Icons type={IconTypes.ChangePass} color="#707070" size={'16px'} />
                    &nbsp;تغییر رمز عبور{' '}
                  </Link>
                  <Link onClick={props.onClickLogout} to={'Auth'}>
                    <Icons type={IconTypes.Exit} color="#707070" size={'16px'} />
                    &nbsp;خروج{' '}
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;

const renderNavigationItems = (
  item: {
    onClick: Function;
    text: string;
    children: {
      text: string;
      onClick: Function;
      routeName: string;
    }[];
  },
  i: number,
) => {
  return (
    <li>
      <div className={styles.itemBX}>
        <a>
          <div className={styles.item}>
            {item.text}&nbsp;&nbsp;
            <Icons type={IconTypes.SwipeDown} color="#707070" size={'12px'} />
          </div>
        </a>

        {item.children.map((child, i) => (
          <Link key={i} to={child.routeName}>
            {child.text}
          </Link>
        ))}
      </div>
    </li>
  );
};

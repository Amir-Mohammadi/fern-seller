import React from 'react';
import Add from './add';
import ArrowDown from './arrow-down';
import ChangePass from './change-password';
import Comment from './comment';
import DownSwipe from './down-swipe';
import Edit from './edit';
import Exit from './exit';
import Eye from './eye';
import Filter from './filter';
import LeftSwipe from './left-swipe';
import Logo from './logo';
import Email from './massage';
import Order from './order';
import Profile from './profile';
import Search from './search';
import Shift from './shift';
import Stars from './stars';
import SwipeDown from './swipe-down';
import Line from './vertical';
import Wrong from './wrong';

export enum Color {
  primary = '#24AFFF',
  danger = '#DB0060',
  warning = '#FF9124',
  success = '#009289',
  light = '#AAAAAA',
}

interface Props {
  color?: Color | string;
  size?: string; // samples: '12px' '1em' '1rem'
  secondColor?: Color | string;
  type?: IconTypes;
}

export enum IconTypes {
  Email,
  Order,
  Comment,
  Profile,
  Edit,
  Add,
  Search,
  Wrong,
  Filter,
  Line,
  Eye,
  Stars,
  Exit,
  Logo,
  Shift,
  ChangePass,
  SwipeDown,
  ArrowDown,
  DownSwipe,
  LeftSwipe,
}

export type IconsProps = Props;

const Icons: React.FC<IconsProps> = (props) => {
  switch (props.type) {
    case IconTypes.Email:
      return <Email {...props} />;
    case IconTypes.Order:
      return <Order {...props} />;
    case IconTypes.Comment:
      return <Comment {...props} />;
    case IconTypes.Profile:
      return <Profile {...props} />;
    case IconTypes.Edit:
      return <Edit {...props} />;
    case IconTypes.Add:
      return <Add {...props} />;
    case IconTypes.Search:
      return <Search {...props} />;
    case IconTypes.Wrong:
      return <Wrong {...props} />;
    case IconTypes.Filter:
      return <Filter {...props} />;
    case IconTypes.Line:
      return <Line {...props} />;
    case IconTypes.Eye:
      return <Eye {...props} />;
    case IconTypes.Stars:
      return <Stars {...props} />;
    case IconTypes.Logo:
      return <Logo {...props} />;
    case IconTypes.Shift:
      return <Shift {...props} />;
    case IconTypes.Exit:
      return <Exit {...props} />;
    case IconTypes.ChangePass:
      return <ChangePass {...props} />;
    case IconTypes.SwipeDown:
      return <SwipeDown {...props} />;
    case IconTypes.ArrowDown:
      return <ArrowDown {...props} />;
    case IconTypes.DownSwipe:
      return <DownSwipe {...props} />;
    case IconTypes.LeftSwipe:
      return <LeftSwipe {...props} />;

    default:
      return null;
  }
};

export default Icons;

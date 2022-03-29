import classnames from 'classnames';
import React from 'react';
import Icons, { Color, IconTypes } from '../icons';
import styles from './create-button.module.scss';

export enum ButtonTypes {
  Rounded,
  Basic,
}

interface Props {
  title?: string;
  icon?: IconTypes;
  color?: Color | string;
  onclick: Function;
  type: ButtonTypes;
  buttonClassName?: string;
  shadow?: boolean;
}

function renderButtonStyle(props: ButtonProps) {
  if (props.shadow) {
    return {
      backgroundColor: props.color,
      boxShadow: `0px 3px 15px 0px ${props.color}60`,
    };
  } else {
    return {
      backgroundColor: props.color,
    };
  }
}

function renderIconStyle(props: ButtonProps) {
  if (props.title) {
    return { marginRight: '10px' };
  } else return {};
}

export type ButtonProps = Props;
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      style={renderButtonStyle(props)}
      className={classnames({
        [props.buttonClassName!]: props.buttonClassName,
        [styles.button]: true,
        [styles.basic]: ButtonTypes.Basic === props.type,
        [styles.rounded]: ButtonTypes.Rounded === props.type,
      })}
      onClick={() => {
        props.onclick();
      }}>
      <div style={{ justifyContent: 'center' }}>
        {props.title}
        {props.icon ? (
          <span style={renderIconStyle(props)}>
            <Icons size={'0.8em'} type={props.icon}></Icons>
          </span>
        ) : null}
      </div>
    </button>
  );
};

export default Button;

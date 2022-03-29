import React from 'react';
import Icons, { IconTypes } from '../icons';
import styles from './title.module.scss';
interface Props {
  title: string;
  text?: string;
}

export type PageTitleProps = Props;

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      {props.text ? (
        <>
          <Icons type={IconTypes.Line} color={'#707070'} />
          <div className={styles.text}>{props.text}</div>
        </>
      ) : null}
    </div>
  );
};

export default PageTitle;

import React from 'react';
import Icons, { IconTypes } from '../icons';
import styles from './add.module.scss';

interface Props {
  title: string;
  onClick: (e: any) => void;
}

type AddProductProps = Props;

const AddProduct: React.FC<AddProductProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{props.title}</span>
      </div>
      <div className={styles.icon}>
        <button onClick={() => props.onClick(() => {})}>
          <Icons type={IconTypes.Add} size={'37'} color={'#FFFFFF'} />
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

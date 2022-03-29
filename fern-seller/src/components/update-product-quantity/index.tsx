import classNames from 'classnames';
import React, { useState } from 'react';
import Icons, { IconTypes } from '../icons';
import styles from './update-product-quantity.module.scss';

export interface Props {
  warehouseInventory: number;
  quantity: number;
  stuffCode: number;
  selectedColor: number;
  selectedOperation: number;
  colorsList: string[];
  action?: (target: Target, value?: any) => void;
}

export enum Target {
  CHANGE_STUFF_CODE = 'change-stuff-code',
  CHANGE_COLOR = 'change-color',
  CHANGE_OPERATION = 'change_operation',
  CHANGE_WAREHOUSE_INVENTORY = 'change_warehouse_inventory',
  SUBMIT = 'submit',
}

export enum UpdateProductType {
  Increase,
  Decrease,
}

export type UpdateProductQuantityProps = Props;

const UpdateProductQuantity: React.FC<UpdateProductQuantityProps> = (props) => {
  const [activeColor, setActiveColor] = useState(false);
  const [activeOperation, setActiveOperation] = useState(false);

  const updateProductType = ['افزایش ', 'کاهش'];

  return (
    <div className={styles.container}>
      <div className={styles.title}>به‌روزرسانی موجودی</div>
      <div className={styles.optionsBX}>
        <div className={styles.options}>
          <div className={styles.optionBD}>
            <span>کد کالا</span>
            <div className={styles.textBX}>
              <input
                className={styles.textBD}
                placeholder="کد کالا"
                value={props.stuffCode}
                onChange={({ target }) =>
                  props.action ? props.action(Target.CHANGE_STUFF_CODE, target.value) : null
                }></input>
            </div>
          </div>
        </div>

        <div className={styles.options}>
          <div className={styles.optionBD}>
            <span>رنگ</span>
            <div className={styles.dropdownBX}>
              <div
                className={classNames({
                  [styles.dropdownBD]: true,
                  [styles.dropdownActiveBD]: activeColor,
                })}
                onBlur={() => {
                  setActiveColor(false);
                }}
                tabIndex={0}>
                <div
                  onClick={() => {
                    setActiveColor(!activeColor);
                  }}>
                  <span>{props.selectedColor == -1 ? 'رنگ' : props.colorsList[props.selectedColor]}</span>

                  <Icons type={IconTypes.ArrowDown} color="#d3d3d3" size="12px" />
                </div>

                {props.colorsList.map((item, iI) => (
                  <div
                    key={iI}
                    onClick={() => {
                      props.action ? props.action(Target.CHANGE_COLOR, iI) : null;
                      setActiveColor(false);
                    }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <label></label>
          </div>
        </div>

        <div className={styles.options}>
          <div className={styles.optionBD}>
            <span>نوع تغییر موجودی</span>
            <div className={styles.dropdownBX}>
              <div
                className={classNames({
                  [styles.dropdownBD]: true,
                  [styles.dropdownActiveBD]: activeOperation,
                })}
                onBlur={() => {
                  setActiveOperation(false);
                }}
                tabIndex={0}>
                <div
                  onClick={() => {
                    setActiveOperation(!activeOperation);
                  }}>
                  <span>{props.selectedOperation == -1 ? ' عملیات' : updateProductType[props.selectedOperation]}</span>

                  <Icons type={IconTypes.ArrowDown} color="#d3d3d3" size="12px" />
                </div>

                {updateProductType.map((item, iI) => (
                  <div
                    key={iI}
                    onClick={() => {
                      props.action ? props.action(Target.CHANGE_OPERATION, iI) : null;
                      setActiveOperation(false);
                    }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <label></label>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.warehouseBX}>
            <div className={styles.optionBD}>
              <span>تعداد تغییر موجودی </span>
              <div className={styles.textBX}>
                <input
                  className={styles.textBD}
                  placeholder="تعداد"
                  value={props.quantity}
                  onChange={({ target }) =>
                    props.action ? props.action(Target.CHANGE_WAREHOUSE_INVENTORY, target.value) : null
                  }></input>
              </div>
            </div>
            <span className={styles.warehouseTXT}>موجودی انبار: {props.warehouseInventory}</span>
          </div>
        </div>

        <div className={styles.buttonBX}>
          <button
            disabled={props.quantity === 0 || props.selectedColor === -1 || props.selectedOperation === -1}
            className={classNames({
              [styles.deactiveButton]:
                props.quantity === 0 || props.selectedColor === -1 || props.selectedOperation === -1,
            })}
            onClick={() => {
              props.action ? props.action(Target.SUBMIT) : null;
            }}>
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductQuantity;

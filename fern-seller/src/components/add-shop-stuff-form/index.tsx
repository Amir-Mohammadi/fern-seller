import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './add-shop-stuff-form.module.scss';

interface props {
  onCloseForm: () => void;
  maxPrice: number;
  minPrice: number;
  onAddShopStuff: (price: number) => void;
  isLoading?: boolean;
}

export type AddShopStuffFormProps = props;

const AddShopStuffForm: React.FC<AddShopStuffFormProps> = (props) => {
  let navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste',
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  const [validPrice, setValidPrice] = useState<boolean>(false);
  const [priceInString, setpriceInString] = useState('0');
  const [price, setPrice] = useState<number>(0);

  const onKeyDownPrice = (e) => {
    if (
      navigationKeys.indexOf(e.key) > -1 ||
      (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
      (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
      (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
      (e.key === 'x' && e.metaKey === true) ||
      e.key === '.' // Allow: Cmd+X (Mac)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };
  const priceInputHandler = (e) => {
    var number = e.target.value.replace(/,/g, '');
    if (number < props.minPrice || number > props.maxPrice) {
      setValidPrice(false);
    } else {
      setValidPrice(true);
    }
    setPrice(number);
    setpriceInString(number.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };
  const resetShopStuffForm = () => {
    setpriceInString('');
    setPrice(0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.formHD}>
          <span>ثبت فروش کالا</span>
          <button
            onClick={() => {
              props.onCloseForm();
              resetShopStuffForm();
            }}>
            <FontAwesomeIcon icon={faTimes} color={'#db0060'} />
          </button>
        </div>
        <div className={styles.formBD}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <span>قیمت</span>
              <input
                type="text"
                value={priceInString}
                onKeyDown={(e) => onKeyDownPrice(e)}
                onChange={priceInputHandler}
                onPaste={priceInputHandler}
                onDrop={priceInputHandler}
              />
            </div>
          </div>
          {!validPrice && (
            <div>
              <span style={{ color: 'red', fontSize: 'small', paddingBottom: '10px' }}>
                *قیمت وارده شده خارج از رنج می باشد{' '}
              </span>
            </div>
          )}
          <div>
            <span>رنج قیمت:&nbsp;</span>
            <span>
              {props.minPrice.toLocaleString('fa')} تا {props.maxPrice.toLocaleString('fa')}
            </span>
            <span>تومان</span>
          </div>
        </div>

        <div className={styles.formFT}>
          <button
            className={styles.success}
            onClick={() => {
              if (validPrice) {
                props.onAddShopStuff(price);
                if (props.isLoading == false) {
                  props.onCloseForm();
                  resetShopStuffForm();
                }
              }
            }}>
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddShopStuffForm;

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './user-password-form.module.scss';

interface IPasswordChangeFrom {
  oldPassword: string;
  newPassword: string;
  passwordRepeat: string;
}

interface Props {
  onConfirm: (newPassword: IPasswordChangeFrom) => void;
  formTitle: string;
}

export type UserPasswordProps = Props;

const UserPassword: React.FC<UserPasswordProps> = (props) => {
  const [input, setInput] = useState<IPasswordChangeFrom>({ oldPassword: '', newPassword: '', passwordRepeat: '' });
  return (
    <>
      <div className={styles.editModal}>
        <div className={styles.form}>
          <div className={styles.formHD}>
            <span>{props.formTitle}</span>
            <button onClick={() => {}}>
              <FontAwesomeIcon icon={faTimes} color={'#db0060'} />
            </button>
          </div>
          <div className={styles.formBD}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <span>رمز عبور فعلی</span>
                <input
                  type="text"
                  value={input.oldPassword}
                  onChange={({ target }) => {
                    const tempInput = { ...input };
                    tempInput.oldPassword = target.value;
                    setInput(tempInput);
                  }}
                />
                <span>رمز عبور جدید</span>
                <input
                  type="text"
                  value={input.newPassword}
                  onChange={({ target }) => {
                    const tempInput = { ...input };
                    tempInput.newPassword = target.value;
                    setInput(tempInput);
                  }}
                />
                <span> تکرار رمز عبور جدید</span>
                <input
                  type="text"
                  value={input.passwordRepeat}
                  onChange={({ target }) => {
                    const tempInput = { ...input };
                    tempInput.passwordRepeat = target.value;
                    setInput(tempInput);
                  }}
                />
              </div>
            </div>
            <div className={styles.formFT}>
              <button
                className={styles.success}
                onClick={() => {
                  props.onConfirm(input);
                }}>
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPassword;

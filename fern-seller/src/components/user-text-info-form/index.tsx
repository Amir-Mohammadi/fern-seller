import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './user-text-info-form.module.scss';
interface Props {
  onConfirm: (newValue: string) => void;
  formTitle: string;
  title: string;
}
export type UserTextInfoProps = Props;

const UserTextInfo: React.FC<UserTextInfoProps> = (props) => {
  const [input, setInput] = useState<string>('');
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
                <span>{props.title}</span>
                <input
                  type="text"
                  value={input}
                  onChange={({ target }) => {
                    setInput(target.value);
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

export default UserTextInfo;

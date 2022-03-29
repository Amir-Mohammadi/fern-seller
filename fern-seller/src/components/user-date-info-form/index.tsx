import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'jalali-moment';
import { useState } from 'react';
import DatePicker from '../datepicker-form';
import styles from './user-date-info-form.module.scss';
interface IDateChangeFrom {
  year: number;
  month: number;
  day: number;
}

interface Props {
  onConfirm: (newDate: IDateChangeFrom) => void;
  formTitle: string;
}

export type UserDateInfoProps = Props;

const UserDateInfo: React.FC<UserDateInfoProps> = (props) => {
  const [day, setDay] = useState<number>(+moment().locale('fa').format('DD'));
  const [month, setMonth] = useState<number>(+moment().locale('fa').format('MM'));
  const [year, setYear] = useState<number>(moment().jYear());
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
              <DatePicker
                day={day}
                month={month}
                year={year}
                changeDay={setDay}
                changeMonth={setMonth}
                changeYear={setYear}
                onSubmitChange={() => props.onConfirm({ day: day, month: month, year: year })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDateInfo;

import classNames from 'classnames';
import React, { useState } from 'react';
import Icons, { IconTypes } from '../icons';
import styles from './message-dataset.module.scss';

export interface Message {
  date: string;
  time: string;
  text: string;
  important: boolean;
}
interface Props {
  showCount?: {
    selectedIndex: number;
    counts: number[];
    onChange: (i: number) => void;
  };
  data: Message[];
}

export type MessageDatasetProps = Props;

const MessageDataset: React.FC<MessageDatasetProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <label>پیام ها</label>
        </div>
        <div>
          <div>
            تعداد نتایج: &nbsp;<span>{props.data.length} مورد</span>
          </div>
          &nbsp; &nbsp;|&nbsp; &nbsp;
          <div>
            تعداد نمایش: <div>{renderDropdownMenus(props.showCount)}</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>{props.data.map(renderMessages)}</div>
    </div>
  );
};

export default MessageDataset;

const renderMessages = (message: { date: string; time: string; text: string; important: boolean }, i: number) => (
  <div className={styles.messageBX}>
    <div className={styles.icon}>
      <Icons type={IconTypes.Email} size="16px" color="#AAAAAA" />
    </div>
    <div className={styles.messageBD}>
      {message.important ? <label>مهم</label> : null}

      <p>{message.text}</p>
    </div>
    <div className={styles.dateBX}>
      <span>{message.date}</span>
      <span>{message.time}</span>
    </div>
  </div>
);

const renderDropdownMenus = (dropdownMenu?: {
  selectedIndex: number;
  counts: number[];
  onChange: (i: number) => void;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.optionBD}>
      <div className={styles.dropdownBX}>
        <div
          className={classNames({
            [styles.dropdownBD]: true,
            [styles.dropdownActiveBD]: active,
          })}
          onBlur={() => {
            setActive(false);
          }}
          tabIndex={0}>
          <div
            onClick={() => {
              setActive(!active);
            }}>
            <span>{dropdownMenu?.counts[dropdownMenu.selectedIndex]}</span>

            <Icons type={IconTypes.SwipeDown} color="#d3d3d3" size="8px" />
          </div>

          {dropdownMenu?.counts.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                dropdownMenu.onChange(i);
                setActive(false);
              }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

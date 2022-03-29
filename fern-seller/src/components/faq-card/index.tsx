import React from 'react';
import Icons, { IconTypes } from '../icons';
import styles from './faq.module.scss';

interface Props {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
  onClick: (index: any) => any;
  selectedIndex: number;
}

export type FaqCardProps = Props;

const FaqCard: React.FC<FaqCardProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>{props.title}</div>
      <div className={styles.bottom}>
        {props.questions.map((value, i) => (
          <>
            <div className={styles.accordion} onClick={() => props.onClick(i == props.selectedIndex ? -1 : i)}>
              <span>{value.question}</span>
              <div className={styles.icon}>
                <Icons type={IconTypes.Shift} color={'#ffffff'} size={'11'} />
              </div>
            </div>
            {i == props.selectedIndex ? (
              <div className={styles.panel}>
                <p> {value.answer}</p>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default FaqCard;

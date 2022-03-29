import React, { useState } from 'react';
import FaqCard from '../../faq-card';
import { IconTypes } from '../../icons';
import PageTitle from '../../page-title';
import UserCard from '../../user-card';
import UserPerformance from '../../user-performance';
import styles from './question-list.module.scss';

interface Props {
  questions: { question: string; answer: string }[];
  pageTitle: string;
}

export type QuestionListScreenProps = Props;

const QuestionListScreen: React.FC<QuestionListScreenProps> = (props) => {
  const [state, setState] = useState(-1);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.sideBX}>
            <div className={styles.box}>
              <UserCard
                name={'سید حامد محمدی'}
                navigationItems={[
                  { icon: IconTypes.Comment, name: 'پرسش ها', link: '#' },
                  { icon: IconTypes.Email, name: 'پیام ها', link: '#' },
                  { icon: IconTypes.Profile, name: 'پروفایل', link: '#' },
                ]}
              />
            </div>
            <div className={styles.box}>
              <UserPerformance overallRate={4} canceledValue={25} delayedValue={31} refereedValue={70} />
            </div>
          </div>
          <div className={styles.mainBX}>
            <PageTitle title={props.pageTitle} />

            <div className={styles.box}>
              <FaqCard
                onClick={(index) => {
                  setState(index);
                }}
                selectedIndex={state}
                title={props.pageTitle}
                questions={props.questions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QuestionListScreen };

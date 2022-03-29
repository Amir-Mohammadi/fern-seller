import React from 'react';
import { IconTypes } from '../../icons';
import Message, { Message as MessageType } from '../../message';
import PageTitle from '../../page-title';
import SearchFilter from '../../search-and-filter';
import UserCard from '../../user-card';
import UserPerformance from '../../user-performance';
import styles from './message-list.module.scss';

interface Props {
  message: {
    value: string;
    onChange: (value: string) => any;
  };

  readed: {
    list: Array<string>;
    index: number;
    onChange: (index: number) => any;
  };

  priority: {
    list: Array<string>;
    index: number;
    onChange: (index: number) => any;
  };

  search: Function;
  messages: Array<MessageType>;
}
export type MessageListScreenProps = Props;

const MessageListScreen: React.FC<MessageListScreenProps> = (props) => {
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
            <PageTitle title="پیام‌ها" />
            <div className={styles.box}>
              <div className={styles.row}>
                <SearchFilter
                  items={[
                    {
                      type: 'input',
                      input: {
                        placeHolder: 'متن پیام',
                        value: props.message.value,
                        onChange: props.message.onChange,
                        slice: 1,
                      },
                    },
                    {
                      type: 'dropdown',
                      dropdown: {
                        contents: props.readed.list,
                        onChange: props.readed.onChange,
                        placeHolder: 'خوانده شده',
                        selectedIndex: props.readed.index,
                      },
                    },
                    {
                      type: 'dropdown',
                      dropdown: {
                        contents: props.priority.list,
                        onChange: props.priority.onChange,
                        placeHolder: 'انتخاب کنید',
                        selectedIndex: props.priority.index,
                        title: 'ضرورت پیام',
                      },
                    },
                    {
                      type: 'button',
                      button: {
                        title: 'جستجو',
                        onClick: props.search,
                        icon: IconTypes.Search,
                      },
                    },
                  ]}
                  filter={{ filters: [] }} // No filter on this page
                />
              </div>
            </div>
            <div className={styles.box}>
              <Message
                showCount={{
                  counts: [5, 10, 15, 20],
                  onChange: () => {},
                  selectedIndex: 0,
                }}
                data={props.messages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MessageListScreen };

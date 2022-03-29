import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { MessageListScreen } from '../components/screens/message-list';
import { InjectedMessageStore } from '../stores/message-store';

export type MessageProps = InjectedMessageStore;

@inject('messageStore')
@observer
export class MessageListContainer extends Component<MessageProps> {
  messageStore = this.props.messageStore;

  render(): JSX.Element {
    return (
      <MessageListScreen
        readed={{
          index: this.messageStore.readedIndex,
          list: this.messageStore.readedList,
          onChange: (index: number) => this.messageStore.readedOnChange(index),
        }}
        message={{
          onChange: (value: string) => {
            this.messageStore.messageOnChange(value);
          },
          value: this.messageStore.messageValue,
        }}
        messages={this.messageStore.messages}
        priority={{
          index: this.messageStore.priorityIndex,
          list: this.messageStore.priorityList,
          onChange: (index: number) => {
            this.messageStore.priorityOnChange(index);
          },
        }}
        search={() => {
          this.messageStore.search();
        }}
      />
    );
  }
}

export default MessageListContainer as any;

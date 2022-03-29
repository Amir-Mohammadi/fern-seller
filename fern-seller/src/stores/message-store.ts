import { Message } from '../components/message';

class MessageStore {
  search() {
    throw new Error('Method not implemented.');
  }
  priorityOnChange(index: number) {
    throw new Error('Method not implemented.');
  }
  messageValue: string = '';
  messages: Array<Message> = [];
  priorityIndex: number = -1;
  priorityList: Array<string> = [];
  messageOnChange(value: string) {
    throw new Error('Method not implemented.');
  }
  readedOnChange(index: number): any {
    throw new Error('Method not implemented.');
  }
  readedIndex: number = -1;
  readedList: Array<string> = [];
}

export interface InjectedMessageStore {
  messageStore: MessageStore;
}

export { MessageStore };

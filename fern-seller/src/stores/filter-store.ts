import { observable } from 'mobx';
import { FilterNode } from '../components/filter-bar';

class FilterStore {
  @observable orderCode: string = '';
  setOrderCode(v: string): any {
    throw new Error('Method not implemented.');
  }
  @observable searchFilters: Array<FilterNode> = [];
  searchDepositList(): any {
    throw new Error('Method not implemented.');
  }
  setSelectedDepositedData(i: number) {
    throw new Error('Method not implemented.');
  }
  @observable depositDateIndex: number = -1;
  @observable depositDateItems: Array<string> = [];
}

export interface InjectedFilterStore {
  filterStore: FilterStore;
}

export { FilterStore };

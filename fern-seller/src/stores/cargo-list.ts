import { action, observable } from 'mobx';
import { TableRow } from '../components/table';
import { CARGO_LIST } from '../utils/mukc';

class CargoListStore {
  @observable list: TableRow[][] = [];
  @action getList = () => {
    this.list = [...CARGO_LIST];
  };

  @observable count = 0;

  @observable showCount = {
    counts: [1, 2, 3, 4, 5],
    selectedIndex: 0,
  };

  @action showCountOnChange = (index: number) => {
    const temp = this.showCount;
    temp.selectedIndex = index;
    this.showCount = temp;
  };
  @observable orderCode = '';

  @observable sendDate: { list: string[]; selected: number } = {
    list: ['99/01/01', '99/01/02', '99/01/03'],
    selected: -1,
  };

  @observable sendTime: { list: string[]; selected: number } = {
    list: ['12:12:12', '12:12:12', '12:12:12'],
    selected: -1,
  };

  @observable depot = '';

  @observable search = '';

  @observable shippingName = '';

  @action handleOnChange = (
    target: 'orderCode' | 'sendDate' | 'search' | 'sendTime' | 'depot' | 'shippingName',
    value: string | number,
  ) => {
    let temp: { list: string[]; selected: number };
    switch (target) {
      case 'orderCode':
        this.orderCode = value + '';
        break;

      case 'sendDate':
        (temp = { ...this.sendDate }), (temp.selected = +value);

        this.sendDate = temp;
        break;

      case 'sendTime':
        (temp = { ...this.sendTime }), (temp.selected = +value);

        this.sendTime = temp;
        break;

      case 'search':
        this.search = value + '';
        break;

      case 'depot':
        this.depot = value + '';
        break;

      case 'shippingName':
        this.shippingName = value + '';
        break;
    }
  };
}

export interface InjectedCargoListStore {
  cargoListStore: CargoListStore;
}
export { CargoListStore };

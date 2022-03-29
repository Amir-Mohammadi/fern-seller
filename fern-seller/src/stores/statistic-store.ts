import { TimeRangeType } from '../utils/range-label-generator';

class StatisticStore {
  canceledValue: number = -1;
  delayedValue: number = -1;
  refereedValue: number = -1;
  OverallRate: number = -1;
  setStatisticRange(r: TimeRangeType): void {
    throw new Error('Method not implemented.');
  }
  saleStatistics: Array<number> = [];
  range: TimeRangeType = TimeRangeType.day;
}

export interface InjectedStatisticStore {
  statisticStore: StatisticStore;
}

export { StatisticStore };

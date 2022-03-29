import { StatisticStore, UserInfoStore } from './store';
declare global {
  namespace NodeJS {
    interface Global {
      __stores__: {
        user: UserInfoStore;
        statistic: StatisticStore;
      };
    }
  }
}

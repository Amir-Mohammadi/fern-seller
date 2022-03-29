import {
  AuthStore,
  CargoListStore,
  CargoStore,
  CustomerOrdersStore,
  DashboardStore,
  FilterStore,
  FinancialStore,
  InjectedAuthStore,
  InjectedCargoListStore,
  InjectedCargoStore,
  InjectedDashboardStore,
  InjectedFilterStore,
  InjectedFinancialStore,
  InjectedMessageStore,
  InjectedProductManagementStore,
  InjectedProductStore,
  InjectedQuestionAndAnswer,
  InjectedShopInfoStore,
  InjectedStatisticStore,
  MessageStore,
  ProductManagementStore,
  ProductStore,
  QuestionAndAnswerStore,
  StatisticStore,
  UserInfoStore,
} from '..';
import { InjectedCustomerOrdersStore } from '../customer-orders-store';
import { HeaderStore, InjectedHeaderStore } from '../header-store';

export type Stores = InjectedCargoListStore &
  InjectedCargoStore &
  InjectedFilterStore &
  InjectedFinancialStore &
  InjectedMessageStore &
  InjectedProductManagementStore &
  InjectedProductStore &
  InjectedQuestionAndAnswer &
  InjectedStatisticStore &
  InjectedShopInfoStore &
  InjectedAuthStore &
  InjectedDashboardStore &
  InjectedCustomerOrdersStore &
  InjectedHeaderStore;

export let StoresInstance: Stores | undefined = undefined;

export const initializeStores = () => {
  const stores: Stores = StoresInstance ?? {
    shopProfileStore: new UserInfoStore(),
    statisticStore: new StatisticStore(),
    financialStore: new FinancialStore(),
    filterStore: new FilterStore(),
    productStore: new ProductStore(),
    questionAndAnswerStore: new QuestionAndAnswerStore(),
    messageStore: new MessageStore(),
    productManagementStore: new ProductManagementStore(),
    cargoListStore: new CargoListStore(),
    cargoStore: new CargoStore(),
    authStore: new AuthStore(),
    dashboardStore: new DashboardStore(),
    customerOrdersStore: new CustomerOrdersStore(),
    headerStore: new HeaderStore(),
  };

  if (StoresInstance == undefined) {
    StoresInstance = stores;
  }

  return stores;
};

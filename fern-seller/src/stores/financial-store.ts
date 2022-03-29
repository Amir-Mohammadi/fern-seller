import { action, observable } from 'mobx';
import { FinancialTransaction } from '../components/screens/deposit-list';
import ShopService, { TransactionListSearchParameters } from '../services/shop.service';

export enum FinancialStoreTargets {
  FETCH_ACCOUNT_INFO,
  FETCH_TRANSACTION_LIST,
}

class FinancialStore {
  private _shopService = new ShopService();
  @observable accountOwner: string = '';
  @observable ibanNumber: string = '';
  @observable transactionList: FinancialTransaction[] = [];
  @observable transactionDateList: Map<string, Date> = new Map();

  @action private async initializePage() {
    const account = await this._shopService.getShopFinancialAccount();

    this.accountOwner = account.ownerName;
    this.ibanNumber = account.no;
  }

  @action private async fetchTransactionList(options?: TransactionListSearchParameters): Promise<void> {
    const transactionList = await this._shopService.getShopFinancialTransactions(options);

    this.transactionList = transactionList.map<FinancialTransaction>((transaction) => {
      this._addDateToTransactionDateList(transaction.createdAt);

      return {
        amount: transaction.amount + '',
        date: new Date(transaction.createdAt),
        description: transaction.description,
        type: transaction.transactionType,
      };
    });
  }

  @action private async _addDateToTransactionDateList(date: string) {
    this.transactionDateList.set(date, new Date(date)); // to prevent the duplicate date value
  }

  @action public handleActions = (target: FinancialStoreTargets, value?: any) => {
    switch (target) {
      case FinancialStoreTargets.FETCH_ACCOUNT_INFO:
        this.initializePage();
        break;
      case FinancialStoreTargets.FETCH_TRANSACTION_LIST:
        this.fetchTransactionList(value as TransactionListSearchParameters);
        break;
      default:
        break;
    }
  };
}
export interface InjectedFinancialStore {
  financialStore: FinancialStore;
}

export { FinancialStore };

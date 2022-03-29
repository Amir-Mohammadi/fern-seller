import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { DepositListScreen } from '../components/screens/deposit-list';
import { TransactionListSearchParameters } from '../services/shop.service';
import { FinancialStoreTargets, InjectedFinancialStore } from '../stores';

export type DepositListContainerProps = InjectedFinancialStore;

@inject('financialStore')
@observer
class DepositListContainer extends Component<DepositListContainerProps> {
  componentDidMount() {
    this.props.financialStore.handleActions(FinancialStoreTargets.FETCH_TRANSACTION_LIST);
  }

  render(): JSX.Element {
    return (
      <DepositListScreen
        transactionDateList={Array.from(this.props.financialStore.transactionDateList.values())}
        financialTransactions={this.props.financialStore.transactionList}
        onClickSearchButton={(selectedTransactionDate) => {
          this.props.financialStore.handleActions(FinancialStoreTargets.FETCH_TRANSACTION_LIST, {
            createAt: selectedTransactionDate,
          } as TransactionListSearchParameters);
        }}
      />
    );
  }
}

export default DepositListContainer as any;

import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { BankInfoScreen } from '../components/screens/bank-info';
import { FinancialStoreTargets, InjectedFinancialStore, InjectedShopInfoStore } from '../stores';

export type BankInfoContainerProps = InjectedFinancialStore & InjectedShopInfoStore;

@inject('financialStore')
@inject('shopProfileStore')
@observer
class BankInfoContainer extends Component<BankInfoContainerProps> {
  async componentDidMount() {
    this.props.financialStore.handleActions(FinancialStoreTargets.FETCH_ACCOUNT_INFO);
  }

  render(): JSX.Element {
    return (
      <BankInfoScreen
        accountInfo={{
          accountOwner: this.props.financialStore.accountOwner,
          ibanNumber: this.props.financialStore.ibanNumber,
        }}
      />
    );
  }
}

export default BankInfoContainer as any;

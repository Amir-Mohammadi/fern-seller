import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Header from '../components/header';
import { InjectedAuthStore } from '../stores';
import { HeaderStoreActions, InjectedHeaderStore } from '../stores/header-store';

export type HeaderContainerProps = InjectedHeaderStore & InjectedAuthStore;

@inject('headerStore')
@inject('authStore')
@observer
export class HeaderContainer extends Component<HeaderContainerProps> {
  componentDidMount() {
    this.props.headerStore.handleAction(HeaderStoreActions.ON_FORM_LOAD);
  }

  render(): JSX.Element {
    return (
      <Header
        onClickLogout={() => {
          this.props.authStore.logout();
        }}
        username={this.props.headerStore.shopName}
      />
    );
  }
}

export default HeaderContainer as any;

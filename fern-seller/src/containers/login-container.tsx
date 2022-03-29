import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { LoginScreen } from '../components/screens/login';
import { InjectedAuthStore } from '../stores';

export type LoginContainerProps = InjectedAuthStore;

@inject('authStore')
@observer
class LoginContainer extends Component<LoginContainerProps> {
  render() {
    return <LoginScreen action={(target, value) => this.props.authStore.handleActions(target, value)} />;
  }
}

export default LoginContainer as any;

import { inject, observer } from 'mobx-react';
import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { RefereedListScreen } from './containers/;
import AddProductContainer from './containers/add-product-container';
import BankInfoContainer from './containers/bank-info-container';
import CargoListContainer from './containers/cargo-list';
import DashboardContainer from './containers/dashboard-container';
import DepositListContainer from './containers/deposit-list-container';
import FAQContainer from './containers/faq-container';
import HeaderContainer from './containers/header-container';
import LoginContainer from './containers/login-container';
import MessageListContainer from './containers/message-container';
import OrderListContainer from './containers/order-list-container';
import ProductManagementContainer from './containers/product-management';
import QuestionListContainer from './containers/question-container';
import ShopPanelContainer from './containers/shop-panel-container';
import StatisticContainer from './containers/statistic-container';
import { InjectedAuthStore } from './stores';

export type LoginContainerProps = InjectedAuthStore;

@inject('authStore')
@observer
class Router extends Component<LoginContainerProps> {
  constructor(props) {
    super(props);
    this.props.authStore.checkUserLoginState();
  }

  isLoggedIn = false;

  render() {
    if (this.props.authStore.isLoggedIn) {
      return (
        <div style={{ flexDirection: 'column' }}>
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={DashboardContainer} />
            <Route path="/add-product" component={AddProductContainer} />
            <Route path="/bank-info" component={BankInfoContainer} />
            <Route path="/cargo-list" component={CargoListContainer} />
            <Route path="/deposit-list" component={DepositListContainer} />
            <Route path="/message-list" component={MessageListContainer} />
            <Route path="/product-management" component={ProductManagementContainer} />
            <Route path="/question-list" component={QuestionListContainer} />
            {/* <Route path="/refereed-list" component={RefereedListScreen} /> */}
            <Route path="/statistic" component={StatisticContainer} />
            <Route path="/profile" component={ShopPanelContainer} />
            <Route path="/order-list" component={OrderListContainer} />
            <Route path="/frequently-asked-questions" component={FAQContainer} />
            <Redirect to="/" />
          </Switch>
        </div>
      );
    } else {
      return (
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Redirect to="/login" />
        </Switch>
      );
    }
  }
}
export default Router as any;

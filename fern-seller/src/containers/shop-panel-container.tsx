import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { UserPanelScreen } from '../components/screens/shop-profile';
import { InjectedShopInfoStore, ShopInfoStoreTargets } from '../stores/shop-profile-store';
import { InjectedStatisticStore } from '../stores/statistic-store';

type UserPanelContainerStores = InjectedShopInfoStore & InjectedStatisticStore;

@inject('shopProfileStore')
@inject('statisticStore')
@observer
export class ShopPanelContainer extends Component<UserPanelContainerStores> {
  componentDidMount() {
    this.props.shopProfileStore.handleAction(ShopInfoStoreTargets.LOAD_STORE);
  }

  render(): JSX.Element {
    return (
      <UserPanelScreen
        contract={{
          code: this.props.shopProfileStore.contractCode,
          createDate: this.props.shopProfileStore.contractCreatDate,
          expireDate: this.props.shopProfileStore.contractExpireDate,
          fileName: this.props.shopProfileStore.contractFileName,
        }}
        shopOwnerGeneralInfo={{
          IDCode: this.props.shopProfileStore.shopOwnerIDCode,
          NationalNumber: this.props.shopProfileStore.shopOwnerNationalCode,
          birthDate: this.props.shopProfileStore.shopOwnerBirthDate,
          firstName: this.props.shopProfileStore.shopOwnerFirstName,
          gender: this.props.shopProfileStore.shopOwnerGender,
          lastName: this.props.shopProfileStore.shopOwnerLastName,
          password: this.props.shopProfileStore.shopOwnerPassword,
          userId: this.props.shopProfileStore.shopOwnerId,
          userType: this.props.shopProfileStore.shopOwnerType,
        }}
        shopOwnerAddress={{
          city: this.props.shopProfileStore.shopCity,
          email: this.props.shopProfileStore.shopEmail,
          phone: this.props.shopProfileStore.shopOwnerPhone,
          postalCode: this.props.shopProfileStore.shopPostalCode,
          state: this.props.shopProfileStore.shopProvince,
          address: this.props.shopProfileStore.shopAddress,
          tel: this.props.shopProfileStore.shopTelephone,
          website: this.props.shopProfileStore.shopWebsite,
        }}
        userPerformance={{
          canceledValue: this.props.statisticStore.canceledValue,
          delayedValue: this.props.statisticStore.delayedValue,
          refereedValue: this.props.statisticStore.refereedValue,
          overallRate: this.props.statisticStore.OverallRate,
        }}
        userName={this.props.shopProfileStore.shopOwnerFirstName}
      />
    );
  }
}

export default ShopPanelContainer as any;

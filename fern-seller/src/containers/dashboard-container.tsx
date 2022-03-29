import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { DashboardScreen } from '../components/screens/dashboard';
import { InjectedDashboardStore } from '../stores';

export type DashboardProps = InjectedDashboardStore;

@inject('dashboardStore')
@observer
export class DashboardContainer extends Component<DashboardProps> {
  render() {
    console.log(this.props.dashboardStore);

    return (
      <DashboardScreen
        customerOrders={this.props.dashboardStore.customerOrders}
        staticInfo={this.props.dashboardStore.statisticsInformation}
        action={this.props.dashboardStore.handleActions}
        updateProductQuantity={{
          warehouseInventory: this.props.dashboardStore.warehouseInventory,
          selectedColor: this.props.dashboardStore.selectedColor,
          selectedOperation: this.props.dashboardStore.selectedOperation,
          colorsList: this.props.dashboardStore.colorsList,
          stuffCode: this.props.dashboardStore.stuffCode,
          quantity: this.props.dashboardStore.quantity,
        }}
      />
    );
  }
}

export default DashboardContainer as any;

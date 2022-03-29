import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { CargoListScreen } from '../components/screens/cargo-list';
import { InjectedCargoListStore } from '../stores/cargo-list';

export type CargoListContainerProps = InjectedCargoListStore;

@inject('cargoListStore')
@observer
class CargoListContainer extends Component<CargoListContainerProps> {
  componentDidMount() {
    this.props.cargoListStore.getList();
  }

  render(): JSX.Element {
    return (
      <CargoListScreen
        filterType={{
          orderCode: {
            value: this.props.cargoListStore.orderCode,
            onSubmit: () => {},
          },
          depot: { value: this.props.cargoListStore.depot, onSubmit: () => {} },
          search: { value: this.props.cargoListStore.search, submit: () => {} },
          sendDate: this.props.cargoListStore.sendDate,
          sendTime: this.props.cargoListStore.sendTime,
          shippingName: {
            value: this.props.cargoListStore.shippingName,
            onSubmit: () => {},
          },
          onChange: this.props.cargoListStore.handleOnChange,
        }}
        list={{
          showCount: {
            counts: this.props.cargoListStore.showCount.counts,
            onChange: (i) => this.props.cargoListStore.showCountOnChange(i),
            selectedIndex: this.props.cargoListStore.showCount.selectedIndex,
          },
          data: {
            headers: ['ردیف', ' شماره سفارش', 'تاریخ', ' ساعت ارسال', ' انبار', 'مشخصات باربری', 'جزییات محموله'],
            rows: this.props.cargoListStore.list,
          },
        }}
      />
    );
  }
}

export default CargoListContainer as any;

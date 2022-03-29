import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { IconTypes } from '../components/icons';
import { OrderListScreen } from '../components/screens/order-list';
import { InjectedCustomerOrdersStore } from '../stores/customer-orders-store';

export type OrderListContainerProps = InjectedCustomerOrdersStore;

@inject('customerOrdersStore')
@observer
class OrderListContainer extends Component<OrderListContainerProps> {
  render(): JSX.Element {
    return (
      <OrderListScreen
        filterType={{
          category: this.props.customerOrdersStore.category,
          brand: this.props.customerOrdersStore.brand,
          selectedBrand: this.props.customerOrdersStore.selectedBrand,
          selectedCategory: this.props.customerOrdersStore.selectedCategory,
          search: {
            value: this.props.customerOrdersStore.search,
          },
        }}
        list={{
          button: {
            onClick: () => {},
            title: 'ایجاد محموله',
          },
          showCount: {
            counts: [5, 10, 15, 20],
            onChange: () => {},
            selectedIndex: 0,
          },
          data: {
            headers: [
              'ردیف',
              ' عنوان و کد کالا ',
              'گروه کالایی',
              ' برند کالا	',
              ' رنگ',
              'نام و نام خانوادگی خریدار',
              'آدرس',
              'کدپستی',
              'شماره تماس',
              'جزئیات سفارش',
            ],
            rows: this.props.customerOrdersStore.list,
            icon: [{ icon: IconTypes.Eye, size: '18px' }],
          },
        }}
        action={this.props.customerOrdersStore.handleActions}
      />
    );
  }
}

export default OrderListContainer as any;

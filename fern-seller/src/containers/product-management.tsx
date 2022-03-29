import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { ProductManagementScreen } from '../components/screens/product-management';
import { InjectedProductManagementStore } from '../stores';

export type ProductManagementContainerProps = InjectedProductManagementStore;

@inject('productManagementStore')
@observer
class ProductManagementContainer extends Component<ProductManagementContainerProps> {
  render() {
    return (
      <ProductManagementScreen
        filterType={{
          category: this.props.productManagementStore.category,
          brand: this.props.productManagementStore.brand,
          selectedBrand: this.props.productManagementStore.selectedBrand,
          selectedCategory: this.props.productManagementStore.selectedCategory,
          search: {
            value: this.props.productManagementStore.search,
          },
        }}
        list={{
          button: { title: 'ایجاد کالای جدید', onClick: () => {} },
          data: {
            headers: ['ردیف', ' عنوان و کد کالا ', 'گروه کالایی', ' برند کالا	', 'کانال فروش', 'وضعیت', 'تعداد تنوع'],
            rows: this.props.productManagementStore.list,
          },
        }}
        action={this.props.productManagementStore.handleActions}
      />
    );
  }
}

export default ProductManagementContainer as any;

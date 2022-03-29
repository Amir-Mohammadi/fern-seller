import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { AddProductScreen } from '../components/screens/add-product';
import { InjectedProductStore } from '../stores/product-store';

export type AddProductProps = InjectedProductStore;

@inject('productStore')
@observer
class AddProductContainer extends Component<AddProductProps> {
  componentDidMount() {}

  render(): JSX.Element {
    return (
      <AddProductScreen
        filter={{
          searchInputValue: this.props.productStore.searchInputValue,
          filters: this.props.productStore.filters,
          searchResults: this.props.productStore.searchResult,
        }}
        productCategoryTree={{
          treeNodes: this.props.productStore.treeNodes,
          toggleFolded: (node) => this.props.productStore.toggleFolded(node),
        }}
        brands={{
          brandList: this.props.productStore.brandList,
        }}
        isLoadingAddShopStuff={this.props.productStore.isLoadingAddShopStuff}
        selectedStuff={this.props.productStore.selectedStuff}
        action={this.props.productStore.handleActions}
      />
    );
  }
}

export default AddProductContainer as any;

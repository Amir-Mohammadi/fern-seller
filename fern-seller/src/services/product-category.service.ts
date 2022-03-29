import api from '../api';
import { ProductCategoryModel } from '../api/models';
import { TreeViewNodes } from '../components/tree-view';
import { IProductCategory } from '../interfaces/common';

export default class ProductCategoryService {
  async getProductCategories(): Promise<Array<IProductCategory>> {
    try {
      const productCategoryList = await api.v1.productCategory.getProductCategories();

      return this._productCategoryListAdapter(productCategoryList.data);
    } catch (error) {
      throw error;
    }
  }
  async getProductCategoriesTreeView(): Promise<TreeViewNodes> {
    const productCategoryList = await api.v1.productCategory.getProductCategories();
    try {
      const productCategoryList = await api.v1.productCategory.getProductCategories();
      return this._productCategoryTreeViewAdapter(productCategoryList.data, null);
    } catch (error) {
      throw error;
    }
  }
  private _productCategoryListAdapter(productCategoryList: Array<ProductCategoryModel>): Array<IProductCategory> {
    const productCategories: Array<IProductCategory> = [];
    productCategoryList.forEach((item) => {
      productCategories.push({
        name: item.name,
        id: item.id,
      });
    });
    return productCategories;
  }

  private _productCategoryTreeViewAdapter(
    productCategoryList: Array<ProductCategoryModel>,
    node: TreeViewNodes | null,
  ) {
    if (node == null) node = { id: 0, title: 'main', children: [], folded: true, parentId: null, uri: '' };

    var childProductCategories = productCategoryList.filter((x) => x.parent_id == (node?.id == 0 ? null : node?.id));
    childProductCategories.map((treeNode) => {
      var childNode = {
        id: treeNode.id,
        parentId: treeNode.parent_id,
        title: treeNode.name,
        children: [],
        folded: true,
        uri: '',
      };
      this._productCategoryTreeViewAdapter(productCategoryList, childNode);
      node?.children.push(childNode);
    });
    return node;
  }
}

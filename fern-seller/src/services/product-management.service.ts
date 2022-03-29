import api from '../api';
import { BrandModel, IProductListParameters, ProductCategoryModel, ShopStuffModel } from '../api/models';
import { BrandList, ProductCategoryList } from '../components/screens/product-management';
import { TableRow } from '../components/table';
import { STATIC_FILE } from '../config';

export default class ProductManagementService {
  async getProductList(params?: IProductListParameters): Promise<Array<TableRow[]>> {
    try {
      const productLists = await api.v1.shopStuff.getStuffs(params);

      return this._productListAdapter(productLists.data);
    } catch (error) {
      throw error;
    }
  }

  async getBrandList(): Promise<Array<BrandList>> {
    try {
      const brandList = await api.v1.brand.getBrands();

      return this._brandListAdapter(brandList.data);
    } catch (error) {
      throw error;
    }
  }

  async getProductCategories(): Promise<Array<ProductCategoryList>> {
    try {
      const productCategoryList = await api.v1.productCategory.getProductCategories();

      return this._productCategoryListAdapter(productCategoryList.data);
    } catch (error) {
      throw error;
    }
  }

  private _brandListAdapter = (brandList: Array<BrandModel>): Array<BrandList> => {
    const brands: Array<BrandList> = [];

    brandList.forEach((item) => {
      brands.push({
        name: item.name,
        id: item.id,
      });
    });
    return brands;
  };

  private _productCategoryListAdapter = (
    productCategoryList: Array<ProductCategoryModel>,
  ): Array<ProductCategoryList> => {
    const productCategories: Array<ProductCategoryList> = [];

    productCategoryList.forEach((item) => {
      productCategories.push({
        name: item.name,
        id: item.id,
      });
    });
    return productCategories;
  };

  private _productListAdapter = (productLists: Array<ShopStuffModel>): Array<TableRow[]> => {
    const stuffRows: Array<TableRow[]> = [];

    productLists.forEach((item) => {
      const imageUrl = STATIC_FILE(item.preview_product_image.image_id, item.preview_product_image.row_version ?? '');

      stuffRows.push([
        {
          type: 'orderItem',
          data: {
            img: imageUrl,
            title: item.product_name + '-' + item.stuff_id,
          },
        },
        {
          type: 'string',
          data: { title: item.category_name },
        },
        {
          type: 'string',
          data: { title: item.brand_name },
        },
        {
          type: 'string',
          data: { title: 'السل' },
        },
        {
          type: 'string',
          data: { title: item.status ? 'موجود' : 'ناموجود' },
        },
        {
          type: 'string',
          data: { title: item.variation_number?.toString() },
        },
      ]);
    });
    return stuffRows;
  };
}

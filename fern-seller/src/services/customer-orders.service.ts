import api from '../api';
import { BrandModel, CustomerOrderModel, ICustomerOrder, ProductCategoryModel } from '../api/models';
import { TableRow as orderRow } from '../components/table';
import { STATIC_FILE } from '../config';
import { IBrand, IProductCategory } from '../interfaces/common';

export default class CustomerOrdersService {
  async getCustomerOrders(params?: ICustomerOrder): Promise<Array<orderRow[]>> {
    try {
      const orders = await api.v1.customerOrders.getCustomerOrders(params);

      return this.customerOrdersListAdapter(orders.data);
    } catch (error) {
      throw error;
    }
  }
  async getBrandList(): Promise<Array<IBrand>> {
    try {
      const brandList = await api.v1.brand.getBrands();

      return this._brandListAdapter(brandList.data);
    } catch (error) {
      throw error;
    }
  }
  async getProductCategories(): Promise<Array<IProductCategory>> {
    try {
      const productCategoryList = await api.v1.productCategory.getProductCategories();

      return this._productCategoryListAdapter(productCategoryList.data);
    } catch (error) {
      throw error;
    }
  }
  private _brandListAdapter = (brandList: Array<BrandModel>): Array<IBrand> => {
    const brands: Array<IBrand> = [];

    brandList.forEach((item) => {
      brands.push({
        name: item.name,
        id: item.id,
      });
    });
    return brands;
  };

  private _productCategoryListAdapter = (productCategoryList: Array<ProductCategoryModel>): Array<IProductCategory> => {
    const productCategories: Array<IProductCategory> = [];

    productCategoryList.forEach((item) => {
      productCategories.push({
        name: item.name,
        id: item.id,
      });
    });
    return productCategories;
  };
  private customerOrdersListAdapter = (orders: Array<CustomerOrderModel>): Array<orderRow[]> => {
    const ordersList: Array<orderRow> = [];
    orders.forEach((order) => {
      ordersList.push(
        {
          type: 'orderItem',
          data: {
            title: order.product_name + ' elp_' + order.product_id,
            img: STATIC_FILE(order.preview_product_image.image_id, order.preview_product_image.row_version),
          },
        },
        {
          type: 'string',
          data: {
            title: order.product_category_name,
          },
        },
        {
          type: 'string',
          data: {
            title: order.brand_name,
          },
        },
        {
          type: 'string',
          data: {
            title: order.color_name,
          },
        },
        {
          type: 'string',
          data: {
            title: order.customer_name,
          },
        },
        {
          type: 'string',
          data: {
            title: order.address,
          },
        },
        {
          type: 'string',
          data: {
            title: order.postal_code,
          },
        },
        {
          type: 'string',
          data: {
            title: order.phone,
          },
        },
      );
    });
    return [ordersList];
  };
}

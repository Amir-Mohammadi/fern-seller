import axios, { AxiosResponse, Method } from 'axios';
import https from 'https';
import { API, ROUTES } from '../config';
import { StoresInstance } from '../stores/core/stores';
import { getToken } from '../utils/auth-util';
import {
  AddInventoryModel,
  BrandModel,
  CreateShopStuffModel,
  CustomerOrderModel,
  ICustomerOrder,
  InventoryModel,
  IProductListParameters,
  LoginModel,
  LoginResultModel,
  ProductCategoryModel,
  ShopFinancialAccountModel,
  ShopFinancialTransactionModel,
  ShopInProgressOrderModel,
  ShopModel,
  ShopStuffModel,
  ShopStuffPriceAdjustmentModel,
  StaticInfo,
  StuffModel,
  StuffSearchParameters,
  TransactionListSearchParametersModel,
} from './models';

class Api {
  private async send(
    method: Method,
    url: string,
    data?: any,
    params?: any,
    file?: boolean,
    removeTokenOnUnauthorizedError: boolean = false,
  ): Promise<AxiosResponse> {
    try {
      const agent = new https.Agent({
        rejectUnauthorized: false,
      });
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
      };
      const res = await axios(
        file
          ? {
              method,
              url,
              data,
              params,
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: getToken(),
              },
            }
          : {
              method,
              url,
              data,
              params,
              headers: {
                Authorization: getToken(),
              },
            },
      );

      return res;
    } catch (e) {
      // if Unauthorized error come from server, remove the token (it means that token is not valid for server)
      if (removeTokenOnUnauthorizedError && e.response?.data?.title == 'ACCESS_DENIED') {
        console.log('token is not valid, removing token');
        StoresInstance?.authStore.logout();
      }
      throw e;
    }
  }

  v1 = {
    customerOrders: {
      getCustomerOrders: (params?: ICustomerOrder): Promise<AxiosResponse<Array<CustomerOrderModel>>> => {
        return this.send('GET', `${API.V1}/${ROUTES.SHOPS}/me/shop-orders`, null, params);
      },
      update: () => {},
      delete: () => {},
      read: () => {},
    },
    shop: {
      getCurrentShop: (): Promise<AxiosResponse<ShopModel>> => {
        return this.send('GET', `${API.V1}/${ROUTES.SHOPS}/me`, null, null, undefined, true);
      },
      getShopFinancialAccount: (): Promise<AxiosResponse<ShopFinancialAccountModel>> => {
        return this.send('GET', `${API.V1}/${ROUTES.SHOPS}/me/financial/account`);
      },
      getShopFinancialTransactions: (
        params?: TransactionListSearchParametersModel,
      ): Promise<AxiosResponse<ShopFinancialTransactionModel[]>> => {
        return this.send('GET', `${API.V1}/${ROUTES.SHOPS}/me/financial/transactions`, undefined, params);
      },
    },
    shopStuffPrice: {
      create: (stuffId: number, shopStuffPriceAdjustmentModel: ShopStuffPriceAdjustmentModel) => {
        return this.send('POST', `${API.V1}/${ROUTES.SHOPS}/me/stuffs/${stuffId}/price`, shopStuffPriceAdjustmentModel);
      },
    },
    shopStuff: {
      create: (createShopStuffModel: CreateShopStuffModel) => {
        return this.send('POST', `${API.V1}/${ROUTES.SHOPS}/me/stuffs`, createShopStuffModel);
      },
      getStuffs: (params?: IProductListParameters): Promise<AxiosResponse<Array<ShopStuffModel>>> => {
        return this.send('GET', `${API.V1}/${ROUTES.SHOPS}/me/stuffs`, null, params);
      },
      getShopStuff: (stuffId: number): Promise<AxiosResponse<ShopStuffModel>> => {
        return this.send('GET', `${API.V1}/${ROUTES.SHOPS}/me/stuffs/${stuffId}`);
      },
      update: () => {},
      delete: () => {},
      read: () => {},
    },
    customerOrder: {
      create: () => {},
      getInProgressOrders: (): Promise<AxiosResponse<Array<ShopInProgressOrderModel>>> => {
        return this.send(
          'GET',
          `${API.V1}/${ROUTES.SHOPS}/me/in-progress-orders`,
          undefined,
          undefined,
          undefined,
          true,
        );
      },
      update: () => {},
      delete: () => {},
      read: () => {},
    },
    brand: {
      create: () => {},
      getBrands: (): Promise<AxiosResponse<Array<BrandModel>>> => {
        return this.send('GET', `${API.V1}/${ROUTES.BRANDS}`);
      },
      update: () => {},
      delete: () => {},
      read: () => {},
    },
    orderStatistics: {
      create: () => {},
      getOrderStatistics: (): Promise<AxiosResponse<StaticInfo>> => {
        return this.send('GET', `${API.V1}/${ROUTES.SHOPS}/me/order-statistics`);
      },
      update: () => {},
      delete: () => {},
      read: () => {},
    },
    productCategory: {
      create: () => {},
      getProductCategories: (): Promise<AxiosResponse<Array<ProductCategoryModel>>> => {
        return this.send('GET', `${API.V1}/${ROUTES.PRODUCT_CATEGORIES}`);
      },
      update: () => {},
      delete: () => {},
      read: () => {},
    },
    inventory: {
      increaseInventory: (data: AddInventoryModel, productId: number) => {
        return this.send('POST', `${API.V1}/${ROUTES.SHOPS}/me/stuffs/${productId}/inventory/increase`, data);
      },
      decreaseInventory: (data: AddInventoryModel, productId: number) => {
        return this.send('POST', `${API.V1}/${ROUTES.SHOPS}/me/stuffs/${productId}/inventory/decrease`, data);
      },
      getInventories: (productId?: number): Promise<AxiosResponse<Array<InventoryModel>>> => {
        return this.send(
          'GET',
          `${API.V1}/${ROUTES.SHOPS}/me/inventory`,
          null,
          { productId: productId },
          undefined,
          true,
        );
      },
      update: () => {},
      delete: () => {},
      read: () => {},
    },
    stuff: {
      getStuffs: (params?: StuffSearchParameters): Promise<AxiosResponse<Array<StuffModel>>> => {
        return this.send('GET', `${API.V1}/${ROUTES.SHOPS}/stuffs`, null, params);
      },
    },
    auth: {
      login: (data: LoginModel): Promise<AxiosResponse<LoginResultModel>> => {
        return this.send('POST', `${API.V1}/${ROUTES.SHOPS}/login`, data);
      },
    },
  };
}

const api = new Api();
export default api;

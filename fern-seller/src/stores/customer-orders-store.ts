import { action, computed, observable } from 'mobx';
import { ICustomerOrder, StatusType } from '../api/models';
import { Target } from '../components/screens/order-list';
import { TableRow } from '../components/table';
import { IBrand, IProductCategory } from '../interfaces/common';
import CustomerOrdersService from '../services/customer-orders.service';

class CustomerOrdersStore {
  private customerOrdersService: CustomerOrdersService;

  constructor() {
    this.customerOrdersService = new CustomerOrdersService();
  }

  @observable list: Array<TableRow[]> = [];

  @observable search = '';
  @observable selectedBrand: number = -1;
  @observable selectedCategory: number = -1;
  @observable private brandList: Array<IBrand> = [];
  @observable private categoryList: Array<IProductCategory> = [];

  @action loadFilters = () => {};

  @computed get brand(): string[] {
    const brands: string[] = [];

    this.brandList.map((item) => {
      brands.push(item.name);
    });
    return brands;
  }

  @computed get category(): string[] {
    const categories: string[] = [];

    this.categoryList.map((item) => {
      categories.push(item.name);
    });
    return categories;
  }

  private parameters: ICustomerOrder = {
    categoryId: undefined,
    brandId: undefined,
    q: undefined,
    status: StatusType.InProgress,
  };
  private formLoad = async () => {
    try {
      this.list = await this.customerOrdersService.getCustomerOrders(this.parameters);
      this.brandList = await this.customerOrdersService.getBrandList();
      this.categoryList = await this.customerOrdersService.getProductCategories();
    } catch (error) {}
  };

  private _searchByBrand = async () => {
    if (this.selectedBrand == -1) {
      this.parameters.brandId = undefined;
    } else {
      const brandId = this.brandList[this.selectedBrand].id;
      this.parameters.brandId = brandId;
    }

    this.list = await this.customerOrdersService.getCustomerOrders(this.parameters);
  };
  private _searchByQuery = async () => {
    this.parameters.q = this.search;
    this.list = await this.customerOrdersService.getCustomerOrders(this.parameters);
  };
  private _searchByCategory = async () => {
    if (this.selectedCategory == -1) {
      this.parameters.categoryId = undefined;
    } else {
      const categoryId = this.categoryList[this.selectedCategory].id;
      this.parameters.categoryId = categoryId;
    }

    this.list = await this.customerOrdersService.getCustomerOrders(this.parameters);
  };
  @action handleActions = (target: Target, value?: any) => {
    switch (target) {
      case Target.FORM_LOAD:
        this.formLoad();
        break;
      case Target.CATEGORY_FILTER_ON_CHANGE:
        {
          this.selectedCategory = value;
          this._searchByCategory();
        }
        break;

      case Target.BRAND_FILTER_ON_CHANGE:
        {
          this.selectedBrand = value;
          this._searchByBrand();
        }
        break;

      case Target.SEARCH_FILTER_ON_CHANGE:
        this.search = value;
        break;
      case Target.ON_SEARCH:
        this._searchByQuery();
        break;
      default:
        break;
    }
  };
}

export interface InjectedCustomerOrdersStore {
  customerOrdersStore: CustomerOrdersStore;
}
export { CustomerOrdersStore };

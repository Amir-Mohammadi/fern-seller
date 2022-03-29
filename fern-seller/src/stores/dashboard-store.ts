import { action, computed, observable } from 'mobx';
import api from '../api';
import { IInventory, IShopInProgressOrder } from '../api/models';
import { Target } from '../components/screens/dashboard';
import { StatisticsInformationProps } from '../components/statistics-information';
import { Target as UpdateProductQuantityTarget, UpdateProductType } from '../components/update-product-quantity';
import DashboardService from '../services/dashboard.service';

class DashboardStore {
  private DashboardService;

  constructor() {
    this.DashboardService = new DashboardService();
  }

  @observable customerOrders: Array<IShopInProgressOrder> = [];
  @observable statisticsInformation: Array<StatisticsInformationProps> = [];
  @observable private inventories: IInventory[] = [];
  @observable selectedOperation: number = -1;
  @observable selectedColor: number = -1;
  @observable stuffCode: number = 0;
  @observable quantity: number = 0;

  @computed get warehouseInventory() {
    return this.inventories[this.selectedColor]?.Amount ?? 0;
  }

  @computed get colorsList(): string[] {
    const colors: string[] = [];

    this.inventories.map((inventory) => {
      colors.push(inventory.ColorName);
    });
    return colors;
  }

  private formLoad = async () => {
    try {
      this.customerOrders = await this.DashboardService.getInProgressOrders();
      this.statisticsInformation = await this.DashboardService.getStatisticsInformation();
    } catch (error) {}
  };

  private _getProductQuantityData = async () => {
    try {
      this.inventories = await this.DashboardService.getInventories(this.stuffCode);
    } catch (error) {}
  };

  private _addProductQuantity = async () => {
    try {
      const colorId = this.inventories[this.selectedColor].ColorId;
      const quantity = this.quantity;
      const stuffCode = this.stuffCode;

      if (this.selectedOperation == UpdateProductType.Decrease) {
        // this condition is for create error
        if (this.quantity > this.warehouseInventory) {
          alert('number of decreasing amount is more than warehouse inventory');
        } else {
          await api.v1.inventory.decreaseInventory({ quantity: quantity, color_id: colorId }, stuffCode);
        }
      }

      if (this.selectedOperation == UpdateProductType.Increase) {
        await api.v1.inventory.increaseInventory({ quantity: quantity, color_id: colorId }, stuffCode);
      }

      this._addProductFormReset();
      alert('done');
    } catch (error) {
      console.log(error);
    }
  };

  private _addProductFormReset = () => {
    this.inventories = [];
    this.selectedOperation = -1;
    this.selectedColor = -1;
    this.stuffCode = 0;
    this.quantity = 0;
  };

  @action handleActions = (target: Target | UpdateProductQuantityTarget, value?: any) => {
    switch (target) {
      case Target.FORM_LOAD:
        this.formLoad();
        break;

      case UpdateProductQuantityTarget.CHANGE_STUFF_CODE:
        this.stuffCode = value;
        this._getProductQuantityData();
        break;

      case UpdateProductQuantityTarget.CHANGE_COLOR:
        this.selectedColor = value;
        break;

      case UpdateProductQuantityTarget.CHANGE_OPERATION:
        this.selectedOperation = value;
        break;

      case UpdateProductQuantityTarget.CHANGE_WAREHOUSE_INVENTORY:
        this.quantity = value;
        break;

      case UpdateProductQuantityTarget.SUBMIT:
        this._addProductQuantity();
        break;

      default:
        break;
    }
  };
}

export interface InjectedDashboardStore {
  dashboardStore: DashboardStore;
}

export { DashboardStore };

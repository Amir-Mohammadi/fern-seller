import { action, observable } from 'mobx';
import ShopService from '../services/shop.service';

export enum HeaderStoreActions {
  ON_FORM_LOAD = 0,
}

export class HeaderStore {
  private _shopService = new ShopService();
  @observable shopName: string = '';

  @action private async _loadHeaderStore() {
    try {
      const { name: shopName } = await this._shopService.getCurrentShopBrief();
      this.shopName = shopName;
    } catch (error) {
      // TODO
    }
  }

  @action handleAction(target: HeaderStoreActions, value?: any) {
    switch (target) {
      case HeaderStoreActions.ON_FORM_LOAD: {
        this._loadHeaderStore();
        break;
      }
      default:
        break;
    }
  }
}

export interface InjectedHeaderStore {
  headerStore: HeaderStore;
}

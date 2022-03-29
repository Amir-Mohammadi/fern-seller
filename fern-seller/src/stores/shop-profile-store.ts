import { action, observable } from 'mobx';
import ShopService from '../services/shop.service';
import { translateDate } from '../utils/translate-date';
import { translateGender } from '../utils/translate-gender';

export enum ShopInfoStoreTargets {
  LOAD_STORE,
}

class ShopProfileStore {
  private _shopService = new ShopService();

  // Contract
  @observable contractCode = '';
  @observable contractCreatDate = '';
  @observable contractExpireDate = '';
  @observable contractFileName = '';
  @observable contractFileUrl = '';
  // Owner
  @observable shopOwnerIDCode = '';
  @observable shopOwnerNationalCode = '';
  @observable shopOwnerBirthDate = '';
  @observable shopOwnerFirstName = '';
  @observable shopOwnerGender = '';
  @observable shopOwnerLastName = '';
  @observable shopOwnerPassword = '';
  @observable shopOwnerId = '';
  @observable shopOwnerType = '';
  @observable shopOwnerPhone = '';
  // Address
  @observable shopCity = '';
  @observable shopEmail = '';
  @observable shopPostalCode = '';
  @observable shopProvince = '';
  @observable shopTelephone = '';
  @observable shopWebsite = '';
  @observable shopAddress = '';

  @action private async _loadStore() {
    const shop = await this._shopService.getShop();

    this.shopOwnerIDCode = '';
    this.shopOwnerNationalCode = shop.owner.nationalCode;
    this.shopOwnerBirthDate = translateDate(shop.owner.birthday);
    this.shopOwnerFirstName = shop.owner.firstName;
    this.shopOwnerGender = translateGender(shop.owner.gender);
    this.shopOwnerLastName = shop.owner.lastName;
    this.shopOwnerPassword = '***';
    this.shopOwnerId = shop.owner.id + '';
    this.shopOwnerType = 'حقیقی';
    this.shopOwnerPhone = shop.owner.phone;

    this.shopCity = shop.city.name;
    this.shopEmail = '';
    this.shopPostalCode = shop.postalCode;
    this.shopProvince = shop.city.province.name;
    this.shopTelephone = shop.telephone;
    this.shopWebsite = shop.website;
    this.shopAddress = shop.address;

    this.contractCode = '';
    this.contractCreatDate = '';
    this.contractExpireDate = '';
    this.contractFileName = '';
    this.contractFileUrl = '';
  }

  @action handleAction(target: ShopInfoStoreTargets, value?: any) {
    switch (target) {
      case ShopInfoStoreTargets.LOAD_STORE: {
        this._loadStore();
        break;
      }
      default:
        throw new Error('wrong target in handel action');
    }
  }
}

export interface InjectedShopInfoStore {
  shopProfileStore: ShopProfileStore;
}

export { ShopProfileStore as UserInfoStore };

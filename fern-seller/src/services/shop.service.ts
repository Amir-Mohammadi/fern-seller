import api from '../api';
import { ShopFinancialAccountModel, ShopFinancialTransactionModel, ShopModel, UserModel } from '../api/models';

export default class ShopService {
  async getCurrentShopBrief(): Promise<IBriefShop> {
    const shop = await api.v1.shop.getCurrentShop();
    return {
      name: shop.data.name ?? 'بدون نام',
    };
  }

  async getShopFinancialAccount(): Promise<IShopFinancialAccount> {
    const [shop, financialAccount] = await Promise.all([
      api.v1.shop.getCurrentShop(),
      api.v1.shop.getShopFinancialAccount(),
    ]);
    return this._financialAccountAdapter(financialAccount.data, shop.data);
  }

  async getShopFinancialTransactions(options?: TransactionListSearchParameters): Promise<IShopFinancialTransaction[]> {
    const financialTransactions = await api.v1.shop.getShopFinancialTransactions({
      transaction_date: options?.createAt?.toLocaleString(),
    });
    return financialTransactions.data.map(this._financialTransactionAdapter);
  }

  async getShop(): Promise<IShop> {
    const shop = await api.v1.shop.getCurrentShop();
    return this._shopAdapter(shop.data);
  }

  private _shopAdapter(model: ShopModel): IShop {
    return {
      active: model.active,
      address: model.address ?? '',
      city: model.city,
      id: model.id,
      name: model.name,
      owner: this._userAdapter(model.owner),
      postalCode: model.postal_code ?? '',
      rowVersion: model.row_version,
      telephone: model.telephone ?? '',
      website: model.website ?? '',
    };
  }

  private _userAdapter(model: UserModel): IUser {
    return {
      birthday: model.birthday,
      email: model.email,
      firstName: model.first_name,
      gender: model.gender,
      id: model.id,
      lastName: model.last_name,
      nationalCode: model.national_code,
      phone: model.phone,
    };
  }

  private _financialAccountAdapter(
    financialModel: ShopFinancialAccountModel,
    shopModel: ShopModel,
  ): IShopFinancialAccount {
    var shopOwnerName = 'بی نام';
    if (shopModel.owner.first_name || shopModel.owner.last_name) {
      shopOwnerName = shopModel.owner.first_name + ' ' + shopModel.owner.last_name;
    }

    return {
      id: financialModel.id,
      no: financialModel.no,
      rowVersion: financialModel.row_version,
      title: financialModel.title,
      ownerName: shopOwnerName,
    };
  }

  private _financialTransactionAdapter(model: ShopFinancialTransactionModel): IShopFinancialTransaction {
    return {
      amount: model.amount,
      createdAt: model.created_at,
      id: model.id,
      description: model.description,
      transactionType: model.transaction_type == 1 ? 'credit' : 'debit',
    };
  }
}

export interface IShopFinancialTransaction {
  id: number;
  amount: number;
  description: string;
  transactionType: 'credit' | 'debit';
  createdAt: string;
}

export interface IBriefShop {
  name: string;
}

export interface IShop {
  id: number;
  name: string;
  active: true;
  postalCode: string;
  address: string;
  telephone: string;
  website: string;
  city: ICity;
  owner: IUser;
  rowVersion: string;
}

export interface IProvince {
  id: number;
  name: string;
}

export interface ICity {
  id: number;
  name: string;
  province: IProvince;
}

export interface IUser {
  id: number;
  email: string;
  phone: string;
  nationalCode: string;
  birthday: string;
  firstName: string;
  lastName: string;
  gender: number;
}

export interface IShopFinancialAccount {
  id: number;
  title: string;
  ownerName: string;
  no: string;
  rowVersion: string;
}

export interface TransactionListSearchParameters {
  createAt?: Date;
}

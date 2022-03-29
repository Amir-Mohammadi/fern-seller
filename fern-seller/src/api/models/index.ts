export interface X {}
export interface ProductImageModel {
  id: number;
  image_id: string;
  order: number;
  image_alt: string;
  image_title: string;
  row_version: string;
}
export interface IProductImage {
  Id: number;
  ImageId: string;
  Order: number;
  ImageAlt: string;
  ImageTitle: string;
  RowVersion: string;
}
export interface ICustomerOrder {
  brandId?: number;
  categoryId?: number;
  q?: string;
  status?: StatusType;
}
export enum StatusType {
  Created,
  InProgress,
  Prepared,
  Sended,
  Delivered,
  Returned,
  Cancelled,
}
export interface CustomerOrderModel {
  id: number;
  product_id: number;
  preview_product_image: ProductImageModel;
  product_name: string;
  product_category_name: string;
  brand_name: string;
  color_name: string;
  customer_name: string;
  address: string;
  postal_code: string;
  phone: string;
  row_version: string;
}
export interface ShopStuffModel {
  id: number;
  stuff_id: number;
  row_version: string;
  brand_name: string;
  product_name: string;
  category_name: string;
  status: number;
  variation_number: number;
  preview_product_image: ProductPreviewImageModel;
}

export interface BrandModel {
  id: number;
  name: string;
  url_title: string;
  image_title: string;
  image_alt: string;
  image_id: string;
  row_version: string;
  browser_title: string;
  meta_description: string;
}

export interface ProductCategoryModel {
  id: number;
  name: string;
  url_title: string;
  browser_title: string;
  meta_description: string;
  parent_id: number;
  explanation: string;
  is_archive: boolean;
  row_version: string;
}
export interface IProductListParameters {
  brandId?: number;
  categoryId?: number;
  q?: string;
}

export interface ProductPreviewImageModel {
  id: number;
  image_alt: string;
  image_id: string;
  image_title: string;
  order: number;
  row_version: string;
}

export interface StaticInfo {
  total_order_count: number;
  canceled_order_count: number;
  rejected_total_order_count: number;
  sent_total_order_count: number;
}

export interface ShopInProgressOrderModel {
  order_item_id: number;
  product_name: string;
  product_image_id: string;
  product_image_row_version: string;
  brand_name: string;
  color_name: string;
  color_code: number;
  product_count: number;
  customer_name: string;
  delivery_date: string;
  address: string;
}

export interface IShopInProgressOrder {
  orderItemId: number;
  productName: string;
  productImageId: string;
  productImageRowVersion: string;
  brandName: string;
  colorName: string;
  colorCode: number;
  productCount: number;
  customerName: string;
  deliveryDate: string;
  address: string;
}
export interface IInventory {
  WarehouseId: number;
  Amount: number;
  ColorId: number;
  ColorName: string;
  ProductId: number;
}

export interface InventoryModel {
  warehouse_id: number;
  amount: number;
  color_id: number;
  color_name: string;
  product_id: number;
}

export interface AddInventoryModel {
  quantity: number;
  color_id: number;
}

export interface LoginModel {
  email: string;
  password: string;
}

export interface LoginResultModel {
  token: string;
}

export interface ProvinceModel {
  id: number;
  name: string;
  area_code: number;
  row_version: string;
}

export interface CityModel {
  id: number;
  name: string;
  province: ProvinceModel;
  row_version: string;
  province_id: number;
}

export interface UserModel {
  id: number;
  enabled: true;
  roles: number;
  email: string;
  phone: string;
  national_code: string;
  birthday: string;
  economic_code: string;
  father_name: string;
  first_name: string;
  city: CityModel;
  gender: Gender;
  last_name: string;
  picture_id: string;
  city_id: number;
  row_version: string;
}

export enum Gender {
  Unspecified = 0,
  Male = 1,
  Female = 2,
}

export interface ShopModel {
  id: number;
  name: string;
  owner_id: number;
  city_id: number | null;
  active: true;
  postal_code: string | null;
  address: string | null;
  telephone: string | null;
  website: string | null;
  city: CityModel;
  owner: UserModel;
  created_at: string;
  row_version: string;
}

export interface CurrencyModel {
  id: number;
  name: string;
  symbol: string;
  ratio: number;
  row_version: string;
}

export interface BankModel {
  id: number;
  name: string;
  row_version: string;
}

export interface ShopFinancialAccountModel {
  id: number;
  title: string;
  bank_id: number;
  currency_id: number;
  no: string;
  bank: BankModel;
  currency: CurrencyModel;
  row_version: string;
}

export interface ShopFinancialTransactionModel {
  id: number;
  amount: number;
  description: string;
  transaction_type: 1 | -1;
  financial_form: {
    id: number;
    title: string;
    description: string;
    row_version: string;
  };
  created_at: string;
}

export interface TransactionListSearchParametersModel {
  transaction_date?: string;
}

export interface StuffModel {
  id: number;
  name: string;
  shop_id?: number;
  url_title: string;
  browser_title: string;
  brand_name: string;
  color_id: number;
  color_name: string;
  min_price: number;
  max_price: number;
  preview_market_stuff_image_id: string;
  preview_market_stuff_image_row_version: string;
  category_id: number;
  category_name: string;
}

export interface StuffSearchParameters {
  stuff_name?: string;
  brand_id?: number;
  category_id?: number;
}

export interface CreateShopStuffModel {
  stuff_id: number;
}
export interface ShopStuffPriceAdjustmentModel {
  price: number;
  color_id: number;
}

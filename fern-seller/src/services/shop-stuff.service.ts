import { toJS } from 'mobx';
import api from '../api';
import { ShopStuffModel, StuffModel, StuffSearchParameters } from '../api/models';
import { Result } from '../components/search-results';
import { STATIC_FILE } from '../config';
import { ICreateShopStuff } from '../interfaces/common/create-shop-stuff';
import { IShopStuff } from '../interfaces/common/shop-stuff';
import { IShopStuffPriceAdjustment } from '../interfaces/common/shop-stuff-price-adjustment';
import { IStuffSearchParameters } from '../interfaces/common/stuff-search-parameters';

export default class ShopStuffService {
  async getStuffList(filters?: IStuffSearchParameters): Promise<Array<Result>> {
    var transformedFilters: StuffSearchParameters = {};
    try {
      if (filters !== undefined) {
        transformedFilters = this.reverseTransformStuffSearchParameters(filters);
      }
      const stuffs = await api.v1.stuff.getStuffs(transformedFilters);
      console.log(toJS(stuffs));
      return this._stuffListAdapter(stuffs.data);
    } catch (error) {
      throw error;
    }
  }
  async getShopStuff(stuffId: number): Promise<IShopStuff> {
    try {
      const shopStuff = await api.v1.shopStuff.getShopStuff(stuffId);
      if (String(shopStuff.data) != '') {
        return this._shopStufftAdapter(shopStuff.data);
      } else {
        return this._shopStufftAdapter({
          id: 0,
          stuff_id: 0,
          brand_name: '',
          category_name: '',
          product_name: '',
          row_version: '',
          status: 0,
          variation_number: 0,
          preview_product_image: {
            id: 0,
            image_alt: '',
            image_id: '',
            image_title: '',
            order: 0,
            row_version: '',
          },
        });
      }
    } catch (error) {
      throw error;
    }
  }
  async addShopStuff(createShopStuff: ICreateShopStuff) {
    try {
      await api.v1.shopStuff.create({ stuff_id: createShopStuff.stuffId });
    } catch (error) {
      throw error;
    }
  }

  async addShopStuffPrice(stuffId: number, shopStuffPriceAdjustment: IShopStuffPriceAdjustment) {
    try {
      await api.v1.shopStuffPrice.create(stuffId, {
        price: shopStuffPriceAdjustment.price,
        color_id: shopStuffPriceAdjustment.colorId,
      });
    } catch (error) {
      throw error;
    }
  }
  private _stuffListAdapter = (stuffList: Array<StuffModel>): Array<Result> => {
    const brands: Array<Result> = [];
    stuffList.forEach((item) => {
      const imageUrl = STATIC_FILE(
        item.preview_market_stuff_image_id,
        item.preview_market_stuff_image_row_version ?? '',
      );
      brands.push({
        id: item.id,
        name: item.name,
        shopId: item.shop_id,
        categoryId: item.category_id,
        categoryName: item.category_name,
        colorId: item.color_id,
        colorName: item.color_name,
        minPrice: item.min_price,
        maxPrice: item.max_price,
        brandName: item.brand_name,
        img: imageUrl,
      });
    });
    return brands;
  };

  public reverseTransformStuffSearchParameters(stuffSearchParameters: IStuffSearchParameters): StuffSearchParameters {
    var brandId = stuffSearchParameters.brandId;
    var categoryId = stuffSearchParameters.categoryId;
    var stuffName = stuffSearchParameters.stuffName;

    return {
      ...(brandId && { brand_id: brandId }),
      ...(categoryId && { category_id: categoryId }),
      ...(stuffName && { stuff_Name: stuffName }),
    };
  }

  private _shopStufftAdapter = (shopStuff: ShopStuffModel): IShopStuff => {
    const imageUrl = STATIC_FILE(
      shopStuff.preview_product_image.image_id,
      shopStuff.preview_product_image.row_version ?? '',
    );
    return {
      id: shopStuff.id,
      brandName: shopStuff.brand_name,
      categoryName: shopStuff.category_name,
      productName: shopStuff.product_name,
      rowVersion: shopStuff.row_version,
      stuffId: shopStuff.stuff_id,
      variationNumber: shopStuff.variation_number,
      status: shopStuff.status,
      image: imageUrl,
    };
  };
}

import api from '../api';
import { BrandModel } from '../api/models';
import { IBrand } from '../interfaces/common';

export default class BrandService {
  async getBrandList(): Promise<Array<IBrand>> {
    try {
      const brandList = await api.v1.brand.getBrands();

      return this._brandListAdapter(brandList.data);
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
}

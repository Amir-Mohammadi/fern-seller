import { action, observable } from 'mobx';
import { FilterNode, FilterNodeType } from '../components/filter-bar';
import { Target } from '../components/screens/add-product';
import { Result } from '../components/search-results';
import { TreeViewNodes } from '../components/tree-view';
import { IBrand } from '../interfaces/common';
import { IStuffSearchParameters } from '../interfaces/common/stuff-search-parameters';
import BrandService from '../services/brand.service';
import ProductCategoryService from '../services/product-category.service';
import ShopStuffService from '../services/shop-stuff.service';

class ProductStore {
  private brandService: BrandService;
  private productCategoryService: ProductCategoryService;
  private shopStuffService: ShopStuffService;
  constructor() {
    this.brandService = new BrandService();
    this.productCategoryService = new ProductCategoryService();
    this.shopStuffService = new ShopStuffService();
  }
  @observable searchInputValue: string = '';
  @observable isLoadingAddShopStuff: boolean = false;
  @observable brandList: Array<IBrand> = [];
  @observable treeNodes: Array<TreeViewNodes> = [];
  searchInput: IStuffSearchParameters = { categoryId: null, brandId: null, stuffName: null };
  selectedBrand: IBrand = { id: 0, name: '' };
  selectedCategory: TreeViewNodes = { id: 0, title: '', folded: true, children: [], uri: '', parentId: null };
  @observable filters: Array<FilterNode> = [];
  @observable searchResult: Array<Result> = [];
  @observable selectedStuff: Result = this.initStuff();

  private formLoad = async () => {
    await this.getBrandList();
    await this.getProductCategoryTreeView();
    await this.getProductList(this.searchInput);
  };
  private getBrandList = async () => {
    this.brandList = await this.brandService.getBrandList();
  };

  private getProductList = async (searchInput: IStuffSearchParameters) => {
    this.searchResult = await this.shopStuffService.getStuffList(searchInput);
  };

  private getProductCategoryTreeView = async () => {
    var node = await this.productCategoryService.getProductCategoriesTreeView();
    this.treeNodes = node.children;
  };

  private selectBrand = async (id: number) => {
    this.selectedBrand = this.brandList.find((x) => x.id == id) || { id: 0, name: '' };
    this.setFilterNode(this.selectedBrand.name, FilterNodeType.brand);
    this.searchInput.brandId = this.selectedBrand.id;
    await this.getProductList(this.searchInput);
  };

  private filterRemove = async (filterNode: FilterNode) => {
    if (filterNode.type == FilterNodeType.brand) this.searchInput.brandId = null;
    if (filterNode.type == FilterNodeType.category) this.searchInput.categoryId = null;
    if (filterNode.type == FilterNodeType.stuffName) this.searchInput.stuffName = null;

    var filterArray = [...this.filters];
    var index = this.filters.findIndex((x) => x.type == filterNode.type);
    if (index !== -1) {
      filterArray.splice(index, 1);
    }
    this.filters = filterArray;

    await this.getProductList(this.searchInput);
  };

  public initStuff(): Result {
    return {
      id: 0,
      categoryId: 0,
      categoryName: '',
      colorId: 0,
      colorName: '',
      maxPrice: 0,
      minPrice: 0,
      img: '',
      name: '',
      brandName: '',
    };
  }

  private stuffSell(stuffId: number, colorId: number) {
    let stuff = this.searchResult.find((x) => x.id == stuffId && x.colorId == colorId) ?? this.initStuff();
    this.selectedStuff = stuff;
  }

  private saveShopStuff = async (price: number) => {
    try {
      this.isLoadingAddShopStuff = true;
      if (price < this.selectedStuff.minPrice || price > this.selectedStuff.maxPrice) {
        console.log('Wrong range number');
        return;
      }
      const shopStuff = await this.shopStuffService.getShopStuff(this.selectedStuff.id);
      if (shopStuff.id == 0) {
        //Add Shop Stuff
        await this.shopStuffService.addShopStuff({ stuffId: this.selectedStuff.id });
      }

      //Add Shop Stuff Price
      await this.shopStuffService.addShopStuffPrice(this.selectedStuff.id, {
        colorId: this.selectedStuff.colorId,
        price: price,
      });
      //Reload Stuff
      await this.getProductList(this.searchInput);
      this.isLoadingAddShopStuff = false;
    } catch (error) {}
  };

  toggleFolded(id: number): any {
    const temp = [...this.treeNodes];
    this.treeNodes = this.recursiveFind(temp, id);
  }

  private setFilterNode(title: string, type: FilterNodeType) {
    var filterArray = [...this.filters];
    var index = filterArray.findIndex((x) => x.type == type);
    if (index != -1) {
      filterArray.splice(index, 1);
    }
    filterArray.push({ title: title, type: type });

    this.filters = filterArray;
  }

  private selectCategory = async (node: TreeViewNodes) => {
    this.selectedCategory = node;
    if (node.children.length == 0) {
      this.searchInput.categoryId = node.id;
      await this.getProductList(this.searchInput);
      this.setFilterNode(node.title, FilterNodeType.category);
    }
  };

  private recursiveFind(treeNodes: Array<TreeViewNodes>, id: number): Array<TreeViewNodes> {
    treeNodes.forEach((element) => {
      if (element.id == id) {
        element.folded = !element.folded;
        return;
      }
      if (element.children.length == 0) {
        return;
      }

      this.recursiveFind(element.children, id);
    });
    return treeNodes;
  }

  private setStuffSearch = async () => {
    this.setFilterNode(this.searchInputValue, FilterNodeType.stuffName);
    this.searchInput.stuffName = this.searchInputValue;
    await this.getProductList(this.searchInput);
    this.searchInputValue = '';
  };

  private clearFilters = async () => {
    this.filters = [];
    this.searchInput.brandId = null;
    this.searchInput.categoryId = null;
    this.searchInput.stuffName = null;
    await this.getProductList(this.searchInput);
  };

  private setSearchInputValue(value: string) {
    this.searchInputValue = value;
  }

  @action handleActions = (target: Target, value?: any) => {
    switch (target) {
      case Target.FORM_LOAD:
        this.formLoad();
        break;
      case Target.SET_SEARCH_INPUT_VALUE:
        this.setSearchInputValue(value);
        break;
      case Target.SELECT_BRAND:
        this.selectBrand(value);
        break;
      case Target.TOGGLE_FOLDED:
        this.toggleFolded(value);
        break;
      case Target.STUFF_SELL:
        this.stuffSell(value.id, value.colorId);
        break;
      case Target.SAVE_SHOP_STUFF:
        this.saveShopStuff(value);
        break;
      case Target.REMOVE_FILTER:
        this.filterRemove(value);
        break;
      case Target.SELECT_CATEGORY:
        this.selectCategory(value);
        break;
      case Target.SEARCH_STUFF:
        this.setStuffSearch();
        break;
      case Target.CLEARE_FILTER:
        this.clearFilters();
        break;
      default:
        break;
    }
  };
}

export interface InjectedProductStore {
  productStore: ProductStore;
}

export { ProductStore };

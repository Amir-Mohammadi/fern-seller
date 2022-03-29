import React, { useEffect, useState } from 'react';
import { IBrand } from '../../../interfaces/common';
import AddShopStuffForm from '../../add-shop-stuff-form';
import BrandsCard from '../../brands-card';
import Filter from '../../filter';
import { FilterNode } from '../../filter-bar';
import PageTitle from '../../page-title';
import SearchBar from '../../search-bar';
import SearchResult, { Result } from '../../search-results';
import TreeView, { TreeViewNodes } from '../../tree-view';
import styles from './add-product.module.scss';

export enum Target {
  FORM_LOAD = 'form-load',
  SET_SEARCH_INPUT_VALUE = 'set-search-input-value',
  SELECT_BRAND = 'select-brand',
  TOGGLE_FOLDED = 'toggle-folded',
  SELECT_CATEGORY = 'select-category',
  STUFF_SELL = 'stuff-sell',
  SAVE_SHOP_STUFF = 'save-shop-stuff',
  REMOVE_FILTER = 'remove-filter',
  SEARCH_STUFF = 'search-stuff',
  CLEARE_FILTER = 'cleare-filter',
}
interface Props {
  filter: {
    searchInputValue: string;
    filters: FilterNode[];
    searchResults: Result[];
  };
  productCategoryTree: {
    treeNodes: TreeViewNodes[];
    toggleFolded: (index: number) => any;
  };
  brands: {
    brandList: IBrand[];
  };
  selectedStuff: Result;
  isLoadingAddShopStuff: boolean;
  action: (target: Target, value?: any) => void;
}

export type AddProductScreenProps = Props;
const AddProductScreen: React.FC<AddProductScreenProps> = (props) => {
  const [isSaveShopStuff, setIsSaveShopStuff] = useState<boolean>(false);

  const closeSaveAddressForm = () => {
    setIsSaveShopStuff(false);
  };

  const openSaveAddressForm = (stuff: Result) => {
    props.action(Target.STUFF_SELL, stuff);
    setIsSaveShopStuff(true);
  };
  useEffect(() => {
    props.action(Target.FORM_LOAD);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.title}>
            <PageTitle
              title="جستجو یا درج محصول"
              text='محصولی که قصد فروش آن را دارید، جستجو کنید. در غیر این‌صورت از "ایجاد کالای جدید" اقدام به درج کالای خود کنید'
            />
          </div>
          <div>
            <SearchBar
              input={{
                onChange: (value: string) => {
                  props.action(Target.SET_SEARCH_INPUT_VALUE, value);
                },
                value: props.filter.searchInputValue,
              }}
              onCloseButton={() => {
                props.action(Target.CLEARE_FILTER);
              }}
              onSearchButton={() => {
                props.action(Target.SEARCH_STUFF);
              }}
            />
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.sideBX}>
            <div className={styles.box}>
              <TreeView
                nodes={props.productCategoryTree.treeNodes}
                toggleFolded={(node) => {
                  props.action(Target.TOGGLE_FOLDED, node);
                }}
                selectProductCategory={(node) => {
                  props.action(Target.SELECT_CATEGORY, node);
                }}
              />
            </div>
            <div className={styles.box}>
              <BrandsCard
                title="برندها"
                items={props.brands.brandList}
                onClick={(index: number) => {
                  props.action(Target.SELECT_BRAND, index);
                }}
              />
            </div>
          </div>
          <div className={styles.mainBX}>
            <div className={styles.box}>
              <Filter
                filters={{
                  title: 'متن جستجو',
                  filters: props.filter.filters,
                  onRemove: (filterNode: FilterNode) => props.action(Target.REMOVE_FILTER, filterNode),
                }}
              />
            </div>
            <div className={styles.box}>
              <SearchResult
                results={props.filter.searchResults}
                onClick={(stuff: Result) => {
                  openSaveAddressForm(stuff);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {isSaveShopStuff && (
        <AddShopStuffForm
          onCloseForm={closeSaveAddressForm}
          minPrice={props.selectedStuff.minPrice}
          maxPrice={props.selectedStuff.maxPrice}
          onAddShopStuff={(price) => props.action(Target.SAVE_SHOP_STUFF, price)}
          isLoading={props.isLoadingAddShopStuff}
        />
      )}
    </div>
  );
};

export { AddProductScreen };

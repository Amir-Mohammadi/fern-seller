import React from 'react';
import styles from './search-results.module.scss';

interface Props {
  results: Result[];
  onClick: (stuff: Result) => void;
}

export type Result = {
  id: number;
  name: string;
  shopId?: number;
  categoryId: number;
  categoryName: string;
  colorId: number;
  colorName: string;
  maxPrice: number;
  minPrice: number;
  brandName: string;
  img: string;
};

export type SearchResultProps = Props;

const SearchResult: React.FC<SearchResultProps> = (props) => {
  return (
    <div className={styles.searchBX}>
      <div className={styles.searchHD}>نتایج جستجو</div>
      <div className={styles.searchBD}>
        {props.results.map((item, index) => renderSearchResultItem(item, index, props.onClick))}
      </div>
    </div>
  );
};

export default SearchResult;

const renderSearchResultItem = (result: Result, i: number, onClick: (stuff: Result) => void) => (
  <div className={styles.itemBX}>
    <div className={styles.itemImg}>
      <img src={result.img} alt="" className={styles.imge} />
    </div>
    <div className={styles.itemBD}>
      <div className={styles.topRow}>
        <div>
          <span>{result.name}</span>
        </div>
        <div>
          <button onClick={() => onClick(result)}>شما هم بفروشید</button>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div>
          <span>گروه:&nbsp;</span>
          <span>{result.categoryName}</span>
        </div>
        <div>
          <span>ّبرند:&nbsp;</span>
          <span>{result.brandName}</span>
        </div>
        <div>
          <span>رنگ:&nbsp;</span>
          <span>{result.colorName}</span>
        </div>
        <div>
          <span>رنج قیمت:&nbsp;</span>
          <span>
            {result.minPrice.toLocaleString('fa')} تا {result.maxPrice.toLocaleString('fa')}
          </span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  </div>
);

import { FilterBarProps, FilterNodeType } from '../components/filter-bar';
import { IconTypes } from '../components/icons';
import { TableRow } from '../components/table';
import { TreeViewNodes } from '../components/tree-view';

export const NAV_ITEMS = [
  {
    onClick: () => {},
    text: 'محصولات',
    children: [
      {
        text: 'ثبت محصول جدید',
        onClick: () => {},
        routeName: 'add-product',
      },
      {
        text: 'مدیریت محصولات',
        onClick: () => {},
        routeName: 'product-management',
      },
      {
        text: 'درخواست درج محصول',
        onClick: () => {},
        routeName: '',
      },
    ],
  },
  {
    onClick: () => {},
    text: 'سفارش‌ها',
    children: [
      {
        text: 'سفارش‌های مشتریان',
        onClick: () => {},
        routeName: 'order-list',
      },
      {
        text: 'لیست محموله‌ها',
        onClick: () => {},
        routeName: 'cargo-list',
      },
      {
        text: 'لیست مرجوعی‌ها',
        onClick: () => {},
        routeName: 'refereed-list',
      },
    ],
  },
  {
    onClick: () => {},
    text: 'امور مالی',
    children: [
      {
        text: 'اطلاعات حساب بانکی',
        onClick: () => {},
        routeName: 'bank-info',
      },
      {
        text: 'لیست تراکنش‌های مالی',
        onClick: () => {},
        routeName: 'deposit-list',
      },
      {
        text: 'آمار فروش',
        onClick: () => {},
        routeName: 'statistic',
      },
    ],
  },
  {
    onClick: () => {},
    text: 'پشتیبانی',
    children: [
      {
        text: 'پیام‌ها',
        onClick: () => {},
        routeName: 'message-list',
      },
      {
        text: 'پرسش‌ها',
        onClick: () => {},
        routeName: 'question-list',
      },
      {
        text: 'سوالات متداول',
        onClick: () => {},
        routeName: 'frequently-asked-questions',
      },
    ],
  },
];

export const UPDATE_PRODUCT_QUANTITY = {
  title: 'به‌روزرسانی موجودی',
  productCode: {
    title: 'کد کالا',
    placeHolder: 'کد کالا',
    onChange: (e: string) => {},
  },
  warehouseInventory: {
    title: 'موجودی در انبار',
    placeHolder: 'تعداد',
    onChange: (e: string) => {},
  },
  dropdownMenus: [
    {
      title: 'مشخصه ۱',
      placeHolder: 'مشخصه ۱',
      selectedIndex: -1,
      onChange: (index: number) => {},
      menuItems: ['sdfsfsdf', 'sfsdfsd'],
    },
    {
      title: 'مشخصه ۲',
      placeHolder: 'مشخصه ۲',
      selectedIndex: 0,
      onChange: (index: number) => {},
      menuItems: ['good', 'dfgdfgdf'],
    },
  ],

  button: { title: 'ثبت', onClick: () => {} },
};

export const SEARCH_RESULTS = [
  {
    name: 'یخچال فریزر دوقلو سیلور مدل SR-103',
    groupe: 'یخچال و فریزر',
    currentState: 'قابل فروش',
    numberOfActiveQuantitys: 1,
    minimumPrice: 22000000,
    img: '/muck.png',
  },
  {
    name: 'یخچال فریزر دوقلو سیلور مدل SR-103',
    groupe: 'یخچال و فریزر',
    currentState: 'قابل فروش',
    numberOfActiveQuantitys: 1,
    minimumPrice: 22000000,
    img: '/muck.png',
  },
  {
    name: 'یخچال فریزر دوقلو سیلور مدل SR-103',
    groupe: 'یخچال و فریزر',
    currentState: 'قابل فروش',
    numberOfActiveQuantitys: 1,
    minimumPrice: 22000000,
    img: '/muck.png',
  },
];

export const SEARCH_FILTER: {
  items?: {
    type: 'dropdown' | 'input' | 'button';
    dropdown?: {
      title?: string;
      placeHolder: string;
      onChange: (index: number) => any;
      contents: string[];
      selectedIndex: number;
      slice?: number;
    };
    input?: {
      title?: string;
      placeHolder: string;
      value: string;
      onChange: Function;
      slice?: number;
    };
    button?: {
      title?: string;
      icon?: IconTypes;
      onClick: Function;
      slice?: number;
    };
  }[];
  filter: FilterBarProps;
} = {
  items: [
    {
      type: 'dropdown',
      dropdown: {
        contents: ['asdf', 'dfdsfds'],
        onChange: () => {},
        placeHolder: 'در همه موارد',
        selectedIndex: -1,
        title: 'جستجو در',
      },
    },
    {
      type: 'input',
      input: {
        placeHolder: 'عبارت مورد نظر را وارد کنید…',
        value: '',
        onChange: () => {},
        slice: 1,
      },
    },
    {
      type: 'button',
      button: {
        title: 'جستجو',
        onClick: () => {},
        icon: IconTypes.Search,
      },
    },
    {
      type: 'dropdown',
      dropdown: {
        contents: ['asdf', 'dfdsfds'],
        onChange: () => {},
        placeHolder: 'در همه موارد',
        selectedIndex: -1,
        title: 'جستجو در',
      },
    },
    {
      type: 'dropdown',
      dropdown: {
        contents: ['asdf', 'dfdsfds'],
        onChange: () => {},
        placeHolder: 'در همه موارد',
        selectedIndex: -1,
        title: 'جستجو در',
      },
    },
  ],
  filter: {
    filters: [
      { title: 'یخچال', type: FilterNodeType.category },
      { title: 'یخچال', type: FilterNodeType.category },
    ],
  },
};

export const CARGO_SEARCH_FILTER: {
  items?: {
    type: 'dropdown' | 'input' | 'button';
    dropdown?: {
      title?: string;
      placeHolder: string;
      onChange: (index: number) => any;
      contents: string[];
      selectedIndex: number;
      slice?: number;
    };
    input?: {
      title?: string;
      placeHolder: string;
      value: string;
      onChange: Function;
      slice?: number;
    };
    button?: {
      title?: string;
      icon?: IconTypes;
      onClick: Function;
      slice?: number;
    };
  }[];
  filter: FilterBarProps;
} = {
  items: [
    {
      type: 'input',
      input: {
        placeHolder: 'شماره سفارش',
        value: '',
        onChange: () => {},

        title: 'جستجو در',
      },
    },

    {
      type: 'dropdown',
      dropdown: {
        contents: ['asdf', 'dfdsfds'],
        onChange: () => {},
        placeHolder: 'تاریخ ارسال',
        selectedIndex: -1,
      },
    },
    {
      type: 'dropdown',
      dropdown: {
        contents: ['asdf', 'dfdsfds'],
        onChange: () => {},
        placeHolder: 'ساعت ارسال',
        selectedIndex: -1,
      },
    },
    {
      type: 'input',
      input: {
        placeHolder: 'انبار',
        value: '',
        onChange: () => {},
      },
    },
    {
      type: 'input',
      input: {
        placeHolder: 'نام باربری',
        value: '',
        onChange: () => {},
      },
    },
    {
      type: 'button',
      button: {
        title: 'جستجو',
        onClick: () => {},
        icon: IconTypes.Search,
      },
    },
  ],
  filter: {
    filters: [{ title: 'یخچال', type: FilterNodeType.category }],
  },
};

export const LINE_CHART = [
  [18, 51, 43, 18, 41, 69, 37, 56, 77, 69, 55, 100, 18, 51, 43, 18, 41, 69, 37, 56, 77, 69, 55, 100],
  [18, 51, 43, 18, 41, 69, 37],
  [
    18,
    51,
    43,
    18,
    41,
    69,
    37,
    56,
    77,
    69,
    55,
    100,
    18,
    51,
    43,
    18,
    41,
    69,
    37,
    56,
    77,
    69,
    55,
    100,
    37,
    56,
    77,
    69,
    55,
    100,
  ],
  [18, 51, 43, 18, 41, 69, 37, 56, 77, 69, 55, 100],
];

export const MESSAGE_SEARCH_FILTER: {
  items?: {
    type: 'dropdown' | 'input' | 'button';
    dropdown?: {
      title?: string;
      placeHolder: string;
      onChange: (index: number) => any;
      contents: string[];
      selectedIndex: number;
      slice?: number;
    };
    input?: {
      title?: string;
      placeHolder: string;
      value: string;
      onChange: Function;
      slice?: number;
    };
    button?: {
      title?: string;
      icon?: IconTypes;
      onClick: Function;
      slice?: number;
    };
  }[];
  filter: FilterBarProps;
} = {
  items: [
    {
      type: 'input',
      input: {
        placeHolder: 'متن پیام',
        value: '',
        onChange: () => {},
        slice: 1,
      },
    },

    {
      type: 'dropdown',
      dropdown: {
        contents: ['asdf', 'dfdsfds'],
        onChange: () => {},
        placeHolder: 'خوانده شده',
        selectedIndex: -1,
      },
    },
    {
      type: 'dropdown',
      dropdown: {
        contents: ['asdf', 'dfdsfds'],
        onChange: () => {},
        placeHolder: 'انتخاب کنید',
        selectedIndex: -1,
        title: 'ضرورت پیام',
      },
    },
    {
      type: 'button',
      button: {
        title: 'جستجو',
        onClick: () => {},
        icon: IconTypes.Search,
      },
    },
  ],
  filter: {
    filters: [],
  },
};

export const nodes: Array<TreeViewNodes> = [
  {
    id: 1,
    parentId: null,
    title: 'خانه و آشپزخانه',
    children: [
      {
        id: 6,
        parentId: 1,
        title: 'یخچال و فریزر',
        children: [
          {
            id: 2,
            parentId: 6,
            title: 'ساید بای ساید',
            children: [],
            folded: false,
            uri: 'www.google.com',
          },
          {
            id: 3,
            parentId: 6,
            title: 'تک نفره',
            children: [],
            folded: false,
            uri: 'www.google.com',
          },
        ],
        folded: false,
        uri: 'www.google.com',
      },
      {
        id: 4,
        parentId: null,
        title: 'گاز',
        children: [
          {
            id: 5,
            parentId: 4,
            title: 'طرح فر',
            children: [],
            folded: false,
            uri: 'www.google.com',
          },
        ],
        folded: true,
        uri: 'www.google.com',
      },
    ],
    folded: false,
    uri: 'www.google.com',
  },
];

export const PRODUCT_CLASSES = {
  title: 'خانه و آشپزخانه',
};

export const QUESTIONS_ANSWER: {
  question: string;
  answer: string;
}[] = [
  {
    question: 'کی این کالا ثبت می شه؟ در ضمن تصاویر کالا درست آپلود نمیشه . ممنون',
    answer: 'سلام جناب . 3 روز بعد ثبت خواهد شد ',
  },
  {
    question: 'سلام خسته نباشید هر چند وقت باید حسابمون تمدید کنیم',
    answer: 'سلام ممنون هر یک ماه باید تمدید شود',
  },
  {
    question: 'حداکثر کالا واسه فووش باید چند عدد باشد ؟',
    answer: 'سلام اگه حسابتون ویژه السل باشد محدودیت ندارد ولی در حالت عادی 5 عدد ',
  },
];

export const PRODUCT_MANAGEMENT: TableRow[][] = [
  [
    {
      type: 'orderItem',
      data: { img: '/muck.png', title: 'یخچال فریزر دوقلو سیلور مدل SR-103' },
    },
    {
      type: 'string',
      data: { title: 'یخچال' },
    },
    {
      type: 'string',
      data: { title: 'اسنوا' },
    },
    {
      type: 'string',
      data: { title: 'السل' },
    },
    {
      type: 'string',
      data: { title: 'موجود' },
    },
    {
      type: 'string',
      data: { title: '3' },
    },
  ],
  [
    {
      type: 'orderItem',
      data: { img: '/muck.png', title: 'یخچال فریزر دوقلو سیلور مدل SR-103' },
    },
    {
      type: 'string',
      data: { title: 'یخچال' },
    },
    {
      type: 'string',
      data: { title: 'اسنوا' },
    },
    {
      type: 'string',
      data: { title: 'السل' },
    },
    {
      type: 'string',
      data: { title: 'موجود' },
    },
    {
      type: 'string',
      data: { title: '3' },
    },
  ],
];

export const CARGO_LIST: TableRow[][] = [[]];

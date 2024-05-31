export type Article = {
  articleID: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
};
export interface ArticleQuantityChange {
  article: Article;
  change: number;
}

export const ArticleList: Article[] = [
  {
    articleID: 1,
    name: 'Artículo 1',
    imageUrl: 'https://picsum.photos/seed/1/200',
    price: 50.0,
    quantityInCart: 0,
    isOnSale: false,
  },
  {
    articleID: 2,
    name: 'Artículo 2',
    imageUrl: 'https://picsum.photos/seed/2/200',
    price: 30.0,
    quantityInCart: 0,
    isOnSale: true,
  },
  {
    articleID: 3,
    name: 'Artículo 3',
    imageUrl: 'https://picsum.photos/seed/3/200',
    price: 75.0,
    quantityInCart: 0,
    isOnSale: false,
  },
  {
    articleID: 4,
    name: 'Artículo 4',
    imageUrl: 'https://picsum.photos/seed/4/200',
    price: 120.0,
    quantityInCart: 0,
    isOnSale: true,
  },
  {
    articleID: 5,
    name: 'Artículo 5',
    imageUrl: 'https://picsum.photos/seed/5/200',
    price: 25.0,
    quantityInCart: 0,
    isOnSale: false,
  },
  {
    articleID: 6,
    name: 'Artículo 6',
    imageUrl: 'https://picsum.photos/seed/6/200',
    price: 60.0,
    quantityInCart: 0,
    isOnSale: true,
  },
  {
    articleID: 7,
    name: 'Artículo 7',
    imageUrl: 'https://picsum.photos/seed/7/200',
    price: 90.0,
    quantityInCart: 0,
    isOnSale: false,
  },
  {
    articleID: 8,
    name: 'Artículo 8',
    imageUrl: 'https://picsum.photos/seed/8/200',
    price: 45.0,
    quantityInCart: 0,
    isOnSale: true,
  },
  {
    articleID: 9,
    name: 'Artículo 9',
    imageUrl: 'https://picsum.photos/seed/9/200',
    price: 35.0,
    quantityInCart: 0,
    isOnSale: false,
  },
];

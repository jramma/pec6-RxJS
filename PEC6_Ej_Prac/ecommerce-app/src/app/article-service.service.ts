import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = Array.from({ length: 9 }, (_, i) => ({
    name: `Artículo ${i + 1}`,
    imageUrl: `https://picsum.photos/seed/${i + 1}/200`,
    price: +(Math.random() * 49 + 1).toFixed(2),
    quantityInCart: 0,
    isOnSale: Math.random() < 0.5,
  }));

  addQuantity(article: Article): void {
    article.quantityInCart++;
  }

  onQuantityChange(event: ArticleQuantityChange): void {
    const article = this.articles.find((a) => a === event.article);
    if (article) {
      article.quantityInCart += event.change;
    }
  }
}

export type Article = {
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
// ng generate service article-service

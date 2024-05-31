import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticleList, Article } from './articles.module';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [];

  constructor() {
    this.getArticles().subscribe((articles) => (this.articles = articles));
  }

  getArticles(): Observable<Article[]> {
    const localArticles = JSON.parse(localStorage.getItem('articles') || '[]');
    console.log(localArticles);
    if (localArticles.length > 0) {
      // Si ya hay artículos en localStorage, devuélvelos
      return of(localArticles);
    } else {
      localArticles.set(ArticleList);
      return of(localArticles);
    }
  }

  changeQuantity(
    articleID: number,
    changeInQuantity: number
  ): Observable<Article> {
    let article = this.articles.find((a) => a.articleID === articleID);
    if (article) {
      article.quantityInCart += changeInQuantity;
    } else {
      throw new Error('Article not found');
    }
    return of(article);
  }

  create(article: Article): Observable<Article> {
    this.articles.push(article);
    localStorage.setItem('articles', JSON.stringify(this.articles));
    return of(article);
  }
}

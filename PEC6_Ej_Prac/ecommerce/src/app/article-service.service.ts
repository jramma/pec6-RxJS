import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { ArticleList, Article } from './articles.module';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [];
  private articles$ = new BehaviorSubject<Article[]>(this.articles);

  constructor() {
    this.getArticles().subscribe((articles) => (this.articles = articles));
  }

  getArticles(): Observable<Article[]> {
    let localArticles = JSON.parse(localStorage.getItem('articles') || '[]');
    console.log(localArticles);
    if (localArticles.length > 0) {
      // Si ya hay artículos en localStorage, devuélvelos
      return of(localArticles);
    } else {
      // Si no hay artículos en localStorage, guarda ArticleList en localStorage
      localStorage.setItem('articles', JSON.stringify(ArticleList));
      localArticles = ArticleList;
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

  updateArticle(newArticle: Article): void {
    const index = this.articles.findIndex(a => a.articleID === newArticle.articleID);
    if (index !== -1) {
      this.articles[index] = newArticle;
      this.articles$.next(this.articles); // Emite un nuevo valor
    }
  }

  getArticlesObservable(): Observable<Article[]> {
    return this.articles$.asObservable();
  }

  generateArticleId(): Observable<number> {
    return this.getArticles().pipe(
      map((articles: Article[]) => {
        let newArticleID: number;
        do {
          newArticleID = Math.floor(Math.random() * 1000000); // Generate a random ID
        } while (articles.find((a: Article) => a.articleID === newArticleID)); // Continue generating until you get a unique ID
        return newArticleID;
      })
    );
  }
}
export function NameArticleValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
  const isForbiddenName = forbiddenNames.includes(control.value);
  return isForbiddenName ? { forbiddenName: { value: control.value } } : null;
}

import { Component, OnInit } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';
import { Article } from '../articles.module';
import { ArticleService } from '../article-service.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }
  onAddQuantity(article: Article): void {
    this.articleService
      .changeQuantity(article.articleID, 1)
      .subscribe((newArticle) => {
        const index = this.articles.findIndex(
          (a) => a.articleID === newArticle.articleID
        );
        if (index !== -1) {
          this.articles[index] = newArticle;
        }
      });
  }

  onRemoveQuantity(article: Article): void {
    this.articleService
      .changeQuantity(article.articleID, -1)
      .subscribe((newArticle) => {
        const index = this.articles.findIndex(
          (a) => a.articleID === newArticle.articleID
        );
        if (index !== -1) {
          this.articles[index] = newArticle;
        }
      });
  }

  onQuantityChange(quantityChange: {
    article: Article;
    changeInQuantity: number;
  }): void {
    this.articleService
      .changeQuantity(
        quantityChange.article.articleID,
        quantityChange.changeInQuantity
      )
      .subscribe((newArticle) => {
        const index = this.articles.findIndex(
          (a) => a.articleID === newArticle.articleID
        );
        if (index !== -1) {
          this.articles[index] = newArticle;
        }
      });
  }
}

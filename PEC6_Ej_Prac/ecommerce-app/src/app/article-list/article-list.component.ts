import { Component } from '@angular/core';
import { ArticleItemComponent } from '../article-item2/article-item.component';
import { CommonModule } from '@angular/common';
import { ArticleService, Article, ArticleQuantityChange} from '../article-service.service';


@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  constructor(private articleService: ArticleService) {}

  addQuantity(article: Article): void {
    this.articleService.addQuantity(article);
  }

  onQuantityChange(event: ArticleQuantityChange): void {
    this.articleService.onQuantityChange(event);
  }

}


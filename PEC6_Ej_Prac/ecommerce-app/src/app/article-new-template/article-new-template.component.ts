import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css',
})
export class ArticleNewTemplateComponent {
  article = {
    name: '',
    price: 0,
    imageUrl: '',
    isOnSale: false
  };
  submitted: boolean = false;
  formError: string | null = null;

  onSubmit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      console.log(this.article);
      this.formError = null;
    } else {
      this.formError = 'Por favor, corrija los errores en el formulario.';
    }
  }
}

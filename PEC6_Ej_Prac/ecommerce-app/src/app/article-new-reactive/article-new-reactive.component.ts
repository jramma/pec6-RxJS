import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css',
})
export class ArticleNewReactiveComponent {
  article: FormGroup;
  submitted = false;
  formError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.article = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), NameArticleValidator],
      ],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: [
        '',
        [Validators.required, Validators.pattern('(https?://.*.(?:png|jpg))')],
      ],
      isOnSale: [false],
    });
  }

  get name() {
    return this.article.get('name');
  }

  get price() {
    return this.article.get('price');
  }

  get imageUrl() {
    return this.article.get('imageUrl');
  }

  onSubmit() {
    this.submitted = true;
    if (this.article.valid) {
      console.log(this.article.value);
      this.formError = null;
    } else {
      if (this.name && this.name.errors && this.name.errors['forbiddenName']) {
        this.formError =
          'El nombre del artículo no puede ser Prueba, Test, Mock, o Fake.';
      } else {
        this.formError = 'Por favor, corrija los errores en el formulario.';
      }
    }
  }
}
export function NameArticleValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
  const isForbiddenName = forbiddenNames.includes(control.value);
  return isForbiddenName ? { forbiddenName: { value: control.value } } : null;
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from '../blog/post-attributes';

@Component({
  template: `
    <h1>Books</h1>

    @for (post of posts; track post.attributes.slug) {
      <a [routerLink]="['/books/', post.attributes.slug]">
        <h2 class="post__title">{{ post.attributes.title }}</h2>
        <p class="post__desc">{{ post.attributes.description }}</p>
      </a>
    }
  `,
  imports: [RouterLink],
  selector: 'app-books',
  standalone: true,
})
export default class BooksComponent {
  readonly posts = injectContentFiles<PostAttributes>((file) =>
    file.filename.includes('/src/content/books/'),
  );
}

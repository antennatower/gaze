import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from './post-attributes';

@Component({
  template: `
    <h1>Thoughts & ramblings</h1>

    @for (post of posts; track post.attributes.slug) {
      <a [routerLink]="['/blog/', post.attributes.slug]">
        <h2 class="post__title">{{ post.attributes.title }}</h2>
        <p class="post__desc">{{ post.attributes.description }}</p>
      </a>
    }
  `,
  imports: [RouterLink],
  selector: 'app-blog',
  standalone: true,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((file) =>
    file.filename.includes('/src/content/blog/'),
  );
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from './post-attributes';

@Component({
  template: `
    <h1 class="gaze-subtitle">Thoughts & ramblings</h1>

    @for (post of posts; track post.attributes.slug) {
      <article class="border-b-2 border-dotted border-neutral-300 py-2">
        <a
          class="not-italic no-underline"
          [routerLink]="['/posts/', post.attributes.slug]"
        >
          - {{ post.attributes.title }}
        </a>
        <footer class="flex justify-between items-start">
          <p class="text-sm italic">
            {{ post.attributes.description }}
          </p>
          <div>
            @for (category of post.attributes.categories; track $index) {
              <p class="text-sm italic">
                {{ category }}
              </p>
            }
          </div>
        </footer>
      </article>
    }
  `,
  imports: [RouterLink],
  selector: 'app-posts',
  standalone: true,
})
export default class PostsComponent {
  readonly posts = injectContentFiles<PostAttributes>((file) =>
    file.filename.includes('/src/content/posts/'),
  ).sort((a, b) => b.attributes.date.localeCompare(a.attributes.date));
}

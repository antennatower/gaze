import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from './post-attributes';

@Component({
  template: `
    <h1 class="gaze-subtitle">Thoughts & ramblings</h1>

    @for (post of posts; track post.attributes.slug) {
      <article class="border-b-2 border-dotted border-black py-2">
        <a
          class="not-italic no-underline"
          [routerLink]="['/blog/', post.attributes.slug]"
        >
          - {{ post.attributes.title }}
        </a>
        <footer class="flex justify-between items-end">
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
  selector: 'app-blog',
  standalone: true,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((file) =>
    file.filename.includes('/src/content/blog/'),
  );
}

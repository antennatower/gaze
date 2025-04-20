import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';

import PostAttributes from './post-attributes';

@Component({
  template: `
    @if (post$ | async; as post) {
      <h1 class="gaze-subtitle">{{ post.attributes.title }}</h1>
      <article>
        <img [src]="post.attributes.coverImage" />
        <analog-markdown [content]="post.content" />
      </article>
      <!-- do the decoration on top -->
      <i class="text-sm underline decoration-dotted">{{
        post.attributes.date | date
      }}</i>
    }
  `,
  imports: [AsyncPipe, MarkdownComponent, DatePipe],
  selector: 'app-post',
  standalone: true,
})
export default class PostComponent {
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'posts',
  });
}

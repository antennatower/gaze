import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
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
    }
  `,
  imports: [AsyncPipe, MarkdownComponent],
  selector: 'app-post',
  standalone: true,
})
export default class PostComponent {
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'posts',
  });
}

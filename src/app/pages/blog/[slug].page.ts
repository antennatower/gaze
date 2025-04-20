import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';

import PostAttributes from './post-attributes';

@Component({
  template: `
    @if (post$ | async; as post) {
      <article>
        <img />
        <analog-markdown [content]="post.content" />
      </article>
    }
  `,
  imports: [AsyncPipe, MarkdownComponent],
  selector: 'app-blog-post',
  standalone: true,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'blog',
  });
}

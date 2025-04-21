import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="gaze-subtitle">Links</h1>

    <div>
      @if (links | async; as links) {
        <analog-markdown [content]="links.content" />
      }
    </div>
  `,
  styles: `
    h2 {
      @extend .gaze-subtitle;
    }
  `,
  imports: [AsyncPipe, MarkdownComponent],
  selector: 'app-quotes',
  standalone: true,
})
export default class QuotesComponent {
  protected readonly links = injectContent({
    customFilename: 'links',
  });
}

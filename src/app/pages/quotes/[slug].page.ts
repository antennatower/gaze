import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import QuoteAttributes from './quote-attributes';

@Component({
  template: `
    @if (quote$ | async; as quote) {
      <h1 class="gaze-subtitle">{{ quote.attributes.title }}</h1>
      <article class="w-full text-start">
        <div class="mb-9 justify-self-center">
          <analog-markdown class="text-l" [content]="quote.content" />
        </div>
        <footer
          class="flex justify-between items-end border-t-2 border-dotted border-black "
        >
          <p class="text-sm italic underline">
            {{ quote.attributes.source }}
          </p>
          <div class="flex gap-2">
            @for (category of quote.attributes.categories; track $index) {
              <p class="text-sm italic flex">
                {{ category }}
              </p>
            }
          </div>
        </footer>
      </article>
    }
  `,
  imports: [AsyncPipe, MarkdownComponent],
  selector: 'app-quote',
  standalone: true,
})
export default class QuoteComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly $subdirectory = toSignal(
    this.route.queryParams.pipe(map((params) => params['subdirectory'])),
  );

  readonly quote$ = injectContent<QuoteAttributes>({
    param: 'slug',
    subdirectory: this.$subdirectory(),
  });
}

import { injectContent, injectContentFiles } from '@analogjs/content';
import { Component, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import QuoteAttributes from './quote-attributes';
import { zip } from 'rxjs';

@Component({
  template: `
    <h1 class="gaze-subtitle">Quotes</h1>

    @for (quote of quotesFiles; track quote.attributes.slug) {
      <article class="border-b-2 border-dotted border-black py-2">
        <p>
          {{ quote.content }}
        </p>
        <footer class="flex justify-between items-end">
          <p class="text-sm italic">
            {{ quote.attributes.source }}
          </p>
          <div>
            @for (category of quote.attributes.categories; track $index) {
              <p class="text-sm italic">
                {{ category }}
              </p>
            }
          </div>
        </footer>
      </article>
    }
  `,
  selector: 'app-quotes',
  standalone: true,
})
export default class QuotesComponent {
  readonly quotesFiles = injectContentFiles<QuoteAttributes>((file) =>
    file.filename.includes('/src/content/quotes/'),
  );

  readonly quotes = injectContent<QuoteAttributes>({
    customFilename: 'quotes/captives-war/what-is-is.md',
  });

  constructor() {
    this.quotes.subscribe(console.log);
    console.log(this.quotesFiles)
  }
}

import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';

import QuoteAttributes from './quote-attributes';
import { RouterLink } from '@angular/router';

@Component({
  template: `
    <h1 class="gaze-subtitle">Quotes</h1>

    @for (quote of quotesFiles; track quote.attributes.slug) {
      <article class="border-b-2 border-dotted border-black py-2">
        <a
          class="not-italic no-underline"
          [routerLink]="['/quotes/', quote.attributes.slug]"
          [queryParams]="{ subdirectory: quote.attributes.subdirectory }"
        >
          - {{ quote.attributes.title }}
        </a>
        <footer class="flex justify-between items-start">
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
  imports: [RouterLink],
  selector: 'app-quotes',
  standalone: true,
})
export default class QuotesComponent {
  readonly quotesFiles = injectContentFiles<QuoteAttributes>((file) =>
    file.filename.includes('/src/content/quotes/'),
  ).sort((a, b) => b.attributes.date.localeCompare(a.attributes.date));
}

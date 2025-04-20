import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  template: `
    <main class="max-h-[90vh]">
      <div class="mb-2">
        <h1
          routerLink="/"
          class="text-4xl font-bold underline decoration-double decoration-2 mb-4 cursor-pointer bg-black text-white select-none"
        >
          Antenna Tower
        </h1>
        <nav class="flex items-start gap-5 border-b-black border-b-2 mb-2">
          <a class="gaze-anchor" routerLink="/">Blog</a>
          <a class="gaze-anchor" routerLink="/quotes">Quotes</a>
          <a class="gaze-anchor" routerLink="/books">Books</a>
        </nav>
      </div>
      <div class="max-h-[90vh] overflow-y-auto gaze-scrollbar">
        <router-outlet />
      </div>
    </main>
  `,
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  standalone: true,
})
export class AppComponent {}

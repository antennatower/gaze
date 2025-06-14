import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  template: `
    <main class="max-h-[90vh]">
      <div class="mb-2">
        <h1
          routerLink="/"
          class="text-5xl font-bold underline decoration-double decoration-2 mb-4 cursor-pointer text-neutral-300 select-none"
        >
          Antenna Tower
        </h1>
        <nav
          class="flex items-start gap-5 border-b-neutral-300 border-b-2 mb-2"
        >
          <a class="gaze-anchor" routerLink="/">Blog</a>
          <a class="gaze-anchor" routerLink="/quotes">Quotes</a>
          <a class="gaze-anchor ml-auto" routerLink="/links">Links</a>
        </nav>
      </div>
      <div class="max-h-[88vh] overflow-y-auto gaze-scrollbar">
        <router-outlet />
      </div>
    </main>
  `,
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  standalone: true,
})
export class AppComponent {}

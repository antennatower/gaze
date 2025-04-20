import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  template: `
    <nav>
      <a routerLink="/">Blog</a>
      <a routerLink="/quotes">Quotes</a>
      <a routerLink="/books">Books</a>
    </nav>

    <router-outlet />
  `,
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  standalone: true,
})
export class AppComponent {}

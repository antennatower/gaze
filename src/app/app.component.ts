import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  template: `
    <nav>
      <a routerLink="/">Home</a>
    </nav>

    <router-outlet />
  `,
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  standalone: true,
})
export class AppComponent {}

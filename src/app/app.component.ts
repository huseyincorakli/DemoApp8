import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <a routerLink=""> Home</a> |
    <a routerLink="about"> About</a> |
    <a routerLink="contact"> Contact</a> <br>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'DemoApp8';
}

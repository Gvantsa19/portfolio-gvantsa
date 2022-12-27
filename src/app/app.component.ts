import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  open = false;

  items = ['About', 'Our life', 'Projects', 'Team',' Contact'];

  toggleOpen() {
    this.open = !this.open;
  }
}

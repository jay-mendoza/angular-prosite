import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentYear: number;

  ngOnInit() {
    this.currentYear = (new Date()).getFullYear();
  }
}

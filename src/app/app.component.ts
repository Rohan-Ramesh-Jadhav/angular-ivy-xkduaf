import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  private visiblity: boolean = false;

  Check() {
    return this.visiblity;
  }

  toggle() {
    this.visiblity = !this.visiblity;
  }
}

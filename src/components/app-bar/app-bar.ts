import { Component } from '@angular/core';

/**
 * Generated class for the AppBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-bar',
  templateUrl: 'app-bar.html'
})
export class AppBarComponent {

  text: string;

  constructor() {
    console.log('Hello AppBarComponent Component');
    this.text = 'Hello World';
  }

}

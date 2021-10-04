import {Component, Renderer2} from '@angular/core';

import { Car } from './classes/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transport-game';
  car: Car;

  constructor(private readonly renderer2: Renderer2) {
    //this.transport = new Car(1200, 600, this.renderer2);
  }

}

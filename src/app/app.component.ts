import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

import { Car } from './classes/car';
import {Transport} from "./classes/transport";
import {Truck} from "./classes/truck";
import {Plane} from "./classes/plane";
import {Moto} from "./classes/moto";
import {Submarine} from "./classes/submarine";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sky') sky: ElementRef | undefined;

  title = 'transport-game';
  transportCar: Transport | undefined;
  transportTruck: Transport | undefined;
  transportPlane: Transport | undefined;
  transportMoto: Transport | undefined;
  transportSubmarine: Transport | undefined;

  constructor(private readonly renderer2: Renderer2) {
  }


  createCar() {
    this.transportCar = new Car(1200, 600, this.renderer2);
    this.transportCar.moveForward();
    this.renderer2.appendChild(this.sky?.nativeElement, this.transportCar?.getHtmlElement());
  }

  createTruck() {
    this.transportTruck = new Truck( 1200, 600, this.renderer2);
    this.renderer2.appendChild(this.sky?.nativeElement, this.transportTruck?.getHtmlElement());

  }

  createPlane() {
    this.transportPlane = new Plane( 1200, 600, this.renderer2);
    this.renderer2.appendChild(this.sky?.nativeElement, this.transportPlane?.getHtmlElement());
  }

  createMoto() {
    this.transportMoto = new Moto( 1200, 600, this.renderer2);
    this.renderer2.appendChild(this.sky?.nativeElement, this.transportMoto?.getHtmlElement());
  }

  createSubmarine() {
    this.transportSubmarine = new Submarine( 1200, 600, this.renderer2);
    this.renderer2.appendChild(this.sky?.nativeElement, this.transportSubmarine?.getHtmlElement());
  }

}

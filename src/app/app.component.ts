import {Component, ElementRef, Inject, Renderer2, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
  @ViewChild('underwater') underwater: ElementRef | undefined;

  title = 'transport-game';
  transportCar: Transport | undefined;
  transportTruck: Transport | undefined;
  transportPlane: Transport | undefined;
  transportMoto: Transport | undefined;
  transportSubmarine: Transport | undefined;

  constructor(@Inject(DOCUMENT) private document: Document, private readonly renderer2: Renderer2) {
  }


  createCar() {
    if (this.transportCar) {
      this.transportCar.destroy();
    }
    this.transportCar = new Car(this.sky, this.document, this.renderer2);
  }


  createTruck() {
    if (this.transportTruck) {
      this.transportTruck.destroy();
    }
    this.transportTruck = new Truck(this.sky, this.document, this.renderer2);
  }

  createPlane() {
    if (this.transportPlane) {
      this.transportPlane.destroy();
    }
    this.transportPlane = new Plane(this.sky, this.document, this.renderer2);
  }

  createMoto() {
    if (this.transportMoto) {
      this.transportMoto.destroy();
    }
    this.transportMoto = new Moto(this.sky, this.document, this.renderer2);
  }

  createSubmarine() {
    if (this.transportSubmarine) {
      this.transportSubmarine.destroy();
    }
    this.transportSubmarine = new Submarine(this.sky, this.document, this.renderer2);
  }

}

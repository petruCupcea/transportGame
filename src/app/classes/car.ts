import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Car extends Transport {

  protected image: string;

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Car') {
    super(parentNode, document, renderer2, name);
    this.image = 'https://w7.pngwing.com/pngs/886/891/png-transparent-mitsubishi-lancer-evolution-city-car-mitsubishi-motors-family-car-car-compact-car-sedan-car.png';
    this.renderer2.setStyle(this.htmlElement, 'background-image', `url(${this.image})` );
  }

   moveUp() {
     console.log('Cars don\'t fly');
   }

   moveDown() {
     console.log('Car will sink');
   }
}

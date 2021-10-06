import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Truck extends Transport{

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Truck') {
    super(parentNode, document, renderer2, name);
  }

  moveForward() {
    this.positionX += 10;
    this.updatePosition();
  }

  moveBack() {
    this.positionX -= 10;
    this.updatePosition();
  }

  moveUp() {
    console.log('Trucks don\'t fly');
  }

  moveDown() {
    console.log('Truck will sink');
  }
}

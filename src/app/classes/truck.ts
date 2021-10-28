import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Truck extends Transport{

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Truck') {
    super(parentNode, document, renderer2, name);
    this.image = 'https://cdn.picpng.com/truck/pic-truck-29720.png';
    this.renderer2.setStyle(this.htmlElement, 'background-image', `url(${this.image})` );
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
    this.upDownFail();
  }

  moveDown() {
    this.upDownFail();
  }
}

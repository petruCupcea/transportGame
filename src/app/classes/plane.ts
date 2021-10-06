import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Plane extends Transport{

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Plane') {
    super(parentNode, document, renderer2, name);
  }

  moveForward() {
    this.positionX += 40;
    this.updatePosition();
    console.log('x =' + this.positionX + ' y =' + this.positionY);
  }
}

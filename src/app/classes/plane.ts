import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Plane extends Transport{

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Plane') {
    super(parentNode, document, renderer2, name);
  }

  updatePosition() {
    if (this.positionY < 0) {
      this.positionY = 260;
    } else if (this.positionY > 260) {
      this.positionY = 0;
    }
    super.updatePosition();
  }

  moveForward() {
    this.positionX += 40;
    this.updatePosition();
    console.log('x =' + this.positionX + ' y =' + this.positionY);
  }
  moveBack() {
    if(this.positionY === 0) {
      super.moveBack();
    } else {
      console.log('flying planes cant go back');
    }
  }
}

import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Plane extends Transport{
  protected image : string;

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Plane') {
    super(parentNode, document, renderer2, name);
    this.image = 'https://i0.wp.com/www.redbrick.me/wp-content/uploads/2021/07/plane.jpg?ssl=1';
    this.renderer2.setStyle(this.htmlElement, 'background-image', `url(${this.image})` );
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
  }
  moveBack() {
    if(this.positionY === 0) {
      super.moveBack();
    } else {
      console.log('flying planes cant go back');
    }
  }
}

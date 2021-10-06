import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Submarine extends Transport{

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Submarine') {
    super(parentNode, document, renderer2, name);
    this.image = 'https://www.pngall.com/wp-content/uploads/2/Submarine-PNG-Picture.png';
    this.renderer2.setStyle(this.htmlElement, 'background-image', `url(${this.image})` );
  }

  updatePosition() {
    if (this.positionY > -20) {
      this.positionY = -300;
    } else if (this.positionY < -300) {
      this.positionY = -20;
    }
    super.updatePosition();
  }
  moveBack() {
    console.log('A\'int going back');
  }
}

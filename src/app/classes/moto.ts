import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Moto extends Transport{

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Moto') {
    super(parentNode, document, renderer2, name);
    this.image = 'https://image.emojipng.com/422/6585422.jpg';
    this.renderer2.setStyle(this.htmlElement, 'background-image', `url(${this.image})` );
  }

  moveBack() {
    console.log('Not going there');
  }

  moveUp() {
    this.upDownFail();
  }

  moveDown() {
    this.upDownFail();
  }
}

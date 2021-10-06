import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Moto extends Transport{

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Moto') {
    super(parentNode, document, renderer2, name);
  }

  moveBack() {
    console.log('Not going there');
  }

  moveUp() {
    console.log('not going to fly');
  }

  moveDown() {
    console.log('this moto will sink');
  }
}

import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";

export class Car extends Transport {

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Car') {
    super(parentNode, document, renderer2, name);
  }

   moveUp() {
     console.log('Cars don\'t fly');
   }

   moveDown() {
     console.log('Car will sink');
   }
}

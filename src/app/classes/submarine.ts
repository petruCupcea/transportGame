import {Transport} from "./transport";
import {ElementRef, Renderer2} from "@angular/core";
import {Truck} from "./truck";

export class Submarine extends Transport{

  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2,name: string = 'Submarine') {
    super(parentNode, document, renderer2, name);
  }

  moveBack() {
    console.log('A\'int going back');
  }

  moveUp() {
    console.log('Submarines are not flying today');
  }
}

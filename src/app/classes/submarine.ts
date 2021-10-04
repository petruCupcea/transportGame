import {Transport} from "./transport";
import {Renderer2} from "@angular/core";

export class Submarine extends Transport {

  constructor(width: number, height:number, renderer2: Renderer2,name: string = 'Submarine') {
    super(width, height, renderer2, name);
  }

  moveBack() {
    console.log('A\'int going back');
  }

  moveUp() {
    console.log('Submarines are not flying today');
  }
}

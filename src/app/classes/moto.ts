import {Transport} from "./transport";
import {Renderer2} from "@angular/core";

export class Moto extends Transport {

  constructor(width: number, height:number, renderer2: Renderer2,name: string = 'Moto') {
    super(width, height, renderer2, name);
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

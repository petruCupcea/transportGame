import {Transport} from "./transport";
import {Renderer2} from "@angular/core";

export class Truck extends Transport {

  constructor(width: number, height:number, renderer2: Renderer2,name: string = 'Truck') {
    super(width, height, renderer2, name);
  }

  moveUp() {
    console.log('Trucks don\'t fly');
  }

  moveDown() {
    console.log('Truck will sink');
  }

}

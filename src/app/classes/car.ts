import {Transport} from "./transport";
import {Renderer2} from "@angular/core";

export class Car extends Transport {

  constructor(width: number, height:number, renderer2: Renderer2,name: string = 'Car') {
    super(width, height, renderer2, name);
  }

   moveUp() {
     console.log('Cars don\'t fly');
   }

   moveDown() {
     console.log('Car will sink');
   }

}

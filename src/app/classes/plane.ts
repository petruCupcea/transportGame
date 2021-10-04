import {Transport} from "./transport";
import {Renderer2} from "@angular/core";

export class Plane extends Transport {

  constructor(width: number, height:number, renderer2: Renderer2,name: string = 'Plane') {
    super(width, height, renderer2, name);
  }

  moveForward() {
    Transport.positionX += 50;
    console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
  }

  moveDown() {
    console.log('This plane is not going down');
  }

}

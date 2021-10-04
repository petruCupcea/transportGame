import {Transport} from "./transport";

export class Plane extends Transport {

  moveForward() {
    Transport.positionX += 50;
    console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
  }

  moveDown() {
    console.log('This plane is not going down');
  }

}

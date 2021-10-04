import {Transport} from "./transport";

export class Truck extends Transport {

  moveUp() {
    console.log('Trucks don\'t fly');
  }

  moveDown() {
    console.log('Truck will sink');
  }

}

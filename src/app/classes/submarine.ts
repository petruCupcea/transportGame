import {Transport} from "./transport";

class Submarine extends Transport {

  moveBack() {
    console.log('A\'int going back');
  }

  moveUp() {
    console.log('Submarines are not flying today');
  }
}

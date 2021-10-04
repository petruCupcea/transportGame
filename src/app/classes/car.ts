import {Transport} from "./transport";

class Car extends Transport {

   moveUp() {
     console.log('Cars don\'t fly');
   }

   moveDown() {
     console.log('Car will sink');
   }

}

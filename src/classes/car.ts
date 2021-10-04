 class Car extends Transport {

  constructor(width: number, height: number) {
    super(width, height);
  }

   moveUp() {
     console.log('Cars don\'t fly');
   }

   moveDown() {
     console.log('Car will sink');
   }

}

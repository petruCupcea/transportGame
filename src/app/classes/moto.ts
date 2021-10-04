class Moto extends Transport {

  constructor(width: number, height: number) {
    super(width, height);
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

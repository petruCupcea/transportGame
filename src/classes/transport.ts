  abstract class Transport {
    positionX: number;
    positionY: number;


    constructor(x: number, y: number) {
      this.positionX = x;
      this.positionY = y;
    }


    display(): void{
      console.log('x =' + this.positionX + ' y =' + this.positionY);
    }

    moveForward(x: number){
      this.positionX = x + 20;
    }


    moveBack(x: number){
      this.positionX = x - 20;
    }


    moveUp(y: number) {
      this.positionY = y + 20;
    }


    moveDown(y: number) {
      this.positionY = y - 20;
    }
  }

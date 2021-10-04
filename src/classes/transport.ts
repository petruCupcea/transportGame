  abstract class Transport {
    protected static positionX : number = 0;
    protected static positionY : number = 0;
    private readonly width: number;
    private readonly height: number;


    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }


    display(): void{
      console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
      console.log('width = ' + this.width + 'height = ' + this.height);
    }

    moveForward(x: number){
      Transport.positionX = x + 20;
      console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
    }


    moveBack(x: number){
      Transport.positionX = x - 20;
      console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
    }


    moveUp(y: number) {
      Transport.positionY = y + 20;
      console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
    }


    moveDown(y: number) {
      Transport.positionY = y - 20;
      console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
    }
  }

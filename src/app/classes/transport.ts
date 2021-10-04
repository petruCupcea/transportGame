import {Renderer2} from "@angular/core";

export abstract class Transport {
  protected static positionX : number = 0;
  protected static positionY : number = 0;
  private readonly width: number;
  private readonly height: number;
  private readonly renderer2: Renderer2;


  constructor(width: number, height: number, renderer2: Renderer2) {
    this.width = width;
    this.height = height;
    this.renderer2 = renderer2
    //this.htmlElement = renderer2.createElement('div');
    //this.renderer2.setStyle(this.htmlElement, 'top', `${Transport.positionX}px`);
    // this.renderer2.setStyle(this.htmlElement, 'left', `${Transport.positionY}px`);
  }


  display(): void{
    console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
    console.log('width = ' + this.width + 'height = ' + this.height);
  }

  moveForward(){
    Transport.positionX += 20;
    console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
  }


  moveBack(){
    Transport.positionX -= 20;
    console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
  }


  moveUp() {
    Transport.positionY += 20;
    console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
  }


  moveDown() {
    Transport.positionY -= 20;
    console.log('x =' + Transport.positionX + ' y =' + Transport.positionY);
  }
}

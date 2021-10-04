import {Renderer2} from "@angular/core";

export abstract class Transport {
  protected static positionX : number = 0;
  protected static positionY : number = 0;
  protected name: string;
  private readonly width: number;
  private readonly height: number;
  private readonly renderer2: Renderer2;
  protected htmlElement;


  constructor(width: number, height: number, renderer2: Renderer2,name: string) {
    this.width = width;
    this.height = height;
    this.name = name;
    this.renderer2 = renderer2;
    this.htmlElement = renderer2.createElement('div');
    this.renderer2.addClass(this.htmlElement, 'transport');
    this.renderer2.setStyle(this.htmlElement, 'left', `${Transport.positionX}px`);
    this.renderer2.setStyle(this.htmlElement, 'bottom', `${Transport.positionY}px`);
    this.renderer2.appendChild(this.htmlElement, this.renderer2.createText(name));
  }


  getHtmlElement() {
    console.log(this.htmlElement);
    return this.htmlElement;
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
  returnName() {
    return this.name;
  }
}

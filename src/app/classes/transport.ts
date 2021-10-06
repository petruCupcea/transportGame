import {ElementRef, Renderer2} from "@angular/core";

export abstract class Transport {

  protected positionX : number;
  protected positionY : number;
  protected name: string;
  protected htmlElement: HTMLElement;
  private readonly width: number;
  private readonly height: number;
  private readonly parentNode: ElementRef;
  private readonly document: Document;
  private readonly renderer2: Renderer2;
  private active: boolean;


  constructor(parentNode: ElementRef, document: Document, renderer2: Renderer2, name: string) {
    this.active = false;
    this.document = document;
    this.width = parentNode.nativeElement.clientWidth;
    this.height = parentNode.nativeElement.clientHeight;
    this.name = name;
    this.parentNode = parentNode;
    this.renderer2 = renderer2;
    this.positionX = 0;
    this.positionY = 0;
    this.htmlElement = renderer2.createElement('div');
    this.renderer2.addClass(this.htmlElement, `transport`);
    this.updatePosition();
    this.renderer2.appendChild(this.htmlElement, this.renderer2.createText(name));
    this.renderer2.appendChild(this.parentNode.nativeElement, this.htmlElement);

    this.htmlElement.onclick = (event) => {
      event.stopPropagation();
      this.active = true;
      console.log('active');
    }


    this.document.onclick = () => {
      this.active = false;
      console.log('parentNode');
    }
    this.document.onkeydown = (event) => {
        if(this.active === true) {
           if(event.key === 'ArrowUp') {
             this.moveUp();
           } else if (event.key === 'ArrowRight') {
             this.moveForward();
           } else if (event.key === 'ArrowLeft') {
             this.moveBack();
           } else if (event.key === 'ArrowDown') {
             this.moveDown();
           }
        }
    }
  }

  updatePosition() {
    if(this.positionX > this.width - 120) {
      this.positionX = 0;
    } else if (this.positionX < 0) {
      this.positionX = this.width -120;
    }
    this.renderer2.setStyle(this.htmlElement, 'left', `${this.positionX}px`);
    this.renderer2.setStyle(this.htmlElement, 'bottom', `${this.positionY}px`);
  }

  moveForward(){
    this.positionX += 20;
    this.updatePosition();
    console.log('x =' + this.positionX + ' y =' + this.positionY);
  }


  moveBack(){
    this.positionX -= 20;
    this.updatePosition();
    console.log('x =' + this.positionX + ' y =' + this.positionY);
  }


  moveUp() {
    this.positionY += 20;
    this.updatePosition();
    console.log('x =' + this.positionX + ' y =' + this.positionY);
  }


  moveDown() {
    this.positionY -= 20;
    this.updatePosition();
    console.log('x =' + this.positionX + ' y =' + this.positionY);
  }

  destroy() {
    this.renderer2.removeChild(this.parentNode.nativeElement, this.htmlElement);
  }
}

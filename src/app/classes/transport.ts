import {ElementRef, Renderer2} from "@angular/core";

export abstract class Transport {

  protected image: string;
  protected positionX : number;
  protected positionY : number;
  protected name: string;
  protected htmlElement: HTMLElement;
  private readonly width: number;
  private readonly height: number;
  private readonly parentNode: ElementRef;
  private readonly document: Document;
  protected readonly renderer2: Renderer2;
  private active: boolean;
  private documentClickEventListenerRef: (event) => void;
  private htmlElementClickEventListenerRef: (event) => void;
  private documentKeyDownEventListenerRef: (event) => void;


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
    // this.renderer2.appendChild(this.htmlElement, this.renderer2.createText(name));
    this.renderer2.appendChild(this.parentNode.nativeElement, this.htmlElement);

    this.documentClickEventListenerRef = this.documentClickEventListener();
    this.htmlElementClickEventListenerRef = this.htmlElementClickEventListener();
    this.documentKeyDownEventListenerRef = this.documentKeyDownEventListener()

    this.htmlElement.addEventListener('click', this.htmlElementClickEventListenerRef);

    this.document.addEventListener('click', this.documentClickEventListenerRef);

    this.document.addEventListener('keydown', this.documentKeyDownEventListenerRef);

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
  }


  moveBack(){
    this.positionX -= 20;
    this.updatePosition();
  }


  moveUp() {
    this.positionY += 20;
    this.updatePosition();
  }


  moveDown() {
    this.positionY -= 20;
    this.updatePosition();
  }

  destroy() {
    this.document.removeEventListener('click', this.documentClickEventListenerRef);
    this.document.removeEventListener('keydown', this.documentKeyDownEventListenerRef);
    this.htmlElement.removeEventListener('click', this.htmlElementClickEventListenerRef);
    this.renderer2.removeChild(this.parentNode.nativeElement, this.htmlElement);
  }


  private documentClickEventListener(): (event) => void {
    return (event) => {
      if (this.htmlElement !== event.target) {
        this.active = false;
      }
      this.focusColorChange();
    };
  }

  private htmlElementClickEventListener(): (event) => void {
  return (event) => {
    if(this.htmlElement === event.target) {
      this.active = true;
      }
    this.focusColorChange();
    };
  }

  private documentKeyDownEventListener(): (event) => void {
    return (event) => {
      console.log(event, 'documentKeyDownEventListener');
      if(this.active === true) {
        console.log(event);
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

  private focusColorChange() {
    if(this.active === true) {
      this.renderer2.addClass(this.htmlElement, `active`);
    } else {
      this.renderer2.removeClass(this.htmlElement, `active`);
    }
  }

  upDownFail() {
    this.renderer2.setStyle(this.htmlElement,'animation', 'ease-in up-fail 0.1s')
    setTimeout(() => {
      this.renderer2.removeStyle(this.htmlElement, 'animation');
    }, 100);
  }

}

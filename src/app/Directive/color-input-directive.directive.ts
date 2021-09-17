import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorInputDirective]'
})
export class ColorInputDirectiveDirective implements OnInit  {

  // @Input() appRoundBlock: string = "30px";
  @Input() abc:string = "";

  constructor(private element:ElementRef
              ) { }

  ngOnInit(): void {
    this.element.nativeElement.style.color = this.abc;
    // let fontSize = `${this.appRoundBlock}`;
    // console.log(fontSize);
    // // this.element.nativeElement.style.color = "red";
    // // this.element.nativeElement.style.fontSize = "20px";
    // // this.element.nativeElement.style.backgroundColor = "#ccccff";
    // this.renderer.setStyle(this.element.nativeElement,"font-size",fontSize);
  }

}

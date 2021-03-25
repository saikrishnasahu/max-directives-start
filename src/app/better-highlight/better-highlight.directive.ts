import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // property binding also works here and it is the same way
  @Input('appBetterHighlight') highlightColor: string = 'red';
  @Input() defaultColor: string = 'orange';
  // easier way to do something simple like below
  // property of hosting element is to be passed within ()
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Renderer has advantage over the other way as there might be scenario 
  // where we do not have acces to DOM so directly accessing might give error
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // values passed from element are set here so better to initialize here
    this.backgroundColor = this.defaultColor;
  }

  // dynamically reacts to events occuring on DOM and 
  // that event is passed as string to the below decorator
  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}

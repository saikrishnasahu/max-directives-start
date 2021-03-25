import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    // using it the attribute way helps to be used with other element
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    // tell angular to inject the element on which this style is going to be used
    constructor(private elementRef: ElementRef) {

    }

    // not a best practice though as accessing the element this way is not good
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
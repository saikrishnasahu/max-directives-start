import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // the condition needs to be passed as input
  // set is keyword that makes it to a method but it is still a property
  // the method executes when the parameter changes or some partof parameter changes
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  // gives access to the template the directive is on
  // where in the view the directive should be placed
  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}

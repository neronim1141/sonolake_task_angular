import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ selector: '[ngRepeat]' })
export class RepeatDirective {
  index;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('ngRepeat')
  set count(c: number) {
    this.viewContainer.clear();
    for (var i = 0; i < c; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      });
    }
  }
}

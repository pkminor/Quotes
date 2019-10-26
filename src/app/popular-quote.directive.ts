import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPopularQuote]'
})
export class PopularQuoteDirective {

  constructor
  (private elem:ElementRef)
  {this.elem.nativeElement.style.backgroundColor="rgba(46,255,17,0.3)"; }

}

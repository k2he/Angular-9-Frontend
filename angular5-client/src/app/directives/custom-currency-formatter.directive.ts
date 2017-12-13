import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { CustomCurrencyPipe } from "../pipes/custom-currency.pipe";

@Directive({
  selector: '[appCustomCurrencyFormatter]'
})
export class CustomCurrencyFormatterDirective implements OnInit {

    private element: HTMLInputElement;

    constructor(private elementRef: ElementRef, private currencyPipe: CustomCurrencyPipe) {
        this.element = this.elementRef.nativeElement;
    }
    
    ngOnInit() {
        this.element.value = this.currencyPipe.transform(this.element.value);
    }
    
    @HostListener("focus")
    onFocus(value) {
      this.element.value = this.currencyPipe.parse(value); // opposite of transform
      alert("onFocus():" + this.currencyPipe.parse(value));
    }

    @HostListener("blur")
    onBlur(value) {
      this.element.value = this.currencyPipe.transform(value);
      alert("onBlur():" + this.currencyPipe.transform(value));
  }
}

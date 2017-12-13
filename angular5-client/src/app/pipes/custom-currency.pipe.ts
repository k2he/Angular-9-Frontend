import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

    private DECIMAL_SEPARATOR: string = ".";
    private THOUSANDS_SEPARATOR: string = "'";
    private PADDING = "000000";
    
    transform(value: number | string, fractionSize: number = 2): string {
        let [ integer, fraction = "" ] = (value || "").toString().split(this.DECIMAL_SEPARATOR);

        fraction = fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + this.PADDING).substring(0, fractionSize)
            : "";
    
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction;
    }

    parse(value: string, fractionSize: number = 2): string {
        let [ integer, fraction = "" ] = (value || "").split(this.DECIMAL_SEPARATOR);

        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");

        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
          ? this.DECIMAL_SEPARATOR + (fraction + this.PADDING).substring(0, fractionSize)
          : "";

        return integer + fraction;
    }
}

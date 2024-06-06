import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[SaCellNumber]',
  standalone: true
})
export class SaCellNumberDirective {
  // 082 555 1234
  // 123 456 7890
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let digits = input.value.replace(/\D/g, '');  // blank out/whack any char that is not a numerical digit
    if (digits.length > 0) {
      digits = '0' + digits.substring(1);  // Ensure the first character is '0'
    }
    if (digits.length > 10) {
      digits = digits.substring(0, 10);  // Limit to 10 digits
    }

    let formattedValue = '';
    for (let i = 0; i < digits.length; i++) {
      if (i === 3 || i === 6) {
        formattedValue += ' ';
      }
      formattedValue += digits[i];
    }

    input.value = formattedValue;
  }
}

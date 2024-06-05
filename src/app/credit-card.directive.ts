import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[credit-card]',
  standalone: true
})
export class CreditCardDirective {
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let digits = input.value.replace(/\D/g, '');  // blank out/whack any char that is not a numerical digit
    let trimmed = digits.replace(/s+/g, '');  // remove any whitespace chars
    if (trimmed.length > 16) {
      trimmed = trimmed.substring(0, 16)
    }
    let batches = []
    for (let i = 0; i < trimmed.length; i += 4) {
      batches.push(trimmed.substring(i, i+4))
    }
    input.value = batches.join(' ');
  }
}

import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'dsb-alert-atom',
  imports: [],
  template: `
  <div class="alert py-2 px-3 mb-0" [class]="'alert-' + type + ' ' + typeText" role="alert">
    {{ text }}
  </div>
`
})
export class AlertAtom {

  @Input() text: string = '';


  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  @Input() typeText: 'text-white' | 'text-dark' = 'text-white';

  getClass(): string {
    return `bg-${this.type} ${this.typeText}`
  }

}

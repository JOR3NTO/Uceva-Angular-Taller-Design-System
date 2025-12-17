import { Component, Input } from '@angular/core';
import { BadgeType, BadgeTypeText } from '../../../core/interfaces/core.interface';

@Component({
  selector: 'dsb-badge-atom',
  template: `<span class="badge" [class]="getClass()" >{{ text }}</span>`,
})
export class BadgeAtom {
  @Input() text: string = '';
  @Input() type: BadgeType = 'primary';
  @Input() typeText: BadgeTypeText = 'text-white';

  getClass(){
    return `bg-${this.type} ${this.typeText}`;
  }
}
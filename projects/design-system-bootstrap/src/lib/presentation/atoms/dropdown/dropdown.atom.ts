import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from '../../../core/interfaces/core.interface';

@Component({
  selector: 'dsb-dropdown-atom',
  template: `
    <div class="dropdown">
      <button
        [id]="idDropdown"
        class="btn"
        type="button"
        [class]="getClass()"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {{ label }}
      </button>

      <ul class="dropdown-menu" [attr.aria-labelledby]="idDropdown">
        <li *ngFor="let item of items">
          <button
            class="dropdown-item"
            type="button"
            (click)="onSelect(item)">
            {{ item }}
          </button>
        </li>
      </ul>
    </div>
  `,
  imports: [CommonModule]
})
export class DropdownAtom {
  @Input() idDropdown: string = '';
  @Input() label: string = 'Dropdown';
  @Input() type: ButtonType = 'primary';
  @Input() items: string[] = [];

  @Output() select: EventEmitter<string> = new EventEmitter<string>();

  getClass(): string {
    return `btn-${this.type} dropdown-toggle`;
  }

  onSelect(item: string): void {
    this.select.emit(item);
  }
}

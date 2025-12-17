import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ButtonType } from '../../../core/interfaces/core.interface';

@Component({
  selector: 'dsb-button-atom',
  template: `
    <button 
      [id]="idButton"
      type="button" 
      class="btn"
      [class]="getClass()"
      (click)="onEmit()">
      {{ text }}
    </button>`,
})
export class ButtonAtom {
  @Input() text: string = '';
  @Input() idButton: string = '';
  @Input() type: ButtonType = 'primary';
  @Output() clicker: EventEmitter<string> = new EventEmitter<string>();

  getClass(){
    return `btn-${this.type}`;
  }

  onEmit() {
    this.clicker.emit(this.idButton);
  }
}

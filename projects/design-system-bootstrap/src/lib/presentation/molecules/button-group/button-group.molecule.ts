import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonGroupData, ButtonType } from '../../../core/interfaces/core.interface';
import { CommonModule } from '@angular/common';
import { ButtonAtom } from '../../atoms/button/button.atom';

@Component({
  selector: 'dsb-button-group-molecule',
  templateUrl: './button-group.molecule.html',
  imports: [CommonModule, ButtonAtom],
})
export class ButtonGroupMolecule {
  @Input() buttonsGroupData: ButtonGroupData[] = [];
  @Output() clicker: EventEmitter<string> = new EventEmitter<string>();
  
  getClass(type: ButtonType){
    return `btn-${type}`;
  }

  onEmit(idButton: string) {
    this.clicker.emit(idButton);
  }
}

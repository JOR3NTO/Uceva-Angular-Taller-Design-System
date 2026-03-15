import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownGroupData } from '../../../core/interfaces/core.interface';
import { DropdownAtom } from '../../atoms/dropdown/dropdown.atom';
@Component({
  selector: 'dsb-dropdown-group-molecule',
  templateUrl: './dropdown-group.molecule.html',
  imports: [CommonModule, DropdownAtom],
})
export class DropdownGroupMolecule {
  @Input() dropdownGroupData: DropdownGroupData[] = [];

  @Output() select: EventEmitter<{ idDropdown: string; item: string }> = new EventEmitter();

  onSelect(idDropdown: string, item: string): void {
    this.select.emit({ idDropdown, item });
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertGroupData, DropdownGroupData } from '../../../core/interfaces/core.interface';
import { AlertGroup } from '../../molecules/alert-group/alert-group';
import { DropdownGroupMolecule } from '../../molecules/dropdown-group/dropdown-group.molecule';

@Component({
  selector: 'dsb-alert-dropdown-organism',
  templateUrl: './alert-dropdown.organism.html',
  imports: [CommonModule, AlertGroup, DropdownGroupMolecule],
})
export class AlertDropdownOrganism {
  @Input() alertsGroupData: AlertGroupData[] = [];

  @Input() dropdownGroupData: DropdownGroupData[] = [];
}

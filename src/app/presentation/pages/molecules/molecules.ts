import { Component } from '@angular/core';
import {
  ButtonGroupData,
  ButtonGroupMolecule,
  ContainerAtom,
  NavLink,
  NavLinkMolecule,
  AlertGroup,
  AlertGroupData,
  DropdownGroupMolecule,
  DropdownGroupData,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
    AlertGroup,
    DropdownGroupMolecule,
  ],
})
export class Molecules {
  buttonsGroupData: ButtonGroupData[] = [
    { idButton: 'idButtonPrimary', type: 'primary', text: 'Text Primary' },
    { idButton: 'idButtonSecondary', type: 'secondary', text: 'Text Secondary' },
    { idButton: 'idButtonSuccess', type: 'success', text: 'Text Success' },
    { idButton: 'idButtonDanger', type: 'danger', text: 'Text Danger' },
    { idButton: 'idButtonWarning', type: 'warning', text: 'Text Warning' },
    { idButton: 'idButtonInfo', type: 'info', text: 'Text Info' },
    { idButton: 'idButtonLight', type: 'light', text: 'Text Light' },
    { idButton: 'idButtonDark', type: 'dark', text: 'Text Dark' },
  ];

  navLinks: NavLink[] = [
    { text: 'Link 1', url: '/atoms' },
    { text: 'Link 2', url: '/molecules' },
    { text: 'Link 3', url: '/organisms' },
  ];

  alertsGroupData: AlertGroupData[] = [
    { text: 'Alerta primaria', type: 'primary', typeText: 'text-white' },
    { text: 'Alerta de éxito', type: 'success', typeText: 'text-white' },
    { text: 'Alerta de advertencia', type: 'warning', typeText: 'text-dark' },
    { text: 'Alerta de información', type: 'info', typeText: 'text-dark' },
    { text: 'Alerta de luz', type: 'light', typeText: 'text-dark' },
    { text: 'Alerta de oscuridad', type: 'dark', typeText: 'text-white' },
  ];

  dropdownGroupData: DropdownGroupData[] = [
    {
      idDropdown: 'dropdown-group-primary',
      label: 'Primary',
      type: 'primary',
      items: ['Primera opción', 'Segunda opción', 'Tercera opción'],
    },
    {
      idDropdown: 'dropdown-group-secondary',
      label: 'Secondary',
      type: 'secondary',
      items: ['Primera opción', 'Segunda opción', 'Tercera opción'],
    },
    {
      idDropdown: 'dropdown-group-success',
      label: 'Success',
      type: 'success',
      items: ['Primera opción', 'Segunda opción', 'Tercera opción'],
    },
    {
      idDropdown: 'dropdown-group-warning',
      label: 'Warning',
      type: 'warning',
      items: ['Primera opción', 'Segunda opción', 'Tercera opción'],
    },
    {
      idDropdown: 'dropdown-group-info',
      label: 'Info',
      type: 'info',
      items: ['Primera opción', 'Segunda opción', 'Tercera opción'],
    },
  ];

  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }
}

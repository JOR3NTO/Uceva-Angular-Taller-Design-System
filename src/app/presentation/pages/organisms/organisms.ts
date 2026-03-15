import { Component } from '@angular/core';
import {
  AlertDropdownOrganism,
  AlertGroupData,
  ContainerAtom,
  DropdownGroupData,
  NavbarConfig,
  NavbarOrganism,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NavbarOrganism, ContainerAtom, AlertDropdownOrganism],
})
export class Organisms {
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ],
  };

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
}

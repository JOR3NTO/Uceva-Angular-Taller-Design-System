import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AlertAtom,
  BadgeAtom,
  BadgeType,
  BadgeTypeText,
  ButtonAtom,
  ButtonType,
  ContainerAtom,
  IconAtom,
  DropdownAtom,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './atoms.html',
  imports: [
    BadgeAtom,
    ButtonAtom,
    IconAtom,
    ContainerAtom,
    AlertAtom,
    DropdownAtom,
    CommonModule,
  ],
})
export class Atoms {
  badges: { type: BadgeType, typeText: BadgeTypeText}[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

  buttons: { type: ButtonType, idButton: string}[] = [
    { type: 'primary', idButton: 'idButttonPrimary' },
    { type: 'secondary', idButton: 'idButttonSecondary' },
    { type: 'success', idButton: 'idButttonSuccess' },
    { type: 'danger', idButton: 'idButttonDanger' },
    { type: 'warning', idButton: 'idButttonWarning' },
    { type: 'info', idButton: 'idButttonInfo' },
    { type: 'light', idButton: 'idButttonLight' },
    { type: 'dark', idButton: 'idButttonDark' },
  ];

  icons: { name: string, size: number }[] = [
    { name: 'bootstrap', size: 1 },
    { name: 'apple', size: 2 },
    { name: 'bell', size: 3 },
    { name: 'android', size: 4 },
    { name: 'ban', size: 5 },
  ]

  alerts: { type: ButtonType; typeText: BadgeTypeText }[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

dropdowns: { idDropdown: string; label: string; type: ButtonType; items: string[] }[] = [
  {
    idDropdown: 'dropdown-primary',
    label: 'Primary',
    type: 'primary',
    items: ['Primera opción', 'Segunda opción', 'Tercera opción'],
  },
  {
    idDropdown: 'dropdown-secondary',
    label: 'Secondary',
    type: 'secondary',
    items: ['Primera opción', 'Segunda opción', 'Tercera opción'],
  },
  {
    idDropdown: 'dropdown-success',
    label: 'Success',
    type: 'success',
    items: ['Primera opción', 'Segunda opción', 'Tercera opción'],
  },
  // agrega más tipos si quieres...
];

  onClick(idButton: string){
    alert(`Click en el Boton ${idButton}`);
  }

  onSelect(item: string) {
    alert(`Seleccionaste: ${item}`);
  }

}

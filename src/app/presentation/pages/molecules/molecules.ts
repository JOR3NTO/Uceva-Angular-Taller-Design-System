import { Component } from '@angular/core';
import {
  ButtonGroupData,
  ButtonGroupMolecule,
  ContainerAtom,
  NavLink,
  NavLinkMolecule,
  AlertGroup,
  AlertGroupData,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
    AlertGroup,
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

  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }
}

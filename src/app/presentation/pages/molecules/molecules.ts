import { Component } from '@angular/core';
import { 
  ButtonGroupData, 
  ButtonGroupMolecule, 
  NavLink, 
  NavLinkMolecule 
} from 'design-system-bootstrap';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerComponent,
    ButtonGroupMolecule,
    NavLinkMolecule,
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
    { text: 'Átomos', url: '/atoms' },
    { text: 'Moléculas', url: '/molecules' },
    { text: 'Organismos', url: '/organisms' },
  ];

  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }
}

import { Component } from '@angular/core';
import { ContainerAtom, NavbarConfig, NavbarOrganism } from 'design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  imports: [NavbarOrganism, ContainerAtom],
  templateUrl: './organisms.html',
  styleUrl: './organisms.scss',
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
    ]
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class NavbarComponent {
  navbarItems = [
    { label: 'Átomos', url: 'atoms' },
    { label: 'Moléculas', url: 'molecules' },
    { label: 'Organismos', url: 'organisms' },
  ];
}
import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { BadgeAtom, BadgeType } from 'design-system-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './atoms.html',
  styleUrl: './atoms.scss',
  imports: [
    BadgeAtom,
    ContainerComponent,
    CommonModule,
  ],
})
export class Atoms {
  badges: { type: BadgeType}[] = [
    { type: 'primary' },
    { type: 'secondary' },
    { type: 'success' },
    { type: 'danger' },
    { type: 'warning' },
    { type: 'info' },
    { type: 'light' },
    { type: 'dark' },
  ];
}
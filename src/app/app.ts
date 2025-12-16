import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignSystemBootstrap } from 'design-system-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesignSystemBootstrap],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Angular-Standalone-Template');
}

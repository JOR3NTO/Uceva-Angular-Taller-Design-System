import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from '../../../core/interfaces/core.interface';

/**
 * Componente atómico Dropdown del Design System.
 *
 * Renderiza un botón desplegable (dropdown) con opciones configurables.
 * Permite seleccionar una opción y emite un evento al hacerlo.
 *
 * @example
 * <dsb-dropdown-atom
 *   [idDropdown]="'dropdown-demo'"
 *   [label]="'Opciones'"
 *   [type]="'primary'"
 *   [items]="['Uno', 'Dos', 'Tres']"
 *   (select)="onSelect($event)"
 * ></dsb-dropdown-atom>
 */
@Component({
  selector: 'dsb-dropdown-atom',
  template: `
    <div class="dropdown">
      <button
        [id]="idDropdown"
        class="btn"
        type="button"
        [class]="getClass()"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {{ label }}
      </button>

      <ul class="dropdown-menu"
      [attr.aria-labelledby]="idDropdown">
        <li *ngFor="let item of items">
          <button
            class="dropdown-item"
            type="button"
            (click)="onSelect(item)">
            {{ item }}
          </button>
        </li>
      </ul>
    </div>
  `,
  imports: [CommonModule]
})
export class DropdownAtom {
  /**
   * Identificador único del dropdown (usado para aria-labelledby y el id del botón).
   * @type {string}
   * @default ''
   */
  @Input() idDropdown: string = '';

  /**
   * Texto que se muestra en el botón del dropdown.
   * @type {string}
   * @default 'Dropdown'
   */
  @Input() label: string = 'Dropdown';

  /**
   * Tipo visual del botón (Bootstrap: primary, secondary, etc).
   * @type {ButtonType}
   * @default 'primary'
   */
  @Input() type: ButtonType = 'primary';

  /**
   * Opciones que se mostrarán en el menú desplegable.
   * @type {string[]}
   * @default []
   */
  @Input() items: string[] = [];

  /**
   * Evento emitido al seleccionar una opción del dropdown.
   * Devuelve el valor seleccionado.
   * @type {EventEmitter<string>}
   * @event
   */
  @Output() select: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Devuelve la clase CSS correspondiente al tipo de botón y activa el estilo dropdown-toggle.
   * @returns {string} Clase CSS para el botón
   */
  getClass(): string {
    return `btn-${this.type} dropdown-toggle`;
  }

  /**
   * Maneja la selección de una opción y emite el evento select.
   * @param item Opción seleccionada
   */
  onSelect(item: string): void {
    this.select.emit(item);
  }
}

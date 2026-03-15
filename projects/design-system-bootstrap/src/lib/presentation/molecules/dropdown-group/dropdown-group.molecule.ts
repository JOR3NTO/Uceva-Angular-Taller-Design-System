import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownGroupData } from '../../../core/interfaces/core.interface';
import { DropdownAtom } from '../../atoms/dropdown/dropdown.atom';
@Component({
  selector: 'dsb-dropdown-group-molecule',
  templateUrl: './dropdown-group.molecule.html',
  imports: [CommonModule, DropdownAtom],
})
/**
 * Molécula que agrupa varios {@link DropdownAtom} y los presenta como un solo grupo.
 *
 * Recibe un arreglo de {@link DropdownGroupData} para configurar cada dropdown
 * y expone un evento `select` que emite el identificador del dropdown y el
 * ítem seleccionado.
 */
export class DropdownGroupMolecule {
  /**
   * Datos que describen cada dropdown del grupo.
   *
   * Cada elemento del arreglo define el identificador del dropdown, la etiqueta
   * visible, el tipo de botón y la lista de opciones disponibles.
   */
  @Input() dropdownGroupData: DropdownGroupData[] = [];

  /**
   * Ayuda de IA para describir el evento `select` de la molécula `DropdownGroupMolecule`.
   * Evento que se emite cuando se selecciona un ítem en cualquiera de los dropdowns del grupo.
   *
   * El payload incluye el identificador del dropdown (`idDropdown`) y el valor del
   * ítem seleccionado (`item`).
   */
  @Output() select: EventEmitter<{ idDropdown: string; item: string }> = new EventEmitter();

  /**
   * Maneja la selección de un ítem en un dropdown individual y reexpone el evento
   * a través de la salida pública {@link DropdownGroupMolecule#select}.
   *
   * @param idDropdown Identificador del dropdown que originó la selección.
   * @param item Valor del ítem seleccionado.
   */
  onSelect(idDropdown: string, item: string): void {
    this.select.emit({ idDropdown, item });
  }
}

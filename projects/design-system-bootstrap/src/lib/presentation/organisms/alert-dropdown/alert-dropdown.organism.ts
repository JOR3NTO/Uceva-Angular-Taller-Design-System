import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertGroupData, DropdownGroupData } from '../../../core/interfaces/core.interface';
import { AlertGroup } from '../../molecules/alert-group/alert-group';
import { DropdownGroupMolecule } from '../../molecules/dropdown-group/dropdown-group.molecule';

@Component({
  selector: 'dsb-alert-dropdown-organism',
  templateUrl: './alert-dropdown.organism.html',
  imports: [CommonModule, AlertGroup, DropdownGroupMolecule],
})
/**
 * Organismo que combina un grupo de alertas y un grupo de dropdowns.
 *
 * Orquesta las moléculas {@link AlertGroup} y {@link DropdownGroupMolecule}
 * para mostrar mensajes de estado junto con acciones agrupadas en menús
 * desplegables.
 */
export class AlertDropdownOrganism {
  /**
   * Colección de alertas que se mostrarán en la zona de mensajes.
   *
   * Cada elemento define el texto, el tipo visual y la clase de texto
   * que se utilizará para renderizar la alerta.
   */
  @Input() alertsGroupData: AlertGroupData[] = [];

  /**
   * Colección de configuraciones para cada dropdown del organismo.
   *
   * Cada entrada describe el identificador, la etiqueta, el tipo de botón
   * y las opciones que se mostrarán en el menú desplegable.
   */
  @Input() dropdownGroupData: DropdownGroupData[] = [];
}

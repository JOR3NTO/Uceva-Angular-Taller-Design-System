import { Component, Input } from '@angular/core';
import { AlertAtom } from '../../../presentation/atoms/alert/alert.atom';
import { AlertGroupData } from '../../../core/interfaces/core.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dsb-alert-group',
  templateUrl: './alert-group.html',
  imports: [CommonModule, AlertAtom],
})
/**
 * Grupo de alertas del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Renderiza un conjunto de alertas atómicas (`AlertAtom`).
 */
export class AlertGroup {
  /**
   * Lista de configuraciones de alertas.
   *
   * @description
   * Define las alertas que serán renderizadas dentro del grupo,
   * incluyendo su texto, tipo visual y tipo de texto.
   *
   * @type {{ text: string, type: ButtonType, typeText: BadgeTypeText }[]}
   * @default []
   */
  @Input() alertsGroupData: AlertGroupData[] = [];
}

import { Component, Input } from '@angular/core';

/**
 * Componente visual tipo Alert.
 *
 * Muestra un mensaje de alerta usando los estilos de Bootstrap.
 * Permite personalizar el color de fondo y el color del texto.
 *
 * @remarks
 * Este componente forma parte del sistema de diseño atómico como un **átomo**.
 *
 * @example
 * ```html
 * <dsb-alert-atom text="¡Éxito!" type="success" typeText="text-white"></dsb-alert-atom>
 * ```
 */
@Component({
  selector: 'dsb-alert-atom',
  imports: [],
  template: `
    <div class="alert py-2 px-3 mb-0" [class]="getClass()" role="alert">
      {{ text }}
    </div>
  `
})
export class AlertAtom {
  /**
   * Texto que se muestra dentro de la alerta.
   *
   * @remarks
   * Generalmente representa un mensaje informativo, de éxito, advertencia o error.
   *
   * @defaultValue ''
   */
  @Input() text: string = '';

  /**
   * Tipo de color de la alerta.
   *
   * @remarks
   * Corresponde a los colores definidos por Bootstrap (`primary`, `success`, `danger`, etc.).
   *
   * @defaultValue 'primary'
   */
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  /**
   * Color del texto de la alerta.
   *
   * @remarks
   * Se recomienda `text-white` para fondos oscuros y `text-dark` para fondos claros.
   *
   * @defaultValue 'text-white'
   */
  @Input() typeText: 'text-white' | 'text-dark' = 'text-white';

  /**
   * Construye las clases CSS de la alerta según el tipo y color de texto.
   *
   * @returns Cadena con las clases CSS aplicadas a la alerta.
   *
   * @example
   * getClass(); // "alert-success text-white"
   */
  getClass(): string {
    return `alert-${this.type} ${this.typeText}`;
  }
}

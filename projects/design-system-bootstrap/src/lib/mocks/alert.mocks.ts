import { ButtonType } from '../core/interfaces/core.interface';

export const MOCK_ALERT_TYPE: ButtonType = 'success';
export const MOCK_ALERT_TYPE_DEFAULT: ButtonType = 'primary';
export const MOCK_ALERT_TYPES: ButtonType[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];
export const MOCK_ALERT_TYPE_TEXT = 'text-dark';
export const MOCK_ALERT_TYPE_TEXT_DEFAULT = 'text-white';
export const MOCK_ALERT_TYPES_TEXT: ('text-white' | 'text-dark')[] = ['text-white', 'text-dark'];
export const MOCK_ALERT_TEXT: string = 'Texto de Prueba Alert';

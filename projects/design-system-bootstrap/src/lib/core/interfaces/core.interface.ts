export type Themes = 
    | 'primary'
    | 'secondary' 
    | 'success' 
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

export type BadgeType = Themes;
export type BadgeTypeText = 'text-white' | 'text-dark';

export type ButtonType = Themes;

export interface ButtonGroupData {
    idButton: string;
    type: ButtonType;
    text: string;
}
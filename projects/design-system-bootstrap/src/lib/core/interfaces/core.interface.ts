/**
 * Temas visuales disponibles.
 */
export type Themes =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

/** Tipo de tema para badges */
export type BadgeType = Themes;

/** Clases de texto disponibles para badges */
export type BadgeTypeText = 'text-white' | 'text-dark';

/** Tipo de tema para botones */
export type ButtonType = Themes;

/**
 * Configuración de un botón dentro de un grupo de botones.
 */
export interface ButtonGroupData {
  /** Identificador único del botón */
  idButton: string;

  /** Tipo visual del botón */
  type: ButtonType;

  /** Texto visible del botón */
  text: string;
}

/**
 * Configuración de un dropdown dentro de un grupo de dropdowns.
 */
export interface DropdownGroupData {
  /** Identificador único del dropdown */
  idDropdown: string;

  /** Etiqueta visible del dropdown */
  label: string;

  /** Tipo visual del botón del dropdown */
  type: ButtonType;

  /** Opciones que se mostrarán en el menú desplegable */
  items: string[];
}

/**
 * Representa un enlace de navegación.
 */
export interface NavLink {
    /** Texto visible del enlace */
    text: string;
    /** Url asociada al enlace */
    url: string;
}

/**
 * Configuración de la barra de navegación.
 */
export interface NavbarConfig {
  /** Título principal del Navbar */
  title: string;

  /** Configuración del icono del Navbar */
  iconConfig: NavbarIconConfig;

  /** Lista de enlaces de navegación */
  navLinks: NavLink[];
}

/**
 * Configuración del icono de la barra de navegación.
 */
export interface NavbarIconConfig {
    /** Nombre del icono (sin el prefijo `bi-`) */
    icon: string;

    /** Tamaño del icono en unidades `rem` */
    size: number;
}


export interface AlertGroupData {
  text: string;
  type: ButtonType;
  typeText: BadgeTypeText;
}

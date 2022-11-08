export interface Palette {
  background: string;
  color: string;
}

export interface Palettes {
  common?: Palette;
  primary?: Palette;
  secondary?: Palette;
  error?: Palette;
  warning?: Palette;
  success?: Palette;
}

export interface Color {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface Colors {
  red?: Color;
  purple?: Color;
  blue?: Color;
  green?: Color;
  yellow?: Color;
  orange?: Color;
  grey?: Color;
  slate?: Color;
}

export interface Spacings {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface Borders {
  sm: number;
  md: number;
  lg: number;
}

export interface Shadows {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface Typography {
  fontFamily: string;
  monoFamily: string;
}

export interface Theme {
  name?: string;
  palette?: Palettes;
  colors?: Colors;
  spacing?: Spacings;
  borders?: Borders;
  shadows?: Shadows;
  typography?: Typography;
  components?: {
    [key: string]: any;
  };
}

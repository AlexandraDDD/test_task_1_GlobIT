export interface ThemeColors {
  error: string;
  border: string;
  text: string;
  lightText: string;
  black: string;
}

export interface ThemeFonts {
  regular: string;
  bold: string;
}

export interface Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export const theme: Theme = {
  colors: {
    error: '#cc0000',
    border: '#D4DEFE',
    text: '#262C40',
    lightText: '#8189A3',
    black: '#000000',
  },
  fonts: {
    regular: "'Proxima Nova', sans-serif",
    bold: "'Proxima Nova Bold', sans-serif",
  },
};

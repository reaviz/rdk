import { ConfigContextProps } from './ConfigContext';

export const darkThemeColors = {
  red: {
    '100': '#fffcfc',
    '200': '#fff8f8',
    '300': '#ffefef',
    '400': '#ffe5e5',
    '500': '#fdd8d8',
    '600': '#f9c6c6',
    '700': '#f3aeaf',
    '800': '#eb9091',
    '900': '#e5484d'
  },
  purple: {
    '100': '#fefcfe',
    '200': '#fdfaff',
    '300': '#f9f1fe',
    '400': '#f3e7fc',
    '500': '#eddbf9',
    '600': '#e3ccf4',
    '700': '#d3b4ed',
    '800': '#be93e4',
    '900': '#8e4ec6'
  }
};

export const darkTheme: ConfigContextProps = {
  theme: {
    name: 'dark',
    colors: darkThemeColors
  }
};

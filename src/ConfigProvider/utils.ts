import { ConfigContextProps } from './ConfigContext';

export const isRefObject = ref =>
  ref !== null && typeof ref === 'object' && ref.hasOwnProperty('current');

const applyColors = (rules: ConfigContextProps) => {
  const colors: string[] = [];

  if (rules.theme?.colors) {
    for (const key of Object.keys(rules.theme.colors)) {
      for (const shade of Object.keys(rules.theme.colors[key])) {
        colors.push(`--${key}-${shade}: ${rules.theme.colors[key][shade]}`);
      }
    }
  }

  return colors;
};

export const createSheet = (
  element: HTMLElement,
  rules: ConfigContextProps
) => {
  const styleEl = document.createElement('style');
  const sheet = element.appendChild(styleEl).sheet;

  if (!sheet) {
    throw new Error('Could not create style sheet');
  }

  if (rules) {
    const colors = applyColors(rules);

    sheet.insertRule(`
      :root {
        ${colors.join(' ')}
      }
    `);
  }

  return sheet;
};

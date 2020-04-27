import { configure, addDecorator, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',
  brandTitle: 'RDK',
  url: 'https://github.com/reaviz/rdk'
});

// Customize the UI a bit
addParameters({
  options: {
    theme,
    showPanel: false,
    panelPosition: 'right',
    storySort: (a, b) => {
      if (a[0].includes('docs-')) {
        if (a[0].includes('intro-')) {
          return -1;
        }

        return 0;
      }

      return 1;
    }
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

// Custom center decorator that supports docs extensions
addDecorator((...args) => {
  const params = (new URL(document.location)).searchParams;
  const isInDockView = params.get('viewMode') === 'docs';

  if (isInDockView) {
    return args[0]();
  }

  return centered(...args);
});

// Grep src for .story file extensions
const loadStories = () => {
  return [
    require.context('../docs', true, /Intro.story.mdx/),
    require.context('../docs/components', true, /\.story.mdx/),
    require.context('../src', true, /\.story\.(js|jsx|ts|tsx|mdx)$/)
  ];
}

configure(loadStories(), module);

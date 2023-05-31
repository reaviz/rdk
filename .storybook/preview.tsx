import React from 'react';
import theme from './theme';

const withProvider = (Story, context) => (
  <>
    <Story {...context} />
  </>
);

const preview = {
  decorators: [withProvider],
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    docs: {
      theme
    }
  }
};

export default preview;
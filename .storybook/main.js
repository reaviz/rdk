module.exports = {
  stories: ['../src/**/*.story.tsx', '../docs/**/*.story.mdx'],
  addons: [
    '@storybook/addon-docs/preset',
    'storybook-css-modules-preset'
  ],
  webpackFinal: async (config, { configType }) => {

    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/
    });

    return config;
  }
};

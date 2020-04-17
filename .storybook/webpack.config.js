const { resolve } = require('path');
const postcssFocusVisible = require('postcss-focus-visible');
const autoprefixer = require('autoprefixer');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = async ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        include: [
          resolve(__dirname, '../src')
        ],
        use: [
          require.resolve('ts-loader'),
          require.resolve('react-docgen-typescript-loader')
        ]
      },
      {
        test: /\.story\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules/],
        loaders: [
          {
            loader: require.resolve('@storybook/source-loader'),
            options: {
              parser: 'typescript',
              injectParameters: true
            }
          }
        ],
        enforce: 'pre'
      },
      {
        test: /\.story\.mdx$/,
        exclude: [/node_modules/],
        include: [
          resolve(__dirname, '../src'),
          resolve(__dirname, '../docs')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-react-jsx']
            }
          },
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})]
            }
          }
        ]
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: resolve(__dirname, '../')
      },
      {
        test: sassModuleRegex,
        include: resolve(__dirname, '../'),
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
               importLoaders: 1,
               modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  flexbox: 'no-2009'
                }),
                postcssFocusVisible()
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: config.plugins,
  resolve: {
    ...config.resolve,
    modules: [
      ...config.resolve.modules,
      resolve(__dirname, '../src'),
      resolve(__dirname, '../docs')
    ],
    extensions: [
      ...config.resolve.extensions,
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mdx'
    ]
  },
});

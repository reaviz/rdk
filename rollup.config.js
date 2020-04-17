import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'rdk',
      },
      {
        file: pkg.main,
        format: 'cjs',
        name: 'rdk',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [
      external({
        includeDependencies: true
      }),
      postcss({
        // extract: true,
        modules: true,
        writeDefinitions: true,
        plugins: [
          autoprefixer()
        ]
      }),
      typescript({
        clean: true,
        exclude: [
          '*.scss',
          '*.css',
          '*.test.js',
          '*.test.ts',
          '*.test.tsx',
          '*.d.ts',
          '**/*.d.ts',
          '**/*.story.tsx'
        ]
      }),
      resolve(),
      commonjs(),
      sourceMaps()
    ]
  }
];

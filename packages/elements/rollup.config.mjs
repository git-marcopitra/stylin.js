import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import dtsBundle from 'rollup-plugin-dts-bundle';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json' assert { type: 'json' };

const { src, declarationTypes, name, types } = pkg;

const exports = 'named';

const rollupProcesses = [
  {
    input: src,
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true, exports },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        exports,
      },
    ],
    plugins: [
      del({ targets: 'dist' }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      dtsBundle({
        bundle: {
          name,
          main: declarationTypes,
          out: types,
        },
      }),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
      typescriptPaths(),
      terser(),
      json(),
    ],
    external: ['react', 'react-dom'],
  },
];

export default rollupProcesses;
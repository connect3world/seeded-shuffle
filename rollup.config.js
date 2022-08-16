import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'

import packageJson from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      del({
        targets: 'dist/*',
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        exclude: [
          // Exclude test files
          /\.test.((js|jsx|ts|tsx))$/,
        ],
        tsconfig: './tsconfig.json',
      }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{
      file: 'dist/index.d.ts',
      format: 'esm',
    }],
    plugins: [dts()],
  },
]

import flow from 'rollup-plugin-flow'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sourceMaps from 'rollup-plugin-sourcemaps';

const cjs = {
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
};

const esm = {
  format: 'es',
  sourcemap: true,
};

const getCJS = override => Object.assign({}, cjs, override);
const getESM = override => Object.assign({}, esm, override);

const commonPlugins = [
  flow({
    pretty: true,
  }),
  json(),
  nodeResolve(),
  sourceMaps(),
  commonjs({
    ignoreGlobal: true,
    namedExports: {
      'react-is': ['isValidElementType'],
    },
  }),
  babel({
    plugins: ['external-helpers'],
  }),
];

const configBase = {
  input: './index.js',
  output: getCJS({ file: './dist/index.js' }),
  plugins: commonPlugins,
  sourcemap: true,
  external: ["react", "@react-pdf/react-pdf"]
};

export default [
  configBase
];

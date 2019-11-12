import path from 'path';

import rules from './rules';

const pathToApp = path.resolve(__dirname, '../', 'src');
const pathToNodeModules = path.resolve(__dirname, '../', 'node_modules');

export default {
  entry: {
    app: path.resolve(__dirname, '../', 'src/index.jsx'),
    styles: path.resolve(__dirname, '../', 'src/assets/sass/index.scss'),
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', 'png', 'jpg'],
    modules: [pathToApp, pathToNodeModules],
  },
  module: {
    rules,
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
  },
};

const path = require('path');
const webpack = require('webpack');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

module.exports = {
  entry: {
    'file-upload-react.min': [`${PATHS.src}/file-upload-react.js`],
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    library: 'file-upload-react',
    libraryTarget: 'umd'
  },
  module:{
    loaders: [{ test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
  }],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      ie8: true,
      warnings: false
    }),
  ]
};

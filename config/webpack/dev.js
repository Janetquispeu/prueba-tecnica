const common = require('./base.js');
const path = require('path');
const outputDirectory = '../../dist';

module.exports = {
  ...common,
  mode: 'development',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  devServer: {
    open: true,
    historyApiFallback: {
      disableDotRule: true
    },
    port: 3000,
    historyApiFallback: {
      disableDotRule: true
    },
  },
};
const merge = require('webpack-merge');
const common = require('./base.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: false,
    historyApiFallback: true,
    port: 3000
  },
});
const path = require('path');
const common = require('./base.js');
const outputPath = path.join(__dirname, '../../');
console.log(outputPath +'dist/')
module.exports = {
  ...common,
  mode: 'production',
  output: {
    path: path.join(outputPath, 'public/'),
    filename:'[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    }
  }
};
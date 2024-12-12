const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathClient = path.join(__dirname, '../../app/');

module.exports = {
  entry: {
    'app': path.join(pathClient, 'src/index.tsx')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': pathClient
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(tsx|ts$)/,
        exclude: /node_modules/,
        use: [
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../../app/src/assets/fonts/Roboto/',
              esModule: false,
            }
          }
        ]
      }    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(pathClient, 'public/index.html')
    })
  ]
}

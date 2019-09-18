const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.join(__dirname, '/');
const pathClient = path.join(__dirname, '/app');

const publicPath = '/';

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'app': path.join(pathClient, '/src/index.tsx')
  },
  output: {
    path: path.join(outputPath, 'dist/public'),
    publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': pathClient
    }
  },
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
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
              name: '[name].[hash].[ext]',
              publicPath
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
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

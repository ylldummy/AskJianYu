const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, '..', 'src')
const DIST_DIR = path.resolve(__dirname, '..', 'dist')
const ASSETS_DIR = path.resolve(SRC_DIR, 'assets')

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': SRC_DIR,
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'AskJianYu',
      //favicon: path.resolve(ASSETS_DIR, 'favicon.ico'),
      meta: {
        description: 'Ask Jian Yu',
        viewport: 'width=device-width, initial-scale=1.0',
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg|ico)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '/[folder]_[name]_[hash:7].[ext]',
          outputPath: 'assets'
        }
      },
    ]
  }
}

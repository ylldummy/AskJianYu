const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./common')

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist')
const CONTRACTS_DIR = path.resolve(DIST_DIR, 'contracts')
const CONFIG_DIR = path.resolve(DIST_DIR, 'config')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '#': CONTRACTS_DIR,
      '%': CONFIG_DIR,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})

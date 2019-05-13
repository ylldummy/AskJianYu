const path = require('path')
const merge = require('webpack-merge')
const common = require('./common')

const BUILD_DIR = path.resolve(__dirname, '..', '..', 'build')
const CONTRACTS_DIR = path.resolve(BUILD_DIR, 'contracts')
const CONFIG_DIR = path.resolve(BUILD_DIR, 'config')

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
  }
})

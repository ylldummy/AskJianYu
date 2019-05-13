const path = require('path')
const merge = require('webpack-merge')
const common = require('./common')

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist')
const CONTRACTS_DIR = path.resolve(DIST_DIR, 'contracts')
const CONFIG_DIR = path.resolve(DIST_DIR, 'config')

module.exports = merge(common, {
  mode: 'production',
  resolve: {
    alias: {
      '#': CONTRACTS_DIR,
      '%': CONFIG_DIR,
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `vendor.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
})

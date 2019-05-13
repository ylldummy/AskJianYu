const fs = require('fs')
const path = require('path')
const shelljs = require('shelljs')
const truffle = require('../truffle')

const AskJianYu = artifacts.require('./AskJianYu.sol')

let CONTRACT_NAME = 'AskJianYu';
let CONFIG_PATH = path.resolve(truffle.config_build_directory, 'config.json')

module.exports = async function(deployer, network) {
  let config = {}
  let contract = await AskJianYu.new()
  console.log('contract deployed, address =', contract.address)
  config[CONTRACT_NAME] = contract.address

  shelljs.mkdir('-p', path.dirname(CONFIG_PATH))
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config))
  return Promise.resolve()
}

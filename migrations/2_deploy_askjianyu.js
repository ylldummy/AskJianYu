const fs = require('fs')
const path = require('path')
const shelljs = require('shelljs')
const truffle = require('../truffle')

const AskJianYu = artifacts.require('./AskJianYu.sol')

let CONTRACT_NAME = 'AskJianYu';
let CONFIG_PATH = path.resolve(truffle.config_build_directory, 'config.json')
let JY_ADDR = '0x21E3C42b7D0ED6BC583a82331410948512A2C466'

module.exports = async function(deployer, network) {
  let config = {}
  let contract = await AskJianYu.new(web3.utils.toWei('1', 'ether'), JY_ADDR)
  console.log('contract deployed, address =', contract.address)
  let initQuote = [
    '綠皮藍骨',
    '你要叫我爸爸',
    '你那麼少',
    '錯就錯在你太窮',
    'XXX是三小',
    '你跑不掉的',
    '這就是有錢的力量',
    '當你放棄權利的時候就是被侵犯的時候',
    '我連你是誰都不知道',
    '我都喝咖啡治療感冒',
    '你們的熱情就這樣而已嗎'
  ]
  await Promise.all(initQuote.map((quote) => {
    return contract.addQuote(quote)
  }))
  config[CONTRACT_NAME] = contract.address

  shelljs.mkdir('-p', path.dirname(CONFIG_PATH))
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config))
  return Promise.resolve()
}

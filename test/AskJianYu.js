const BN = require('bn.js')

const AskJianYu = artifacts.require('./AskJianYu.sol')

contract('AskJianYu', function(accounts) {
  let owner = accounts[0]
  let boss = accounts[1]
  let user = accounts[2]
  let contract

  it("Deploy contracts", async function() {
    contract = await AskJianYu.new(web3.utils.toWei('0.1', 'ether'), boss,
      {from: owner})
    await contract.addQuote('GGWP')
  })

  it("Contribute", async function() {
    let bossBalance = new BN(await web3.eth.getBalance(boss))
    // Shame on you, do not contribute enough value.
    let receipt = await contract.contribute(0, {
      from: user, value: web3.utils.toWei('0.01', 'ether')})
    assert.lengthOf(receipt.logs, 1)
    receipt = await contract.contribute(0, {
      from: user, value: web3.utils.toWei('0.1', 'ether')})
    assert.lengthOf(receipt.logs, 0)
    let nb = new BN(await web3.eth.getBalance(boss))
    assert.isOk(nb.gt(bossBalance))
  })
})

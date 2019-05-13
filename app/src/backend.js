import Web3 from 'web3'
import AddrConfig from '%/config'
import config from '@/config'
import AskJianYu from '#/AskJianYu'

class Backend {
  constructor(web3, wallet) {
    this.web3 = web3
    this.wallet = wallet
    this.contractRead = null
    this.contractWrite = null

    let addr = AddrConfig.AskJianYu
    let abi = AskJianYu.abi
    if (this.web3) {
      this.contractRead = this.web3.eth.Contract(abi, addr)
    }
    if (this.wallet) {
      this.contractWrite = this.wallet.eth.Contract(abi, addr)
    }
  }

  /*
  async waitAndExtractEvent(contract, name, ep) {
    let receipt = await ep
    return receipt.events[name].returnValues
  }
  */

  async waitReceipt(ep) {
    let tx = await new Promise((resolve, reject) => {
      ep.on('transactionHash', resolve)
      ep.on('error', reject)
    })
    let receipt
    while (!receipt) {
      receipt = await this.web3.eth.getTransactionReceipt(tx)
      if (receipt) {
        break
      }
      await sleep(100)
    }
    return receipt
  }

  decodeEvent(contract, name, receipt) {
    let abi = contract.jsonInterface.getEvent(name)
    let eventRaw = receipt.logs.find(
      (event) => event.topics[0] === abi.signature
    )
    if (!eventRaw) {
      return null
    }
    return this.web3.eth.abi.decodeLog(
      abi.getInputs(),
      eventRaw.data,
      eventRaw.topics
    )
  }

  async waitAndExtractEvent(contract, name, ep) {
    let receipt = await this.waitReceipt(ep)
    return this.decodeEvent(contract, name, receipt)
  }

  async sendMsg(msg, value) {
    let accounts = await this.wallet.eth.getAccounts()
    let ep = this.contractWrite.methods
      .tribute(msg)
      .send({
        from: accounts[0],
        value: this.web3.utils.toWei(value, 'ether'),
      })
    let receipt = await this.waitReceipt(ep)
    let quoteEvent = this.decodeEvent(this.contractWrite, 'Quote', receipt)
    let dissEvent = this.decodeEvent(this.contractWrite, 'Diss', receipt)
    // TODO: distinct event
    console.error('quoteEvent', quoteEvent)
    console.error('dissEvent', dissEvent)
  }

  async getQuoteEventAndListen(handler) {
    let block = await this.web3.eth.getBlockNumber()
    let events = await this.contractRead.getPastEvents(
      'Quote',
      { fromBlock: 0, toBlock: block })
    handler(events)
    this.contractRead.events.Quote({ fromBlock: block + 1 })
      .on('data', (event) => handler([event]))
  }

  async listenDissEvent(handler) {
    let block = await this.web3.eth.getBlockNumber()
    this.contractRead.events.Diss({ fromBlock: block + 1 })
      .on('data', (event) => handler([event]))
  }
}

export default async () => {
  let walletVar = window[config.walletVar]
  if (!walletVar) {
    return null
  }

  let web3 = new Web3(config.networkURL)
  let wallet
  try {
    let accounts = await walletVar.enable()
    if (accounts.length === 0) {
      throw 'deny'
    }
    wallet = new Web3(walletVar)
  } catch (e) {
    console.error(e)
  }

  return new Backend(web3, wallet)
}

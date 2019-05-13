/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
const HDWalletProvider = require("@dexon-foundation/truffle-hdwallet-provider");

// Define default secret which is not a secret.
const privKey = "";
const mnemonic = process.env.MNEMONIC || "your mnemonic here";
const hdpath = "m/44'/237'/0'/0/";

const path = require('path')
const { toWei } = require('web3-utils');

function providerFuncGen(url) {
  return function() {
    if (privKey) {
      return new HDWalletProvider(privKey, url);
    } else {
      return new HDWalletProvider(mnemonic, url, 0, 1, true, hdpath);
    }
  }
}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  config_build_directory: path.resolve(process.env.dist, 'config'),
  contracts_build_directory: path.resolve(process.env.dist, 'contracts'),
  networks: {
    mainnet: {
      provider: providerFuncGen("https://mainnet-rpc.dexon.org"),
      gasPrice: toWei('24', 'gwei'),
      network_id: "*"
    },
    testnet: {
      provider: providerFuncGen("https://testnet-rpc.dexon.org"),
      gasPrice: toWei('24', 'gwei'),
      network_id: "*"
    },
    testnet2: {
      provider: providerFuncGen("http://testnet-2.dexon.org:8545"),
      gasPrice: toWei('24', 'gwei'),
      network_id: "*"
    },
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    }
  }
};

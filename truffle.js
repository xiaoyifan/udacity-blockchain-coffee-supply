// Use dotenv node module to save private information in an environment variable
require('dotenv').config()

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        }, 
        rinkeby: {
            provider: () => new HDWalletProvider(
                process.env.WALLET_MNEMONIC, 
                process.env.WEB3_PROVIDER
            ),
            network_id: '4',
            gas: 4500000,
            confirmations: 2,
            gasPrice: 10000000000,
        },
    }
};

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note nominee club hope entire army genuine'; 
let testAccounts = [
"0x9b99156a67e43120b68ff0963741383480cd5a88170aadbc9b61bc16b09925c4",
"0x8c50420eff6e5f493a3c85e7689e87fc607cfa93e4fad30914aafb8b7d612853",
"0x7f9ddc4dfdb3b8bde9a5165ec3d6f2a8be50837c4dc55f56fab5483b59ef3ed8",
"0x5703531f7ccddd1d6466d7dd7682084bb9d7a4eddd20b637324697cd40d999e8",
"0x8e8709263823de970a65cc3e51718fd0bc815fe562fea9691879e07dea370299",
"0x07db4d9d8c29cb0756db789c0bc7ca4dd67a384748b62c8c62e4b8376c0d9f6e",
"0xa990382e68f73a85d2fde4df60c7ee1f6c3309a981046fa4f8cbe73b2529e34e",
"0xa6930c47f02f415712f6c63db219435cdb70cc6bf54c27297bb69a885ea958db",
"0xf34c224c1e8647c10ad8f202a48520afc8bec24eb0471eb5e8885e7cde71cf82",
"0xc4d1f66ad87d128c14cc87b09ce88e58eec224e77bfb9f049515956382a3a9de"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


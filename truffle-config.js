require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note scrub puppy hockey arctic bubble torch'; 
let testAccounts = [
"0x5404bfa0500c3bed3328aa54840da7b5e63c185183b16b2a1dbc68821a9f0d9f",
"0x9d5987bb7f418d8e7491182ea643520ed5bd7ce0544c51dccb5f63d9b3066c01",
"0x5f0c13b262a015566fd890511aad9d0b135cb57fd8c94b9f61e39f05ff60cf79",
"0x53b8ee5cb9bcd16442bdd29ddb6929d7a582fd4b9f09128c406167e5f31f9d7b",
"0x8e9e5127b25943ba5392907688eba6520de4e4f8dd0263cdce78b67d0e8e2247",
"0xf6e2cdd7eed00228a761f5316fc7e1322c6fc9f6f8662dc511b1a1df1b9d8365",
"0xc258affade52f7cbb42618321c09861994e39065d46c9d5d1e635f79c3ea41c0",
"0x877663c30e403892d18a8aac2c1b94dc25aef253105fd4fd6aecbf07e285943f",
"0x6f79a26bb935e504ff815d87f407725d42e1d871bff41723f57c33d6f22120b5",
"0x626375065cacc9314a55cc32fe8b35f94f75d22ad99682dd1e3706e08e631fc3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};

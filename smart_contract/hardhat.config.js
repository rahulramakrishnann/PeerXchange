require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/P7tXHpXKuDy7_fMIkRYfkSi1LadCQFX1',
      accounts: ['ec43a26f115ac983faab9101a06538632b866752885473e9cc8c4909b3d5476e'],
    },
  },
};
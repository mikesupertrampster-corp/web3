const { default: Resolution } = require('@unstoppabledomains/resolution');

const infuraApiKey = `aebdd7711d2d4f88a89a4c038243aa6a`;

const infuraProviderUrl = `https://mainnet.infura.io/v3/aebdd7711d2d4f88a89a4c038243aa6a`;
const polygonProviderUrl = `https://polygon-mainnet.infura.io/v3/aebdd7711d2d4f88a89a4c038243aa6a`;

const resolution = new Resolution({
    sourceConfig: {
      uns: {
        locations: {
          Layer1: {url: infuraProviderUrl, network: 'mainnet'},
          Layer2: {url: polygonProviderUrl, network: 'polygon-mainnet',},
        },
      },
      ens: {url: infuraProviderUrl, network: 'mainnet'}
    },
  });

function resolve(domain, currency) {
  resolution
    .addr(domain, currency)
    .then((address) => console.log(domain, 'resolves to', address))
    .catch(console.error);
}

function resolveMultiChain(domain, currency, chain) {
  resolution
    .multiChainAddr(domain, currency, chain)
    .then((address) => console.log(domain, 'resolves to', address, version))
    .catch(console.error);
}

resolve('michaelliu.wallet', 'ETH');
resolve('mikesupertrampster.crypto', 'ETH');
//resolve('michaelliu.wallet', 'ZIL');
//resolveMultiChain('michaelliu.wallet', 'USDT', 'ERC20');
//resolveMultiChain('michaelliu.wallet', 'USDT', 'OMNI');
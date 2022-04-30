const { default: Resolution } = require('@unstoppabledomains/resolution');
const resolution = new Resolution();

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
resolve('michaelliu.wallet', 'ZIL');
resolveMultiChain('michaelliu.wallet', 'USDT', 'ERC20');
resolveMultiChain('michaelliu.wallet', 'USDT', 'OMNI');
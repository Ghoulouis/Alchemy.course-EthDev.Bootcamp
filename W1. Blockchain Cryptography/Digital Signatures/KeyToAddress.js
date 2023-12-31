const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  return keccak256(publicKey.slice(1)).slice(12);
}

module.exports = getAddress;

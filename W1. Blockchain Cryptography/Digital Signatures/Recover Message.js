const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  return (recovered = secp.recoverPublicKey(
    hashMessage(message),
    signature,
    recoveryBit
  ));
}

module.exports = recoverKey;

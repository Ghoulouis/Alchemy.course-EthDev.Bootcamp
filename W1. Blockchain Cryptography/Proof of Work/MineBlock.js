const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  mempool.push(transaction);
}
var height = 0;
function mine() {
  blocks.push({ id: height });
  height++;
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};

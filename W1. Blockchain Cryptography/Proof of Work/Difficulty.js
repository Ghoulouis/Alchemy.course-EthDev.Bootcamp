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
  var giatri = 0;
  var transactions = [];

  while (mempool.length != 0 && transactions.length < MAX_TRANSACTIONS) {
    transactions.push(mempool.shift());
  }
  var nonceV = 0;
  var result = SHA256(
    JSON.stringify({
      nonce: nonceV,
      transactions,
    })
  );
  while (BigInt(`0x${result.toString()}`) >= TARGET_DIFFICULTY) {
    nonceV = Math.floor(Math.random() * 101);
    result = SHA256(
      JSON.stringify({
        nonce: nonceV,
        transactions,
      })
    );
  }
  blocks.push({
    transactions,
    hash: result,
    nonce: nonceV,
  });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};

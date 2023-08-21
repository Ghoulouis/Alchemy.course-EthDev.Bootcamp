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
  var transactions = [];

  while (mempool.length != 0 && transactions.length < MAX_TRANSACTIONS) {
    transactions.push(mempool.shift());
  }

  blocks.push({ transactions });
  //blocks.push(  { hash: SHA256( JSON.stringify( {      transactions}) ) } );
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

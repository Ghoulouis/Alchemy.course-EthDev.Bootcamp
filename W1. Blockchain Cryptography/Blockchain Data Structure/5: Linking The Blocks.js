// Blockchain

const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [];
  }
  addBlock(block) {
    if (this.chain.length > 0) {
      var previousBlock = this.chain[this.chain.length - 1];
      block.previousHash = previousBlock.toHash();
    }
    this.chain.push(block);
  }
}

module.exports = Blockchain;

// Block

const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(data) {
    this.data = data;
    this.previousHash = "genesis block";
  }

  toHash() {
    if (this.previousHash !== "genesis block") return this.previousHash;
    //return SHA256(this.data);
    return this.data;
  }
}

module.exports = Block;

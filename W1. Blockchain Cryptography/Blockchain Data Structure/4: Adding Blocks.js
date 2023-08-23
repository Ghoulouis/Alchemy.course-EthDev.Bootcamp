const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock() {
    return new Block("Genesis Block");
  }
  addBlock(block) {
    this.chain.push(block); // Thêm khối mới vào chuỗi blockchain
  }
}

module.exports = Blockchain;

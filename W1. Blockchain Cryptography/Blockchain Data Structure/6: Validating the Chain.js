const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [];
    }

    isValid() {
        for (let i =1; i< this.chain.length; i++)
            if ( this.chain[i].previousHash.toString() != this.chain[i-1].toHash().toString() )
                return false;
        return true;
    }

    addBlock(block) {
        if (this.chain.length >0) {
            var previousBlock = this.chain[this.chain.length - 1];
            block.previousHash = previousBlock.toHash();
            }
        this.chain.push(block);
    }
}

module.exports = Blockchain;
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// given a hash, return the color that created the hash
function findColor(hash) {
  var result;

  COLORS.forEach((color) => {
    console.log(" hashx = ", hash);
    console.log(" hashy = ", sha256(utf8ToBytes(color)));
    if (toHex(hash) == toHex(sha256(utf8ToBytes(color)))) result = color;
  });
  console.log("result = ", result);
  return result;
}

module.exports = findColor;

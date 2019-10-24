const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');
const ec = new EC('secp256k1');
const ainUtil = require('@ainblockchain/ain-util');
const PRIVATE_KEY = process.env.PRIVATE_KEY || null;

class ChainUtil {
  // TODO (lia): remove this function
  static genKeyPair() {
    let keyPair;
    if (PRIVATE_KEY) {
      keyPair = ec.keyFromPrivate(PRIVATE_KEY, 'hex');
      keyPair.getPublic();
    } else {
      keyPair = ec.genKeyPair();
    }
    return keyPair;
  }

  static isDict(data) {
    return (typeof data==='object' && data!==null && !(data instanceof Array));
  }

  static parsePath(queryString) {
    // Need to remove quotes that come in
    queryString = queryString.replace(/^"(.*)"$/, '$1');
    const queryList = queryString.split('/').filter((endpoint) => {
      if (endpoint) {
        return endpoint;
      }
    });
    return queryList;
  }
}

module.exports = ChainUtil;

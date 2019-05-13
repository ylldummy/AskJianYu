(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{tnHP:function(e,f,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=r("aYMp"),o=r("IzB8"),i=r("9lTW"),u=r("o8pB"),a=r("OZ/i"),s=r("mObS"),c=r("hwdV").Buffer;Object.assign(f,r("mhLr")),f.MAX_INTEGER=new a("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),f.TWO_POW256=new a("10000000000000000000000000000000000000000000000000000000000000000",16),f.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",f.SHA3_NULL_S=f.KECCAK256_NULL_S,f.KECCAK256_NULL=c.from(f.KECCAK256_NULL_S,"hex"),f.SHA3_NULL=f.KECCAK256_NULL,f.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",f.SHA3_RLP_ARRAY_S=f.KECCAK256_RLP_ARRAY_S,f.KECCAK256_RLP_ARRAY=c.from(f.KECCAK256_RLP_ARRAY_S,"hex"),f.SHA3_RLP_ARRAY=f.KECCAK256_RLP_ARRAY,f.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",f.SHA3_RLP_S=f.KECCAK256_RLP_S,f.KECCAK256_RLP=c.from(f.KECCAK256_RLP_S,"hex"),f.SHA3_RLP=f.KECCAK256_RLP,f.BN=a,f.rlp=u,f.secp256k1=o,f.zeros=function(e){return c.allocUnsafe(e).fill(0)},f.zeroAddress=function(){var e=f.zeros(20);return f.bufferToHex(e)},f.setLengthLeft=f.setLength=function(e,r,n){var t=f.zeros(r);return e=f.toBuffer(e),n?e.length<r?(e.copy(t),t):e.slice(0,r):e.length<r?(e.copy(t,r-e.length),t):e.slice(-r)},f.setLengthRight=function(e,r){return f.setLength(e,r,!0)},f.unpad=f.stripZeros=function(e){for(var r=(e=f.stripHexPrefix(e))[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e},f.toBuffer=function(e){if(!c.isBuffer(e))if(Array.isArray(e))e=c.from(e);else if("string"==typeof e)e=f.isHexString(e)?c.from(f.padToEven(f.stripHexPrefix(e)),"hex"):c.from(e);else if("number"==typeof e)e=f.intToBuffer(e);else if(null==e)e=c.allocUnsafe(0);else if(a.isBN(e))e=e.toArrayLike(c);else{if(!e.toArray)throw new Error("invalid type");e=c.from(e.toArray())}return e},f.bufferToInt=function(e){return new a(f.toBuffer(e)).toNumber()},f.bufferToHex=function(e){return"0x"+(e=f.toBuffer(e)).toString("hex")},f.fromSigned=function(e){return new a(e).fromTwos(256)},f.toUnsigned=function(e){return c.from(e.toTwos(256).toArray())},f.keccak=function(e,r){return e=f.toBuffer(e),r||(r=256),t("keccak"+r).update(e).digest()},f.keccak256=function(e){return f.keccak(e)},f.sha3=f.keccak,f.sha256=function(e){return e=f.toBuffer(e),s("sha256").update(e).digest()},f.ripemd160=function(e,r){e=f.toBuffer(e);var n=s("rmd160").update(e).digest();return!0===r?f.setLength(n,32):n},f.rlphash=function(e){return f.keccak(u.encode(e))},f.isValidPrivate=function(e){return o.privateKeyVerify(e)},f.isValidPublic=function(e,f){return 64===e.length?o.publicKeyVerify(c.concat([c.from([4]),e])):!!f&&o.publicKeyVerify(e)},f.pubToAddress=f.publicToAddress=function(e,r){return e=f.toBuffer(e),r&&64!==e.length&&(e=o.publicKeyConvert(e,!1).slice(1)),i(64===e.length),f.keccak(e).slice(-20)};var l=f.privateToPublic=function(e){return e=f.toBuffer(e),o.publicKeyCreate(e,!1).slice(1)};f.importPublic=function(e){return 64!==(e=f.toBuffer(e)).length&&(e=o.publicKeyConvert(e,!1).slice(1)),e},f.ecsign=function(e,f){var r=o.sign(e,f),n={};return n.r=r.signature.slice(0,32),n.s=r.signature.slice(32,64),n.v=r.recovery+27,n},f.hashPersonalMessage=function(e){var r=f.toBuffer("Ethereum Signed Message:\n"+e.length.toString());return f.keccak(c.concat([r,e]))},f.ecrecover=function(e,r,n,t){var i=c.concat([f.setLength(n,32),f.setLength(t,32)],64),u=r-27;if(0!==u&&1!==u)throw new Error("Invalid signature v value");var a=o.recover(e,i,u);return o.publicKeyConvert(a,!1).slice(1)},f.toRpcSig=function(e,r,n){if(27!==e&&28!==e)throw new Error("Invalid recovery id");return f.bufferToHex(c.concat([f.setLengthLeft(r,32),f.setLengthLeft(n,32),f.toBuffer(e-27)]))},f.fromRpcSig=function(e){if(65!==(e=f.toBuffer(e)).length)throw new Error("Invalid signature length");var r=e[64];return r<27&&(r+=27),{v:r,r:e.slice(0,32),s:e.slice(32,64)}},f.privateToAddress=function(e){return f.publicToAddress(l(e))},f.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},f.isZeroAddress=function(e){return f.zeroAddress()===f.addHexPrefix(e)},f.toChecksumAddress=function(e){e=f.stripHexPrefix(e).toLowerCase();for(var r=f.keccak(e).toString("hex"),n="0x",t=0;t<e.length;t++)parseInt(r[t],16)>=8?n+=e[t].toUpperCase():n+=e[t];return n},f.isValidChecksumAddress=function(e){return f.isValidAddress(e)&&f.toChecksumAddress(e)===e},f.generateAddress=function(e,r){return e=f.toBuffer(e),r=(r=new a(r)).isZero()?null:c.from(r.toArray()),f.rlphash([e,r]).slice(-20)},f.isPrecompiled=function(e){var r=f.unpad(e);return 1===r.length&&r[0]>=1&&r[0]<=8},f.addHexPrefix=function(e){return"string"!=typeof e?e:f.isHexPrefixed(e)?e:"0x"+e},f.isValidSignature=function(e,f,r,n){var t=new a("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),o=new a("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);return 32===f.length&&32===r.length&&((27===e||28===e)&&(f=new a(f),r=new a(r),!(f.isZero()||f.gt(o)||r.isZero()||r.gt(o))&&(!1!==n||1!==new a(r).cmp(t))))},f.baToJSON=function(e){if(c.isBuffer(e))return"0x"+e.toString("hex");if(e instanceof Array){for(var r=[],n=0;n<e.length;n++)r.push(f.baToJSON(e[n]));return r}},f.defineProperties=function(e,r,t){if(e.raw=[],e._fields=[],e.toJSON=function(r){if(r){var n={};return e._fields.forEach(function(f){n[f]="0x"+e[f].toString("hex")}),n}return f.baToJSON(this.raw)},e.serialize=function(){return u.encode(e.raw)},r.forEach(function(r,n){function t(){return e.raw[n]}function o(t){"00"!==(t=f.toBuffer(t)).toString("hex")||r.allowZero||(t=c.allocUnsafe(0)),r.allowLess&&r.length?(t=f.stripZeros(t),i(r.length>=t.length,"The field "+r.name+" must not have more "+r.length+" bytes")):r.allowZero&&0===t.length||!r.length||i(r.length===t.length,"The field "+r.name+" must have byte length of "+r.length),e.raw[n]=t}e._fields.push(r.name),Object.defineProperty(e,r.name,{enumerable:!0,configurable:!0,get:t,set:o}),r.default&&(e[r.name]=r.default),r.alias&&Object.defineProperty(e,r.alias,{enumerable:!1,configurable:!0,set:o,get:t})}),t)if("string"==typeof t&&(t=c.from(f.stripHexPrefix(t),"hex")),c.isBuffer(t)&&(t=u.decode(t)),Array.isArray(t)){if(t.length>e._fields.length)throw new Error("wrong number of fields in data");t.forEach(function(r,n){e[e._fields[n]]=f.toBuffer(r)})}else{if("object"!==(void 0===t?"undefined":n(t)))throw new Error("invalid data");var o=Object.keys(t);r.forEach(function(f){-1!==o.indexOf(f.name)&&(e[f.name]=t[f.name]),-1!==o.indexOf(f.alias)&&(e[f.alias]=t[f.alias])})}}}}]);
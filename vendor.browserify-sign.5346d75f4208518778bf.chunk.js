(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EW2V:function(t,e,n){t.exports=n("tOiH")},"b+dc":function(t,e,n){(function(e){var a=n("Giow"),s=n("qVij"),r=n("MzeL").ec,i=n("OZ/i"),h=n("Ku4m"),d=n("zZGF");function o(t,n,s,r){if((t=new e(t.toArray())).length<n.byteLength()){var i=new e(n.byteLength()-t.length);i.fill(0),t=e.concat([i,t])}var h=s.length,d=function(t,n){t=(t=u(t,n)).mod(n);var a=new e(t.toArray());if(a.length<n.byteLength()){var s=new e(n.byteLength()-a.length);s.fill(0),a=e.concat([s,a])}return a}(s,n),o=new e(h);o.fill(1);var c=new e(h);return c.fill(0),c=a(r,c).update(o).update(new e([0])).update(t).update(d).digest(),o=a(r,c).update(o).digest(),{k:c=a(r,c).update(o).update(new e([1])).update(t).update(d).digest(),v:o=a(r,c).update(o).digest()}}function u(t,e){var n=new i(t),a=(t.length<<3)-e.bitLength();return a>0&&n.ishrn(a),n}function c(t,n,s){var r,i;do{for(r=new e(0);8*r.length<t.bitLength();)n.v=a(s,n.k).update(n.v).digest(),r=e.concat([r,n.v]);i=u(r,t),n.k=a(s,n.k).update(n.v).update(new e([0])).digest(),n.v=a(s,n.k).update(n.v).digest()}while(-1!==i.cmp(t));return i}function g(t,e,n,a){return t.toRed(i.mont(n)).redPow(e).fromRed().mod(a)}t.exports=function(t,n,a,p,f){var w=h(n);if(w.curve){if("ecdsa"!==p&&"ecdsa/rsa"!==p)throw new Error("wrong private key type");return function(t,n){var a=d[n.curve.join(".")];if(!a)throw new Error("unknown curve "+n.curve.join("."));var s=new r(a).keyFromPrivate(n.privateKey).sign(t);return new e(s.toDER())}(t,w)}if("dsa"===w.type){if("dsa"!==p)throw new Error("wrong private key type");return function(t,n,a){for(var s,r=n.params.priv_key,h=n.params.p,d=n.params.q,p=n.params.g,f=new i(0),w=u(t,d).mod(d),l=!1,y=o(r,d,t,a);!1===l;)s=c(d,y,a),f=g(p,s,h,d),0===(l=s.invm(d).imul(w.add(r.mul(f))).mod(d)).cmpn(0)&&(l=!1,f=new i(0));return function(t,n){t=t.toArray(),n=n.toArray(),128&t[0]&&(t=[0].concat(t)),128&n[0]&&(n=[0].concat(n));var a=[48,t.length+n.length+4,2,t.length];return a=a.concat(t,[2,n.length],n),new e(a)}(f,l)}(t,w,a)}if("rsa"!==p&&"ecdsa/rsa"!==p)throw new Error("wrong private key type");t=e.concat([f,t]);for(var l=w.modulus.byteLength(),y=[0,1];t.length+y.length+1<l;)y.push(255);y.push(0);for(var v=-1;++v<t.length;)y.push(t[v]);return s(y,w)},t.exports.getKey=o,t.exports.makeKey=c}).call(this,n("tjlA").Buffer)},mAz1:function(t,e,n){(function(e){var a=n("OZ/i"),s=n("MzeL").ec,r=n("Ku4m"),i=n("zZGF");function h(t,e){if(t.cmpn(0)<=0)throw new Error("invalid sig");if(t.cmp(e)>=e)throw new Error("invalid sig")}t.exports=function(t,n,d,o,u){var c=r(d);if("ec"===c.type){if("ecdsa"!==o&&"ecdsa/rsa"!==o)throw new Error("wrong public key type");return function(t,e,n){var a=i[n.data.algorithm.curve.join(".")];if(!a)throw new Error("unknown curve "+n.data.algorithm.curve.join("."));var r=new s(a),h=n.data.subjectPrivateKey.data;return r.verify(e,t,h)}(t,n,c)}if("dsa"===c.type){if("dsa"!==o)throw new Error("wrong public key type");return function(t,e,n){var s=n.data.p,i=n.data.q,d=n.data.g,o=n.data.pub_key,u=r.signature.decode(t,"der"),c=u.s,g=u.r;h(c,i),h(g,i);var p=a.mont(s),f=c.invm(i);return 0===d.toRed(p).redPow(new a(e).mul(f).mod(i)).fromRed().mul(o.toRed(p).redPow(g.mul(f).mod(i)).fromRed()).mod(s).mod(i).cmp(g)}(t,n,c)}if("rsa"!==o&&"ecdsa/rsa"!==o)throw new Error("wrong public key type");n=e.concat([u,n]);for(var g=c.modulus.byteLength(),p=[1],f=0;n.length+p.length+2<g;)p.push(255),f++;p.push(0);for(var w=-1;++w<n.length;)p.push(n[w]);p=new e(p);var l=a.mont(c.modulus);t=(t=new a(t).toRed(l)).redPow(new a(c.publicExponent)),t=new e(t.fromRed().toArray());var y=f<8?1:0;for(g=Math.min(t.length,p.length),t.length!==p.length&&(y=1),w=-1;++w<g;)y|=t[w]^p[w];return 0===y}}).call(this,n("tjlA").Buffer)},tOiH:function(t){t.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},tpL1:function(t,e,n){(function(e){var a=n("mObS"),s=n("1IWx"),r=n("P7XM"),i=n("b+dc"),h=n("mAz1"),d=n("tOiH");function o(t){s.Writable.call(this);var e=d[t];if(!e)throw new Error("Unknown message digest");this._hashType=e.hash,this._hash=a(e.hash),this._tag=e.id,this._signType=e.sign}function u(t){s.Writable.call(this);var e=d[t];if(!e)throw new Error("Unknown message digest");this._hash=a(e.hash),this._tag=e.id,this._signType=e.sign}function c(t){return new o(t)}function g(t){return new u(t)}Object.keys(d).forEach(function(t){d[t].id=new e(d[t].id,"hex"),d[t.toLowerCase()]=d[t]}),r(o,s.Writable),o.prototype._write=function(t,e,n){this._hash.update(t),n()},o.prototype.update=function(t,n){return"string"==typeof t&&(t=new e(t,n)),this._hash.update(t),this},o.prototype.sign=function(t,e){this.end();var n=this._hash.digest(),a=i(n,t,this._hashType,this._signType,this._tag);return e?a.toString(e):a},r(u,s.Writable),u.prototype._write=function(t,e,n){this._hash.update(t),n()},u.prototype.update=function(t,n){return"string"==typeof t&&(t=new e(t,n)),this._hash.update(t),this},u.prototype.verify=function(t,n,a){"string"==typeof n&&(n=new e(n,a)),this.end();var s=this._hash.digest();return h(n,s,t,this._signType,this._tag)},t.exports={Sign:c,Verify:g,createSign:c,createVerify:g}}).call(this,n("tjlA").Buffer)},zZGF:function(t){t.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}}}]);
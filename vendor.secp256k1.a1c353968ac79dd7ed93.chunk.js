(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"+MEZ":function(r){r.exports={COMPRESSED_TYPE_INVALID:"compressed should be a boolean",EC_PRIVATE_KEY_TYPE_INVALID:"private key should be a Buffer",EC_PRIVATE_KEY_LENGTH_INVALID:"private key length is invalid",EC_PRIVATE_KEY_RANGE_INVALID:"private key range is invalid",EC_PRIVATE_KEY_TWEAK_ADD_FAIL:"tweak out of range or resulting private key is invalid",EC_PRIVATE_KEY_TWEAK_MUL_FAIL:"tweak out of range",EC_PRIVATE_KEY_EXPORT_DER_FAIL:"couldn't export to DER format",EC_PRIVATE_KEY_IMPORT_DER_FAIL:"couldn't import from DER format",EC_PUBLIC_KEYS_TYPE_INVALID:"public keys should be an Array",EC_PUBLIC_KEYS_LENGTH_INVALID:"public keys Array should have at least 1 element",EC_PUBLIC_KEY_TYPE_INVALID:"public key should be a Buffer",EC_PUBLIC_KEY_LENGTH_INVALID:"public key length is invalid",EC_PUBLIC_KEY_PARSE_FAIL:"the public key could not be parsed or is invalid",EC_PUBLIC_KEY_CREATE_FAIL:"private was invalid, try again",EC_PUBLIC_KEY_TWEAK_ADD_FAIL:"tweak out of range or resulting public key is invalid",EC_PUBLIC_KEY_TWEAK_MUL_FAIL:"tweak out of range",EC_PUBLIC_KEY_COMBINE_FAIL:"the sum of the public keys is not valid",ECDH_FAIL:"scalar was invalid (zero or overflow)",ECDSA_SIGNATURE_TYPE_INVALID:"signature should be a Buffer",ECDSA_SIGNATURE_LENGTH_INVALID:"signature length is invalid",ECDSA_SIGNATURE_PARSE_FAIL:"couldn't parse signature",ECDSA_SIGNATURE_PARSE_DER_FAIL:"couldn't parse DER signature",ECDSA_SIGNATURE_SERIALIZE_DER_FAIL:"couldn't serialize signature to DER format",ECDSA_SIGN_FAIL:"nonce generation function failed or private key is invalid",ECDSA_RECOVER_FAIL:"couldn't recover public key from signature",MSG32_TYPE_INVALID:"message should be a Buffer",MSG32_LENGTH_INVALID:"message length is invalid",OPTIONS_TYPE_INVALID:"options should be an Object",OPTIONS_DATA_TYPE_INVALID:"options.data should be a Buffer",OPTIONS_DATA_LENGTH_INVALID:"options.data length is invalid",OPTIONS_NONCEFN_TYPE_INVALID:"options.noncefn should be a Function",RECOVERY_ID_TYPE_INVALID:"recovery should be a Number",RECOVERY_ID_VALUE_INVALID:"recovery should have value between -1 and 4",TWEAK_TYPE_INVALID:"tweak should be a Buffer",TWEAK_LENGTH_INVALID:"tweak length is invalid"}},G1R0:function(r,e,n){"use strict";var i=n("hwdV").Buffer,_=n("zRCy"),E=i.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),t=i.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);e.privateKeyExport=function(r,e,n){var _=i.from(n?E:t);return r.copy(_,n?8:9),e.copy(_,n?181:214),_},e.privateKeyImport=function(r){var e=r.length,n=0;if(!(e<n+1||48!==r[n])&&!(e<(n+=1)+1)&&128&r[n]){var i=127&r[n];if(n+=1,!(i<1||i>2||e<n+i)){var _=r[n+i-1]|(i>1?r[n+i-2]<<8:0);if(!(e<(n+=i)+_||e<n+3||2!==r[n]||1!==r[n+1]||1!==r[n+2]||e<(n+=3)+2||4!==r[n]||r[n+1]>32||e<n+2+r[n+1]))return r.slice(n+2,n+2+r[n+1])}}},e.signatureExport=function(r){for(var e=i.concat([i.from([0]),r.r]),n=33,E=0;n>1&&0===e[E]&&!(128&e[E+1]);--n,++E);for(var t=i.concat([i.from([0]),r.s]),o=33,I=0;o>1&&0===t[I]&&!(128&t[I+1]);--o,++I);return _.encode(e.slice(E),t.slice(I))},e.signatureImport=function(r){var e=i.alloc(32,0),n=i.alloc(32,0);try{var E=_.decode(r);if(33===E.r.length&&0===E.r[0]&&(E.r=E.r.slice(1)),E.r.length>32)throw new Error("R length is too long");if(33===E.s.length&&0===E.s[0]&&(E.s=E.s.slice(1)),E.s.length>32)throw new Error("S length is too long")}catch(r){return}return E.r.copy(e,32-E.r.length),E.s.copy(n,32-E.s.length),{r:e,s:n}},e.signatureImportLax=function(r){var e=i.alloc(32,0),n=i.alloc(32,0),_=r.length,E=0;if(48===r[E++]){var t=r[E++];if(!(128&t&&(E+=t-128)>_)&&2===r[E++]){var o=r[E++];if(128&o){if(E+(t=o-128)>_)return;for(;t>0&&0===r[E];E+=1,t-=1);for(o=0;t>0;E+=1,t-=1)o=(o<<8)+r[E]}if(!(o>_-E)){var I=E;if(E+=o,2===r[E++]){var u=r[E++];if(128&u){if(E+(t=u-128)>_)return;for(;t>0&&0===r[E];E+=1,t-=1);for(u=0;t>0;E+=1,t-=1)u=(u<<8)+r[E]}if(!(u>_-E)){var f=E;for(E+=u;o>0&&0===r[I];o-=1,I+=1);if(!(o>32)){var A=r.slice(I,I+o);for(A.copy(e,32-A.length);u>0&&0===r[f];u-=1,f+=1);if(!(u>32)){var a=r.slice(f,f+u);return a.copy(n,32-a.length),{r:e,s:n}}}}}}}}}},GP3i:function(r,e,n){"use strict";var i=n("hwdV").Buffer,_=n("mObS"),E=n("OZ/i"),t=n("MzeL").ec,o=n("+MEZ"),I=new t("secp256k1"),u=I.curve;function f(r){var e=r[0];switch(e){case 2:case 3:return 33!==r.length?null:function(r,e){var n=new E(e);if(n.cmp(u.p)>=0)return null;var i=(n=n.toRed(u.red)).redSqr().redIMul(n).redIAdd(u.b).redSqrt();return 3===r!==i.isOdd()&&(i=i.redNeg()),I.keyPair({pub:{x:n,y:i}})}(e,r.slice(1,33));case 4:case 6:case 7:return 65!==r.length?null:function(r,e,n){var i=new E(e),_=new E(n);if(i.cmp(u.p)>=0||_.cmp(u.p)>=0)return null;if(i=i.toRed(u.red),_=_.toRed(u.red),(6===r||7===r)&&_.isOdd()!==(7===r))return null;var t=i.redSqr().redIMul(i);return _.redSqr().redISub(t.redIAdd(u.b)).isZero()?I.keyPair({pub:{x:i,y:_}}):null}(e,r.slice(1,33),r.slice(33,65));default:return null}}e.privateKeyVerify=function(r){var e=new E(r);return e.cmp(u.n)<0&&!e.isZero()},e.privateKeyExport=function(r,e){var n=new E(r);if(n.cmp(u.n)>=0||n.isZero())throw new Error(o.EC_PRIVATE_KEY_EXPORT_DER_FAIL);return i.from(I.keyFromPrivate(r).getPublic(e,!0))},e.privateKeyNegate=function(r){var e=new E(r);return e.isZero()?i.alloc(32):u.n.sub(e).umod(u.n).toArrayLike(i,"be",32)},e.privateKeyModInverse=function(r){var e=new E(r);if(e.cmp(u.n)>=0||e.isZero())throw new Error(o.EC_PRIVATE_KEY_RANGE_INVALID);return e.invm(u.n).toArrayLike(i,"be",32)},e.privateKeyTweakAdd=function(r,e){var n=new E(e);if(n.cmp(u.n)>=0)throw new Error(o.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);if(n.iadd(new E(r)),n.cmp(u.n)>=0&&n.isub(u.n),n.isZero())throw new Error(o.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);return n.toArrayLike(i,"be",32)},e.privateKeyTweakMul=function(r,e){var n=new E(e);if(n.cmp(u.n)>=0||n.isZero())throw new Error(o.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);return n.imul(new E(r)),n.cmp(u.n)&&(n=n.umod(u.n)),n.toArrayLike(i,"be",32)},e.publicKeyCreate=function(r,e){var n=new E(r);if(n.cmp(u.n)>=0||n.isZero())throw new Error(o.EC_PUBLIC_KEY_CREATE_FAIL);return i.from(I.keyFromPrivate(r).getPublic(e,!0))},e.publicKeyConvert=function(r,e){var n=f(r);if(null===n)throw new Error(o.EC_PUBLIC_KEY_PARSE_FAIL);return i.from(n.getPublic(e,!0))},e.publicKeyVerify=function(r){return null!==f(r)},e.publicKeyTweakAdd=function(r,e,n){var _=f(r);if(null===_)throw new Error(o.EC_PUBLIC_KEY_PARSE_FAIL);if((e=new E(e)).cmp(u.n)>=0)throw new Error(o.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);var t=u.g.mul(e).add(_.pub);if(t.isInfinity())throw new Error(o.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);return i.from(t.encode(!0,n))},e.publicKeyTweakMul=function(r,e,n){var _=f(r);if(null===_)throw new Error(o.EC_PUBLIC_KEY_PARSE_FAIL);if((e=new E(e)).cmp(u.n)>=0||e.isZero())throw new Error(o.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);return i.from(_.pub.mul(e).encode(!0,n))},e.publicKeyCombine=function(r,e){for(var n=new Array(r.length),_=0;_<r.length;++_)if(n[_]=f(r[_]),null===n[_])throw new Error(o.EC_PUBLIC_KEY_PARSE_FAIL);for(var E=n[0].pub,t=1;t<n.length;++t)E=E.add(n[t].pub);if(E.isInfinity())throw new Error(o.EC_PUBLIC_KEY_COMBINE_FAIL);return i.from(E.encode(!0,e))},e.signatureNormalize=function(r){var e=new E(r.slice(0,32)),n=new E(r.slice(32,64));if(e.cmp(u.n)>=0||n.cmp(u.n)>=0)throw new Error(o.ECDSA_SIGNATURE_PARSE_FAIL);var _=i.from(r);return 1===n.cmp(I.nh)&&u.n.sub(n).toArrayLike(i,"be",32).copy(_,32),_},e.signatureExport=function(r){var e=r.slice(0,32),n=r.slice(32,64);if(new E(e).cmp(u.n)>=0||new E(n).cmp(u.n)>=0)throw new Error(o.ECDSA_SIGNATURE_PARSE_FAIL);return{r:e,s:n}},e.signatureImport=function(r){var e=new E(r.r);e.cmp(u.n)>=0&&(e=new E(0));var n=new E(r.s);return n.cmp(u.n)>=0&&(n=new E(0)),i.concat([e.toArrayLike(i,"be",32),n.toArrayLike(i,"be",32)])},e.sign=function(r,e,n,_){if("function"==typeof n){var t=n;n=function(n){var I=t(r,e,null,_,n);if(!i.isBuffer(I)||32!==I.length)throw new Error(o.ECDSA_SIGN_FAIL);return new E(I)}}var f=new E(e);if(f.cmp(u.n)>=0||f.isZero())throw new Error(o.ECDSA_SIGN_FAIL);var A=I.sign(r,e,{canonical:!0,k:n,pers:_});return{signature:i.concat([A.r.toArrayLike(i,"be",32),A.s.toArrayLike(i,"be",32)]),recovery:A.recoveryParam}},e.verify=function(r,e,n){var i={r:e.slice(0,32),s:e.slice(32,64)},_=new E(i.r),t=new E(i.s);if(_.cmp(u.n)>=0||t.cmp(u.n)>=0)throw new Error(o.ECDSA_SIGNATURE_PARSE_FAIL);if(1===t.cmp(I.nh)||_.isZero()||t.isZero())return!1;var A=f(n);if(null===A)throw new Error(o.EC_PUBLIC_KEY_PARSE_FAIL);return I.verify(r,i,{x:A.pub.x,y:A.pub.y})},e.recover=function(r,e,n,_){var t={r:e.slice(0,32),s:e.slice(32,64)},f=new E(t.r),A=new E(t.s);if(f.cmp(u.n)>=0||A.cmp(u.n)>=0)throw new Error(o.ECDSA_SIGNATURE_PARSE_FAIL);try{if(f.isZero()||A.isZero())throw new Error;var a=I.recoverPubKey(r,t,n);return i.from(a.encode(!0,_))}catch(r){throw new Error(o.ECDSA_RECOVER_FAIL)}},e.ecdh=function(r,n){var i=e.ecdhUnsafe(r,n,!0);return _("sha256").update(i).digest()},e.ecdhUnsafe=function(r,e,n){var _=f(r);if(null===_)throw new Error(o.EC_PUBLIC_KEY_PARSE_FAIL);var t=new E(e);if(t.cmp(u.n)>=0||t.isZero())throw new Error(o.ECDH_FAIL);return i.from(_.pub.mul(t).encode(!0,n))}},IzB8:function(r,e,n){"use strict";r.exports=n("Oomr")(n("GP3i"))},Oomr:function(r,e,n){"use strict";var i=n("isQN"),_=n("G1R0"),E=n("+MEZ");function t(r,e){return void 0===r?e:(i.isBoolean(r,E.COMPRESSED_TYPE_INVALID),r)}r.exports=function(r){return{privateKeyVerify:function(e){return i.isBuffer(e,E.EC_PRIVATE_KEY_TYPE_INVALID),32===e.length&&r.privateKeyVerify(e)},privateKeyExport:function(e,n){i.isBuffer(e,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(e,32,E.EC_PRIVATE_KEY_LENGTH_INVALID),n=t(n,!0);var o=r.privateKeyExport(e,n);return _.privateKeyExport(e,o,n)},privateKeyImport:function(e){if(i.isBuffer(e,E.EC_PRIVATE_KEY_TYPE_INVALID),(e=_.privateKeyImport(e))&&32===e.length&&r.privateKeyVerify(e))return e;throw new Error(E.EC_PRIVATE_KEY_IMPORT_DER_FAIL)},privateKeyNegate:function(e){return i.isBuffer(e,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(e,32,E.EC_PRIVATE_KEY_LENGTH_INVALID),r.privateKeyNegate(e)},privateKeyModInverse:function(e){return i.isBuffer(e,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(e,32,E.EC_PRIVATE_KEY_LENGTH_INVALID),r.privateKeyModInverse(e)},privateKeyTweakAdd:function(e,n){return i.isBuffer(e,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(e,32,E.EC_PRIVATE_KEY_LENGTH_INVALID),i.isBuffer(n,E.TWEAK_TYPE_INVALID),i.isBufferLength(n,32,E.TWEAK_LENGTH_INVALID),r.privateKeyTweakAdd(e,n)},privateKeyTweakMul:function(e,n){return i.isBuffer(e,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(e,32,E.EC_PRIVATE_KEY_LENGTH_INVALID),i.isBuffer(n,E.TWEAK_TYPE_INVALID),i.isBufferLength(n,32,E.TWEAK_LENGTH_INVALID),r.privateKeyTweakMul(e,n)},publicKeyCreate:function(e,n){return i.isBuffer(e,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(e,32,E.EC_PRIVATE_KEY_LENGTH_INVALID),n=t(n,!0),r.publicKeyCreate(e,n)},publicKeyConvert:function(e,n){return i.isBuffer(e,E.EC_PUBLIC_KEY_TYPE_INVALID),i.isBufferLength2(e,33,65,E.EC_PUBLIC_KEY_LENGTH_INVALID),n=t(n,!0),r.publicKeyConvert(e,n)},publicKeyVerify:function(e){return i.isBuffer(e,E.EC_PUBLIC_KEY_TYPE_INVALID),r.publicKeyVerify(e)},publicKeyTweakAdd:function(e,n,_){return i.isBuffer(e,E.EC_PUBLIC_KEY_TYPE_INVALID),i.isBufferLength2(e,33,65,E.EC_PUBLIC_KEY_LENGTH_INVALID),i.isBuffer(n,E.TWEAK_TYPE_INVALID),i.isBufferLength(n,32,E.TWEAK_LENGTH_INVALID),_=t(_,!0),r.publicKeyTweakAdd(e,n,_)},publicKeyTweakMul:function(e,n,_){return i.isBuffer(e,E.EC_PUBLIC_KEY_TYPE_INVALID),i.isBufferLength2(e,33,65,E.EC_PUBLIC_KEY_LENGTH_INVALID),i.isBuffer(n,E.TWEAK_TYPE_INVALID),i.isBufferLength(n,32,E.TWEAK_LENGTH_INVALID),_=t(_,!0),r.publicKeyTweakMul(e,n,_)},publicKeyCombine:function(e,n){i.isArray(e,E.EC_PUBLIC_KEYS_TYPE_INVALID),i.isLengthGTZero(e,E.EC_PUBLIC_KEYS_LENGTH_INVALID);for(var _=0;_<e.length;++_)i.isBuffer(e[_],E.EC_PUBLIC_KEY_TYPE_INVALID),i.isBufferLength2(e[_],33,65,E.EC_PUBLIC_KEY_LENGTH_INVALID);return n=t(n,!0),r.publicKeyCombine(e,n)},signatureNormalize:function(e){return i.isBuffer(e,E.ECDSA_SIGNATURE_TYPE_INVALID),i.isBufferLength(e,64,E.ECDSA_SIGNATURE_LENGTH_INVALID),r.signatureNormalize(e)},signatureExport:function(e){i.isBuffer(e,E.ECDSA_SIGNATURE_TYPE_INVALID),i.isBufferLength(e,64,E.ECDSA_SIGNATURE_LENGTH_INVALID);var n=r.signatureExport(e);return _.signatureExport(n)},signatureImport:function(e){i.isBuffer(e,E.ECDSA_SIGNATURE_TYPE_INVALID),i.isLengthGTZero(e,E.ECDSA_SIGNATURE_LENGTH_INVALID);var n=_.signatureImport(e);if(n)return r.signatureImport(n);throw new Error(E.ECDSA_SIGNATURE_PARSE_DER_FAIL)},signatureImportLax:function(e){i.isBuffer(e,E.ECDSA_SIGNATURE_TYPE_INVALID),i.isLengthGTZero(e,E.ECDSA_SIGNATURE_LENGTH_INVALID);var n=_.signatureImportLax(e);if(n)return r.signatureImport(n);throw new Error(E.ECDSA_SIGNATURE_PARSE_DER_FAIL)},sign:function(e,n,_){i.isBuffer(e,E.MSG32_TYPE_INVALID),i.isBufferLength(e,32,E.MSG32_LENGTH_INVALID),i.isBuffer(n,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(n,32,E.EC_PRIVATE_KEY_LENGTH_INVALID);var t=null,o=null;return void 0!==_&&(i.isObject(_,E.OPTIONS_TYPE_INVALID),void 0!==_.data&&(i.isBuffer(_.data,E.OPTIONS_DATA_TYPE_INVALID),i.isBufferLength(_.data,32,E.OPTIONS_DATA_LENGTH_INVALID),t=_.data),void 0!==_.noncefn&&(i.isFunction(_.noncefn,E.OPTIONS_NONCEFN_TYPE_INVALID),o=_.noncefn)),r.sign(e,n,o,t)},verify:function(e,n,_){return i.isBuffer(e,E.MSG32_TYPE_INVALID),i.isBufferLength(e,32,E.MSG32_LENGTH_INVALID),i.isBuffer(n,E.ECDSA_SIGNATURE_TYPE_INVALID),i.isBufferLength(n,64,E.ECDSA_SIGNATURE_LENGTH_INVALID),i.isBuffer(_,E.EC_PUBLIC_KEY_TYPE_INVALID),i.isBufferLength2(_,33,65,E.EC_PUBLIC_KEY_LENGTH_INVALID),r.verify(e,n,_)},recover:function(e,n,_,o){return i.isBuffer(e,E.MSG32_TYPE_INVALID),i.isBufferLength(e,32,E.MSG32_LENGTH_INVALID),i.isBuffer(n,E.ECDSA_SIGNATURE_TYPE_INVALID),i.isBufferLength(n,64,E.ECDSA_SIGNATURE_LENGTH_INVALID),i.isNumber(_,E.RECOVERY_ID_TYPE_INVALID),i.isNumberInInterval(_,-1,4,E.RECOVERY_ID_VALUE_INVALID),o=t(o,!0),r.recover(e,n,_,o)},ecdh:function(e,n){return i.isBuffer(e,E.EC_PUBLIC_KEY_TYPE_INVALID),i.isBufferLength2(e,33,65,E.EC_PUBLIC_KEY_LENGTH_INVALID),i.isBuffer(n,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(n,32,E.EC_PRIVATE_KEY_LENGTH_INVALID),r.ecdh(e,n)},ecdhUnsafe:function(e,n,_){return i.isBuffer(e,E.EC_PUBLIC_KEY_TYPE_INVALID),i.isBufferLength2(e,33,65,E.EC_PUBLIC_KEY_LENGTH_INVALID),i.isBuffer(n,E.EC_PRIVATE_KEY_TYPE_INVALID),i.isBufferLength(n,32,E.EC_PRIVATE_KEY_LENGTH_INVALID),_=t(_,!0),r.ecdhUnsafe(e,n,_)}}}},isQN:function(r,e,n){"use strict";(function(r){var n=Object.prototype.toString;e.isArray=function(r,e){if(!Array.isArray(r))throw TypeError(e)},e.isBoolean=function(r,e){if("[object Boolean]"!==n.call(r))throw TypeError(e)},e.isBuffer=function(e,n){if(!r.isBuffer(e))throw TypeError(n)},e.isFunction=function(r,e){if("[object Function]"!==n.call(r))throw TypeError(e)},e.isNumber=function(r,e){if("[object Number]"!==n.call(r))throw TypeError(e)},e.isObject=function(r,e){if("[object Object]"!==n.call(r))throw TypeError(e)},e.isBufferLength=function(r,e,n){if(r.length!==e)throw RangeError(n)},e.isBufferLength2=function(r,e,n,i){if(r.length!==e&&r.length!==n)throw RangeError(i)},e.isLengthGTZero=function(r,e){if(0===r.length)throw RangeError(e)},e.isNumberInInterval=function(r,e,n,i){if(r<=e||r>=n)throw RangeError(i)}}).call(this,n("tjlA").Buffer)}}]);
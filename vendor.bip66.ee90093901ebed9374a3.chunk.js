(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zRCy:function(e,r,n){var t=n("hwdV").Buffer;e.exports={check:function(e){if(e.length<8)return!1;if(e.length>72)return!1;if(48!==e[0])return!1;if(e[1]!==e.length-2)return!1;if(2!==e[2])return!1;var r=e[3];if(0===r)return!1;if(5+r>=e.length)return!1;if(2!==e[4+r])return!1;var n=e[5+r];return!(0===n||6+r+n!==e.length||128&e[4]||r>1&&0===e[4]&&!(128&e[5])||128&e[r+6]||n>1&&0===e[r+6]&&!(128&e[r+7]))},decode:function(e){if(e.length<8)throw new Error("DER sequence length is too short");if(e.length>72)throw new Error("DER sequence length is too long");if(48!==e[0])throw new Error("Expected DER sequence");if(e[1]!==e.length-2)throw new Error("DER sequence length is invalid");if(2!==e[2])throw new Error("Expected DER integer");var r=e[3];if(0===r)throw new Error("R length is zero");if(5+r>=e.length)throw new Error("R length is too long");if(2!==e[4+r])throw new Error("Expected DER integer (2)");var n=e[5+r];if(0===n)throw new Error("S length is zero");if(6+r+n!==e.length)throw new Error("S length is invalid");if(128&e[4])throw new Error("R value is negative");if(r>1&&0===e[4]&&!(128&e[5]))throw new Error("R value excessively padded");if(128&e[r+6])throw new Error("S value is negative");if(n>1&&0===e[r+6]&&!(128&e[r+7]))throw new Error("S value excessively padded");return{r:e.slice(4,4+r),s:e.slice(6+r)}},encode:function(e,r){var n=e.length,o=r.length;if(0===n)throw new Error("R length is zero");if(0===o)throw new Error("S length is zero");if(n>33)throw new Error("R length is too long");if(o>33)throw new Error("S length is too long");if(128&e[0])throw new Error("R value is negative");if(128&r[0])throw new Error("S value is negative");if(n>1&&0===e[0]&&!(128&e[1]))throw new Error("R value excessively padded");if(o>1&&0===r[0]&&!(128&r[1]))throw new Error("S value excessively padded");var i=t.allocUnsafe(6+n+o);return i[0]=48,i[1]=i.length-2,i[2]=2,i[3]=e.length,e.copy(i,4),i[4+n]=2,i[5+n]=r.length,r.copy(i,6+n),i}}}}]);
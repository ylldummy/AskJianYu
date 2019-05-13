(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"1fQp":function(e,t,n){(function(e,o){!function(t,n,r,s,i,c,a,u,h,l,d,v,f,p,y,E,m,k,b){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r,c=c&&c.hasOwnProperty("default")?c.default:c,a=a&&a.hasOwnProperty("default")?a.default:a,u=u&&u.hasOwnProperty("default")?u.default:u,h=h&&h.hasOwnProperty("default")?h.default:h,l=l&&l.hasOwnProperty("default")?l.default:l,d=d&&d.hasOwnProperty("default")?d.default:d,v=v&&v.hasOwnProperty("default")?v.default:v,f=f&&f.hasOwnProperty("default")?f.default:f,p=p&&p.hasOwnProperty("default")?p.default:p,y=y&&y.hasOwnProperty("default")?y.default:y,E=E&&E.hasOwnProperty("default")?E.default:E,m=m&&m.hasOwnProperty("default")?m.default:m,k=k&&k.hasOwnProperty("default")?k.default:k,b=b&&b.hasOwnProperty("default")?b.default:b;var C=function(){return this||"object"===("undefined"==typeof self?"undefined":a(self))&&self}()||new Function("return this")(),w=function(){function e(t){n(this,e),this.providersModuleFactory=t}return r(e,[{key:"resolve",value:function(e,t){if(!e)return e;if("string"==typeof e){if(/^http(s)?:\/\//i.test(e))return this.providersModuleFactory.createHttpProvider(e);if(/^ws(s)?:\/\//i.test(e))return this.providersModuleFactory.createWebsocketProvider(e);if(e&&h(t)&&u(t.connect))return this.providersModuleFactory.createIpcProvider(e,t)}return e.sendPayload&&e.subscribe?e:void 0!==C.mist&&"EthereumProvider"===e.constructor.name?this.providersModuleFactory.createMistEthereumProvider(e):e.isEIP1193?this.providersModuleFactory.createWeb3EthereumProvider(e):this.isMetamaskInpageProvider(e)?this.providersModuleFactory.createMetamaskProvider(e):this.providersModuleFactory.createCustomProvider(e)}},{key:"isMetamaskInpageProvider",value:function(e){return"MetamaskInpageProvider"===e.constructor.name}}]),e}(),g=0,S=function(){function e(){n(this,e)}return r(e,null,[{key:"toPayload",value:function(e,t){if(!e)throw new Error('JSONRPC method should be specified for params: "'.concat(JSON.stringify(t),'"!'));var n=g;return g++,{jsonrpc:"2.0",id:n,method:e,params:t||[]}}}]),e}(),O=function(){function e(){n(this,e)}return r(e,null,[{key:"validate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return h(e)?e.error?e.error instanceof Error?new Error("Node error: ".concat(e.error.message)):new Error("Node error: ".concat(JSON.stringify(e.error))):t&&e.id!==t.id?new Error("Validation error: Invalid JSON-RPC response ID (request: ".concat(t.id," / response: ").concat(e.id,")")):void 0!==e.result||new Error("Validation error: Undefined JSON-RPC result"):new Error("Validation error: Response should be of type Object")}}]),e}(),P=function(e){function t(e,o){var r;return n(this,t),(r=l(this,d(t).call(this))).connection=e,r.timeout=o,r.subscriptions={},r.registerEventListeners(),r.READY="ready",r.CONNECT="connect",r.ERROR="error",r.CLOSE="close",r.SOCKET_MESSAGE="socket_message",r.SOCKET_READY="socket_ready",r.SOCKET_CLOSE="socket_close",r.SOCKET_ERROR="socket_error",r.SOCKET_CONNECT="socket_connect",r.SOCKET_NETWORK_CHANGED="socket_networkChanged",r.SOCKET_ACCOUNTS_CHANGED="socket_accountsChanged",r}return f(t,e),r(t,[{key:"supportsSubscriptions",value:function(){return!0}},{key:"registerEventListeners",value:function(){}},{key:"removeAllSocketListeners",value:function(){this.removeAllListeners(this.SOCKET_MESSAGE),this.removeAllListeners(this.SOCKET_READY),this.removeAllListeners(this.SOCKET_CLOSE),this.removeAllListeners(this.SOCKET_ERROR),this.removeAllListeners(this.SOCKET_CONNECT)}},{key:"disconnect",value:function(e,t){}},{key:"send",value:(s=y(p.mark(function e(t,n){var o,r;return p.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendPayload(S.toPayload(t,n));case 2:if(o=e.sent,!((r=O.validate(o))instanceof Error)){e.next=6;break}throw r;case 6:return e.abrupt("return",o.result);case 7:case"end":return e.stop()}},e,this)})),function(e,t){return s.apply(this,arguments)})},{key:"sendBatch",value:function(e,t){var n=[];return e.forEach(function(e){e.beforeExecution(t),n.push(S.toPayload(e.rpcMethod,e.parameters))}),this.sendPayload(n)}},{key:"onReady",value:function(e){this.emit(this.READY,e),this.emit(this.SOCKET_READY,e)}},{key:"onError",value:function(e){this.emit(this.ERROR,e),this.emit(this.SOCKET_ERROR,e),this.removeAllSocketListeners(),this.removeAllListeners()}},{key:"onClose",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.emit(this.CLOSE,e),this.emit(this.SOCKET_CLOSE,e),this.removeAllSocketListeners(),this.removeAllListeners()}},{key:"onConnect",value:(o=y(p.mark(function e(){var t,n,o,r,s;return p.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=Object.keys(this.subscriptions)).length>0)){e.next=13;break}o=0,r=t;case 3:if(!(o<r.length)){e.next=13;break}return s=r[o],e.next=7,this.subscribe(this.subscriptions[s].subscribeMethod,this.subscriptions[s].parameters[0],this.subscriptions[s].parameters.slice(1));case 7:n=e.sent,delete this.subscriptions[n],this.subscriptions[s].id=n;case 10:o++,e.next=3;break;case 13:this.emit(this.SOCKET_CONNECT),this.emit(this.CONNECT);case 15:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)})},{key:"onMessage",value:function(e){var t;h(e)||(e=JSON.parse(e)),m(e)?t=e[0].id:void 0===e.id?(t=this.getSubscriptionEvent(e.params.subscription),e=e.params):t=e.id,this.emit(this.SOCKET_MESSAGE,e),this.emit(t,e)}},{key:"reset",value:function(){this.removeAllListeners(),this.registerEventListeners()}},{key:"subscribe",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"eth_subscribe",n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;return o.unshift(n),this.send(t,o).then(function(n){return e.subscriptions[n]={id:n,subscribeMethod:t,parameters:o},n}).catch(function(e){throw new Error("Provider error: ".concat(e))})}},{key:"unsubscribe",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"eth_unsubscribe";return this.hasSubscription(e)?this.send(n,[e]).then(function(n){return n&&(t.removeAllListeners(t.getSubscriptionEvent(e)),delete t.subscriptions[e]),n}):Promise.reject(new Error("Provider error: Subscription with ID ".concat(e," does not exist.")))}},{key:"clearSubscriptions",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"eth_unsubscribe",n=[];return Object.keys(this.subscriptions).forEach(function(o){e.removeAllListeners(o),n.push(e.unsubscribe(e.subscriptions[o].id,t))}),Promise.all(n).then(function(e){if(e.includes(!1))throw new Error("Could not unsubscribe all subscriptions: ".concat(JSON.stringify(e)));return!0})}},{key:"hasSubscription",value:function(e){return void 0!==this.getSubscriptionEvent(e)}},{key:"getSubscriptionEvent",value:function(e){var t,n=this;return this.subscriptions[e]?e:(Object.keys(this.subscriptions).forEach(function(o){n.subscriptions[o].id===e&&(t=o)}),t)}},{key:"connected",get:function(){}}]),t;var o,s}(E),L=function(e){function t(e,o){var r;return n(this,t),(r=l(this,d(t).call(this,e,o))).host=r.connection.url,r}return f(t,e),r(t,[{key:"onMessage",value:function(e){v(d(t.prototype),"onMessage",this).call(this,e.data)}},{key:"onError",value:function(e){"ECONNREFUSED"!==e.code?v(d(t.prototype),"onError",this).call(this,e):this.reconnect()}},{key:"onClose",value:function(e){1e3===e.code&&!1!==e.wasClean?v(d(t.prototype),"onClose",this).call(this):this.reconnect()}},{key:"reconnect",value:function(){var e=this;setTimeout(function(){e.removeAllSocketListeners();var t=[];t="W3CWebsocket"===e.connection.constructor.name?new e.connection.constructor(e.host,e.connection._client.protocol,null,e.connection._client.headers,e.connection._client.requestOptions,e.connection._client.config):new e.connection.constructor(e.host,e.connection.protocol||void 0),e.connection=t,e.registerEventListeners()},5e3)}},{key:"disconnect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.connection.close(e,t)}},{key:"registerEventListeners",value:function(){this.connection.addEventListener("message",this.onMessage.bind(this)),this.connection.addEventListener("open",this.onReady.bind(this)),this.connection.addEventListener("open",this.onConnect.bind(this)),this.connection.addEventListener("close",this.onClose.bind(this)),this.connection.addEventListener("error",this.onError.bind(this))}},{key:"removeAllListeners",value:function(e){switch(e){case this.SOCKET_MESSAGE:this.connection.removeEventListener("message",this.onMessage);break;case this.SOCKET_READY:this.connection.removeEventListener("open",this.onReady);break;case this.SOCKET_CLOSE:this.connection.removeEventListener("close",this.onClose);break;case this.SOCKET_ERROR:this.connection.removeEventListener("error",this.onError);break;case this.SOCKET_CONNECT:this.connection.removeEventListener("connect",this.onConnect)}v(d(t.prototype),"removeAllListeners",this).call(this,e)}},{key:"isConnecting",value:function(){return this.connection.readyState===this.connection.CONNECTING}},{key:"sendPayload",value:function(e){var t=this;return new Promise(function(n,o){if(t.once("error",o),!t.isConnecting()){var r,s;if(t.connection.readyState!==t.connection.OPEN)return o(new Error("Connection error: Connection is not open on send()"));try{t.connection.send(JSON.stringify(e))}catch(e){o(e)}return t.timeout&&(r=setTimeout(function(){o(new Error("Connection error: Timeout exceeded"))},t.timeout)),s=m(e)?e[0].id:e.id,void t.once(s,function(e){return r&&clearTimeout(r),n(e)})}t.once("connect",function(){t.sendPayload(e).then(n).catch(o)})})}},{key:"connected",get:function(){return this.connection.readyState===this.connection.OPEN}}]),t}(P),_=function(e){function t(e,o){var r;return n(this,t),(r=l(this,d(t).call(this,e,null))).host=o,r.lastChunk="",r}return f(t,e),r(t,[{key:"disconnect",value:function(){this.connection.destroy()}},{key:"reconnect",value:function(){this.connection.connect({path:this.path})}},{key:"onMessage",value:function(e){var n=this,o=null,r=[],s=e.toString().replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|");s.forEach(function(e){o=null,n.lastChunk&&(e=n.lastChunk+e);try{o=JSON.parse(e)}catch(t){return void(n.lastChunk=e)}n.lastChunk=null,r.push(o)}),r.forEach(function(e){v(d(t.prototype),"onMessage",n).call(n,e)})}},{key:"registerEventListeners",value:function(){this.connection.on("data",this.onMessage.bind(this)),this.connection.on("connect",this.onConnect.bind(this)),this.connection.on("error",this.onError.bind(this)),this.connection.on("close",this.onClose.bind(this)),this.connection.on("timeout",this.onClose.bind(this)),this.connection.on("ready",this.onReady.bind(this))}},{key:"removeAllListeners",value:function(e){switch(e){case this.SOCKET_MESSAGE:this.connection.removeListener("data",this.onMessage);break;case this.SOCKET_READY:this.connection.removeListener("ready",this.onReady);break;case this.SOCKET_CLOSE:this.connection.removeListener("close",this.onClose);break;case this.SOCKET_ERROR:this.connection.removeListener("error",this.onError);break;case this.SOCKET_CONNECT:this.connection.removeListener("connect",this.onConnect)}v(d(t.prototype),"removeAllListeners",this).call(this,e)}},{key:"sendPayload",value:function(e){var t=this;return new Promise(function(n,o){var r;return t.once("error",o),t.connection.writable||t.connection.connect({path:t.path}),t.connection.write(JSON.stringify(e))?(r=m(e)?e[0].id:e.id,void t.once(r,n)):o(new Error("Connection error: Couldn't write on the socket with Socket.write(payload)"))})}},{key:"connected",get:function(){return!this.connection.pending}}]),t}(P),A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://localhost:8545",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;n(this,e),this.host=t,this.timeout=o.timeout||0,this.headers=o.headers,this.withCredentials=o.withCredentials||!1,this.connected=!0,this.providersModuleFactory=r,this.agent={};var s=!1;!0!==o.keepAlive&&!1===o.keepAlive||(s=!0),"https"===t.substring(0,5)?this.agent.httpsAgent=new b.Agent({keepAlive:s}):this.agent.httpAgent=new k.Agent({keepAlive:s})}return r(e,[{key:"supportsSubscriptions",value:function(){return!1}},{key:"subscribe",value:function(){throw new Error("Subscriptions are not supported with the HttpProvider.")}},{key:"unsubscribe",value:function(){throw new Error("Subscriptions are not supported with the HttpProvider.")}},{key:"disconnect",value:function(){return!0}},{key:"send",value:(t=y(p.mark(function e(t,n){var o,r;return p.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendPayload(S.toPayload(t,n));case 2:if(o=e.sent,!((r=O.validate(o))instanceof Error)){e.next=6;break}throw r;case 6:return e.abrupt("return",o.result);case 7:case"end":return e.stop()}},e,this)})),function(e,n){return t.apply(this,arguments)})},{key:"sendBatch",value:function(e,t){var n=[];return e.forEach(function(e){e.beforeExecution(t),n.push(S.toPayload(e.rpcMethod,e.parameters))}),this.sendPayload(n)}},{key:"sendPayload",value:function(e){var t=this;return new Promise(function(n,o){var r=t.providersModuleFactory.createXMLHttpRequest(t.host,t.timeout,t.headers,t.agent,t.withCredentials);r.onreadystatechange=function(){if(0!==r.readyState&&1!==r.readyState&&(t.connected=!0),4===r.readyState){if(200===r.status)try{return n(JSON.parse(r.responseText))}catch(e){o(new Error("Invalid JSON as response: ".concat(r.responseText)))}t.isInvalidHttpEndpoint(r)&&o(new Error("Connection refused or URL couldn't be resolved: ".concat(t.host))),r.status>=400&&r.status<=499&&o(new Error("HttpProvider ERROR: ".concat(r.responseText," (code: ").concat(r.status,")")))}},r.ontimeout=function(){t.connected=!1,o(new Error("Connection error: Timeout exceeded after ".concat(t.timeout,"ms")))};try{r.send(JSON.stringify(e))}catch(e){t.connected=!1,o(e)}})}},{key:"isInvalidHttpEndpoint",value:function(e){return null===e.response&&0===e.status}}]),e;var t}(),R=function(){function e(t){n(this,e),this.moduleInstance=t,this.methods=[]}return r(e,[{key:"add",value:function(e){if(!h(e)&&e)throw new Error("Please provide a object of type AbstractMethod.");this.methods.push(e)}},{key:"execute",value:function(){var e=this;return this.moduleInstance.currentProvider.sendBatch(this.methods,this.moduleInstance).then(function(t){var n=[];if(e.methods.forEach(function(e,o){if(!m(t))return e.callback(new Error("BatchRequest error: Response should be of type Array but is: ".concat(a(t))),null),void n.push("Response should be of type Array but is: ".concat(a(t)));var r=t[o]||null,s=O.validate(r);if(s)try{var i=e.afterExecution(r.result);t[o]=i,e.callback(!1,i)}catch(t){n.push(t),e.callback(t,null)}else n.push(s),e.callback(s,null)}),n.length>0)throw new Error("BatchRequest error: ".concat(JSON.stringify(n)));return{methods:e.methods,response:t}})}}]),e}(),T=function(e){function t(e){var o;return n(this,t),(o=l(this,d(t).call(this,e,null))).host="Web3EthereumProvider",o}return f(t,e),r(t,[{key:"registerEventListeners",value:function(){this.connection.on("notification",this.onMessage.bind(this)),this.connection.on("connect",this.onConnect.bind(this)),this.connection.on("connect",this.onReady.bind(this)),this.connection.on("close",this.onClose.bind(this)),this.connection.on("networkChanged",this.onNetworkChanged.bind(this)),this.connection.on("accountsChanged",this.onAccountsChanged.bind(this))}},{key:"removeAllListeners",value:function(e){switch(e){case this.SOCKET_NETWORK_CHANGED:this.connection.removeListener("networkChanged",this.onNetworkChanged);break;case this.SOCKET_ACCOUNTS_CHANGED:this.connection.removeListener("accountsChanged",this.onAccountsChanged);break;case this.SOCKET_MESSAGE:this.connection.removeListener("notification",this.onMessage);break;case this.SOCKET_READY:this.connection.removeListener("connect",this.onReady);break;case this.SOCKET_CLOSE:this.connection.removeListener("close",this.onClose);break;case this.SOCKET_ERROR:this.connection.removeListener("close",this.onError);break;case this.SOCKET_CONNECT:this.connection.removeListener("connect",this.onConnect)}v(d(t.prototype),"removeAllListeners",this).call(this,e)}},{key:"removeAllSocketListeners",value:function(){this.connection.removeAllListeners()}},{key:"onNetworkChanged",value:function(e){this.emit("networkChanged",e)}},{key:"onAccountsChanged",value:function(e){this.emit("accountsChanged",e)}},{key:"onMessage",value:function(e){this.emit(this.getSubscriptionEvent(e.subscription),e)}},{key:"send",value:(o=y(p.mark(function e(t,n){var o,r;return p.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.connection.send(t,n),!((r=O.validate(o))instanceof Error)){e.next=4;break}throw r;case 4:return e.abrupt("return",o);case 5:case"end":return e.stop()}},e,this)})),function(e,t){return o.apply(this,arguments)})},{key:"sendBatch",value:function(e,t){var n=this,o=[];return e.forEach(function(e){e.beforeExecution(t),o.push(n.connection.send(e.rpcMethod,e.parameters))}),Promise.all(o)}}]),t;var o}(P),N=function(e){function t(e){var o;return n(this,t),(o=l(this,d(t).call(this,e,null))).host="metamask",o}return f(t,e),r(t,[{key:"registerEventListeners",value:function(){this.connection.on("accountsChanged",this.onAccountsChanged.bind(this)),this.connection.on("networkChanged",this.onReady.bind(this)),this.connection.on("networkChanged",this.onNetworkChanged.bind(this)),this.connection.on("data",this.onMessage.bind(this)),this.connection.on("error",this.onError.bind(this))}},{key:"onMessage",value:function(e,n){v(d(t.prototype),"onMessage",this).call(this,n)}},{key:"removeAllListeners",value:function(e){switch(e){case this.SOCKET_NETWORK_CHANGED:this.connection.removeListener("networkChanged",this.onNetworkChanged);break;case this.SOCKET_ACCOUNTS_CHANGED:this.connection.removeListener("accountsChanged",this.onAccountsChanged);break;case this.SOCKET_MESSAGE:this.connection.removeListener("data",this.onMessage);break;case this.SOCKET_ERROR:this.connection.removeListener("error",this.onError)}v(d(t.prototype),"removeAllListeners",this).call(this,e)}},{key:"removeAllSocketListeners",value:function(){this.connection.removeListener(this.SOCKET_NETWORK_CHANGED,this.onNetworkChanged),this.connection.removeListener(this.SOCKET_ACCOUNTS_CHANGED,this.onAccountsChanged),v(d(t.prototype),"removeAllSocketListeners",this).call(this)}},{key:"onNetworkChanged",value:function(e){this.emit("networkChanged",e)}},{key:"onAccountsChanged",value:function(e){this.emit("accountsChanged",e)}},{key:"disconnect",value:function(){return!0}},{key:"sendPayload",value:function(e){var t=this;return new Promise(function(n,o){t.connection.send(e,function(r,s){if(t.removeAllListeners(e.id),!r)return n(s);o(r)})})}},{key:"connected",get:function(){return this.connection.isConnected()}}]),t}(P),M=function(e){function t(e){var o;return n(this,t),(o=l(this,d(t).call(this,e,null))).host="mist",o}return f(t,e),r(t,[{key:"registerEventListeners",value:function(){this.connection.on("data",this.onMessage.bind(this)),this.connection.on("error",this.onError.bind(this)),this.connection.on("connect",this.onConnect.bind(this)),this.connection.on("connect",this.onReady.bind(this)),this.connection.on("end",this.onClose.bind(this))}},{key:"removeAllListeners",value:function(e){switch(e){case this.SOCKET_MESSAGE:this.connection.removeListener("data",this.onMessage);break;case this.SOCKET_ERROR:this.connection.removeListener("error",this.onError);break;case this.SOCKET_CONNECT:case this.SOCKET_READY:this.connection.removeListener("connect",this.onConnect);break;case this.SOCKET_CLOSE:this.connection.removeListener("end",this.onClose)}v(d(t.prototype),"removeAllListeners",this).call(this,e)}},{key:"disconnect",value:function(){return!0}},{key:"sendPayload",value:function(e){var t=this;return new Promise(function(n,o){t.connection.send(e,function(r,s){if(t.removeAllListeners(e.id),!r)return n(s);o(r)})})}},{key:"connected",get:function(){return this.connection.isConnected()}}]),t}(P),x=function(){function e(t){n(this,e),this.host="CustomProvider",this.connection=t,this.checkConnectionMethods()}return r(e,[{key:"supportsSubscriptions",value:function(){return!1}},{key:"checkConnectionMethods",value:function(){if(this.connection.send||this.connection.sendAsync)return!0;throw new Error("Invalid provider injected!")}},{key:"subscribe",value:function(){throw new Error("Subscriptions are not supported with the CustomProvider.")}},{key:"unsubscribe",value:function(){throw new Error("Subscriptions are not supported with the CustomProvider.")}},{key:"send",value:(t=y(p.mark(function e(t,n){var o,r;return p.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendPayload(S.toPayload(t,n));case 2:if(o=e.sent,!((r=O.validate(o))instanceof Error)){e.next=6;break}throw r;case 6:return e.abrupt("return",o.result);case 7:case"end":return e.stop()}},e,this)})),function(e,n){return t.apply(this,arguments)})},{key:"sendBatch",value:function(e,t){var n=[];return e.forEach(function(e){e.beforeExecution(t),n.push(S.toPayload(e.rpcMethod,e.parameters))}),this.sendPayload(n)}},{key:"sendPayload",value:function(e){var t=this;return new Promise(function(n,o){t.connection.sendAsync?t.connection.sendAsync(e,function(e,t){e||n(t),o(e)}):t.connection.send(e,function(e,t){e||n(t),o(e)})})}}]),e;var t}(),K=function(){function t(){n(this,t)}return r(t,[{key:"createBatchRequest",value:function(e){return new R(e)}},{key:"createProviderResolver",value:function(){return new w(this)}},{key:"createHttpProvider",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new A(e,t,this)}},{key:"createXMLHttpRequest",value:function(t,n,o,r,s){var c;return void 0!==e&&null!=e.versions&&null!=e.versions.node?(c=new i.XMLHttpRequest).nodejsSet(r):c=new XMLHttpRequest,c.open("POST",t,!0),c.setRequestHeader("Content-Type","application/json"),c.timeout=n,c.withCredentials=s,o&&o.forEach(function(e){c.setRequestHeader(e.name,e.value)}),c}},{key:"createWebsocketProvider",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="";if(void 0!==e&&null!=e.versions&&null!=e.versions.node){var i=n.headers||{},a=new c(t);if(!i.authorization&&a.username&&a.password){var u=o.from("".concat(a.username,":").concat(a.password)).toString("base64");i.authorization="Basic ".concat(u)}r=new s.w3cwebsocket(t,n.protocol,null,i,null,n.clientConfig)}else r=new window.WebSocket(t,n.protocol);return new L(r,n.timeout)}},{key:"createIpcProvider",value:function(e,t){return new _(t.connect({path:e}),e)}},{key:"createWeb3EthereumProvider",value:function(e){return new T(e)}},{key:"createMetamaskProvider",value:function(e){return new N(e)}},{key:"createMistEthereumProvider",value:function(e){return new M(e)}},{key:"createCustomProvider",value:function(e){return new x(e)}}]),t}(),j=function(){return this||"object"===("undefined"==typeof self?"undefined":a(self))&&self}()||new Function("return this")(),D=function(){function e(){n(this,e)}return r(e,null,[{key:"detect",value:function(){return void 0!==j.ethereumProvider&&"EthereumProvider"===j.ethereumProvider.constructor.name?j.ethereumProvider:void 0!==j.web3&&j.web3.currentProvider?j.web3.currentProvider:null}}]),e}();t.BatchRequest=function(e){return(new K).createBatchRequest(e)},t.HttpProvider=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(new K).createHttpProvider(e,t)},t.IpcProvider=function(e,t){return(new K).createIpcProvider(e,t)},t.ProviderDetector=D,t.ProviderResolver=function(){return(new K).createProviderResolver()},t.ProvidersModuleFactory=K,t.Web3EthereumProvider=T,t.WebsocketProvider=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(new K).createWebsocketProvider(e,t)},Object.defineProperty(t,"__esModule",{value:!0})}(t,n("lwsE"),n("W8MJ"),n("fjyx"),n("hgLn"),n("KUxS"),n("cDf5"),n("lSCD"),n("GoyQ"),n("a1gu"),n("Nsbk"),n("iWIM"),n("7W2i"),n("o0o1"),n("yXPU"),n("vG9L"),n("Z0cm"),n("lJCZ"),n("JPgR"))}).call(this,n("8oxB"),n("tjlA").Buffer)},KUxS:function(e,t,n){"use strict";(function(t){var o=n("RA0T"),r=n("nFlj"),s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,c=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],a={hash:1,query:1};function u(e){var n,o=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},r={},s=typeof(e=e||o);if("blob:"===e.protocol)r=new l(unescape(e.pathname),{});else if("string"===s)for(n in r=new l(e,{}),a)delete r[n];else if("object"===s){for(n in e)n in a||(r[n]=e[n]);void 0===r.slashes&&(r.slashes=i.test(e.href))}return r}function h(e){var t=s.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function l(e,t,n){if(!(this instanceof l))return new l(e,t,n);var s,i,a,d,v,f,p=c.slice(),y=typeof t,E=this,m=0;for("object"!==y&&"string"!==y&&(n=t,t=null),n&&"function"!=typeof n&&(n=r.parse),t=u(t),s=!(i=h(e||"")).protocol&&!i.slashes,E.slashes=i.slashes||s&&t.slashes,E.protocol=i.protocol||t.protocol||"",e=i.rest,i.slashes||(p[3]=[/(.*)/,"pathname"]);m<p.length;m++)"function"!=typeof(d=p[m])?(a=d[0],f=d[1],a!=a?E[f]=e:"string"==typeof a?~(v=e.indexOf(a))&&("number"==typeof d[2]?(E[f]=e.slice(0,v),e=e.slice(v+d[2])):(E[f]=e.slice(v),e=e.slice(0,v))):(v=a.exec(e))&&(E[f]=v[1],e=e.slice(0,v.index)),E[f]=E[f]||s&&d[3]&&t[f]||"",d[4]&&(E[f]=E[f].toLowerCase())):e=d(e);n&&(E.query=n(E.query)),s&&t.slashes&&"/"!==E.pathname.charAt(0)&&(""!==E.pathname||""!==t.pathname)&&(E.pathname=function(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],s=!1,i=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),i++):i&&(0===o&&(s=!0),n.splice(o,1),i--);return s&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}(E.pathname,t.pathname)),o(E.port,E.protocol)||(E.host=E.hostname,E.port=""),E.username=E.password="",E.auth&&(d=E.auth.split(":"),E.username=d[0]||"",E.password=d[1]||""),E.origin=E.protocol&&E.host&&"file:"!==E.protocol?E.protocol+"//"+E.host:"null",E.href=E.toString()}l.prototype={set:function(e,t,n){var s=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||r.parse)(t)),s[e]=t;break;case"port":s[e]=t,o(t,s.protocol)?t&&(s.host=s.hostname+":"+t):(s.host=s.hostname,s[e]="");break;case"hostname":s[e]=t,s.port&&(t+=":"+s.port),s.host=t;break;case"host":s[e]=t,/:\d+$/.test(t)?(t=t.split(":"),s.port=t.pop(),s.hostname=t.join(":")):(s.hostname=t,s.port="");break;case"protocol":s.protocol=t.toLowerCase(),s.slashes=!n;break;case"pathname":case"hash":if(t){var i="pathname"===e?"/":"#";s[e]=t.charAt(0)!==i?i+t:t}else s[e]=t;break;default:s[e]=t}for(var a=0;a<c.length;a++){var u=c[a];u[4]&&(s[u[1]]=s[u[1]].toLowerCase())}return s.origin=s.protocol&&s.host&&"file:"!==s.protocol?s.protocol+"//"+s.host:"null",s.href=s.toString(),s},toString:function(e){e&&"function"==typeof e||(e=r.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var s=o+(n.slashes?"//":"");return n.username&&(s+=n.username,n.password&&(s+=":"+n.password),s+="@"),s+=n.host+n.pathname,(t="object"==typeof n.query?e(n.query):n.query)&&(s+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(s+=n.hash),s}},l.extractProtocol=h,l.location=u,l.qs=r,e.exports=l}).call(this,n("yLpj"))},vG9L:function(e,t,n){"use strict";var o=Object.prototype.hasOwnProperty,r="~";function s(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function c(e,t,n,o,s){if("function"!=typeof n)throw new TypeError("The listener must be a function");var c=new i(n,o||e,s),a=r?r+t:t;return e._events[a]?e._events[a].fn?e._events[a]=[e._events[a],c]:e._events[a].push(c):(e._events[a]=c,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new s:delete e._events[t]}function u(){this._events=new s,this._eventsCount=0}Object.create&&(s.prototype=Object.create(null),(new s).__proto__||(r=!1)),u.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)o.call(e,t)&&n.push(r?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},u.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,s=n.length,i=new Array(s);o<s;o++)i[o]=n[o].fn;return i},u.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},u.prototype.emit=function(e,t,n,o,s,i){var c=r?r+e:e;if(!this._events[c])return!1;var a,u,h=this._events[c],l=arguments.length;if(h.fn){switch(h.once&&this.removeListener(e,h.fn,void 0,!0),l){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,t),!0;case 3:return h.fn.call(h.context,t,n),!0;case 4:return h.fn.call(h.context,t,n,o),!0;case 5:return h.fn.call(h.context,t,n,o,s),!0;case 6:return h.fn.call(h.context,t,n,o,s,i),!0}for(u=1,a=new Array(l-1);u<l;u++)a[u-1]=arguments[u];h.fn.apply(h.context,a)}else{var d,v=h.length;for(u=0;u<v;u++)switch(h[u].once&&this.removeListener(e,h[u].fn,void 0,!0),l){case 1:h[u].fn.call(h[u].context);break;case 2:h[u].fn.call(h[u].context,t);break;case 3:h[u].fn.call(h[u].context,t,n);break;case 4:h[u].fn.call(h[u].context,t,n,o);break;default:if(!a)for(d=1,a=new Array(l-1);d<l;d++)a[d-1]=arguments[d];h[u].fn.apply(h[u].context,a)}}return!0},u.prototype.on=function(e,t,n){return c(this,e,t,n,!1)},u.prototype.once=function(e,t,n){return c(this,e,t,n,!0)},u.prototype.removeListener=function(e,t,n,o){var s=r?r+e:e;if(!this._events[s])return this;if(!t)return a(this,s),this;var i=this._events[s];if(i.fn)i.fn!==t||o&&!i.once||n&&i.context!==n||a(this,s);else{for(var c=0,u=[],h=i.length;c<h;c++)(i[c].fn!==t||o&&!i[c].once||n&&i[c].context!==n)&&u.push(i[c]);u.length?this._events[s]=1===u.length?u[0]:u:a(this,s)}return this},u.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new s,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=r,u.EventEmitter=u,e.exports=u}}]);
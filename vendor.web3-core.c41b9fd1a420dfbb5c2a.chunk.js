(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"K9+5":function(t,e,r){!function(t,e,r,i,o,n,s){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,r=r&&r.hasOwnProperty("default")?r.default:r,i=i&&i.hasOwnProperty("default")?i.default:i;var u=function(){function t(r){var i=this,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(e(this,t),this.providerResolver=new o.ProviderResolver,this.givenProvider=o.ProviderDetector.detect(),this._currentProvider=this.providerResolver.resolve(r,a),this._defaultAccount=u.defaultAccount?s.toChecksumAddress(u.defaultAccount):void 0,this._defaultBlock=u.defaultBlock||"latest",this._transactionBlockTimeout=u.transactionBlockTimeout||50,this._transactionConfirmationBlocks=u.transactionConfirmationBlocks||24,this._transactionPollingTimeout=u.transactionPollingTimeout||750,this._defaultGasPrice=u.defaultGasPrice,this._defaultGas=u.defaultGas,this.BatchRequest=function(){return new o.BatchRequest(i)},c)return new n.MethodProxy(this,c)}return r(t,[{key:"setProvider",value:function(t,e){if(!this.isSameProvider(t)){var r=this.providerResolver.resolve(t,e);return this.clearSubscriptions(),this._currentProvider=r,!0}return!1}},{key:"isSameProvider",value:function(t){return i(t)?!(!this.currentProvider||this.currentProvider.constructor.name!==t.constructor.name)&&this.currentProvider.host===t.host:this.currentProvider.host===t}},{key:"clearSubscriptions",value:function(t){return void 0!==this.currentProvider.clearSubscriptions&&this.currentProvider.subscriptions.length>0?this.currentProvider.clearSubscriptions(t):Promise.resolve(!0)}},{key:"defaultBlock",get:function(){return this._defaultBlock},set:function(t){this._defaultBlock=t}},{key:"transactionBlockTimeout",get:function(){return this._transactionBlockTimeout},set:function(t){this._transactionBlockTimeout=t}},{key:"transactionConfirmationBlocks",get:function(){return this._transactionConfirmationBlocks},set:function(t){this._transactionConfirmationBlocks=t}},{key:"transactionPollingTimeout",get:function(){return this._transactionPollingTimeout},set:function(t){this._transactionPollingTimeout=t}},{key:"defaultGasPrice",get:function(){return this._defaultGasPrice},set:function(t){this._defaultGasPrice=t}},{key:"defaultGas",get:function(){return this._defaultGas},set:function(t){this._defaultGas=t}},{key:"defaultAccount",get:function(){return this._defaultAccount},set:function(t){this._defaultAccount=s.toChecksumAddress(t)}},{key:"currentProvider",get:function(){return this._currentProvider},set:function(t){throw new Error("The property currentProvider is read-only!")}}],[{key:"providers",get:function(){return{HttpProvider:o.HttpProvider,WebsocketProvider:o.WebsocketProvider,IpcProvider:o.IpcProvider}}}]),t}();t.AbstractWeb3Module=u,Object.defineProperty(t,"__esModule",{value:!0})}(e,r("lwsE"),r("W8MJ"),r("GoyQ"),r("1fQp"),r("s9tM"),r("9eBz"))}}]);
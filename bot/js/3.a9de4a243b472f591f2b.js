(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{671:function(e,t,r){"use strict";var n=r(6),a=r.n(n),o=r(0),c=r.n(o);t.a=function(e){var t=e.className,r=e.is_invisible,n=e.theme,o=e.id;return c.a.createElement("div",{id:o,className:a()("barspinner","barspinner--".concat(n||"dark"),{invisible:r},t)},Array.from(new Array(5)).map((function(e,t){return c.a.createElement("div",{key:t,className:"barspinner__rect barspinner__rect--".concat(t+1," rect").concat(t+1)})})))}},673:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),s=r(43),i=r.n(s),l=r(54),u=r(8),f=r(11);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=_(this,(e=b(t)).call.apply(e,[this].concat(a)))).onClickButton=function(){r.props.error.link?window.open(Object(l.urlFor)(r.props.error.link,void 0,void 0,!0)):"function"==typeof r.props.error.onClickButton&&r.props.error.onClickButton(),r.props.setErrorMessage("")},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"cashier__wrapper"},c.a.createElement(u.a,{icon:"IconCashierError",className:"cashier-error__icon"}),Array.isArray(this.props.error.message)?this.props.error.message.map((function(e,t){return c.a.createElement("p",{className:"cashier-error__text",key:t},e)})):c.a.createElement("p",{className:"cashier-error__text"},this.props.error.message),this.props.error.button_text&&c.a.createElement(i.a,{className:"btn--primary--default cashier-error__button",has_effect:!0,text:this.props.error.button_text,onClick:this.onClickButton}))}}])&&m(r.prototype,n),a&&m(r,a),t}(c.a.Component);h.propTypes={error:a.a.object,setErrorMessage:a.a.func},t.a=Object(f.b)((function(e){return{setErrorMessage:e.modules.cashier.setErrorMessage}}))(h)},680:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),s=r(43),i=r.n(s),l=(r(97),r(8)),u=r(7),f=r(107),p=r(3);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=_(this,(e=b(t)).call.apply(e,[this].concat(a)))).onClickDeposit=function(){r.props.setModalIndex(0)},r.render=function(){return c.a.createElement("div",{className:"cashier__wrapper account-transfer__no-balance"},c.a.createElement(l.a,{icon:"IconNoBalance",className:"account-transfer__no-balance-icon"}),c.a.createElement("h2",{className:"withdraw__header"},c.a.createElement(u.a,{i18n_default_text:"You have no funds in your {{website_name}} account",values:{website_name:f.website_name}})),c.a.createElement("p",{className:"cashier__text"},c.a.createElement(u.a,{i18n_default_text:"Please make a deposit to enable fund transfers."})),c.a.createElement(i.a,{className:"btn--primary--default account-transfer__no-balance-button",has_effect:!0,text:Object(p.localize)("Deposit now"),onClick:r.onClickDeposit}))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),t}(c.a.Component);h.propTypes={setModalIndex:a.a.func},t.a=h},725:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(0),c=r.n(o),s=r(11),i=r(6),l=r.n(i),u=r(43),f=r.n(u),p=(r(97),r(178)),m=r.n(p),_=(r(258),r(108)),b=r.n(_),y=(r(176),r(181)),h=r.n(y),d=(r(259),r(25)),v=r(16),w=r.n(v),E=r(7),g=r(107),O=r(3),j=r(8),N=r(140),T=r(671);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t,r,n,a,o,c){try{var s=e[o](c),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e,t){var r=t.balance,n=t.currency,a=t.transfer_limit,o={};return e.amount?Object(N.b)(e.amount,{type:"float",decimals:w.a.getDecimalPlaces(n),min:a.min,max:a.max})?+r<+e.amount&&(o.amount=Object(O.localize)("Insufficient balance.")):o.amount=Object(N.a)().number.message:o.amount=Object(O.localize)("This field is required."),o},z=function(e){var t=e.account,r=e.idx;return c.a.createElement(c.a.Fragment,{key:r},(t.currency||t.mt_icon)&&c.a.createElement(j.a,{icon:"IconAccountsCurrency",className:"account-transfer__currency-icon",type:t.mt_icon||t.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"account-transfer__currency"},t.text),c.a.createElement("span",{className:"account-transfer__balance"},"(",c.a.createElement(h.a,{amount:t.balance,currency:t.currency}),")"))},L=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=D(this,(e=I(t)).call.apply(e,[this].concat(a)))).validateTransferPassthrough=function(e){return F(e,{balance:r.props.selected_from.balance,currency:r.props.selected_from.currency,transfer_limit:r.props.transfer_limit})},r.onTransferPassthrough=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.requestTransferBetweenAccounts({amount:t.amount});case 2:e.sent.error&&n.setSubmitting(!1);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){A(o,n,a,c,s,"next",e)}function s(e){A(o,n,a,c,s,"throw",e)}c(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=[],r=[],n=[],a=[];this.props.accounts_list.forEach((function(o,s){var i=c.a.createElement(z,{idx:s,account:o}),l=o.value;(o.is_mt?r:t).push({text:i,value:l});var u=o.value===e.props.selected_from.value,f=e.props.selected_from.is_mt&&o.is_mt,p=e.props.selected_from.is_crypto&&o.is_crypto,m=f||u||p;(o.is_mt?a:n).push({text:i,value:l,disabled:m})}));var o=S(k({},Object(O.localize)("Deriv accounts"),t),r.length&&k({},Object(O.localize)("DMT5 accounts"),r)),s=S(k({},Object(O.localize)("Deriv accounts"),n),a.length&&k({},Object(O.localize)("DMT5 accounts"),a));return c.a.createElement("div",{className:"cashier__wrapper--align-left"},c.a.createElement(c.a.Fragment,null,c.a.createElement(d.c,{initialValues:{amount:""},validate:this.validateTransferPassthrough,onSubmit:this.onTransferPassthrough},(function(t){var r=t.errors,n=t.isSubmitting,a=t.isValid,i=t.touched,u=t.handleChange;return c.a.createElement(c.a.Fragment,null,n?c.a.createElement("div",{className:"cashier__loader-wrapper"},c.a.createElement(T.a,{className:"cashier__loader"})):c.a.createElement(d.b,null,c.a.createElement(m.a,{id:"transfer_from",className:"cashier__drop-down account-transfer__drop-down",classNameDisplay:"cashier__drop-down-display",classNameDisplaySpan:"cashier__drop-down-display-span",classNameItems:"cashier__drop-down-items",classNameLabel:"cashier__drop-down-label",label:Object(O.localize)("From"),list:o,name:"transfer_from",value:e.props.selected_from.value,onChange:e.props.onChangeTransferFrom}),c.a.createElement(j.a,{className:"cashier__transferred-icon account-transfer__transfer-icon",icon:"IconBack"}),c.a.createElement(m.a,{id:"transfer_to",className:"cashier__drop-down account-transfer__drop-down",classNameDisplay:"cashier__drop-down-display",classNameDisplaySpan:"cashier__drop-down-display-span",classNameItems:"cashier__drop-down-items",classNameLabel:"cashier__drop-down-label",label:Object(O.localize)("To"),list:s,name:"transfer_to",value:e.props.selected_to.value,onChange:e.props.onChangeTransferTo}),c.a.createElement(d.a,{name:"amount"},(function(t){var n=t.field;return c.a.createElement(b.a,P({},n,{onChange:function(t){e.props.setErrorMessage(""),u(t)},className:"cashier__input-long dc-input--no-placeholder",type:"text",label:Object(O.localize)("Amount"),error:i.amount&&r.amount,required:!0,leading_icon:e.props.selected_from.currency?c.a.createElement("span",{className:l()("cashier__amount-symbol","symbols","symbols--".concat(e.props.selected_from.currency.toLowerCase()))}):void 0,autoComplete:"off",maxLength:"30",hint:e.props.transfer_limit.max&&c.a.createElement(E.a,{i18n_default_text:"Transfer limit: <0 />",components:[c.a.createElement(h.a,{key:0,amount:e.props.transfer_limit.max,currency:e.props.selected_from.currency})]})}))})),c.a.createElement("div",null,c.a.createElement("div",{className:"account-transfer__notes"},c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(E.a,{i18n_default_text:"Transfer limits may vary depending on changes in exchange rates."}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(E.a,{i18n_default_text:"Transfers are subject to a {{transfer_fee}}% transfer fee or {{currency}} {{minimum_fee}}, whichever is higher.",values:{transfer_fee:e.props.transfer_fee,currency:e.props.selected_from.currency,minimum_fee:e.props.minimum_fee}}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(E.a,{i18n_default_text:"Transfers are possible only between your fiat and cryptocurrency accounts (and vice versa), or between your {{website_name}} account and your {{website_name}} MT5 (DMT5) account (or vice versa).",values:{website_name:g.website_name}}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(E.a,{i18n_default_text:"Transfers may be unavailable at times such as when the market is closed (weekends or holidays), periods of high volatility, or when there are technical issues."}))))),c.a.createElement("div",{className:"cashier__form-submit"},e.props.error.message&&c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{icon:"IconEmergency",className:"cashier__form-error-icon"}),c.a.createElement(j.a,{icon:"IconError",className:"cashier__form-error-small-icon"}),c.a.createElement("p",{className:"cashier__form-error"},e.props.error.message)),c.a.createElement(f.a,{className:"cashier__form-submit-button btn--primary--default",type:"submit",is_disabled:!a||n},c.a.createElement(E.a,{i18n_default_text:"Transfer"})))))}))))}}])&&M(r.prototype,n),a&&M(r,a),t}(c.a.Component);L.propTypes={accounts_list:a.a.array,error:a.a.object,minimum_fee:a.a.string,onChangeTransferFrom:a.a.func,onChangeTransferTo:a.a.func,requestTransferBetweenAccounts:a.a.func,selected_from:a.a.object,selected_to:a.a.object,setErrorMessage:a.a.func,transfer_fee:a.a.number,transfer_limit:a.a.object};var R=Object(s.b)((function(e){var t=e.modules;return{accounts_list:t.cashier.config.account_transfer.accounts_list,minimum_fee:t.cashier.config.account_transfer.minimum_fee,onChangeTransferFrom:t.cashier.onChangeTransferFrom,onChangeTransferTo:t.cashier.onChangeTransferTo,requestTransferBetweenAccounts:t.cashier.requestTransferBetweenAccounts,selected_from:t.cashier.config.account_transfer.selected_from,selected_to:t.cashier.config.account_transfer.selected_to,setErrorMessage:t.cashier.setErrorMessage,transfer_fee:t.cashier.config.account_transfer.transfer_fee,transfer_limit:t.cashier.config.account_transfer.transfer_limit}}))(L);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Y(this,(e=J(t)).call.apply(e,[this].concat(a)))).render=function(){return c.a.createElement("div",{className:"cashier__wrapper account-transfer__no-balance"},c.a.createElement(j.a,{icon:"IconNoBalance",className:"account-transfer__no-balance-icon"}),c.a.createElement("h2",{className:"withdraw__header"},c.a.createElement(E.a,{i18n_default_text:"You need at least two accounts"})),c.a.createElement("p",{className:"cashier__text"},c.a.createElement(E.a,{i18n_default_text:"Please create a second account (Deriv or DMT5) to enable fund transfers."})))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,e),t}(c.a.Component),W=r(30);function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),K(this,Q(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),r=t,(n=[{key:"componentWillUnmount",value:function(){this.props.resetAccountTransfer()}},{key:"render",value:function(){var e=this.props,t=e.receipt,r=e.selected_from,n=e.selected_to;return c.a.createElement("div",{className:"cashier__wrapper account-transfer__receipt"},c.a.createElement(j.a,{icon:"IconTransferDone",className:"account-transfer__receipt-icon"}),c.a.createElement("h2",{className:"cashier__header"},c.a.createElement(E.a,{i18n_default_text:"Your funds have been transferred."})),c.a.createElement("div",{className:"cashier__transferred-amount cashier__text--bold"},c.a.createElement("span",{className:l()("symbols","symbols--".concat(r.currency.toLowerCase()))}),t.amount_transferred),c.a.createElement("div",{className:"cashier__transferred-details-wrapper"},c.a.createElement("span",{className:"account-transfer__transfer-details-from"},c.a.createElement(j.a,{icon:"IconAccountsCurrency",type:r.mt_icon||r.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},r.text))),c.a.createElement(j.a,{className:"cashier__transferred-icon",icon:"IconBack"}),c.a.createElement("span",{className:"account-transfer__transfer-details-to"},c.a.createElement(j.a,{icon:"IconAccountsCurrency",type:n.mt_icon||n.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},n.text)))),c.a.createElement(f.a,{className:"btn--primary--default account-transfer__button-done",has_effect:!0,text:Object(O.localize)("Done"),onClick:this.props.resetAccountTransfer}))}}])&&H(r.prototype,n),a&&H(r,a),t}(c.a.Component);Z.propTypes={receipt:a.a.object,resetAccountTransfer:a.a.func,selected_from:a.a.object,selected_to:a.a.object};var $=Object(W.g)(Object(s.b)((function(e){var t=e.modules;return{receipt:t.cashier.config.account_transfer.receipt,resetAccountTransfer:t.cashier.resetAccountTransfer,selected_from:t.cashier.config.account_transfer.selected_from,selected_to:t.cashier.config.account_transfer.selected_to}}))(Z)),ee=r(673),te=r(680);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ae(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ae(this,oe(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container),this.props.onMount()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.is_loading?c.a.createElement(T.a,{className:"cashier__loader"}):c.a.createElement(c.a.Fragment,null,this.props.error.button_text?c.a.createElement(ee.a,{error:this.props.error}):this.props.has_no_account?c.a.createElement(U,null):this.props.has_no_balance?c.a.createElement(te.a,{setModalIndex:this.props.setModalIndex}):this.props.is_transfer_successful?c.a.createElement($,null):c.a.createElement(R,{error:this.props.error})))}}])&&ne(r.prototype,n),a&&ne(r,a),t}(c.a.Component);se.propTypes={container:a.a.string,error:a.a.object,has_no_account:a.a.bool,has_no_balance:a.a.bool,is_loading:a.a.bool,is_transfer_successful:a.a.bool,onMount:a.a.func,setActiveTab:a.a.func,setModalIndex:a.a.func};t.default=Object(s.b)((function(e){var t=e.modules,r=e.ui;return{container:t.cashier.config.account_transfer.container,error:t.cashier.config.account_transfer.error,has_no_account:t.cashier.config.account_transfer.has_no_account,has_no_balance:t.cashier.config.account_transfer.has_no_balance,is_loading:t.cashier.is_loading,is_transfer_successful:t.cashier.config.account_transfer.is_transfer_successful,onMount:t.cashier.onMountAccountTransfer,setActiveTab:t.cashier.setActiveTab,setModalIndex:r.setModalIndex}}))(se)}}]);
//# sourceMappingURL=3.a9de4a243b472f591f2b.js.map
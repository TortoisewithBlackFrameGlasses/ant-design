webpackJsonp([11,197],{66:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(8),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),d=t(k),f=s(1),m=t(f),g=s(201),h=t(g),v=s(6),y=t(v),N=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=void 0===e?"":e,l=(0,y["default"])((n={},(0,c["default"])(n,o,!!o),(0,c["default"])(n,s+"-small","small"===t),n));return m["default"].createElement(h["default"],(0,p["default"])({},this.props,{className:l}))},a}(m["default"].Component);a["default"]=N,N.defaultProps={prefixCls:"ant-switch",size:"default"},N.propTypes={prefixCls:f.PropTypes.string,size:f.PropTypes.oneOf(["small","default"]),className:f.PropTypes.string},n.exports=a["default"]},67:function(n,a,s){"use strict";s(11),s(110)},110:function(n,a){},112:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),o=t(p),c=s(3),l=t(c),u=s(5),i=t(u),r=s(4),k=t(r),d=s(1),f=t(d),m=s(2),g=t(m),h=s(30),v=t(h),y=s(12),N=t(y),x=s(6),S=t(x),b=function(n){function a(s){(0,l["default"])(this,a);var t=(0,i["default"])(this,n.call(this,s));return t.handleClose=function(n){n.preventDefault();var a=g["default"].findDOMNode(t);a.style.height=a.offsetHeight+"px",a.style.height=a.offsetHeight+"px",t.setState({closing:!1}),(t.props.onClose||e)(n)},t.animationEnd=function(){t.setState({closed:!0,closing:!0})},t.state={closing:!0,closed:!1},t}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.closable,t=a.description,e=a.type,p=a.prefixCls,c=void 0===p?"ant-alert":p,l=a.message,u=a.closeText,i=a.showIcon,r=a.banner,k=a.className,d=void 0===k?"":k,m=a.style;i=i||r,e=r?"warning":e;var g="";switch(e){case"success":g="check-circle";break;case"info":g="info-circle";break;case"error":g="cross-circle";break;case"warning":g="exclamation-circle";break;default:g="default"}t&&(g+="-o");var h=(0,S["default"])((n={},(0,o["default"])(n,c,!0),(0,o["default"])(n,c+"-"+e,!0),(0,o["default"])(n,c+"-close",!this.state.closing),(0,o["default"])(n,c+"-with-description",!!t),(0,o["default"])(n,c+"-no-icon",!i),(0,o["default"])(n,c+"-banner",!!r),(0,o["default"])(n,d,!!d),n));return u&&(s=!0),this.state.closed?null:f["default"].createElement(v["default"],{component:"",showProp:"data-show",transitionName:c+"-slide-up",onEnd:this.animationEnd},f["default"].createElement("div",{"data-show":this.state.closing,className:h,style:m},i?f["default"].createElement(N["default"],{className:c+"-icon",type:g}):null,f["default"].createElement("span",{className:c+"-message"},l),f["default"].createElement("span",{className:c+"-description"},t),s?f["default"].createElement("a",{onClick:this.handleClose,className:c+"-close-icon"},u||f["default"].createElement(N["default"],{type:"cross"})):null))},a}(f["default"].Component);a["default"]=b,b.defaultProps={type:"info"},n.exports=a["default"]},113:function(n,a,s){"use strict";s(11),s(433)},131:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(8),c=t(o),l=s(16),u=t(l),i=s(3),r=t(i),k=s(5),d=t(k),f=s(4),m=t(f),g=s(1),h=t(g),v=s(2),y=s(6),N=t(y),x=s(30),S=t(x),b=s(166),C=t(b),w=s(20),z=t(w),E=s(24),_=t(E),U=function(n){function a(s){(0,r["default"])(this,a);var t=(0,d["default"])(this,n.call(this,s)),e=s.spinning;return t.state={spinning:e},t}return(0,m["default"])(a,n),a.prototype.isNestedPattern=function(){return!(!this.props||!this.props.children)},a.prototype.componentDidMount=function(){(0,C["default"])()||((0,v.findDOMNode)(this).className+=" "+this.props.prefixCls+"-show-text")},a.prototype.componentWillUnmount=function(){this.debounceTimeout&&clearTimeout(this.debounceTimeout)},a.prototype.componentWillReceiveProps=function(n){var a=this,s=this.props.spinning,t=n.spinning;this.debounceTimeout&&clearTimeout(this.debounceTimeout),s&&!t?this.debounceTimeout=setTimeout(function(){return a.setState({spinning:t})},500):this.setState({spinning:t})},a.prototype.render=function(){var n,a=(0,z["default"])(this.props,["className","size","prefixCls","tip"]),s=(0,u["default"])(a,2),t=s[0],e=t.className,o=t.size,l=t.prefixCls,i=t.tip,r=s[1],k=this.state.spinning,d=(0,N["default"])((n={},(0,c["default"])(n,l,!0),(0,c["default"])(n,l+"-sm","small"===o),(0,c["default"])(n,l+"-lg","large"===o),(0,c["default"])(n,l+"-spinning",k),(0,c["default"])(n,l+"-show-text",!!this.props.tip),(0,c["default"])(n,e,!!e),n)),f=(0,_["default"])(r,["spinning"]),m=h["default"].createElement("div",(0,p["default"])({},f,{className:d}),h["default"].createElement("span",{className:l+"-dot"},h["default"].createElement("i",null),h["default"].createElement("i",null),h["default"].createElement("i",null),h["default"].createElement("i",null)),i?h["default"].createElement("div",{className:l+"-text"},i):null);if(this.isNestedPattern()){var g,v=(0,N["default"])((g={},(0,c["default"])(g,l+"-container",!0),(0,c["default"])(g,l+"-filter",k),g));return h["default"].createElement(S["default"],(0,p["default"])({},f,{component:"div",className:l+"-nested-loading",transitionName:"fade"}),k&&h["default"].createElement("div",{key:"loading"},m),h["default"].createElement("div",{className:v,key:"container"},this.props.children))}return m},a}(h["default"].Component);a["default"]=U,U.defaultProps={prefixCls:"ant-spin",spinning:!0,size:"default"},U.propTypes={prefixCls:g.PropTypes.string,className:g.PropTypes.string,spinning:g.PropTypes.bool,size:g.PropTypes.oneOf(["small","default","large"])},n.exports=a["default"]},132:function(n,a,s){"use strict";s(11),s(270)},166:function(n,a){"use strict";function s(){if(void 0!==t)return t;var n="Webkit Moz O ms Khtml".split(" "),a=document.createElement("div");if(void 0!==a.style.animationName&&(t=!0),void 0!==t)for(var s=0;s<n.length;s++)if(void 0!==a.style[n[s]+"AnimationName"]){t=!0;break}return t=t||!1}Object.defineProperty(a,"__esModule",{value:!0});var t=void 0;a["default"]=s,n.exports=a["default"]},270:function(n,a){},433:function(n,a){},985:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(132),s(131)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u7b80\u5355\u7684 loading \u72b6\u6001\u3002"]],"en-US":[["p","A simple loading status."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"basic Usage"},filename:"components/spin/demo/basic.md",id:"components-spin-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(p["default"],null)}}},986:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(132),s(131)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u653e\u5165\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002"]],"en-US":[["p","Spin in a container."]]},meta:{order:2,title:{"zh-CN":"\u5bb9\u5668","en-US":"Inside a container"},filename:"components/spin/demo/inside.md",id:"components-spin-demo-inside"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",{className:"example"},c["default"].createElement(p["default"],null))},style:".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token function" >rgba</span><span class="token punctuation" >(</span><span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0.05</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >4</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px <span class="token number" >50</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},987:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(67),s(66)),p=t(e),o=(s(132),s(131)),c=t(o),l=(s(113),s(112)),u=t(l),i=s(1),r=t(i),k=s(2);t(k);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 ",["code","Spin"]," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"]],"en-US":[["p","Embedding content into ",["code","Spin"]," will alter it into loading state."]]},meta:{order:3,title:{"zh-CN":"\u5361\u7247\u52a0\u8f7d\u4e2d","en-US":"Embedded mode"},filename:"components/spin/demo/nested.md",id:"components-spin-demo-nested"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Switch<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Card <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> container <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Alert</span> <span class="token attr-name" >message</span> <span class="token attr-name" >title"</span>\n        <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Further</span> <span class="token attr-name" >details</span> <span class="token attr-name" >about</span> <span class="token attr-name" >the</span> <span class="token attr-name" >context</span> <span class="token attr-name" >of</span> <span class="token attr-name" >this</span> <span class="token attr-name" >alert."</span>\n        <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >spinning</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>container<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n        Loading state\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"Card",getInitialState:function(){return{loading:!1}},toggle:function(n){this.setState({loading:n})},render:function(){var n=r["default"].createElement(u["default"],{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"});return r["default"].createElement("div",null,r["default"].createElement(c["default"],{spinning:this.state.loading},n),"Loading state\uff1a",r["default"].createElement(p["default"],{checked:this.state.loading,onChange:this.toggle}))}});return r["default"].createElement(n,null)}}},988:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(132),s(131)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u7528\u4e8e\u5361\u7247\u5bb9\u5668\u7ea7\u52a0\u8f7d\uff0c\u5927\u7684\u7528\u4e8e",["strong","\u9875\u9762\u7ea7"],"\u52a0\u8f7d\u3002"]],"en-US":[["p","A small ",["code","Spin"]," use in loading text, default ",["code","Spin"]," use in loading card-level block, and large ",["code","Spin"]," use in loading ",["strong","page"],"."]]},meta:{order:1,title:{"zh-CN":"\u5404\u79cd\u5927\u5c0f","en-US":"Size"},filename:"components/spin/demo/size.md",id:"components-spin-demo-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{size:"small"}),c["default"].createElement(p["default"],null),c["default"].createElement(p["default"],{size:"large"}))},style:"\n.ant-spin {\n  margin-right: 16px;\n}\n"}},989:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(132),s(131)),p=t(e),o=(s(113),s(112)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848\u3002"]],"en-US":[["p","Customized description content."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848","en-US":"Customized description"},filename:"components/spin/demo/tip.md",id:"components-spin-demo-tip"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >tip</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Loading...<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Alert</span> <span class="token attr-name" >message</span> <span class="token attr-name" >title"</span>\n      <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Further</span> <span class="token attr-name" >details</span> <span class="token attr-name" >about</span> <span class="token attr-name" >the</span> <span class="token attr-name" >context</span> <span class="token attr-name" >of</span> <span class="token attr-name" >this</span> <span class="token attr-name" >alert."</span>\n      <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(p["default"],{tip:"Loading..."},u["default"].createElement(c["default"],{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))}}},1314:function(n,a,s){n.exports={basic:s(985),inside:s(986),nested:s(987),size:s(988),tip:s(989)}}});
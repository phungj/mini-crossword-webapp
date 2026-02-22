(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52210,(e,t,r)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,d=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,x=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case f:case i:case l:case s:case h:return e;default:switch(e=e&&e.$$typeof){case d:case p:case x:case g:case c:return e;default:return t}}case a:return t}}}function C(e){return k(e)===f}r.AsyncMode=u,r.ConcurrentMode=f,r.ContextConsumer=d,r.ContextProvider=c,r.Element=o,r.ForwardRef=p,r.Fragment=i,r.Lazy=x,r.Memo=g,r.Portal=a,r.Profiler=l,r.StrictMode=s,r.Suspense=h,r.isAsyncMode=function(e){return C(e)||k(e)===u},r.isConcurrentMode=C,r.isContextConsumer=function(e){return k(e)===d},r.isContextProvider=function(e){return k(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},r.isForwardRef=function(e){return k(e)===p},r.isFragment=function(e){return k(e)===i},r.isLazy=function(e){return k(e)===x},r.isMemo=function(e){return k(e)===g},r.isPortal=function(e){return k(e)===a},r.isProfiler=function(e){return k(e)===l},r.isStrictMode=function(e){return k(e)===s},r.isSuspense=function(e){return k(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===l||e===s||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===g||e.$$typeof===c||e.$$typeof===d||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===w||e.$$typeof===b)},r.typeOf=k},79684,(e,t,r)=>{"use strict";t.exports=e.r(52210)},98437,(e,t,r)=>{"use strict";var n=e.r(79684),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;t.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var i=d(r);u&&(i=i.concat(u(r)));for(var s=l(t),m=l(r),g=0;g<i.length;++g){var x=i[g];if(!a[x]&&!(n&&n[x])&&!(m&&m[x])&&!(s&&s[x])){var b=f(r,x);try{c(t,x,b)}catch(e){}}}}return t}},9843,e=>{"use strict";let t;e.s(["CROSSWORD_VALIDATION",()=>nf,"default",()=>np],9843);var r,n,o,a,i,s,l,c,d,u,f,p,h=e.i(43476),m=e.i(71645),g=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t));var t,r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),x=Math.abs,b=String.fromCharCode,y=Object.assign;function v(e,t,r){return e.replace(t,r)}function w(e,t){return e.indexOf(t)}function k(e,t){return 0|e.charCodeAt(t)}function C(e,t,r){return e.slice(t,r)}function $(e){return e.length}function S(e,t){return t.push(e),e}var E=1,A=1,I=0,j=0,M=0,T="";function N(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:E,column:A,length:i,return:""}}function z(e,t){return y(N("",null,null,"",null,null,0),e,{length:-e.length},t)}function O(){return M=j<I?k(T,j++):0,A++,10===M&&(A=1,E++),M}function F(){return k(T,j)}function B(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L(e){return E=A=1,I=$(T=e),j=0,[]}function D(e){var t,r;return(t=j-1,r=function e(t){for(;O();)switch(M){case t:return j;case 34:case 39:34!==t&&39!==t&&e(M);break;case 40:41===t&&e(t);break;case 92:O()}return j}(91===e?e+2:40===e?e+1:e),C(T,t,r)).trim()}var P="-ms-",R="-moz-",H="-webkit-",G="comm",W="rule",_="decl",q="@keyframes";function U(e,t){for(var r="",n=e.length,o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function J(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case _:return e.return=e.return||e.value;case G:return"";case q:return e.return=e.value+"{"+U(e.children,n)+"}";case W:e.value=e.props.join(",")}return $(r=U(e.children,n))?e.return=e.value+"{"+r+"}":""}function V(e,t,r,n,o,a,i,s,l,c,d){for(var u=o-1,f=0===o?a:[""],p=f.length,h=0,m=0,g=0;h<n;++h)for(var b=0,y=C(e,u+1,u=x(m=i[h])),w=e;b<p;++b)(w=(m>0?f[b]+" "+y:v(y,/&\f/g,f[b])).trim())&&(l[g++]=w);return N(e,t,r,0===o?W:s,l,c,d)}function Y(e,t,r,n){return N(e,t,r,_,C(e,0,n),C(e,n+1,-1),n)}var K=function(e,t,r){for(var n=0,o=0;n=o,o=F(),38===n&&12===o&&(t[r]=1),!B(o);)O();return C(T,e,j)},Z=function(e,t){var r=-1,n=44;do switch(B(n)){case 0:38===n&&12===F()&&(t[r]=1),e[r]+=K(j-1,t,r);break;case 2:e[r]+=D(n);break;case 4:if(44===n){e[++r]=58===F()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=b(n)}while(n=O())return e},X=function(e,t){var r;return r=Z(L(e),t),T="",r},Q=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(r))&&!n){Q.set(e,!0);for(var o=[],a=X(t,o),i=r.props,s=0,l=0;s<a.length;s++)for(var c=0;c<i.length;c++,l++)e.props[l]=o[s]?a[s].replace(/&\f/g,i[c]):i[c]+" "+a[s]}}},et=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},er=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case _:e.return=function e(t,r){switch(45^k(t,0)?(((r<<2^k(t,0))<<2^k(t,1))<<2^k(t,2))<<2^k(t,3):0){case 5103:return H+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return H+t+R+t+P+t+t;case 6828:case 4268:return H+t+P+t+t;case 6165:return H+t+P+"flex-"+t+t;case 5187:return H+t+v(t,/(\w+).+(:[^]+)/,H+"box-$1$2"+P+"flex-$1$2")+t;case 5443:return H+t+P+"flex-item-"+v(t,/flex-|-self/,"")+t;case 4675:return H+t+P+"flex-line-pack"+v(t,/align-content|flex-|-self/,"")+t;case 5548:return H+t+P+v(t,"shrink","negative")+t;case 5292:return H+t+P+v(t,"basis","preferred-size")+t;case 6060:return H+"box-"+v(t,"-grow","")+H+t+P+v(t,"grow","positive")+t;case 4554:return H+v(t,/([^-])(transform)/g,"$1"+H+"$2")+t;case 6187:return v(v(v(t,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),t,"")+t;case 5495:case 3959:return v(t,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return v(v(t,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+P+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+t+t;case 4095:case 3583:case 4068:case 2532:return v(t,/(.+)-inline(.+)/,H+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($(t)-1-r>6)switch(k(t,r+1)){case 109:if(45!==k(t,r+4))break;case 102:return v(t,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+R+(108==k(t,r+3)?"$3":"$2-$3"))+t;case 115:return~w(t,"stretch")?e(v(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==k(t,r+1))break;case 6444:switch(k(t,$(t)-3-(~w(t,"!important")&&10))){case 107:return v(t,":",":"+H)+t;case 101:return v(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+H+(45===k(t,14)?"inline-":"")+"box$3$1"+H+"$2$3$1"+P+"$2box$3")+t}break;case 5936:switch(k(t,r+11)){case 114:return H+t+P+v(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return H+t+P+v(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return H+t+P+v(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return H+t+P+t+t}return t}(e.value,e.length);break;case q:return U([z(e,{value:v(e.value,"@","@"+H)})],n);case W:if(e.length){var o,a;return o=e.props,a=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return U([z(e,{props:[v(t,/:(read-\w+)/,":"+R+"$1")]})],n);case"::placeholder":return U([z(e,{props:[v(t,/:(plac\w+)/,":"+H+"input-$1")]}),z(e,{props:[v(t,/:(plac\w+)/,":"+R+"$1")]}),z(e,{props:[v(t,/:(plac\w+)/,P+"input-$1")]})],n)}return""},o.map(a).join("")}}}];e.i(98437);var en=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},eo=function(e,t,r){en(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do e.insert(t===o?"."+n:"",o,e.sheet,!0),o=o.next;while(void 0!==o)}},ea={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ei=/[A-Z]|^ms/g,es=/_EMO_([^_]+?)_([^]*?)_EMO_/g,el=function(e){return 45===e.charCodeAt(1)},ec=function(e){return null!=e&&"boolean"!=typeof e},ed=(r=function(e){return el(e)?e:e.replace(ei,"-$&").toLowerCase()},n=Object.create(null),function(e){return void 0===n[e]&&(n[e]=r(e)),n[e]}),eu=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(es,function(e,t,r){return l={name:t,styles:r,next:l},t})}return 1===ea[e]||el(e)||"number"!=typeof t||0===t?t:t+"px"};function ef(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return l={name:r.name,styles:r.styles,next:l},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)l={name:n.name,styles:n.styles,next:l},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=ef(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":ec(i)&&(n+=ed(a)+":"+eu(a,i)+";");else if(Array.isArray(i)&&"string"==typeof i[0]&&(null==t||void 0===t[i[0]]))for(var s=0;s<i.length;s++)ec(i[s])&&(n+=ed(a)+":"+eu(a,i[s])+";");else{var l=ef(e,t,i);switch(a){case"animation":case"animationName":n+=ed(a)+":"+l+";";break;default:n+=a+"{"+l+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var o=l,a=r(e);return l=o,ef(e,t,a)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var ep=/label:\s*([^\s;{]+)\s*(;|$)/g;function eh(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n,o=!0,a="";l=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=ef(r,t,i)):a+=i[0];for(var s=1;s<e.length;s++)a+=ef(r,t,e[s]),o&&(a+=i[s]);ep.lastIndex=0;for(var c="";null!==(n=ep.exec(a));)c+="-"+n[1];return{name:function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*0x5bd1e995+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*0x5bd1e995+((t>>>16)*59797<<16)^(65535&r)*0x5bd1e995+((r>>>16)*59797<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(a)+c,styles:a,next:l}}var em=!!m.useInsertionEffect&&m.useInsertionEffect,eg=em||function(e){return e()};em||m.useLayoutEffect;var ex=m.createContext("u">typeof HTMLElement?function(e){var t,r,n,o,a,i=e.key;if("css"===i){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var l=e.stylisPlugins||er,c={},d=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;d.push(e)});var u=(r=(t=[ee,et].concat(l,[J,(n=function(e){a.insert(e)},function(e){!e.root&&(e=e.return)&&n(e)})])).length,function(e,n,o,a){for(var i="",s=0;s<r;s++)i+=t[s](e,n,o,a)||"";return i}),f=function(e){var t,r;return U((r=function e(t,r,n,o,a,i,s,l,c){for(var d,u=0,f=0,p=s,h=0,m=0,g=0,x=1,y=1,I=1,z=0,L="",P=a,R=i,H=o,W=L;y;)switch(g=z,z=O()){case 40:if(108!=g&&58==k(W,p-1)){-1!=w(W+=v(D(z),"&","&\f"),"&\f")&&(I=-1);break}case 34:case 39:case 91:W+=D(z);break;case 9:case 10:case 13:case 32:W+=function(e){for(;M=F();)if(M<33)O();else break;return B(e)>2||B(M)>3?"":" "}(g);break;case 92:W+=function(e,t){for(var r;--t&&O()&&!(M<48)&&!(M>102)&&(!(M>57)||!(M<65))&&(!(M>70)||!(M<97)););return r=j+(t<6&&32==F()&&32==O()),C(T,e,r)}(j-1,7);continue;case 47:switch(F()){case 42:case 47:S((d=function(e,t){for(;O();)if(e+M===57)break;else if(e+M===84&&47===F())break;return"/*"+C(T,t,j-1)+"*"+b(47===e?e:O())}(O(),j),N(d,r,n,G,b(M),C(d,2,-2),0)),c);break;default:W+="/"}break;case 123*x:l[u++]=$(W)*I;case 125*x:case 59:case 0:switch(z){case 0:case 125:y=0;case 59+f:-1==I&&(W=v(W,/\f/g,"")),m>0&&$(W)-p&&S(m>32?Y(W+";",o,n,p-1):Y(v(W," ","")+";",o,n,p-2),c);break;case 59:W+=";";default:if(S(H=V(W,r,n,u,f,a,l,L,P=[],R=[],p),i),123===z)if(0===f)e(W,r,H,H,P,i,p,l,R);else switch(99===h&&110===k(W,3)?100:h){case 100:case 108:case 109:case 115:e(t,H,H,o&&S(V(t,H,H,0,0,a,l,L,a,P=[],p),R),a,R,p,l,o?P:R);break;default:e(W,H,H,H,[""],R,0,l,R)}}u=f=m=0,x=I=1,L=W="",p=s;break;case 58:p=1+$(W),m=g;default:if(x<1){if(123==z)--x;else if(125==z&&0==x++&&125==(M=j>0?k(T,--j):0,A--,10===M&&(A=1,E--),M))continue}switch(W+=b(z),z*x){case 38:I=f>0?1:(W+="\f",-1);break;case 44:l[u++]=($(W)-1)*I,I=1;break;case 64:45===F()&&(W+=D(O())),h=F(),f=p=$(L=W+=function(e){for(;!B(F());)O();return C(T,e,j)}(j)),z++;break;case 45:45===g&&2==$(W)&&(x=0)}}return i}("",null,null,null,[""],t=L(t=e),0,[0],t),T="",r),u)},p={key:i,sheet:new g({key:i,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:function(e,t,r,n){a=r,f(e?e+"{"+t.styles+"}":t.styles),n&&(p.inserted[t.name]=!0)}};return p.sheet.hydrate(d),p}({key:"css"}):null);ex.Provider;var eb=m.createContext({}),ey={}.hasOwnProperty,ev="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ew=function(e,t){var r={};for(var n in t)ey.call(t,n)&&(r[n]=t[n]);return r[ev]=e,r},ek=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return en(t,r,n),eg(function(){return eo(t,r,n)}),null},eC=(o=function(e,t,r){var n,o,a,i,s=e.css;"string"==typeof s&&void 0!==t.registered[s]&&(s=t.registered[s]);var l=e[ev],c=[s],d="";"string"==typeof e.className?(n=t.registered,o=c,a=e.className,i="",a.split(" ").forEach(function(e){void 0!==n[e]?o.push(n[e]+";"):e&&(i+=e+" ")}),d=i):null!=e.className&&(d=e.className+" ");var u=eh(c,void 0,m.useContext(eb));d+=t.key+"-"+u.name;var f={};for(var p in e)ey.call(e,p)&&"css"!==p&&p!==ev&&(f[p]=e[p]);return f.className=d,r&&(f.ref=r),m.createElement(m.Fragment,null,m.createElement(ek,{cache:t,serialized:u,isStringTag:"string"==typeof l}),m.createElement(l,f))},(0,m.forwardRef)(function(e,t){return o(e,(0,m.useContext)(ex),t)})),e$=h.Fragment,eS=function(e,t,r){return ey.call(t,"css")?h.jsx(eC,ew(e,t),r):h.jsx(e,t,r)},eE=function(e,t,r){return ey.call(t,"css")?h.jsxs(eC,ew(e,t),r):h.jsxs(e,t,r)},eA=function(e,t){var r=arguments;if(null==t||!ey.call(t,"css"))return m.createElement.apply(void 0,r);var n=r.length,o=Array(n);o[0]=eC,o[1]=ew(e,t);for(var a=2;a<n;a++)o[a]=r[a];return m.createElement.apply(null,o)};function eI(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return eh(t)}a=eA||(eA={}),i||(i=a.JSX||(a.JSX={}));let ej=(0,m.createContext)(void 0),eM=({children:e})=>{let[t,r]=(0,m.useState)({x:0,y:0}),n=(0,m.useMemo)(()=>({currentCell:t,setCurrentCell:r}),[t]);return eS(ej.Provider,{value:n,children:e})},eT=()=>{let e=(0,m.useContext)(ej);if(!e)throw Error("CurrentCellContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?");return e},eN=(0,m.createContext)(void 0),ez=({selectedEntryId:e,children:t})=>{let[r,n]=(0,m.useState)(e);return eS(eN.Provider,{value:{currentEntryId:r,setCurrentEntryId:n},children:t})},eO=()=>{let e=(0,m.useContext)(eN);if(!e)throw Error("CurrentClueContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?");return e},eF=e=>void 0===e,eB=e=>"[object String]"===Object.prototype.toString.call(e),eL=/<\/?(span|i|b|sup|sub)[^>]*?>/g,eD=e=>{let t=e.trim();return/[!?.…]$/.test(t)?t:`${t}.`},eP=(0,m.createContext)(void 0),eR=({entries:e,solutionAvailable:t,id:r,dimensions:n,children:o})=>{let{entries:a,cells:i,separators:s}=(0,m.useMemo)(()=>(e=>{let t=new Map,r=[],{cols:n,rows:o}=e.dimensions,a=Object.assign(new Map(Array.from({length:n},(e,t)=>Array.from({length:o},(e,r)=>[`x${t}y${r}`,{x:t,y:r}])).flat()),{getByCoords:({x:e,y:t})=>a.get(`x${e}y${t}`)});for(let[n,o]of e.entries.entries()){let i=(n+e.entries.length-1)%e.entries.length,s=(n+1)%e.entries.length;for(let[n,a]of(t.set(o.id,{...o,nextEntryId:e.entries[s]?.id,previousEntryId:e.entries[i]?.id}),Object.entries(o.separatorLocations)))for(let e of a){let{direction:t}=o,a=o.position.x+("across"===t?e-1:0),i=o.position.y+("down"===t?e-1:0);r.push({type:n,position:{x:a,y:i},direction:t})}for(let e=0;e<o.length;e+=1){let t=o.position.x,r=o.position.y;"across"===o.direction?t+=e:r+=e;let n=a.getByCoords({x:t,y:r}),i=[o.id,...n?.group??[]],s=0===e?o.number:n?.number;a.set(`x${t}y${r}`,{group:i,number:s,x:t,y:r,solution:o.solution?.[e]})}}return a.forEach(e=>{e.description=((e,t)=>{let r=e.group??[],n=e.number;if(eF(n))return;let o=r.filter(e=>e.startsWith(n.toString()));if(0!==o.length)return o.map(e=>{let r=t.get(e);if(r)return(({entry:e})=>`${e.id}: ${(e=>{let t=e.trim().replace(eL,""),[,r,n]=/(.+)\((.+?)\)$/gm.exec(t)??[];if(!eB(r)||!eB(n)||!n.split(",").map(e=>e.trim()).every(e=>/^\d+$/.test(e)))return eD(t);let[o,...a]=n.split(",").map(e=>e.trim()+" letters").reverse(),i=[a.reverse().join(", "),o?.trim()].filter(Boolean).join(" and "),s=eD(r);return`${s} ${i}.`})(e.clue)}`)({entry:r})}).join(" Also, ")})(e,t)}),{cells:a,entries:t,separators:r}})({dimensions:n,entries:e}),[n,e]),l=(0,m.useCallback)(e=>`${e}-${r}`,[r]);return eS(eP.Provider,{value:{solutionAvailable:t,entries:a,cells:i,separators:s,getId:l,dimensions:n},children:o})},eH=()=>{let e=(0,m.useContext)(eP);if(!e)throw Error("DataContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?");return e};var eG=Object.defineProperty,eW=e=>{throw TypeError(e)},e_=(e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?eG(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r},eq=(e,t,r)=>t.has(e)||eW("Cannot "+r),eU=(e,t,r)=>(eq(e,t,"read from private field"),r?r.call(e):t.get(e)),eJ=(e,t,r)=>t.has(e)?eW("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),eV=(e,t,r,n)=>(eq(e,t,"write to private field"),t.set(e,r),r);class eY{constructor(e){eJ(this,c),e_(this,"isAvailable",()=>!!eU(this,c)),e_(this,"get",e=>{try{let t=JSON.parse(eU(this,c)?.getItem(e)??"");if(!(e=>{if("[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);return null===t||t===Object.prototype})(t))return null;let{value:r,expires:n}=t;if((eB(n)||"number"==typeof n)&&new Date>new Date(n))return this.remove(e),null;return r}catch(e){return null}}),e_(this,"set",(e,t,r)=>eU(this,c)?.setItem(e,JSON.stringify({value:t,expires:r?new Date(r):void 0}))),e_(this,"remove",e=>eU(this,c)?.removeItem(e)),e_(this,"clear",()=>eU(this,c)?.clear()),e_(this,"getRaw",e=>eU(this,c)?.getItem(e)??null),e_(this,"setRaw",(e,t)=>eU(this,c)?.setItem(e,t)),e_(this,"key",e=>eU(this,c)?.key(e)??null),e_(this,"length",()=>eU(this,c)?.length??null);try{const t=window[e],r=new Date().toString();t.setItem(r,r);const n=t.getItem(r)==r;t.removeItem(r),n&&eV(this,c,t)}catch(e){}}}c=new WeakMap;let eK=new(f=class{constructor(){eJ(this,d),eJ(this,u)}get local(){return eU(this,d)??eV(this,d,new eY("localStorage"))}get session(){return eU(this,u)??eV(this,u,new eY("sessionStorage"))}},d=new WeakMap,u=new WeakMap,f),eZ="gu.logger",eX={commercial:{background:"#77EEAA",font:"#004400"},cmp:{background:"#FF6BB5",font:"#2F0404"},dotcom:{background:"#000000",font:"#ff7300"},design:{background:"#185E36",font:"#FFF4F2"},tx:{background:"#2F4F4F",font:"#FFFFFF"},supporterRevenue:{background:"#0F70B7",font:"#ffffff"},identity:{background:"#6F5F8F",font:"#ffffff"},openJournalism:{background:"#C74600",font:"#FEF9F5"},perf:{background:"#FFD700",font:"#000000"}},eQ=e=>Object.keys(eX).includes(e),e0=()=>{if(eF(t)){let e=eK.local.get(eZ);t=eB(e)?new Set(e.split(",").filter(eQ)):new Set}return t},e1={...eX,common:{background:"#C1D8FC",font:"#052962"}},e2=e=>{let{background:t,font:r}=e1[e];return`background: ${t}; color: ${r}; padding: 2px 6px; border-radius:20px`},e5=(e,...t)=>{if(e0().has(e)){let r=[e2("common"),"",e2(e),""];console.log(`%c@guardian%c %c${e}%c`,...r,...t)}};"u">typeof window&&(window.guardian??(window.guardian={}),(p=window.guardian).logger??(p.logger={subscribeTo:e=>{let t=e0();t.add(e),eK.local.set(eZ,Array.from(t).join(",")),e5(e,"🔔 Subscribed, hello!")},unsubscribeFrom:e=>{let t=e0();t.delete(e),eK.local.set(eZ,Array.from(t).join(",")),e5(e,"🔕 Unsubscribed, good-bye!")},teams:()=>(console.warn("guardian.logger.teams() is deprecated - use subscriptions()"),Object.keys(eX)),subscriptions:()=>Object.keys(eX)}));let e4=new Map,e3=new Set;function e6(e){for(let t of[...e3])t(e)}function e7(e){try{return e()}catch{}}let e9=e=>Array.from({length:e.cols},()=>Array.from({length:e.rows},()=>"")),e8={stringify:e=>JSON.stringify({value:e}),parse:e=>JSON.parse(e).value},te=(e,{dimensions:t})=>Array.isArray(e)?e.length!==t.cols?(e5("dotcom","Invalid crossword progress - progress is not an array of length dimensions.cols"),!1):e.every(e=>Array.isArray(e))?!!e.every(e=>e.length===t.rows)||(e5("dotcom","Invalid crossword progress - each row is not of length dimensions.rows"),!1):(e5("dotcom","Invalid crossword progress - each row is not an array"),!1):(e5("dotcom","Invalid crossword progress - progress is not an array"),!1),tt=(0,m.createContext)(void 0),tr=({children:e,id:t,dimensions:r,progress:n})=>{let o=(({userProgress:e,dimensions:t})=>te(e,{dimensions:t})?e:e9(t))({dimensions:r,userProgress:n}),[a,i]=(0,m.useState)(o),[s,l,c]=function(e,t){let r=t?.serializer,[n]=(0,m.useState)(t?.defaultValue),[o]=(0,m.useState)(t?.defaultServerValue);return function(e,t,r,n=!0,o=function(e){return"undefined"===e?void 0:JSON.parse(e)},a=JSON.stringify){let i=(0,m.useRef)({string:null,parsed:void 0}),s=(0,m.useSyncExternalStore)((0,m.useCallback)(t=>{let r=r=>{e===r&&t()};return e3.add(r),()=>{e3.delete(r)}},[e]),()=>{let r=e7(()=>localStorage.getItem(e))??null;if(e4.has(e))i.current.parsed=e4.get(e);else if(r!==i.current.string){let e;try{e=null===r?t:o(r)}catch{e=t}i.current.parsed=e}return i.current.string=r,void 0!==t&&null===r&&e7(()=>{let r=a(t);localStorage.setItem(e,r),i.current={string:r,parsed:t}}),i.current.parsed},()=>r??t),l=(0,m.useCallback)(t=>{let r=t instanceof Function?t(i.current.parsed):t;try{localStorage.setItem(e,a(r)),e4.delete(e)}catch{e4.set(e,r)}e6(e)},[e,a]),c=(0,m.useCallback)(()=>{e7(()=>localStorage.removeItem(e)),e4.delete(e),e6(e)},[e]);return(0,m.useEffect)(()=>{if(!n)return;let t=t=>{t.key===e&&t.storageArea===e7(()=>localStorage)&&e6(e)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[e,n]),(0,m.useMemo)(()=>[s,l,{isPersistent:s===t||!e4.has(e),removeItem:c}],[e,l,s,t,c])}(e,n,o,t?.storageSync,r?.parse,r?.stringify)}(`crosswords.${t}`,{defaultValue:o,serializer:e8}),d=(0,m.useCallback)(e=>{l(e),i(e)},[l]);(0,m.useEffect)(()=>{te(s,{dimensions:r})?i(s):d(o)},[o,r,s,d]);let u=(0,m.useMemo)(()=>({progress:a,updateProgress:d,isStored:c.isPersistent}),[a,d,c.isPersistent]);return eS(tt.Provider,{value:u,children:e})},tn=()=>{let e=(0,m.useContext)(tt);if(!e)throw Error("ProgressContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?");return e},to=(0,m.createContext)(void 0),ta=({children:e,userShowAnagramHelper:t=!1})=>{let[r,n]=(0,m.useState)(t),o=(0,m.useCallback)(()=>{n(e=>!e)},[n]);return eS(to.Provider,{value:{showAnagramHelper:r,setShowAnagramHelper:n,toggleAnagramHelper:o},children:e})},ti=()=>{let e=(0,m.useContext)(to);if(!e)throw Error("ShowAnagramHelperContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?");return e},ts=(0,m.createContext)(void 0),tl=({theme:e,children:t})=>eS(ts.Provider,{value:e,children:t}),tc=()=>{let e=(0,m.useContext)(ts);if(!e)throw Error("ThemeContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?");return e},td=(0,m.createContext)(void 0),tu=({children:e,validAnswers:t})=>{let[r,n]=(0,m.useState)(t??new Set),o=(0,m.useMemo)(()=>({validAnswers:r,setValidAnswers:n}),[r]);return eS(td.Provider,{value:o,children:e})},tf=()=>{let e=(0,m.useContext)(td);if(!e)throw Error("ValidAnswersContext does not exist. Have you used a Crossword subcomponent outside a Crossword component?");return e},tp=({data:e,selectedEntryId:t,userProgress:r,theme:n,children:o})=>{let{entries:a,dimensions:i,solutionAvailable:s,id:l}=e;return eS(tl,{theme:n,children:eS(ta,{children:eS(eR,{entries:a,solutionAvailable:s,dimensions:i,id:l,children:eS(tr,{id:l,dimensions:i,progress:r,children:eS(eM,{children:eS(ez,{selectedEntryId:t,children:eS(tu,{children:o})})})})})})})},th=`
	font-family: "GH Guardian Headline", "Guardian Egyptian Web", Georgia, serif;
	font-size: 1.0625rem;
	line-height: 1.15;
	font-weight: 700;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,tm=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 0.75rem;
	line-height: 1.3;
	font-weight: 400;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,tg=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 0.875rem;
	line-height: 1.3;
	font-weight: 400;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,tx=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 1.0625rem;
	line-height: 1.3;
	font-weight: 400;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,tb=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 0.875rem;
	line-height: 1.3;
	font-weight: 700;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,ty=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 1.0625rem;
	line-height: 1.3;
	font-weight: 700;
	font-style: normal;
	--source-text-decoration-thickness: 2px;
`,tv=`
	font-family: GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-size: 0.75rem;
	line-height: 1.3;
	font-weight: 400;
	font-style: italic;
	--source-text-decoration-thickness: 2px;
`,tw={0:2,1:4,2:8,3:12,4:16,5:20,6:24,8:32,9:36,10:40,12:48,14:56,16:64,18:72,24:96},tk=(0,m.memo)(({additionalCss:e})=>{let{entries:t}=eH(),{currentEntryId:r}=eO(),n=tc(),o=eF(r)?void 0:t.get(r);return eS("div",{"aria-hidden":"true",css:[e,eI`
		top: 0;
		display: flex;
		min-height: 2em;
		${tg};
		background: ${n.focusedClueBackgroundColor};
		@media print {
			display: none;
		}
	`],children:o&&eE(e$,{children:[eS("span",{"aria-hidden":"true",css:eI`
							flex: 0 0 auto;
							font-weight: bold;
							padding-right: 0.625em;
							text-transform: capitalize;
						`,children:o.id.split("-").join(" ")}),eS("span",{"aria-hidden":"true",dangerouslySetInnerHTML:{__html:o.clue}})]})})}),tC=(0,m.memo)(({children:e})=>{let t=tc();return eS("div",{css:eI`
				${th};
				border-top: 1px solid ${t.clueListBorderColor};
				border-bottom: 1px dotted ${t.borderColor};
				height: 2em;
				margin-bottom: 0.5em;
				text-transform: capitalize;

				@media print {
					border-top: none;
				}
			`,children:e})});tC.displayName="CluesHeader";let t$=(0,m.memo)(({Controls:e,Grid:t,AnagramHelper:r,Clues:n,SavedMessage:o,gridWidth:a})=>{let{clueMinWidth:i,clueMaxWidth:s,gridMinWidth:l}=tc(),c=Math.max(a,l),d=c+i;return eE("div",{css:eI`
				display: flex;
				flex-direction: column;
				gap: ${tw[4]}px;
				max-width: ${c+2*s}px;
				height: 100%;
				overflow: auto;

				@container (min-width: ${d}px) {
					flex-direction: row;
				}

				@media print {
					flex-direction: column;
				}
			`,children:[eS(r,{}),eE("div",{css:eI`
					@container (min-width: ${d}px) {
						max-height: 100%;
						overflow: auto;
						flex-basis: ${c}px;
					}
				`,children:[eS(tk,{additionalCss:eI`
						max-width: ${c}px;
						@container (min-width: ${d}px) {
							display: none;
						}
					`}),eS(t,{}),eS(tk,{additionalCss:eI`
						max-width: ${c}px;
						@container (min-width: ${d}px) {
							display: none;
						}
					`}),eS("div",{css:eI`
						margin-top: ${tw[1]}px;
						@media print {
							display: none;
						}
					`,children:eS(e,{})}),eS("div",{css:eI`
						${tv};
						@media print {
							display: none;
						}
					`,children:eS(o,{})})]}),eE("div",{css:eI`
					flex: 1;
					display: flex;
					flex-direction: column;
					gap: ${tw[4]}px;
					${tg};
					height: 100%;

					> * {
						max-width: ${Math.max(s,c)}px;
						flex: 1;
					}

					@container (min-width: ${d}px) {
						overflow: auto;
					}

					@container (min-width: ${c+2*i}px) {
						flex-direction: row;
						overflow: auto;
						min-height: 100%;

						> * {
							overflow: auto;
						}
					}

					@media print {
						flex-direction: row;
					}
				`,children:[eS(n,{direction:"across",Header:tC}),eS(n,{direction:"down",Header:tC})]})]})}),tS={100:"#001536",300:"#041F4A",400:"#052962",500:"#0077B6",600:"#506991",800:"#C1D8FC"},tE={200:"#F3C100",300:"#FFD900",400:"#FFE500"},tA={400:"#C70000",500:"#FF9081"},tI={400:"#0077B6"},tj={100:"#510043",200:"#650054",300:"#7D0068",400:"#BB3B80",450:"#F37ABC",500:"#FFABDB",600:"#FEC8D3",800:"#FEF1F8"},tM={0:"#000000",7:"#121212",10:"#1A1A1A",20:"#333333",38:"#545454",46:"#707070",60:"#999999",73:"#BABABA",86:"#DCDCDC",93:"#EDEDED",97:"#F6F6F6",100:"#FFFFFF"},tT={300:"#185E36",400:"#22874D",500:"#58D08B"},tN={gridBackgroundColor:tM[7],gridForegroundColor:tM[100],gridTextColor:tM[7],gridPrintBackgroundColor:tM[46],gridGutterSize:1,gridCellSize:32,gridCellStrikeThrough:tM[46],gridMinWidth:300,textColor:tM[7],focusColor:tI[400],selectedTextColor:tM[7],selectedBackgroundColor:tE[400],connectedBackgroundColor:"#fff7b2",buttonBackgroundColor:tj[400],buttonBackgroundHoverColor:"#942f65",borderColor:tM[86],clueListBorderColor:tj[400],clueMinWidth:240,clueMaxWidth:480,anagramHelperBackgroundColor:tM[97],anagramHelperProgressBackgroundColor:tM[86],focusedClueBackgroundColor:tM[100]},tz=`
	position: absolute;
	overflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */
	white-space: nowrap; /* The white-space property forces the content to render on one line. */
	width: 1px;  /* ensures content is announced by VoiceOver. */
	height: 1px; /* ensures content is announced by VoiceOver. */
	margin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */
	padding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */
	border: 0;
	clip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */
	-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */
	clip-path: inset(50%); /* clip removes any visible trace of the element */
`,tO={medium:30,small:26,xsmall:20},tF=({size:e,theme:t})=>eS("svg",{width:e?tO[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:eS("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291z",fill:t?.fill})}),tB=({size:e,theme:t,isAnnouncedByScreenReader:r=!1})=>eE(e$,{children:[eS(tF,{size:e,theme:t}),r?eS("span",{css:eI`
					${tz}
				`,children:"Close"}):""]}),tL=(e,t,r,n)=>({...e,...n?n(r):r,...t});tM[7],tM[46],tM[46],tA[400],tT[400],tM[100],tS[800],tS[800],tA[500],tT[500];let tD={textLabel:tM[7],textOptional:tM[46],textSupporting:tM[46],textError:tA[400],textSuccess:tT[400]};tM[100],tS[800],tS[800],tA[500],tT[500];let tP=`
	padding: 0;
`,tR=`
	border: 0;
	padding: 0;
	margin: 0;
`,tH=`
	*, *:before, *:after {
        box-sizing: border-box;
    }
    html {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        /* always show the vertical scroll bar to stop the page
         * jumping about when navigating between pages where
         * one has content shorter than the viewport */
        overflow-y: scroll;
    }
    html, body {
        text-rendering: optimizeLegibility;
        font-feature-settings: 'kern';
        font-kerning: normal; /* Safari 7+, Firefox 24+, Chrome 33(?)+, Opera 21 */
        font-variant-ligatures: common-ligatures;
    }
    body {
        background-color: ${tM[100]};
        color: ${tM[7]};
    }
    em {
        font-style: italic;
    }
`,tG=`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, menu, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	main, menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
		display: block;
	}
	/* HTML5 hidden-attribute fix for newer browsers */
	*[hidden] {
		display: none;
	}
	body {
		line-height: 1;
	}
	menu, ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	${tH}
`,tW={medium:ty,small:tb};eI`
	${({legend:tP,fieldset:tR,defaults:tH,resetCSS:tG}).legend};
`;let t_=eI`
	${tz}
`,tq=({hideLabel:e,children:t,theme:r})=>eS("p",{css:t=>{let n;return[(n=tL(tD,r,t.label),eI`
	${tg};
	color: ${n.textSupporting};
	margin: 2px 0 0;
`),e?t_:""]},children:t}),tU=eI`
	${tz}
`,tJ=({text:e,optional:t,hideLabel:r,size:n="medium",theme:o})=>eE("div",{css:e=>{let t;return[(t=tL(tD,o,e.label),eI`
	${tW[n]};
	color: ${t.textLabel};
`),r?tU:""]},children:[e," ",t?eS("span",{css:e=>{let t;return t=tL(tD,o,e.label),eI`
	${tg};
	color: ${t.textOptional};
	font-style: italic;
`},children:"Optional"}):""]}),tV=({text:e,supporting:t,optional:r=!1,hideLabel:n=!1,size:o,cssOverrides:a,children:i,theme:s,...l})=>eE("label",{css:a,...l,children:[eS(tJ,{hideLabel:n,text:e,optional:r,size:o,theme:s}),t?eS(tq,{hideLabel:n,theme:s,children:t}):"",i]}),tY=({size:e,theme:t})=>eS("svg",{width:e?tO[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:eS("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91zm2.068 3.637c0-.75-.614-1.364-1.364-1.364s-1.364.614-1.364 1.364.614 1.363 1.364 1.363 1.364-.613 1.364-1.363",fill:t?.fill})}),tK=({size:e,theme:t,isAnnouncedByScreenReader:r=!1})=>eE(e$,{children:[eS(tY,{size:e,theme:t}),r?eS("span",{css:eI`
					${tz}
				`,children:"Warning"}):""]}),tZ={userFeedback:{textSuccess:tT[400],textError:tA[400]}};tT[500],tA[500];let tX={textSuccess:tT[400],textError:tA[400]};tT[500],tA[500];let tQ=eI`
	display: flex;
	align-items: flex-start;

	svg {
		fill: currentColor;
		/* we don't want the SVG to change size depending on available space */
		flex: none;

		/*
		a visual kick to vertically align the icon with the top row of text
		and horizontally pull it to the beginning of the row
		 */
		transform: translate(-4px, -4px);
	}
`,t0={small:eI`
	${tg};
	svg {
		width: ${"1.625rem"};
		height: ${"1.625rem"};
	}
`,medium:eI`
	${tx};
	svg {
		width: ${"1.875rem"};
		height: ${"1.875rem"};
	}
`},t1=({children:e,size:t="medium",cssOverrides:r,theme:n,...o})=>eE("span",{css:e=>{let o;return[(o=tL(tX,n,e.userFeedback),eI`
	${tQ};
	${t0[t]};
	color: ${o.textError};
`),r]},role:"alert",...o,children:[eS(tK,{}),e]}),t2=({size:e,theme:t})=>eS("svg",{width:e?tO[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:eS("path",{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-1.773 12.147-2.27-2.17-.8.8 2.71 3.791h.452l7.456-7.716-.82-.8z",fill:t?.fill})}),t5=({size:e,theme:t,isAnnouncedByScreenReader:r=!1})=>eE(e$,{children:[eS(t2,{size:e,theme:t}),r?eS("span",{css:eI`
					${tz}
				`,children:"Ticked"}):""]}),t4=({children:e,size:t="medium",cssOverrides:r,theme:n,...o})=>eE("span",{css:e=>{let o;return[(o=tL(tX,n,e.userFeedback),eI`
	${tQ};
	${t0[t]};
	color: ${o.textSuccess};
`),r]},role:"alert",...o,children:[eS(t5,{}),e]}),t3=`
 outline: 0;
 html:not(.src-focus-disabled) & {
	 box-shadow: 0 0 0 3px ${tI[400]};
 }
`,t6=`
 outline: 0;
 html:not(.src-focus-disabled) & {
	outline: 5px solid ${tI[400]};
	outline-offset: 3px;
 }
`,t7={medium:eI`
	${tx};
	height: ${44}px;
`,small:eI`
	${tg};
	height: ${36}px;
`},t9=e=>eI`
	border: 2px solid ${e.borderError};
	border-radius: 4px;
	color: ${e.textError};
	margin-top: 0;
`,t8=eI`
	margin-top: ${tw[1]}px;
`,re=eI`
	margin-top: 6px;
`,rt=eI`
	margin-top: 2px;
`,rr=eI`
	width: 100%;
`,rn=eI`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`,ro=eI`
	width: 18ex;
`,ra=eI`
	width: 9ex;
`,ri={textUserInput:tM[7],textLabel:tM[7],textOptional:tM[46],textSupporting:tM[46],textError:tM[7],textSuccess:tT[400],backgroundInput:tM[100],border:tM[46],borderError:tA[400],borderSuccess:tT[400]};({textInput:{textUserInput:tM[7],textLabel:tM[7],textLabelOptional:tM[46],textLabelSupporting:tM[46],textError:tM[7],textSuccess:tT[400],backgroundInput:tM[100],border:tM[46],borderActive:tI[400],borderError:tA[400],borderSuccess:tT[400]},...tZ});let rs=e=>`${e}_description`,rl={30:rn,10:ro,4:ra},rc=({id:e,label:t,optional:r=!1,hideLabel:n=!1,supporting:o,size:a="medium",width:i,error:s,success:l,theme:c,cssOverrides:d,...u})=>{let f=(0,m.useId)(),p=e??f;return eE(e$,{children:[eE(tV,{text:t,optional:!!r,hideLabel:n,supporting:o,theme:c,size:a,htmlFor:p,children:[s&&eS("div",{css:rt,children:eS(t1,{id:rs(p),theme:c,size:a,children:s})}),!s&&l&&eS("div",{css:rt,children:eS(t4,{id:rs(p),theme:c,size:a,children:l})})]}),eS("input",{css:e=>{let t,r;return[i?rl[i]:rr,(t=tL(ri,c,e.textInput),eI`
	box-sizing: border-box;
	${t7[a]};
	color: ${t.textUserInput};
	background-color: ${t.backgroundInput};
	border: 1px solid ${t.border};
	border-radius: 4px;
	padding: 0 ${tw[2]}px;

	&:focus {
		${t3}
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
			We automatically apply error styling to fields in an invalid state,
			but stop short of applying it to empty required fields.
			*/
		&[value]:not([value='']) {
			${t9(t)};
		}
	}
`),o?re:t8,s?t9(tL(ri,c,e.textInput)):"",!s&&l?(r=tL(ri,c,e.textInput),eI`
	border: 2px solid ${r.borderSuccess};
	border-radius: 4px;
	color: ${r.textSuccess};
	margin-top: 0;
`):"",d]},type:"text",id:p,"aria-required":!r,"aria-invalid":!!s,"aria-describedby":s??l?rs(p):"",required:!r,...u})]})},rd=({entry:e,cells:t,progress:r})=>{let n=[];for(let o=0;o<e.length;o++){let a="across"===e.direction?e.position.x+o:e.position.x,i="across"===e.direction?e.position.y:e.position.y+o,s=t.getByCoords({x:a,y:i});s&&n.push({...s,progress:r[a]?.[i]??"",separator:ru(e,o)})}return n},ru=(e,t)=>{for(let[r,n]of Object.entries(e.separatorLocations))if(n.includes(t+1))return"-"===r?"-":","},rf={background:tS[800],color:tS[400]},rp=({size:e="medium",theme:t})=>{let r={...rf,...t};return eS("svg",{width:"number"==typeof e?e:tO[e],viewBox:"0 0 30 30",focusable:!1,"aria-hidden":!0,children:eE("g",{children:[eS("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 15 15",to:"360 15 15",dur:"2.5s",repeatCount:"indefinite"}),eS("circle",{cx:15,cy:15,r:12.5,strokeWidth:5,stroke:r.background,fill:"transparent"}),eS("circle",{cx:15,cy:15,r:12.5,strokeWidth:5,strokeDasharray:82,strokeDashoffset:82,stroke:r.color,fill:"transparent",children:eS("animate",{attributeName:"stroke-dashoffset",dur:"3.5s",from:164,to:0,repeatCount:"indefinite"})})]})})},rh=e=>{let t=e.match(/[a-f\d]{6}|[a-f\d]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=[...r].map(e=>e+e).join(""));let n=Number.parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},rm=e=>{let t=e[0]/255,r=e[1]/255,n=e[2]/255,o=Math.min(t,r,n),a=Math.max(t,r,n),i=a-o,s=0;switch(a){case o:s=0;break;case t:s=(r-n)/i;break;case r:s=2+(n-t)/i;break;case n:s=4+(t-r)/i}(s=Math.min(60*s,360))<0&&(s+=360);let l=(o+a)/2;return[Math.round(s),Math.round(100*(a===o?0:l<=.5?i/(a+o):i/(2-a-o))),Math.round(100*l)]},rg=(e,t)=>{var r;let n;if("transparent"===e)return void 0!==t&&/^#(?:[0-9a-f]{6}|[0-9a-f]{3})$/i.test(t)?rb(t):e;if(!/^#(?:[0-9a-f]{6}|[0-9a-f]{3})$/i.test(e))return e;let[o,a,i]=rm(rh(e)),s=rx(i),l=(n=(((255&Math.round((r=(e=>{let t,r,n=e[0]/360,o=e[1]/100,a=e[2]/100;if(0===o)return[r=255*a,r,r];let i=a<.5?a*(1+o):a+o-a*o,s=2*a-i,l=[0,0,0];for(let e=0;e<3;e++)(t=n+-(1/3*(e-1)))<0&&t++,t>1&&t--,r=6*t<1?s+(i-s)*6*t:2*t<1?i:3*t<2?s+(i-s)*(2/3-t)*6:s,l[e]=255*r;return l})([o,a,i+s]))[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase(),"000000".slice(n.length)+n);return`#${l}`},rx=e=>e<=10?20:e<=20?-8:e<=80?-5:e<=90?-7:-10,rb=e=>{let[,,t]=rm(rh(e)),[r,n,o]=rh(e),a=ry(t);return`rgba(${r}, ${n}, ${o}, ${a})`},ry=e=>e<=40?.1:e<=50?.15:.2;tM[100],tS[400],tS[400],tS[800],tS[400],tS[400],tS[400],tS[400],tM[100],tM[100],tS[600],tM[100],tS[300],tM[100],tM[100],tM[100],tM[7],tM[7],tE[200],tM[0],tM[7],tM[7];let rv={textPrimary:tM[100],backgroundPrimary:tS[400],textSecondary:tS[400],backgroundSecondary:tS[800],textTertiary:tS[400],backgroundTertiary:"transparent",borderTertiary:tS[400],textSubdued:tS[400]};tS[400],tM[100],tM[100],tS[600],tM[100],tS[300],tM[100],tM[100],tM[100],tM[7],tM[7],tE[200],tM[0],tM[7],tM[7];let rw=eI`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${".3s ease-in-out"};
	text-decoration: none;
	white-space: nowrap;
	vertical-align: middle;

	:disabled {
		cursor: not-allowed;
	}

	&:focus {
		${t6};
	}
`,rk={xsmall:16,small:20,default:24},rC=eI`
	${ty};
	height: ${44}px;
	min-height: ${44}px;
	padding: 0 ${tw[5]}px;
	border-radius: ${44}px;
	padding-bottom: 2px;
`,r$=eI`
	${ty};
	height: ${36}px;
	min-height: ${36}px;
	padding: 0 ${tw[4]}px;
	border-radius: ${36}px;
	padding-bottom: 2px;
`,rS=eI`
	${tb};
	height: ${24}px;
	min-height: ${24}px;
	padding: 0 ${tw[3]}px;
	border-radius: ${24}px;
	padding-bottom: 1px;
`,rE=eI`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${30}px;
		height: auto;
	}
	.src-button-space {
		width: ${tw[3]}px;
	}
`,rA=eI`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${26}px;
		height: auto;
	}
	.src-button-space {
		width: ${tw[2]}px;
	}
`,rI=eI`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${20}px;
		height: auto;
	}
	.src-button-space {
		width: ${tw[1]}px;
	}
`,rj=-tw[1],rM=eI`
	flex-direction: row-reverse;
	svg {
		margin-left: ${rj}px;
	}
`,rT=eI`
	svg {
		margin-right: ${rj}px;
	}
`,rN=eI`
	padding: 0;
`,rz=eI`
	${rN};
	width: ${44}px;
`,rO=eI`
	${rN};
	width: ${36}px;
`,rF=eI`
	${rN};
	width: ${24}px;
`,rB=eI`
	svg {
		transform: translate(0, 0);
		transition: ${".2s cubic-bezier(.64, .57, .67, 1.53)"};
	}
	&:hover,
	&:focus {
		svg {
			transform: translate(${tw[1]/2}px, 0);
		}
	}
`,rL={primary:e=>eI`
	background-color: ${e.backgroundPrimary};
	color: ${e.textPrimary};

	&:hover {
		background-color: ${e.backgroundPrimaryHover??rg(e.backgroundPrimary)};
	}
`,secondary:e=>eI`
	background-color: ${e.backgroundSecondary};
	color: ${e.textSecondary};

	&:hover {
		background-color: ${e.backgroundSecondaryHover??rg(e.backgroundSecondary)};
	}
`,tertiary:e=>eI`
	background-color: ${e.backgroundTertiary};
	color: ${e.textTertiary};
	border: 1px solid ${e.borderTertiary};

	&:hover {
		background-color: ${e.backgroundTertiaryHover??rg(e.backgroundTertiary,e.borderTertiary)};
	}
`,subdued:e=>eI`
	padding: 0;
	background-color: transparent;
	color: ${e.textSubdued};
	text-decoration: underline;
	text-underline-offset: 4px;

	&:hover {
		text-decoration-thickness: 4px;
	}

	/* Why is this zero? Because the default is to have rounded corners but here, when
	   there is only text, it is more natural to show a rectangle for the focus halo */
	border-radius: 0;
`},rD={right:rT,left:rM},rP={default:rC,small:r$,xsmall:rS},rR={default:rE,small:rA,xsmall:rI},rH={default:rz,small:rO,xsmall:rF},rG=({priority:e,size:t,icon:r,iconSide:n,hideLabel:o,nudgeIcon:a,type:i="button",isLoading:s=!1,loadingAnnouncement:l="Loading",cssOverrides:c,children:d,theme:u,...f})=>eS("button",{css:(({priority:e="primary",size:t="default",icon:r,hideLabel:n,iconSide:o="left",nudgeIcon:a,cssOverrides:i,isLoading:s,theme:l})=>c=>[rw,rP[t],rL[e](tL(rv,l,c.button)),r??s?rR[t]:"",(r??s)&&!n?rD[o]:"",a?rB:"",n?rH[t]:"",s?eI`
		svg {
			/*
		 * The loading spinner width has been specified as 24px in the design
		 * which falls outside of the icon sizes in foundations, so we
		 * override the width here.
		 */
			width: ${rk[t]}px;
		}
	`:void 0,i])({size:t,priority:e,icon:r,hideLabel:o,iconSide:n,nudgeIcon:a,cssOverrides:c,isLoading:s,theme:u}),type:i,"aria-live":"polite","aria-label":s?l:void 0,...f,children:(({hideLabel:e,iconSvg:t,isLoading:r,children:n})=>{let o=[n];return(r?(e||o.push(eS("div",{className:"src-button-space"},"space")),o.push((0,m.cloneElement)(eS(rp,{theme:{background:"transparent",color:"currentColor"}}),{key:"svg"}))):t&&(e||o.push(eS("div",{className:"src-button-space"},"space")),o.push((0,m.cloneElement)(t,{key:"svg"}))),e)?eE(e$,{children:[eS("span",{css:eI`
						${tz};
					`,children:n}),o[1]]}):o})({hideLabel:o,iconSvg:r,isLoading:s,children:d})}),rW=(0,m.memo)(({children:e,requireConfirmation:t=!1,onClick:r,...n})=>{let[o,a]=(0,m.useState)(!1),i=(0,m.useRef)(null);return eE(rG,{onClick:e=>{if(!t)return void r(e);if(!o){a(!0),i.current=setTimeout(()=>a(!1),3e3);return}i.current&&clearTimeout(i.current),r(e),a(!1)},size:"small",...n,children:[o&&"Confirm ",e]})}),r_=({cellWithProgress:e,shuffledLetter:t})=>{let r=tc();return eE("div",{css:eI`
				${tm};
				font-size: ${.6*r.gridCellSize}px;
				background-color: ${e.progress?r.anagramHelperProgressBackgroundColor:r.gridForegroundColor};
				border: 1px solid ${r.gridBackgroundColor};
				border-right: ${","===e.separator?`3px solid ${r.gridBackgroundColor}`:`1px solid ${r.gridBackgroundColor}`};
				width: ${r.gridCellSize}px;
				height: ${r.gridCellSize}px;
				text-align: center;
				align-content: center;
				position: relative;
				color: ${r.textColor};
			`,children:["-"===e.separator&&eS("div",{css:eI`
						position: absolute;
						height: 2px;
						top: ${r.gridCellSize/2-.5}px;
						left: ${r.gridCellSize-5}px;
						width: 7px;
						background-color: ${r.gridBackgroundColor};
						z-index: 1;
					`}),e.number&&eS("div",{css:eI`
						${tm};
						font-size: ${Math.max(9,Math.round(.2*r.gridCellSize))}px;
						position: absolute;
						top: 0;
						left: 0;
					`,children:e.number}),""===e.progress?t:e.progress]})},rq=({cellsWithProgress:e,shuffledLetters:t})=>{let r=(0,m.useRef)(null),n=tc(),o=(({shuffledLetters:e,cellsWithProgress:t})=>{let r=[...e],n=Array.from({length:t.length},()=>"");for(let[e,o]of t.entries()){let t=r.indexOf(o.progress);-1!==t&&(n[e]=r.splice(t,1)[0]??"")}return n.map(e=>""===e?r.pop()??"":e)})({shuffledLetters:t,cellsWithProgress:e});return eS("div",{ref:r,css:eI`
				display: flex;
				justify-content: center;
				flex-direction: row;
				flex-wrap: wrap;
				max-width: 90%;
			`,children:e.map((e,t)=>eS("div",{css:eI`
							display: flex;
							flex-direction: column;
							width: ${n.gridCellSize}px;
							margin-right: -1px;
							position: relative;
						`,children:eS(r_,{cellWithProgress:e,shuffledLetter:o[t]??""})},t))})},rU=(0,m.memo)(({letters:e})=>{let t=tc(),r=[...e],n=e.length>4?r.shift():void 0;return eE("svg",{width:"200",height:"200",children:[n&&eS("text",{x:100,y:100,textAnchor:"middle",dominantBaseline:"middle",css:eI`
						${ty}
					`,fill:t.textColor,children:n}),(({letters:e,fill:t})=>e.map((r,n)=>{let{x:o,y:a}=(({index:e,letters:t})=>{let r=360/t.length*e*Math.PI/180;return{x:100+70*Math.cos(r),y:100+70*Math.sin(r)}})({letters:e,index:n});return eS("text",{x:o,y:a,textAnchor:"middle",dominantBaseline:"middle",css:eI`
					${tx}
				`,fill:t,children:r},n)}))({letters:r,fill:t.textColor})]})}),rJ=/[^A-Za-zÀ-ÿ0-9]/g,rV=e=>{let t=e.trim();return/[!?.…]$/.test(t)?t:`${t}.`},rY=(0,m.memo)(({entry:e,isConnected:t,isSelected:r,isComplete:n,isValid:o,scrollToSelected:a,selectClue:i,...s})=>{let l,c,d=tc(),u=(0,m.useRef)(null);return(0,m.useEffect)(()=>{let e=u.current;e&&r&&a&&e.scrollIntoView({behavior:"smooth",block:"nearest"})},[r,a]),eE("div",{"data-entry-id":e.id,css:eI`
				background-color: ${r?d.selectedBackgroundColor:t?d.connectedBackgroundColor:"transparent"};
				cursor: ${t?"default":"pointer"};
				opacity: ${n?.6:1};

				padding: 0.5em 0;
				color: ${r?d.selectedTextColor:d.textColor};

				@media print {
					padding: 0.125em 0;
					background-color: transparent;
					opacity: 1;
				}
			`,onClick:()=>i(e),ref:u,...s,children:[eS("span",{"aria-hidden":"true",css:eI`
					font-weight: bold;
					display: table-cell;
					width: 1.25em;
					padding-right: 0.625em;
				`,children:e.humanNumber}),eS("span",{"aria-hidden":"true",css:eI`
					display: table-cell;
				`,dangerouslySetInnerHTML:{__html:e.clue}}),eS("span",{css:eI(tz),children:`${o?"Answer correct.":""} ${(l=e.humanNumber,c=e.direction,l.split(",").map(e=>`${e.trim()} ${c}`).join(", ")+".")} ${(e=>{let[,t,r]=/(.+)\((.+?)\)$/gm.exec(e)??[];if(!eB(t)||!eB(r))return rV(e);let[n,...o]=r.split(",").map(e=>e.trim()+" letters").reverse(),a=[o.reverse().join(", "),n?.trim()].filter(Boolean).join(" and "),i=rV(t);return`${i} ${a}.`})(e.clue)}`}),o&&eS("span",{css:eI`
						display: table-cell;
						min-width: 1.25em;
						vertical-align: middle;
					`,children:eS(t5,{})})]})}),rK=(0,m.memo)(({direction:e})=>{let{getId:t}=eH(),{textColor:r}=tc();return eS("label",{css:eI`
				color: ${r};
			`,id:t(`${e}-label`),htmlFor:t(`${e}-hints`),children:e})});rK.displayName="Label";let rZ=()=>{let{progress:e,updateProgress:t}=tn(),{setValidAnswers:r,validAnswers:n}=tf(),{cells:o}=eH();return{updateCell:(0,m.useCallback)(({x:a,y:i,value:s})=>{let l=o.getByCoords({x:a,y:i}),c=l?.group;if(eF(c))return;let d=[...e];if(eF(d[a]))throw Error("Invalid x coordinate");if(eF(d[a][i]))throw Error("Invalid y coordinate");for(let e of(d[a][i]=s,t(d),c))n.has(e)&&r(t=>{let r=new Set(t);return r.delete(e),r})},[o,e,r,t,n])}},rX=e=>{let t=tc();return eS(rW,{theme:{backgroundPrimary:t.buttonBackgroundColor,backgroundPrimaryHover:t.buttonBackgroundHoverColor},cssOverrides:eI`
				:disabled {
					cursor: not-allowed;
					opacity: 0.25;

					&:hover {
						background-color: ${t.buttonBackgroundColor};
					}
				}
			`,...e})},rQ=(0,m.memo)(e=>{let{cells:t}=eH(),{updateCell:r}=rZ(),{currentEntryId:n}=eO(),{progress:o}=tn();return eS(rX,{onClick:(0,m.useCallback)(()=>{if(!n)return;let e=e=>{for(let r of t.values())if(r.group?.includes(e)){let e=o[r.x]?.[r.y];if(void 0===e||""===e)return!1}return!0};for(let o of t.values())o.group?.includes(n)&&(o.group.filter(e=>e!==n).some(e)||r({x:o.x,y:o.y,value:""}))},[t,n,r,o]),"aria-label":`Clear ${n?n.split("-").join(" "):"word"}`,"data-link-name":"Clear this","data-testid":"clear-this","aria-live":"off",...e,children:"Clear Word"})});rQ.displayName="ClearClue";let r0=(0,m.memo)(e=>{let{cells:t}=eH(),{progress:r}=tn(),{setValidAnswers:n}=tf(),{currentEntryId:o}=eO(),{updateCell:a}=rZ();return eS(rX,{"aria-live":"off",onClick:(0,m.useCallback)(()=>{if(!o)return;let e=!0;for(let n of t.values()){let t=r[n.x]?.[n.y];n.group?.includes(o)&&!eF(t)&&t!==n.solution&&(""!==t&&a({x:n.x,y:n.y,value:""}),e=!1)}e&&n(e=>new Set(e).add(o))},[o,t,r,a,n]),"data-link-name":"Check this","data-testid":"check-this","aria-label":`Check and remove incorrect letters from ${o?o.split("-").join(" "):"word"}`,...e,children:"Check Word"})});r0.displayName="CheckClue";let r1=(0,m.memo)(e=>{let{cells:t}=eH(),{updateCell:r}=rZ(),{currentEntryId:n}=eO();return eS(rX,{onClick:(0,m.useCallback)(()=>{if(n)for(let e of t.values())e.group?.includes(n)&&r({x:e.x,y:e.y,value:e.solution??""})},[t,n,r]),"aria-live":"off","aria-label":`Reveal ${n?n.split("-").join(" "):"word"}`,"data-link-name":"Reveal this","data-testid":"reveal-this",...e,children:"Reveal Word"})});r1.displayName="RevealClue";let r2=(0,m.memo)(e=>{let{toggleAnagramHelper:t}=ti();return eS(rX,{onClick:t,"data-link-name":"Show anagram helper","data-testid":"show-anagram-helper",...e,children:"Anagram Helper"})});r2.displayName="AnagramHelper";let r5=(0,m.memo)(e=>{let{progress:t}=tn(),{cells:r,entries:n}=eH(),{setValidAnswers:o}=tf(),{updateCell:a}=rZ();return eS(rW,{onClick:(0,m.useCallback)(()=>{let e=n.keys(),i=new Set;for(let e of r.values()){let r=t[e.x]?.[e.y];if(e.group&&!eF(r)&&r!==e.solution)for(let t of(""!==r&&a({x:e.x,y:e.y,value:""}),e.group))i.add(t)}o(new Set([...e].filter(e=>!i.has(e))))},[n,o,r,t,a]),"data-link-name":"Check all","data-testid":"check-all",requireConfirmation:!0,...e,"aria-label":"Check and remove all incorrect letters",children:"Check All"})});r5.displayName="CheckGrid";let r4=(0,m.memo)(e=>{let{cells:t}=eH(),{updateProgress:r}=tn();return eS(rW,{onClick:(0,m.useCallback)(()=>{var e;let n=[];for(let r of t.values())(n[e=r.x]||(n[e]=[]))[r.y]=r.solution??"";r(n)},[t,r]),requireConfirmation:!0,"data-link-name":"Reveal all","data-testid":"reveal-all",...e,children:"Reveal All"})});r4.displayName="RevealGrid";let r3=(0,m.memo)(e=>{let{clearUserInput:t}=(()=>{let{updateProgress:e}=tn(),{dimensions:t}=eH(),{setValidAnswers:r}=tf();return{clearUserInput:(0,m.useCallback)(()=>{e(e9(t)),r(new Set)},[t,r,e])}})();return eS(rW,{onClick:t,requireConfirmation:!0,"data-link-name":"Clear all","data-testid":"clear-all",...e,children:"Clear All"})});r3.displayName="ClearGrid";let r6=eI`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: ${tw[1]}px;
	padding: ${tw[1]}px 0;
`,r7=(0,m.memo)(()=>{let{solutionAvailable:e}=eH(),{currentEntryId:t}=eO(),r=(0,m.useRef)(null),n=eF(t),[o,a]=(0,m.useState)(0),[i,s]=(0,m.useState)(0),[l,c]=(0,m.useState)(n?"grid":"clues"),[d,u]=(0,m.useState)(!1),f=e?4:2,p=e?3:1,h=(e,t)=>{let r="clues"===l?o:i;return l===e&&r===t?0:-1},g=(0,m.useCallback)(e=>{switch(u(!0),e.key){case"ArrowLeft":"clues"===l?a((e=0)=>Math.max(e-1,0)):s((e=0)=>Math.max(e-1,0)),e.preventDefault();break;case"ArrowRight":"clues"===l?a((e=0)=>Math.min(e+1,f-1)):s((e=0)=>Math.min(e+1,p-1)),e.preventDefault();break;case"ArrowDown":c("grid"),e.preventDefault();break;case"ArrowUp":n||c("clues"),e.preventDefault();break;case"Home":"clues"===l?a(0):s(0),e.preventDefault();break;case"End":"clues"===l?a(f-1):s(p-1),e.preventDefault();break;default:return}},[f,p,n,l]);return(0,m.useEffect)(()=>{d&&r.current?.querySelector('[tabindex="0"]')?.focus()},[d,l,o,i]),(0,m.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("keydown",g),()=>{e.removeEventListener("keydown",g)}},[g]),eE("div",{role:"menu",ref:r,"aria-label":"Crossword controls",children:[eE("div",{"aria-label":"Clue controls",role:"group",tabIndex:-1,css:r6,children:[e&&eE(e$,{children:[eS(r0,{disabled:n,tabIndex:h("clues",0),role:"menuItem"}),eS(r1,{disabled:n,tabIndex:h("clues",1),role:"menuItem"})]}),eS(rQ,{disabled:n,tabIndex:h("clues",2*!!e),role:"menuItem"}),eS(r2,{disabled:n,tabIndex:h("clues",e?3:1),role:"menuItem"})]}),eE("div",{"aria-label":"Grid controls",role:"group",tabIndex:-1,css:r6,children:[e&&eE(e$,{children:[eS(r5,{tabIndex:h("grid",0),role:"menuItem"}),eS(r4,{tabIndex:h("grid",1),role:"menuItem"})]}),eS(r3,{tabIndex:h("grid",2*!!e),role:"menuItem"})]})]})});r7.displayName="Controls";let r9=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],r8=eI`
	@keyframes violent-shake {
		0% {
			transform: translate(0, 0) rotate(0deg);
		}
		10% {
			transform: translate(-5px, -5px) rotate(-2deg);
		}
		20% {
			transform: translate(5px, -5px) rotate(2deg);
		}
		30% {
			transform: translate(-5px, 5px) rotate(-2deg);
		}
		40% {
			transform: translate(5px, 5px) rotate(2deg);
		}
		50% {
			transform: translate(-5px, -5px) rotate(-2deg);
		}
		60% {
			transform: translate(5px, -5px) rotate(2deg);
		}
		70% {
			transform: translate(-5px, 5px) rotate(-2deg);
		}
		80% {
			transform: translate(5px, 5px) rotate(2deg);
		}
		90% {
			transform: translate(-5px, -5px) rotate(-2deg);
		}
		100% {
			transform: translate(0, 0) rotate(0deg);
		}
	}

	&.cheat-mode {
		animation: violent-shake 0.15s ease-out;
	}
`,ne=/^[A-Za-zÀ-ÿ0-9]$/,nt=()=>{},nr=(0,m.memo)(({data:e,x:t,y:r,guess:n="",isBlackCell:o,isConnected:a,isSelected:i,isCurrentCell:s,handleKeyDown:l,handleInput:c,...d})=>{let u=tc(),{getId:f}=eH(),p=(0,m.useRef)(null),h=o?"transparent":a?i?u.selectedBackgroundColor:u.connectedBackgroundColor:u.gridForegroundColor,g=eI`
		fill: ${h};
		@media print {
			fill: ${o?u.gridPrintBackgroundColor:u.gridForegroundColor};
			stroke: ${u.gridPrintBackgroundColor};
		}
	`;return(0,m.useEffect)(()=>{let e=p.current;if(e){let t=s&&o?"0":"-1";e.setAttribute("tabindex",t)}},[o,s]),eE("g",{ref:p,...d,children:[eS("rect",{x:t,y:r,width:u.gridCellSize,height:u.gridCellSize,"aria-hidden":"true",role:"presentation",css:g}),!o&&eE(e$,{children:[e.number&&eS("text",{x:t,y:r,dx:Math.max(1,.05*u.gridCellSize),dy:Math.max(9,.22*u.gridCellSize),fill:u.gridTextColor,css:eI`
								${tm};
								font-size: ${Math.max(9,Math.round(.2*u.gridCellSize))}px;
							`,"aria-hidden":"true",role:"presentation",children:e.number}),eS("foreignObject",{x:t,y:r,width:u.gridCellSize,height:u.gridCellSize,children:eS("input",{value:n,autoCapitalize:"none",type:"text",pattern:"^[A-Za-zÀ-ÿ0-9]$",onKeyDown:l,id:f(`cell-input-${e.x}-${e.y}`),"data-testid":f(`cell-test-id-${e.x}-${e.y}`),onInput:c??nt,tabIndex:s?0:-1,"aria-description":e.description,css:eI`
								width: 100%;
								height: 100%;
								background: transparent;
								color: ${u.gridTextColor};
								border: none;
								${tm};
								font-size: ${.6*u.gridCellSize}px;
								text-align: center;
							`,autoComplete:"off",spellCheck:"false",autoCorrect:"off"})})]})]})}),nn=(e,{gridCellSize:t,gridGutterSize:r})=>e*(t+r)+r,no=(0,m.memo)(({position:e,direction:t,type:r,...n})=>{let o=tc(),a=nn(e.x,o),i=nn(e.y,o),{gridCellSize:s,gridGutterSize:l}=o,c={down:`rotate(90 ${a+s/2} ${i+s/2})`};return"-"===r?eS("line",{x1:a+s-3,y1:i+s/2,x2:a+s+4,y2:i+s/2,strokeWidth:l,stroke:o.gridBackgroundColor,transform:c[t],pointerEvents:"none",...n}):eS("line",{x1:a+s+l/2,y1:i,x2:a+s+l/2,y2:i+s,strokeWidth:2*l,stroke:o.gridBackgroundColor,transform:c[t],pointerEvents:"none",...n})});no.displayName="Separator";let na=(0,m.memo)(({currentCell:e})=>{let t=tc(),r=t.gridCellSize+t.gridGutterSize,n=e.x*r,o=e.y*r;return eE(e$,{children:[eS("rect",{x:n-1+.5*t.gridGutterSize,y:o-1+.5*t.gridGutterSize,width:r+2,height:r+2,stroke:t.gridForegroundColor,strokeWidth:2,fill:"none",rx:4,ry:4}),eS("rect",{x:n+.5*t.gridGutterSize,y:o+.5*t.gridGutterSize,width:r,height:r,stroke:t.focusColor,strokeWidth:2,fill:"none",rx:4,ry:4})]})});na.displayName="FocusIndicator";let ni={Grid:()=>{let e=tc(),{cells:t,separators:r,entries:n,dimensions:o,getId:a}=eH(),{progress:i}=tn(),{updateCell:s}=rZ(),{currentCell:l,setCurrentCell:c}=eT(),{currentEntryId:d,setCurrentEntryId:u}=eO(),[f,p]=(0,m.useState)(!1),h=(0,m.useRef)(null),g=(0,m.useRef)("across"),[x,b]=(e=>{let[t,r]=(0,m.useState)([]),[n,o]=(0,m.useState)(!1),a=(0,m.useCallback)(e=>{n||(r9[t.length]===e.key?r([...t,e.key]):r([]))},[n,t]);return(0,m.useEffect)(()=>{t.length===r9.length&&(document.removeEventListener("keydown",a),o(!0),e.current?.classList.add("cheat-mode"))},[t.length,a,e]),(0,m.useEffect)(()=>(document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)),[a]),[n,r8]})(h),y=(0,m.useCallback)(e=>{if(e.x===l.x&&e.y===l.y&&e.group?.length){let t=e.group.find(e=>e!==d);if(t)return void u(t)}},[l,d,u]),v=(0,m.useCallback)(e=>{let t=document.getElementById(a(`cell-input-${e.x}-${e.y}`)),r=document.getElementById(a(`cell-group-${e.x}-${e.y}`));t?t.focus():r?.focus(),c(e)},[a,c]),w=(0,m.useCallback)(({delta:e,isTyping:r=!1})=>{let n=l.x+e.x,o=l.y+e.y,a=t.getByCoords({x:n,y:o});if(a&&!(r&&(eF(l.group)||eF(a.group)))&&(0!==e.x||0!==e.y))return void v(a)},[l.x,l.y,l.group,t,v]),k=(0,m.useCallback)(e=>{""===e?"across"===g.current?w({delta:{x:-1,y:0},isTyping:!0}):w({delta:{x:0,y:-1},isTyping:!0}):s({x:l.x,y:l.y,value:""})},[l.x,l.y,w,s]),C=(0,m.useCallback)(e=>{let r=x?t.getByCoords({x:l.x,y:l.y})?.solution:ne.test(e)&&e.toUpperCase();r&&(s({x:l.x,y:l.y,value:r}),"across"===g.current?w({delta:{x:1,y:0},isTyping:!0}):w({delta:{x:0,y:1},isTyping:!0}))},[t,x,l.x,l.y,w,s]),$=(0,m.useCallback)(e=>{let r=n.get(e),o=r?t.getByCoords(r.position):void 0;r&&o&&(A({direction:r.direction}),v(o))},[t,n,v]),S=(0,m.useCallback)(e=>{if(d&&("["===e.key||"]"===e.key)){let t=n.get(d),r=t?.nextEntryId,o=t?.previousEntryId;"]"===e.key&&r&&$(r),"["===e.key&&o&&$(o)}"Backspace"===e.key||"Delete"===e.key?"value"in e.target&&eB(e.target.value)&&(e.preventDefault(),k(e.target.value)):1===e.key.length&&(e.preventDefault(),C(e.key))},[d,k,n,$,C]),E=(0,m.useCallback)((e,t)=>{let r=e.nativeEvent;if(r instanceof InputEvent){let{inputType:n,data:o}=r;switch(e.preventDefault(),n){case"deleteContentBackward":k(t??"");break;case"insertText":case"insertCompositionText":o&&C(o.slice(-1))}}},[k,C]),A=({direction:e})=>{g.current!==e&&(g.current=e)},I=(0,m.useCallback)(e=>{let t=!0;switch(e.key){case"ArrowUp":A({direction:"down"}),w({delta:{x:0,y:-1}});break;case"ArrowDown":A({direction:"down"}),w({delta:{x:0,y:1}});break;case"ArrowLeft":A({direction:"across"}),w({delta:{x:-1,y:0}});break;case"ArrowRight":A({direction:"across"}),w({delta:{x:1,y:0}});break;default:t=!1}t&&e.preventDefault()},[w]),j=(0,m.useCallback)(e=>{let r=e.currentTarget;if(!r)return;let n=Number(r.dataset.x),o=Number(r.dataset.y),a=t.getByCoords({x:n,y:o});if(!a)throw Error(`Could not find cell for x: ${n}, y: ${o}`);v(a)},[t,v]),M=e.gridCellSize*o.rows+e.gridGutterSize*(o.rows+1),T=e.gridCellSize*o.cols+e.gridGutterSize*(o.cols+1),N=(0,m.useCallback)(()=>p(!0),[]),z=(0,m.useCallback)(({relatedTarget:e})=>p(h.current?.contains(e)??!1),[]);(0,m.useEffect)(()=>{let e;u((e=g.current,l.group?.find(t=>t.endsWith(e))??l.group?.[0]))},[l,f,u]),(0,m.useEffect)(()=>{d&&(g.current=n.get(d)?.direction??g.current)},[d,n]),(0,m.useEffect)(()=>{if(!h.current?.contains(document.activeElement)&&d){let e=n.get(d),r=e?t.getByCoords(e.position):void 0;r&&v(r)}},[t,d,n,v]);let O=(0,m.useMemo)(()=>{if(d){let e=n.get(d),t=e?.group;if(t)return new Set(t)}},[d,n]);return eE("svg",{css:[eI`
					background: ${e.gridBackgroundColor};
					position: relative;
					cursor: pointer;
					width: 100%;
					max-width: ${T}px;
					min-width: min(100%, ${e.gridMinWidth}px);

					// This is to prevent the default blue highlight on click on Android
					-webkit-tap-highlight-color: transparent;

					/**
					 * Request that the browser respects background colours when printing
					 * so that the crossword grid and cells are visible. Emotion uses
					 * Stylis to apply prefixes which only supports the deprecated
					 * color-adjust property, hence using the prefixed version here.
					 */
					-webkit-print-color-adjust: exact;

					*:focus {
						outline: none;
					}

					@media print {
						background: ${e.gridPrintBackgroundColor};
					}
				`,b],id:a("crossword-grid"),ref:h,viewBox:`0 0 ${T} ${M}`,tabIndex:-1,role:"grid","aria-label":"Crossword Grid",onKeyDown:I,onFocus:N,onBlur:z,children:[Array.from({length:o.rows}).map((r,n)=>eS("g",{role:"row",children:Array.from({length:o.cols}).map((r,o)=>{let s=t.getByCoords({x:o,y:n});if(!s)throw Error(`Could not find cell x:${o}, y:${n}`);let c=nn(s.x,e),u=nn(s.y,e),f=i[s.x]?.[s.y],p=l.x===s.x&&l.y===s.y,h=eF(s.group),m=!!s.group?.some(e=>O?.has(e)),g=!!(d&&s.group?.includes(d));return eS(nr,{data:s,x:c,y:u,guess:f,isSelected:g,isConnected:m,isBlackCell:h,isCurrentCell:p,role:"cell","data-x":s.x,"data-y":s.y,id:a(`cell-group-${s.x}-${s.y}`),onFocus:j,onPointerDown:p?()=>y(s):void 0,handleKeyDown:p?S:void 0,handleInput:p?e=>E(e,f):void 0},`x${s.x}y${s.y}`)})},n)),r.map(({type:e,position:t,direction:r})=>eS(no,{type:e,position:t,direction:r},`${e}${t.x}${t.y}${r}`)),f&&eS(na,{currentCell:l})]})},Controls:r7,AnagramHelper:()=>{let[e,t]=(0,m.useState)(""),[r,n]=(0,m.useState)(!1),[o,a]=(0,m.useState)([]),i=tc(),{setShowAnagramHelper:s,showAnagramHelper:l}=ti(),{entries:c,cells:d}=eH(),{currentEntryId:u}=eO(),{progress:f}=tn(),p=(0,m.useMemo)(()=>u?c.get(u):void 0,[u,c]),h=(0,m.useMemo)(()=>(({entry:e,entries:t,cells:r,progress:n})=>{let o=[];if(eF(e))return o;for(let a of e.group){let e=t.get(a);eF(e)||o.push(...rd({entry:e,cells:r,progress:n}))}return o})({entry:p,cells:d,entries:c,progress:f}),[p,d,c,f]),g=(0,m.useCallback)(()=>{a([]),n(!1)},[]),x=(0,m.useCallback)(()=>{a((e=>{let t=[...e],r=t.length;for(let e=r-1;e>0;e--){let n=Math.max(1,Math.min(e+1,Math.floor(r/2))),o=Math.max(0,e-Math.floor(Math.random()*n)),a=Math.floor(Math.random()*(e+1)),i=Math.random()>.5?a:o;if(!eF(t[e])){let r=t[e];eF(t[i])||eF(r)||(t[e]=t[i],t[i]=r)}}return t})(e.split("")))},[e]),b=(0,m.useCallback)(()=>{t(""),a([]),n(!1),s(!1)},[s]),y=(0,m.useCallback)(()=>{x(),n(!0)},[x]);return((0,m.useEffect)(()=>{g()},[g]),(0,m.useEffect)(()=>{l&&document.getElementById("anagram-helper-input")?.focus()},[l]),l)?eE("div",{css:eI`
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				display: flex;
				flex-direction: column;
				${tx};
				background-color: ${i.anagramHelperBackgroundColor};
				padding: 10px;
				min-height: fit-content;
				z-index: 2;
			`,"data-link-name":"Anagram Helper",children:[eS("div",{css:eI`
					display: flex;
					width: 100%;
					justify-content: flex-end;
					margin-bottom: ${tw[4]}px;
				`,children:eS(rW,{onClick:b,size:"small",priority:"tertiary",icon:eS(tB,{size:"xsmall"}),hideLabel:!0,"data-link-name":"Close",children:"Close Anagram Helper"})}),eE("div",{css:eI`
					display: flex;
					align-items: center;
					flex-direction: column;
				`,children:[!r&&eE("div",{css:eI`
							display: grid;
							justify-items: center;
							grid-template-columns: 1fr auto;
						`,children:[eS("div",{children:eS(rc,{hideLabel:!0,label:"Enter letters",spellCheck:"false",onChange:e=>{t(e.target.value.replace(rJ,"").toUpperCase())},value:e,maxLength:h.length,autoFocus:!0,id:"anagram-helper-input"})}),eS(rW,{cssOverrides:eI`
								margin: ${tw[1]}px 0 0 ${tw[1]}px;
							`,onClick:y,disabled:e.length<1,priority:"primary",size:"default","data-link-name":"Shuffle",children:"Start"}),eE("span",{children:[e.length,"/",h.length]})]}),r&&eE(e$,{children:[eS(rU,{letters:o}),eE("div",{css:eI`
								margin: ${tw[4]}px 0 0;
								> * {
									margin: 0 ${tw[1]}px;
								}
							`,children:[eS(rW,{onClick:g,size:"default",priority:"secondary","data-link-name":"Start Again",children:"Back"}),eS(rW,{onClick:x,size:"default",priority:"primary","data-link-name":"Shuffle",children:"Shuffle"})]})]}),eS("div",{css:eI`
						width: 100%;
						margin: ${tw[4]}px 0 ${tw[4]}px;
						border-top: 1px solid ${i.gridBackgroundColor};
					`}),p&&eE("div",{css:eI`
							padding-bottom: ${tw[2]}px;
						`,children:[eS("span",{"aria-hidden":"true",css:eI`
								font-weight: bold;
								padding-right: 0.625em;
								text-transform: capitalize;
							`,children:p.id.split("-").join(" ")}),eS("span",{"aria-hidden":"true",css:eI`
								text-align: center;
							`,dangerouslySetInnerHTML:{__html:p.clue}})]}),eS(rq,{cellsWithProgress:h,shuffledLetters:o})]})]}):null},FocusedClue:tk,Clues:({direction:e,scrollToSelected:t,Header:r})=>{let{entries:n,getId:o,cells:a}=eH(),{progress:i}=tn(),{currentEntryId:s,setCurrentEntryId:l}=eO(),{setCurrentCell:c}=eT(),{validAnswers:d}=tf(),u=(0,m.useMemo)(()=>{let t=[];for(let r of n.values())r.direction===e&&t.push(r);return t},[n,e]),[f,p]=(0,m.useState)(u.findIndex(e=>e.id===s)),h=(0,m.useRef)(null),g=(0,m.useCallback)(e=>{l(e.id);let t=a.getByCoords({x:e.position.x,y:e.position.y});t&&c(t)},[a,c,l]),x=(0,m.useCallback)(()=>{p(u.findIndex(e=>e.id===s))},[s,u]),b=(0,m.useCallback)(e=>{switch(e.key){case" ":case"Enter":{let e=u[f];e&&g(e)}break;case"ArrowDown":p(e=>Math.min(e+1,u.length-1)),e.preventDefault();break;case"ArrowUp":p(e=>Math.max(e-1,0)),e.preventDefault();break;case"Home":p(0),e.preventDefault();break;case"End":p(u.length-1),e.preventDefault()}},[u,f,g]);(0,m.useEffect)(()=>{let e=u[f];if(e){let t=document.getElementById(o(e.id));t?.focus()}},[f,u,l,o]),(0,m.useEffect)(()=>{let e=h.current;return e?.addEventListener("keydown",b),e?.addEventListener("focus",x),()=>{e?.removeEventListener("keydown",b),e?.removeEventListener("focus",x)}},[b,x]);let y=(0,m.useMemo)(()=>{if(s){let e=n.get(s)?.group??void 0;return e?new Set(e):void 0}},[s,n]);return eE("div",{children:[r?eS(r,{children:eS(rK,{direction:e})}):eS(rK,{direction:e}),eS("div",{tabIndex:0,id:o(`${e}-hints`),role:"listbox","aria-labelledby":o(`${e}-label`),"aria-activedescendant":u[f]&&o(u[f].id),ref:h,children:u.sort((e,t)=>e.number-t.number).map(r=>{let n={...r.position},a="across"===e?"x":"y",l=n[a]+r.length,c=!0;for(;n[a]<l;){if(!i[n.x]?.[n.y]){c=!1;break}n[a]++}let u=!!y?.has(r.id),f=s===r.id,p=d.has(r.id);return eS(rY,{entry:r,isConnected:u,isSelected:f,isComplete:c,isValid:p,scrollToSelected:t,id:o(r.id),tabIndex:-1,role:"option","aria-selected":f,selectClue:g},r.id)})})]})},SavedMessage:()=>{let{isStored:e}=tn(),{textColor:t}=tc();return eS("p",{css:eI`
				color: ${t};
			`,children:e?"Crosswords are saved automatically.":"Crossword will not be saved."})}},ns=({children:e,data:t,progress:r,Layout:n,MobileBannerAd:o,...a})=>{let i=(0,m.useMemo)(()=>({...tN,...a}),[a]),s=(0,m.useMemo)(()=>Math.max((i.gridCellSize+i.gridGutterSize)*t.dimensions.cols+i.gridGutterSize,i.gridMinWidth),[i.gridCellSize,i.gridGutterSize,i.gridMinWidth,t.dimensions.cols]);return eS(tp,{theme:i,data:t,userProgress:r,children:eS("div",{"data-link-name":"Crosswords",css:eI`
					*,
					*::before,
					*::after {
						box-sizing: border-box;
						padding: 0;
						margin: 0;
					}

					height: 100%;
					width: 100%;
					container-type: inline-size;
					position: relative;
				`,children:e??eS(n??t$,{...ni,gridWidth:s,MobileBannerAd:o})})})},nl={id:"crosswords/example/1",number:1,name:"Example crossword No 1",creator:{name:"James",webUrl:"https://www.theguardian.com/profile/maskarade"},date:0x19528fceedf,webPublicationDate:0x19528fceedf,entries:[{id:"1-across",number:1,humanNumber:"1",clue:"Toy on a string (2-2)",direction:"across",length:4,group:["1-across"],position:{x:0,y:0},separatorLocations:{"-":[2]},solution:"YOYO"},{id:"2-across",number:2,humanNumber:"2",clue:"Have a rest (3,4)",direction:"across",length:7,group:["2-across"],position:{x:0,y:2},separatorLocations:{",":[3]},solution:"LIEDOWN"},{id:"1-down",number:1,humanNumber:"1",clue:"Colour (6)",direction:"down",length:6,group:["1-down"],position:{x:0,y:0},separatorLocations:{},solution:"YELLOW"},{id:"3-down",number:3,humanNumber:"3",clue:"Bits and bobs (4,3,4)",direction:"down",length:7,group:["3-down","4-down"],position:{x:3,y:0},separatorLocations:{",":[4]},solution:"ODDSAND"},{id:"4-down",number:4,humanNumber:"4",clue:"See 3 down",direction:"down",length:4,group:["3-down","4-down"],position:{x:6,y:1},separatorLocations:{},solution:"ENDS"}],solutionAvailable:!0,dateSolutionAvailable:15423264e5,dimensions:{cols:13,rows:13},crosswordType:"quick",pdf:"https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf"},nc=[["Y","E","L","L","O","W","","","","","","",""],["O","","I","","","","","","","","","",""],["Y","","E","","","","","","","","","",""],["O","D","D","S","A","N","D","","","","","",""],["","","O","","","","","","","","","",""],["","","W","","","","","","","","","",""],["","E","N","D","S","","","","","","","",""],["","","","","","","","","","","","",""],["","","","","","","","","","","","",""],["","","","","","","","","","","","",""],["","","","","","","","","","","","",""],["","","","","","","","","","","","",""],["","","","","","","","","","","","",""]];function nd({completed:e,timerComponent:t,startTimer:r,stopTimer:n}){let o=(0,m.useRef)(null);(0,m.useEffect)(()=>{e!==nf.INCOMPLETE&&(o.current?.show(),n())},[e]);let a=null,i=()=>{};return e===nf.CORRECT?a=(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"font-title text-heading text-2xl font-bold text-center mb-1",children:"Congratulations!"}),(0,h.jsxs)("h2",{className:"mb-2",children:["You completed the crossword in ",t,"!"]}),(0,h.jsx)("form",{method:"dialog",children:(0,h.jsx)("button",{className:"block mx-auto btn btn-sm btn-primary",children:"Continue"})})]}):e===nf.INCORRECT&&(i=r,a=(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"font-title text-heading text-2xl font-bold text-center mb-1",children:"Ope!"}),(0,h.jsx)("h2",{className:"mb-2",children:"The crossword is not correct."}),(0,h.jsx)("form",{method:"dialog",children:(0,h.jsx)("button",{className:"block mx-auto btn btn-sm btn-primary",children:"Try Again"})})]})),(0,h.jsxs)("dialog",{onClose:i,ref:o,className:"text-center modal",children:[(0,h.jsx)("div",{className:"modal-box",children:a}),(0,h.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,h.jsx)("button",{})})]})}function nu({startTimer:e}){let t=(0,m.useRef)(null);return(0,m.useEffect)(()=>t.current?.show(),[]),(0,h.jsxs)("dialog",{onClose:e,ref:t,className:"text-center modal",children:[(0,h.jsxs)("div",{className:"modal-box",children:[(0,h.jsx)("h1",{className:"font-title text-heading text-2xl font-bold text-center mb-2",children:"Test"}),(0,h.jsx)("form",{method:"dialog",children:(0,h.jsx)("button",{className:"block mx-auto btn btn-sm btn-primary",children:"Start"})})]}),(0,h.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,h.jsx)("button",{})})]})}var nf=((s={})[s.CORRECT=0]="CORRECT",s[s.INCORRECT=1]="INCORRECT",s[s.INCOMPLETE=2]="INCOMPLETE",s);function np(){let e,t="Counter",r=(0,m.useRef)(null),n=(0,m.useRef)(!1),[o,a]=(0,m.useState)(!1),[i,s]=(0,m.useState)(2),[l,c]=(0,m.useState)(0),[d,u]=[e=Math.floor(l/60),l-60*e],f=(0,h.jsxs)("span",{className:"countdown font-mono",children:[(0,h.jsx)("span",{style:{"--value":d,"--digits":2},"aria-live":"polite","aria-label":t,children:d}),":",(0,h.jsx)("span",{style:{"--value":u,"--digits":2},"aria-live":"polite","aria-label":t,children:u})]});return(0,m.useEffect)(()=>a(!0),[]),(0,m.useEffect)(()=>{o&&window.addEventListener("crosswordLocalStorageSetItem",e=>{!function(e){if(!n.current){let t=JSON.parse(e).value,r=0;for(let e=0;e<t.length;e++)for(let n=0;n<t[0].length;n++)if(""===t[e][n]&&""!==nc[e][n])return void s(2);else t[e][n]!==nc[e][n]&&(r=1);0===r&&(n.current=!0),s(r)}}(e.detail.value)})},[o]),(0,m.useEffect)(()=>{localStorage.removeItem(`crosswords.${nl.id}`)},[]),(0,h.jsxs)("div",{children:[(0,h.jsx)(nu,{startTimer:p}),(0,h.jsx)(nd,{completed:i,timerComponent:f,startTimer:p,stopTimer:function(){r.current&&(clearInterval(r.current),r.current=null)}}),(0,h.jsx)("h1",{className:"font-title text-heading text-2xl font-bold text-center mt-2",children:"Mini Crossword"}),(0,h.jsx)("span",{className:"text-2xl ml-5",children:f}),(0,h.jsx)("div",{className:"mt-2 ml-5 mr-5 flex items-center justify-center h-full w-full",children:(0,h.jsx)(ns,{data:nl})})]});function p(){r.current=setInterval(()=>{c(e=>e+1)},1e3)}}}]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Xr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const K={},xt=[],Ae=()=>{},gs=()=>!1,vs=/^on[^a-z]/,Wn=e=>vs.test(e),Jr=e=>e.startsWith("onUpdate:"),ne=Object.assign,Gr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bs=Object.prototype.hasOwnProperty,$=(e,t)=>bs.call(e,t),F=Array.isArray,wt=e=>nn(e)==="[object Map]",Kn=e=>nn(e)==="[object Set]",ja=e=>nn(e)==="[object Date]",j=e=>typeof e=="function",re=e=>typeof e=="string",Bt=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Bi=e=>X(e)&&j(e.then)&&j(e.catch),Yi=Object.prototype.toString,nn=e=>Yi.call(e),ys=e=>nn(e).slice(8,-1),Wi=e=>nn(e)==="[object Object]",Zr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xs=/-(\w)/g,Ne=Vn(e=>e.replace(xs,(t,n)=>n?n.toUpperCase():"")),ws=/\B([A-Z])/g,It=Vn(e=>e.replace(ws,"-$1").toLowerCase()),qn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ur=Vn(e=>e?`on${qn(e)}`:""),Yt=(e,t)=>!Object.is(e,t),Pn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_r=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let za;const kr=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?Os(r):Qr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(X(e))return e}}const _s=/;(?![^(]*\))/g,ks=/:([^]+)/,As=/\/\*[^]*?\*\//g;function Os(e){const t={};return e.replace(As,"").split(_s).forEach(n=>{if(n){const r=n.split(ks);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ea(e){let t="";if(re(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=ea(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Es="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cs=Xr(Es);function Ki(e){return!!e||e===""}function Ps(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Xn(e[r],t[r]);return n}function Xn(e,t){if(e===t)return!0;let n=ja(e),r=ja(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Bt(e),r=Bt(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?Ps(e,t):!1;if(n=X(e),r=X(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Xn(e[o],t[o]))return!1}}return String(e)===String(t)}function Vi(e,t){return e.findIndex(n=>Xn(n,t))}const Ar=e=>re(e)?e:e==null?"":F(e)||X(e)&&(e.toString===Yi||!j(e.toString))?JSON.stringify(e,qi,2):String(e),qi=(e,t)=>t&&t.__v_isRef?qi(e,t.value):wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Kn(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!F(t)&&!Wi(t)?String(t):t;let xe;class Is{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ss(e,t=xe){t&&t.active&&t.effects.push(e)}function Ts(){return xe}const ta=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xi=e=>(e.w&Je)>0,Ji=e=>(e.n&Je)>0,Ns=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},Ms=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Xi(a)&&!Ji(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},Or=new WeakMap;let Lt=0,Je=1;const Er=30;let we;const ut=Symbol(""),Cr=Symbol("");class na{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ss(this,r)}run(){if(!this.active)return this.fn();let t=we,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,qe=!0,Je=1<<++Lt,Lt<=Er?Ns(this):Da(this),this.fn()}finally{Lt<=Er&&Ms(this),Je=1<<--Lt,we=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Gi=[];function St(){Gi.push(qe),qe=!1}function Tt(){const e=Gi.pop();qe=e===void 0?!0:e}function me(e,t,n){if(qe&&we){let r=Or.get(e);r||Or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ta()),Zi(a)}}function Zi(e,t){let n=!1;Lt<=Er?Ji(e)||(e.n|=Je,n=!Xi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function ze(e,t,n,r,a,i){const o=Or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Zr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),wt(e)&&s.push(o.get(Cr)));break;case"delete":F(e)||(s.push(o.get(ut)),wt(e)&&s.push(o.get(Cr)));break;case"set":wt(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&Pr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Pr(ta(l))}}function Pr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&$a(r);for(const r of n)r.computed||$a(r)}function $a(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Fs=Xr("__proto__,__v_isRef,__isVue"),Qi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bt)),Rs=ra(),Ls=ra(!1,!0),js=ra(!0),Ha=zs();function zs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=H(this)[t].apply(this,n);return Tt(),r}}),e}function Ds(e){const t=H(this);return me(t,"has",e),t.hasOwnProperty(e)}function ra(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?tl:ao:t?ro:no).get(r))return r;const o=F(r);if(!e){if(o&&$(Ha,a))return Reflect.get(Ha,a,i);if(a==="hasOwnProperty")return Ds}const s=Reflect.get(r,a,i);return(Bt(a)?Qi.has(a):Fs(a))||(e||me(r,"get",a),t)?s:le(s)?o&&Zr(a)?s:s.value:X(s)?e?io(s):oa(s):s}}const $s=eo(),Hs=eo(!0);function eo(e=!1){return function(n,r,a,i){let o=n[r];if(Ot(o)&&le(o)&&!le(a))return!1;if(!e&&(!Ln(a)&&!Ot(a)&&(o=H(o),a=H(a)),!F(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=F(n)&&Zr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Yt(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Us(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Bs(e,t){const n=Reflect.has(e,t);return(!Bt(t)||!Qi.has(t))&&me(e,"has",t),n}function Ys(e){return me(e,"iterate",F(e)?"length":ut),Reflect.ownKeys(e)}const to={get:Rs,set:$s,deleteProperty:Us,has:Bs,ownKeys:Ys},Ws={get:js,set(e,t){return!0},deleteProperty(e,t){return!0}},Ks=ne({},to,{get:Ls,set:Hs}),aa=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Jn(a),s=r?aa:n?la:Wt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function mn(e,t=!1){return e=e.__v_raw,!t&&me(H(e),"iterate",ut),Reflect.get(e,"size",e)}function Ua(e){e=H(e);const t=H(this);return Jn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Ba(e,t){t=H(t);const n=H(this),{has:r,get:a}=Jn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Yt(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Ya(e){const t=H(this),{has:n,get:r}=Jn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Wa(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?aa:e?la:Wt;return!e&&me(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function hn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?aa:t?la:Wt;return!t&&me(i,"iterate",l?Cr:ut),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Vs(){const e={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:Ua,set:Ba,delete:Ya,clear:Wa,forEach:pn(!1,!1)},t={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:Ua,set:Ba,delete:Ya,clear:Wa,forEach:pn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:pn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[e,n,t,r]}const[qs,Xs,Js,Gs]=Vs();function ia(e,t){const n=t?e?Gs:Js:e?Xs:qs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Zs={get:ia(!1,!1)},Qs={get:ia(!1,!0)},el={get:ia(!0,!1)},no=new WeakMap,ro=new WeakMap,ao=new WeakMap,tl=new WeakMap;function nl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rl(e){return e.__v_skip||!Object.isExtensible(e)?0:nl(ys(e))}function oa(e){return Ot(e)?e:sa(e,!1,to,Zs,no)}function al(e){return sa(e,!1,Ks,Qs,ro)}function io(e){return sa(e,!0,Ws,el,ao)}function sa(e,t,n,r,a){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=rl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function _t(e){return Ot(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Ot(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function oo(e){return _t(e)||Ot(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function so(e){return Rn(e,"__v_skip",!0),e}const Wt=e=>X(e)?oa(e):e,la=e=>X(e)?io(e):e;function lo(e){qe&&we&&(e=H(e),Zi(e.dep||(e.dep=ta())))}function fo(e,t){e=H(e);const n=e.dep;n&&Pr(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function Ke(e){return il(e,!1)}function il(e,t){return le(e)?e:new ol(e,t)}class ol{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:Wt(t)}get value(){return lo(this),this._value}set value(t){const n=this.__v_isShallow||Ln(t)||Ot(t);t=n?t:H(t),Yt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Wt(t),fo(this))}}function sl(e){return le(e)?e.value:e}const ll={get:(e,t,n)=>sl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function co(e){return _t(e)?e:new Proxy(e,ll)}class fl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new na(t,()=>{this._dirty||(this._dirty=!0,fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return lo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function cl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new fl(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Gn(i,t,n)}return a}function Oe(e,t,n,r){if(j(e)){const i=Xe(e,t,n,r);return i&&Bi(i)&&i.catch(o=>{Gn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Gn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}ul(e,n,a,r)}function ul(e,t,n,r=!0){console.error(e)}let Kt=!1,Ir=!1;const se=[];let Se=0;const kt=[];let Re=null,it=0;const uo=Promise.resolve();let fa=null;function dl(e){const t=fa||uo;return e?t.then(this?e.bind(this):e):t}function ml(e){let t=Se+1,n=se.length;for(;t<n;){const r=t+n>>>1;Vt(se[r])<e?t=r+1:n=r}return t}function ca(e){(!se.length||!se.includes(e,Kt&&e.allowRecurse?Se+1:Se))&&(e.id==null?se.push(e):se.splice(ml(e.id),0,e),mo())}function mo(){!Kt&&!Ir&&(Ir=!0,fa=uo.then(ho))}function pl(e){const t=se.indexOf(e);t>Se&&se.splice(t,1)}function hl(e){F(e)?kt.push(...e):(!Re||!Re.includes(e,e.allowRecurse?it+1:it))&&kt.push(e),mo()}function Ka(e,t=Kt?Se+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function po(e){if(kt.length){const t=[...new Set(kt)];if(kt.length=0,Re){Re.push(...t);return}for(Re=t,Re.sort((n,r)=>Vt(n)-Vt(r)),it=0;it<Re.length;it++)Re[it]();Re=null,it=0}}const Vt=e=>e.id==null?1/0:e.id,gl=(e,t)=>{const n=Vt(e)-Vt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ho(e){Ir=!1,Kt=!0,se.sort(gl);const t=Ae;try{for(Se=0;Se<se.length;Se++){const n=se[Se];n&&n.active!==!1&&Xe(n,null,14)}}finally{Se=0,se.length=0,po(),Kt=!1,fa=null,(se.length||kt.length)&&ho()}}function vl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||K;h&&(a=n.map(w=>re(w)?w.trim():w)),m&&(a=n.map(_r))}let s,l=r[s=ur(t)]||r[s=ur(Ne(t))];!l&&i&&(l=r[s=ur(It(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function go(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=go(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(X(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ne(o,i),X(e)&&r.set(e,o),o)}function Zn(e,t){return!e||!Wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,It(t))||$(e,t))}let ve=null,vo=null;function jn(e){const t=ve;return ve=e,vo=e&&e.type.__scopeId||null,t}function bl(e,t=ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ri(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:w,ctx:M,inheritAttrs:S}=e;let z,k;const A=jn(e);try{if(n.shapeFlag&4){const I=a||r;z=Ie(d.call(I,I,m,i,w,h,M)),k=l}else{const I=t;z=Ie(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),k=t.props?l:yl(l)}}catch(I){$t.length=0,Gn(I,e,1),z=ee(qt)}let R=z;if(k&&S!==!1){const I=Object.keys(k),{shapeFlag:U}=R;I.length&&U&7&&(o&&I.some(Jr)&&(k=xl(k,o)),R=Et(R,k))}return n.dirs&&(R=Et(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),z=R,jn(A),z}const yl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wn(n))&&((t||(t={}))[n]=e[n]);return t},xl=(e,t)=>{const n={};for(const r in e)(!Jr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function wl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Va(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!Zn(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Va(r,o,c):!0:!!o;return!1}function Va(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function _l({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kl=e=>e.__isSuspense;function Al(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):hl(e)}const gn={};function In(e,t,n){return bo(e,t,n)}function bo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){var s;const l=Ts()===((s=ae)==null?void 0:s.scope)?ae:null;let c,d=!1,m=!1;if(le(e)?(c=()=>e.value,d=Ln(e)):_t(e)?(c=()=>e,r=!0):F(e)?(m=!0,d=e.some(I=>_t(I)||Ln(I)),c=()=>e.map(I=>{if(le(I))return I.value;if(_t(I))return lt(I);if(j(I))return Xe(I,l,2)})):j(e)?t?c=()=>Xe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Oe(e,l,3,[w])}:c=Ae,t&&r){const I=c;c=()=>lt(I())}let h,w=I=>{h=A.onStop=()=>{Xe(I,l,4)}},M;if(Jt)if(w=Ae,t?n&&Oe(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const I=wf();M=I.__watcherHandles||(I.__watcherHandles=[])}else return Ae;let S=m?new Array(e.length).fill(gn):gn;const z=()=>{if(A.active)if(t){const I=A.run();(r||d||(m?I.some((U,ie)=>Yt(U,S[ie])):Yt(I,S)))&&(h&&h(),Oe(t,l,3,[I,S===gn?void 0:m&&S[0]===gn?[]:S,w]),S=I)}else A.run()};z.allowRecurse=!!t;let k;a==="sync"?k=z:a==="post"?k=()=>de(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),k=()=>ca(z));const A=new na(c,k);t?n?z():S=A.run():a==="post"?de(A.run.bind(A),l&&l.suspense):A.run();const R=()=>{A.stop(),l&&l.scope&&Gr(l.scope.effects,A)};return M&&M.push(R),R}function Ol(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?yo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=ae;Ct(this);const s=bo(a,i.bind(r),n);return o?Ct(o):dt(),s}function yo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function lt(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))lt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)lt(e[n],t);else if(Kn(e)||wt(e))e.forEach(n=>{lt(n,t)});else if(Wi(e))for(const n in e)lt(e[n],t);return e}function xo(e,t){const n=ve;if(n===null)return e;const r=rr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=K]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&lt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Oe(l,n,8,[e.el,s,e,t]),Tt())}}function Qn(e,t){return j(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const Sn=e=>!!e.type.__asyncLoader,wo=e=>e.type.__isKeepAlive;function El(e,t){_o(e,"a",t)}function Cl(e,t){_o(e,"da",t)}function _o(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(er(t,r,n),n){let a=n.parent;for(;a&&a.parent;)wo(a.parent.vnode)&&Pl(r,t,n,a),a=a.parent}}function Pl(e,t,n,r){const a=er(t,e,r,!0);ko(()=>{Gr(r[t],a)},n)}function er(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Ct(n);const s=Oe(t,n,e,o);return dt(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=ae)=>(!Jt||e==="sp")&&er(e,(...r)=>t(...r),n),Il=Ue("bm"),ua=Ue("m"),Sl=Ue("bu"),Tl=Ue("u"),Nl=Ue("bum"),ko=Ue("um"),Ml=Ue("sp"),Fl=Ue("rtg"),Rl=Ue("rtc");function Ll(e,t=ae){er("ec",e,t)}const Ao="components";function Oo(e,t){return zl(Ao,e,!0,t)||e}const jl=Symbol.for("v-ndc");function zl(e,t,n=!0,r=!1){const a=ve||ae;if(a){const i=a.type;if(e===Ao){const s=vf(i,!1);if(s&&(s===t||s===Ne(t)||s===qn(Ne(t))))return i}const o=qa(a[e]||i[e],t)||qa(a.appContext[e],t);return!o&&r?i:o}}function qa(e,t){return e&&(e[t]||e[Ne(t)]||e[qn(Ne(t))])}const Sr=e=>e?Ro(e)?rr(e)||e.proxy:Sr(e.parent):null,Dt=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sr(e.parent),$root:e=>Sr(e.root),$emit:e=>e.emit,$options:e=>da(e),$forceUpdate:e=>e.f||(e.f=()=>ca(e.update)),$nextTick:e=>e.n||(e.n=dl.bind(e.proxy)),$watch:e=>Ol.bind(e)}),mr=(e,t)=>e!==K&&!e.__isScriptSetup&&$(e,t),Dl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(mr(r,t))return o[t]=1,r[t];if(a!==K&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==K&&$(n,t))return o[t]=4,n[t];Tr&&(o[t]=0)}}const d=Dt[t];let m,h;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&$(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,$(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return mr(a,t)?(a[t]=n,!0):r!==K&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&$(e,o)||mr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Dt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xa(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Tr=!0;function $l(e){const t=da(e),n=e.proxy,r=e.ctx;Tr=!1,t.beforeCreate&&Ja(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:w,updated:M,activated:S,deactivated:z,beforeDestroy:k,beforeUnmount:A,destroyed:R,unmounted:I,render:U,renderTracked:ie,renderTriggered:oe,errorCaptured:be,serverPrefetch:ge,expose:Me,inheritAttrs:Mt,components:sn,directives:ln,filters:lr}=t;if(c&&Hl(c,r,null),o)for(const J in o){const Y=o[J];j(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);X(J)&&(e.data=oa(J))}if(Tr=!0,i)for(const J in i){const Y=i[J],et=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):Ae,fn=!j(Y)&&j(Y.set)?Y.set.bind(n):Ae,tt=at({get:et,set:fn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ee=>tt.value=Ee})}if(s)for(const J in s)Eo(s[J],r,n,J);if(l){const J=j(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{Vl(Y,J[Y])})}d&&Ja(d,e,"c");function fe(J,Y){F(Y)?Y.forEach(et=>J(et.bind(n))):Y&&J(Y.bind(n))}if(fe(Il,m),fe(ua,h),fe(Sl,w),fe(Tl,M),fe(El,S),fe(Cl,z),fe(Ll,be),fe(Rl,ie),fe(Fl,oe),fe(Nl,A),fe(ko,I),fe(Ml,ge),F(Me))if(Me.length){const J=e.exposed||(e.exposed={});Me.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:et=>n[Y]=et})})}else e.exposed||(e.exposed={});U&&e.render===Ae&&(e.render=U),Mt!=null&&(e.inheritAttrs=Mt),sn&&(e.components=sn),ln&&(e.directives=ln)}function Hl(e,t,n=Ae){F(e)&&(e=Nr(e));for(const r in e){const a=e[r];let i;X(a)?"default"in a?i=Tn(a.from||r,a.default,!0):i=Tn(a.from||r):i=Tn(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ja(e,t,n){Oe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Eo(e,t,n,r){const a=r.includes(".")?yo(n,r):()=>n[r];if(re(e)){const i=t[e];j(i)&&In(a,i)}else if(j(e))In(a,e.bind(n));else if(X(e))if(F(e))e.forEach(i=>Eo(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&In(a,i,e)}}function da(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),X(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ul[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ul={data:Ga,props:Za,emits:Za,methods:jt,computed:jt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:jt,directives:jt,watch:Yl,provide:Ga,inject:Bl};function Ga(e,t){return t?e?function(){return ne(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Bl(e,t){return jt(Nr(e),Nr(t))}function Nr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?ne(Object.create(null),e,t):t}function Za(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ne(Object.create(null),Xa(e),Xa(t??{})):t}function Yl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=ce(e[r],t[r]);return n}function Co(){return{app:null,config:{isNativeTag:gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Kl(e,t){return function(r,a=null){j(r)||(r=ne({},r)),a!=null&&!X(a)&&(a=null);const i=Co(),o=new Set;let s=!1;const l=i.app={_uid:Wl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:_f,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const h=ee(r,a);return h.appContext=i,d&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,rr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Dn=l;try{return c()}finally{Dn=null}}};return l}}let Dn=null;function Vl(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function Tn(e,t,n=!1){const r=ae||ve;if(r||Dn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function ql(e,t,n,r=!1){const a={},i={};Rn(i,nr,1),e.propsDefaults=Object.create(null),Po(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:al(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Xl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(Zn(e.emitsOptions,h))continue;const w=t[h];if(l)if($(i,h))w!==i[h]&&(i[h]=w,c=!0);else{const M=Ne(h);a[M]=Mr(l,s,M,w,e,!1)}else w!==i[h]&&(i[h]=w,c=!0)}}}else{Po(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=It(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Mr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function Po(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Cn(l))continue;const c=t[l];let d;a&&$(a,d=Ne(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Mr(a,l,m,c[m],e,!$(c,m))}}return o}function Mr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ct(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function Io(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[h,w]=Io(m,t,!0);ne(o,h),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return X(e)&&r.set(e,xt),xt;if(F(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);Qa(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Ne(d);if(Qa(m)){const h=i[d],w=o[m]=F(h)||j(h)?{type:h}:ne({},h);if(w){const M=ni(Boolean,w.type),S=ni(String,w.type);w[0]=M>-1,w[1]=S<0||M<S,(M>-1||$(w,"default"))&&s.push(m)}}}const c=[o,s];return X(e)&&r.set(e,c),c}function Qa(e){return e[0]!=="$"}function ei(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ti(e,t){return ei(e)===ei(t)}function ni(e,t){return F(t)?t.findIndex(n=>ti(n,e)):j(t)&&ti(t,e)?0:-1}const So=e=>e[0]==="_"||e==="$stable",ma=e=>F(e)?e.map(Ie):[Ie(e)],Jl=(e,t,n)=>{if(t._n)return t;const r=bl((...a)=>ma(t(...a)),n);return r._c=!1,r},To=(e,t,n)=>{const r=e._ctx;for(const a in e){if(So(a))continue;const i=e[a];if(j(i))t[a]=Jl(a,i,r);else if(i!=null){const o=ma(i);t[a]=()=>o}}},No=(e,t)=>{const n=ma(t);e.slots.default=()=>n},Gl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Rn(t,"_",n)):To(t,e.slots={})}else e.slots={},t&&No(e,t);Rn(e.slots,nr,1)},Zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,To(t,a)),o=t}else t&&(No(e,t),o={default:1});if(i)for(const s in a)!So(s)&&!(s in o)&&delete a[s]};function Fr(e,t,n,r,a=!1){if(F(e)){e.forEach((h,w)=>Fr(h,t&&(F(t)?t[w]:t),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?rr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,$(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),j(l))Xe(l,s,12,[o,d]);else{const h=re(l),w=le(l);if(h||w){const M=()=>{if(e.f){const S=h?$(m,l)?m[l]:d[l]:l.value;a?F(S)&&Gr(S,i):F(S)?S.includes(i)||S.push(i):h?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,$(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(M.id=-1,de(M,n)):M()}}}const de=Al;function Ql(e){return ef(e)}function ef(e,t){const n=kr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:w=Ae,insertStaticContent:M}=e,S=(f,u,p,v=null,g=null,x=null,O=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Rt(f,u)&&(v=cn(f),Ee(f,g,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:C}=u;switch(b){case tr:z(f,u,p,v);break;case qt:k(f,u,p,v);break;case pr:f==null&&A(u,p,v,O);break;case Le:sn(f,u,p,v,g,x,O,y,_);break;default:C&1?U(f,u,p,v,g,x,O,y,_):C&6?ln(f,u,p,v,g,x,O,y,_):(C&64||C&128)&&b.process(f,u,p,v,g,x,O,y,_,ht)}T!=null&&g&&Fr(T,f&&f.ref,x,u||f,!u)},z=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},k=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},A=(f,u,p,v)=>{[f.el,f.anchor]=M(f.children,u,p,v,f.el,f.anchor)},R=({el:f,anchor:u},p,v)=>{let g;for(;f&&f!==u;)g=h(f),r(f,p,v),f=g;r(u,p,v)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},U=(f,u,p,v,g,x,O,y,_)=>{O=O||u.type==="svg",f==null?ie(u,p,v,g,x,O,y,_):ge(f,u,g,x,O,y,_)},ie=(f,u,p,v,g,x,O,y)=>{let _,b;const{type:T,props:C,shapeFlag:N,transition:L,dirs:D}=f;if(_=f.el=o(f.type,x,C&&C.is,C),N&8?d(_,f.children):N&16&&be(f.children,_,null,v,g,x&&T!=="foreignObject",O,y),D&&nt(f,null,v,"created"),oe(_,f,f.scopeId,O,v),C){for(const B in C)B!=="value"&&!Cn(B)&&i(_,B,null,C[B],x,f.children,v,g,Fe);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Pe(b,v,f)}D&&nt(f,null,v,"beforeMount");const W=(!g||g&&!g.pendingBranch)&&L&&!L.persisted;W&&L.beforeEnter(_),r(_,u,p),((b=C&&C.onVnodeMounted)||W||D)&&de(()=>{b&&Pe(b,v,f),W&&L.enter(_),D&&nt(f,null,v,"mounted")},g)},oe=(f,u,p,v,g)=>{if(p&&w(f,p),v)for(let x=0;x<v.length;x++)w(f,v[x]);if(g){let x=g.subTree;if(u===x){const O=g.vnode;oe(f,O,O.scopeId,O.slotScopeIds,g.parent)}}},be=(f,u,p,v,g,x,O,y,_=0)=>{for(let b=_;b<f.length;b++){const T=f[b]=y?Ve(f[b]):Ie(f[b]);S(null,T,u,p,v,g,x,O,y)}},ge=(f,u,p,v,g,x,O)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:T}=u;_|=f.patchFlag&16;const C=f.props||K,N=u.props||K;let L;p&&rt(p,!1),(L=N.onVnodeBeforeUpdate)&&Pe(L,p,u,f),T&&nt(u,f,p,"beforeUpdate"),p&&rt(p,!0);const D=g&&u.type!=="foreignObject";if(b?Me(f.dynamicChildren,b,y,p,v,D,x):O||Y(f,u,y,null,p,v,D,x,!1),_>0){if(_&16)Mt(y,u,C,N,p,v,g);else if(_&2&&C.class!==N.class&&i(y,"class",null,N.class,g),_&4&&i(y,"style",C.style,N.style,g),_&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],ye=C[Z],gt=N[Z];(gt!==ye||Z==="value")&&i(y,Z,ye,gt,g,f.children,p,v,Fe)}}_&1&&f.children!==u.children&&d(y,u.children)}else!O&&b==null&&Mt(y,u,C,N,p,v,g);((L=N.onVnodeUpdated)||T)&&de(()=>{L&&Pe(L,p,u,f),T&&nt(u,f,p,"updated")},v)},Me=(f,u,p,v,g,x,O)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],T=_.el&&(_.type===Le||!Rt(_,b)||_.shapeFlag&70)?m(_.el):p;S(_,b,T,null,v,g,x,O,!0)}},Mt=(f,u,p,v,g,x,O)=>{if(p!==v){if(p!==K)for(const y in p)!Cn(y)&&!(y in v)&&i(f,y,p[y],null,O,u.children,g,x,Fe);for(const y in v){if(Cn(y))continue;const _=v[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,O,u.children,g,x,Fe)}"value"in v&&i(f,"value",p.value,v.value)}},sn=(f,u,p,v,g,x,O,y,_)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:N,slotScopeIds:L}=u;L&&(y=y?y.concat(L):L),f==null?(r(b,p,v),r(T,p,v),be(u.children,p,T,g,x,O,y,_)):C>0&&C&64&&N&&f.dynamicChildren?(Me(f.dynamicChildren,N,p,g,x,O,y),(u.key!=null||g&&u===g.subTree)&&Mo(f,u,!0)):Y(f,u,p,T,g,x,O,y,_)},ln=(f,u,p,v,g,x,O,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,p,v,O,_):lr(u,p,v,g,x,O,_):Ta(f,u,_)},lr=(f,u,p,v,g,x,O)=>{const y=f.component=df(f,v,g);if(wo(f)&&(y.ctx.renderer=ht),mf(y),y.asyncDep){if(g&&g.registerDep(y,fe),!f.el){const _=y.subTree=ee(qt);k(null,_,u,p)}return}fe(y,f,u,p,g,x,O)},Ta=(f,u,p)=>{const v=u.component=f.component;if(wl(f,u,p))if(v.asyncDep&&!v.asyncResolved){J(v,u,p);return}else v.next=u,pl(v.update),v.update();else u.el=f.el,v.vnode=u},fe=(f,u,p,v,g,x,O)=>{const y=()=>{if(f.isMounted){let{next:T,bu:C,u:N,parent:L,vnode:D}=f,W=T,B;rt(f,!1),T?(T.el=D.el,J(f,T,O)):T=D,C&&Pn(C),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Pe(B,L,T,D),rt(f,!0);const Z=dr(f),ye=f.subTree;f.subTree=Z,S(ye,Z,m(ye.el),cn(ye),f,g,x),T.el=Z.el,W===null&&_l(f,Z.el),N&&de(N,g),(B=T.props&&T.props.onVnodeUpdated)&&de(()=>Pe(B,L,T,D),g)}else{let T;const{el:C,props:N}=u,{bm:L,m:D,parent:W}=f,B=Sn(u);if(rt(f,!1),L&&Pn(L),!B&&(T=N&&N.onVnodeBeforeMount)&&Pe(T,W,u),rt(f,!0),C&&cr){const Z=()=>{f.subTree=dr(f),cr(C,f.subTree,f,g,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=dr(f);S(null,Z,p,v,f,g,x),u.el=Z.el}if(D&&de(D,g),!B&&(T=N&&N.onVnodeMounted)){const Z=u;de(()=>Pe(T,W,Z),g)}(u.shapeFlag&256||W&&Sn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,g),f.isMounted=!0,u=p=v=null}},_=f.effect=new na(y,()=>ca(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,rt(f,!0),b()},J=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,Xl(f,u.props,v,p),Zl(f,u.children,p),St(),Ka(),Tt()},Y=(f,u,p,v,g,x,O,y,_=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,C=u.children,{patchFlag:N,shapeFlag:L}=u;if(N>0){if(N&128){fn(b,C,p,v,g,x,O,y,_);return}else if(N&256){et(b,C,p,v,g,x,O,y,_);return}}L&8?(T&16&&Fe(b,g,x),C!==b&&d(p,C)):T&16?L&16?fn(b,C,p,v,g,x,O,y,_):Fe(b,g,x,!0):(T&8&&d(p,""),L&16&&be(C,p,v,g,x,O,y,_))},et=(f,u,p,v,g,x,O,y,_)=>{f=f||xt,u=u||xt;const b=f.length,T=u.length,C=Math.min(b,T);let N;for(N=0;N<C;N++){const L=u[N]=_?Ve(u[N]):Ie(u[N]);S(f[N],L,p,null,g,x,O,y,_)}b>T?Fe(f,g,x,!0,!1,C):be(u,p,v,g,x,O,y,_,C)},fn=(f,u,p,v,g,x,O,y,_)=>{let b=0;const T=u.length;let C=f.length-1,N=T-1;for(;b<=C&&b<=N;){const L=f[b],D=u[b]=_?Ve(u[b]):Ie(u[b]);if(Rt(L,D))S(L,D,p,null,g,x,O,y,_);else break;b++}for(;b<=C&&b<=N;){const L=f[C],D=u[N]=_?Ve(u[N]):Ie(u[N]);if(Rt(L,D))S(L,D,p,null,g,x,O,y,_);else break;C--,N--}if(b>C){if(b<=N){const L=N+1,D=L<T?u[L].el:v;for(;b<=N;)S(null,u[b]=_?Ve(u[b]):Ie(u[b]),p,D,g,x,O,y,_),b++}}else if(b>N)for(;b<=C;)Ee(f[b],g,x,!0),b++;else{const L=b,D=b,W=new Map;for(b=D;b<=N;b++){const pe=u[b]=_?Ve(u[b]):Ie(u[b]);pe.key!=null&&W.set(pe.key,b)}let B,Z=0;const ye=N-D+1;let gt=!1,Fa=0;const Ft=new Array(ye);for(b=0;b<ye;b++)Ft[b]=0;for(b=L;b<=C;b++){const pe=f[b];if(Z>=ye){Ee(pe,g,x,!0);continue}let Ce;if(pe.key!=null)Ce=W.get(pe.key);else for(B=D;B<=N;B++)if(Ft[B-D]===0&&Rt(pe,u[B])){Ce=B;break}Ce===void 0?Ee(pe,g,x,!0):(Ft[Ce-D]=b+1,Ce>=Fa?Fa=Ce:gt=!0,S(pe,u[Ce],p,null,g,x,O,y,_),Z++)}const Ra=gt?tf(Ft):xt;for(B=Ra.length-1,b=ye-1;b>=0;b--){const pe=D+b,Ce=u[pe],La=pe+1<T?u[pe+1].el:v;Ft[b]===0?S(null,Ce,p,La,g,x,O,y,_):gt&&(B<0||b!==Ra[B]?tt(Ce,p,La,2):B--)}}},tt=(f,u,p,v,g=null)=>{const{el:x,type:O,transition:y,children:_,shapeFlag:b}=f;if(b&6){tt(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){O.move(f,u,p,ht);return}if(O===Le){r(x,u,p);for(let C=0;C<_.length;C++)tt(_[C],u,p,v);r(f.anchor,u,p);return}if(O===pr){R(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),de(()=>y.enter(x),g);else{const{leave:C,delayLeave:N,afterLeave:L}=y,D=()=>r(x,u,p),W=()=>{C(x,()=>{D(),L&&L()})};N?N(x,D,W):W()}else r(x,u,p)},Ee=(f,u,p,v=!1,g=!1)=>{const{type:x,props:O,ref:y,children:_,dynamicChildren:b,shapeFlag:T,patchFlag:C,dirs:N}=f;if(y!=null&&Fr(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const L=T&1&&N,D=!Sn(f);let W;if(D&&(W=O&&O.onVnodeBeforeUnmount)&&Pe(W,u,f),T&6)hs(f.component,p,v);else{if(T&128){f.suspense.unmount(p,v);return}L&&nt(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,g,ht,v):b&&(x!==Le||C>0&&C&64)?Fe(b,u,p,!1,!0):(x===Le&&C&384||!g&&T&16)&&Fe(_,u,p),v&&Na(f)}(D&&(W=O&&O.onVnodeUnmounted)||L)&&de(()=>{W&&Pe(W,u,f),L&&nt(f,null,u,"unmounted")},p)},Na=f=>{const{type:u,el:p,anchor:v,transition:g}=f;if(u===Le){ps(p,v);return}if(u===pr){I(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:O,delayLeave:y}=g,_=()=>O(p,x);y?y(f.el,x,_):_()}else x()},ps=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},hs=(f,u,p)=>{const{bum:v,scope:g,update:x,subTree:O,um:y}=f;v&&Pn(v),g.stop(),x&&(x.active=!1,Ee(O,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,p,v=!1,g=!1,x=0)=>{for(let O=x;O<f.length;O++)Ee(f[O],u,p,v,g)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Ma=(f,u,p)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):S(u._vnode||null,f,u,null,null,null,p),Ka(),po(),u._vnode=f},ht={p:S,um:Ee,m:tt,r:Na,mt:lr,mc:be,pc:Y,pbc:Me,n:cn,o:e};let fr,cr;return t&&([fr,cr]=t(ht)),{render:Ma,hydrate:fr,createApp:Kl(Ma,fr)}}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||Mo(o,s)),s.type===tr&&(s.el=o.el)}}function tf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const nf=e=>e.__isTeleport,Le=Symbol.for("v-fgt"),tr=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),$t=[];let _e=null;function pa(e=!1){$t.push(_e=e?null:[])}function rf(){$t.pop(),_e=$t[$t.length-1]||null}let Xt=1;function ri(e){Xt+=e}function af(e){return e.dynamicChildren=Xt>0?_e||xt:null,rf(),Xt>0&&_e&&_e.push(e),e}function ha(e,t,n,r,a,i){return af(Q(e,t,n,r,a,i,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function Rt(e,t){return e.type===t.type&&e.key===t.key}const nr="__vInternal",Fo=({key:e})=>e??null,Nn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||le(e)||j(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function Q(e,t=null,n=null,r=0,a=null,i=e===Le?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fo(t),ref:t&&Nn(t),scopeId:vo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ve};return s?(ga(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Xt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const ee=of;function of(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===jl)&&(e=qt),Rr(e)){const s=Et(e,t,!0);return n&&ga(s,n),Xt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(bf(e)&&(e=e.__vccOpts),t){t=sf(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=ea(s)),X(l)&&(oo(l)&&!F(l)&&(l=ne({},l)),t.style=Qr(l))}const o=re(e)?1:kl(e)?128:nf(e)?64:X(e)?4:j(e)?2:0;return Q(e,t,n,r,a,o,i,!0)}function sf(e){return e?oo(e)||nr in e?ne({},e):e:null}function Et(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ff(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Fo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Nn(t)):[a,Nn(t)]:Nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function lf(e=" ",t=0){return ee(tr,null,e,t)}function Ie(e){return e==null||typeof e=="boolean"?ee(qt):F(e)?ee(Le,null,e.slice()):typeof e=="object"?Ve(e):ee(tr,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function ga(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ga(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(nr in t)?t._ctx=ve:a===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[lf(t)]):n=8);e.children=t,e.shapeFlag|=n}function ff(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ea([t.class,r.class]));else if(a==="style")t.style=Qr([t.style,r.style]);else if(Wn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Oe(e,t,7,[n,r])}const cf=Co();let uf=0;function df(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||cf,i={uid:uf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Is(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Io(r,a),emitsOptions:go(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vl.bind(null,i),e.ce&&e.ce(i),i}let ae=null,va,vt,ai="__VUE_INSTANCE_SETTERS__";(vt=kr()[ai])||(vt=kr()[ai]=[]),vt.push(e=>ae=e),va=e=>{vt.length>1?vt.forEach(t=>t(e)):vt[0](e)};const Ct=e=>{va(e),e.scope.on()},dt=()=>{ae&&ae.scope.off(),va(null)};function Ro(e){return e.vnode.shapeFlag&4}let Jt=!1;function mf(e,t=!1){Jt=t;const{props:n,children:r}=e.vnode,a=Ro(e);ql(e,n,a,t),Gl(e,r);const i=a?pf(e,t):void 0;return Jt=!1,i}function pf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=so(new Proxy(e.ctx,Dl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?gf(e):null;Ct(e),St();const i=Xe(r,e,0,[e.props,a]);if(Tt(),dt(),Bi(i)){if(i.then(dt,dt),t)return i.then(o=>{ii(e,o,t)}).catch(o=>{Gn(o,e,0)});e.asyncDep=i}else ii(e,i,t)}else Lo(e,t)}function ii(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=co(t)),Lo(e,n)}let oi;function Lo(e,t,n){const r=e.type;if(!e.render){if(!t&&oi&&!r.render){const a=r.template||da(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=oi(a,c)}}e.render=r.render||Ae}Ct(e),St(),$l(e),Tt(),dt()}function hf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function gf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return hf(e)},slots:e.slots,emit:e.emit,expose:t}}function rr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(co(so(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function vf(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function bf(e){return j(e)&&"__vccOpts"in e}const at=(e,t)=>cl(e,t,Jt);function yf(e,t,n){const r=arguments.length;return r===2?X(t)&&!F(t)?Rr(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),ee(e,t,n))}const xf=Symbol.for("v-scx"),wf=()=>Tn(xf),_f="3.3.4",kf="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,si=ot&&ot.createElement("template"),Af={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(kf,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{si.innerHTML=r?`<svg>${e}</svg>`:e;const s=si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Of(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ef(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Lr(r,i,"");for(const i in n)Lr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const li=/\s*!important$/;function Lr(e,t,n){if(F(n))n.forEach(r=>Lr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cf(e,t);li.test(n)?e.setProperty(It(r),n.replace(li,""),"important"):e[r]=n}}const fi=["Webkit","Moz","ms"],hr={};function Cf(e,t){const n=hr[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return hr[t]=r;r=qn(r);for(let a=0;a<fi.length;a++){const i=fi[a]+r;if(i in e)return hr[t]=i}return t}const ci="http://www.w3.org/1999/xlink";function Pf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ci,t.slice(6,t.length)):e.setAttributeNS(ci,t,n);else{const i=Cs(t);n==null||i&&!Ki(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function If(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ki(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function st(e,t,n,r){e.addEventListener(t,n,r)}function Sf(e,t,n,r){e.removeEventListener(t,n,r)}function Tf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Nf(t);if(r){const c=i[t]=Rf(r,a);st(e,s,c,l)}else o&&(Sf(e,s,o,l),i[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function Nf(e){let t;if(ui.test(e)){t={};let r;for(;r=e.match(ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let gr=0;const Mf=Promise.resolve(),Ff=()=>gr||(Mf.then(()=>gr=0),gr=Date.now());function Rf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(Lf(r,n.value),t,5,[r])};return n.value=e,n.attached=Ff(),n}function Lf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const di=/^on[a-z]/,jf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Of(e,r,a):t==="style"?Ef(e,n,r):Wn(t)?Jr(t)||Tf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zf(e,t,r,a))?If(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Pf(e,t,r,a))};function zf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&di.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||di.test(t)&&re(n)?!1:t in e}const $n=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Pn(t,n):t};function Df(e){e.target.composing=!0}function mi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const $f={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=$n(a);const i=r||a.props&&a.props.type==="number";st(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=_r(s)),e._assign(s)}),n&&st(e,"change",()=>{e.value=e.value.trim()}),t||(st(e,"compositionstart",Df),st(e,"compositionend",mi),st(e,"change",mi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=$n(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&_r(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Hf={deep:!0,created(e,t,n){e._assign=$n(n),st(e,"change",()=>{const r=e._modelValue,a=Uf(e),i=e.checked,o=e._assign;if(F(r)){const s=Vi(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(Kn(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(jo(e,i))})},mounted:pi,beforeUpdate(e,t,n){e._assign=$n(n),pi(e,t,n)}};function pi(e,{value:t,oldValue:n},r){e._modelValue=t,F(t)?e.checked=Vi(t,r.props.value)>-1:Kn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Xn(t,jo(e,!0)))}function Uf(e){return"_value"in e?e._value:e.value}function jo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Bf=ne({patchProp:jf},Af);let hi;function Yf(){return hi||(hi=Ql(Bf))}const Wf=(...e)=>{const t=Yf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Kf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Kf(e){return re(e)?document.querySelector(e):e}const Vf="/password-generator/padlock.png",qf={class:"flex text-left"},Xf={class:"flex items-center h-5"},Jf=["id","checked","aria-describedby"],Gf={class:"ml-2 text-sm"},Zf=["for"],Qf=["id"],vn=Qn({__name:"CheckBox",props:{inputId:{},value:{type:Boolean},helperId:{},label:{},helperText:{},event:{}},setup(e){const t=e,n=Ke();return ua(()=>{n.value=t.value}),(r,a)=>(pa(),ha("div",qf,[Q("div",Xf,[xo(Q("input",{id:r.inputId,checked:r.value,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i),onChange:a[1]||(a[1]=i=>r.$emit("shareState",[r.event,n.value])),"aria-describedby":r.helperId,type:"checkbox",value:"",class:"w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 focus:ring-2"},null,40,Jf),[[Hf,n.value]])]),Q("div",Gf,[Q("label",{for:r.inputId,class:"font-medium text-gray-900"},Ar(r.label),9,Zf),Q("p",{id:r.helperId,class:"text-xs font-normal text-gray-500"},Ar(r.helperText),9,Qf)])]))}}),ec={class:"flex justify-center items-center"},tc=["href"],nc=["href"],rc=Qn({__name:"Reference",setup(e){const t={linkedIn:"https://linkedin.com/in/dávid-cseresznyés-623085287",github:"https://github.com/cseri502"};return(n,r)=>{const a=Oo("font-awesome-icon");return pa(),ha("div",ec,[Q("a",{href:t.linkedIn,target:"_blank"},[ee(a,{icon:["fab","linkedin"],class:"icon"})],8,tc),Q("a",{href:t.github,target:"_blank"},[ee(a,{icon:["fab","github"],class:"icon"})],8,nc)])}}}),ac={class:"h-screen w-full flex justify-center items-center bg-teal-50 selection:bg-teal-100"},ic={class:"m-2 md:m-0 w-full max-w-lg p-5 text-center bg-white shadow-lg shadow-black/20 rounded-md"},oc=Q("p",{class:"mt-2 text-gray-900 font-semibold text-lg"},"Password generator",-1),sc=Q("img",{src:Vf,class:"block m-auto my-5 w-16 h-16 duration-200 hover:brightness-75",title:"Password icons created by Smashicons - Flaticon",alt:"Lock",draggable:"false"},null,-1),lc={class:"relative flex flex-row justify-between items-center border-b border-teal-500 py-2"},fc=["value"],cc={class:"mt-5 border-b border-teal-500 py-2"},uc=["textContent"],dc={class:"grid grid-rows-2 grid-flow-col gap-4"},mc=Qn({__name:"App",setup(e){const t=Ke(["far","copy"]),n=Ke(""),r=Ke(20),a=Ke(!0),i=Ke(!1),o=Ke(!0),s=Ke(!1);ua(()=>{n.value=c()});function l(m){const h=m[0],w=m[1];h==="incUpper"&&(i.value=w),h==="incLower"&&(a.value=w),h==="incNums"&&(o.value=w),h==="incSymbols"&&(s.value=w)}function c(){const m="ABCDEFGHIJKLMNOPQRSTUVWXYZ",h="abcdefghijklmnopqrstuvwxyz",w="0123456789",M="!@#$%^&*()_+~`|}{[]:;?><,./-=";let S="",z="";i.value&&(S+=m),a.value&&(S+=h),o.value&&(S+=w),s.value&&(S+=M);for(let k=0;k<r.value;k++){const A=Math.floor(Math.random()*S.length);z+=S[A]}return z}async function d(){try{await navigator.clipboard.writeText(n.value),alert("The password was copied to your clipboard!")}catch{alert("An unexpected error happened during writing.")}}return(m,h)=>{const w=Oo("font-awesome-icon");return pa(),ha("div",ac,[Q("form",ic,[ee(rc),oc,sc,Q("div",lc,[Q("input",{type:"text",disabled:"",value:n.value,class:"appearance-none bg-transparent border-none w-full text-gray-500 text-center mr-3 py-1 px-2 leading-tight focus:outline-none"},null,8,fc),ee(w,{icon:t.value,class:"absolute right-0 m-2 text-teal-500 text-lg hover:text-teal-700 cursor-pointer transition-all duration-200",onMouseover:h[0]||(h[0]=()=>t.value=["fas","copy"]),onMouseleave:h[1]||(h[1]=()=>t.value=["far","copy"]),onClick:d},null,8,["icon"])]),Q("div",cc,[Q("label",{for:"pw-length-range",class:"block text-sm font-medium text-gray-900 text-left",textContent:Ar(`Password length (${r.value})`)},null,8,uc),xo(Q("input",{id:"pw-length-range",type:"range","onUpdate:modelValue":h[2]||(h[2]=M=>r.value=M),step:"1",min:"8",max:"32",class:"w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"},null,512),[[$f,r.value]]),Q("div",dc,[ee(vn,{onShareState:h[3]||(h[3]=M=>l(M)),value:!1,"input-id":"uppercase-checkbox","helper-id":"helper-uppcercase",label:"Include uppercase letters.","helper-text":"The password will include letters such as 'A' and 'Z'.",event:"incUpper"}),ee(vn,{onShareState:h[4]||(h[4]=M=>l(M)),value:!0,"input-id":"lowercase-checkbox","helper-id":"helper-lowercase",label:"Include lowercase letters.","helper-text":"The password will include letters such as 'b' and 'k'.",event:"incLower"}),ee(vn,{onShareState:h[5]||(h[5]=M=>l(M)),value:!0,"input-id":"number-checkbox","helper-id":"helper-number",label:"Include numbers.","helper-text":"The password will include numbers from 0 to 9.",event:"incNums"}),ee(vn,{onShareState:h[6]||(h[6]=M=>l(M)),value:!1,"input-id":"include-checkbox","helper-id":"helper-include",label:"Include symbols.","helper-text":"The password will include symbols such as '$', '#' and '?'.",event:"incSymbols"})])]),Q("button",{class:"mt-5 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"button",onClick:h[7]||(h[7]=()=>n.value=c())}," Generate password ")])])}}});function gi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gi(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){"@babel/helpers - typeof";return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function pc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hc(e,t,n){return t&&vi(e.prototype,t),n&&vi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ba(e,t){return vc(e)||yc(e,t)||zo(e,t)||wc()}function rn(e){return gc(e)||bc(e)||zo(e)||xc()}function gc(e){if(Array.isArray(e))return jr(e)}function vc(e){if(Array.isArray(e))return e}function bc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function zo(e,t){if(e){if(typeof e=="string")return jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jr(e,t)}}function jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bi=function(){},ya={},Do={},$o=null,Ho={mark:bi,measure:bi};try{typeof window<"u"&&(ya=window),typeof document<"u"&&(Do=document),typeof MutationObserver<"u"&&($o=MutationObserver),typeof performance<"u"&&(Ho=performance)}catch{}var _c=ya.navigator||{},yi=_c.userAgent,xi=yi===void 0?"":yi,Ge=ya,q=Do,wi=$o,bn=Ho;Ge.document;var Be=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Uo=~xi.indexOf("MSIE")||~xi.indexOf("Trident/"),yn,xn,wn,_n,kn,De="___FONT_AWESOME___",zr=16,Bo="fa",Yo="svg-inline--fa",mt="data-fa-i2svg",Dr="data-fa-pseudo-element",kc="data-fa-pseudo-element-pending",xa="data-prefix",wa="data-icon",_i="fontawesome-i2svg",Ac="async",Oc=["HTML","HEAD","STYLE","SCRIPT"],Wo=function(){try{return!0}catch{return!1}}(),V="classic",G="sharp",_a=[V,G];function an(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Gt=an((yn={},te(yn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(yn,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),yn)),Zt=an((xn={},te(xn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(xn,G,{solid:"fass",regular:"fasr",light:"fasl"}),xn)),Qt=an((wn={},te(wn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(wn,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),wn)),Ec=an((_n={},te(_n,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(_n,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),_n)),Cc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ko="fa-layers-text",Pc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ic=an((kn={},te(kn,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(kn,G,{900:"fass",400:"fasr",300:"fasl"}),kn)),Vo=[1,2,3,4,5,6,7,8,9,10],Sc=Vo.concat([11,12,13,14,15,16,17,18,19,20]),Tc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Zt[V]).map(en.add.bind(en));Object.keys(Zt[G]).map(en.add.bind(en));var Nc=[].concat(_a,rn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Vo.map(function(e){return"".concat(e,"x")})).concat(Sc.map(function(e){return"w-".concat(e)})),Ht=Ge.FontAwesomeConfig||{};function Mc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var Rc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rc.forEach(function(e){var t=ba(e,2),n=t[0],r=t[1],a=Fc(Mc(n));a!=null&&(Ht[r]=a)})}var qo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bo,replacementClass:Yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ht.familyPrefix&&(Ht.cssPrefix=Ht.familyPrefix);var Pt=E(E({},qo),Ht);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var P={};Object.keys(qo).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Pt[e]=n,Ut.forEach(function(r){return r(P)})},get:function(){return Pt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Ut.forEach(function(n){return n(P)})},get:function(){return Pt.cssPrefix}});Ge.FontAwesomeConfig=P;var Ut=[];function Lc(e){return Ut.push(e),function(){Ut.splice(Ut.indexOf(e),1)}}var We=zr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jc(e){if(!(!e||!Be)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var zc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=zc[Math.random()*62|0];return t}function Nt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ka(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xo(e[n]),'" ')},"").trim()}function ar(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Aa(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function $c(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Hc(e){var t=e.transform,n=e.width,r=n===void 0?zr:n,a=e.height,i=a===void 0?zr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Uo?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Uc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Jo(){var e=Bo,t=Yo,n=P.cssPrefix,r=P.replacementClass,a=Uc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ki=!1;function vr(){P.autoAddCss&&!ki&&(jc(Jo()),ki=!0)}var Bc={mixout:function(){return{dom:{css:Jo,insertCss:vr}}},hooks:function(){return{beforeDOMElementCreation:function(){vr()},beforeI2svg:function(){vr()}}}},$e=Ge||{};$e[De]||($e[De]={});$e[De].styles||($e[De].styles={});$e[De].hooks||($e[De].hooks={});$e[De].shims||($e[De].shims=[]);var ke=$e[De],Go=[],Yc=function e(){q.removeEventListener("DOMContentLoaded",e),Un=1,Go.map(function(t){return t()})},Un=!1;Be&&(Un=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Un||q.addEventListener("DOMContentLoaded",Yc));function Wc(e){Be&&(Un?setTimeout(e,0):Go.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xo(e):"<".concat(t," ").concat(Dc(r),">").concat(i.map(on).join(""),"</").concat(t,">")}function Ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},br=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Kc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Vc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function $r(e){var t=Vc(e);return t.length===1?t[0].toString(16):null}function qc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Oi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,Oi(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Hr("fa",t)}var An,On,En,bt=ke.styles,Xc=ke.shims,Jc=(An={},te(An,V,Object.values(Qt[V])),te(An,G,Object.values(Qt[G])),An),Oa=null,Zo={},Qo={},es={},ts={},ns={},Gc=(On={},te(On,V,Object.keys(Gt[V])),te(On,G,Object.keys(Gt[G])),On);function Zc(e){return~Nc.indexOf(e)}function Qc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Zc(a)?a:null}var rs=function(){var t=function(i){return br(bt,function(o,s,l){return o[l]=br(s,i,{}),o},{})};Zo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Qo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ns=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in bt||P.autoFetchSvg,r=br(Xc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});es=r.names,ts=r.unicodes,Oa=ir(P.styleDefault,{family:P.familyDefault})};Lc(function(e){Oa=ir(e.styleDefault,{family:P.familyDefault})});rs();function Ea(e,t){return(Zo[e]||{})[t]}function eu(e,t){return(Qo[e]||{})[t]}function ct(e,t){return(ns[e]||{})[t]}function as(e){return es[e]||{prefix:null,iconName:null}}function tu(e){var t=ts[e],n=Ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return Oa}var Ca=function(){return{prefix:null,iconName:null,rest:[]}};function ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Gt[r][e],i=Zt[r][e]||Zt[r][a],o=e in ke.styles?e:null;return i||o||null}var Ei=(En={},te(En,V,Object.keys(Qt[V])),te(En,G,Object.keys(Qt[G])),En);function or(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,V,"".concat(P.cssPrefix,"-").concat(V)),te(t,G,"".concat(P.cssPrefix,"-").concat(G)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return Ei[V].includes(c)}))&&(s=V),(e.includes(i[G])||e.some(function(c){return Ei[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=Qc(P.cssPrefix,d);if(bt[d]?(d=Jc[s].includes(d)?Ec[s][d]:d,o=d,c.prefix=d):Gc[s].indexOf(d)>-1?(o=d,c.prefix=ir(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[V]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var h=o==="fa"?as(c.iconName):{},w=ct(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||w||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!bt.far&&bt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},Ca());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(bt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ze()||"fas"),l}var nu=function(){function e(){pc(this,e),this.definitions={}}return hc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Hr(s,o[s]);var l=Qt[V][s];l&&Hr(l,o[s]),rs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ci=[],yt={},At={},ru=Object.keys(At);function au(e,t){var n=t.mixoutsTo;return Ci=e,yt={},Object.keys(At).forEach(function(r){ru.indexOf(r)===-1&&delete At[r]}),Ci.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Hn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){yt[o]||(yt[o]=[]),yt[o].push(i[o])})}r.provides&&r.provides(At)}),n}function Ur(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=yt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=yt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return At[e]?At[e].apply(null,t):void 0}function Br(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(t)return t=ct(n,t)||t,Ai(is.definitions,n,t)||Ai(ke.styles,n,t)}var is=new nu,iu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,pt("noAuto")},ou={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(pt("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Wc(function(){lu({autoReplaceSvgRoot:n}),pt("watch",t)})}},su={icon:function(t){if(t===null)return null;if(Hn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ir(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Cc))){var a=or(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:ct(i,t)||t}}}},he={noAuto:iu,config:P,dom:ou,parse:su,library:is,findIconDefinition:Br,toHtml:on},lu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(ke.styles).length>0||P.autoFetchSvg)&&Be&&P.autoReplaceSvg&&he.dom.i2svg({node:r})};function sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Be){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function fu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Aa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ar(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function cu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Pa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,w=h===void 0?!1:h,M=r.found?r:n,S=M.width,z=M.height,k=a==="fak",A=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(z)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/z*16*.0625,"em")}:{};w&&(R.attributes[mt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||tn())},children:[l]}),delete R.attributes.title);var U=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},I),m.styles)}),ie=r.found&&n.found?He("generateAbstractMask",U)||{children:[],attributes:{}}:He("generateAbstractIcon",U)||{children:[],attributes:{}},oe=ie.children,be=ie.attributes;return U.children=oe,U.attributes=be,s?cu(U):fu(U)}function Pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[mt]="");var d=E({},o.styles);Aa(a)&&(d.transform=Hc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ar(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function uu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ar(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yr=ke.styles;function Yr(e){var t=e[0],n=e[1],r=e.slice(4),a=ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var du={found:!1,width:512,height:512};function mu(e,t){!Wo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=as(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&yr[t]&&yr[t][e]){var o=yr[t][e];return r(Yr(o))}mu(e,t),r(E(E({},du),{},{icon:P.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var Ii=function(){},Kr=P.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Ii,measure:Ii},zt='FA "6.4.2"',pu=function(t){return Kr.mark("".concat(zt," ").concat(t," begins")),function(){return os(t)}},os=function(t){Kr.mark("".concat(zt," ").concat(t," ends")),Kr.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},Ia={begin:pu,end:os},Mn=function(){};function Si(e){var t=e.getAttribute?e.getAttribute(mt):null;return typeof t=="string"}function hu(e){var t=e.getAttribute?e.getAttribute(xa):null,n=e.getAttribute?e.getAttribute(wa):null;return t&&n}function gu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function vu(){if(P.autoReplaceSvg===!0)return Fn.replace;var e=Fn[P.autoReplaceSvg];return e||Fn.replace}function bu(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function yu(e){return q.createElement(e)}function ss(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?bu:yu:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ss(o,{ceFn:r}))}),a}function xu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ss(a),n)}),n.getAttribute(mt)===null&&P.keepOriginalSource){var r=q.createComment(xu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ka(n).indexOf(P.replacementClass))return Fn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(mt,""),n.innerHTML=o}};function Ti(e){e()}function ls(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=Ti;P.mutateApproach===Ac&&(r=Ge.requestAnimationFrame||Ti),r(function(){var a=vu(),i=Ia.begin("mutate");e.map(a),i(),n()})}}var Sa=!1;function fs(){Sa=!0}function Vr(){Sa=!1}var Bn=null;function Ni(e){if(wi&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,o=i===void 0?Mn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Bn=new wi(function(c){if(!Sa){var d=Ze();Nt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Si(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Si(m.target)&&~Tc.indexOf(m.attributeName))if(m.attributeName==="class"&&hu(m.target)){var h=or(ka(m.target)),w=h.prefix,M=h.iconName;m.target.setAttribute(xa,w||d),M&&m.target.setAttribute(wa,M)}else gu(m.target)&&a(m.target)})}}),Be&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wu(){Bn&&Bn.disconnect()}function _u(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ku(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=or(ka(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=eu(a.prefix,e.innerText)||Ea(a.prefix,$r(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Au(e){var t=Nt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ou(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ku(e),r=n.iconName,a=n.prefix,i=n.rest,o=Au(e),s=Ur("parseNodeAttributes",{},e),l=t.styleParser?_u(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Eu=ke.styles;function cs(e){var t=P.autoReplaceSvg==="nest"?Mi(e,{styleParser:!1}):Mi(e);return~t.extra.classes.indexOf(Ko)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var Qe=new Set;_a.map(function(e){Qe.add("fa-".concat(e))});Object.keys(Gt[V]).map(Qe.add.bind(Qe));Object.keys(Gt[G]).map(Qe.add.bind(Qe));Qe=rn(Qe);function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(_i,"-").concat(m))},a=function(m){return n.remove("".concat(_i,"-").concat(m))},i=P.autoFetchSvg?Qe:_a.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Eu));i.includes("fa")||i.push("fa");var o=[".".concat(Ko,":not([").concat(mt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(mt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Nt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ia.begin("onTree"),c=s.reduce(function(d,m){try{var h=cs(m);h&&d.push(h)}catch(w){Wo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){ls(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function Cu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cs(e).then(function(n){n&&ls([n],t)})}function Pu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Br(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Br(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Iu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,w=n.titleId,M=w===void 0?null:w,S=n.classes,z=S===void 0?[]:S,k=n.attributes,A=k===void 0?{}:k,R=n.styles,I=R===void 0?{}:R;if(t){var U=t.prefix,ie=t.iconName,oe=t.icon;return sr(E({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(h?A["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(M||tn()):(A["aria-hidden"]="true",A.focusable="false")),Pa({icons:{main:Yr(oe),mask:l?Yr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ie,transform:E(E({},Te),a),symbol:o,title:h,maskId:d,titleId:M,extra:{attributes:A,styles:I,classes:z}})})}},Su={mixout:function(){return{icon:Pu(Iu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fi,n.nodeCallback=Cu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Fi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(w,M){Promise.all([Wr(a,s),d.iconName?Wr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var z=ba(S,2),k=z[0],A=z[1];w([n,Pa({icons:{main:k,mask:A},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ar(s);l.length>0&&(a.style=l);var c;return Aa(o)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Tu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return sr({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(rn(i)).join(" ")},children:o}]})}}}},Nu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return sr({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),uu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(rn(s))}})})}}}},Mu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,w=h===void 0?{}:h;return sr({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),Pi({content:n,transform:E(E({},Te),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(P.cssPrefix,"-layers-text")].concat(rn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Uo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Fu=new RegExp('"',"ug"),Ri=[1105920,1112319];function Ru(e){var t=e.replace(Fu,""),n=qc(t,0),r=n>=Ri[0]&&n<=Ri[1],a=t.length===2?t[0]===t[1]:!1;return{value:$r(a?t[0]:t),isSecondary:r||a}}function Li(e,t){var n="".concat(kc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Nt(e.children),o=i.filter(function(oe){return oe.getAttribute(Dr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Pc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?G:V,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zt[h][l[2].toLowerCase()]:Ic[h][c],M=Ru(m),S=M.value,z=M.isSecondary,k=l[0].startsWith("FontAwesome"),A=Ea(w,S),R=A;if(k){var I=tu(S);I.iconName&&I.prefix&&(A=I.iconName,w=I.prefix)}if(A&&!z&&(!o||o.getAttribute(xa)!==w||o.getAttribute(wa)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var U=Ou(),ie=U.extra;ie.attributes[Dr]=t,Wr(A,w).then(function(oe){var be=Pa(E(E({},U),{},{icons:{main:oe,mask:Ca()},prefix:w,iconName:R,extra:ie,watchable:!0})),ge=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Me){return on(Me)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Lu(e){return Promise.all([Li(e,"::before"),Li(e,"::after")])}function ju(e){return e.parentNode!==document.head&&!~Oc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ji(e){if(Be)return new Promise(function(t,n){var r=Nt(e.querySelectorAll("*")).filter(ju).map(Lu),a=Ia.begin("searchPseudoElements");fs(),Promise.all(r).then(function(){a(),Vr(),t()}).catch(function(){a(),Vr(),n()})})}var zu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ji,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;P.searchPseudoElements&&ji(a)}}},zi=!1,Du={mixout:function(){return{dom:{unwatch:function(){fs(),zi=!0}}}},hooks:function(){return{bootstrap:function(){Ni(Ur("mutationObserverCallbacks",{}))},noAuto:function(){wu()},watch:function(n){var r=n.observeMutationsRoot;zi?Vr():Ni(Ur("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Di=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$u={mixout:function(){return{parse:{transform:function(n){return Di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Di(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},xr={x:0,y:0,width:"100%",height:"100%"};function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hu(e){return e.tag==="g"?e.children:[e]}var Uu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?or(a.split(" ").map(function(o){return o.trim()})):Ca();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,h=o.icon,w=$c({transform:l,containerWidth:m,iconWidth:c}),M={tag:"rect",attributes:E(E({},xr),{},{fill:"white"})},S=d.children?{children:d.children.map($i)}:{},z={tag:"g",attributes:E({},w.inner),children:[$i(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},S))]},k={tag:"g",attributes:E({},w.outer),children:[z]},A="mask-".concat(s||tn()),R="clip-".concat(s||tn()),I={tag:"mask",attributes:E(E({},xr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,k]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Hu(h)},I]};return r.push(U,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(A,")")},xr)}),{children:r,attributes:a}}}},Bu={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Yu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Wu=[Bc,Su,Tu,Nu,Mu,zu,Du,$u,Uu,Bu,Yu];au(Wu,{mixoutsTo:he});he.noAuto;he.config;var Ku=he.library;he.dom;var qr=he.parse;he.findIconDefinition;he.toHtml;var Vu=he.icon;he.layer;he.text;he.counter;function Hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yn(e){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xu(e,t){if(e==null)return{};var n=qu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},us={exports:{}};(function(e){(function(t){var n=function(k,A,R){if(!c(A)||m(A)||h(A)||w(A)||l(A))return A;var I,U=0,ie=0;if(d(A))for(I=[],ie=A.length;U<ie;U++)I.push(n(k,A[U],R));else{I={};for(var oe in A)Object.prototype.hasOwnProperty.call(A,oe)&&(I[k(oe,R)]=n(k,A[oe],R))}return I},r=function(k,A){A=A||{};var R=A.separator||"_",I=A.split||/(?=[A-Z])/;return k.split(I).join(R)},a=function(k){return M(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(A,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var A=a(k);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(k,A){return r(k,A).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},h=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},M=function(k){return k=k-0,k===k},S=function(k,A){var R=A&&"process"in A?A.process:A;return typeof R!="function"?k:function(I,U){return R(I,k,U)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,A){return n(S(a,A),k)},decamelizeKeys:function(k,A){return n(S(o,A),k,A)},pascalizeKeys:function(k,A){return n(S(i,A),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(Ju)})(us);var Gu=us.exports,Zu=["class","style"];function Qu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Gu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ed(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ds(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ds(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=ed(d);break;case"style":l.style=Qu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Xu(n,Zu);return yf(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var ms=!1;try{ms=!0}catch{}function td(){if(!ms&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function nd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ui(e){if(e&&Yn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qr.icon)return qr.icon(e);if(e===null)return null;if(Yn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var rd=Qn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=at(function(){return Ui(t.icon)}),i=at(function(){return wr("classes",nd(t))}),o=at(function(){return wr("transform",typeof t.transform=="string"?qr.transform(t.transform):t.transform)}),s=at(function(){return wr("mask",Ui(t.mask))}),l=at(function(){return Vu(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});In(l,function(d){if(!d)return td("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=at(function(){return l.value?ds(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ad={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},id={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]},od={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},sd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Ku.add(ad,id,sd,od);Wf(mc).component("font-awesome-icon",rd).mount("#app");

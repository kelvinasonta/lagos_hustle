(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="174",wl=0,ta=1,Al=2,uc=1,hc=2,pn=3,Cn=0,Pt=1,jt=2,bn=0,_i=1,na=2,ia=3,ra=4,bl=5,Vn=100,Rl=101,Cl=102,Pl=103,Ll=104,Dl=200,Il=201,Ul=202,Nl=203,Ds=204,Is=205,Fl=206,Ol=207,Bl=208,zl=209,Hl=210,Gl=211,Vl=212,kl=213,Wl=214,Us=0,Ns=1,Fs=2,Ei=3,Os=4,Bs=5,zs=6,Hs=7,dc=0,Xl=1,ql=2,Rn=0,Yl=1,Kl=2,Zl=3,$l=4,jl=5,Jl=6,Ql=7,fc=300,yi=301,Ti=302,Gs=303,Vs=304,Xr=306,ks=1e3,Xn=1001,Ws=1002,en=1003,eu=1004,cr=1005,rn=1006,es=1007,qn=1008,xn=1009,pc=1010,mc=1011,Zi=1012,bo=1013,Kn=1014,_n=1015,er=1016,Ro=1017,Co=1018,wi=1020,_c=35902,gc=1021,vc=1022,Qt=1023,xc=1024,Mc=1025,gi=1026,Ai=1027,Sc=1028,Po=1029,Ec=1030,Lo=1031,Do=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,Xs=35840,qs=35841,Ys=35842,Ks=35843,Zs=36196,$s=37492,js=37496,Js=37808,Qs=37809,eo=37810,to=37811,no=37812,io=37813,ro=37814,so=37815,oo=37816,ao=37817,co=37818,lo=37819,uo=37820,ho=37821,Nr=36492,fo=36494,po=36495,yc=36283,mo=36284,_o=36285,go=36286,tu=3200,nu=3201,Tc=0,iu=1,An="",Vt="srgb",bi="srgb-linear",Or="linear",Qe="srgb",Jn=7680,sa=519,ru=512,su=513,ou=514,wc=515,au=516,cu=517,lu=518,uu=519,oa=35044,aa="300 es",gn=2e3,Br=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ca=1234567;const Xi=Math.PI/180,$i=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function Io(i,e){return(i%e+e)%e}function hu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function du(i,e,t){return i!==e?(t-i)/(e-i):0}function qi(i,e,t){return(1-t)*i+t*e}function fu(i,e,t,n){return qi(i,e,1-Math.exp(-t*n))}function pu(i,e=1){return e-Math.abs(Io(i,e*2)-e)}function mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _u(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vu(i,e){return i+Math.random()*(e-i)}function xu(i){return i*(.5-Math.random())}function Mu(i){i!==void 0&&(ca=i);let e=ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Su(i){return i*Xi}function Eu(i){return i*$i}function yu(i){return(i&i-1)===0&&i!==0}function Tu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Au(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),u=s((e+n)/2),l=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*l,c*d,c*f,a*u);break;case"YZY":i.set(c*f,a*l,c*d,a*u);break;case"ZXZ":i.set(c*d,c*f,a*l,a*u);break;case"XZX":i.set(a*l,c*_,c*m,a*u);break;case"YXY":i.set(c*m,a*l,c*_,a*u);break;case"ZYZ":i.set(c*_,c*m,a*l,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bu={DEG2RAD:Xi,RAD2DEG:$i,generateUUID:Ii,clamp:Oe,euclideanModulo:Io,mapLinear:hu,inverseLerp:du,lerp:qi,damp:fu,pingpong:pu,smoothstep:mu,smootherstep:_u,randInt:gu,randFloat:vu,randFloatSpread:xu,seededRandom:Mu,degToRad:Su,radToDeg:Eu,isPowerOfTwo:yu,ceilPowerOfTwo:Tu,floorPowerOfTwo:wu,setQuaternionFromProperEuler:Au,normalize:bt,denormalize:fi};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,r,s,o,a,c,u){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,u)}set(e,t,n,r,s,o,a,c,u){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=o,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],l=n[4],d=n[7],f=n[2],m=n[5],_=n[8],v=r[0],p=r[3],h=r[6],y=r[1],T=r[4],S=r[7],L=r[2],A=r[5],b=r[8];return s[0]=o*v+a*y+c*L,s[3]=o*p+a*T+c*A,s[6]=o*h+a*S+c*b,s[1]=u*v+l*y+d*L,s[4]=u*p+l*T+d*A,s[7]=u*h+l*S+d*b,s[2]=f*v+m*y+_*L,s[5]=f*p+m*T+_*A,s[8]=f*h+m*S+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8];return t*o*l-t*a*u-n*s*l+n*a*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8],d=l*o-a*u,f=a*c-l*s,m=u*s-o*c,_=t*d+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*u-l*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(l*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*c-u*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ts.makeScale(e,t)),this}rotate(e){return this.premultiply(ts.makeRotation(-e)),this}translate(e,t){return this.premultiply(ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ts=new De;function Ac(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ru(){const i=zr("canvas");return i.style.display="block",i}const la={};function zn(i){i in la||(la[i]=!0,console.warn(i))}function Cu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Pu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ua=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ha=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Du(){const i={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Qe&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===An?Or:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bi]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:ua,fromXYZ:ha,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:ua,fromXYZ:ha,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const Ye=Du();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qn;class Iu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qn===void 0&&(Qn=zr("canvas")),Qn.width=e.width,Qn.height=e.height;const n=Qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qn}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uu=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ns(r[o].image)):s.push(ns(r[o]))}else s=ns(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nu=0;class Lt extends Di{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Xn,r=Xn,s=rn,o=qn,a=Qt,c=xn,u=Lt.DEFAULT_ANISOTROPY,l=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Ii(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=fc;Lt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],l=c[4],d=c[8],f=c[1],m=c[5],_=c[9],v=c[2],p=c[6],h=c[10];if(Math.abs(l-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(l+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,S=(m+1)/2,L=(h+1)/2,A=(l+f)/4,b=(d+v)/4,P=(_+p)/4;return T>S&&T>L?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=A/n,s=b/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=A/r,s=P/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=b/s,r=P/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(f-l)*(f-l));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(d-v)/y,this.z=(f-l)/y,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fu extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Lt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bc extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ou extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],u=n[r+1],l=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=l,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d!==v||c!==f||u!==m||l!==_){let p=1-a;const h=c*f+u*m+l*_+d*v,y=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const L=Math.sqrt(T),A=Math.atan2(L,h*y);p=Math.sin(p*A)/L,a=Math.sin(a*A)/L}const S=a*y;if(c=c*p+f*S,u=u*p+m*S,l=l*p+_*S,d=d*p+v*S,p===1-a){const L=1/Math.sqrt(c*c+u*u+l*l+d*d);c*=L,u*=L,l*=L,d*=L}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],u=n[r+2],l=n[r+3],d=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+l*d+c*m-u*f,e[t+1]=c*_+l*f+u*d-a*m,e[t+2]=u*_+l*m+a*f-c*d,e[t+3]=l*_-a*d-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),l=a(r/2),d=a(s/2),f=c(n/2),m=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*l*d+u*m*_,this._y=u*m*d-f*l*_,this._z=u*l*_+f*m*d,this._w=u*l*d-f*m*_;break;case"YXZ":this._x=f*l*d+u*m*_,this._y=u*m*d-f*l*_,this._z=u*l*_-f*m*d,this._w=u*l*d+f*m*_;break;case"ZXY":this._x=f*l*d-u*m*_,this._y=u*m*d+f*l*_,this._z=u*l*_+f*m*d,this._w=u*l*d-f*m*_;break;case"ZYX":this._x=f*l*d-u*m*_,this._y=u*m*d+f*l*_,this._z=u*l*_-f*m*d,this._w=u*l*d+f*m*_;break;case"YZX":this._x=f*l*d+u*m*_,this._y=u*m*d+f*l*_,this._z=u*l*_-f*m*d,this._w=u*l*d-f*m*_;break;case"XZY":this._x=f*l*d-u*m*_,this._y=u*m*d-f*l*_,this._z=u*l*_+f*m*d,this._w=u*l*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],u=t[2],l=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(l-c)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(l-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+l)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(c+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+o*a+r*u-s*c,this._y=r*l+o*c+s*a-n*u,this._z=s*l+o*u+n*c-r*a,this._w=o*l-n*a-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,a),d=Math.sin((1-t)*l)/u,f=Math.sin(t*l)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*r-a*n),l=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*u+o*d-a*l,this.y=n+c*l+a*u-s*d,this.z=r+c*d+s*l-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return is.copy(this).projectOnVector(e),this.sub(is)}reflect(e){return this.sub(is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const is=new N,da=new tr;class nr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),ur.subVectors(this.max,Bi),ei.subVectors(e.a,Bi),ti.subVectors(e.b,Bi),ni.subVectors(e.c,Bi),Mn.subVectors(ti,ei),Sn.subVectors(ni,ti),In.subVectors(ei,ni);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-In.z,In.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,In.z,0,-In.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-In.y,In.x,0];return!rs(t,ei,ti,ni,ur)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,ei,ti,ni,ur))?!1:(hr.crossVectors(Mn,Sn),t=[hr.x,hr.y,hr.z],rs(t,ei,ti,ni,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new N,new N,new N,new N,new N,new N,new N,new N],Kt=new N,lr=new nr,ei=new N,ti=new N,ni=new N,Mn=new N,Sn=new N,In=new N,Bi=new N,ur=new N,hr=new N,Un=new N;function rs(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Un.fromArray(i,s);const a=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),u=t.dot(Un),l=n.dot(Un);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>a)return!1}return!0}const Bu=new nr,zi=new N,ss=new N;class No{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(zi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(ss)),this.expandByPoint(zi.copy(e.center).sub(ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new N,os=new N,dr=new N,En=new N,as=new N,fr=new N,cs=new N;class zu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){os.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(os);const s=e.distanceTo(t)*.5,o=-this.direction.dot(dr),a=En.dot(this.direction),c=-En.dot(dr),u=En.lengthSq(),l=Math.abs(1-o*o);let d,f,m,_;if(l>0)if(d=o*c-a,f=o*a-c,_=s*l,d>=0)if(f>=-_)if(f<=_){const v=1/l;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+u}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+u;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(os).addScaledVector(dr,f),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const u=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(s=(e.min.y-f.y)*l,o=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,o=(e.min.y-f.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){as.subVectors(t,e),fr.subVectors(n,e),cs.crossVectors(as,fr);let o=this.direction.dot(cs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,e);const c=a*this.direction.dot(fr.crossVectors(En,fr));if(c<0)return null;const u=a*this.direction.dot(as.cross(En));if(u<0||c+u>o)return null;const l=-a*En.dot(cs);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,s,o,a,c,u,l,d,f,m,_,v,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,u,l,d,f,m,_,v,p)}set(e,t,n,r,s,o,a,c,u,l,d,f,m,_,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=u,h[6]=l,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ii.setFromMatrixColumn(e,0).length(),s=1/ii.setFromMatrixColumn(e,1).length(),o=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*l,m=o*d,_=a*l,v=a*d;t[0]=c*l,t[4]=-c*d,t[8]=u,t[1]=m+_*u,t[5]=f-v*u,t[9]=-a*c,t[2]=v-f*u,t[6]=_+m*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*l,m=c*d,_=u*l,v=u*d;t[0]=f+v*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*d,t[5]=o*l,t[9]=-a,t[2]=m*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*l,m=c*d,_=u*l,v=u*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*l,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*l,m=o*d,_=a*l,v=a*d;t[0]=c*l,t[4]=_*u-m,t[8]=f*u+v,t[1]=c*d,t[5]=v*u+f,t[9]=m*u-_,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*u,_=a*c,v=a*u;t[0]=c*l,t[4]=v-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*l,t[9]=-a*l,t[2]=-u*l,t[6]=m*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*c,m=o*u,_=a*c,v=a*u;t[0]=c*l,t[4]=-d,t[8]=u*l,t[1]=f*d+v,t[5]=o*l,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*l,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hu,e,Gu)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),yn.crossVectors(n,It),yn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),yn.crossVectors(n,It)),yn.normalize(),pr.crossVectors(It,yn),r[0]=yn.x,r[4]=pr.x,r[8]=It.x,r[1]=yn.y,r[5]=pr.y,r[9]=It.y,r[2]=yn.z,r[6]=pr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],l=n[1],d=n[5],f=n[9],m=n[13],_=n[2],v=n[6],p=n[10],h=n[14],y=n[3],T=n[7],S=n[11],L=n[15],A=r[0],b=r[4],P=r[8],E=r[12],x=r[1],R=r[5],F=r[9],O=r[13],W=r[2],X=r[6],H=r[10],Y=r[14],V=r[3],se=r[7],he=r[11],Se=r[15];return s[0]=o*A+a*x+c*W+u*V,s[4]=o*b+a*R+c*X+u*se,s[8]=o*P+a*F+c*H+u*he,s[12]=o*E+a*O+c*Y+u*Se,s[1]=l*A+d*x+f*W+m*V,s[5]=l*b+d*R+f*X+m*se,s[9]=l*P+d*F+f*H+m*he,s[13]=l*E+d*O+f*Y+m*Se,s[2]=_*A+v*x+p*W+h*V,s[6]=_*b+v*R+p*X+h*se,s[10]=_*P+v*F+p*H+h*he,s[14]=_*E+v*O+p*Y+h*Se,s[3]=y*A+T*x+S*W+L*V,s[7]=y*b+T*R+S*X+L*se,s[11]=y*P+T*F+S*H+L*he,s[15]=y*E+T*O+S*Y+L*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],u=e[13],l=e[2],d=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],h=e[15];return _*(+s*c*d-r*u*d-s*a*f+n*u*f+r*a*m-n*c*m)+v*(+t*c*m-t*u*f+s*o*f-r*o*m+r*u*l-s*c*l)+p*(+t*u*d-t*a*m-s*o*d+n*o*m+s*a*l-n*u*l)+h*(-r*a*l-t*c*d+t*a*f+r*o*d-n*o*f+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8],d=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],h=e[15],y=d*p*u-v*f*u+v*c*m-a*p*m-d*c*h+a*f*h,T=_*f*u-l*p*u-_*c*m+o*p*m+l*c*h-o*f*h,S=l*v*u-_*d*u+_*a*m-o*v*m-l*a*h+o*d*h,L=_*d*c-l*v*c-_*a*f+o*v*f+l*a*p-o*d*p,A=t*y+n*T+r*S+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=y*b,e[1]=(v*f*s-d*p*s-v*r*m+n*p*m+d*r*h-n*f*h)*b,e[2]=(a*p*s-v*c*s+v*r*u-n*p*u-a*r*h+n*c*h)*b,e[3]=(d*c*s-a*f*s-d*r*u+n*f*u+a*r*m-n*c*m)*b,e[4]=T*b,e[5]=(l*p*s-_*f*s+_*r*m-t*p*m-l*r*h+t*f*h)*b,e[6]=(_*c*s-o*p*s-_*r*u+t*p*u+o*r*h-t*c*h)*b,e[7]=(o*f*s-l*c*s+l*r*u-t*f*u-o*r*m+t*c*m)*b,e[8]=S*b,e[9]=(_*d*s-l*v*s-_*n*m+t*v*m+l*n*h-t*d*h)*b,e[10]=(o*v*s-_*a*s+_*n*u-t*v*u-o*n*h+t*a*h)*b,e[11]=(l*a*s-o*d*s-l*n*u+t*d*u+o*n*m-t*a*m)*b,e[12]=L*b,e[13]=(l*v*r-_*d*r+_*n*f-t*v*f-l*n*p+t*d*p)*b,e[14]=(_*a*r-o*v*r-_*n*c+t*v*c+o*n*p-t*a*p)*b,e[15]=(o*d*r-l*a*r+l*n*c-t*d*c-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,u=s*o,l=s*a;return this.set(u*o+n,u*a-r*c,u*c+r*a,0,u*a+r*c,l*a+n,l*c-r*o,0,u*c-r*a,l*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,u=s+s,l=o+o,d=a+a,f=s*u,m=s*l,_=s*d,v=o*l,p=o*d,h=a*d,y=c*u,T=c*l,S=c*d,L=n.x,A=n.y,b=n.z;return r[0]=(1-(v+h))*L,r[1]=(m+S)*L,r[2]=(_-T)*L,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+h))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(_+T)*b,r[9]=(p-y)*b,r[10]=(1-(f+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ii.set(r[0],r[1],r[2]).length();const o=ii.set(r[4],r[5],r[6]).length(),a=ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const u=1/s,l=1/o,d=1/a;return Zt.elements[0]*=u,Zt.elements[1]*=u,Zt.elements[2]*=u,Zt.elements[4]*=l,Zt.elements[5]*=l,Zt.elements[6]*=l,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=gn){const c=this.elements,u=2*s/(t-e),l=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,_;if(a===gn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Br)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=gn){const c=this.elements,u=1/(t-e),l=1/(n-r),d=1/(o-s),f=(t+e)*u,m=(n+r)*l;let _,v;if(a===gn)_=(o+s)*d,v=-2*d;else if(a===Br)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new N,Zt=new ct,Hu=new N(0,0,0),Gu=new N(1,1,1),yn=new N,pr=new N,It=new N,fa=new ct,pa=new tr;class on{constructor(e=0,t=0,n=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],l=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vu=0;const ma=new N,ri=new tr,hn=new ct,mr=new N,Hi=new N,ku=new N,Wu=new tr,_a=new N(1,0,0),ga=new N(0,1,0),va=new N(0,0,1),xa={type:"added"},Xu={type:"removed"},si={type:"childadded",child:null},ls={type:"childremoved",child:null};class St extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new on,n=new tr,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new De}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(_a,e)}rotateY(e){return this.rotateOnAxis(ga,e)}rotateZ(e){return this.rotateOnAxis(va,e)}translateOnAxis(e,t){return ma.copy(e).applyQuaternion(this.quaternion),this.position.add(ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_a,e)}translateY(e){return this.translateOnAxis(ga,e)}translateZ(e){return this.translateOnAxis(va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Hi,mr,this.up):hn.lookAt(mr,Hi,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),ri.setFromRotationMatrix(hn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xa),si.child=e,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xu),ls.child=e,this.dispatchEvent(ls),ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xa),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,ku),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Wu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),l=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const u in a){const l=a[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new N,dn=new N,us=new N,fn=new N,oi=new N,ai=new N,Ma=new N,hs=new N,ds=new N,fs=new N,ps=new at,ms=new at,_s=new at;class Jt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$t.subVectors(r,t),dn.subVectors(n,t),us.subVectors(e,t);const o=$t.dot($t),a=$t.dot(dn),c=$t.dot(us),u=dn.dot(dn),l=dn.dot(us),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(u*c-a*l)*f,_=(o*l-a*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(o,fn.y),c.addScaledVector(a,fn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return ps.setScalar(0),ms.setScalar(0),_s.setScalar(0),ps.fromBufferAttribute(e,t),ms.fromBufferAttribute(e,n),_s.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ps,s.x),o.addScaledVector(ms,s.y),o.addScaledVector(_s,s.z),o}static isFrontFacing(e,t,n,r){return $t.subVectors(n,t),dn.subVectors(e,t),$t.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),$t.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;oi.subVectors(r,n),ai.subVectors(s,n),hs.subVectors(e,n);const c=oi.dot(hs),u=ai.dot(hs);if(c<=0&&u<=0)return t.copy(n);ds.subVectors(e,r);const l=oi.dot(ds),d=ai.dot(ds);if(l>=0&&d<=l)return t.copy(r);const f=c*d-l*u;if(f<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(oi,o);fs.subVectors(e,s);const m=oi.dot(fs),_=ai.dot(fs);if(_>=0&&m<=_)return t.copy(s);const v=m*u-c*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(ai,a);const p=l*_-m*d;if(p<=0&&d-l>=0&&m-_>=0)return Ma.subVectors(s,r),a=(d-l)/(d-l+(m-_)),t.copy(r).addScaledVector(Ma,a);const h=1/(p+v+f);return o=v*h,a=f*h,t.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function gs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=Io(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gs(o,s,e+1/3),this.g=gs(o,s,e),this.b=gs(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ye.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Oe(Tt.r*255,0,255))*65536+Math.round(Oe(Tt.g*255,0,255))*256+Math.round(Oe(Tt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,u;const l=(a+o)/2;if(a===o)c=0,u=0;else{const d=o-a;switch(u=l<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Vt){Ye.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,r=Tt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(_r);const n=qi(Tn.h,_r.h,t),r=qi(Tn.s,_r.s,t),s=qi(Tn.l,_r.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ne;Ne.NAMES=Cc;let qu=0;class ir extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=_i,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Is,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ds&&(n.blendSrc=this.blendSrc),this.blendDst!==Is&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nt extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new N,gr=new ze;let Yu=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oa,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),e}}class Pc extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lc extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ku=0;const zt=new ct,vs=new St,ci=new N,Ut=new nr,Gi=new nr,gt=new N;class Xt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?Lc:Pc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return vs.lookAt(e),vs.updateMatrix(),this.applyMatrix4(vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ut.min,Gi.min),Ut.expandByPoint(gt),gt.addVectors(Ut.max,Gi.max),Ut.expandByPoint(gt)):(Ut.expandByPoint(Gi.min),Ut.expandByPoint(Gi.max))}Ut.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let u=0,l=a.count;u<l;u++)gt.fromBufferAttribute(a,u),c&&(ci.fromBufferAttribute(e,u),gt.add(ci)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new N,c[P]=new N;const u=new N,l=new N,d=new N,f=new ze,m=new ze,_=new ze,v=new N,p=new N;function h(P,E,x){u.fromBufferAttribute(n,P),l.fromBufferAttribute(n,E),d.fromBufferAttribute(n,x),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,x),l.sub(u),d.sub(u),m.sub(f),_.sub(f);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(v.copy(l).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(l,-_.x).multiplyScalar(R),a[P].add(v),a[E].add(v),a[x].add(v),c[P].add(p),c[E].add(p),c[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,E=y.length;P<E;++P){const x=y[P],R=x.start,F=x.count;for(let O=R,W=R+F;O<W;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new N,S=new N,L=new N,A=new N;function b(P){L.fromBufferAttribute(r,P),A.copy(L);const E=a[P];T.copy(E),T.sub(L.multiplyScalar(L.dot(E))).normalize(),S.crossVectors(A,E);const R=S.dot(c[P])<0?-1:1;o.setXYZW(P,T.x,T.y,T.z,R)}for(let P=0,E=y.length;P<E;++P){const x=y[P],R=x.start,F=x.count;for(let O=R,W=R+F;O<W;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,u=new N,l=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),l.subVectors(o,s),d.subVectors(r,s),l.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,p),a.add(l),c.add(l),u.add(l),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),l.subVectors(o,s),d.subVectors(r,s),l.cross(d),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const u=a.array,l=a.itemSize,d=a.normalized,f=new u.constructor(c.length*l);let m=0,_=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*l;for(let h=0;h<l;h++)f[_++]=u[m++]}return new sn(f,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let l=0,d=u.length;l<d;l++){const f=u[l],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];l.push(m.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(t))}const s=e.morphAttributes;for(const u in s){const l=[],d=s[u];for(let f=0,m=d.length;f<m;f++)l.push(d[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,l=o.length;u<l;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sa=new ct,Nn=new zu,vr=new No,Ea=new N,xr=new N,Mr=new N,Sr=new N,xs=new N,Er=new N,ya=new N,yr=new N;class Z extends St{constructor(e=new Xt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const l=a[c],d=s[c];l!==0&&(xs.fromBufferAttribute(d,e),o?Er.addScaledVector(xs,l):Er.addScaledVector(xs.sub(t),l))}t.add(Er)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(vr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(vr,Ea)===null||Nn.origin.distanceToSquared(Ea)>(e.far-e.near)**2))&&(Sa.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(Sa),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],h=o[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,L=T;S<L;S+=3){const A=a.getX(S),b=a.getX(S+1),P=a.getX(S+2);r=Tr(this,h,e,n,u,l,d,A,b,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,h=v;p<h;p+=3){const y=a.getX(p),T=a.getX(p+1),S=a.getX(p+2);r=Tr(this,o,e,n,u,l,d,y,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],h=o[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,L=T;S<L;S+=3){const A=S,b=S+1,P=S+2;r=Tr(this,h,e,n,u,l,d,A,b,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,h=v;p<h;p+=3){const y=p,T=p+1,S=p+2;r=Tr(this,o,e,n,u,l,d,y,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Zu(i,e,t,n,r,s,o,a){let c;if(e.side===Pt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Cn,a),c===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(yr);return u<t.near||u>t.far?null:{distance:u,point:yr.clone(),object:i}}function Tr(i,e,t,n,r,s,o,a,c,u){i.getVertexPosition(a,xr),i.getVertexPosition(c,Mr),i.getVertexPosition(u,Sr);const l=Zu(i,e,t,n,xr,Mr,Sr,ya);if(l){const d=new N;Jt.getBarycoord(ya,xr,Mr,Sr,d),r&&(l.uv=Jt.getInterpolatedAttribute(r,a,c,u,d,new ze)),s&&(l.uv1=Jt.getInterpolatedAttribute(s,a,c,u,d,new ze)),o&&(l.normal=Jt.getInterpolatedAttribute(o,a,c,u,d,new N),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:c,c:u,normal:new N,materialIndex:0};Jt.getNormal(xr,Mr,Sr,f.normal),l.face=f,l.barycoord=d}return l}class ve extends Xt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],l=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(d,2));function _(v,p,h,y,T,S,L,A,b,P,E){const x=S/b,R=L/P,F=S/2,O=L/2,W=A/2,X=b+1,H=P+1;let Y=0,V=0;const se=new N;for(let he=0;he<H;he++){const Se=he*R-O;for(let Fe=0;Fe<X;Fe++){const et=Fe*x-F;se[v]=et*y,se[p]=Se*T,se[h]=W,u.push(se.x,se.y,se.z),se[v]=0,se[p]=0,se[h]=A>0?1:-1,l.push(se.x,se.y,se.z),d.push(Fe/b),d.push(1-he/P),Y+=1}}for(let he=0;he<P;he++)for(let Se=0;Se<b;Se++){const Fe=f+Se+X*he,et=f+Se+X*(he+1),K=f+(Se+1)+X*(he+1),te=f+(Se+1)+X*he;c.push(Fe,et,te),c.push(et,K,te),V+=6}a.addGroup(m,V,E),m+=V,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ve(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const r in n)e[r]=n[r]}return e}function $u(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const ju={clone:Ri,merge:Rt};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=$u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ic extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new N,Ta=new ze,wa=new ze;class kt extends Ic{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Ta,wa),t.subVectors(wa,Ta)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,ui=1;class eh extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(li,ui,e,t);r.layers=this.layers,this.add(r);const s=new kt(li,ui,e,t);s.layers=this.layers,this.add(s);const o=new kt(li,ui,e,t);o.layers=this.layers,this.add(o);const a=new kt(li,ui,e,t);a.layers=this.layers,this.add(a);const c=new kt(li,ui,e,t);c.layers=this.layers,this.add(c);const u=new kt(li,ui,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const u of t)this.remove(u);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,u,l]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(d,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Uc extends Lt{constructor(e,t,n,r,s,o,a,c,u,l){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,n,r,s,o,a,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Uc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ve(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:bn});s.uniforms.tEquirect.value=t;const o=new Z(r,s),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=rn),new eh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class ht extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nh={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),h=this._getHandJoint(u,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const l=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=l.position.distanceTo(d.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nh)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ih extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ss=new N,rh=new N,sh=new De;class Hn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ss.subVectors(n,t).cross(rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ss),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),r=this.coplanarPoint(Ss).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new No,wr=new N;class Oo{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],u=r[4],l=r[5],d=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],h=r[12],y=r[13],T=r[14],S=r[15];if(n[0].setComponents(c-s,f-u,p-m,S-h).normalize(),n[1].setComponents(c+s,f+u,p+m,S+h).normalize(),n[2].setComponents(c+o,f+l,p+_,S+y).normalize(),n[3].setComponents(c-o,f-l,p-_,S-y).normalize(),n[4].setComponents(c-a,f-d,p-v,S-T).normalize(),t===gn)n[5].setComponents(c+a,f+d,p+v,S+T).normalize();else if(t===Br)n[5].setComponents(a,d,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(wr.x=r.normal.x>0?e.max.x:e.min.x,wr.y=r.normal.y>0?e.max.y:e.min.y,wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nc extends Lt{constructor(e,t,n,r,s,o,a,c,u,l=gi){if(l!==gi&&l!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===gi&&(n=Kn),n===void 0&&l===Ai&&(n=wi),super(null,r,s,o,a,c,l,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pt extends Xt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const l=[],d=[],f=[],m=[];let _=0;const v=[],p=n/2;let h=0;y(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(l),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(m,2));function y(){const S=new N,L=new N;let A=0;const b=(t-e)/n;for(let P=0;P<=s;P++){const E=[],x=P/s,R=x*(t-e)+e;for(let F=0;F<=r;F++){const O=F/r,W=O*c+a,X=Math.sin(W),H=Math.cos(W);L.x=R*X,L.y=-x*n+p,L.z=R*H,d.push(L.x,L.y,L.z),S.set(X,b,H).normalize(),f.push(S.x,S.y,S.z),m.push(O,1-x),E.push(_++)}v.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const x=v[E][P],R=v[E+1][P],F=v[E+1][P+1],O=v[E][P+1];(e>0||E!==0)&&(l.push(x,R,O),A+=3),(t>0||E!==s-1)&&(l.push(R,F,O),A+=3)}u.addGroup(h,A,0),h+=A}function T(S){const L=_,A=new ze,b=new N;let P=0;const E=S===!0?e:t,x=S===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),_++;const R=_;for(let F=0;F<=r;F++){const W=F/r*c+a,X=Math.cos(W),H=Math.sin(W);b.x=E*H,b.y=p*x,b.z=E*X,d.push(b.x,b.y,b.z),f.push(0,x,0),A.x=X*.5+.5,A.y=H*.5*x+.5,m.push(A.x,A.y),_++}for(let F=0;F<r;F++){const O=L+F,W=R+F;S===!0?l.push(W,W+1,O):l.push(W+1,W,O),P+=3}u.addGroup(h,P,S===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends pt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Bo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zo extends Xt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),u(n),l(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new N,S=new N,L=new N;for(let A=0;A<t.length;A+=3)m(t[A+0],T),m(t[A+1],S),m(t[A+2],L),c(T,S,L,y)}function c(y,T,S,L){const A=L+1,b=[];for(let P=0;P<=A;P++){b[P]=[];const E=y.clone().lerp(S,P/A),x=T.clone().lerp(S,P/A),R=A-P;for(let F=0;F<=R;F++)F===0&&P===A?b[P][F]=E:b[P][F]=E.clone().lerp(x,F/R)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const x=Math.floor(E/2);E%2===0?(f(b[P][x+1]),f(b[P+1][x]),f(b[P][x])):(f(b[P][x+1]),f(b[P+1][x+1]),f(b[P+1][x]))}}function u(y){const T=new N;for(let S=0;S<s.length;S+=3)T.x=s[S+0],T.y=s[S+1],T.z=s[S+2],T.normalize().multiplyScalar(y),s[S+0]=T.x,s[S+1]=T.y,s[S+2]=T.z}function l(){const y=new N;for(let T=0;T<s.length;T+=3){y.x=s[T+0],y.y=s[T+1],y.z=s[T+2];const S=p(y)/2/Math.PI+.5,L=h(y)/Math.PI+.5;o.push(S,1-L)}_(),d()}function d(){for(let y=0;y<o.length;y+=6){const T=o[y+0],S=o[y+2],L=o[y+4],A=Math.max(T,S,L),b=Math.min(T,S,L);A>.9&&b<.1&&(T<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function m(y,T){const S=y*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function _(){const y=new N,T=new N,S=new N,L=new N,A=new ze,b=new ze,P=new ze;for(let E=0,x=0;E<s.length;E+=9,x+=6){y.set(s[E+0],s[E+1],s[E+2]),T.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),A.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),L.copy(y).add(T).add(S).divideScalar(3);const R=p(L);v(A,x+0,y,R),v(b,x+2,T,R),v(P,x+4,S,R)}}function v(y,T,S,L){L<0&&y.x===1&&(o[T]=y.x-1),S.x===0&&S.z===0&&(o[T]=L/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.vertices,e.indices,e.radius,e.details)}}class Ho extends zo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ho(e.radius,e.detail)}}class vt extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),u=a+1,l=c+1,d=e/a,f=t/c,m=[],_=[],v=[],p=[];for(let h=0;h<l;h++){const y=h*f-o;for(let T=0;T<u;T++){const S=T*d-s;_.push(S,-y,0),v.push(0,0,1),p.push(T/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<a;y++){const T=y+u*h,S=y+u*(h+1),L=y+1+u*(h+1),A=y+1+u*h;m.push(T,S,A),m.push(S,L,A)}this.setIndex(m),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.width,e.height,e.widthSegments,e.heightSegments)}}class qr extends Xt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],u=[],l=[];let d=e;const f=(t-e)/r,m=new N,_=new ze;for(let v=0;v<=r;v++){for(let p=0;p<=n;p++){const h=s+p/n*o;m.x=d*Math.cos(h),m.y=d*Math.sin(h),c.push(m.x,m.y,m.z),u.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,l.push(_.x,_.y)}d+=f}for(let v=0;v<r;v++){const p=v*(n+1);for(let h=0;h<n;h++){const y=h+p,T=y,S=y+n+1,L=y+n+2,A=y+1;a.push(T,S,A),a.push(S,L,A)}}this.setIndex(a),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hr extends Xt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const l=[],d=new N,f=new N,m=[],_=[],v=[],p=[];for(let h=0;h<=n;h++){const y=[],T=h/n;let S=0;h===0&&o===0?S=.5/t:h===n&&c===Math.PI&&(S=-.5/t);for(let L=0;L<=t;L++){const A=L/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+T*a),d.y=e*Math.cos(o+T*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+T*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(A+S,1-T),y.push(u++)}l.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){const T=l[h][y+1],S=l[h][y],L=l[h+1][y],A=l[h+1][y+1];(h!==0||o>0)&&m.push(T,S,A),(h!==n-1||c<Math.PI)&&m.push(S,L,A)}this.setIndex(m),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Go extends Xt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],u=[],l=new N,d=new N,f=new N;for(let m=0;m<=n;m++)for(let _=0;_<=r;_++){const v=_/r*s,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),l.x=e*Math.cos(v),l.y=e*Math.sin(v),f.subVectors(d,l).normalize(),c.push(f.x,f.y,f.z),u.push(_/r),u.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const v=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,h=(r+1)*(m-1)+_,y=(r+1)*m+_;o.push(v,p,y),o.push(p,h,y)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _e extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oh extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fc extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ch extends Fc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Es=new ct,Aa=new N,ba=new N;class lh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Aa),ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ba),t.updateMatrixWorld(),Es.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Es),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Oc extends Ic{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uh extends lh{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hh extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dh extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Ra(i,e,t,n){const r=fh(n);switch(t){case gc:return i*e;case xc:return i*e;case Mc:return i*e*2;case Sc:return i*e/r.components*r.byteLength;case Po:return i*e/r.components*r.byteLength;case Ec:return i*e*2/r.components*r.byteLength;case Lo:return i*e*2/r.components*r.byteLength;case vc:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case Do:return i*e*4/r.components*r.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qs:case Ks:return Math.max(i,16)*Math.max(e,8)/4;case Xs:case Ys:return Math.max(i,8)*Math.max(e,8)/2;case Zs:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nr:case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yc:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _o:case go:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fh(i){switch(i){case xn:case pc:return{byteLength:1,components:1};case Zi:case mc:case er:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case Kn:case bo:case _n:return{byteLength:4,components:1};case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ph(i){const e=new WeakMap;function t(a,c){const u=a.array,l=a.usage,d=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,l),a.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,u){const l=c.array,d=c.updateRanges;if(i.bindBuffer(u,a),d.length===0)i.bufferSubData(u,0,l);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){const _=d[f],v=d[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){const v=d[m];i.bufferSubData(u,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:r,remove:s,update:o}}var mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_h=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ch=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Uf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ff=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Of=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:mh,alphahash_pars_fragment:_h,alphamap_fragment:gh,alphamap_pars_fragment:vh,alphatest_fragment:xh,alphatest_pars_fragment:Mh,aomap_fragment:Sh,aomap_pars_fragment:Eh,batching_pars_vertex:yh,batching_vertex:Th,begin_vertex:wh,beginnormal_vertex:Ah,bsdfs:bh,iridescence_fragment:Rh,bumpmap_pars_fragment:Ch,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Ih,color_fragment:Uh,color_pars_fragment:Nh,color_pars_vertex:Fh,color_vertex:Oh,common:Bh,cube_uv_reflection_fragment:zh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Vh,emissivemap_fragment:kh,emissivemap_pars_fragment:Wh,colorspace_fragment:Xh,colorspace_pars_fragment:qh,envmap_fragment:Yh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Zh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:ad,envmap_vertex:jh,fog_vertex:Jh,fog_pars_vertex:Qh,fog_fragment:ed,fog_pars_fragment:td,gradientmap_pars_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:rd,lights_lambert_pars_fragment:sd,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:ld,lights_phong_fragment:ud,lights_phong_pars_fragment:hd,lights_physical_fragment:dd,lights_physical_pars_fragment:fd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:_d,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:Ed,map_particle_fragment:yd,map_particle_pars_fragment:Td,metalnessmap_fragment:wd,metalnessmap_pars_fragment:Ad,morphinstance_vertex:bd,morphcolor_vertex:Rd,morphnormal_vertex:Cd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Id,normal_pars_fragment:Ud,normal_pars_vertex:Nd,normal_vertex:Fd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Gd,opaque_fragment:Vd,packing:kd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:qd,dithering_pars_fragment:Yd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:jd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:ef,skinning_pars_vertex:tf,skinning_vertex:nf,skinnormal_vertex:rf,specularmap_fragment:sf,specularmap_pars_fragment:of,tonemapping_fragment:af,tonemapping_pars_fragment:cf,transmission_fragment:lf,transmission_pars_fragment:uf,uv_pars_fragment:hf,uv_pars_vertex:df,uv_vertex:ff,worldpos_vertex:pf,background_vert:mf,background_frag:_f,backgroundCube_vert:gf,backgroundCube_frag:vf,cube_vert:xf,cube_frag:Mf,depth_vert:Sf,depth_frag:Ef,distanceRGBA_vert:yf,distanceRGBA_frag:Tf,equirect_vert:wf,equirect_frag:Af,linedashed_vert:bf,linedashed_frag:Rf,meshbasic_vert:Cf,meshbasic_frag:Pf,meshlambert_vert:Lf,meshlambert_frag:Df,meshmatcap_vert:If,meshmatcap_frag:Uf,meshnormal_vert:Nf,meshnormal_frag:Ff,meshphong_vert:Of,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:Hf,meshtoon_vert:Gf,meshtoon_frag:Vf,points_vert:kf,points_frag:Wf,shadow_vert:Xf,shadow_frag:qf,sprite_vert:Yf,sprite_frag:Kf},ne={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},nn={basic:{uniforms:Rt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Rt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Rt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Rt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Rt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Rt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Rt([ne.points,ne.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Rt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Rt([ne.common,ne.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Rt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Rt([ne.sprite,ne.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Rt([ne.common,ne.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Rt([ne.lights,ne.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};nn.physical={uniforms:Rt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ar={r:0,b:0,g:0},On=new on,Zf=new ct;function $f(i,e,t,n,r,s,o){const a=new Ne(0);let c=s===!0?0:1,u,l,d=null,f=0,m=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function v(T){let S=!1;const L=_(T);L===null?h(a,c):L&&L.isColor&&(h(L,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,S){const L=_(S);L&&(L.isCubeTexture||L.mapping===Xr)?(l===void 0&&(l=new Z(new ve(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ri(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),On.copy(S.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),l.material.uniforms.envMap.value=L,l.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(On)),l.material.toneMapped=Ye.getTransfer(L.colorSpace)!==Qe,(d!==L||f!==L.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=L,f=L.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):L&&L.isTexture&&(u===void 0&&(u=new Z(new vt(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ri(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=L,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(L.colorSpace)!==Qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),u.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function h(T,S){T.getRGB(Ar,Dc(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,S,o)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),c=S,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(a,c)},render:v,addToRenderList:p,dispose:y}}function jf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(x,R,F,O,W){let X=!1;const H=d(O,F,R);s!==H&&(s=H,u(s.object)),X=m(x,O,F,W),X&&_(x,O,F,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(x,R,F,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function l(x){return i.deleteVertexArray(x)}function d(x,R,F){const O=F.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let X=W[R.id];X===void 0&&(X={},W[R.id]=X);let H=X[O];return H===void 0&&(H=f(c()),X[O]=H),H}function f(x){const R=[],F=[],O=[];for(let W=0;W<t;W++)R[W]=0,F[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,R,F,O){const W=s.attributes,X=R.attributes;let H=0;const Y=F.getAttributes();for(const V in Y)if(Y[V].location>=0){const he=W[V];let Se=X[V];if(Se===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function _(x,R,F,O){const W={},X=R.attributes;let H=0;const Y=F.getAttributes();for(const V in Y)if(Y[V].location>=0){let he=X[V];he===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),W[V]=Se,H++}s.attributes=W,s.attributesNum=H,s.index=O}function v(){const x=s.newAttributes;for(let R=0,F=x.length;R<F;R++)x[R]=0}function p(x){h(x,0)}function h(x,R){const F=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;F[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),W[x]!==R&&(i.vertexAttribDivisor(x,R),W[x]=R)}function y(){const x=s.newAttributes,R=s.enabledAttributes;for(let F=0,O=R.length;F<O;F++)R[F]!==x[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function T(x,R,F,O,W,X,H){H===!0?i.vertexAttribIPointer(x,R,F,W,X):i.vertexAttribPointer(x,R,F,O,W,X)}function S(x,R,F,O){v();const W=O.attributes,X=F.getAttributes(),H=R.defaultAttributeValues;for(const Y in X){const V=X[Y];if(V.location>=0){let se=W[Y];if(se===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){const he=se.normalized,Se=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const et=Fe.buffer,K=Fe.type,te=Fe.bytesPerElement,ge=K===i.INT||K===i.UNSIGNED_INT||se.gpuType===bo;if(se.isInterleavedBufferAttribute){const oe=se.data,we=oe.stride,Ke=se.offset;if(oe.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)h(V.location+be,oe.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<V.locationSize;be++)p(V.location+be);i.bindBuffer(i.ARRAY_BUFFER,et);for(let be=0;be<V.locationSize;be++)T(V.location+be,Se/V.locationSize,K,he,we*te,(Ke+Se/V.locationSize*be)*te,ge)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)h(V.location+oe,se.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe);i.bindBuffer(i.ARRAY_BUFFER,et);for(let oe=0;oe<V.locationSize;oe++)T(V.location+oe,Se/V.locationSize,K,he,Se*te,Se/V.locationSize*oe*te,ge)}}else if(H!==void 0){const he=H[Y];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(V.location,he);break;case 3:i.vertexAttrib3fv(V.location,he);break;case 4:i.vertexAttrib4fv(V.location,he);break;default:i.vertexAttrib1fv(V.location,he)}}}}y()}function L(){P();for(const x in n){const R=n[x];for(const F in R){const O=R[F];for(const W in O)l(O[W].object),delete O[W];delete R[F]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const F in R){const O=R[F];for(const W in O)l(O[W].object),delete O[W];delete R[F]}delete n[x.id]}function b(x){for(const R in n){const F=n[R];if(F[x.id]===void 0)continue;const O=F[x.id];for(const W in O)l(O[W].object),delete O[W];delete F[x.id]}}function P(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Jf(i,e,t){let n;function r(u){n=u}function s(u,l){i.drawArrays(n,u,l),t.update(l,n,1)}function o(u,l,d){d!==0&&(i.drawArraysInstanced(n,u,l,d),t.update(l,n,d))}function a(u,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,d);let m=0;for(let _=0;_<d;_++)m+=l[_];t.update(m,n,1)}function c(u,l,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)o(u[_],l[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,l,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=l[v]*f[v];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Qt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==xn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==_n&&!P)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:L,maxSamples:A}}function ep(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Hn,a=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=l(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?l(null):u();else{const y=s?0:n,T=y*4;let S=h.clippingState||null;c.value=S,S=l(_,f,T,m);for(let L=0;L!==T;++L)S[L]=t[L];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(d,f,m,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,_!==!0||p===null){const h=m+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,S=m;T!==v;++T,S+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function tp(i){let e=new WeakMap;function t(o,a){return a===Gs?o.mapping=yi:a===Vs&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gs||a===Vs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new th(c.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const pi=4,Ca=[.125,.215,.35,.446,.526,.582],kn=20,ys=new Oc,Pa=new Ne;let Ts=null,ws=0,As=0,bs=!1;const Gn=(1+Math.sqrt(5))/2,hi=1/Gn,La=[new N(-Gn,hi,0),new N(Gn,hi,0),new N(-hi,0,Gn),new N(hi,0,Gn),new N(0,Gn,-hi),new N(0,Gn,hi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],np=new N;class Da{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=np}=s;Ts=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ts,ws,As),this._renderer.xr.enabled=bs,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ts=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:er,format:Qt,colorSpace:bi,depthBuffer:!1},r=Ia(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(s)),this._blurMaterial=rp(s,e,t)}return r}_compileMaterial(e){const t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,ys)}_sceneToCubeUV(e,t,n,r,s){const c=new kt(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Pa),d.toneMapping=Rn,d.autoClear=!1;const _=new Nt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),v=new Z(new ve,_);let p=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,p=!0):(_.color.copy(Pa),p=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(c.up.set(0,u[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+l[y],s.y,s.z)):T===1?(c.up.set(0,0,u[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+l[y],s.z)):(c.up.set(0,u[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+l[y]));const S=this._cubeSize;br(r,T*S,y>2?S:0,S,S),d.setRenderTarget(r),p&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yi||e.mapping===Ti;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=La[(r-s-1)%La.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new Z(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kn-1),v=s/_,p=isFinite(s)?1+Math.floor(l*v):kn;p>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);const h=[];let y=0;for(let b=0;b<kn;++b){const P=b/v,E=Math.exp(-P*P/2);h.push(E),b===0?y+=E:b<p&&(y+=2*E)}for(let b=0;b<h.length;b++)h[b]=h[b]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const S=this._sizeLods[r],L=3*S*(r>T-pi?r-T+pi:0),A=4*(this._cubeSize-S);br(t,L,A,3*S,2*S),c.setRenderTarget(t),c.render(d,ys)}}function ip(i){const e=[],t=[],n=[];let r=i;const s=i-pi+1+Ca.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-pi?c=Ca[o-i+pi-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),l=-u,d=1+u,f=[l,l,d,l,d,d,l,l,d,d,l,d],m=6,_=6,v=3,p=2,h=1,y=new Float32Array(v*_*m),T=new Float32Array(p*_*m),S=new Float32Array(h*_*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,P=A>2?0:-1,E=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];y.set(E,v*_*A),T.set(f,p*_*A);const x=[A,A,A,A,A,A];S.set(x,h*_*A)}const L=new Xt;L.setAttribute("position",new sn(y,v)),L.setAttribute("uv",new sn(T,p)),L.setAttribute("faceIndex",new sn(S,h)),e.push(L),r>pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ia(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function rp(i,e,t){const n=new Float32Array(kn),r=new N(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ua(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Na(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===Gs||c===Vs,l=c===yi||c===Ti;if(u||l){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Da(i)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return u&&m&&m.height>0||l&&m&&r(m)?(t===null&&(t=new Da(i)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const u=6;for(let l=0;l<u;l++)a[l]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function op(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&zn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ap(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function u(d){const f=[],m=d.index,_=d.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let T=0,S=y.length;T<S;T+=3){const L=y[T+0],A=y[T+1],b=y[T+2];f.push(L,A,A,b,b,L)}}else if(_!==void 0){const y=_.array;v=_.version;for(let T=0,S=y.length/3-1;T<S;T+=3){const L=T+0,A=T+1,b=T+2;f.push(L,A,A,b,b,L)}}else return;const p=new(Ac(f)?Lc:Pc)(f,1);p.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function l(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:l}}function cp(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function u(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,f*o,_),t.update(m,n,_))}function l(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];t.update(p,n,1)}function d(f,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)u(f[h]/o,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,v,0,_);let h=0;for(let y=0;y<_;y++)h+=m[y]*v[y];t.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function lp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function up(i,e,t){const n=new WeakMap,r=new at;function s(o,a,c){const u=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=l!==void 0?l.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let L=a.attributes.position.count*S,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const b=new Float32Array(L*A*4*d),P=new bc(b,L,A,d);P.type=_n,P.needsUpdate=!0;const E=S*4;for(let R=0;R<d;R++){const F=h[R],O=y[R],W=T[R],X=L*A*4*R;for(let H=0;H<F.count;H++){const Y=H*E;_===!0&&(r.fromBufferAttribute(F,H),b[X+Y+0]=r.x,b[X+Y+1]=r.y,b[X+Y+2]=r.z,b[X+Y+3]=0),v===!0&&(r.fromBufferAttribute(O,H),b[X+Y+4]=r.x,b[X+Y+5]=r.y,b[X+Y+6]=r.z,b[X+Y+7]=0),p===!0&&(r.fromBufferAttribute(W,H),b[X+Y+8]=r.x,b[X+Y+9]=r.y,b[X+Y+10]=r.z,b[X+Y+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new ze(L,A)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<u.length;p++)_+=u[p];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function hp(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,l=c.geometry,d=e.get(c,l);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const zc=new Lt,Fa=new Nc(1,1),Hc=new bc,Gc=new Ou,Vc=new Uc,Oa=[],Ba=[],za=new Float32Array(16),Ha=new Float32Array(9),Ga=new Float32Array(4);function Ui(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Oa[r];if(s===void 0&&(s=new Float32Array(r),Oa[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yr(i,e){let t=Ba[e];t===void 0&&(t=new Int32Array(e),Ba[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function _p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Ga.set(n),i.uniformMatrix2fv(this.addr,!1,Ga),_t(t,n)}}function gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Ha.set(n),i.uniformMatrix3fv(this.addr,!1,Ha),_t(t,n)}}function vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;za.set(n),i.uniformMatrix4fv(this.addr,!1,za),_t(t,n)}}function xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Fa.compareFunction=wc,s=Fa):s=zc,t.setTexture2D(e||s,r)}function Rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gc,r)}function Cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vc,r)}function Pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hc,r)}function Lp(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return _p;case 35675:return gp;case 35676:return vp;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return Ep;case 5125:return yp;case 36294:return Tp;case 36295:return wp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Dp(i,e){i.uniform1fv(this.addr,e)}function Ip(i,e){const t=Ui(e,this.size,2);i.uniform2fv(this.addr,t)}function Up(i,e){const t=Ui(e,this.size,3);i.uniform3fv(this.addr,t)}function Np(i,e){const t=Ui(e,this.size,4);i.uniform4fv(this.addr,t)}function Fp(i,e){const t=Ui(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Op(i,e){const t=Ui(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bp(i,e){const t=Ui(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zp(i,e){i.uniform1iv(this.addr,e)}function Hp(i,e){i.uniform2iv(this.addr,e)}function Gp(i,e){i.uniform3iv(this.addr,e)}function Vp(i,e){i.uniform4iv(this.addr,e)}function kp(i,e){i.uniform1uiv(this.addr,e)}function Wp(i,e){i.uniform2uiv(this.addr,e)}function Xp(i,e){i.uniform3uiv(this.addr,e)}function qp(i,e){i.uniform4uiv(this.addr,e)}function Yp(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||zc,s[o])}function Kp(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gc,s[o])}function Zp(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vc,s[o])}function $p(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hc,s[o])}function jp(i){switch(i){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return kp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return $p}}class Jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lp(t.type)}}class Qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jp(t.type)}}class em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function Va(i,e){i.seq.push(e),i.map[e.id]=e}function tm(i,e,t){const n=i.name,r=n.length;for(Rs.lastIndex=0;;){const s=Rs.exec(n),o=Rs.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){Va(t,u===void 0?new Jp(a,i,e):new Qp(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new em(a),Va(t,d)),t=d}}}class Fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);tm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ka(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const nm=37297;let im=0;function rm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wa=new De;function sm(i){Ye._getMatrix(Wa,Ye.workingColorSpace,i);const e=`mat3( ${Wa.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xa(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rm(i.getShaderSource(e),o)}else return r}function om(i,e){const t=sm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function am(i,e){let t;switch(e){case Yl:t="Linear";break;case Kl:t="Reinhard";break;case Zl:t="Cineon";break;case $l:t="ACESFilmic";break;case Jl:t="AgX";break;case Ql:t="Neutral";break;case jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new N;function cm(){Ye.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vi(i){return i!==""}function qa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ya(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(dm,pm)}const fm=new Map;function pm(i,e){let t=Ue[e];if(t===void 0){const n=fm.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vo(t)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(i){return i.replace(mm,_m)}function _m(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Za(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function vm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case Ti:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function Mm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:e="ENVMAP_BLENDING_MULTIPLY";break;case Xl:e="ENVMAP_BLENDING_MIX";break;case ql:e="ENVMAP_BLENDING_ADD";break}return e}function Sm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Em(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=gm(t),u=vm(t),l=xm(t),d=Mm(t),f=Sm(t),m=lm(t),_=um(s),v=r.createProgram();let p,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vi).join(`
`),h.length>0&&(h+=`
`)):(p=[Za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),h=[Za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Rn?am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),cm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),o=vo(o),o=qa(o,t),o=Ya(o,t),a=vo(a),a=qa(a,t),a=Ya(a,t),o=Ka(o),a=Ka(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=y+p+o,S=y+h+a,L=ka(r,r.VERTEX_SHADER,T),A=ka(r,r.FRAGMENT_SHADER,S);r.attachShader(v,L),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(R){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(A).trim();let X=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,A);else{const Y=Xa(r,L,"vertex"),V=Xa(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+Y+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||W==="")&&(H=!1);H&&(R.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:p},fragmentShader:{log:W,prefix:h}})}r.deleteShader(L),r.deleteShader(A),P=new Fr(r,v),E=hm(r,v)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,nm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=im++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let ym=0;class Tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wm(e),t.set(e,n)),n}}class wm{constructor(e){this.id=ym++,this.code=e,this.usedTimes=0}}function Am(i,e,t,n,r,s,o){const a=new Rc,c=new Tm,u=new Set,l=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return u.add(E),E===0?"uv":`uv${E}`}function p(E,x,R,F,O){const W=F.fog,X=O.geometry,H=E.isMeshStandardMaterial?F.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),V=Y&&Y.mapping===Xr?Y.image.height:null,se=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Se=he!==void 0?he.length:0;let Fe=0;X.morphAttributes.position!==void 0&&(Fe=1),X.morphAttributes.normal!==void 0&&(Fe=2),X.morphAttributes.color!==void 0&&(Fe=3);let et,K,te,ge;if(se){const Je=nn[se];et=Je.vertexShader,K=Je.fragmentShader}else et=E.vertexShader,K=E.fragmentShader,c.update(E),te=c.getVertexShaderID(E),ge=c.getFragmentShaderID(E);const oe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ke=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,ut=!!E.map,rt=!!E.matcap,He=!!Y,C=!!E.aoMap,Ft=!!E.lightMap,Ge=!!E.bumpMap,Ve=!!E.normalMap,Ee=!!E.displacementMap,nt=!!E.emissiveMap,Me=!!E.metalnessMap,w=!!E.roughnessMap,g=E.anisotropy>0,B=E.clearcoat>0,$=E.dispersion>0,J=E.iridescence>0,q=E.sheen>0,xe=E.transmission>0,ae=g&&!!E.anisotropyMap,de=B&&!!E.clearcoatMap,We=B&&!!E.clearcoatNormalMap,ee=B&&!!E.clearcoatRoughnessMap,fe=J&&!!E.iridescenceMap,Ae=J&&!!E.iridescenceThicknessMap,Re=q&&!!E.sheenColorMap,pe=q&&!!E.sheenRoughnessMap,ke=!!E.specularMap,Ie=!!E.specularColorMap,tt=!!E.specularIntensityMap,D=xe&&!!E.transmissionMap,ie=xe&&!!E.thicknessMap,k=!!E.gradientMap,j=!!E.alphaMap,le=E.alphaTest>0,ce=!!E.alphaHash,Le=!!E.extensions;let st=Rn;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(st=i.toneMapping);const Et={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:K,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&O.instanceColor!==null,instancingMorph:Ke&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:bi,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:rt,envMap:He,envMapMode:He&&Y.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:Ft,bumpMap:Ge,normalMap:Ve,displacementMap:f&&Ee,emissiveMap:nt,normalMapObjectSpace:Ve&&E.normalMapType===iu,normalMapTangentSpace:Ve&&E.normalMapType===Tc,metalnessMap:Me,roughnessMap:w,anisotropy:g,anisotropyMap:ae,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:We,clearcoatRoughnessMap:ee,dispersion:$,iridescence:J,iridescenceMap:fe,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:ke,specularColorMap:Ie,specularIntensityMap:tt,transmission:xe,transmissionMap:D,thicknessMap:ie,gradientMap:k,opaque:E.transparent===!1&&E.blending===_i&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:le,alphaHash:ce,combine:E.combine,mapUv:ut&&v(E.map.channel),aoMapUv:C&&v(E.aoMap.channel),lightMapUv:Ft&&v(E.lightMap.channel),bumpMapUv:Ge&&v(E.bumpMap.channel),normalMapUv:Ve&&v(E.normalMap.channel),displacementMapUv:Ee&&v(E.displacementMap.channel),emissiveMapUv:nt&&v(E.emissiveMap.channel),metalnessMapUv:Me&&v(E.metalnessMap.channel),roughnessMapUv:w&&v(E.roughnessMap.channel),anisotropyMapUv:ae&&v(E.anisotropyMap.channel),clearcoatMapUv:de&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(E.sheenRoughnessMap.channel),specularMapUv:ke&&v(E.specularMap.channel),specularColorMapUv:Ie&&v(E.specularColorMap.channel),specularIntensityMapUv:tt&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:ie&&v(E.thicknessMap.channel),alphaMapUv:j&&v(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ve||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ut||j),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===jt,flipSided:E.side===Pt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function h(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)x.push(R),x.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(y(x,E),T(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function y(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function T(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const x=_[E.type];let R;if(x){const F=nn[x];R=ju.clone(F.uniforms)}else R=E.uniforms;return R}function L(E,x){let R;for(let F=0,O=l.length;F<O;F++){const W=l[F];if(W.cacheKey===x){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Em(i,x,E,s),l.push(R)),R}function A(E){if(--E.usedTimes===0){const x=l.indexOf(E);l[x]=l[l.length-1],l.pop(),E.destroy()}}function b(E){c.remove(E)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:P}}function bm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $a(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ja(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,_,v,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=p),e++,h}function a(d,f,m,_,v,p){const h=o(d,f,m,_,v,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,f,m,_,v,p){const h=o(d,f,m,_,v,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||Rm),n.length>1&&n.sort(f||$a),r.length>1&&r.sort(f||$a)}function l(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:l,sort:u}}function Cm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ja,i.set(n,[o])):r>=s.length?(o=new ja,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ne};break;case"SpotLight":t={position:new N,direction:new N,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Lm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Dm=0;function Im(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Um(i){const e=new Pm,t=Lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new N);const r=new N,s=new ct,o=new ct;function a(u){let l=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,v=0,p=0,h=0,y=0,T=0,S=0,L=0,A=0,b=0;u.sort(Im);for(let E=0,x=u.length;E<x;E++){const R=u[E],F=R.color,O=R.intensity,W=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)l+=F.r*O,d+=F.g*O,f+=F.b*O;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],O);b++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=H,m++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[v]=H;const Y=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,Y.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[v]=Y.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=X,S++}v++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=H,p++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const Y=R.shadow,V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=R.shadow.matrix,T++}n.point[_]=H,_++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(O),H.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[h]=H,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==h||P.numDirectionalShadows!==y||P.numPointShadows!==T||P.numSpotShadows!==S||P.numSpotMaps!==L||P.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,P.directionalLength=m,P.pointLength=_,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=h,P.numDirectionalShadows=y,P.numPointShadows=T,P.numSpotShadows=S,P.numSpotMaps=L,P.numLightProbes=b,n.version=Dm++)}function c(u,l){let d=0,f=0,m=0,_=0,v=0;const p=l.matrixWorldInverse;for(let h=0,y=u.length;h<y;h++){const T=u[h];if(T.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function Ja(i){const e=new Um(i),t=[],n=[];function r(l){u.camera=l,t.length=0,n.length=0}function s(l){t.push(l)}function o(l){n.push(l)}function a(){e.setup(t)}function c(l){e.setupView(t,l)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Nm(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ja(i),e.set(r,[a])):s>=o.length?(a=new Ja(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bm(i,e,t){let n=new Oo;const r=new ze,s=new ze,o=new at,a=new oh({depthPacking:nu}),c=new ah,u={},l=t.maxTextureSize,d={[Cn]:Pt,[Pt]:Cn,[jt]:jt},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Fm,fragmentShader:Om}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Xt;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Z(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let h=this.type;this.render=function(A,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(bn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=h!==pn&&this.type===pn,W=h===pn&&this.type!==pn;for(let X=0,H=A.length;X<H;X++){const Y=A[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const se=V.getFrameExtents();if(r.multiply(se),s.copy(V.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/se.x),r.x=s.x*se.x,V.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/se.y),r.y=s.y*se.y,V.mapSize.y=s.y)),V.map===null||O===!0||W===!0){const Se=this.type!==pn?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(r.x,r.y,Se),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const he=V.getViewportCount();for(let Se=0;Se<he;Se++){const Fe=V.getViewport(Se);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),F.viewport(o),V.updateMatrices(Y,Se),n=V.getFrustum(),S(b,P,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===pn&&y(V,P),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,x,R)};function y(A,b){const P=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,P,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,P,m,v,null)}function T(A,b,P,E){let x=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=x.uuid,O=b.uuid;let W=u[F];W===void 0&&(W={},u[F]=W);let X=W[O];X===void 0&&(X=x.clone(),W[O]=X,b.addEventListener("dispose",L)),x=X}if(x.visible=b.visible,x.wireframe=b.wireframe,E===pn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=P}return x}function S(A,b,P,E,x){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),W=A.material;if(Array.isArray(W)){const X=O.groups;for(let H=0,Y=X.length;H<Y;H++){const V=X[H],se=W[V.materialIndex];if(se&&se.visible){const he=T(A,se,E,x);A.onBeforeShadow(i,A,b,P,O,he,V),i.renderBufferDirect(P,null,O,he,A,V),A.onAfterShadow(i,A,b,P,O,he,V)}}}else if(W.visible){const X=T(A,W,E,x);A.onBeforeShadow(i,A,b,P,O,X,null),i.renderBufferDirect(P,null,O,X,A,null),A.onAfterShadow(i,A,b,P,O,X,null)}}const F=A.children;for(let O=0,W=F.length;O<W;O++)S(F[O],b,P,E,x)}function L(A){A.target.removeEventListener("dispose",L);for(const P in u){const E=u[P],x=A.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const zm={[Us]:Ns,[Fs]:zs,[Os]:Hs,[Ei]:Bs,[Ns]:Us,[zs]:Fs,[Hs]:Os,[Bs]:Ei};function Hm(i,e){function t(){let D=!1;const ie=new at;let k=null;const j=new at(0,0,0,0);return{setMask:function(le){k!==le&&!D&&(i.colorMask(le,le,le,le),k=le)},setLocked:function(le){D=le},setClear:function(le,ce,Le,st,Et){Et===!0&&(le*=st,ce*=st,Le*=st),ie.set(le,ce,Le,st),j.equals(ie)===!1&&(i.clearColor(le,ce,Le,st),j.copy(ie))},reset:function(){D=!1,k=null,j.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,k=null,j=null,le=null;return{setReversed:function(ce){if(ie!==ce){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const st=le;le=null,this.setClear(st)}ie=ce},getReversed:function(){return ie},setTest:function(ce){ce?oe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ce){k!==ce&&!D&&(i.depthMask(ce),k=ce)},setFunc:function(ce){if(ie&&(ce=zm[ce]),j!==ce){switch(ce){case Us:i.depthFunc(i.NEVER);break;case Ns:i.depthFunc(i.ALWAYS);break;case Fs:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case Os:i.depthFunc(i.EQUAL);break;case Bs:i.depthFunc(i.GEQUAL);break;case zs:i.depthFunc(i.GREATER);break;case Hs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ce}},setLocked:function(ce){D=ce},setClear:function(ce){le!==ce&&(ie&&(ce=1-ce),i.clearDepth(ce),le=ce)},reset:function(){D=!1,k=null,j=null,le=null,ie=!1}}}function r(){let D=!1,ie=null,k=null,j=null,le=null,ce=null,Le=null,st=null,Et=null;return{setTest:function(Je){D||(Je?oe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Je){ie!==Je&&!D&&(i.stencilMask(Je),ie=Je)},setFunc:function(Je,qt,cn){(k!==Je||j!==qt||le!==cn)&&(i.stencilFunc(Je,qt,cn),k=Je,j=qt,le=cn)},setOp:function(Je,qt,cn){(ce!==Je||Le!==qt||st!==cn)&&(i.stencilOp(Je,qt,cn),ce=Je,Le=qt,st=cn)},setLocked:function(Je){D=Je},setClear:function(Je){Et!==Je&&(i.clearStencil(Je),Et=Je)},reset:function(){D=!1,ie=null,k=null,j=null,le=null,ce=null,Le=null,st=null,Et=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,u=new WeakMap;let l={},d={},f=new WeakMap,m=[],_=null,v=!1,p=null,h=null,y=null,T=null,S=null,L=null,A=null,b=new Ne(0,0,0),P=0,E=!1,x=null,R=null,F=null,O=null,W=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Y>=2);let se=null,he={};const Se=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),et=new at().fromArray(Se),K=new at().fromArray(Fe);function te(D,ie,k,j){const le=new Uint8Array(4),ce=i.createTexture();i.bindTexture(D,ce),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<k;Le++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ie+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ce}const ge={};ge[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Ei),Ge(!1),Ve(ta),oe(i.CULL_FACE),C(bn);function oe(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function we(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Ke(D,ie){return d[D]!==ie?(i.bindFramebuffer(D,ie),d[D]=ie,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function be(D,ie){let k=m,j=!1;if(D){k=f.get(ie),k===void 0&&(k=[],f.set(ie,k));const le=D.textures;if(k.length!==le.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Le=le.length;ce<Le;ce++)k[ce]=i.COLOR_ATTACHMENT0+ce;k.length=le.length,j=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,j=!0);j&&i.drawBuffers(k)}function ut(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const rt={[Vn]:i.FUNC_ADD,[Rl]:i.FUNC_SUBTRACT,[Cl]:i.FUNC_REVERSE_SUBTRACT};rt[Pl]=i.MIN,rt[Ll]=i.MAX;const He={[Dl]:i.ZERO,[Il]:i.ONE,[Ul]:i.SRC_COLOR,[Ds]:i.SRC_ALPHA,[Hl]:i.SRC_ALPHA_SATURATE,[Bl]:i.DST_COLOR,[Fl]:i.DST_ALPHA,[Nl]:i.ONE_MINUS_SRC_COLOR,[Is]:i.ONE_MINUS_SRC_ALPHA,[zl]:i.ONE_MINUS_DST_COLOR,[Ol]:i.ONE_MINUS_DST_ALPHA,[Gl]:i.CONSTANT_COLOR,[Vl]:i.ONE_MINUS_CONSTANT_COLOR,[kl]:i.CONSTANT_ALPHA,[Wl]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,ie,k,j,le,ce,Le,st,Et,Je){if(D===bn){v===!0&&(we(i.BLEND),v=!1);return}if(v===!1&&(oe(i.BLEND),v=!0),D!==bl){if(D!==p||Je!==E){if((h!==Vn||S!==Vn)&&(i.blendEquation(i.FUNC_ADD),h=Vn,S=Vn),Je)switch(D){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.ONE,i.ONE);break;case ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,L=null,A=null,b.set(0,0,0),P=0,p=D,E=Je}return}le=le||ie,ce=ce||k,Le=Le||j,(ie!==h||le!==S)&&(i.blendEquationSeparate(rt[ie],rt[le]),h=ie,S=le),(k!==y||j!==T||ce!==L||Le!==A)&&(i.blendFuncSeparate(He[k],He[j],He[ce],He[Le]),y=k,T=j,L=ce,A=Le),(st.equals(b)===!1||Et!==P)&&(i.blendColor(st.r,st.g,st.b,Et),b.copy(st),P=Et),p=D,E=!1}function Ft(D,ie){D.side===jt?we(i.CULL_FACE):oe(i.CULL_FACE);let k=D.side===Pt;ie&&(k=!k),Ge(k),D.blending===_i&&D.transparent===!1?C(bn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function Ve(D){D!==wl?(oe(i.CULL_FACE),D!==R&&(D===ta?i.cullFace(i.BACK):D===Al?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),R=D}function Ee(D){D!==F&&(H&&i.lineWidth(D),F=D)}function nt(D,ie,k){D?(oe(i.POLYGON_OFFSET_FILL),(O!==ie||W!==k)&&(i.polygonOffset(ie,k),O=ie,W=k)):we(i.POLYGON_OFFSET_FILL)}function Me(D){D?oe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+X-1),se!==D&&(i.activeTexture(D),se=D)}function g(D,ie,k){k===void 0&&(se===null?k=i.TEXTURE0+X-1:k=se);let j=he[k];j===void 0&&(j={type:void 0,texture:void 0},he[k]=j),(j.type!==D||j.texture!==ie)&&(se!==k&&(i.activeTexture(k),se=k),i.bindTexture(D,ie||ge[D]),j.type=D,j.texture=ie)}function B(){const D=he[se];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){et.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function pe(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function ke(D,ie){let k=u.get(ie);k===void 0&&(k=new WeakMap,u.set(ie,k));let j=k.get(D);j===void 0&&(j=i.getUniformBlockIndex(ie,D.name),k.set(D,j))}function Ie(D,ie){const j=u.get(ie).get(D);c.get(ie)!==j&&(i.uniformBlockBinding(ie,j,D.__bindingPointIndex),c.set(ie,j))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},se=null,he={},d={},f=new WeakMap,m=[],_=null,v=!1,p=null,h=null,y=null,T=null,S=null,L=null,A=null,b=new Ne(0,0,0),P=0,E=!1,x=null,R=null,F=null,O=null,W=null,et.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:we,bindFramebuffer:Ke,drawBuffers:be,useProgram:ut,setBlending:C,setMaterial:Ft,setFlipSided:Ge,setCullFace:Ve,setLineWidth:Ee,setPolygonOffset:nt,setScissorTest:Me,activeTexture:w,bindTexture:g,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:fe,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:Ie,texStorage2D:We,texStorage3D:ee,texSubImage2D:q,texSubImage3D:xe,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Re,viewport:pe,reset:tt}}function Gm(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ze,l=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,g){return m?new OffscreenCanvas(w,g):zr("canvas")}function v(w,g,B){let $=1;const J=Me(w);if((J.width>B||J.height>B)&&($=B/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor($*J.width),xe=Math.floor($*J.height);d===void 0&&(d=_(q,xe));const ae=g?_(q,xe):d;return ae.width=q,ae.height=xe,ae.getContext("2d").drawImage(w,0,0,q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+xe+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function p(w){return w.generateMipmaps}function h(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,g,B,$,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=g;if(g===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),g===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),g===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),g===i.RGBA){const xe=J?Or:Ye.getTransfer($);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=xe===Qe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(w,g){let B;return w?g===null||g===Kn||g===wi?B=i.DEPTH24_STENCIL8:g===_n?B=i.DEPTH32F_STENCIL8:g===Zi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Kn||g===wi?B=i.DEPTH_COMPONENT24:g===_n?B=i.DEPTH_COMPONENT32F:g===Zi&&(B=i.DEPTH_COMPONENT16),B}function L(w,g){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function A(w){const g=w.target;g.removeEventListener("dispose",A),P(g),g.isVideoTexture&&l.delete(g)}function b(w){const g=w.target;g.removeEventListener("dispose",b),x(g)}function P(w){const g=n.get(w);if(g.__webglInit===void 0)return;const B=w.source,$=f.get(B);if($){const J=$[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(w),Object.keys($).length===0&&f.delete(B)}n.remove(w)}function E(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const B=w.source,$=f.get(B);delete $[g.__cacheKey],o.memory.textures--}function x(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let J=0;J<g.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[$][J]);else i.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)i.deleteFramebuffer(g.__webglFramebuffer[$]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=w.textures;for(let $=0,J=B.length;$<J;$++){const q=n.get(B[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(w)}let R=0;function F(){R=0}function O(){const w=R;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),R+=1,w}function W(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function X(w,g){const B=n.get(w);if(w.isVideoTexture&&Ee(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,w,g);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function H(w,g){const B=n.get(w);if(w.version>0&&B.__version!==w.version){K(B,w,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function Y(w,g){const B=n.get(w);if(w.version>0&&B.__version!==w.version){K(B,w,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function V(w,g){const B=n.get(w);if(w.version>0&&B.__version!==w.version){te(B,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const se={[ks]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},he={[en]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[es]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},Se={[ru]:i.NEVER,[uu]:i.ALWAYS,[su]:i.LESS,[wc]:i.LEQUAL,[ou]:i.EQUAL,[lu]:i.GEQUAL,[au]:i.GREATER,[cu]:i.NOTEQUAL};function Fe(w,g){if(g.type===_n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===rn||g.magFilter===es||g.magFilter===cr||g.magFilter===qn||g.minFilter===rn||g.minFilter===es||g.minFilter===cr||g.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,se[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,se[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,se[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,he[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===en||g.minFilter!==cr&&g.minFilter!==qn||g.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function et(w,g){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",A));const $=g.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const q=W(g);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[q].usedTimes++;const xe=J[w.__cacheKey];xe!==void 0&&(J[w.__cacheKey].usedTimes--,xe.usedTimes===0&&E(g)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return B}function K(w,g,B){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);const J=et(w,g),q=g.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+B);const xe=n.get(q);if(q.version!==xe.__version||J===!0){t.activeTexture(i.TEXTURE0+B);const ae=Ye.getPrimaries(Ye.workingColorSpace),de=g.colorSpace===An?null:Ye.getPrimaries(g.colorSpace),We=g.colorSpace===An||ae===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ee=v(g.image,!1,r.maxTextureSize);ee=nt(g,ee);const fe=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let Re=T(g.internalFormat,fe,Ae,g.colorSpace,g.isVideoTexture);Fe($,g);let pe;const ke=g.mipmaps,Ie=g.isVideoTexture!==!0,tt=xe.__version===void 0||J===!0,D=q.dataReady,ie=L(g,ee);if(g.isDepthTexture)Re=S(g.format===Ai,g.type),tt&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Re,ee.width,ee.height,0,fe,Ae,null));else if(g.isDataTexture)if(ke.length>0){Ie&&tt&&t.texStorage2D(i.TEXTURE_2D,ie,Re,ke[0].width,ke[0].height);for(let k=0,j=ke.length;k<j;k++)pe=ke[k],Ie?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,pe.width,pe.height,fe,Ae,pe.data):t.texImage2D(i.TEXTURE_2D,k,Re,pe.width,pe.height,0,fe,Ae,pe.data);g.generateMipmaps=!1}else Ie?(tt&&t.texStorage2D(i.TEXTURE_2D,ie,Re,ee.width,ee.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Ae,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Re,ee.width,ee.height,0,fe,Ae,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ie&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Re,ke[0].width,ke[0].height,ee.depth);for(let k=0,j=ke.length;k<j;k++)if(pe=ke[k],g.format!==Qt)if(fe!==null)if(Ie){if(D)if(g.layerUpdates.size>0){const le=Ra(pe.width,pe.height,g.format,g.type);for(const ce of g.layerUpdates){const Le=pe.data.subarray(ce*le/pe.data.BYTES_PER_ELEMENT,(ce+1)*le/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ce,pe.width,pe.height,1,fe,Le)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pe.width,pe.height,ee.depth,fe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Re,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pe.width,pe.height,ee.depth,fe,Ae,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Re,pe.width,pe.height,ee.depth,0,fe,Ae,pe.data)}else{Ie&&tt&&t.texStorage2D(i.TEXTURE_2D,ie,Re,ke[0].width,ke[0].height);for(let k=0,j=ke.length;k<j;k++)pe=ke[k],g.format!==Qt?fe!==null?Ie?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,pe.width,pe.height,fe,Ae,pe.data):t.texImage2D(i.TEXTURE_2D,k,Re,pe.width,pe.height,0,fe,Ae,pe.data)}else if(g.isDataArrayTexture)if(Ie){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Re,ee.width,ee.height,ee.depth),D)if(g.layerUpdates.size>0){const k=Ra(ee.width,ee.height,g.format,g.type);for(const j of g.layerUpdates){const le=ee.data.subarray(j*k/ee.data.BYTES_PER_ELEMENT,(j+1)*k/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,fe,Ae,le)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Ae,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,fe,Ae,ee.data);else if(g.isData3DTexture)Ie?(tt&&t.texStorage3D(i.TEXTURE_3D,ie,Re,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Ae,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,fe,Ae,ee.data);else if(g.isFramebufferTexture){if(tt)if(Ie)t.texStorage2D(i.TEXTURE_2D,ie,Re,ee.width,ee.height);else{let k=ee.width,j=ee.height;for(let le=0;le<ie;le++)t.texImage2D(i.TEXTURE_2D,le,Re,k,j,0,fe,Ae,null),k>>=1,j>>=1}}else if(ke.length>0){if(Ie&&tt){const k=Me(ke[0]);t.texStorage2D(i.TEXTURE_2D,ie,Re,k.width,k.height)}for(let k=0,j=ke.length;k<j;k++)pe=ke[k],Ie?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,fe,Ae,pe):t.texImage2D(i.TEXTURE_2D,k,Re,fe,Ae,pe);g.generateMipmaps=!1}else if(Ie){if(tt){const k=Me(ee);t.texStorage2D(i.TEXTURE_2D,ie,Re,k.width,k.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ae,ee)}else t.texImage2D(i.TEXTURE_2D,0,Re,fe,Ae,ee);p(g)&&h($),xe.__version=q.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function te(w,g,B){if(g.image.length!==6)return;const $=et(w,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const q=n.get(J);if(J.version!==q.__version||$===!0){t.activeTexture(i.TEXTURE0+B);const xe=Ye.getPrimaries(Ye.workingColorSpace),ae=g.colorSpace===An?null:Ye.getPrimaries(g.colorSpace),de=g.colorSpace===An||xe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const We=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!We&&!ee?fe[j]=v(g.image[j],!0,r.maxCubemapSize):fe[j]=ee?g.image[j].image:g.image[j],fe[j]=nt(g,fe[j]);const Ae=fe[0],Re=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),ke=T(g.internalFormat,Re,pe,g.colorSpace),Ie=g.isVideoTexture!==!0,tt=q.__version===void 0||$===!0,D=J.dataReady;let ie=L(g,Ae);Fe(i.TEXTURE_CUBE_MAP,g);let k;if(We){Ie&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,ke,Ae.width,Ae.height);for(let j=0;j<6;j++){k=fe[j].mipmaps;for(let le=0;le<k.length;le++){const ce=k[le];g.format!==Qt?Re!==null?Ie?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,ke,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,ce.width,ce.height,Re,pe,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,ke,ce.width,ce.height,0,Re,pe,ce.data)}}}else{if(k=g.mipmaps,Ie&&tt){k.length>0&&ie++;const j=Me(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,ke,j.width,j.height)}for(let j=0;j<6;j++)if(ee){Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,Re,pe,fe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,fe[j].width,fe[j].height,0,Re,pe,fe[j].data);for(let le=0;le<k.length;le++){const Le=k[le].image[j].image;Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Le.width,Le.height,Re,pe,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,ke,Le.width,Le.height,0,Re,pe,Le.data)}}else{Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Re,pe,fe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,Re,pe,fe[j]);for(let le=0;le<k.length;le++){const ce=k[le];Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Re,pe,ce.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,ke,Re,pe,ce.image[j])}}}p(g)&&h(i.TEXTURE_CUBE_MAP),q.__version=J.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ge(w,g,B,$,J,q){const xe=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),de=T(B.internalFormat,xe,ae,B.colorSpace),We=n.get(g),ee=n.get(B);if(ee.__renderTarget=g,!We.__hasExternalTextures){const fe=Math.max(1,g.width>>q),Ae=Math.max(1,g.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,de,fe,Ae,g.depth,0,xe,ae,null):t.texImage2D(J,q,de,fe,Ae,0,xe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,ee.__webglTexture,0,Ge(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,ee.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(w,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const $=g.depthTexture,J=$&&$.isDepthTexture?$.type:null,q=S(g.stencilBuffer,J),xe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Ge(g);Ve(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,q,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,q,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,w)}else{const $=g.textures;for(let J=0;J<$.length;J++){const q=$[J],xe=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),de=T(q.internalFormat,xe,ae,q.colorSpace),We=Ge(g);B&&Ve(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,de,g.width,g.height):Ve(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,de,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,de,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(g.depthTexture);$.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);const J=$.__webglTexture,q=Ge(g);if(g.depthTexture.format===gi)Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===Ai)Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ke(w){const g=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=$}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");we(g.__webglFramebuffer,w)}else if(B){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=i.createRenderbuffer(),oe(g.__webglDepthbuffer[$],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),oe(g.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(w,g,B){const $=n.get(w);g!==void 0&&ge($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ke(w)}function ut(w){const g=w.texture,B=n.get(w),$=n.get(g);w.addEventListener("dispose",b);const J=w.textures,q=w.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let de=0;de<g.mipmaps.length;de++)B.__webglFramebuffer[ae][de]=i.createFramebuffer()}else B.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)B.__webglFramebuffer[ae]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ae=0,de=J.length;ae<de;ae++){const We=n.get(J[ae]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ve(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const de=J[ae];B.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const We=s.convert(de.format,de.colorSpace),ee=s.convert(de.type),fe=T(de.internalFormat,We,ee,de.colorSpace,w.isXRRenderTarget===!0),Ae=Ge(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,fe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)ge(B.__webglFramebuffer[ae][de],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else ge(B.__webglFramebuffer[ae],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(g)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ae=0,de=J.length;ae<de;ae++){const We=J[ae],ee=n.get(We);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Fe(i.TEXTURE_2D,We),ge(B.__webglFramebuffer,w,We,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),p(We)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Fe(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)ge(B.__webglFramebuffer[de],w,g,i.COLOR_ATTACHMENT0,ae,de);else ge(B.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,ae,0);p(g)&&h(ae),t.unbindTexture()}w.depthBuffer&&Ke(w)}function rt(w){const g=w.textures;for(let B=0,$=g.length;B<$;B++){const J=g[B];if(p(J)){const q=y(w),xe=n.get(J).__webglTexture;t.bindTexture(q,xe),h(q),t.unbindTexture()}}}const He=[],C=[];function Ft(w){if(w.samples>0){if(Ve(w)===!1){const g=w.textures,B=w.width,$=w.height;let J=i.COLOR_BUFFER_BIT;const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(w),ae=g.length>1;if(ae)for(let de=0;de<g.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<g.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const We=n.get(g[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,J,i.NEAREST),c===!0&&(He.length=0,C.length=0,He.push(i.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(He.push(q),C.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<g.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const We=n.get(g[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Ge(w){return Math.min(r.maxSamples,w.samples)}function Ve(w){const g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ee(w){const g=o.render.frame;l.get(w)!==g&&(l.set(w,g),w.update())}function nt(w,g){const B=w.colorSpace,$=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==bi&&B!==An&&(Ye.getTransfer(B)===Qe?($!==Qt||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function Me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=be,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ve}function Vm(i,e){function t(n,r=An){let s;const o=Ye.getTransfer(r);if(n===xn)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.BYTE;if(n===mc)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===bo)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===er)return i.HALF_FLOAT;if(n===gc)return i.ALPHA;if(n===vc)return i.RGB;if(n===Qt)return i.RGBA;if(n===xc)return i.LUMINANCE;if(n===Mc)return i.LUMINANCE_ALPHA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Sc)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===Ec)return i.RG;if(n===Lo)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ir||n===Ur)if(o===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Lr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Lr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xs||n===qs||n===Ys||n===Ks)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ys)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zs||n===$s||n===js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zs||n===$s)return o===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===js)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Js||n===Qs||n===eo||n===to||n===no||n===io||n===ro||n===so||n===oo||n===ao||n===co||n===lo||n===uo||n===ho)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Js)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===fo||n===po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Nr)return o===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===mo||n===_o||n===go)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===go)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Lt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:km,fragmentShader:Wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qm extends Di{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,l=null,d=null,f=null,m=null,_=null;const v=new Xm,p=t.getContextAttributes();let h=null,y=null;const T=[],S=[],L=new ze;let A=null;const b=new kt;b.viewport=new at;const P=new kt;P.viewport=new at;const E=[b,P],x=new dh;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=T[K];return te===void 0&&(te=new Ms,T[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=T[K];return te===void 0&&(te=new Ms,T[K]=te),te.getGripSpace()},this.getHand=function(K){let te=T[K];return te===void 0&&(te=new Ms,T[K]=te),te.getHandSpace()};function O(K){const te=S.indexOf(K.inputSource);if(te===-1)return;const ge=T[te];ge!==void 0&&(ge.update(K.inputSource,K.frame,u||o),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",X);for(let K=0;K<T.length;K++){const te=S[K];te!==null&&(S[K]=null,T[K].disconnect(te))}R=null,F=null,v.reset(),e.setRenderTarget(h),m=null,f=null,d=null,r=null,y=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,oe=null,we=null;p.depth&&(we=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=p.stencil?Ai:gi,oe=p.stencil?wi:Kn);const Ke={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Zn(f.textureWidth,f.textureHeight,{format:Qt,type:xn,depthTexture:new Nc(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Zn(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(K){for(let te=0;te<K.removed.length;te++){const ge=K.removed[te],oe=S.indexOf(ge);oe>=0&&(S[oe]=null,T[oe].disconnect(ge))}for(let te=0;te<K.added.length;te++){const ge=K.added[te];let oe=S.indexOf(ge);if(oe===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=S.length){S.push(ge),oe=Ke;break}else if(S[Ke]===null){S[Ke]=ge,oe=Ke;break}if(oe===-1)break}const we=T[oe];we&&we.connect(ge)}}const H=new N,Y=new N;function V(K,te,ge){H.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ge.matrixWorld);const oe=H.distanceTo(Y),we=te.projectionMatrix.elements,Ke=ge.projectionMatrix.elements,be=we[14]/(we[10]-1),ut=we[14]/(we[10]+1),rt=(we[9]+1)/we[5],He=(we[9]-1)/we[5],C=(we[8]-1)/we[0],Ft=(Ke[8]+1)/Ke[0],Ge=be*C,Ve=be*Ft,Ee=oe/(-C+Ft),nt=Ee*-C;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(Ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Me=be+Ee,w=ut+Ee,g=Ge-nt,B=Ve+(oe-nt),$=rt*ut/w*Me,J=He*ut/w*Me;K.projectionMatrix.makePerspective(g,B,$,J,Me,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,ge=K.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),x.near=P.near=b.near=te,x.far=P.far=b.far=ge,(R!==x.near||F!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,F=x.far),b.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,x.layers.mask=b.layers.mask|P.layers.mask;const oe=K.parent,we=x.cameras;se(x,oe);for(let Ke=0;Ke<we.length;Ke++)se(we[Ke],oe);we.length===2?V(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),he(K,x,oe)};function he(K,te,ge){ge===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$i*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Se=null;function Fe(K,te){if(l=te.getViewerPose(u||o),_=te,l!==null){const ge=l.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let oe=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let be=0;be<ge.length;be++){const ut=ge[be];let rt=null;if(m!==null)rt=m.getViewport(ut);else{const C=d.getViewSubImage(f,ut);rt=C.viewport,be===0&&(e.setRenderTargetTextures(y,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(y))}let He=E[be];He===void 0&&(He=new kt,He.layers.enable(be),He.viewport=new at,E[be]=He),He.matrix.fromArray(ut.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ut.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(rt.x,rt.y,rt.width,rt.height),be===0&&(x.matrix.copy(He.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(He)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const be=d.getDepthInformation(ge[0]);be&&be.isValid&&be.texture&&v.init(e,be,r.renderState)}}for(let ge=0;ge<T.length;ge++){const oe=S[ge],we=T[ge];oe!==null&&we!==void 0&&we.update(oe,te,u||o)}Se&&Se(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const et=new Bc;et.setAnimationLoop(Fe),this.setAnimationLoop=function(K){Se=K},this.dispose=function(){}}}const Bn=new on,Ym=new ct;function Km(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Dc(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,y,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),l(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,y,T):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Pt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Pt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=e.get(h),T=y.envMap,S=y.envMapRotation;T&&(p.envMap.value=T,Bn.copy(S),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),p.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Bn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,y,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=T*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const y=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Zm(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){const S=T.program;n.uniformBlockBinding(y,S)}function u(y,T){let S=r[y.id];S===void 0&&(_(y),S=l(y),r[y.id]=S,y.addEventListener("dispose",p));const L=T.program;n.updateUBOMapping(y,L);const A=e.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function l(y){const T=d();y.__bindingPointIndex=T;const S=i.createBuffer(),L=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const T=r[y.id],S=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,b=S.length;A<b;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,x=P.length;E<x;E++){const R=P[E];if(m(R,A,E,L)===!0){const F=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let X=0;X<O.length;X++){const H=O[X],Y=v(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+W,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,T,S,L){const A=y.value,b=T+"_"+S;if(L[b]===void 0)return typeof A=="number"||typeof A=="boolean"?L[b]=A:L[b]=A.clone(),!0;{const P=L[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(y){const T=y.uniforms;let S=0;const L=16;for(let b=0,P=T.length;b<P;b++){const E=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,R=E.length;x<R;x++){const F=E[x],O=Array.isArray(F.value)?F.value:[F.value];for(let W=0,X=O.length;W<X;W++){const H=O[W],Y=v(H),V=S%L,se=V%Y.boundary,he=V+se;S+=se,he!==0&&L-he<Y.storage&&(S+=L-he),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Y.storage}}}const A=S%L;return A>0&&(S+=L-A),y.__size=S,y.__cache={},this}function v(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),T}function p(y){const T=y.target;T.removeEventListener("dispose",p);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:u,dispose:h}}class $m{constructor(e={}){const{canvas:t=Ru(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const y=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Rn,this.toneMappingExposure=1;const S=this;let L=!1,A=0,b=0,P=null,E=-1,x=null;const R=new at,F=new at;let O=null;const W=new Ne(0);let X=0,H=t.width,Y=t.height,V=1,se=null,he=null;const Se=new at(0,0,H,Y),Fe=new at(0,0,H,Y);let et=!1;const K=new Oo;let te=!1,ge=!1;this.transmissionResolutionScale=1;const oe=new ct,we=new ct,Ke=new N,be=new at,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function He(){return P===null?V:1}let C=n;function Ft(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){const I="webgl2";if(C=Ft(I,M),C===null)throw Ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ge,Ve,Ee,nt,Me,w,g,B,$,J,q,xe,ae,de,We,ee,fe,Ae,Re,pe,ke,Ie,tt,D;function ie(){Ge=new op(C),Ge.init(),Ie=new Vm(C,Ge),Ve=new Qf(C,Ge,e,Ie),Ee=new Hm(C,Ge),Ve.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),nt=new lp(C),Me=new bm,w=new Gm(C,Ge,Ee,Me,Ve,Ie,nt),g=new tp(S),B=new sp(S),$=new ph(C),tt=new jf(C,$),J=new ap(C,$,nt,tt),q=new hp(C,J,$,nt),Re=new up(C,Ve,w),ee=new ep(Me),xe=new Am(S,g,B,Ge,Ve,tt,ee),ae=new Km(S,Me),de=new Cm,We=new Nm(Ge),Ae=new $f(S,g,B,Ee,q,m,c),fe=new Bm(S,q,Ve),D=new Zm(C,nt,Ve,Ee),pe=new Jf(C,Ge,nt),ke=new cp(C,Ge,nt),nt.programs=xe.programs,S.capabilities=Ve,S.extensions=Ge,S.properties=Me,S.renderLists=de,S.shadowMap=fe,S.state=Ee,S.info=nt}ie();const k=new qm(S,C);this.xr=k,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(H,Y,!1))},this.getSize=function(M){return M.set(H,Y)},this.setSize=function(M,I,z=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,Y=I,t.width=Math.floor(M*V),t.height=Math.floor(I*V),z===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(H*V,Y*V).floor()},this.setDrawingBufferSize=function(M,I,z){H=M,Y=I,V=z,t.width=Math.floor(M*z),t.height=Math.floor(I*z),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Se)},this.setViewport=function(M,I,z,G){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,I,z,G),Ee.viewport(R.copy(Se).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,I,z,G){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,I,z,G),Ee.scissor(F.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){Ee.setScissorTest(et=M)},this.setOpaqueSort=function(M){se=M},this.setTransparentSort=function(M){he=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,z=!0){let G=0;if(M){let U=!1;if(P!==null){const Q=P.texture.format;U=Q===Do||Q===Lo||Q===Po}if(U){const Q=P.texture.type,re=Q===xn||Q===Kn||Q===Zi||Q===wi||Q===Ro||Q===Co,ue=Ae.getClearColor(),me=Ae.getClearAlpha(),Ce=ue.r,Pe=ue.g,ye=ue.b;re?(_[0]=Ce,_[1]=Pe,_[2]=ye,_[3]=me,C.clearBufferuiv(C.COLOR,0,_)):(v[0]=Ce,v[1]=Pe,v[2]=ye,v[3]=me,C.clearBufferiv(C.COLOR,0,v))}else G|=C.COLOR_BUFFER_BIT}I&&(G|=C.DEPTH_BUFFER_BIT),z&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ae.dispose(),de.dispose(),We.dispose(),Me.dispose(),g.dispose(),B.dispose(),q.dispose(),tt.dispose(),D.dispose(),xe.dispose(),k.dispose(),k.removeEventListener("sessionstart",Ko),k.removeEventListener("sessionend",Zo),Ln.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=nt.autoReset,I=fe.enabled,z=fe.autoUpdate,G=fe.needsUpdate,U=fe.type;ie(),nt.autoReset=M,fe.enabled=I,fe.autoUpdate=z,fe.needsUpdate=G,fe.type=U}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Le(M){const I=M.target;I.removeEventListener("dispose",Le),st(I)}function st(M){Et(M),Me.remove(M)}function Et(M){const I=Me.get(M).programs;I!==void 0&&(I.forEach(function(z){xe.releaseProgram(z)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,z,G,U,Q){I===null&&(I=ut);const re=U.isMesh&&U.matrixWorld.determinant()<0,ue=xl(M,I,z,G,U);Ee.setMaterial(G,re);let me=z.index,Ce=1;if(G.wireframe===!0){if(me=J.getWireframeAttribute(z),me===void 0)return;Ce=2}const Pe=z.drawRange,ye=z.attributes.position;let Xe=Pe.start*Ce,Ze=(Pe.start+Pe.count)*Ce;Q!==null&&(Xe=Math.max(Xe,Q.start*Ce),Ze=Math.min(Ze,(Q.start+Q.count)*Ce)),me!==null?(Xe=Math.max(Xe,0),Ze=Math.min(Ze,me.count)):ye!=null&&(Xe=Math.max(Xe,0),Ze=Math.min(Ze,ye.count));const dt=Ze-Xe;if(dt<0||dt===1/0)return;tt.setup(U,G,ue,z,me);let ot,qe=pe;if(me!==null&&(ot=$.get(me),qe=ke,qe.setIndex(ot)),U.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*He()),qe.setMode(C.LINES)):qe.setMode(C.TRIANGLES);else if(U.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Ee.setLineWidth(Te*He()),U.isLineSegments?qe.setMode(C.LINES):U.isLineLoop?qe.setMode(C.LINE_LOOP):qe.setMode(C.LINE_STRIP)}else U.isPoints?qe.setMode(C.POINTS):U.isSprite&&qe.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)zn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,xt=U._multiDrawCounts,$e=U._multiDrawCount,Yt=me?$.get(me).bytesPerElement:1,jn=Me.get(G).currentProgram.getUniforms();for(let Dt=0;Dt<$e;Dt++)jn.setValue(C,"_gl_DrawID",Dt),qe.render(Te[Dt]/Yt,xt[Dt])}else if(U.isInstancedMesh)qe.renderInstances(Xe,dt,U.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,xt=Math.min(z.instanceCount,Te);qe.renderInstances(Xe,dt,xt)}else qe.render(Xe,dt)};function Je(M,I,z){M.transparent===!0&&M.side===jt&&M.forceSinglePass===!1?(M.side=Pt,M.needsUpdate=!0,ar(M,I,z),M.side=Cn,M.needsUpdate=!0,ar(M,I,z),M.side=jt):ar(M,I,z)}this.compile=function(M,I,z=null){z===null&&(z=M),h=We.get(z),h.init(I),T.push(h),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),M!==z&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const G=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){const ue=Q[re];Je(ue,z,U),G.add(ue)}else Je(Q,z,U),G.add(Q)}),h=T.pop(),G},this.compileAsync=function(M,I,z=null){const G=this.compile(M,I,z);return new Promise(U=>{function Q(){if(G.forEach(function(re){Me.get(re).currentProgram.isReady()&&G.delete(re)}),G.size===0){U(M);return}setTimeout(Q,10)}Ge.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let qt=null;function cn(M){qt&&qt(M)}function Ko(){Ln.stop()}function Zo(){Ln.start()}const Ln=new Bc;Ln.setAnimationLoop(cn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(M){qt=M,k.setAnimationLoop(M),M===null?Ln.stop():Ln.start()},k.addEventListener("sessionstart",Ko),k.addEventListener("sessionend",Zo),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(I),I=k.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,P),h=We.get(M,T.length),h.init(I),T.push(h),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(we),ge=this.localClippingEnabled,te=ee.init(this.clippingPlanes,ge),p=de.get(M,y.length),p.init(),y.push(p),k.enabled===!0&&k.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Jr(Q,I,-1/0,S.sortObjects)}Jr(M,I,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(se,he),rt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,rt&&Ae.addToRenderList(p,M),this.info.render.frame++,te===!0&&ee.beginShadows();const z=h.state.shadowsArray;fe.render(z,M,I),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,U=p.transmissive;if(h.setupLights(),I.isArrayCamera){const Q=I.cameras;if(U.length>0)for(let re=0,ue=Q.length;re<ue;re++){const me=Q[re];jo(G,U,M,me)}rt&&Ae.render(M);for(let re=0,ue=Q.length;re<ue;re++){const me=Q[re];$o(p,M,me,me.viewport)}}else U.length>0&&jo(G,U,M,I),rt&&Ae.render(M),$o(p,M,I);P!==null&&b===0&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(S,M,I),tt.resetDefaultState(),E=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],te===!0&&ee.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Jr(M,I,z,G){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){G&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(we);const re=q.update(M),ue=M.material;ue.visible&&p.push(M,re,ue,z,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const re=q.update(M),ue=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),be.copy(re.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(we)),Array.isArray(ue)){const me=re.groups;for(let Ce=0,Pe=me.length;Ce<Pe;Ce++){const ye=me[Ce],Xe=ue[ye.materialIndex];Xe&&Xe.visible&&p.push(M,re,Xe,z,be.z,ye)}}else ue.visible&&p.push(M,re,ue,z,be.z,null)}}const Q=M.children;for(let re=0,ue=Q.length;re<ue;re++)Jr(Q[re],I,z,G)}function $o(M,I,z,G){const U=M.opaque,Q=M.transmissive,re=M.transparent;h.setupLightsView(z),te===!0&&ee.setGlobalState(S.clippingPlanes,z),G&&Ee.viewport(R.copy(G)),U.length>0&&or(U,I,z),Q.length>0&&or(Q,I,z),re.length>0&&or(re,I,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function jo(M,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new Zn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?er:xn,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Q=h.state.transmissionRenderTarget[G.id],re=G.viewport||R;Q.setSize(re.z*S.transmissionResolutionScale,re.w*S.transmissionResolutionScale);const ue=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(W),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),rt&&Ae.render(z);const me=S.toneMapping;S.toneMapping=Rn;const Ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),te===!0&&ee.setGlobalState(S.clippingPlanes,G),or(M,z,G),w.updateMultisampleRenderTarget(Q),w.updateRenderTargetMipmap(Q),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ye=0,Xe=I.length;ye<Xe;ye++){const Ze=I[ye],dt=Ze.object,ot=Ze.geometry,qe=Ze.material,Te=Ze.group;if(qe.side===jt&&dt.layers.test(G.layers)){const xt=qe.side;qe.side=Pt,qe.needsUpdate=!0,Jo(dt,z,G,ot,qe,Te),qe.side=xt,qe.needsUpdate=!0,Pe=!0}}Pe===!0&&(w.updateMultisampleRenderTarget(Q),w.updateRenderTargetMipmap(Q))}S.setRenderTarget(ue),S.setClearColor(W,X),Ce!==void 0&&(G.viewport=Ce),S.toneMapping=me}function or(M,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,Q=M.length;U<Q;U++){const re=M[U],ue=re.object,me=re.geometry,Ce=G===null?re.material:G,Pe=re.group;ue.layers.test(z.layers)&&Jo(ue,I,z,me,Ce,Pe)}}function Jo(M,I,z,G,U,Q){M.onBeforeRender(S,I,z,G,U,Q),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(S,I,z,G,M,Q),U.transparent===!0&&U.side===jt&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,S.renderBufferDirect(z,I,G,U,M,Q),U.side=Cn,U.needsUpdate=!0,S.renderBufferDirect(z,I,G,U,M,Q),U.side=jt):S.renderBufferDirect(z,I,G,U,M,Q),M.onAfterRender(S,I,z,G,U,Q)}function ar(M,I,z){I.isScene!==!0&&(I=ut);const G=Me.get(M),U=h.state.lights,Q=h.state.shadowsArray,re=U.state.version,ue=xe.getParameters(M,U.state,Q,I,z),me=xe.getProgramCacheKey(ue);let Ce=G.programs;G.environment=M.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(M.isMeshStandardMaterial?B:g).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Le),Ce=new Map,G.programs=Ce);let Pe=Ce.get(me);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===re)return ea(M,ue),Pe}else ue.uniforms=xe.getUniforms(M),M.onBeforeCompile(ue,S),Pe=xe.acquireProgram(ue,me),Ce.set(me,Pe),G.uniforms=ue.uniforms;const ye=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ye.clippingPlanes=ee.uniform),ea(M,ue),G.needsLights=Sl(M),G.lightsStateVersion=re,G.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function Qo(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Fr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function ea(M,I){const z=Me.get(M);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function xl(M,I,z,G,U){I.isScene!==!0&&(I=ut),w.resetTextureUnits();const Q=I.fog,re=G.isMeshStandardMaterial?I.environment:null,ue=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bi,me=(G.isMeshStandardMaterial?B:g).get(G.envMap||re),Ce=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,Ze=!!z.morphAttributes.color;let dt=Rn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=S.toneMapping);const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qe=ot!==void 0?ot.length:0,Te=Me.get(G),xt=h.state.lights;if(te===!0&&(ge===!0||M!==x)){const At=M===x&&G.id===E;ee.setState(G,M,At)}let $e=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==xt.state.version||Te.outputColorSpace!==ue||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==me||G.fog===!0&&Te.fog!==Q||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ee.numPlanes||Te.numIntersection!==ee.numIntersection)||Te.vertexAlphas!==Ce||Te.vertexTangents!==Pe||Te.morphTargets!==ye||Te.morphNormals!==Xe||Te.morphColors!==Ze||Te.toneMapping!==dt||Te.morphTargetsCount!==qe)&&($e=!0):($e=!0,Te.__version=G.version);let Yt=Te.currentProgram;$e===!0&&(Yt=ar(G,I,U));let jn=!1,Dt=!1,Oi=!1;const it=Yt.getUniforms(),Ot=Te.uniforms;if(Ee.useProgram(Yt.program)&&(jn=!0,Dt=!0,Oi=!0),G.id!==E&&(E=G.id,Dt=!0),jn||x!==M){Ee.buffers.depth.getReversed()?(oe.copy(M.projectionMatrix),Pu(oe),Lu(oe),it.setValue(C,"projectionMatrix",oe)):it.setValue(C,"projectionMatrix",M.projectionMatrix),it.setValue(C,"viewMatrix",M.matrixWorldInverse);const Ct=it.map.cameraPosition;Ct!==void 0&&Ct.setValue(C,Ke.setFromMatrixPosition(M.matrixWorld)),Ve.logarithmicDepthBuffer&&it.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&it.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Dt=!0,Oi=!0)}if(U.isSkinnedMesh){it.setOptional(C,U,"bindMatrix"),it.setOptional(C,U,"bindMatrixInverse");const At=U.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),it.setValue(C,"boneTexture",At.boneTexture,w))}U.isBatchedMesh&&(it.setOptional(C,U,"batchingTexture"),it.setValue(C,"batchingTexture",U._matricesTexture,w),it.setOptional(C,U,"batchingIdTexture"),it.setValue(C,"batchingIdTexture",U._indirectTexture,w),it.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&it.setValue(C,"batchingColorTexture",U._colorsTexture,w));const Bt=z.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&Re.update(U,z,Yt),(Dt||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,it.setValue(C,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ot.envMap.value=me,Ot.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(Ot.envMapIntensity.value=I.environmentIntensity),Dt&&(it.setValue(C,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&Ml(Ot,Oi),Q&&G.fog===!0&&ae.refreshFogUniforms(Ot,Q),ae.refreshMaterialUniforms(Ot,G,V,Y,h.state.transmissionRenderTarget[M.id]),Fr.upload(C,Qo(Te),Ot,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fr.upload(C,Qo(Te),Ot,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&it.setValue(C,"center",U.center),it.setValue(C,"modelViewMatrix",U.modelViewMatrix),it.setValue(C,"normalMatrix",U.normalMatrix),it.setValue(C,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const At=G.uniformsGroups;for(let Ct=0,Qr=At.length;Ct<Qr;Ct++){const Dn=At[Ct];D.update(Dn,Yt),D.bind(Dn,Yt)}}return Yt}function Ml(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Sl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,I,z){Me.get(M.texture).__webglTexture=I,Me.get(M.depthTexture).__webglTexture=z;const G=Me.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const z=Me.get(M);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const El=C.createFramebuffer();this.setRenderTarget=function(M,I=0,z=0){P=M,A=I,b=z;let G=!0,U=null,Q=!1,re=!1;if(M){const me=Me.get(M);if(me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(me.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(me.__hasExternalTextures)w.rebindTextures(M,Me.get(M.texture).__webglTexture,Me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ye=M.depthTexture;if(me.__boundDepthTexture!==ye){if(ye!==null&&Me.has(ye)&&(M.width!==ye.image.width||M.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(re=!0);const Pe=Me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?U=Pe[I][z]:U=Pe[I],Q=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?U=Me.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[z]:U=Pe,R.copy(M.viewport),F.copy(M.scissor),O=M.scissorTest}else R.copy(Se).multiplyScalar(V).floor(),F.copy(Fe).multiplyScalar(V).floor(),O=et;if(z!==0&&(U=El),Ee.bindFramebuffer(C.FRAMEBUFFER,U)&&G&&Ee.drawBuffers(M,U),Ee.viewport(R),Ee.scissor(F),Ee.setScissorTest(O),Q){const me=Me.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,z)}else if(re){const me=Me.get(M.texture),Ce=I;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,z,Ce)}else if(M!==null&&z!==0){const me=Me.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(M,I,z,G,U,Q,re){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){Ee.bindFramebuffer(C.FRAMEBUFFER,ue);try{const me=M.texture,Ce=me.format,Pe=me.type;if(!Ve.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-G&&z>=0&&z<=M.height-U&&C.readPixels(I,z,G,U,Ie.convert(Ce),Ie.convert(Pe),Q)}finally{const me=P!==null?Me.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,I,z,G,U,Q,re){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){const me=M.texture,Ce=me.format,Pe=me.type;if(!Ve.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-G&&z>=0&&z<=M.height-U){Ee.bindFramebuffer(C.FRAMEBUFFER,ue);const ye=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),C.readPixels(I,z,G,U,Ie.convert(Ce),Ie.convert(Pe),0);const Xe=P!==null?Me.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,Xe);const Ze=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Cu(C,Ze,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(ye),C.deleteSync(Ze),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,z=0){M.isTexture!==!0&&(zn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-z),U=Math.floor(M.image.width*G),Q=Math.floor(M.image.height*G),re=I!==null?I.x:0,ue=I!==null?I.y:0;w.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,re,ue,U,Q),Ee.unbindTexture()};const yl=C.createFramebuffer(),Tl=C.createFramebuffer();this.copyTextureToTexture=function(M,I,z=null,G=null,U=0,Q=null){M.isTexture!==!0&&(zn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],I=arguments[2],Q=arguments[3]||0,z=null),Q===null&&(U!==0?(zn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let re,ue,me,Ce,Pe,ye,Xe,Ze,dt;const ot=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(z!==null)re=z.max.x-z.min.x,ue=z.max.y-z.min.y,me=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,Pe=z.min.y,ye=z.isBox3?z.min.z:0;else{const Bt=Math.pow(2,-U);re=Math.floor(ot.width*Bt),ue=Math.floor(ot.height*Bt),M.isDataArrayTexture?me=ot.depth:M.isData3DTexture?me=Math.floor(ot.depth*Bt):me=1,Ce=0,Pe=0,ye=0}G!==null?(Xe=G.x,Ze=G.y,dt=G.z):(Xe=0,Ze=0,dt=0);const qe=Ie.convert(I.format),Te=Ie.convert(I.type);let xt;I.isData3DTexture?(w.setTexture3D(I,0),xt=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),xt=C.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),xt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const $e=C.getParameter(C.UNPACK_ROW_LENGTH),Yt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),jn=C.getParameter(C.UNPACK_SKIP_PIXELS),Dt=C.getParameter(C.UNPACK_SKIP_ROWS),Oi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ye);const it=M.isDataArrayTexture||M.isData3DTexture,Ot=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Bt=Me.get(M),At=Me.get(I),Ct=Me.get(Bt.__renderTarget),Qr=Me.get(At.__renderTarget);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,Ct.__webglFramebuffer),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let Dn=0;Dn<me;Dn++)it&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(M).__webglTexture,U,ye+Dn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(I).__webglTexture,Q,dt+Dn)),C.blitFramebuffer(Ce,Pe,re,ue,Xe,Ze,re,ue,C.DEPTH_BUFFER_BIT,C.NEAREST);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||Me.has(M)){const Bt=Me.get(M),At=Me.get(I);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,yl),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,Tl);for(let Ct=0;Ct<me;Ct++)it?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,U,ye+Ct):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,U),Ot?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,At.__webglTexture,Q,dt+Ct):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,At.__webglTexture,Q),U!==0?C.blitFramebuffer(Ce,Pe,re,ue,Xe,Ze,re,ue,C.COLOR_BUFFER_BIT,C.NEAREST):Ot?C.copyTexSubImage3D(xt,Q,Xe,Ze,dt+Ct,Ce,Pe,re,ue):C.copyTexSubImage2D(xt,Q,Xe,Ze,Ce,Pe,re,ue);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ot?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(xt,Q,Xe,Ze,dt,re,ue,me,qe,Te,ot.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(xt,Q,Xe,Ze,dt,re,ue,me,qe,ot.data):C.texSubImage3D(xt,Q,Xe,Ze,dt,re,ue,me,qe,Te,ot):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Xe,Ze,re,ue,qe,Te,ot.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Xe,Ze,ot.width,ot.height,qe,ot.data):C.texSubImage2D(C.TEXTURE_2D,Q,Xe,Ze,re,ue,qe,Te,ot);C.pixelStorei(C.UNPACK_ROW_LENGTH,$e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Yt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,jn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Dt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Oi),Q===0&&I.generateMipmaps&&C.generateMipmap(xt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(M,I,z=null,G=null,U=0){return M.isTexture!==!0&&(zn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0),zn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,z,G,U)},this.initRenderTarget=function(M){Me.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){A=0,b=0,P=null,Ee.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class kc{group;characterMesh;leftArm;rightArm;leftLeg;rightLeg;head;torso;isMoving=!1;animTime=0;constructor(e){this.group=new ht,this.characterMesh=new ht,this.group.add(this.characterMesh);const t=e.style||{},n=new Ne(t.skinColor||"#8d5524"),r=new Ne(t.primaryColor||"#fbc531"),s=new Ne(t.secondaryColor||"#2f3640"),o=new Ne(t.hairColor||"#17120f"),a=t.hair||"short",c=t.hat||"none",u=t.accessory||"none",l=new _e({color:n,roughness:.6}),d=new _e({color:r,roughness:.7}),f=new _e({color:s,roughness:.8}),m=new _e({color:o,roughness:.9}),_=new _e({color:1118481,roughness:.5}),v=new _e({color:2236962,roughness:.6}),p=new _e({color:15965202,metalness:.8,roughness:.2});this.torso=new ht,this.torso.position.y=1.05;const h=new Z(new ve(.5,.6,.28),d);h.castShadow=!0,this.torso.add(h);const y=new Z(new ve(.24,.08,.3),d);y.position.y=.3,this.torso.add(y),this.characterMesh.add(this.torso),this.head=new ht,this.head.position.y=1.55;const T=new Z(new pt(.08,.1,.16,8),l);T.position.y=-.15,this.head.add(T);const S=new Z(new ve(.3,.32,.3),l);S.castShadow=!0,this.head.add(S);const L=new Nt({color:1118481}),A=new Z(new ve(.04,.04,.02),L);A.position.set(-.07,.02,.16);const b=A.clone();if(b.position.x=.07,this.head.add(A),this.head.add(b),a==="afro"){const H=new Z(new Hr(.26,12,12),m);H.position.set(0,.14,-.02),this.head.add(H)}else if(a==="dreads"||a==="braids"){const H=new Z(new ve(.34,.18,.34),m);H.position.y=.14,this.head.add(H);for(let Y=-.12;Y<=.12;Y+=.06){const V=new Z(new pt(.02,.02,.3),m);V.position.set(Y,-.08,-.14),this.head.add(V)}}else if(a!=="bald"){const H=new Z(new ve(.32,.12,.32),m);H.position.y=.14,this.head.add(H)}if(c==="cap"){const H=new Z(new pt(.18,.19,.1,12),v);H.position.y=.2;const Y=new Z(new ve(.26,.02,.16),v);Y.position.set(0,.16,.2),this.head.add(H),this.head.add(Y)}else if(c==="crown"){const H=new Z(new pt(.2,.18,.12,8),p);H.position.y=.22,this.head.add(H)}else if(c==="beanie"){const H=new Z(new Hr(.22,10,10),v);H.scale.set(1,1.2,1),H.position.y=.18,this.head.add(H)}if(u==="glasses"){const H=new Nt({color:328965}),Y=new Z(new ve(.26,.06,.04),H);Y.position.set(0,.02,.17),this.head.add(Y)}else if(u==="earrings"){const H=new Z(new Go(.03,.008,6,12),p);H.position.set(.17,-.02,0),H.rotation.y=Math.PI/2,this.head.add(H)}this.characterMesh.add(this.head),this.leftArm=new ht,this.leftArm.position.set(-.34,1.3,0);const P=new Z(new ve(.14,.55,.16),d);P.position.y=-.22,P.castShadow=!0,this.leftArm.add(P);const E=new Z(new ve(.12,.12,.12),l);E.position.y=-.52,this.leftArm.add(E),this.characterMesh.add(this.leftArm),this.rightArm=new ht,this.rightArm.position.set(.34,1.3,0);const x=new Z(new ve(.14,.55,.16),d);x.position.y=-.22,x.castShadow=!0,this.rightArm.add(x);const R=new Z(new ve(.12,.12,.12),l);R.position.y=-.52,this.rightArm.add(R),this.characterMesh.add(this.rightArm),this.leftLeg=new ht,this.leftLeg.position.set(-.14,.75,0);const F=new Z(new ve(.18,.65,.2),f);F.position.y=-.3,F.castShadow=!0,this.leftLeg.add(F);const O=new Z(new ve(.18,.12,.28),_);O.position.set(0,-.65,.04),O.castShadow=!0,this.leftLeg.add(O),this.characterMesh.add(this.leftLeg),this.rightLeg=new ht,this.rightLeg.position.set(.14,.75,0);const W=new Z(new ve(.18,.65,.2),f);W.position.y=-.3,W.castShadow=!0,this.rightLeg.add(W);const X=new Z(new ve(.18,.12,.28),_);X.position.set(0,-.65,.04),X.castShadow=!0,this.rightLeg.add(X),this.characterMesh.add(this.rightLeg)}updateAnimation(e,t,n=1){if(t){this.animTime+=e*10*n;const r=Math.sin(this.animTime)*.7;this.leftLeg.rotation.x=r,this.rightLeg.rotation.x=-r,this.leftArm.rotation.x=-r*.8,this.rightArm.rotation.x=r*.8,this.torso.position.y=1.05+Math.abs(Math.sin(this.animTime*2))*.04,this.head.position.y=1.55+Math.abs(Math.sin(this.animTime*2))*.04}else{this.animTime+=e*2;const r=Math.sin(this.animTime)*.03;this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftArm.rotation.x=r*.5,this.rightArm.rotation.x=-r*.5,this.torso.position.y=1.05+r,this.head.position.y=1.55+r*1.2}}}const xo="https://start.ng";let Cr=null;const jm={id:0,name:"Lagos Hustler",account:"guest_eko",style:{body:"male",primaryColor:"#fbc531",secondaryColor:"#2f3640",skinColor:"#8d5524",hairColor:"#1e272e",hair:"short",hat:"cap",accessory:"glasses"},face:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="%23fbc531"/><circle cx="32" cy="24" r="14" fill="%238d5524"/><rect x="18" y="42" width="28" height="22" rx="6" fill="%232f3640"/></svg>'};function Wc(){return new URLSearchParams(window.location.search).has("mock")||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"}function Jm(){return Cr||(Cr=new Promise((i,e)=>{const t=document.createElement("iframe");t.src=`${xo}/connect`,t.hidden=!0,t.onload=()=>i(t),t.onerror=e,document.body.append(t)}),Cr)}async function Qm(i,e,t=4e3){if(Wc()){if(i.type==="startng:whoami")return{type:"startng:user",user:null,guest:jm};if(i.type==="startng:score")return{ok:!0,result:{best:1e3,improved:!0,rank:1,stats:i.stats||{score:i.score}}};if(i.type==="startng:leaderboard")return{ok:!0,entries:[{rank:1,player_id:101,name:"Danfo King",color:"#fbc531",score:25e3,stats:{earnings:25e3,deliveries:18,distance_km:42,best_time:140}},{rank:2,player_id:102,name:"Lekki Rider",color:"#4b7bec",score:18400,stats:{earnings:18400,deliveries:12,distance_km:30,best_time:155}}]}}try{const n=await Jm();return new Promise(r=>{const s=Math.random().toString(36).slice(2);let o;const a=u=>{clearTimeout(o),window.removeEventListener("message",c),r(u)};o=window.setTimeout(()=>a(null),t);function c(u){u.origin!==xo||u.source!==n.contentWindow||u.data?.type===e&&u.data.requestId===s&&a(u.data)}window.addEventListener("message",c),n.contentWindow?.postMessage({...i,requestId:s},xo)})}catch(n){return console.warn("start.ng connect unavailable, falling back:",n),null}}function Xc(i={}){const e=i.type||"danfo";return e==="danfo"?e_(i.primaryColor??16236319,i.stripeColor??1315860):e==="keke"?n_(i.primaryColor??16236319):t_(i.primaryColor??3426654)}function e_(i=16236319,e=1315860){const t=new ht,n=new _e({color:i,roughness:.4,metalness:.1}),r=new _e({color:e,roughness:.8}),s=new _e({color:1713455,roughness:.1,metalness:.8}),o=new _e({color:14474721,roughness:.2,metalness:.85}),a=new _e({color:1579290,roughness:.9}),c=new _e({color:16775910,emissive:16771751,emissiveIntensity:1.2}),u=new _e({color:14037041,emissive:12597547,emissiveIntensity:1}),l=new Z(new ve(2.2,.8,4.8),n);l.position.y=.85,l.castShadow=!0,t.add(l);const d=new Z(new ve(2.22,.14,4.82),r);d.position.y=1,t.add(d);const f=new Z(new ve(2.22,.14,4.82),r);f.position.y=1.22,t.add(f);const m=new Z(new ve(2.2,.7,4.8),n);m.position.y=1.7,m.castShadow=!0,t.add(m);const _=new Z(new ve(2,.7,.1),s);_.position.set(0,1.6,2.41),_.rotation.x=-.15,t.add(_);const v=new Z(new ve(1.9,.65,.1),s);v.position.set(0,1.6,-2.41),t.add(v);const p=new Z(new ve(.1,.55,3.8),s);p.position.set(-1.11,1.6,.1),t.add(p);const h=p.clone();h.position.x=1.11,t.add(h);const y=new Z(new ve(2.26,.25,.25),o);y.position.set(0,.5,2.45),t.add(y);const T=y.clone();T.position.z=-2.45,t.add(T);const S=new Z(new ve(.3,.2,.1),c);S.position.set(-.75,.85,2.43),t.add(S);const L=S.clone();L.position.x=.75,t.add(L);const A=new Z(new ve(.2,.3,.08),u);A.position.set(-.8,.9,-2.43),t.add(A);const b=A.clone();b.position.x=.8,t.add(b);const P=new Z(new ve(1.6,.2,.08),new _e({color:1118481,roughness:.9}));P.position.set(0,2.08,2.15),t.add(P);const E=new pt(.4,.4,.26,16),x=[[-1.1,.4,1.4],[1.1,.4,1.4],[-1.1,.4,-1.4],[1.1,.4,-1.4]];for(const R of x){const F=new Z(E,a);F.rotation.z=Math.PI/2,F.position.set(R[0],R[1],R[2]),F.castShadow=!0,t.add(F);const O=new Z(new pt(.2,.2,.28,10),o);O.rotation.z=Math.PI/2,O.position.set(R[0],R[1],R[2]),t.add(O)}return t}function t_(i=2719929){const e=new ht,t=new _e({color:i,roughness:.4,metalness:.2}),n=new _e({color:1713455,roughness:.1,metalness:.8}),r=new _e({color:1579290,roughness:.9}),s=new _e({color:14474721,roughness:.2,metalness:.8}),o=new _e({color:16775910,emissive:16771751,emissiveIntensity:1}),a=new _e({color:14037041,emissive:12597547,emissiveIntensity:1}),c=new Z(new ve(1.9,.55,4.2),t);c.position.y=.65,c.castShadow=!0,e.add(c);const u=new Z(new ve(1.6,.5,2.2),t);u.position.set(0,1.15,-.2),u.castShadow=!0,e.add(u);const l=new Z(new ve(1.5,.45,.08),n);l.position.set(0,1.15,.95),l.rotation.x=-.3,e.add(l);const d=new Z(new ve(1.5,.42,.08),n);d.position.set(0,1.15,-1.35),d.rotation.x=.3,e.add(d);const f=new Z(new ve(.25,.15,.1),o);f.position.set(-.65,.65,2.11),e.add(f);const m=f.clone();m.position.x=.65,e.add(m);const _=new Z(new ve(.25,.15,.1),a);_.position.set(-.65,.65,-2.11),e.add(_);const v=_.clone();v.position.x=.65,e.add(v);const p=new pt(.34,.34,.22,14),h=[[-.95,.34,1.25],[.95,.34,1.25],[-.95,.34,-1.25],[.95,.34,-1.25]];for(const y of h){const T=new Z(p,r);T.rotation.z=Math.PI/2,T.position.set(y[0],y[1],y[2]),T.castShadow=!0,e.add(T);const S=new Z(new pt(.18,.18,.24,8),s);S.rotation.z=Math.PI/2,S.position.set(y[0],y[1],y[2]),e.add(S)}return e}function n_(i=16236319){const e=new ht,t=new _e({color:i,roughness:.5}),n=new _e({color:1315860,roughness:.8}),r=new _e({color:1579290,roughness:.9}),s=new _e({color:1713455,roughness:.1}),o=new _e({color:16775910,emissive:16771751,emissiveIntensity:1}),a=new Z(new ve(1.3,.9,2.2),t);a.position.y=.9,a.castShadow=!0,e.add(a);const c=new Z(new ve(1.35,.15,2.1),n);c.position.y=1.65,c.castShadow=!0,e.add(c);const u=new Z(new ve(1.15,.55,.05),s);u.position.set(0,1.25,.85),u.rotation.x=-.15,e.add(u);const l=new Z(new pt(.12,.12,.1,12),o);l.rotation.x=Math.PI/2,l.position.set(0,.8,1.12),e.add(l);const d=new pt(.28,.28,.16,12),f=new Z(d,r);f.rotation.z=Math.PI/2,f.position.set(0,.28,.85),e.add(f);for(const m of[-.68,.68]){const _=new Z(d,r);_.rotation.z=Math.PI/2,_.position.set(m,.28,-.65),_.castShadow=!0,e.add(_)}return e}const i_=document.getElementById("canvas-container"),r_=document.getElementById("fps-counter"),Be=new ih;Be.background=new Ne(16759388);Be.fog=new Fo(16759388,.008);const xi=new kt(60,window.innerWidth/window.innerHeight,.1,1e3);xi.position.set(0,4,10);const $n=new $m({antialias:!0});$n.setSize(window.innerWidth,window.innerHeight);$n.setPixelRatio(Math.min(window.devicePixelRatio,2));$n.shadowMap.enabled=!0;$n.shadowMap.type=hc;i_.appendChild($n.domElement);const s_=new ch(16772306,4012080,1.2);Be.add(s_);const rr=new hh(16775910,2.2);rr.position.set(30,50,20);rr.castShadow=!0;rr.shadow.mapSize.width=1024;rr.shadow.mapSize.height=1024;Be.add(rr);const o_=new vt(800,800),a_=new _e({color:2236446,roughness:.95}),Kr=new Z(o_,a_);Kr.rotation.x=-Math.PI/2;Kr.position.y=-.02;Kr.receiveShadow=!0;Be.add(Kr);const qc=new _e({color:3026488,roughness:.8}),Yc=new _e({color:10394259,roughness:.85}),Mo=new Nt({color:16236319}),c_=new Nt({color:16119285}),ko=new Z(new vt(20,400),qc);ko.rotation.x=-Math.PI/2;ko.receiveShadow=!0;Be.add(ko);const Zr=new Z(new vt(4,400),Yc);Zr.rotation.x=-Math.PI/2;Zr.position.set(-12,.04,0);Zr.receiveShadow=!0;Be.add(Zr);const $r=new Z(new vt(4,400),Yc);$r.rotation.x=-Math.PI/2;$r.position.set(12,.04,0);$r.receiveShadow=!0;Be.add($r);const Wo=new Z(new vt(.3,400),Mo);Wo.rotation.x=-Math.PI/2;Wo.position.y=.01;Be.add(Wo);const Kc=[];function Wt(i,e,t,n){Kc.push({minX:i-t/2,maxX:i+t/2,minZ:e-n/2,maxZ:e+n/2})}const Ci=[-80,0,80];Ci.forEach(i=>{const e=new Z(new vt(300,16),qc);e.rotation.x=-Math.PI/2,e.position.set(0,.005,i),e.receiveShadow=!0,Be.add(e);const t=new Z(new vt(140,.3),Mo);t.rotation.x=-Math.PI/2,t.position.set(80,.012,i),Be.add(t);const n=new Z(new vt(140,.3),Mo);n.rotation.x=-Math.PI/2,n.position.set(-80,.012,i),Be.add(n);for(let o of[-10.5,10.5])for(let a=-8;a<=8;a+=1.6){const c=new Z(new vt(.8,2.5),c_);c.rotation.x=-Math.PI/2,c.position.set(a,.015,i+o),Be.add(c)}const r=new Z(new pt(.08,.08,4.2,8),new _e({color:4473924}));r.position.set(11.5,2.1,i+9.5),r.castShadow=!0,Be.add(r),Wt(11.5,i+9.5,.3,.3);const s=new Z(new ve(2.4,.6,.1),new _e({color:1793568,roughness:.4}));s.position.set(11.5,3.8,i+9.5),s.castShadow=!0,Be.add(s)});const Zc=[],Mi=new _e({color:2236962,roughness:.8}),l_=new _e({color:16720418,emissive:16711680,emissiveIntensity:2.2}),u_=new _e({color:16763904,emissive:16755200,emissiveIntensity:2.2}),h_=new _e({color:65382,emissive:56644,emissiveIntensity:2.2});function Pr(i,e,t,n,r){const s=new ht;s.position.set(i,0,e),s.rotation.y=t;const o=new Z(new pt(.1,.12,5.2,8),new _e({color:2899536,roughness:.5,metalness:.4}));o.position.y=2.6,o.castShadow=!0,s.add(o),Wt(i,e,.4,.4);const a=new Z(new ve(.1,.1,2.4),new _e({color:2899536,roughness:.5,metalness:.4}));a.position.set(0,4.9,1.2),a.castShadow=!0,s.add(a);const c=new Z(new ve(.48,1.3,.35),new _e({color:1118481,roughness:.7}));c.position.set(0,4.7,2.2),c.castShadow=!0,s.add(c);for(let m of[5.12,4.72,4.32]){const _=new Z(new ve(.38,.05,.2),new _e({color:1118481,roughness:.7}));_.position.set(0,m,2.38),s.add(_)}const u=new pt(.12,.12,.08,16);u.rotateX(Math.PI/2);const l=new Z(u,Mi.clone());l.position.set(0,5,2.36),s.add(l);const d=new Z(u,Mi.clone());d.position.set(0,4.7,2.36),s.add(d);const f=new Z(u,Mi.clone());f.position.set(0,4.4,2.36),s.add(f),Be.add(s),Zc.push({group:s,facing:n,intersectionZ:r,redMesh:l,yellowMesh:d,greenMesh:f})}Ci.forEach(i=>{Pr(-9.5,i-11,0,"south",i),Pr(9.5,i+11,Math.PI,"north",i),Pr(-11,i+9.5,Math.PI/2,"east",i),Pr(11,i-9.5,-Math.PI/2,"west",i)});let wt="avenue_green",di=10;function d_(i){di-=i,di<=0&&(wt==="avenue_green"?(wt="avenue_yellow",di=3):wt==="avenue_yellow"?(wt="cross_green",di=10):wt==="cross_green"?(wt="cross_yellow",di=3):wt==="cross_yellow"&&(wt="avenue_green",di=10));for(const e of Zc){const t=e.facing==="north"||e.facing==="south";let n=!1,r=!1,s=!1;t?wt==="avenue_green"?s=!0:wt==="avenue_yellow"?r=!0:n=!0:wt==="cross_green"?s=!0:wt==="cross_yellow"?r=!0:n=!0,e.redMesh.material=n?l_:Mi,e.yellowMesh.material=r?u_:Mi,e.greenMesh.material=s?h_:Mi}}const ji=new ve(1,1,1),$c=new _e({color:9079438,roughness:.7}),jc=new _e({color:5921378,roughness:.6}),f_=new _e({color:11882541,roughness:.85}),Qa=new _e({color:2240831,roughness:.2,metalness:.8}),ec=[new Nt({color:15158332}),new Nt({color:15965202}),new Nt({color:2600544}),new Nt({color:2719929})];function p_(i){return Ci.some(e=>Math.abs(i-e)<14)}for(let i=0;i<28;i++){const e=-130+i*10;if(p_(e))continue;const t=14+i*13%22,n=11,r=8.5,s=i%3===0?f_:i%2===0?$c:jc,o=new Z(ji,s);o.scale.set(n,t,r),o.position.set(-18,t/2,e),o.castShadow=!0,o.receiveShadow=!0,Be.add(o),Wt(-18,e,n,r);const a=new Z(new vt(7.5,3.2),Qa);a.rotation.y=Math.PI/2,a.position.set(-12.45,2,e),Be.add(a);const c=new Z(ji,s);c.scale.set(n,t,r),c.position.set(18,t/2,e),c.castShadow=!0,c.receiveShadow=!0,Be.add(c),Wt(18,e,n,r);const u=new Z(new vt(7.5,3.2),Qa);if(u.rotation.y=-Math.PI/2,u.position.set(12.45,2,e),Be.add(u),i%4===1){const l=new Z(new ve(6.4,3,.3),ec[i%ec.length]);l.position.set(18,t+1.8,e),l.castShadow=!0,Be.add(l)}}for(let i=-140;i<=140;i+=24)for(let e of[-10.8,10.8]){const t=new Z(new pt(.09,.09,6.5,8),new _e({color:3355443}));t.position.set(e,3.25,i),t.castShadow=!0,Be.add(t),Wt(e,i,.35,.35);const n=new Z(new ve(.8,.1,.1),new _e({color:3355443}));n.position.set(e>0?e-.4:e+.4,6.4,i),Be.add(n);const r=new Z(new ve(.4,.15,.3),new _e({color:16775910,emissive:16770730,emissiveIntensity:1.2}));r.position.set(e>0?e-.7:e+.7,6.3,i),Be.add(r)}const tc=[15158332,15844367,3066993,3447003,15105570],m_=[-55,-25,25,55,-115,115];m_.forEach((i,e)=>{[-11.2,11.2].forEach((t,n)=>{const r=new Z(new ve(1.8,.8,2.2),new _e({color:9132587,roughness:.9}));r.position.set(t,.45,i),r.castShadow=!0,Be.add(r),Wt(t,i,1.8,2.2);const s=tc[(e+n)%tc.length],o=new Z(new Bo(1.6,.6,8),new _e({color:s,roughness:.6}));o.position.set(t,2.1,i),o.castShadow=!0,Be.add(o);const a=new Z(new pt(.04,.04,2.1,6),new _e({color:13421772}));a.position.set(t,1.05,i),Be.add(a)})});const Jc=[],nc=[{primaryColor:"#e74c3c",secondaryColor:"#2c3e50",hairColor:"#000000",hat:"cap"},{primaryColor:"#2ecc71",secondaryColor:"#34495e",hairColor:"#1a1a1a",hat:"none"},{primaryColor:"#f39c12",secondaryColor:"#1e272c",hairColor:"#0f0f0f",hat:"none"},{primaryColor:"#9b59b6",secondaryColor:"#2d3436",hairColor:"#171717",hat:"glasses"},{primaryColor:"#1abc9c",secondaryColor:"#2c3e50",hairColor:"#000000",hat:"cap"},{primaryColor:"#e67e22",secondaryColor:"#34495e",hairColor:"#111111",hat:"none"}];for(let i=0;i<12;i++){const t=i%2===0?-11.5:11.5,n=-120+i*20,r=nc[i%nc.length],s={id:100+i,name:`Pedestrian ${i+1}`,account:`ped_${i}`,style:{body:"male",primaryColor:r.primaryColor,secondaryColor:r.secondaryColor,skinColor:"#6d4023",hairColor:r.hairColor,hair:"short",hat:r.hat,accessory:"none"},face:""},o=new kc(s),a=i%3===0?-1:1;o.group.position.set(t,0,n),o.group.rotation.y=a===1?0:Math.PI,Be.add(o.group),Jc.push({avatar:o,x:t,z:n,speed:1.8+i%4*.4,direction:a,minZ:-160,maxZ:160})}Ci.forEach(i=>{for(let e of[26,42,58,-26,-42,-58]){if(i===0&&e===26)continue;const t=10+Math.abs(e)*3%18,n=12,r=10,s=new Z(ji,jc);s.scale.set(n,t,r),s.position.set(e,t/2,i+15),s.castShadow=!0,s.receiveShadow=!0,Be.add(s),Wt(e,i+15,n,r);const o=new Z(ji,$c);o.scale.set(n,t,r),o.position.set(e,t/2,i-15),o.castShadow=!0,o.receiveShadow=!0,Be.add(o),Wt(e,i-15,n,r)}});const tn=new ht,Qc=14,el=12,tl=12,sr=new Z(ji,new _e({color:15265264,roughness:.5,metalness:.1}));sr.scale.set(Qc,el,tl);sr.position.set(26,el/2,15);sr.castShadow=!0;sr.receiveShadow=!0;tn.add(sr);Wt(26,15,Qc,tl);const nl=new Z(new vt(10,6),new _e({color:1799396,roughness:.1,metalness:.9}));nl.position.set(26,6.5,8.95);tn.add(nl);const Xo=new Z(new ve(6.4,.35,3.2),new _e({color:2899536,roughness:.5}));Xo.position.set(26,3.8,7.4);Xo.castShadow=!0;tn.add(Xo);for(let i of[23.2,28.8]){const e=new Z(new pt(.12,.12,3.8,8),new _e({color:2899536}));e.position.set(i,1.9,6),e.castShadow=!0,tn.add(e),Wt(i,6,.4,.4)}const il=new _e({color:16711680,emissive:16716049,emissiveIntensity:2.5}),rl=new Z(new ve(.5,1.8,.15),il);rl.position.set(26,4.8,8.9);tn.add(rl);const sl=new Z(new ve(1.8,.5,.15),il);sl.position.set(26,4.8,8.9);tn.add(sl);const ol=new Z(new ve(7.2,.8,.15),new _e({color:623843,roughness:.4}));ol.position.set(26,4.2,7.35);tn.add(ol);const al=new _e({color:2962486,roughness:.3,metalness:.8}),cl=new Z(new vt(1.4,2.6),al);cl.position.set(25.1,1.3,8.95);tn.add(cl);const ll=new Z(new vt(1.4,2.6),al);ll.position.set(26.9,1.3,8.95);tn.add(ll);const Ni=new ht;Ni.position.set(20.5,0,6.8);Ni.rotation.y=Math.PI/2;const qo=new Z(new ve(2.2,1.8,4.6),new _e({color:16777215,roughness:.4}));qo.position.y=1.1;qo.castShadow=!0;Ni.add(qo);const ul=new Z(new ve(2.24,.35,4.4),new _e({color:15158332,roughness:.4}));ul.position.y=1.1;Ni.add(ul);const hl=new Z(new ve(1.2,.2,.4),new _e({color:3447003,emissive:623843,emissiveIntensity:2}));hl.position.set(0,2.1,.8);Ni.add(hl);tn.add(Ni);Wt(20.5,6.8,4.6,2.2);Be.add(tn);const ki=[],__=[{x:-7.5,z:35,yaw:0,type:"danfo",color:16236319},{x:-7.5,z:55,yaw:0,type:"sedan",color:2899536},{x:-7.5,z:-35,yaw:0,type:"keke",color:16236319},{x:-7.5,z:-55,yaw:0,type:"sedan",color:9807270},{x:-7.5,z:-110,yaw:0,type:"danfo",color:16236319},{x:7.5,z:40,yaw:Math.PI,type:"sedan",color:11882541},{x:7.5,z:-40,yaw:Math.PI,type:"danfo",color:16236319},{x:7.5,z:-105,yaw:Math.PI,type:"keke",color:16236319},{x:35,z:5.5,yaw:Math.PI/2,type:"danfo",color:16236319},{x:-35,z:-5.5,yaw:-Math.PI/2,type:"sedan",color:1482885},{x:50,z:-74.5,yaw:Math.PI/2,type:"keke",color:16236319},{x:-50,z:-85.5,yaw:-Math.PI/2,type:"danfo",color:16236319},{x:42,z:85.5,yaw:Math.PI/2,type:"sedan",color:13849600}];__.forEach(i=>{const e=Xc({type:i.type,primaryColor:i.color});e.position.set(i.x,0,i.z),e.rotation.y=i.yaw,Be.add(e);const t=i.type==="danfo"?5.2:i.type==="sedan"?4.5:2.5,n=2.4,r=Math.abs(Math.sin(i.yaw))>.5;Wt(i.x,i.z,r?t:n,r?n:t)});const g_=[{type:"danfo",color:16236319,x:3.6,z:120,speed:13,direction:"north"},{type:"sedan",color:2719929,x:3.6,z:50,speed:13,direction:"north"},{type:"keke",color:16236319,x:3.6,z:-20,speed:13,direction:"north"},{type:"danfo",color:16236319,x:3.6,z:-90,speed:13,direction:"north"},{type:"sedan",color:15158332,x:3.6,z:-160,speed:13,direction:"north"},{type:"danfo",color:16236319,x:-3.6,z:-160,speed:13,direction:"south"},{type:"sedan",color:9323693,x:-3.6,z:-90,speed:13,direction:"south"},{type:"keke",color:16236319,x:-3.6,z:-20,speed:13,direction:"south"},{type:"danfo",color:16236319,x:-3.6,z:50,speed:13,direction:"south"},{type:"sedan",color:2600544,x:-3.6,z:120,speed:13,direction:"south"},{type:"danfo",color:16236319,x:-80,z:-3.2,speed:11,direction:"east"},{type:"sedan",color:15965202,x:20,z:-3.2,speed:11,direction:"east"},{type:"keke",color:16236319,x:80,z:3.2,speed:11,direction:"west"},{type:"danfo",color:16236319,x:-20,z:3.2,speed:11,direction:"west"},{type:"sedan",color:3426654,x:-60,z:-83.2,speed:11,direction:"east"},{type:"danfo",color:16236319,x:60,z:-76.8,speed:11,direction:"west"},{type:"keke",color:16236319,x:-60,z:76.8,speed:11,direction:"east"},{type:"sedan",color:1752220,x:60,z:83.2,speed:11,direction:"west"}];g_.forEach((i,e)=>{const t=Xc({type:i.type,primaryColor:i.color});t.position.set(i.x,0,i.z);let n="z",r=-180,s=180,o=i.x;const a=i.type==="danfo"?5.2:i.type==="sedan"?4.5:2.5;i.direction==="north"?(t.rotation.y=Math.PI,n="z",o=i.x):i.direction==="south"?(t.rotation.y=0,n="z",o=i.x):i.direction==="east"?(t.rotation.y=Math.PI/2,n="x",r=-140,s=140,o=i.z):i.direction==="west"&&(t.rotation.y=-Math.PI/2,n="x",r=-140,s=140,o=i.z),Be.add(t),ki.push({id:e,mesh:t,baseSpeed:i.speed,currentSpeed:i.speed,direction:i.direction,axis:n,minBound:r,maxBound:s,laneCoord:o,length:a})});let dl={id:1,name:"Lagos Driver",account:"driver_eko",style:{body:"male",primaryColor:"#f7bf1f",secondaryColor:"#2e2e38",skinColor:"#8d5524",hairColor:"#17120f",hair:"short",hat:"cap",accessory:"glasses"},face:""},mi=null;const an=new ht;an.position.set(0,0,0);Be.add(an);function fl(i){mi&&an.remove(mi.group),mi=new kc(i),an.add(mi.group)}fl(dl);async function v_(){const i=await Qm({type:"startng:whoami"},"startng:user",2e3);if(i){const e=i.user??i.guest;e&&(dl=e,fl(e))}}Wc()||v_();const Ht={};window.addEventListener("keydown",i=>{Ht[i.code]=!0});window.addEventListener("keyup",i=>{Ht[i.code]=!1});let Wn=Math.PI,Gr=.32,Vr=7.5,jr=!1,So=0,Eo=0;window.addEventListener("pointerdown",i=>{jr=!0,So=i.clientX,Eo=i.clientY});window.addEventListener("pointermove",i=>{if(!jr)return;const e=i.clientX-So,t=i.clientY-Eo;So=i.clientX,Eo=i.clientY,Wn-=e*.005,Gr=Math.max(.05,Math.min(1.1,Gr+t*.004))});window.addEventListener("pointerup",()=>{jr=!1});window.addEventListener("pointercancel",()=>{jr=!1});window.addEventListener("wheel",i=>{Vr=Math.max(3.5,Math.min(15,Vr+Math.sign(i.deltaY)*.8))},{passive:!0});let je=new N(11.2,.05,16),yo=Math.PI;const ic=7;let Yn=!1,kr=0,mn=new N;const Yi=document.getElementById("wasted-screen");let pl=0,Wr=0,Ki="pickup";const Pi=[{id:1,title:"Mama Bola Hot Jollof",pickupDesc:"Pick up steaming Jollof Rice package from Mama Bola's East sidewalk food stall.",dropoffDesc:"Deliver the hot food parcel safely across the avenue to the customer at Ojuelegba Kiosk.",pickupPos:new N(11.2,.45,25),pickupLabel:"Mama Bola Food Stall",dropoffPos:new N(-11.5,.45,-55),dropoffLabel:"Ojuelegba Customer",reward:5e3,itemType:"food"},{id:2,title:"Computer Village Spare Parts",pickupDesc:"Collect electronic components from the electronics dealer at Broad Street cross road.",dropoffDesc:"Rush the package to the phone repair vendor on West Avenue sidewalk before closing.",pickupPos:new N(35,.45,0),pickupLabel:"Electronics Dealer",dropoffPos:new N(-11.2,.45,55),dropoffLabel:"Phone Repair Vendor",reward:7500,itemType:"parts"},{id:3,title:"Danfo Vulcanizer Tyre Run",pickupDesc:"Pick up a heavy patched tyre from the vulcanizer at Marina Road intersection.",dropoffDesc:"Carry tyre to the stranded yellow Danfo bus waiting along the north avenue curb.",pickupPos:new N(-35,.45,-80),pickupLabel:"Vulcanizer Workshop",dropoffPos:new N(7.5,.45,-40),dropoffLabel:"Stranded Danfo Bus",reward:1e4,itemType:"tyre"},{id:4,title:"VIP Glover Suya Express",pickupDesc:"Pick up freshly grilled peppered Suya skewers wrapped in newspaper at South cross road.",dropoffDesc:"Deliver the VIP order to the executive commercial office entrance.",pickupPos:new N(42,.45,80),pickupLabel:"Mai Suya Spot",dropoffPos:new N(14,.45,-20),dropoffLabel:"Office Executive Plaza",reward:12500,itemType:"suya"}];let Mt=null;function x_(){try{Mt||(Mt=new(window.AudioContext||window.webkitAudioContext)),Mt.state==="suspended"&&Mt.resume();const i=Mt.createOscillator(),e=Mt.createOscillator(),t=Mt.createGain();i.type="triangle",e.type="sine";const n=Mt.currentTime;i.frequency.setValueAtTime(587.33,n),i.frequency.setValueAtTime(880,n+.08),i.frequency.setValueAtTime(1174.66,n+.16),e.frequency.setValueAtTime(1174.66,n),e.frequency.setValueAtTime(1760,n+.16),t.gain.setValueAtTime(.3,n),t.gain.exponentialRampToValueAtTime(.001,n+.5),i.connect(t),e.connect(t),t.connect(Mt.destination),i.start(n),e.start(n),i.stop(n+.5),e.stop(n+.5)}catch{}}function M_(){try{Mt||(Mt=new(window.AudioContext||window.webkitAudioContext)),Mt.state==="suspended"&&Mt.resume();const i=Mt.createOscillator(),e=Mt.createGain(),t=Mt.currentTime;i.type="sine",i.frequency.setValueAtTime(440,t),i.frequency.exponentialRampToValueAtTime(880,t+.2),e.gain.setValueAtTime(.25,t),e.gain.exponentialRampToValueAtTime(.001,t+.25),i.connect(e),e.connect(Mt.destination),i.start(t),i.stop(t+.25)}catch{}}const Li=new ht,Yo=new Z(new ve(.42,.32,.42),new _e({color:13849600,roughness:.8}));Yo.position.set(0,.9,.32);Yo.castShadow=!0;Li.add(Yo);const ml=new Z(new ve(.44,.06,.44),new _e({color:15844367,roughness:.5}));ml.position.set(0,.9,.32);Li.add(ml);Li.visible=!1;an.add(Li);const Fi=new ht,S_=new Ho(.7,0),Wi=new _e({color:16236319,emissive:15965202,emissiveIntensity:1.5,roughness:.2}),Si=new Z(S_,Wi);Si.position.y=1.9;Si.castShadow=!0;Fi.add(Si);const E_=new qr(.9,1.25,24),To=new Nt({color:16236319,side:jt,transparent:!0,opacity:.85}),Ji=new Z(E_,To);Ji.rotation.x=-Math.PI/2;Ji.position.y=.04;Fi.add(Ji);const y_=new qr(1.4,1.6,24),T_=new Nt({color:3069299,side:jt,transparent:!0,opacity:.5}),Qi=new Z(y_,T_);Qi.rotation.x=-Math.PI/2;Qi.position.y=.035;Fi.add(Qi);const w_=new pt(.18,.18,12,12),wo=new Nt({color:16236319,transparent:!0,opacity:.25}),_l=new Z(w_,wo);_l.position.y=6;Fi.add(_l);Be.add(Fi);const rc=document.getElementById("task-title"),sc=document.getElementById("task-desc"),Cs=document.getElementById("task-step"),oc=document.getElementById("task-reward-tag"),ac=document.getElementById("target-dist"),cc=document.getElementById("wallet-balance"),Gt=document.getElementById("toast-notification");function gl(){const i=Pi[Wr%Pi.length],e=Ki==="pickup",t=e?i.pickupPos:i.dropoffPos;Fi.position.copy(t),e?(Wi.color.setHex(16236319),Wi.emissive.setHex(15965202),To.color.setHex(16236319),wo.color.setHex(16236319),Li.visible=!1):(Wi.color.setHex(3069299),Wi.emissive.setHex(2535263),To.color.setHex(3069299),wo.color.setHex(3069299),Li.visible=!0),rc&&(rc.textContent=i.title),sc&&(sc.textContent=e?i.pickupDesc:i.dropoffDesc),Cs&&(Cs.textContent=e?`📦 STAGE 1: PICKUP (${i.pickupLabel})`:`🎯 STAGE 2: DELIVER (${i.dropoffLabel})`,Cs.style.color=e?"#ff9f43":"#2ed573"),oc&&(oc.textContent=`+₦${i.reward.toLocaleString()}`),cc&&(cc.textContent=`₦${pl.toLocaleString()}`)}gl();function A_(){const i=Pi[Wr%Pi.length];Ki==="pickup"?(Ki="dropoff",M_(),Gt&&(Gt.textContent=`📦 PACKAGE COLLECTED! NOW DELIVER TO ${i.dropoffLabel.toUpperCase()}`,Gt.style.display="block",setTimeout(()=>{Gt.style.display="none"},2500))):(pl+=i.reward,Ki="pickup",Wr++,x_(),Gt&&(Gt.textContent=`+₦${i.reward.toLocaleString()} EARNED! ${i.title.toUpperCase()} COMPLETE!`,Gt.style.display="block",setTimeout(()=>{Gt.style.display="none"},3500))),gl()}function b_(i){if(Yn)return;Yn=!0,kr=2.5;const e=new N(0,0,0);i.axis==="z"?e.z=i.direction==="north"?-1:1:e.x=i.direction==="east"?1:-1,mn.copy(e).multiplyScalar(i.currentSpeed*.9),mn.y=4.5,an.rotation.x=-Math.PI/2,Yi&&(Yi.style.display="flex",Yi.style.opacity="1")}function R_(){Yn=!1,kr=0,mn.set(0,0,0),an.rotation.x=0,an.rotation.z=0,je.set(26,.05,8.2),yo=Math.PI,Wn=Math.PI,Yi&&(Yi.style.display="none"),Gt&&(Gt.textContent="🏥 DISCHARGED FROM EKO GENERAL HOSPITAL — BACK TO THE HUSTLE!",Gt.style.display="block",setTimeout(()=>{Gt.style.display="none"},3200))}window.addEventListener("resize",()=>{xi.aspect=window.innerWidth/window.innerHeight,xi.updateProjectionMatrix(),$n.setSize(window.innerWidth,window.innerHeight)});let lc=performance.now(),Ps=0,Ls=performance.now();function vl(){requestAnimationFrame(vl);const i=performance.now(),e=Math.min((i-lc)/1e3,.1);if(lc=i,Ps++,i-Ls>=500){const l=Math.round(Ps*1e3/(i-Ls));r_.textContent=`FPS: ${l}`,Ps=0,Ls=i}if(d_(e),Yn)kr-=e,mn.y-=15*e,je.x+=mn.x*e,je.y=Math.max(.1,je.y+mn.y*e),je.z+=mn.z*e,mn.x*=.96,mn.z*=.96,kr<=0&&R_();else{Ht.KeyQ&&(Wn+=1.8*e),Ht.KeyE&&(Wn-=1.8*e);let l=0,d=0;(Ht.KeyW||Ht.ArrowUp)&&(d-=1),(Ht.KeyS||Ht.ArrowDown)&&(d+=1),(Ht.KeyA||Ht.ArrowLeft)&&(l-=1),(Ht.KeyD||Ht.ArrowRight)&&(l+=1);const f=l!==0||d!==0;if(f){let m=function(X,H){for(const Y of Kc)if(X+F>Y.minX&&X-F<Y.maxX&&H+F>Y.minZ&&H-F<Y.maxZ)return!0;return!1};const _=Wn+Math.PI,v=Math.sin(_),p=Math.cos(_),h=-p,y=v,T=Math.hypot(l,d),S=-d/T,L=l/T,A=v*S+h*L,b=p*S+y*L;yo=Math.atan2(A,b);const P=A*ic*e,E=b*ic*e;let x=je.x+P,R=je.z+E;const F=.45;m(x,je.z)||(je.x=x),m(je.x,R)||(je.z=R);const O=Ci.some(X=>Math.abs(je.z-X)<=7);O?je.x=Math.max(-140,Math.min(140,je.x)):je.x=Math.max(-13.5,Math.min(13.5,je.x)),je.z=Math.max(-180,Math.min(180,je.z));const W=Math.abs(je.x)>=10&&!O;je.y=W?.05:0}mi&&mi.updateAnimation(e,f,1.2)}an.position.copy(je),Yn||(an.rotation.y=yo);const t=Vr*Math.cos(Gr),n=Vr*Math.sin(Gr),r=new N(je.x+Math.sin(Wn)*t,je.y+1.2+n,je.z+Math.cos(Wn)*t);if(xi.position.lerp(r,.15),xi.lookAt(je.x,je.y+1.3,je.z),!Yn)for(const l of ki){const d=Math.abs(je.x-l.mesh.position.x),f=Math.abs(je.z-l.mesh.position.z),m=l.axis==="z"?1.8:l.length/2+.4,_=l.axis==="z"?l.length/2+.4:1.8;if(d<m&&f<_&&l.currentSpeed>1.5){b_(l);break}}const s=16,o=8.5;for(const l of ki){let d=l.baseSpeed;for(const _ of ki)if(l.id!==_.id&&l.axis===_.axis&&l.direction===_.direction&&Math.abs(l.laneCoord-_.laneCoord)<1){let v=999;if(l.direction==="north"?v=l.mesh.position.z-_.mesh.position.z:l.direction==="south"?v=_.mesh.position.z-l.mesh.position.z:l.direction==="east"?v=_.mesh.position.x-l.mesh.position.x:l.direction==="west"&&(v=l.mesh.position.x-_.mesh.position.x),v>0&&v<s)if(v<o)d=0;else{const p=(v-o)/(s-o);d=Math.min(d,_.currentSpeed*p)}}const f=wt==="cross_green"||wt==="cross_yellow",m=wt==="avenue_green"||wt==="avenue_yellow";for(const _ of Ci)if(l.axis==="z"){if(f){if(l.direction==="north"){const v=l.mesh.position.z-(_+11.5);v>0&&v<16&&(v<3?d=0:d=Math.min(d,l.baseSpeed*(v/16)))}else if(l.direction==="south"){const v=_-11.5-l.mesh.position.z;v>0&&v<16&&(v<3?d=0:d=Math.min(d,l.baseSpeed*(v/16)))}}}else if(l.axis==="x"&&Math.abs(l.laneCoord-_)<2&&m){if(l.direction==="east"){const v=-11.5-l.mesh.position.x;v>0&&v<16&&(v<3?d=0:d=Math.min(d,l.baseSpeed*(v/16)))}else if(l.direction==="west"){const v=l.mesh.position.x-11.5;v>0&&v<16&&(v<3?d=0:d=Math.min(d,l.baseSpeed*(v/16)))}}l.axis==="x"&&Math.abs(l.mesh.position.x)<14&&ki.some(p=>p.axis==="z"&&Math.abs(p.mesh.position.z-l.laneCoord)<8&&Math.abs(p.mesh.position.x)<6)&&(d=0),l.currentSpeed=bu.lerp(l.currentSpeed,d,e*5),l.axis==="z"?l.direction==="north"?(l.mesh.position.z-=l.currentSpeed*e,l.mesh.position.z<l.minBound&&(l.mesh.position.z=l.maxBound)):(l.mesh.position.z+=l.currentSpeed*e,l.mesh.position.z>l.maxBound&&(l.mesh.position.z=l.minBound)):l.direction==="east"?(l.mesh.position.x+=l.currentSpeed*e,l.mesh.position.x>l.maxBound&&(l.mesh.position.x=l.minBound)):(l.mesh.position.x-=l.currentSpeed*e,l.mesh.position.x<l.minBound&&(l.mesh.position.x=l.maxBound))}for(const l of Jc)l.z+=l.speed*l.direction*e,l.direction===1&&l.z>l.maxZ?(l.direction=-1,l.avatar.group.rotation.y=Math.PI):l.direction===-1&&l.z<l.minZ&&(l.direction=1,l.avatar.group.rotation.y=0),l.avatar.group.position.z=l.z,l.avatar.updateAnimation(e,!0,1);if(Si&&(Si.rotation.y+=e*2.5,Si.position.y=1.9+Math.sin(i*.005)*.25),Ji){const l=1+Math.sin(i*.006)*.15;Ji.scale.set(l,l,1)}if(Qi){const l=1+Math.cos(i*.006)*.18;Qi.scale.set(l,l,1)}const a=Pi[Wr%Pi.length],c=Ki==="pickup"?a.pickupPos:a.dropoffPos,u=je.distanceTo(c);ac&&(ac.textContent=`📍 ${Math.round(u)}m`),!Yn&&u<2.8&&A_(),$n.render(Be,xi)}vl();

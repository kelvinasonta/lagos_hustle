(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="174",Uh=0,Wa=1,Nh=2,yl=1,Sl=2,vn=3,Bn=0,Fe=1,en=2,In=0,Pi=1,Xa=2,qa=3,Ya=4,Fh=5,Jn=100,Oh=101,Bh=102,zh=103,kh=104,Gh=200,Hh=201,Vh=202,Wh=203,vo=204,Mo=205,Xh=206,qh=207,Yh=208,$h=209,Kh=210,Zh=211,jh=212,Jh=213,Qh=214,yo=0,So=1,Eo=2,Fi=3,wo=4,To=5,bo=6,Ao=7,El=0,tu=1,eu=2,Un=0,nu=1,iu=2,su=3,ru=4,ou=5,au=6,cu=7,wl=300,Oi=301,Bi=302,Ro=303,Co=304,Tr=306,Po=1e3,ni=1001,Lo=1002,rn=1003,lu=1004,As=1005,cn=1006,Or=1007,ii=1008,wn=1009,Tl=1010,bl=1011,ps=1012,pa=1013,oi=1014,yn=1015,vs=1016,ma=1017,ga=1018,zi=1020,Al=35902,Rl=1021,Cl=1022,sn=1023,Pl=1024,Ll=1025,Li=1026,ki=1027,Dl=1028,_a=1029,Il=1030,xa=1031,va=1033,rr=33776,or=33777,ar=33778,cr=33779,Do=35840,Io=35841,Uo=35842,No=35843,Fo=36196,Oo=37492,Bo=37496,zo=37808,ko=37809,Go=37810,Ho=37811,Vo=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,$o=37817,Ko=37818,Zo=37819,jo=37820,Jo=37821,lr=36492,Qo=36494,ta=36495,Ul=36283,ea=36284,na=36285,ia=36286,hu=3200,uu=3201,Nl=0,du=1,Ln="",Xe="srgb",Gi="srgb-linear",dr="linear",ie="srgb",li=7680,$a=519,fu=512,pu=513,mu=514,Fl=515,gu=516,_u=517,xu=518,vu=519,Ka=35044,Za="300 es",Sn=2e3,fr=2001;class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ja=1234567;const cs=Math.PI/180,ms=180/Math.PI;function qi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ma(i,t){return(i%t+t)%t}function Mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yu(i,t,e){return i!==t?(e-i)/(t-i):0}function ls(i,t,e){return(1-e)*i+e*t}function Su(i,t,e,n){return ls(i,t,1-Math.exp(-e*n))}function Eu(i,t=1){return t-Math.abs(Ma(i,t*2)-t)}function wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Au(i,t){return i+Math.random()*(t-i)}function Ru(i){return i*(.5-Math.random())}function Cu(i){i!==void 0&&(ja=i);let t=ja+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pu(i){return i*cs}function Lu(i){return i*ms}function Du(i){return(i&i-1)===0&&i!==0}function Iu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),d=o((t+n)/2),f=r((t-n)/2),l=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*d,c*f,c*l,a*h);break;case"YZY":i.set(c*l,a*d,c*f,a*h);break;case"ZXZ":i.set(c*f,c*l,a*d,a*h);break;case"XZX":i.set(a*d,c*g,c*p,a*h);break;case"YXY":i.set(c*p,a*d,c*g,a*h);break;case"ZYZ":i.set(c*g,c*p,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fu={DEG2RAD:cs,RAD2DEG:ms,generateUUID:qi,clamp:zt,euclideanModulo:Ma,mapLinear:Mu,inverseLerp:yu,lerp:ls,damp:Su,pingpong:Eu,smoothstep:wu,smootherstep:Tu,randInt:bu,randFloat:Au,randFloatSpread:Ru,seededRandom:Cu,degToRad:Pu,radToDeg:Lu,isPowerOfTwo:Du,ceilPowerOfTwo:Iu,floorPowerOfTwo:Uu,setQuaternionFromProperEuler:Nu,normalize:Le,denormalize:bi};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,o,a,c,h){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],d=n[4],f=n[7],l=n[2],p=n[5],g=n[8],M=s[0],m=s[3],u=s[6],w=s[1],E=s[4],_=s[7],A=s[2],b=s[5],R=s[8];return r[0]=o*M+a*w+c*A,r[3]=o*m+a*E+c*b,r[6]=o*u+a*_+c*R,r[1]=h*M+d*w+f*A,r[4]=h*m+d*E+f*b,r[7]=h*u+d*_+f*R,r[2]=l*M+p*w+g*A,r[5]=l*m+p*E+g*b,r[8]=l*u+p*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-n*r*d+n*a*c+s*r*h-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=d*o-a*h,l=a*c-d*r,p=h*r-o*c,g=e*f+n*l+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=f*M,t[1]=(s*h-d*n)*M,t[2]=(a*n-s*o)*M,t[3]=l*M,t[4]=(d*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=p*M,t[7]=(n*c-h*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Br.makeScale(t,e)),this}rotate(t){return this.premultiply(Br.makeRotation(-t)),this}translate(t,e){return this.premultiply(Br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new Ft;function Ol(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ou(){const i=pr("canvas");return i.style.display="block",i}const Ja={};function Kn(i){i in Ja||(Ja[i]=!0,console.warn(i))}function Bu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ku(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qa=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?dr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:t,whitePoint:n,transfer:dr,toXYZ:Qa,fromXYZ:tc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Qa,fromXYZ:tc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}const Zt=Gu();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class Hu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=pr("canvas")),hi.width=t.width,hi.height=t.height;const n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vu=0;class ya{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zr(s[o].image)):r.push(zr(s[o]))}else r=zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wu=0;class Oe extends Xi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=ni,s=ni,r=cn,o=ii,a=sn,c=wn,h=Oe.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=qi(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=wl;Oe.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],d=c[4],f=c[8],l=c[1],p=c[5],g=c[9],M=c[2],m=c[6],u=c[10];if(Math.abs(d-l)<.01&&Math.abs(f-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+l)<.1&&Math.abs(f+M)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(h+1)/2,_=(p+1)/2,A=(u+1)/2,b=(d+l)/4,R=(f+M)/4,P=(g+m)/4;return E>_&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=R/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=P/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(f-M)*(f-M)+(l-d)*(l-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-M)/w,this.z=(l-d)/w,this.w=Math.acos((h+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xu extends Xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ya(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Xu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bl extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],d=n[s+2],f=n[s+3];const l=r[o+0],p=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=l,t[e+1]=p,t[e+2]=g,t[e+3]=M;return}if(f!==M||c!==l||h!==p||d!==g){let m=1-a;const u=c*l+h*p+d*g+f*M,w=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const A=Math.sqrt(E),b=Math.atan2(A,u*w);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const _=a*w;if(c=c*m+l*_,h=h*m+p*_,d=d*m+g*_,f=f*m+M*_,m===1-a){const A=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=A,h*=A,d*=A,f*=A}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o],l=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+d*f+c*p-h*l,t[e+1]=c*g+d*l+h*f-a*p,t[e+2]=h*g+d*p+a*l-c*f,t[e+3]=d*g-a*f-c*l-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),d=a(s/2),f=a(r/2),l=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=l*d*f+h*p*g,this._y=h*p*f-l*d*g,this._z=h*d*g+l*p*f,this._w=h*d*f-l*p*g;break;case"YXZ":this._x=l*d*f+h*p*g,this._y=h*p*f-l*d*g,this._z=h*d*g-l*p*f,this._w=h*d*f+l*p*g;break;case"ZXY":this._x=l*d*f-h*p*g,this._y=h*p*f+l*d*g,this._z=h*d*g+l*p*f,this._w=h*d*f-l*p*g;break;case"ZYX":this._x=l*d*f-h*p*g,this._y=h*p*f+l*d*g,this._z=h*d*g-l*p*f,this._w=h*d*f+l*p*g;break;case"YZX":this._x=l*d*f+h*p*g,this._y=h*p*f+l*d*g,this._z=h*d*g-l*p*f,this._w=h*d*f-l*p*g;break;case"XZY":this._x=l*d*f-h*p*g,this._y=h*p*f-l*d*g,this._z=h*d*g+l*p*f,this._w=h*d*f+l*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],d=e[6],f=e[10],l=n+a+f;if(l>0){const p=.5/Math.sqrt(l+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(d-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+o*a+s*h-r*c,this._y=s*d+o*c+r*a-n*h,this._z=r*d+o*h+n*c-s*a,this._w=o*d-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,a),f=Math.sin((1-e)*d)/h,l=Math.sin(e*d)/h;return this._w=o*f+this._w*l,this._x=n*f+this._x*l,this._y=s*f+this._y*l,this._z=r*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),d=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*d,this.y=n+c*d+a*h-r*f,this.z=s+c*f+r*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new N,ec=new Ms;class ys{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Cs.subVectors(this.max,ts),ui.subVectors(t.a,ts),di.subVectors(t.b,ts),fi.subVectors(t.c,ts),Tn.subVectors(di,ui),bn.subVectors(fi,di),Vn.subVectors(ui,fi);let e=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-Vn.z,Vn.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,Vn.z,0,-Vn.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-Vn.y,Vn.x,0];return!Gr(e,ui,di,fi,Cs)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,ui,di,fi,Cs))?!1:(Ps.crossVectors(Tn,bn),e=[Ps.x,Ps.y,Ps.z],Gr(e,ui,di,fi,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new N,new N,new N,new N,new N,new N,new N,new N],je=new N,Rs=new ys,ui=new N,di=new N,fi=new N,Tn=new N,bn=new N,Vn=new N,ts=new N,Cs=new N,Ps=new N,Wn=new N;function Gr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Wn.fromArray(i,r);const a=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=t.dot(Wn),h=e.dot(Wn),d=n.dot(Wn);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>a)return!1}return!0}const Yu=new ys,es=new N,Hr=new N;class Sa{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);const e=es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(Hr)),this.expandByPoint(es.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new N,Vr=new N,Ls=new N,An=new N,Wr=new N,Ds=new N,Xr=new N;class $u{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Vr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ls),a=An.dot(this.direction),c=-An.dot(Ls),h=An.lengthSq(),d=Math.abs(1-o*o);let f,l,p,g;if(d>0)if(f=o*c-a,l=o*a-c,g=r*d,f>=0)if(l>=-g)if(l<=g){const M=1/d;f*=M,l*=M,p=f*(f+o*l+2*a)+l*(o*f+l+2*c)+h}else l=r,f=Math.max(0,-(o*l+a)),p=-f*f+l*(l+2*c)+h;else l=-r,f=Math.max(0,-(o*l+a)),p=-f*f+l*(l+2*c)+h;else l<=-g?(f=Math.max(0,-(-o*r+a)),l=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+l*(l+2*c)+h):l<=g?(f=0,l=Math.min(Math.max(-r,-c),r),p=l*(l+2*c)+h):(f=Math.max(0,-(o*r+a)),l=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+l*(l+2*c)+h);else l=o>0?-r:r,f=Math.max(0,-(o*l+a)),p=-f*f+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Vr).addScaledVector(Ls,l),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,s=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,s=(t.min.x-l.x)*h),d>=0?(r=(t.min.y-l.y)*d,o=(t.max.y-l.y)*d):(r=(t.max.y-l.y)*d,o=(t.min.y-l.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-l.z)*f,c=(t.max.z-l.z)*f):(a=(t.max.z-l.z)*f,c=(t.min.z-l.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Wr.subVectors(e,t),Ds.subVectors(n,t),Xr.crossVectors(Wr,Ds);let o=this.direction.dot(Xr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);const c=a*this.direction.dot(Ds.crossVectors(An,Ds));if(c<0)return null;const h=a*this.direction.dot(Wr.cross(An));if(h<0||c+h>o)return null;const d=-a*An.dot(Xr);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,s,r,o,a,c,h,d,f,l,p,g,M,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,d,f,l,p,g,M,m)}set(t,e,n,s,r,o,a,c,h,d,f,l,p,g,M,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=h,u[6]=d,u[10]=f,u[14]=l,u[3]=p,u[7]=g,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),o=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const l=o*d,p=o*f,g=a*d,M=a*f;e[0]=c*d,e[4]=-c*f,e[8]=h,e[1]=p+g*h,e[5]=l-M*h,e[9]=-a*c,e[2]=M-l*h,e[6]=g+p*h,e[10]=o*c}else if(t.order==="YXZ"){const l=c*d,p=c*f,g=h*d,M=h*f;e[0]=l+M*a,e[4]=g*a-p,e[8]=o*h,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=p*a-g,e[6]=M+l*a,e[10]=o*c}else if(t.order==="ZXY"){const l=c*d,p=c*f,g=h*d,M=h*f;e[0]=l-M*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*d,e[9]=M-l*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const l=o*d,p=o*f,g=a*d,M=a*f;e[0]=c*d,e[4]=g*h-p,e[8]=l*h+M,e[1]=c*f,e[5]=M*h+l,e[9]=p*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const l=o*c,p=o*h,g=a*c,M=a*h;e[0]=c*d,e[4]=M-l*f,e[8]=g*f+p,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=p*f+g,e[10]=l-M*f}else if(t.order==="XZY"){const l=o*c,p=o*h,g=a*c,M=a*h;e[0]=c*d,e[4]=-f,e[8]=h*d,e[1]=l*f+M,e[5]=o*d,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*d,e[10]=M*f+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,Zu)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Rn.crossVectors(n,ze),Rn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Rn.crossVectors(n,ze)),Rn.normalize(),Is.crossVectors(ze,Rn),s[0]=Rn.x,s[4]=Is.x,s[8]=ze.x,s[1]=Rn.y,s[5]=Is.y,s[9]=ze.y,s[2]=Rn.z,s[6]=Is.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],d=n[1],f=n[5],l=n[9],p=n[13],g=n[2],M=n[6],m=n[10],u=n[14],w=n[3],E=n[7],_=n[11],A=n[15],b=s[0],R=s[4],P=s[8],S=s[12],v=s[1],C=s[5],O=s[9],B=s[13],W=s[2],$=s[6],X=s[10],j=s[14],H=s[3],it=s[7],dt=s[11],Mt=s[15];return r[0]=o*b+a*v+c*W+h*H,r[4]=o*R+a*C+c*$+h*it,r[8]=o*P+a*O+c*X+h*dt,r[12]=o*S+a*B+c*j+h*Mt,r[1]=d*b+f*v+l*W+p*H,r[5]=d*R+f*C+l*$+p*it,r[9]=d*P+f*O+l*X+p*dt,r[13]=d*S+f*B+l*j+p*Mt,r[2]=g*b+M*v+m*W+u*H,r[6]=g*R+M*C+m*$+u*it,r[10]=g*P+M*O+m*X+u*dt,r[14]=g*S+M*B+m*j+u*Mt,r[3]=w*b+E*v+_*W+A*H,r[7]=w*R+E*C+_*$+A*it,r[11]=w*P+E*O+_*X+A*dt,r[15]=w*S+E*B+_*j+A*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],d=t[2],f=t[6],l=t[10],p=t[14],g=t[3],M=t[7],m=t[11],u=t[15];return g*(+r*c*f-s*h*f-r*a*l+n*h*l+s*a*p-n*c*p)+M*(+e*c*p-e*h*l+r*o*l-s*o*p+s*h*d-r*c*d)+m*(+e*h*f-e*a*p-r*o*f+n*o*p+r*a*d-n*h*d)+u*(-s*a*d-e*c*f+e*a*l+s*o*f-n*o*l+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=t[9],l=t[10],p=t[11],g=t[12],M=t[13],m=t[14],u=t[15],w=f*m*h-M*l*h+M*c*p-a*m*p-f*c*u+a*l*u,E=g*l*h-d*m*h-g*c*p+o*m*p+d*c*u-o*l*u,_=d*M*h-g*f*h+g*a*p-o*M*p-d*a*u+o*f*u,A=g*f*c-d*M*c-g*a*l+o*M*l+d*a*m-o*f*m,b=e*w+n*E+s*_+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=w*R,t[1]=(M*l*r-f*m*r-M*s*p+n*m*p+f*s*u-n*l*u)*R,t[2]=(a*m*r-M*c*r+M*s*h-n*m*h-a*s*u+n*c*u)*R,t[3]=(f*c*r-a*l*r-f*s*h+n*l*h+a*s*p-n*c*p)*R,t[4]=E*R,t[5]=(d*m*r-g*l*r+g*s*p-e*m*p-d*s*u+e*l*u)*R,t[6]=(g*c*r-o*m*r-g*s*h+e*m*h+o*s*u-e*c*u)*R,t[7]=(o*l*r-d*c*r+d*s*h-e*l*h-o*s*p+e*c*p)*R,t[8]=_*R,t[9]=(g*f*r-d*M*r-g*n*p+e*M*p+d*n*u-e*f*u)*R,t[10]=(o*M*r-g*a*r+g*n*h-e*M*h-o*n*u+e*a*u)*R,t[11]=(d*a*r-o*f*r-d*n*h+e*f*h+o*n*p-e*a*p)*R,t[12]=A*R,t[13]=(d*M*s-g*f*s+g*n*l-e*M*l-d*n*m+e*f*m)*R,t[14]=(g*a*s-o*M*s-g*n*c+e*M*c+o*n*m-e*a*m)*R,t[15]=(o*f*s-d*a*s+d*n*c-e*f*c-o*n*l+e*a*l)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,d=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,d*a+n,d*c-s*o,0,h*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,d=o+o,f=a+a,l=r*h,p=r*d,g=r*f,M=o*d,m=o*f,u=a*f,w=c*h,E=c*d,_=c*f,A=n.x,b=n.y,R=n.z;return s[0]=(1-(M+u))*A,s[1]=(p+_)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-_)*b,s[5]=(1-(l+u))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(g+E)*R,s[9]=(m-w)*R,s[10]=(1-(l+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=pi.set(s[0],s[1],s[2]).length();const o=pi.set(s[4],s[5],s[6]).length(),a=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const h=1/r,d=1/o,f=1/a;return Je.elements[0]*=h,Je.elements[1]*=h,Je.elements[2]*=h,Je.elements[4]*=d,Je.elements[5]*=d,Je.elements[6]*=d,Je.elements[8]*=f,Je.elements[9]*=f,Je.elements[10]*=f,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Sn){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),l=(n+s)/(n-s);let p,g;if(a===Sn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn){const c=this.elements,h=1/(e-t),d=1/(n-s),f=1/(o-r),l=(e+t)*h,p=(n+s)*d;let g,M;if(a===Sn)g=(o+r)*f,M=-2*f;else if(a===fr)g=r*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new N,Je=new pe,Ku=new N(0,0,0),Zu=new N(1,1,1),Rn=new N,Is=new N,ze=new N,nc=new pe,ic=new Ms;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],d=s[9],f=s[2],l=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const sc=new N,mi=new Ms,gn=new pe,Us=new N,ns=new N,Ju=new N,Qu=new Ms,rc=new N(1,0,0),oc=new N(0,1,0),ac=new N(0,0,1),cc={type:"added"},td={type:"removed"},gi={type:"childadded",child:null},qr={type:"childremoved",child:null};class be extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new N,e=new hn,n=new Ms,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ft}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Us.copy(t):Us.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ns,Us,this.up):gn.lookAt(Us,ns,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(gn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),h=o(t.textures),d=o(t.images),f=o(t.shapes),l=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new N(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new N,_n=new N,Yr=new N,xn=new N,_i=new N,xi=new N,lc=new N,$r=new N,Kr=new N,Zr=new N,jr=new fe,Jr=new fe,Qr=new fe;class nn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),_n.subVectors(n,e),Yr.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(_n),c=Qe.dot(Yr),h=_n.dot(_n),d=_n.dot(Yr),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;const l=1/f,p=(h*c-a*d)*l,g=(o*d-a*c)*l;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return jr.setScalar(0),Jr.setScalar(0),Qr.setScalar(0),jr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jr,r.x),o.addScaledVector(Jr,r.y),o.addScaledVector(Qr,r.z),o}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),_n.subVectors(t,e),Qe.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Qe.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;_i.subVectors(s,n),xi.subVectors(r,n),$r.subVectors(t,n);const c=_i.dot($r),h=xi.dot($r);if(c<=0&&h<=0)return e.copy(n);Kr.subVectors(t,s);const d=_i.dot(Kr),f=xi.dot(Kr);if(d>=0&&f<=d)return e.copy(s);const l=c*f-d*h;if(l<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(_i,o);Zr.subVectors(t,r);const p=_i.dot(Zr),g=xi.dot(Zr);if(g>=0&&p<=g)return e.copy(r);const M=p*h-c*g;if(M<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(xi,a);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return lc.subVectors(r,s),a=(f-d)/(f-d+(p-g)),e.copy(s).addScaledVector(lc,a);const u=1/(m+M+l);return o=M*u,a=l*u,e.copy(n).addScaledVector(_i,o).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function to(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Ma(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=to(o,r,t+1/3),this.g=to(o,r,t),this.b=to(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=kl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(zt(Ce.r*255,0,255))*65536+Math.round(zt(Ce.g*255,0,255))*256+Math.round(zt(Ce.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,h;const d=(a+o)/2;if(a===o)c=0,h=0;else{const f=o-a;switch(h=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Xe){Zt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Ns);const n=ls(Cn.h,Ns.h,e),s=ls(Cn.s,Ns.s,e),r=ls(Cn.l,Ns.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new qt;qt.NAMES=kl;let ed=0;class Ss extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Pi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=Mo,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ie extends Ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new N,Fs=new kt;let nd=0;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class Gl extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hl extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let id=0;const We=new pe,eo=new be,vi=new N,ke=new ys,is=new ys,ye=new N;class $e extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ol(t)?Hl:Gl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return eo.lookAt(t),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];is.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(ke.min,is.min),ke.expandByPoint(ye),ye.addVectors(ke.max,is.max),ke.expandByPoint(ye)):(ke.expandByPoint(is.min),ke.expandByPoint(is.max))}ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)ye.fromBufferAttribute(a,h),c&&(vi.fromBufferAttribute(t,h),ye.add(vi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new N,c[P]=new N;const h=new N,d=new N,f=new N,l=new kt,p=new kt,g=new kt,M=new N,m=new N;function u(P,S,v){h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,v),l.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),d.sub(h),f.sub(h),p.sub(l),g.sub(l);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(M.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(C),a[P].add(M),a[S].add(M),a[v].add(M),c[P].add(m),c[S].add(m),c[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,S=w.length;P<S;++P){const v=w[P],C=v.start,O=v.count;for(let B=C,W=C+O;B<W;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new N,_=new N,A=new N,b=new N;function R(P){A.fromBufferAttribute(s,P),b.copy(A);const S=a[P];E.copy(S),E.sub(A.multiplyScalar(A.dot(S))).normalize(),_.crossVectors(b,S);const C=_.dot(c[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,S=w.length;P<S;++P){const v=w[P],C=v.start,O=v.count;for(let B=C,W=C+O;B<W;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,p=n.count;l<p;l++)n.setXYZ(l,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,h=new N,d=new N,f=new N;if(t)for(let l=0,p=t.count;l<p;l+=3){const g=t.getX(l+0),M=t.getX(l+1),m=t.getX(l+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,m),a.add(d),c.add(d),h.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,p=e.count;l<p;l+=3)s.fromBufferAttribute(e,l+0),r.fromBufferAttribute(e,l+1),o.fromBufferAttribute(e,l+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,c){const h=a.array,d=a.itemSize,f=a.normalized,l=new h.constructor(c.length*d);let p=0,g=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?p=c[M]*a.data.stride+a.offset:p=c[M]*d;for(let u=0;u<d;u++)l[g++]=h[p++]}return new ln(l,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $e,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],h=t(c,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const c=[],h=r[a];for(let d=0,f=h.length;d<f;d++){const l=h[d],p=t(l,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,l=h.length;f<l;f++){const p=h[f];d.push(p.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],f=r[h];for(let l=0,p=f.length;l<p;l++)d.push(f[l].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,d=o.length;h<d;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new pe,Xn=new $u,Os=new Sa,uc=new N,Bs=new N,zs=new N,ks=new N,no=new N,Gs=new N,dc=new N,Hs=new N;class F extends be{constructor(t=new $e,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Gs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const d=a[c],f=r[c];d!==0&&(no.fromBufferAttribute(f,t),o?Gs.addScaledVector(no,d):Gs.addScaledVector(no.sub(e),d))}e.add(Gs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(Os.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Os,uc)===null||Xn.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(hc.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,l=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=l.length;g<M;g++){const m=l[g],u=o[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,A=E;_<A;_+=3){const b=a.getX(_),R=a.getX(_+1),P=a.getX(_+2);s=Vs(this,u,t,n,h,d,f,b,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=g,u=M;m<u;m+=3){const w=a.getX(m),E=a.getX(m+1),_=a.getX(m+2);s=Vs(this,o,t,n,h,d,f,w,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=l.length;g<M;g++){const m=l[g],u=o[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,A=E;_<A;_+=3){const b=_,R=_+1,P=_+2;s=Vs(this,u,t,n,h,d,f,b,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=g,u=M;m<u;m+=3){const w=m,E=m+1,_=m+2;s=Vs(this,o,t,n,h,d,f,w,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sd(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Bn,a),c===null)return null;Hs.copy(a),Hs.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Hs);return h<e.near||h>e.far?null:{distance:h,point:Hs.clone(),object:i}}function Vs(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,Bs),i.getVertexPosition(c,zs),i.getVertexPosition(h,ks);const d=sd(i,t,e,n,Bs,zs,ks,dc);if(d){const f=new N;nn.getBarycoord(dc,Bs,zs,ks,f),s&&(d.uv=nn.getInterpolatedAttribute(s,a,c,h,f,new kt)),r&&(d.uv1=nn.getInterpolatedAttribute(r,a,c,h,f,new kt)),o&&(d.normal=nn.getInterpolatedAttribute(o,a,c,h,f,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const l={a,b:c,c:h,normal:new N,materialIndex:0};nn.getNormal(Bs,zs,ks,l.normal),d.face=l,d.barycoord=f}return d}class vt extends $e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],d=[],f=[];let l=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function g(M,m,u,w,E,_,A,b,R,P,S){const v=_/R,C=A/P,O=_/2,B=A/2,W=b/2,$=R+1,X=P+1;let j=0,H=0;const it=new N;for(let dt=0;dt<X;dt++){const Mt=dt*C-B;for(let Ut=0;Ut<$;Ut++){const Gt=Ut*v-O;it[M]=Gt*w,it[m]=Mt*E,it[u]=W,h.push(it.x,it.y,it.z),it[M]=0,it[m]=0,it[u]=b>0?1:-1,d.push(it.x,it.y,it.z),f.push(Ut/R),f.push(1-dt/P),j+=1}}for(let dt=0;dt<P;dt++)for(let Mt=0;Mt<R;Mt++){const Ut=l+Mt+$*dt,Gt=l+Mt+$*(dt+1),q=l+(Mt+1)+$*(dt+1),nt=l+(Mt+1)+$*dt;c.push(Ut,Gt,nt),c.push(Gt,q,nt),H+=6}a.addGroup(p,H,S),p+=H,l+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const s in n)t[s]=n[s]}return t}function rd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const od={clone:Hi,merge:De};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wl extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new N,fc=new kt,pc=new kt;class qe extends Wl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,fc,pc),e.subVectors(pc,fc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,yi=1;class ld extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(Mi,yi,t,e);s.layers=this.layers,this.add(s);const r=new qe(Mi,yi,t,e);r.layers=this.layers,this.add(r);const o=new qe(Mi,yi,t,e);o.layers=this.layers,this.add(o);const a=new qe(Mi,yi,t,e);a.layers=this.layers,this.add(a);const c=new qe(Mi,yi,t,e);c.layers=this.layers,this.add(c);const h=new qe(Mi,yi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const h of e)this.remove(h);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,h,d]=this.children,f=t.getRenderTarget(),l=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(f,l,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xl extends Oe{constructor(t,e,n,s,r,o,a,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,o,a,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vt(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:In});r.uniforms.tEquirect.value=e;const o=new F(s,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=cn),new ld(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ee extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ud={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),u=this._getHandJoint(h,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],l=d.position.distanceTo(f.position),p=.02,g=.005;h.inputState.pinching&&l>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ea{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Ea(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dd extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const so=new N,fd=new N,pd=new Ft;class Zn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=so.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(so),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pd.getNormalMatrix(t),s=this.coplanarPoint(so).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new Sa,Ws=new N;class wa{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],d=s[5],f=s[6],l=s[7],p=s[8],g=s[9],M=s[10],m=s[11],u=s[12],w=s[13],E=s[14],_=s[15];if(n[0].setComponents(c-r,l-h,m-p,_-u).normalize(),n[1].setComponents(c+r,l+h,m+p,_+u).normalize(),n[2].setComponents(c+o,l+d,m+g,_+w).normalize(),n[3].setComponents(c-o,l-d,m-g,_-w).normalize(),n[4].setComponents(c-a,l-f,m-M,_-E).normalize(),e===Sn)n[5].setComponents(c+a,l+f,m+M,_+E).normalize();else if(e===fr)n[5].setComponents(a,f,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ws.x=s.normal.x>0?t.max.x:t.min.x,Ws.y=s.normal.y>0?t.max.y:t.min.y,Ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ql extends Oe{constructor(t,e,n,s,r,o,a,c,h,d=Li){if(d!==Li&&d!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Li&&(n=oi),n===void 0&&d===ki&&(n=zi),super(null,s,r,o,a,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ya(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class At extends $e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],l=[],p=[];let g=0;const M=[],m=n/2;let u=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(p,2));function w(){const _=new N,A=new N;let b=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const S=[],v=P/r,C=v*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,W=B*c+a,$=Math.sin(W),X=Math.cos(W);A.x=C*$,A.y=-v*n+m,A.z=C*X,f.push(A.x,A.y,A.z),_.set($,R,X).normalize(),l.push(_.x,_.y,_.z),p.push(B,1-v),S.push(g++)}M.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const v=M[S][P],C=M[S+1][P],O=M[S+1][P+1],B=M[S][P+1];(t>0||S!==0)&&(d.push(v,C,B),b+=3),(e>0||S!==r-1)&&(d.push(C,O,B),b+=3)}h.addGroup(u,b,0),u+=b}function E(_){const A=g,b=new kt,R=new N;let P=0;const S=_===!0?t:e,v=_===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*v,0),l.push(0,v,0),p.push(.5,.5),g++;const C=g;for(let O=0;O<=s;O++){const W=O/s*c+a,$=Math.cos(W),X=Math.sin(W);R.x=S*X,R.y=m*v,R.z=S*$,f.push(R.x,R.y,R.z),l.push(0,v,0),b.x=$*.5+.5,b.y=X*.5*v+.5,p.push(b.x,b.y),g++}for(let O=0;O<s;O++){const B=A+O,W=C+O;_===!0?d.push(W,W+1,B):d.push(W+1,W,B),P+=3}h.addGroup(u,P,_===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new At(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class br extends At{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new br(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ta extends $e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),d(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const E=new N,_=new N,A=new N;for(let b=0;b<e.length;b+=3)p(e[b+0],E),p(e[b+1],_),p(e[b+2],A),c(E,_,A,w)}function c(w,E,_,A){const b=A+1,R=[];for(let P=0;P<=b;P++){R[P]=[];const S=w.clone().lerp(_,P/b),v=E.clone().lerp(_,P/b),C=b-P;for(let O=0;O<=C;O++)O===0&&P===b?R[P][O]=S:R[P][O]=S.clone().lerp(v,O/C)}for(let P=0;P<b;P++)for(let S=0;S<2*(b-P)-1;S++){const v=Math.floor(S/2);S%2===0?(l(R[P][v+1]),l(R[P+1][v]),l(R[P][v])):(l(R[P][v+1]),l(R[P+1][v+1]),l(R[P+1][v]))}}function h(w){const E=new N;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(w),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function d(){const w=new N;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];const _=m(w)/2/Math.PI+.5,A=u(w)/Math.PI+.5;o.push(_,1-A)}g(),f()}function f(){for(let w=0;w<o.length;w+=6){const E=o[w+0],_=o[w+2],A=o[w+4],b=Math.max(E,_,A),R=Math.min(E,_,A);b>.9&&R<.1&&(E<.2&&(o[w+0]+=1),_<.2&&(o[w+2]+=1),A<.2&&(o[w+4]+=1))}}function l(w){r.push(w.x,w.y,w.z)}function p(w,E){const _=w*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function g(){const w=new N,E=new N,_=new N,A=new N,b=new kt,R=new kt,P=new kt;for(let S=0,v=0;S<r.length;S+=9,v+=6){w.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),b.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),A.copy(w).add(E).add(_).divideScalar(3);const C=m(A);M(b,v+0,w,C),M(R,v+2,E,C),M(P,v+4,_,C)}}function M(w,E,_,A){A<0&&w.x===1&&(o[E]=w.x-1),_.x===0&&_.z===0&&(o[E]=A/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.vertices,t.indices,t.radius,t.details)}}class ba extends Ta{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ba(t.radius,t.detail)}}class ce extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,d=c+1,f=t/a,l=e/c,p=[],g=[],M=[],m=[];for(let u=0;u<d;u++){const w=u*l-o;for(let E=0;E<h;E++){const _=E*f-r;g.push(_,-w,0),M.push(0,0,1),m.push(E/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<a;w++){const E=w+h*u,_=w+h*(u+1),A=w+1+h*(u+1),b=w+1+h*u;p.push(E,_,b),p.push(_,A,b)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ar extends $e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],h=[],d=[];let f=t;const l=(e-t)/s,p=new N,g=new kt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const u=r+m/n*o;p.x=f*Math.cos(u),p.y=f*Math.sin(u),c.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,d.push(g.x,g.y)}f+=l}for(let M=0;M<s;M++){const m=M*(n+1);for(let u=0;u<n;u++){const w=u+m,E=w,_=w+n+1,A=w+n+2,b=w+1;a.push(E,_,b),a.push(_,A,b)}}this.setIndex(a),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ne extends $e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let h=0;const d=[],f=new N,l=new N,p=[],g=[],M=[],m=[];for(let u=0;u<=n;u++){const w=[],E=u/n;let _=0;u===0&&o===0?_=.5/e:u===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const b=A/e;f.x=-t*Math.cos(s+b*r)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(s+b*r)*Math.sin(o+E*a),g.push(f.x,f.y,f.z),l.copy(f).normalize(),M.push(l.x,l.y,l.z),m.push(b+_,1-E),w.push(h++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){const E=d[u][w+1],_=d[u][w],A=d[u+1][w],b=d[u+1][w+1];(u!==0||o>0)&&p.push(E,_,b),(u!==n-1||c<Math.PI)&&p.push(_,A,b)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ii extends $e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],h=[],d=new N,f=new N,l=new N;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const M=g/s*r,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),l.subVectors(f,d).normalize(),c.push(l.x,l.y,l.z),h.push(g/s),h.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const M=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,w=(s+1)*p+g;o.push(M,m,w),o.push(m,u,w)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class et extends Ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class md extends Ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gd extends Ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yl extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _d extends Yl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ro=new pe,mc=new N,gc=new N;class xd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(mc),gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gc),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $l extends Wl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vd extends xd{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Md extends Yl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new vd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yd extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function _c(i,t,e,n){const s=Sd(n);switch(e){case Rl:return i*t;case Pl:return i*t;case Ll:return i*t*2;case Dl:return i*t/s.components*s.byteLength;case _a:return i*t/s.components*s.byteLength;case Il:return i*t*2/s.components*s.byteLength;case xa:return i*t*2/s.components*s.byteLength;case Cl:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case va:return i*t*4/s.components*s.byteLength;case rr:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:case No:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Uo:return Math.max(i,8)*Math.max(t,8)/2;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lr:case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ul:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case na:case ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sd(i){switch(i){case wn:case Tl:return{byteLength:1,components:1};case ps:case bl:case vs:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case oi:case pa:case yn:return{byteLength:4,components:1};case Al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){const t=new WeakMap;function e(a,c){const h=a.array,d=a.usage,f=h.byteLength,l=i.createBuffer();i.bindBuffer(c,l),i.bufferData(c,h,d),a.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:l,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){const d=c.array,f=c.updateRanges;if(i.bindBuffer(h,a),f.length===0)i.bufferSubData(h,0,d);else{f.sort((p,g)=>p.start-g.start);let l=0;for(let p=1;p<f.length;p++){const g=f[l],M=f[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++l,f[l]=M)}f.length=l+1;for(let p=0,g=f.length;p<g;p++){const M=f[p];i.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,wf=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uf=`#if defined( USE_POINTS_UV )
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
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,kp=`#define LAMBERT
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
}`,Gp=`#define LAMBERT
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
}`,Hp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,Zp=`#define TOON
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
}`,jp=`#define TOON
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
}`,Jp=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 color;
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
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:wd,alphahash_pars_fragment:Td,alphamap_fragment:bd,alphamap_pars_fragment:Ad,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Pd,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Id,begin_vertex:Ud,beginnormal_vertex:Nd,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Hd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Zd,displacementmap_vertex:jd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:tf,colorspace_pars_fragment:ef,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:of,envmap_physical_pars_fragment:_f,envmap_vertex:af,fog_vertex:cf,fog_pars_vertex:lf,fog_fragment:hf,fog_pars_fragment:uf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:xf,lights_toon_pars_fragment:vf,lights_phong_fragment:Mf,lights_phong_pars_fragment:yf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:wf,lights_fragment_maps:Tf,lights_fragment_end:bf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:If,map_particle_pars_fragment:Uf,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:kf,morphtarget_vertex:Gf,normal_fragment_begin:Hf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:jf,opaque_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:op,shadowmap_pars_vertex:ap,shadowmap_vertex:cp,shadowmask_pars_fragment:lp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:xp,transmission_pars_fragment:vp,uv_pars_fragment:Mp,uv_pars_vertex:yp,uv_vertex:Sp,worldpos_vertex:Ep,background_vert:wp,background_frag:Tp,backgroundCube_vert:bp,backgroundCube_frag:Ap,cube_vert:Rp,cube_frag:Cp,depth_vert:Pp,depth_frag:Lp,distanceRGBA_vert:Dp,distanceRGBA_frag:Ip,equirect_vert:Up,equirect_frag:Np,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:kp,meshlambert_frag:Gp,meshmatcap_vert:Hp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:$p,meshphysical_frag:Kp,meshtoon_vert:Zp,meshtoon_frag:jp,points_vert:Jp,points_frag:Qp,shadow_vert:tm,shadow_frag:em,sprite_vert:nm,sprite_frag:im},st={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},an={basic:{uniforms:De([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:De([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new qt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:De([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:De([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:De([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new qt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:De([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:De([st.points,st.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:De([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:De([st.common,st.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:De([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:De([st.sprite,st.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:De([st.common,st.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:De([st.lights,st.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};an.physical={uniforms:De([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Xs={r:0,b:0,g:0},Yn=new hn,sm=new pe;function rm(i,t,e,n,s,r,o){const a=new qt(0);let c=r===!0?0:1,h,d,f=null,l=0,p=null;function g(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?e:t).get(_)),_}function M(E){let _=!1;const A=g(E);A===null?u(a,c):A&&A.isColor&&(u(A,1),_=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Tr)?(d===void 0&&(d=new F(new vt(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Hi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Yn.copy(_.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(Yn)),d.material.toneMapped=Zt.getTransfer(A.colorSpace)!==ie,(f!==A||l!==A.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=A,l=A.version,p=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new F(new ce(2,2),new zn({name:"BackgroundMaterial",uniforms:Hi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(A.colorSpace)!==ie,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||l!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=A,l=A.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function u(E,_){E.getRGB(Xs,Vl(i)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,_,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,_=1){a.set(E),c=_,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:M,addToRenderList:m,dispose:w}}function om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=l(null);let r=s,o=!1;function a(v,C,O,B,W){let $=!1;const X=f(B,O,C);r!==X&&(r=X,h(r.object)),$=p(v,B,O,W),$&&g(v,B,O,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,_(v,C,O,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function f(v,C,O){const B=O.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let $=W[C.id];$===void 0&&($={},W[C.id]=$);let X=$[B];return X===void 0&&(X=l(c()),$[B]=X),X}function l(v){const C=[],O=[],B=[];for(let W=0;W<e;W++)C[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,C,O,B){const W=r.attributes,$=C.attributes;let X=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){const dt=W[H];let Mt=$[H];if(Mt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(v,C,O,B){const W={},$=C.attributes;let X=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){let dt=$[H];dt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor));const Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),W[H]=Mt,X++}r.attributes=W,r.attributesNum=X,r.index=B}function M(){const v=r.newAttributes;for(let C=0,O=v.length;C<O;C++)v[C]=0}function m(v){u(v,0)}function u(v,C){const O=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;O[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),W[v]!==C&&(i.vertexAttribDivisor(v,C),W[v]=C)}function w(){const v=r.newAttributes,C=r.enabledAttributes;for(let O=0,B=C.length;O<B;O++)C[O]!==v[O]&&(i.disableVertexAttribArray(O),C[O]=0)}function E(v,C,O,B,W,$,X){X===!0?i.vertexAttribIPointer(v,C,O,W,$):i.vertexAttribPointer(v,C,O,B,W,$)}function _(v,C,O,B){M();const W=B.attributes,$=O.getAttributes(),X=C.defaultAttributeValues;for(const j in $){const H=$[j];if(H.location>=0){let it=W[j];if(it===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const dt=it.normalized,Mt=it.itemSize,Ut=t.get(it);if(Ut===void 0)continue;const Gt=Ut.buffer,q=Ut.type,nt=Ut.bytesPerElement,xt=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===pa;if(it.isInterleavedBufferAttribute){const at=it.data,bt=at.stride,Jt=it.offset;if(at.isInstancedInterleavedBuffer){for(let Ct=0;Ct<H.locationSize;Ct++)u(H.location+Ct,at.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)m(H.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Ct=0;Ct<H.locationSize;Ct++)E(H.location+Ct,Mt/H.locationSize,q,dt,bt*nt,(Jt+Mt/H.locationSize*Ct)*nt,xt)}else{if(it.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)u(H.location+at,it.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let at=0;at<H.locationSize;at++)m(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let at=0;at<H.locationSize;at++)E(H.location+at,Mt/H.locationSize,q,dt,Mt*nt,Mt/H.locationSize*at*nt,xt)}}else if(X!==void 0){const dt=X[j];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(H.location,dt);break;case 3:i.vertexAttrib3fv(H.location,dt);break;case 4:i.vertexAttrib4fv(H.location,dt);break;default:i.vertexAttrib1fv(H.location,dt)}}}}w()}function A(){P();for(const v in n){const C=n[v];for(const O in C){const B=C[O];for(const W in B)d(B[W].object),delete B[W];delete C[O]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const O in C){const B=C[O];for(const W in B)d(B[W].object),delete B[W];delete C[O]}delete n[v.id]}function R(v){for(const C in n){const O=n[C];if(O[v.id]===void 0)continue;const B=O[v.id];for(const W in B)d(B[W].object),delete B[W];delete O[v.id]}}function P(){S(),o=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:w}}function am(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function o(h,d,f){f!==0&&(i.drawArraysInstanced(n,h,d,f),e.update(d,n,f))}function a(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];e.update(p,n,1)}function c(h,d,f,l){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)o(h[g],d[g],l[g]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,d,0,l,0,f);let g=0;for(let M=0;M<f;M++)g+=d[M]*l[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=c(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=e.logarithmicDepthBuffer===!0,l=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:l,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:A,maxSamples:b}}function lm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Zn,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const p=f.length!==0||l||n!==0||s;return s=l,n=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,l){e=d(f,l,0)},this.setState=function(f,l,p){const g=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?d(null):h();else{const w=r?0:n,E=w*4;let _=u.clippingState||null;c.value=_,_=d(g,l,E,p);for(let A=0;A!==E;++A)_[A]=e[A];u.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,l,p,g){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const u=p+M*4,w=l.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,_=p;E!==M;++E,_+=4)o.copy(f[E]).applyMatrix4(w,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function hm(i){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=Oi:a===Co&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Co)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new hd(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ai=4,xc=[.125,.215,.35,.446,.526,.582],Qn=20,oo=new $l,vc=new qt;let ao=null,co=0,lo=0,ho=!1;const jn=(1+Math.sqrt(5))/2,Si=1/jn,Mc=[new N(-jn,Si,0),new N(jn,Si,0),new N(-Si,0,jn),new N(Si,0,jn),new N(0,jn,-Si),new N(0,jn,Si),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],um=new N;class yc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=um}=r;ao=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,co,lo),this._renderer.xr.enabled=ho,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:vs,format:sn,colorSpace:Gi,depthBuffer:!1},s=Sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(r)),this._blurMaterial=fm(r,t,e)}return s}_compileMaterial(t){const e=new F(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,s,r){const c=new qe(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,l=f.autoClear,p=f.toneMapping;f.getClearColor(vc),f.toneMapping=Un,f.autoClear=!1;const g=new Ie({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),M=new F(new vt,g);let m=!1;const u=t.background;u?u.isColor&&(g.color.copy(u),t.background=null,m=!0):(g.color.copy(vc),m=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,h[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):E===1?(c.up.set(0,0,h[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,h[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));const _=this._cubeSize;qs(s,E*_,w>2?_:0,_,_),f.setRenderTarget(s),m&&f.render(M,c),f.render(t,c)}M.geometry.dispose(),M.material.dispose(),f.toneMapping=p,f.autoClear=l,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new F(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;qs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mc[(s-r-1)%Mc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new F(this._lodPlanes[s],h),l=h.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qn-1),M=r/g,m=isFinite(r)?1+Math.floor(d*M):Qn;m>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const u=[];let w=0;for(let R=0;R<Qn;++R){const P=R/M,S=Math.exp(-P*P/2);u.push(S),R===0?w+=S:R<m&&(w+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/w;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=u,l.latitudinal.value=o==="latitudinal",a&&(l.poleAxis.value=a);const{_lodMax:E}=this;l.dTheta.value=g,l.mipInt.value=E-n;const _=this._sizeLods[s],A=3*_*(s>E-Ai?s-E+Ai:0),b=4*(this._cubeSize-_);qs(e,A,b,3*_,2*_),c.setRenderTarget(e),c.render(f,oo)}}function dm(i){const t=[],e=[],n=[];let s=i;const r=i-Ai+1+xc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ai?c=xc[o-i+Ai-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),d=-h,f=1+h,l=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,M=3,m=2,u=1,w=new Float32Array(M*g*p),E=new Float32Array(m*g*p),_=new Float32Array(u*g*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,P=b>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];w.set(S,M*g*b),E.set(l,m*g*b);const v=[b,b,b,b,b,b];_.set(v,u*g*b)}const A=new $e;A.setAttribute("position",new ln(w,M)),A.setAttribute("uv",new ln(E,m)),A.setAttribute("faceIndex",new ln(_,u)),t.push(A),s>Ai&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sc(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fm(i,t,e){const n=new Float32Array(Qn),s=new N(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ec(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function wc(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function pm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===Ro||c===Co,d=c===Oi||c===Bi;if(h||d){let f=t.get(a);const l=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==l)return e===null&&(e=new yc(i)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return h&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new yc(i)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&c++;return c===h}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Kn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gm(i,t,e,n){const s={},r=new WeakMap;function o(f){const l=f.target;l.index!==null&&t.remove(l.index);for(const g in l.attributes)t.remove(l.attributes[g]);l.removeEventListener("dispose",o),delete s[l.id];const p=r.get(l);p&&(t.remove(p),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function a(f,l){return s[l.id]===!0||(l.addEventListener("dispose",o),s[l.id]=!0,e.memory.geometries++),l}function c(f){const l=f.attributes;for(const p in l)t.update(l[p],i.ARRAY_BUFFER)}function h(f){const l=[],p=f.index,g=f.attributes.position;let M=0;if(p!==null){const w=p.array;M=p.version;for(let E=0,_=w.length;E<_;E+=3){const A=w[E+0],b=w[E+1],R=w[E+2];l.push(A,b,b,R,R,A)}}else if(g!==void 0){const w=g.array;M=g.version;for(let E=0,_=w.length/3-1;E<_;E+=3){const A=E+0,b=E+1,R=E+2;l.push(A,b,b,R,R,A)}}else return;const m=new(Ol(l)?Hl:Gl)(l,1);m.version=M;const u=r.get(f);u&&t.remove(u),r.set(f,m)}function d(f){const l=r.get(f);if(l){const p=f.index;p!==null&&l.version<p.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function _m(i,t,e){let n;function s(l){n=l}let r,o;function a(l){r=l.type,o=l.bytesPerElement}function c(l,p){i.drawElements(n,p,r,l*o),e.update(p,n,1)}function h(l,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,l*o,g),e.update(p,n,g))}function d(l,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,l,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function f(l,p,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<l.length;u++)h(l[u]/o,p[u],M[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,l,0,M,0,g);let u=0;for(let w=0;w<g;w++)u+=p[w]*M[w];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vm(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,c){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let l=n.get(a);if(l===void 0||l.count!==f){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;l!==void 0&&l.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),M===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*b*4*f),P=new Bl(R,A,b,f);P.type=yn,P.needsUpdate=!0;const S=_*4;for(let C=0;C<f;C++){const O=u[C],B=w[C],W=E[C],$=A*b*4*C;for(let X=0;X<O.count;X++){const j=X*S;g===!0&&(s.fromBufferAttribute(O,X),R[$+j+0]=s.x,R[$+j+1]=s.y,R[$+j+2]=s.z,R[$+j+3]=0),M===!0&&(s.fromBufferAttribute(B,X),R[$+j+4]=s.x,R[$+j+5]=s.y,R[$+j+6]=s.z,R[$+j+7]=0),m===!0&&(s.fromBufferAttribute(W,X),R[$+j+8]=s.x,R[$+j+9]=s.y,R[$+j+10]=s.z,R[$+j+11]=W.itemSize===4?s.w:1)}}l={count:f,texture:P,size:new kt(A,b)},n.set(a,l),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const M=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",l.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:r}}function Mm(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,f=t.get(c,d);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;s.get(l)!==h&&(l.update(),s.set(l,h))}return f}function o(){s=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const Zl=new Oe,Tc=new ql(1,1),jl=new Bl,Jl=new qu,Ql=new Xl,bc=[],Ac=[],Rc=new Float32Array(16),Cc=new Float32Array(9),Pc=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bc[s];if(r===void 0&&(r=new Float32Array(s),bc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Pc.set(n),i.uniformMatrix2fv(this.addr,!1,Pc),Me(e,n)}}function bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Cc.set(n),i.uniformMatrix3fv(this.addr,!1,Cc),Me(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Rc.set(n),i.uniformMatrix4fv(this.addr,!1,Rc),Me(e,n)}}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=Fl,r=Tc):r=Zl,e.setTexture2D(t||r,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jl,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ql,s)}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jl,s)}function km(i){switch(i){case 5126:return ym;case 35664:return Sm;case 35665:return Em;case 35666:return wm;case 35674:return Tm;case 35675:return bm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Im;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Hm(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function Vm(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Wm(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function Xm(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qm(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $m(i,t){i.uniform1iv(this.addr,t)}function Km(i,t){i.uniform2iv(this.addr,t)}function Zm(i,t){i.uniform3iv(this.addr,t)}function jm(i,t){i.uniform4iv(this.addr,t)}function Jm(i,t){i.uniform1uiv(this.addr,t)}function Qm(i,t){i.uniform2uiv(this.addr,t)}function t0(i,t){i.uniform3uiv(this.addr,t)}function e0(i,t){i.uniform4uiv(this.addr,t)}function n0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zl,r[o])}function i0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jl,r[o])}function s0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ql,r[o])}function r0(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jl,r[o])}function o0(i){switch(i){case 5126:return Gm;case 35664:return Hm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Zm;case 35669:case 35673:return jm;case 5125:return Jm;case 36294:return Qm;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class a0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}}class c0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o0(e.type)}}class l0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Lc(i,t){i.seq.push(t),i.map[t.id]=t}function h0(i,t,e){const n=i.name,s=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),o=uo.lastIndex;let a=r[1];const c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){Lc(e,h===void 0?new a0(a,i,t):new c0(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new l0(a),Lc(e,f)),e=f}}}class hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);h0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Dc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const u0=37297;let d0=0;function f0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ic=new Ft;function p0(i){Zt._getMatrix(Ic,Zt.workingColorSpace,i);const t=`mat3( ${Ic.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+f0(i.getShaderSource(t),o)}else return s}function m0(i,t){const e=p0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function g0(i,t){let e;switch(t){case nu:e="Linear";break;case iu:e="Reinhard";break;case su:e="Cineon";break;case ru:e="ACESFilmic";break;case au:e="AgX";break;case cu:e="Neutral";break;case ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new N;function _0(){Zt.getLuminanceCoefficients(Ys);const i=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function v0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function os(i){return i!==""}function Nc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(y0,E0)}const S0=new Map;function E0(i,t){let e=Bt[t];if(e===void 0){const n=S0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sa(e)}const w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(i){return i.replace(w0,T0)}function T0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function b0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function A0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function C0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case El:t="ENVMAP_BLENDING_MULTIPLY";break;case tu:t="ENVMAP_BLENDING_MIX";break;case eu:t="ENVMAP_BLENDING_ADD";break}return t}function P0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=b0(e),h=A0(e),d=R0(e),f=C0(e),l=P0(e),p=x0(e),g=v0(r),M=s.createProgram();let m,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),u.length>0&&(u+=`
`)):(m=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),u=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Un?g0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,m0("linearToOutputTexel",e.outputColorSpace),_0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),o=sa(o),o=Nc(o,e),o=Fc(o,e),a=sa(a),a=Nc(a,e),a=Fc(a,e),o=Oc(o),a=Oc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=w+m+o,_=w+u+a,A=Dc(s,s.VERTEX_SHADER,E),b=Dc(s,s.FRAGMENT_SHADER,_);s.attachShader(M,A),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(M).trim(),B=s.getShaderInfoLog(A).trim(),W=s.getShaderInfoLog(b).trim();let $=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,b);else{const j=Uc(s,A,"vertex"),H=Uc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+j+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||W==="")&&(X=!1);X&&(C.diagnostics={runnable:$,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:u}})}s.deleteShader(A),s.deleteShader(b),P=new hr(s,M),S=M0(s,M)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,u0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=b,this}let D0=0;class I0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new U0(t),e.set(t,n)),n}}class U0{constructor(t){this.id=D0++,this.code=t,this.usedTimes=0}}function N0(i,t,e,n,s,r,o){const a=new zl,c=new I0,h=new Set,d=[],f=s.logarithmicDepthBuffer,l=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,v,C,O,B){const W=O.fog,$=B.geometry,X=S.isMeshStandardMaterial?O.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),H=j&&j.mapping===Tr?j.image.height:null,it=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Ut=0;$.morphAttributes.position!==void 0&&(Ut=1),$.morphAttributes.normal!==void 0&&(Ut=2),$.morphAttributes.color!==void 0&&(Ut=3);let Gt,q,nt,xt;if(it){const ne=an[it];Gt=ne.vertexShader,q=ne.fragmentShader}else Gt=S.vertexShader,q=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),xt=c.getFragmentShaderID(S);const at=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Jt=B.isInstancedMesh===!0,Ct=B.isBatchedMesh===!0,ge=!!S.map,le=!!S.matcap,Ht=!!j,L=!!S.aoMap,Ge=!!S.lightMap,Vt=!!S.bumpMap,Wt=!!S.normalMap,Et=!!S.displacementMap,re=!!S.emissiveMap,St=!!S.metalnessMap,T=!!S.roughnessMap,x=S.anisotropy>0,z=S.clearcoat>0,K=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,yt=S.transmission>0,ct=x&&!!S.anisotropyMap,pt=z&&!!S.clearcoatMap,Yt=z&&!!S.clearcoatNormalMap,tt=z&&!!S.clearcoatRoughnessMap,mt=J&&!!S.iridescenceMap,Rt=J&&!!S.iridescenceThicknessMap,Lt=Y&&!!S.sheenColorMap,gt=Y&&!!S.sheenRoughnessMap,Xt=!!S.specularMap,Ot=!!S.specularColorMap,se=!!S.specularIntensityMap,D=yt&&!!S.transmissionMap,rt=yt&&!!S.thicknessMap,V=!!S.gradientMap,Z=!!S.alphaMap,ut=S.alphaTest>0,lt=!!S.alphaHash,Nt=!!S.extensions;let he=Un;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(he=i.toneMapping);const Ae={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Gt,fragmentShader:q,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&B._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&B.instanceColor!==null,instancingMorph:Jt&&B.morphTexture!==null,supportsVertexTextures:l,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Gi,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:le,envMap:Ht,envMapMode:Ht&&j.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Ge,bumpMap:Vt,normalMap:Wt,displacementMap:l&&Et,emissiveMap:re,normalMapObjectSpace:Wt&&S.normalMapType===du,normalMapTangentSpace:Wt&&S.normalMapType===Nl,metalnessMap:St,roughnessMap:T,anisotropy:x,anisotropyMap:ct,clearcoat:z,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:J,iridescenceMap:mt,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:se,transmission:yt,transmissionMap:D,thicknessMap:rt,gradientMap:V,opaque:S.transparent===!1&&S.blending===Pi&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:lt,combine:S.combine,mapUv:ge&&M(S.map.channel),aoMapUv:L&&M(S.aoMap.channel),lightMapUv:Ge&&M(S.lightMap.channel),bumpMapUv:Vt&&M(S.bumpMap.channel),normalMapUv:Wt&&M(S.normalMap.channel),displacementMapUv:Et&&M(S.displacementMap.channel),emissiveMapUv:re&&M(S.emissiveMap.channel),metalnessMapUv:St&&M(S.metalnessMap.channel),roughnessMapUv:T&&M(S.roughnessMap.channel),anisotropyMapUv:ct&&M(S.anisotropyMap.channel),clearcoatMapUv:pt&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&M(S.sheenRoughnessMap.channel),specularMapUv:Xt&&M(S.specularMap.channel),specularColorMapUv:Ot&&M(S.specularColorMap.channel),specularIntensityMapUv:se&&M(S.specularIntensityMap.channel),transmissionMapUv:D&&M(S.transmissionMap.channel),thicknessMapUv:rt&&M(S.thicknessMap.channel),alphaMapUv:Z&&M(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Wt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(ge||Z),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ut,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ie,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ae.vertexUv1s=h.has(1),Ae.vertexUv2s=h.has(2),Ae.vertexUv3s=h.has(3),h.clear(),Ae}function u(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(w(v,S),E(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function w(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function E(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const v=g[S.type];let C;if(v){const O=an[v];C=od.clone(O.uniforms)}else C=S.uniforms;return C}function A(S,v){let C;for(let O=0,B=d.length;O<B;O++){const W=d[O];if(W.cacheKey===v){C=W,++C.usedTimes;break}}return C===void 0&&(C=new L0(i,v,S,r),d.push(C)),C}function b(S){if(--S.usedTimes===0){const v=d.indexOf(S);d[v]=d[d.length-1],d.pop(),S.destroy()}}function R(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:A,releaseProgram:b,releaseShaderCache:R,programs:d,dispose:P}}function F0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,l,p,g,M,m){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:l,material:p,groupOrder:g,renderOrder:f.renderOrder,z:M,group:m},i[t]=u):(u.id=f.id,u.object=f,u.geometry=l,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=M,u.group=m),t++,u}function a(f,l,p,g,M,m){const u=o(f,l,p,g,M,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(f,l,p,g,M,m){const u=o(f,l,p,g,M,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function h(f,l){e.length>1&&e.sort(f||O0),n.length>1&&n.sort(l||zc),s.length>1&&s.sort(l||zc)}function d(){for(let f=t,l=i.length;f<l;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:d,sort:h}}function B0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new kc,i.set(n,[o])):s>=r.length?(o=new kc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function z0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new qt};break;case"SpotLight":e={position:new N,direction:new N,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function k0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V0(i){const t=new z0,e=k0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);const s=new N,r=new pe,o=new pe;function a(h){let d=0,f=0,l=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,M=0,m=0,u=0,w=0,E=0,_=0,A=0,b=0,R=0;h.sort(H0);for(let S=0,v=h.length;S<v;S++){const C=h[S],O=C.color,B=C.intensity,W=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=O.r*B,f+=O.g*B,l+=O.b*B;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],B);R++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=X,p++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(O).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[M]=X;const j=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,j.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[M]=j.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=$,_++}M++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(O).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const j=C.shadow,H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(B),X.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[u]=X,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=l;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==M||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=_+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=M,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=R,n.version=G0++)}function c(h,d){let f=0,l=0,p=0,g=0,M=0;const m=d.matrixWorldInverse;for(let u=0,w=h.length;u<w;u++){const E=h[u];if(E.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(E.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const _=n.point[l];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),l++}else if(E.isHemisphereLight){const _=n.hemi[M];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),M++}}}return{setup:a,setupView:c,state:n}}function Gc(i){const t=new V0(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function W0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Gc(i),t.set(s,[a])):r>=o.length?(a=new Gc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`;function Y0(i,t,e){let n=new wa;const s=new kt,r=new kt,o=new fe,a=new md({depthPacking:uu}),c=new gd,h={},d=e.maxTextureSize,f={[Bn]:Fe,[Fe]:Bn,[en]:en},l=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),p=l.clone();p.defines.HORIZONTAL_PASS=1;const g=new $e;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new F(g,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let u=this.type;this.render=function(b,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(In),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==vn&&this.type===vn,W=u===vn&&this.type!==vn;for(let $=0,X=b.length;$<X;$++){const j=b[$],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||B===!0||W===!0){const Mt=this.type!==vn?{minFilter:rn,magFilter:rn}:{};H.map!==null&&H.map.dispose(),H.map=new ai(s.x,s.y,Mt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const dt=H.getViewportCount();for(let Mt=0;Mt<dt;Mt++){const Ut=H.getViewport(Mt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),O.viewport(o),H.updateMatrices(j,Mt),n=H.getFrustum(),_(R,P,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===vn&&w(H,P),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,C)};function w(b,R){const P=t.update(M);l.defines.VSM_SAMPLES!==b.blurSamples&&(l.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,l.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ai(s.x,s.y)),l.uniforms.shadow_pass.value=b.map.texture,l.uniforms.resolution.value=b.mapSize,l.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,P,l,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,P,p,M,null)}function E(b,R,P,S){let v=null;const C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)v=C;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=v.uuid,B=R.uuid;let W=h[O];W===void 0&&(W={},h[O]=W);let $=W[B];$===void 0&&($=v.clone(),W[B]=$,R.addEventListener("dispose",A)),v=$}if(v.visible=R.visible,v.wireframe=R.wireframe,S===vn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:f[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=P}return v}function _(b,R,P,S,v){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===vn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const B=t.update(b),W=b.material;if(Array.isArray(W)){const $=B.groups;for(let X=0,j=$.length;X<j;X++){const H=$[X],it=W[H.materialIndex];if(it&&it.visible){const dt=E(b,it,S,v);b.onBeforeShadow(i,b,R,P,B,dt,H),i.renderBufferDirect(P,null,B,dt,b,H),b.onAfterShadow(i,b,R,P,B,dt,H)}}}else if(W.visible){const $=E(b,W,S,v);b.onBeforeShadow(i,b,R,P,B,$,null),i.renderBufferDirect(P,null,B,$,b,null),b.onAfterShadow(i,b,R,P,B,$,null)}}const O=b.children;for(let B=0,W=O.length;B<W;B++)_(O[B],R,P,S,v)}function A(b){b.target.removeEventListener("dispose",A);for(const P in h){const S=h[P],v=b.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const $0={[yo]:So,[Eo]:bo,[wo]:Ao,[Fi]:To,[So]:yo,[bo]:Eo,[Ao]:wo,[To]:Fi};function K0(i,t){function e(){let D=!1;const rt=new fe;let V=null;const Z=new fe(0,0,0,0);return{setMask:function(ut){V!==ut&&!D&&(i.colorMask(ut,ut,ut,ut),V=ut)},setLocked:function(ut){D=ut},setClear:function(ut,lt,Nt,he,Ae){Ae===!0&&(ut*=he,lt*=he,Nt*=he),rt.set(ut,lt,Nt,he),Z.equals(rt)===!1&&(i.clearColor(ut,lt,Nt,he),Z.copy(rt))},reset:function(){D=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,V=null,Z=null,ut=null;return{setReversed:function(lt){if(rt!==lt){const Nt=t.get("EXT_clip_control");rt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const he=ut;ut=null,this.setClear(he)}rt=lt},getReversed:function(){return rt},setTest:function(lt){lt?at(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(lt){V!==lt&&!D&&(i.depthMask(lt),V=lt)},setFunc:function(lt){if(rt&&(lt=$0[lt]),Z!==lt){switch(lt){case yo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=lt}},setLocked:function(lt){D=lt},setClear:function(lt){ut!==lt&&(rt&&(lt=1-lt),i.clearDepth(lt),ut=lt)},reset:function(){D=!1,V=null,Z=null,ut=null,rt=!1}}}function s(){let D=!1,rt=null,V=null,Z=null,ut=null,lt=null,Nt=null,he=null,Ae=null;return{setTest:function(ne){D||(ne?at(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ne){rt!==ne&&!D&&(i.stencilMask(ne),rt=ne)},setFunc:function(ne,Ke,fn){(V!==ne||Z!==Ke||ut!==fn)&&(i.stencilFunc(ne,Ke,fn),V=ne,Z=Ke,ut=fn)},setOp:function(ne,Ke,fn){(lt!==ne||Nt!==Ke||he!==fn)&&(i.stencilOp(ne,Ke,fn),lt=ne,Nt=Ke,he=fn)},setLocked:function(ne){D=ne},setClear:function(ne){Ae!==ne&&(i.clearStencil(ne),Ae=ne)},reset:function(){D=!1,rt=null,V=null,Z=null,ut=null,lt=null,Nt=null,he=null,Ae=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,h=new WeakMap;let d={},f={},l=new WeakMap,p=[],g=null,M=!1,m=null,u=null,w=null,E=null,_=null,A=null,b=null,R=new qt(0,0,0),P=0,S=!1,v=null,C=null,O=null,B=null,W=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=j>=2);let it=null,dt={};const Mt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Gt=new fe().fromArray(Mt),q=new fe().fromArray(Ut);function nt(D,rt,V,Z){const ut=new Uint8Array(4),lt=i.createTexture();i.bindTexture(D,lt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<V;Nt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(rt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return lt}const xt={};xt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Fi),Vt(!1),Wt(Wa),at(i.CULL_FACE),L(In);function at(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function bt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Jt(D,rt){return f[D]!==rt?(i.bindFramebuffer(D,rt),f[D]=rt,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=rt),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ct(D,rt){let V=p,Z=!1;if(D){V=l.get(rt),V===void 0&&(V=[],l.set(rt,V));const ut=D.textures;if(V.length!==ut.length||V[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Nt=ut.length;lt<Nt;lt++)V[lt]=i.COLOR_ATTACHMENT0+lt;V.length=ut.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function ge(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const le={[Jn]:i.FUNC_ADD,[Oh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};le[zh]=i.MIN,le[kh]=i.MAX;const Ht={[Gh]:i.ZERO,[Hh]:i.ONE,[Vh]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[Kh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[Xh]:i.DST_ALPHA,[Wh]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[Jh]:i.CONSTANT_ALPHA,[Qh]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,rt,V,Z,ut,lt,Nt,he,Ae,ne){if(D===In){M===!0&&(bt(i.BLEND),M=!1);return}if(M===!1&&(at(i.BLEND),M=!0),D!==Fh){if(D!==m||ne!==S){if((u!==Jn||_!==Jn)&&(i.blendEquation(i.FUNC_ADD),u=Jn,_=Jn),ne)switch(D){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,E=null,A=null,b=null,R.set(0,0,0),P=0,m=D,S=ne}return}ut=ut||rt,lt=lt||V,Nt=Nt||Z,(rt!==u||ut!==_)&&(i.blendEquationSeparate(le[rt],le[ut]),u=rt,_=ut),(V!==w||Z!==E||lt!==A||Nt!==b)&&(i.blendFuncSeparate(Ht[V],Ht[Z],Ht[lt],Ht[Nt]),w=V,E=Z,A=lt,b=Nt),(he.equals(R)===!1||Ae!==P)&&(i.blendColor(he.r,he.g,he.b,Ae),R.copy(he),P=Ae),m=D,S=!1}function Ge(D,rt){D.side===en?bt(i.CULL_FACE):at(i.CULL_FACE);let V=D.side===Fe;rt&&(V=!V),Vt(V),D.blending===Pi&&D.transparent===!1?L(In):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){v!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),v=D)}function Wt(D){D!==Uh?(at(i.CULL_FACE),D!==C&&(D===Wa?i.cullFace(i.BACK):D===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),C=D}function Et(D){D!==O&&(X&&i.lineWidth(D),O=D)}function re(D,rt,V){D?(at(i.POLYGON_OFFSET_FILL),(B!==rt||W!==V)&&(i.polygonOffset(rt,V),B=rt,W=V)):bt(i.POLYGON_OFFSET_FILL)}function St(D){D?at(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+$-1),it!==D&&(i.activeTexture(D),it=D)}function x(D,rt,V){V===void 0&&(it===null?V=i.TEXTURE0+$-1:V=it);let Z=dt[V];Z===void 0&&(Z={type:void 0,texture:void 0},dt[V]=Z),(Z.type!==D||Z.texture!==rt)&&(it!==V&&(i.activeTexture(V),it=V),i.bindTexture(D,rt||xt[D]),Z.type=D,Z.texture=rt)}function z(){const D=dt[it];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){Gt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Gt.copy(D))}function gt(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Xt(D,rt){let V=h.get(rt);V===void 0&&(V=new WeakMap,h.set(rt,V));let Z=V.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(rt,D.name),V.set(D,Z))}function Ot(D,rt){const Z=h.get(rt).get(D);c.get(rt)!==Z&&(i.uniformBlockBinding(rt,Z,D.__bindingPointIndex),c.set(rt,Z))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,dt={},f={},l=new WeakMap,p=[],g=null,M=!1,m=null,u=null,w=null,E=null,_=null,A=null,b=null,R=new qt(0,0,0),P=0,S=!1,v=null,C=null,O=null,B=null,W=null,Gt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:bt,bindFramebuffer:Jt,drawBuffers:Ct,useProgram:ge,setBlending:L,setMaterial:Ge,setFlipSided:Vt,setCullFace:Wt,setLineWidth:Et,setPolygonOffset:re,setScissorTest:St,activeTexture:T,bindTexture:x,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Yt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Lt,viewport:gt,reset:se}}function Z0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,d=new WeakMap;let f;const l=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):pr("canvas")}function M(T,x,z){let K=1;const J=St(T);if((J.width>z||J.height>z)&&(K=z/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(K*J.width),yt=Math.floor(K*J.height);f===void 0&&(f=g(Y,yt));const ct=x?g(Y,yt):f;return ct.width=Y,ct.height=yt,ct.getContext("2d").drawImage(T,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+yt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,x,z,K,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const yt=J?dr:Zt.getTransfer(K);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=yt===ie?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(T,x){let z;return T?x===null||x===oi||x===zi?z=i.DEPTH24_STENCIL8:x===yn?z=i.DEPTH32F_STENCIL8:x===ps&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===oi||x===zi?z=i.DEPTH_COMPONENT24:x===yn?z=i.DEPTH_COMPONENT32F:x===ps&&(z=i.DEPTH_COMPONENT16),z}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==cn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){const x=T.target;x.removeEventListener("dispose",b),P(x),x.isVideoTexture&&d.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),v(x)}function P(T){const x=n.get(T);if(x.__webglInit===void 0)return;const z=T.source,K=l.get(z);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(T),Object.keys(K).length===0&&l.delete(z)}n.remove(T)}function S(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const z=T.source,K=l.get(z);delete K[x.__cacheKey],o.memory.textures--}function v(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[K][J]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=T.textures;for(let K=0,J=z.length;K<J;K++){const Y=n.get(z[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(T)}let C=0;function O(){C=0}function B(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function $(T,x){const z=n.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,T,x);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function X(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function j(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function H(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){nt(z,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const it={[Po]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},dt={[rn]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Mt={[fu]:i.NEVER,[vu]:i.ALWAYS,[pu]:i.LESS,[Fl]:i.LEQUAL,[mu]:i.EQUAL,[xu]:i.GEQUAL,[gu]:i.GREATER,[_u]:i.NOTEQUAL};function Ut(T,x){if(x.type===yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===cn||x.magFilter===Or||x.magFilter===As||x.magFilter===ii||x.minFilter===cn||x.minFilter===Or||x.minFilter===As||x.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===rn||x.minFilter!==As&&x.minFilter!==ii||x.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Gt(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",b));const K=x.source;let J=l.get(K);J===void 0&&(J={},l.set(K,J));const Y=W(x);if(Y!==T.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[Y].usedTimes++;const yt=J[T.__cacheKey];yt!==void 0&&(J[T.__cacheKey].usedTimes--,yt.usedTimes===0&&S(x)),T.__cacheKey=Y,T.__webglTexture=J[Y].texture}return z}function q(T,x,z){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const J=Gt(T,x),Y=x.source;e.bindTexture(K,T.__webglTexture,i.TEXTURE0+z);const yt=n.get(Y);if(Y.version!==yt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const ct=Zt.getPrimaries(Zt.workingColorSpace),pt=x.colorSpace===Ln?null:Zt.getPrimaries(x.colorSpace),Yt=x.colorSpace===Ln||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let tt=M(x.image,!1,s.maxTextureSize);tt=re(x,tt);const mt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type);let Lt=E(x.internalFormat,mt,Rt,x.colorSpace,x.isVideoTexture);Ut(K,x);let gt;const Xt=x.mipmaps,Ot=x.isVideoTexture!==!0,se=yt.__version===void 0||J===!0,D=Y.dataReady,rt=A(x,tt);if(x.isDepthTexture)Lt=_(x.format===ki,x.type),se&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Lt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,tt.width,tt.height,0,mt,Rt,null));else if(x.isDataTexture)if(Xt.length>0){Ot&&se&&e.texStorage2D(i.TEXTURE_2D,rt,Lt,Xt[0].width,Xt[0].height);for(let V=0,Z=Xt.length;V<Z;V++)gt=Xt[V],Ot?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,mt,Rt,gt.data);x.generateMipmaps=!1}else Ot?(se&&e.texStorage2D(i.TEXTURE_2D,rt,Lt,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Rt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,tt.width,tt.height,0,mt,Rt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Lt,Xt[0].width,Xt[0].height,tt.depth);for(let V=0,Z=Xt.length;V<Z;V++)if(gt=Xt[V],x.format!==sn)if(mt!==null)if(Ot){if(D)if(x.layerUpdates.size>0){const ut=_c(gt.width,gt.height,x.format,x.type);for(const lt of x.layerUpdates){const Nt=gt.data.subarray(lt*ut/gt.data.BYTES_PER_ELEMENT,(lt+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,lt,gt.width,gt.height,1,mt,Nt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Lt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,tt.depth,mt,Rt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Lt,gt.width,gt.height,tt.depth,0,mt,Rt,gt.data)}else{Ot&&se&&e.texStorage2D(i.TEXTURE_2D,rt,Lt,Xt[0].width,Xt[0].height);for(let V=0,Z=Xt.length;V<Z;V++)gt=Xt[V],x.format!==sn?mt!==null?Ot?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,mt,Rt,gt.data)}else if(x.isDataArrayTexture)if(Ot){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Lt,tt.width,tt.height,tt.depth),D)if(x.layerUpdates.size>0){const V=_c(tt.width,tt.height,x.format,x.type);for(const Z of x.layerUpdates){const ut=tt.data.subarray(Z*V/tt.data.BYTES_PER_ELEMENT,(Z+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,mt,Rt,ut)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Rt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,tt.width,tt.height,tt.depth,0,mt,Rt,tt.data);else if(x.isData3DTexture)Ot?(se&&e.texStorage3D(i.TEXTURE_3D,rt,Lt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Rt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,tt.width,tt.height,tt.depth,0,mt,Rt,tt.data);else if(x.isFramebufferTexture){if(se)if(Ot)e.texStorage2D(i.TEXTURE_2D,rt,Lt,tt.width,tt.height);else{let V=tt.width,Z=tt.height;for(let ut=0;ut<rt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Lt,V,Z,0,mt,Rt,null),V>>=1,Z>>=1}}else if(Xt.length>0){if(Ot&&se){const V=St(Xt[0]);e.texStorage2D(i.TEXTURE_2D,rt,Lt,V.width,V.height)}for(let V=0,Z=Xt.length;V<Z;V++)gt=Xt[V],Ot?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt,Rt,gt):e.texImage2D(i.TEXTURE_2D,V,Lt,mt,Rt,gt);x.generateMipmaps=!1}else if(Ot){if(se){const V=St(tt);e.texStorage2D(i.TEXTURE_2D,rt,Lt,V.width,V.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Rt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,mt,Rt,tt);m(x)&&u(K),yt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function nt(T,x,z){if(x.image.length!==6)return;const K=Gt(T,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const Y=n.get(J);if(J.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const yt=Zt.getPrimaries(Zt.workingColorSpace),ct=x.colorSpace===Ln?null:Zt.getPrimaries(x.colorSpace),pt=x.colorSpace===Ln||yt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let Z=0;Z<6;Z++)!Yt&&!tt?mt[Z]=M(x.image[Z],!0,s.maxCubemapSize):mt[Z]=tt?x.image[Z].image:x.image[Z],mt[Z]=re(x,mt[Z]);const Rt=mt[0],Lt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),Xt=E(x.internalFormat,Lt,gt,x.colorSpace),Ot=x.isVideoTexture!==!0,se=Y.__version===void 0||K===!0,D=J.dataReady;let rt=A(x,Rt);Ut(i.TEXTURE_CUBE_MAP,x);let V;if(Yt){Ot&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Xt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){V=mt[Z].mipmaps;for(let ut=0;ut<V.length;ut++){const lt=V[ut];x.format!==sn?Lt!==null?Ot?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,lt.width,lt.height,Lt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Xt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,lt.width,lt.height,Lt,gt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Xt,lt.width,lt.height,0,Lt,gt,lt.data)}}}else{if(V=x.mipmaps,Ot&&se){V.length>0&&rt++;const Z=St(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,mt[Z].width,mt[Z].height,Lt,gt,mt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,mt[Z].width,mt[Z].height,0,Lt,gt,mt[Z].data);for(let ut=0;ut<V.length;ut++){const Nt=V[ut].image[Z].image;Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Nt.width,Nt.height,Lt,gt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Xt,Nt.width,Nt.height,0,Lt,gt,Nt.data)}}else{Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,gt,mt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,Lt,gt,mt[Z]);for(let ut=0;ut<V.length;ut++){const lt=V[ut];Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Lt,gt,lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Xt,Lt,gt,lt.image[Z])}}}m(x)&&u(i.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function xt(T,x,z,K,J,Y){const yt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),pt=E(z.internalFormat,yt,ct,z.colorSpace),Yt=n.get(x),tt=n.get(z);if(tt.__renderTarget=x,!Yt.__hasExternalTextures){const mt=Math.max(1,x.width>>Y),Rt=Math.max(1,x.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,pt,mt,Rt,x.depth,0,yt,ct,null):e.texImage2D(J,Y,pt,mt,Rt,0,yt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,tt.__webglTexture,0,Vt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,tt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=_(x.stencilBuffer,J),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Vt(x);Wt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const K=x.textures;for(let J=0;J<K.length;J++){const Y=K[J],yt=r.convert(Y.format,Y.colorSpace),ct=r.convert(Y.type),pt=E(Y.internalFormat,yt,ct,Y.colorSpace),Yt=Vt(x);z&&Wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,pt,x.width,x.height):Wt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,pt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,pt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const J=K.__webglTexture,Y=Vt(x);if(x.depthTexture.format===Li)Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===ki)Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Jt(T){const x=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");bt(x.__webglFramebuffer,T)}else if(z){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),at(x.__webglDepthbuffer[K],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(T,x,z){const K=n.get(T);x!==void 0&&xt(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Jt(T)}function ge(T){const x=T.texture,z=n.get(T),K=n.get(x);T.addEventListener("dispose",R);const J=T.textures,Y=T.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let pt=0;pt<x.mipmaps.length;pt++)z.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else z.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)z.__webglFramebuffer[ct]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ct=0,pt=J.length;ct<pt;ct++){const Yt=n.get(J[ct]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Wt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const pt=J[ct];z.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);const Yt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),mt=E(pt.internalFormat,Yt,tt,pt.colorSpace,T.isXRRenderTarget===!0),Rt=Vt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),at(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)xt(z.__webglFramebuffer[ct][pt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else xt(z.__webglFramebuffer[ct],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ct=0,pt=J.length;ct<pt;ct++){const Yt=J[ct],tt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ut(i.TEXTURE_2D,Yt),xt(z.__webglFramebuffer,T,Yt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Yt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Ut(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)xt(z.__webglFramebuffer[pt],T,x,i.COLOR_ATTACHMENT0,ct,pt);else xt(z.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ct,0);m(x)&&u(ct),e.unbindTexture()}T.depthBuffer&&Jt(T)}function le(T){const x=T.textures;for(let z=0,K=x.length;z<K;z++){const J=x[z];if(m(J)){const Y=w(T),yt=n.get(J).__webglTexture;e.bindTexture(Y,yt),u(Y),e.unbindTexture()}}}const Ht=[],L=[];function Ge(T){if(T.samples>0){if(Wt(T)===!1){const x=T.textures,z=T.width,K=T.height;let J=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),ct=x.length>1;if(ct)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Yt=n.get(x[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,J,i.NEAREST),c===!0&&(Ht.length=0,L.length=0,Ht.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ht.push(Y),L.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Yt=n.get(x[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Vt(T){return Math.min(s.maxSamples,T.samples)}function Wt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(T){const x=o.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function re(T,x){const z=T.colorSpace,K=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Gi&&z!==Ln&&(Zt.getTransfer(z)===ie?(K!==sn||J!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Ct,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Wt}function j0(i,t){function e(n,s=Ln){let r;const o=Zt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.BYTE;if(n===bl)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===vs)return i.HALF_FLOAT;if(n===Rl)return i.ALPHA;if(n===Cl)return i.RGB;if(n===sn)return i.RGBA;if(n===Pl)return i.LUMINANCE;if(n===Ll)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===Il)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===va)return i.RGBA_INTEGER;if(n===rr||n===or||n===ar||n===cr)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Io||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fo||n===Oo)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===ko||n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===Zo||n===jo||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===Qo||n===ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lr)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===ea||n===na||n===ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q0=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:J0,fragmentShader:Q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new F(new ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eg extends Xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,h=null,d=null,f=null,l=null,p=null,g=null;const M=new tg,m=e.getContextAttributes();let u=null,w=null;const E=[],_=[],A=new kt;let b=null;const R=new qe;R.viewport=new fe;const P=new qe;P.viewport=new fe;const S=[R,P],v=new yd;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=E[q];return nt===void 0&&(nt=new io,E[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=E[q];return nt===void 0&&(nt=new io,E[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=E[q];return nt===void 0&&(nt=new io,E[q]=nt),nt.getHandSpace()};function B(q){const nt=_.indexOf(q.inputSource);if(nt===-1)return;const xt=E[nt];xt!==void 0&&(xt.update(q.inputSource,q.frame,h||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let q=0;q<E.length;q++){const nt=_[q];nt!==null&&(_[q]=null,E[q].disconnect(nt))}C=null,O=null,M.reset(),t.setRenderTarget(u),p=null,l=null,f=null,s=null,w=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return l!==null?l:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,at=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=m.stencil?ki:Li,at=m.stencil?zi:oi);const Jt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};f=new XRWebGLBinding(s,e),l=f.createProjectionLayer(Jt),s.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),w=new ai(l.textureWidth,l.textureHeight,{format:sn,type:wn,depthTexture:new ql(l.textureWidth,l.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1})}else{const xt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ai(p.framebufferWidth,p.framebufferHeight,{format:sn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(q){for(let nt=0;nt<q.removed.length;nt++){const xt=q.removed[nt],at=_.indexOf(xt);at>=0&&(_[at]=null,E[at].disconnect(xt))}for(let nt=0;nt<q.added.length;nt++){const xt=q.added[nt];let at=_.indexOf(xt);if(at===-1){for(let Jt=0;Jt<E.length;Jt++)if(Jt>=_.length){_.push(xt),at=Jt;break}else if(_[Jt]===null){_[Jt]=xt,at=Jt;break}if(at===-1)break}const bt=E[at];bt&&bt.connect(xt)}}const X=new N,j=new N;function H(q,nt,xt){X.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);const at=X.distanceTo(j),bt=nt.projectionMatrix.elements,Jt=xt.projectionMatrix.elements,Ct=bt[14]/(bt[10]-1),ge=bt[14]/(bt[10]+1),le=(bt[9]+1)/bt[5],Ht=(bt[9]-1)/bt[5],L=(bt[8]-1)/bt[0],Ge=(Jt[8]+1)/Jt[0],Vt=Ct*L,Wt=Ct*Ge,Et=at/(-L+Ge),re=Et*-L;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const St=Ct+Et,T=ge+Et,x=Vt-re,z=Wt+(at-re),K=le*ge/T*St,J=Ht*ge/T*St;q.projectionMatrix.makePerspective(x,z,K,J,St,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,xt=q.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),v.near=P.near=R.near=nt,v.far=P.far=R.far=xt,(C!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,O=v.far),R.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;const at=q.parent,bt=v.cameras;it(v,at);for(let Jt=0;Jt<bt.length;Jt++)it(bt[Jt],at);bt.length===2?H(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),dt(q,v,at)};function dt(q,nt,xt){xt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(l===null&&p===null))return c},this.setFoveation=function(q){c=q,l!==null&&(l.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let Mt=null;function Ut(q,nt){if(d=nt.getViewerPose(h||o),g=nt,d!==null){const xt=d.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let at=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Ct=0;Ct<xt.length;Ct++){const ge=xt[Ct];let le=null;if(p!==null)le=p.getViewport(ge);else{const L=f.getViewSubImage(l,ge);le=L.viewport,Ct===0&&(t.setRenderTargetTextures(w,L.colorTexture,l.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(w))}let Ht=S[Ct];Ht===void 0&&(Ht=new qe,Ht.layers.enable(Ct),Ht.viewport=new fe,S[Ct]=Ht),Ht.matrix.fromArray(ge.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ge.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(v.matrix.copy(Ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Ht)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Ct=f.getDepthInformation(xt[0]);Ct&&Ct.isValid&&Ct.texture&&M.init(t,Ct,s.renderState)}}for(let xt=0;xt<E.length;xt++){const at=_[xt],bt=E[xt];at!==null&&bt!==void 0&&bt.update(at,nt,h||o)}Mt&&Mt(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Gt=new Kl;Gt.setAnimationLoop(Ut),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const $n=new hn,ng=new pe;function ig(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Vl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,w,E,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),l(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),M(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,w,E):u.isSpriteMaterial?h(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Fe&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Fe&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=t.get(u),E=w.envMap,_=w.envMapRotation;E&&(m.envMap.value=E,$n.copy(_),$n.x*=-1,$n.y*=-1,$n.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler($n)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,w,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function l(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Fe&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const _=E.program;n.uniformBlockBinding(w,_)}function h(w,E){let _=s[w.id];_===void 0&&(g(w),_=d(w),s[w.id]=_,w.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(w,A);const b=t.render.frame;r[w.id]!==b&&(l(w),r[w.id]=b)}function d(w){const E=f();w.__bindingPointIndex=E;const _=i.createBuffer(),A=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,_),_}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(w){const E=s[w.id],_=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let b=0,R=_.length;b<R;b++){const P=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,v=P.length;S<v;S++){const C=P[S];if(p(C,b,S,A)===!0){const O=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let $=0;$<B.length;$++){const X=B[$],j=M(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+W,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,E,_,A){const b=w.value,R=E+"_"+_;if(A[R]===void 0)return typeof b=="number"||typeof b=="boolean"?A[R]=b:A[R]=b.clone(),!0;{const P=A[R];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[R]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(w){const E=w.uniforms;let _=0;const A=16;for(let R=0,P=E.length;R<P;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,C=S.length;v<C;v++){const O=S[v],B=Array.isArray(O.value)?O.value:[O.value];for(let W=0,$=B.length;W<$;W++){const X=B[W],j=M(X),H=_%A,it=H%j.boundary,dt=H+it;_+=it,dt!==0&&A-dt<j.storage&&(_+=A-dt),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=j.storage}}}const b=_%A;return b>0&&(_+=A-b),w.__size=_,w.__cache={},this}function M(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const _=o.indexOf(E.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:h,dispose:u}}class rg{constructor(t={}){const{canvas:e=Ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:l=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,u=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Un,this.toneMappingExposure=1;const _=this;let A=!1,b=0,R=0,P=null,S=-1,v=null;const C=new fe,O=new fe;let B=null;const W=new qt(0);let $=0,X=e.width,j=e.height,H=1,it=null,dt=null;const Mt=new fe(0,0,X,j),Ut=new fe(0,0,X,j);let Gt=!1;const q=new wa;let nt=!1,xt=!1;this.transmissionResolutionScale=1;const at=new pe,bt=new pe,Jt=new N,Ct=new fe,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Ht(){return P===null?H:1}let L=n;function Ge(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const I="webgl2";if(L=Ge(I,y),L===null)throw Ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Vt,Wt,Et,re,St,T,x,z,K,J,Y,yt,ct,pt,Yt,tt,mt,Rt,Lt,gt,Xt,Ot,se,D;function rt(){Vt=new mm(L),Vt.init(),Ot=new j0(L,Vt),Wt=new cm(L,Vt,t,Ot),Et=new K0(L,Vt),Wt.reverseDepthBuffer&&l&&Et.buffers.depth.setReversed(!0),re=new xm(L),St=new F0,T=new Z0(L,Vt,Et,St,Wt,Ot,re),x=new hm(_),z=new pm(_),K=new Ed(L),se=new om(L,K),J=new gm(L,K,re,se),Y=new Mm(L,J,K,re),Lt=new vm(L,Wt,T),tt=new lm(St),yt=new N0(_,x,z,Vt,Wt,se,tt),ct=new ig(_,St),pt=new B0,Yt=new W0(Vt),Rt=new rm(_,x,z,Et,Y,p,c),mt=new Y0(_,Y,Wt),D=new sg(L,re,Wt,Et),gt=new am(L,Vt,re),Xt=new _m(L,Vt,re),re.programs=yt.programs,_.capabilities=Wt,_.extensions=Vt,_.properties=St,_.renderLists=pt,_.shadowMap=mt,_.state=Et,_.info=re}rt();const V=new eg(_,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(X,j,!1))},this.getSize=function(y){return y.set(X,j)},this.setSize=function(y,I,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,j=I,e.width=Math.floor(y*H),e.height=Math.floor(I*H),k===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(X*H,j*H).floor()},this.setDrawingBufferSize=function(y,I,k){X=y,j=I,H=k,e.width=Math.floor(y*k),e.height=Math.floor(I*k),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,I,k,G){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,I,k,G),Et.viewport(C.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Ut)},this.setScissor=function(y,I,k,G){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,I,k,G),Et.scissor(O.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(y){Et.setScissorTest(Gt=y)},this.setOpaqueSort=function(y){it=y},this.setTransparentSort=function(y){dt=y},this.getClearColor=function(y){return y.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,k=!0){let G=0;if(y){let U=!1;if(P!==null){const Q=P.texture.format;U=Q===va||Q===xa||Q===_a}if(U){const Q=P.texture.type,ot=Q===wn||Q===oi||Q===ps||Q===zi||Q===ma||Q===ga,ft=Rt.getClearColor(),_t=Rt.getClearAlpha(),Dt=ft.r,It=ft.g,wt=ft.b;ot?(g[0]=Dt,g[1]=It,g[2]=wt,g[3]=_t,L.clearBufferuiv(L.COLOR,0,g)):(M[0]=Dt,M[1]=It,M[2]=wt,M[3]=_t,L.clearBufferiv(L.COLOR,0,M))}else G|=L.COLOR_BUFFER_BIT}I&&(G|=L.DEPTH_BUFFER_BIT),k&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Rt.dispose(),pt.dispose(),Yt.dispose(),St.dispose(),x.dispose(),z.dispose(),Y.dispose(),se.dispose(),D.dispose(),yt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Oa),V.removeEventListener("sessionend",Ba),Gn.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=re.autoReset,I=mt.enabled,k=mt.autoUpdate,G=mt.needsUpdate,U=mt.type;rt(),re.autoReset=y,mt.enabled=I,mt.autoUpdate=k,mt.needsUpdate=G,mt.type=U}function lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Nt(y){const I=y.target;I.removeEventListener("dispose",Nt),he(I)}function he(y){Ae(y),St.remove(y)}function Ae(y){const I=St.get(y).programs;I!==void 0&&(I.forEach(function(k){yt.releaseProgram(k)}),y.isShaderMaterial&&yt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,k,G,U,Q){I===null&&(I=ge);const ot=U.isMesh&&U.matrixWorld.determinant()<0,ft=Rh(y,I,k,G,U);Et.setMaterial(G,ot);let _t=k.index,Dt=1;if(G.wireframe===!0){if(_t=J.getWireframeAttribute(k),_t===void 0)return;Dt=2}const It=k.drawRange,wt=k.attributes.position;let $t=It.start*Dt,Qt=(It.start+It.count)*Dt;Q!==null&&($t=Math.max($t,Q.start*Dt),Qt=Math.min(Qt,(Q.start+Q.count)*Dt)),_t!==null?($t=Math.max($t,0),Qt=Math.min(Qt,_t.count)):wt!=null&&($t=Math.max($t,0),Qt=Math.min(Qt,wt.count));const _e=Qt-$t;if(_e<0||_e===1/0)return;se.setup(U,G,ft,k,_t);let ue,Kt=gt;if(_t!==null&&(ue=K.get(_t),Kt=Xt,Kt.setIndex(ue)),U.isMesh)G.wireframe===!0?(Et.setLineWidth(G.wireframeLinewidth*Ht()),Kt.setMode(L.LINES)):Kt.setMode(L.TRIANGLES);else if(U.isLine){let Tt=G.linewidth;Tt===void 0&&(Tt=1),Et.setLineWidth(Tt*Ht()),U.isLineSegments?Kt.setMode(L.LINES):U.isLineLoop?Kt.setMode(L.LINE_LOOP):Kt.setMode(L.LINE_STRIP)}else U.isPoints?Kt.setMode(L.POINTS):U.isSprite&&Kt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Tt=U._multiDrawStarts,Ee=U._multiDrawCounts,te=U._multiDrawCount,Ze=_t?K.get(_t).bytesPerElement:1,ci=St.get(G).currentProgram.getUniforms();for(let Be=0;Be<te;Be++)ci.setValue(L,"_gl_DrawID",Be),Kt.render(Tt[Be]/Ze,Ee[Be])}else if(U.isInstancedMesh)Kt.renderInstances($t,_e,U.count);else if(k.isInstancedBufferGeometry){const Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ee=Math.min(k.instanceCount,Tt);Kt.renderInstances($t,_e,Ee)}else Kt.render($t,_e)};function ne(y,I,k){y.transparent===!0&&y.side===en&&y.forceSinglePass===!1?(y.side=Fe,y.needsUpdate=!0,bs(y,I,k),y.side=Bn,y.needsUpdate=!0,bs(y,I,k),y.side=en):bs(y,I,k)}this.compile=function(y,I,k=null){k===null&&(k=y),u=Yt.get(k),u.init(I),E.push(u),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==k&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const G=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){const ft=Q[ot];ne(ft,k,U),G.add(ft)}else ne(Q,k,U),G.add(Q)}),u=E.pop(),G},this.compileAsync=function(y,I,k=null){const G=this.compile(y,I,k);return new Promise(U=>{function Q(){if(G.forEach(function(ot){St.get(ot).currentProgram.isReady()&&G.delete(ot)}),G.size===0){U(y);return}setTimeout(Q,10)}Vt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ke=null;function fn(y){Ke&&Ke(y)}function Oa(){Gn.stop()}function Ba(){Gn.start()}const Gn=new Kl;Gn.setAnimationLoop(fn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(y){Ke=y,V.setAnimationLoop(y),y===null?Gn.stop():Gn.start()},V.addEventListener("sessionstart",Oa),V.addEventListener("sessionend",Ba),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,I,P),u=Yt.get(y,E.length),u.init(I),E.push(u),bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(bt),xt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,xt),m=pt.get(y,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&Nr(Q,I,-1/0,_.sortObjects)}Nr(y,I,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,dt),le=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,le&&Rt.addToRenderList(m,y),this.info.render.frame++,nt===!0&&tt.beginShadows();const k=u.state.shadowsArray;mt.render(k,y,I),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(u.setupLights(),I.isArrayCamera){const Q=I.cameras;if(U.length>0)for(let ot=0,ft=Q.length;ot<ft;ot++){const _t=Q[ot];ka(G,U,y,_t)}le&&Rt.render(y);for(let ot=0,ft=Q.length;ot<ft;ot++){const _t=Q[ot];za(m,y,_t,_t.viewport)}}else U.length>0&&ka(G,U,y,I),le&&Rt.render(y),za(m,y,I);P!==null&&R===0&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(_,y,I),se.resetDefaultState(),S=-1,v=null,E.pop(),E.length>0?(u=E[E.length-1],nt===!0&&tt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Nr(y,I,k,G){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){G&&Ct.setFromMatrixPosition(y.matrixWorld).applyMatrix4(bt);const ot=Y.update(y),ft=y.material;ft.visible&&m.push(y,ot,ft,k,Ct.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const ot=Y.update(y),ft=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ct.copy(y.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ct.copy(ot.boundingSphere.center)),Ct.applyMatrix4(y.matrixWorld).applyMatrix4(bt)),Array.isArray(ft)){const _t=ot.groups;for(let Dt=0,It=_t.length;Dt<It;Dt++){const wt=_t[Dt],$t=ft[wt.materialIndex];$t&&$t.visible&&m.push(y,ot,$t,k,Ct.z,wt)}}else ft.visible&&m.push(y,ot,ft,k,Ct.z,null)}}const Q=y.children;for(let ot=0,ft=Q.length;ot<ft;ot++)Nr(Q[ot],I,k,G)}function za(y,I,k,G){const U=y.opaque,Q=y.transmissive,ot=y.transparent;u.setupLightsView(k),nt===!0&&tt.setGlobalState(_.clippingPlanes,k),G&&Et.viewport(C.copy(G)),U.length>0&&Ts(U,I,k),Q.length>0&&Ts(Q,I,k),ot.length>0&&Ts(ot,I,k),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function ka(y,I,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new ai(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?vs:wn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const Q=u.state.transmissionRenderTarget[G.id],ot=G.viewport||C;Q.setSize(ot.z*_.transmissionResolutionScale,ot.w*_.transmissionResolutionScale);const ft=_.getRenderTarget();_.setRenderTarget(Q),_.getClearColor(W),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),le&&Rt.render(k);const _t=_.toneMapping;_.toneMapping=Un;const Dt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),nt===!0&&tt.setGlobalState(_.clippingPlanes,G),Ts(y,k,G),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let wt=0,$t=I.length;wt<$t;wt++){const Qt=I[wt],_e=Qt.object,ue=Qt.geometry,Kt=Qt.material,Tt=Qt.group;if(Kt.side===en&&_e.layers.test(G.layers)){const Ee=Kt.side;Kt.side=Fe,Kt.needsUpdate=!0,Ga(_e,k,G,ue,Kt,Tt),Kt.side=Ee,Kt.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}_.setRenderTarget(ft),_.setClearColor(W,$),Dt!==void 0&&(G.viewport=Dt),_.toneMapping=_t}function Ts(y,I,k){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,Q=y.length;U<Q;U++){const ot=y[U],ft=ot.object,_t=ot.geometry,Dt=G===null?ot.material:G,It=ot.group;ft.layers.test(k.layers)&&Ga(ft,I,k,_t,Dt,It)}}function Ga(y,I,k,G,U,Q){y.onBeforeRender(_,I,k,G,U,Q),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(_,I,k,G,y,Q),U.transparent===!0&&U.side===en&&U.forceSinglePass===!1?(U.side=Fe,U.needsUpdate=!0,_.renderBufferDirect(k,I,G,U,y,Q),U.side=Bn,U.needsUpdate=!0,_.renderBufferDirect(k,I,G,U,y,Q),U.side=en):_.renderBufferDirect(k,I,G,U,y,Q),y.onAfterRender(_,I,k,G,U,Q)}function bs(y,I,k){I.isScene!==!0&&(I=ge);const G=St.get(y),U=u.state.lights,Q=u.state.shadowsArray,ot=U.state.version,ft=yt.getParameters(y,U.state,Q,I,k),_t=yt.getProgramCacheKey(ft);let Dt=G.programs;G.environment=y.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(y.isMeshStandardMaterial?z:x).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",Nt),Dt=new Map,G.programs=Dt);let It=Dt.get(_t);if(It!==void 0){if(G.currentProgram===It&&G.lightsStateVersion===ot)return Va(y,ft),It}else ft.uniforms=yt.getUniforms(y),y.onBeforeCompile(ft,_),It=yt.acquireProgram(ft,_t),Dt.set(_t,It),G.uniforms=ft.uniforms;const wt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=tt.uniform),Va(y,ft),G.needsLights=Ph(y),G.lightsStateVersion=ot,G.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=It,G.uniformsList=null,It}function Ha(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=hr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Va(y,I){const k=St.get(y);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Rh(y,I,k,G,U){I.isScene!==!0&&(I=ge),T.resetTextureUnits();const Q=I.fog,ot=G.isMeshStandardMaterial?I.environment:null,ft=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Gi,_t=(G.isMeshStandardMaterial?z:x).get(G.envMap||ot),Dt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,It=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),wt=!!k.morphAttributes.position,$t=!!k.morphAttributes.normal,Qt=!!k.morphAttributes.color;let _e=Un;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_e=_.toneMapping);const ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=ue!==void 0?ue.length:0,Tt=St.get(G),Ee=u.state.lights;if(nt===!0&&(xt===!0||y!==v)){const Pe=y===v&&G.id===S;tt.setState(G,y,Pe)}let te=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ee.state.version||Tt.outputColorSpace!==ft||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==_t||G.fog===!0&&Tt.fog!==Q||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==tt.numPlanes||Tt.numIntersection!==tt.numIntersection)||Tt.vertexAlphas!==Dt||Tt.vertexTangents!==It||Tt.morphTargets!==wt||Tt.morphNormals!==$t||Tt.morphColors!==Qt||Tt.toneMapping!==_e||Tt.morphTargetsCount!==Kt)&&(te=!0):(te=!0,Tt.__version=G.version);let Ze=Tt.currentProgram;te===!0&&(Ze=bs(G,I,U));let ci=!1,Be=!1,Qi=!1;const oe=Ze.getUniforms(),He=Tt.uniforms;if(Et.useProgram(Ze.program)&&(ci=!0,Be=!0,Qi=!0),G.id!==S&&(S=G.id,Be=!0),ci||v!==y){Et.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),zu(at),ku(at),oe.setValue(L,"projectionMatrix",at)):oe.setValue(L,"projectionMatrix",y.projectionMatrix),oe.setValue(L,"viewMatrix",y.matrixWorldInverse);const Ue=oe.map.cameraPosition;Ue!==void 0&&Ue.setValue(L,Jt.setFromMatrixPosition(y.matrixWorld)),Wt.logarithmicDepthBuffer&&oe.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&oe.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Be=!0,Qi=!0)}if(U.isSkinnedMesh){oe.setOptional(L,U,"bindMatrix"),oe.setOptional(L,U,"bindMatrixInverse");const Pe=U.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),oe.setValue(L,"boneTexture",Pe.boneTexture,T))}U.isBatchedMesh&&(oe.setOptional(L,U,"batchingTexture"),oe.setValue(L,"batchingTexture",U._matricesTexture,T),oe.setOptional(L,U,"batchingIdTexture"),oe.setValue(L,"batchingIdTexture",U._indirectTexture,T),oe.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(L,"batchingColorTexture",U._colorsTexture,T));const Ve=k.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&Lt.update(U,k,Ze),(Be||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,oe.setValue(L,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(He.envMap.value=_t,He.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(He.envMapIntensity.value=I.environmentIntensity),Be&&(oe.setValue(L,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&Ch(He,Qi),Q&&G.fog===!0&&ct.refreshFogUniforms(He,Q),ct.refreshMaterialUniforms(He,G,H,j,u.state.transmissionRenderTarget[y.id]),hr.upload(L,Ha(Tt),He,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hr.upload(L,Ha(Tt),He,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&oe.setValue(L,"center",U.center),oe.setValue(L,"modelViewMatrix",U.modelViewMatrix),oe.setValue(L,"normalMatrix",U.normalMatrix),oe.setValue(L,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Pe=G.uniformsGroups;for(let Ue=0,Fr=Pe.length;Ue<Fr;Ue++){const Hn=Pe[Ue];D.update(Hn,Ze),D.bind(Hn,Ze)}}return Ze}function Ch(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Ph(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,I,k){St.get(y.texture).__webglTexture=I,St.get(y.depthTexture).__webglTexture=k;const G=St.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const k=St.get(y);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const Lh=L.createFramebuffer();this.setRenderTarget=function(y,I=0,k=0){P=y,b=I,R=k;let G=!0,U=null,Q=!1,ot=!1;if(y){const _t=St.get(y);if(_t.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(_t.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(_t.__hasExternalTextures)T.rebindTextures(y,St.get(y.texture).__webglTexture,St.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const wt=y.depthTexture;if(_t.__boundDepthTexture!==wt){if(wt!==null&&St.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Dt=y.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ot=!0);const It=St.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(It[I])?U=It[I][k]:U=It[I],Q=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?U=St.get(y).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[k]:U=It,C.copy(y.viewport),O.copy(y.scissor),B=y.scissorTest}else C.copy(Mt).multiplyScalar(H).floor(),O.copy(Ut).multiplyScalar(H).floor(),B=Gt;if(k!==0&&(U=Lh),Et.bindFramebuffer(L.FRAMEBUFFER,U)&&G&&Et.drawBuffers(y,U),Et.viewport(C),Et.scissor(O),Et.setScissorTest(B),Q){const _t=St.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,k)}else if(ot){const _t=St.get(y.texture),Dt=I;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.__webglTexture,k,Dt)}else if(y!==null&&k!==0){const _t=St.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(y,I,k,G,U,Q,ot){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){Et.bindFramebuffer(L.FRAMEBUFFER,ft);try{const _t=y.texture,Dt=_t.format,It=_t.type;if(!Wt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-G&&k>=0&&k<=y.height-U&&L.readPixels(I,k,G,U,Ot.convert(Dt),Ot.convert(It),Q)}finally{const _t=P!==null?St.get(P).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(y,I,k,G,U,Q,ot){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){const _t=y.texture,Dt=_t.format,It=_t.type;if(!Wt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-G&&k>=0&&k<=y.height-U){Et.bindFramebuffer(L.FRAMEBUFFER,ft);const wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.bufferData(L.PIXEL_PACK_BUFFER,Q.byteLength,L.STREAM_READ),L.readPixels(I,k,G,U,Ot.convert(Dt),Ot.convert(It),0);const $t=P!==null?St.get(P).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,$t);const Qt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bu(L,Qt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Q),L.deleteBuffer(wt),L.deleteSync(Qt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,k=0){y.isTexture!==!0&&(Kn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const G=Math.pow(2,-k),U=Math.floor(y.image.width*G),Q=Math.floor(y.image.height*G),ot=I!==null?I.x:0,ft=I!==null?I.y:0;T.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ot,ft,U,Q),Et.unbindTexture()};const Dh=L.createFramebuffer(),Ih=L.createFramebuffer();this.copyTextureToTexture=function(y,I,k=null,G=null,U=0,Q=null){y.isTexture!==!0&&(Kn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1],I=arguments[2],Q=arguments[3]||0,k=null),Q===null&&(U!==0?(Kn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ot,ft,_t,Dt,It,wt,$t,Qt,_e;const ue=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(k!==null)ot=k.max.x-k.min.x,ft=k.max.y-k.min.y,_t=k.isBox3?k.max.z-k.min.z:1,Dt=k.min.x,It=k.min.y,wt=k.isBox3?k.min.z:0;else{const Ve=Math.pow(2,-U);ot=Math.floor(ue.width*Ve),ft=Math.floor(ue.height*Ve),y.isDataArrayTexture?_t=ue.depth:y.isData3DTexture?_t=Math.floor(ue.depth*Ve):_t=1,Dt=0,It=0,wt=0}G!==null?($t=G.x,Qt=G.y,_e=G.z):($t=0,Qt=0,_e=0);const Kt=Ot.convert(I.format),Tt=Ot.convert(I.type);let Ee;I.isData3DTexture?(T.setTexture3D(I,0),Ee=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),Ee=L.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),Ee=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const te=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ci=L.getParameter(L.UNPACK_SKIP_PIXELS),Be=L.getParameter(L.UNPACK_SKIP_ROWS),Qi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,It),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt);const oe=y.isDataArrayTexture||y.isData3DTexture,He=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Ve=St.get(y),Pe=St.get(I),Ue=St.get(Ve.__renderTarget),Fr=St.get(Pe.__renderTarget);Et.bindFramebuffer(L.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Hn=0;Hn<_t;Hn++)oe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(y).__webglTexture,U,wt+Hn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(I).__webglTexture,Q,_e+Hn)),L.blitFramebuffer(Dt,It,ot,ft,$t,Qt,ot,ft,L.DEPTH_BUFFER_BIT,L.NEAREST);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||St.has(y)){const Ve=St.get(y),Pe=St.get(I);Et.bindFramebuffer(L.READ_FRAMEBUFFER,Dh),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ih);for(let Ue=0;Ue<_t;Ue++)oe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,U,wt+Ue):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,U),He?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,Q,_e+Ue):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,Q),U!==0?L.blitFramebuffer(Dt,It,ot,ft,$t,Qt,ot,ft,L.COLOR_BUFFER_BIT,L.NEAREST):He?L.copyTexSubImage3D(Ee,Q,$t,Qt,_e+Ue,Dt,It,ot,ft):L.copyTexSubImage2D(Ee,Q,$t,Qt,Dt,It,ot,ft);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else He?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Ee,Q,$t,Qt,_e,ot,ft,_t,Kt,Tt,ue.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,Q,$t,Qt,_e,ot,ft,_t,Kt,ue.data):L.texSubImage3D(Ee,Q,$t,Qt,_e,ot,ft,_t,Kt,Tt,ue):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,$t,Qt,ot,ft,Kt,Tt,ue.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,$t,Qt,ue.width,ue.height,Kt,ue.data):L.texSubImage2D(L.TEXTURE_2D,Q,$t,Qt,ot,ft,Kt,Tt,ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,te),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ci),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qi),Q===0&&I.generateMipmaps&&L.generateMipmap(Ee),Et.unbindTexture()},this.copyTextureToTexture3D=function(y,I,k=null,G=null,U=0){return y.isTexture!==!0&&(Kn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0),Kn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,k,G,U)},this.initRenderTarget=function(y){St.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Et.unbindTexture()},this.resetState=function(){b=0,R=0,P=null,Et.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const Hc={short:.08,afro:.28,braids:.08,bun:.08,ponytail:.08,dreads:.08,bald:0},$s=new et({color:"#1b1b22",roughness:.5}),fo=new et({color:"#ffcf4d",metalness:.7,roughness:.25});class th{group;characterMesh;bodyGroup;leftArm;rightArm;leftLeg;rightLeg;head;torso;skirt;shirtMat;pantsMat;skinMat;hairMat;hairSlot;hatSlot;accessorySlot;isMoving=!1;animTime=0;constructor(t){this.group=new ee,this.characterMesh=new ee,this.group.add(this.characterMesh),this.bodyGroup=new ee,this.characterMesh.add(this.bodyGroup);const e=t.style||{},n=e.skinColor||"#d9a066",s=e.primaryColor||"#4b7bec",r=e.secondaryColor||"#2f3640",o=e.hairColor||"#17120f",a=e.hair||"short",c=e.hat||"none",h=e.accessory||"none",d=e.body==="female";this.shirtMat=new et({color:s,roughness:.65}),this.pantsMat=new et({color:r,roughness:.75}),this.skinMat=new et({color:n,roughness:.6}),this.hairMat=new et({color:o,roughness:.85}),this.torso=new ee,this.torso.position.y=1.02;const f=d?.22:.27,l=d?.17:.21,p=new At(f,l,.62,14),g=new F(p,this.shirtMat);g.castShadow=!0,g.receiveShadow=!0,this.torso.add(g);const M=new Ii(d?.15:.18,.035,8,16),m=new F(M,this.shirtMat);if(m.rotation.x=Math.PI/2,m.position.y=.31,this.torso.add(m),d){const Gt=new At(.2,.34,.36,14);this.skirt=new F(Gt,this.pantsMat),this.skirt.position.y=-.32,this.skirt.castShadow=!0,this.torso.add(this.skirt)}else{const Gt=new At(.22,.22,.08,14),q=new F(Gt,this.pantsMat);q.position.y=-.31,this.torso.add(q)}this.bodyGroup.add(this.torso),this.head=new ee,this.head.position.y=1.56;const u=new At(.08,.1,.16,10),w=new F(u,this.skinMat);w.position.y=-.15,this.head.add(w);const E=new Ne(.22,16,16);E.scale(1,1.15,1.05);const _=new F(E,this.skinMat);_.castShadow=!0,this.head.add(_);const A=new Ie({color:16777215}),b=new Ie({color:1118481});[-.07,.07].forEach(Gt=>{const q=new F(new ce(.055,.05),A);q.position.set(Gt,.03,.222),this.head.add(q);const nt=new F(new ce(.032,.038),b);nt.position.set(Gt,.03,.226),this.head.add(nt)}),this.hairSlot=new ee,this.head.add(this.hairSlot),this.hatSlot=new ee;const R=Hc[a]??Hc.short;this.hatSlot.position.y=.2+R,this.head.add(this.hatSlot),this.accessorySlot=new ee,this.bodyGroup.add(this.accessorySlot),this.bodyGroup.add(this.head);const P=d?.31:.36,S=d?.065:.085,v=d?.055:.07;this.leftArm=new ee,this.leftArm.position.set(-P,1.28,0);const C=new F(new At(S,v,.54,10),this.shirtMat);C.position.y=-.22,C.castShadow=!0,this.leftArm.add(C);const O=new F(new Ne(.065,10,10),this.skinMat);O.position.y=-.52,this.leftArm.add(O),this.bodyGroup.add(this.leftArm),this.rightArm=new ee,this.rightArm.position.set(P,1.28,0);const B=new F(new At(S,v,.54,10),this.shirtMat);B.position.y=-.22,B.castShadow=!0,this.rightArm.add(B);const W=new F(new Ne(.065,10,10),this.skinMat);W.position.y=-.52,this.rightArm.add(W),this.bodyGroup.add(this.rightArm);const $=d?.12:.14,X=d?.085:.1,j=d?.07:.08;this.leftLeg=new ee,this.leftLeg.position.set(-$,.72,0);const H=new F(new At(X,j,.66,10),this.pantsMat);H.position.y=-.28,H.castShadow=!0,this.leftLeg.add(H);const it=new vt(.16,.12,.28),dt=new F(it,$s);dt.position.set(0,-.63,.04),dt.castShadow=!0,this.leftLeg.add(dt),this.bodyGroup.add(this.leftLeg),this.rightLeg=new ee,this.rightLeg.position.set($,.72,0);const Mt=new F(new At(X,j,.66,10),this.pantsMat);Mt.position.y=-.28,Mt.castShadow=!0,this.rightLeg.add(Mt);const Ut=new F(it,$s);Ut.position.set(0,-.63,.04),Ut.castShadow=!0,this.rightLeg.add(Ut),this.bodyGroup.add(this.rightLeg),this.buildHair(a),this.buildHat(c),this.buildAccessory(h)}buildHair(t){if(t==="afro"){const e=new F(new Ne(.3,14,14),this.hairMat);e.position.set(0,.12,-.02),this.hairSlot.add(e)}else if(t==="braids"){const e=new F(new Ne(.24,12,12),this.hairMat);e.position.y=.08,this.hairSlot.add(e),[-.15,-.07,0,.07,.15].forEach(n=>{const s=new F(new At(.025,.025,.55,6),this.hairMat);s.position.set(n,-.15,-.18),this.hairSlot.add(s)})}else if(t==="bun"){const e=new F(new Ne(.24,12,12),this.hairMat);e.position.y=.08,this.hairSlot.add(e);const n=new F(new Ne(.12,10,10),this.hairMat);n.position.set(0,.26,-.12),this.hairSlot.add(n)}else if(t==="ponytail"){const e=new F(new Ne(.24,12,12),this.hairMat);e.position.y=.08,this.hairSlot.add(e);const n=new F(new At(.05,.025,.38,8),this.hairMat);n.position.set(0,.05,-.25),n.rotation.x=-Math.PI/4,this.hairSlot.add(n)}else if(t==="dreads"){const e=new F(new Ne(.24,12,12),this.hairMat);e.position.y=.08,this.hairSlot.add(e);for(let n=0;n<9;n++){const s=-2.2+n*.55,r=new F(new At(.03,.03,.45,6),this.hairMat);r.position.set(Math.sin(s)*.22,-.1,Math.cos(s)*.22),this.hairSlot.add(r)}}else if(t!=="bald"){const e=new F(new Ne(.24,12,12),this.hairMat);e.position.set(0,.06,-.03),e.scale.set(1.04,1.05,1.1),this.hairSlot.add(e)}}buildHat(t){if(t==="cap"){const e=new F(new At(.22,.24,.1,14),this.pantsMat);e.position.y=.06;const n=new F(new vt(.24,.02,.16),this.pantsMat);n.position.set(0,.02,.2),this.hatSlot.add(e),this.hatSlot.add(n)}else if(t==="beanie"){const e=new F(new Ne(.24,12,12),this.pantsMat);e.scale.set(1,1.15,1),e.position.y=.05;const n=new F(new Ne(.06,8,8),this.shirtMat);n.position.y=.32,this.hatSlot.add(e),this.hatSlot.add(n)}else if(t==="tophat"){const e=new F(new At(.3,.3,.03,16),$s);e.position.y=.02;const n=new F(new At(.2,.2,.32,16),$s);n.position.y=.18;const s=new F(new At(.205,.205,.07,16),this.pantsMat);s.position.y=.07,this.hatSlot.add(e,n,s)}else if(t==="crown"){const e=new F(new At(.22,.25,.14,8,1,!0),fo);e.position.y=.08;for(let n=0;n<5;n++){const s=n/5*Math.PI*2,r=new F(new br(.045,.12,4),fo);r.position.set(Math.sin(s)*.21,.2,Math.cos(s)*.21),this.hatSlot.add(r)}this.hatSlot.add(e)}}buildAccessory(t){if(t==="glasses"){const e=new Ie({color:1118481}),n=new F(new vt(.26,.06,.03),e);n.position.set(0,.03,.23),this.head.add(n)}else if(t==="earrings")[-.23,.23].forEach(e=>{const n=new F(new Ii(.03,.008,6,12),fo);n.position.set(e,-.04,0),n.rotation.y=Math.PI/2,this.head.add(n)});else if(t==="beard"){const e=new F(new vt(.26,.14,.08),this.hairMat);e.position.set(0,-.15,.18),this.head.add(e)}else if(t==="scarf"){const e=new F(new Ii(.2,.055,8,16),this.pantsMat);e.position.set(0,1.42,0),e.rotation.x=Math.PI/2,this.accessorySlot.add(e)}else if(t==="backpack"){const e=new et({color:14037041,roughness:.8}),n=new F(new vt(.34,.44,.2),e);n.position.set(0,1.05,-.22),n.castShadow=!0,this.accessorySlot.add(n)}}setOutfit(t,e){this.shirtMat.color.setHex(t),this.pantsMat.color.setHex(e)}updateAnimation(t,e,n=1){if(this.torso.rotation.x=0,this.head.rotation.x=0,this.leftArm.rotation.y=0,this.rightArm.rotation.y=0,e){this.animTime+=t*11*n;const s=Math.sin(this.animTime);this.leftLeg.rotation.x=s*.75,this.rightLeg.rotation.x=-s*.75,this.leftArm.rotation.x=-s*.7,this.rightArm.rotation.x=s*.7,this.torso.position.y=1.02+Math.abs(Math.sin(this.animTime*2))*.04,this.head.position.y=1.56+Math.abs(Math.sin(this.animTime*2))*.04}else{this.animTime+=t*2;const s=Math.sin(this.animTime)*.02;this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftArm.rotation.x=s*.5,this.rightArm.rotation.x=-s*.5,this.torso.position.y=1.02+s,this.head.position.y=1.56+s*1.2}}updateRidingAnimation(t,e,n){const s=Math.abs(n)>.3,r=n>=0?1:-1;if(e==="bicycle")this.torso.rotation.x=.25,this.head.rotation.x=-.2,this.leftArm.rotation.x=-.85,this.rightArm.rotation.x=-.85,this.leftArm.rotation.y=.15,this.rightArm.rotation.y=-.15,s?(this.animTime+=t*(Math.abs(n)*.9+2.5)*r,this.leftLeg.rotation.x=Math.sin(this.animTime)*.65,this.rightLeg.rotation.x=Math.sin(this.animTime+Math.PI)*.65,this.torso.position.y=1.02+Math.sin(this.animTime*2)*.02):(this.leftLeg.rotation.x=.4,this.rightLeg.rotation.x=-.4,this.torso.position.y=1.02);else if(e==="scooter")if(this.torso.rotation.x=.1,this.head.rotation.x=-.05,this.leftArm.rotation.x=-.75,this.rightArm.rotation.x=-.75,this.leftArm.rotation.y=.1,this.rightArm.rotation.y=-.1,this.leftLeg.rotation.x=.55,this.rightLeg.rotation.x=.55,s){this.animTime+=t*15;const o=Math.sin(this.animTime)*.015;this.torso.position.y=1.02+o,this.head.position.y=1.56+o*1.5}else this.torso.position.y=1.02,this.head.position.y=1.56;else this.torso.rotation.x=.05,this.head.rotation.x=0,this.leftArm.rotation.x=-.65,this.rightArm.rotation.x=-.65,this.leftArm.rotation.y=.2,this.rightArm.rotation.y=-.2,this.leftLeg.rotation.x=1.1,this.rightLeg.rotation.x=1.1,this.torso.position.y=.92,this.head.position.y=1.46}}const ra="https://start.ng";let Ks=null;const og={id:0,name:"Lagos Hustler",account:"guest_eko",style:{body:"male",primaryColor:"#fbc531",secondaryColor:"#2f3640",skinColor:"#8d5524",hairColor:"#1e272e",hair:"short",hat:"cap",accessory:"glasses"},face:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="%23fbc531"/><circle cx="32" cy="24" r="14" fill="%238d5524"/><rect x="18" y="42" width="28" height="22" rx="6" fill="%232f3640"/></svg>'};function ag(){return new URLSearchParams(window.location.search).has("mock")||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"}function cg(){return Ks||(Ks=new Promise((i,t)=>{const e=document.createElement("iframe");e.src=`${ra}/connect`,e.hidden=!0,e.onload=()=>i(e),e.onerror=t,document.body.append(e)}),Ks)}async function Ra(i,t,e=4e3){if(ag()){if(i.type==="startng:whoami")return{type:"startng:user",user:null,guest:og};if(i.type==="startng:score")return{ok:!0,result:{best:1e3,improved:!0,rank:1,stats:i.stats||{score:i.score}}};if(i.type==="startng:leaderboard")return{ok:!0,entries:[{rank:1,player_id:101,name:"Danfo King",color:"#fbc531",score:25e3,stats:{earnings:25e3,deliveries:18,distance_km:42,best_time:140}},{rank:2,player_id:102,name:"Lekki Rider",color:"#4b7bec",score:18400,stats:{earnings:18400,deliveries:12,distance_km:30,best_time:155}}]}}try{const n=await cg();return new Promise(s=>{const r=Math.random().toString(36).slice(2);let o;const a=h=>{clearTimeout(o),window.removeEventListener("message",c),s(h)};o=window.setTimeout(()=>a(null),e);function c(h){h.origin!==ra||h.source!==n.contentWindow||h.data?.type===t&&h.data.requestId===r&&a(h.data)}window.addEventListener("message",c),n.contentWindow?.postMessage({...i,requestId:r},ra)})}catch(n){return console.warn("start.ng connect unavailable, falling back:",n),null}}async function lg(i){const t=sessionStorage.getItem("startng_session"),e=window.location.hostname.split(".")[0]||"lagos-hustle";if(t)try{const s=await fetch(`https://api.start.ng/games/${e}/scores`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({stats:i})});if(s.ok)return{ok:!0,result:await s.json()}}catch(s){console.warn("HTTP score save failed, falling back to connect iframe:",s)}return await Ra({type:"startng:score",stats:i},"startng:scoreSaved",4e3)}async function hg(i=15){const t=window.location.hostname.split(".")[0]||"lagos-hustle";try{const n=await fetch(`https://api.start.ng/games/${t}/leaderboard?limit=${i}`);if(n.ok){const s=await n.json();if(Array.isArray(s))return s}}catch(n){console.warn("HTTP leaderboard fetch failed, falling back to connect:",n)}const e=await Ra({type:"startng:leaderboard",limit:i},"startng:leaderboardData",4e3);return e?.entries&&Array.isArray(e.entries)?e.entries:[]}function ug(){const i=encodeURIComponent(window.location.origin+window.location.pathname);window.location.href=`https://start.ng/?return_to=${i}`}function eh(i={}){const t=i.type||"danfo";return t==="danfo"?dg(i.primaryColor??16236319,i.stripeColor??1315860):t==="keke"?pg(i.primaryColor??16236319):t==="bicycle"?mg(i.primaryColor??3069299):t==="scooter"?gg(i.primaryColor??15158332):fg(i.primaryColor??3426654)}function dg(i=16236319,t=1315860){const e=new ee,n=new et({color:i,roughness:.4,metalness:.1}),s=new et({color:t,roughness:.8}),r=new et({color:1713455,roughness:.1,metalness:.8}),o=new et({color:14474721,roughness:.2,metalness:.85}),a=new et({color:1579290,roughness:.9}),c=new et({color:16775910,emissive:16771751,emissiveIntensity:1.2}),h=new et({color:14037041,emissive:12597547,emissiveIntensity:1}),d=new F(new vt(2.2,.8,4.8),n);d.position.y=.85,d.castShadow=!0,e.add(d);const f=new F(new vt(2.22,.14,4.82),s);f.position.y=1,e.add(f);const l=new F(new vt(2.22,.14,4.82),s);l.position.y=1.22,e.add(l);const p=new F(new vt(2.2,.7,4.8),n);p.position.y=1.7,p.castShadow=!0,e.add(p);const g=new F(new vt(2,.7,.1),r);g.position.set(0,1.6,2.41),g.rotation.x=-.15,e.add(g);const M=new F(new vt(1.9,.65,.1),r);M.position.set(0,1.6,-2.41),e.add(M);const m=new F(new vt(.1,.55,3.8),r);m.position.set(-1.11,1.6,.1),e.add(m);const u=m.clone();u.position.x=1.11,e.add(u);const w=new F(new vt(2.26,.25,.25),o);w.position.set(0,.5,2.45),e.add(w);const E=w.clone();E.position.z=-2.45,e.add(E);const _=new F(new vt(.3,.2,.1),c);_.position.set(-.75,.85,2.43),e.add(_);const A=_.clone();A.position.x=.75,e.add(A);const b=new F(new vt(.2,.3,.08),h);b.position.set(-.8,.9,-2.43),e.add(b);const R=b.clone();R.position.x=.8,e.add(R);const P=new F(new vt(1.6,.2,.08),new et({color:1118481,roughness:.9}));P.position.set(0,2.08,2.15),e.add(P);const S=new At(.4,.4,.26,16),v=[[-1.1,.4,1.4],[1.1,.4,1.4],[-1.1,.4,-1.4],[1.1,.4,-1.4]];for(const C of v){const O=new F(S,a);O.rotation.z=Math.PI/2,O.position.set(C[0],C[1],C[2]),O.castShadow=!0,e.add(O);const B=new F(new At(.2,.2,.28,10),o);B.rotation.z=Math.PI/2,B.position.set(C[0],C[1],C[2]),e.add(B)}return e}function fg(i=2719929){const t=new ee,e=new et({color:i,roughness:.4,metalness:.2}),n=new et({color:1713455,roughness:.1,metalness:.8}),s=new et({color:1579290,roughness:.9}),r=new et({color:14474721,roughness:.2,metalness:.8}),o=new et({color:16775910,emissive:16771751,emissiveIntensity:1}),a=new et({color:14037041,emissive:12597547,emissiveIntensity:1}),c=new F(new vt(1.9,.55,4.2),e);c.position.y=.65,c.castShadow=!0,t.add(c);const h=new F(new vt(1.6,.5,2.2),e);h.position.set(0,1.15,-.2),h.castShadow=!0,t.add(h);const d=new F(new vt(1.5,.45,.08),n);d.position.set(0,1.15,.95),d.rotation.x=-.3,t.add(d);const f=new F(new vt(1.5,.42,.08),n);f.position.set(0,1.15,-1.35),f.rotation.x=.3,t.add(f);const l=new F(new vt(.25,.15,.1),o);l.position.set(-.65,.65,2.11),t.add(l);const p=l.clone();p.position.x=.65,t.add(p);const g=new F(new vt(.25,.15,.1),a);g.position.set(-.65,.65,-2.11),t.add(g);const M=g.clone();M.position.x=.65,t.add(M);const m=new At(.34,.34,.22,14),u=[[-.95,.34,1.25],[.95,.34,1.25],[-.95,.34,-1.25],[.95,.34,-1.25]];for(const w of u){const E=new F(m,s);E.rotation.z=Math.PI/2,E.position.set(w[0],w[1],w[2]),E.castShadow=!0,t.add(E);const _=new F(new At(.18,.18,.24,8),r);_.rotation.z=Math.PI/2,_.position.set(w[0],w[1],w[2]),t.add(_)}return t}function pg(i=16236319){const t=new ee,e=new et({color:i,roughness:.5}),n=new et({color:1315860,roughness:.8}),s=new et({color:1579290,roughness:.9}),r=new et({color:1713455,roughness:.1}),o=new et({color:16775910,emissive:16771751,emissiveIntensity:1}),a=new F(new vt(1.3,.9,2.2),e);a.position.y=.9,a.castShadow=!0,t.add(a);const c=new F(new vt(1.35,.15,2.1),n);c.position.y=1.65,c.castShadow=!0,t.add(c);const h=new F(new vt(1.15,.55,.05),r);h.position.set(0,1.25,.85),h.rotation.x=-.15,t.add(h);const d=new F(new At(.12,.12,.1,12),o);d.rotation.x=Math.PI/2,d.position.set(0,.8,1.12),t.add(d);const f=new At(.28,.28,.16,12),l=new F(f,s);l.rotation.z=Math.PI/2,l.position.set(0,.28,.85),t.add(l);for(const p of[-.68,.68]){const g=new F(f,s);g.rotation.z=Math.PI/2,g.position.set(p,.28,-.65),g.castShadow=!0,t.add(g)}return t}function mg(i=3069299){const t=new ee,e=new et({color:i,roughness:.3,metalness:.7}),n=new et({color:14474721,roughness:.2,metalness:.9}),s=new et({color:1976110,roughness:.9}),r=new et({color:3093826,roughness:.8}),o=new Ii(.38,.04,8,20),a=new F(o,s);a.position.set(0,.38,.75),t.add(a);const c=new F(o,s);c.position.set(0,.38,-.75),c.castShadow=!0,t.add(c);const h=new At(.35,.35,.02,12),d=new Ie({color:11184810,wireframe:!0}),f=new F(h,d);f.rotation.z=Math.PI/2,f.position.copy(a.position),t.add(f);const l=new F(h,d);l.rotation.z=Math.PI/2,l.position.copy(c.position),t.add(l);const p=new At(.025,.025,1,8),g=new F(p,e);g.position.set(0,.45,0),g.rotation.x=Math.PI/2,t.add(g);const M=new F(new At(.025,.025,.65,8),e);M.position.set(0,.65,-.2),M.rotation.x=.25,t.add(M);const m=new F(new At(.025,.025,.85,8),e);m.position.set(0,.62,.25),m.rotation.x=-.55,t.add(m);const u=new F(new At(.022,.022,.8,8),e);u.position.set(0,.85,.05),u.rotation.x=1.45,t.add(u);const w=new F(new vt(.22,.08,.3),r);w.position.set(0,.98,-.22),t.add(w);const E=new F(new At(.02,.02,.65,8),n);E.rotation.z=Math.PI/2,E.position.set(0,1.02,.58),t.add(E);const _=new F(new vt(.38,.22,.28),new et({color:7634316,roughness:.7,wireframe:!1}));return _.position.set(0,.92,.82),t.add(_),t}function gg(i=15158332){const t=new ee,e=new et({color:i,roughness:.3,metalness:.4}),n=new et({color:3093826,roughness:.6,metalness:.7}),s=new et({color:1976110,roughness:.9}),r=new et({color:14474721,roughness:.2,metalness:.9}),o=new et({color:15965202,roughness:.5}),a=new et({color:16775910,emissive:16771751,emissiveIntensity:1.5}),c=new At(.32,.32,.16,14),h=new F(c,s);h.rotation.z=Math.PI/2,h.position.set(0,.32,.95),h.castShadow=!0,t.add(h);const d=new F(c,s);d.rotation.z=Math.PI/2,d.position.set(0,.32,-.75),d.castShadow=!0,t.add(d);const f=new F(new vt(.55,.14,1.4),e);f.position.set(0,.35,.1),f.castShadow=!0,t.add(f);const l=new F(new vt(.48,.75,.35),e);l.position.set(0,.85,.85),l.rotation.x=-.15,t.add(l);const p=new F(new At(.12,.12,.08,12),a);p.rotation.x=Math.PI/2,p.position.set(0,.95,1.05),t.add(p);const g=new F(new At(.022,.022,.72,8),r);g.rotation.z=Math.PI/2,g.position.set(0,1.15,.78),t.add(g);for(let E of[-.34,.34]){const _=new F(new At(.01,.01,.2,6),r);_.position.set(E,1.25,.8),t.add(_);const A=new F(new At(.06,.06,.02,12),r);A.position.set(E,1.34,.8),t.add(A)}const M=new F(new vt(.38,.14,.75),new et({color:1976110,roughness:.8}));M.position.set(0,.68,-.05),t.add(M);const m=new F(new vt(.65,.55,.6),o);m.position.set(0,.95,-.7),m.castShadow=!0,t.add(m);const u=new F(new At(.04,.04,.7,8),r);u.rotation.x=Math.PI/2,u.position.set(.32,.35,-.45),t.add(u);const w=new F(new vt(.36,.28,.45),n);return w.position.set(0,.4,-.4),w.castShadow=!0,t.add(w),t}class _g{ctx=null;engineOsc=null;engineGain=null;isEngineRunning=!1;currentVehicleType="none";initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}playIntroJingle(){try{if(this.initContext(),!this.ctx)return;const t=this.ctx.currentTime;[261.63,329.63,392,523.25,659.25].forEach((n,s)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle";const a=t+s*.08;r.frequency.setValueAtTime(n,a),o.gain.setValueAtTime(.2,a),o.gain.exponentialRampToValueAtTime(.001,a+.5),r.connect(o),o.connect(this.ctx.destination),r.start(a),r.stop(a+.55)})}catch{}}playLeaderboardFanfare(){try{if(this.initContext(),!this.ctx)return;const t=this.ctx.currentTime,e=[392,523.25,659.25,783.99,1046.5];e.forEach((n,s)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sawtooth";const a=t+s*.09;r.frequency.setValueAtTime(n,a),o.gain.setValueAtTime(.18,a),o.gain.exponentialRampToValueAtTime(.001,a+(s===e.length-1?.9:.4)),r.connect(o),o.connect(this.ctx.destination),r.start(a),r.stop(a+(s===e.length-1?.95:.45))})}catch{}}playDanfoHorn(){try{if(this.initContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),s=this.ctx.createGain();e.type="sawtooth",n.type="sawtooth",e.frequency.setValueAtTime(440,t),n.frequency.setValueAtTime(554,t),s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.25,t+.02),s.gain.linearRampToValueAtTime(.2,t+.12),s.gain.linearRampToValueAtTime(.01,t+.14),s.gain.linearRampToValueAtTime(.25,t+.17),s.gain.linearRampToValueAtTime(.2,t+.32),s.gain.exponentialRampToValueAtTime(.001,t+.38);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1400,t),e.connect(r),n.connect(r),r.connect(s),s.connect(this.ctx.destination),e.start(t),n.start(t),e.stop(t+.4),n.stop(t+.4)}catch{}}playBicycleBell(){try{if(this.initContext(),!this.ctx)return;const t=this.ctx.currentTime;[0,.12].forEach(e=>{if(!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(2093,t+e),s.gain.setValueAtTime(.2,t+e),s.gain.exponentialRampToValueAtTime(.001,t+e+.28),n.connect(s),s.connect(this.ctx.destination),n.start(t+e),n.stop(t+e+.3)})}catch{}}playCrashSound(){try{if(this.initContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(30,t+.4),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.001,t+.45),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.5);const s=this.ctx.sampleRate*.25,r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),o=r.getChannelData(0);for(let d=0;d<s;d++)o[d]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=r;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(800,t);const h=this.ctx.createGain();h.gain.setValueAtTime(.4,t),h.gain.exponentialRampToValueAtTime(.01,t+.25),a.connect(c),c.connect(h),h.connect(this.ctx.destination),a.start(t)}catch{}}playCashChime(t=!1){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;(t?[659.25,880,1174.66,1760]:[587.33,880,1174.66]).forEach((s,r)=>{if(!this.ctx)return;const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type=r%2===0?"triangle":"sine";const c=e+r*.08;o.frequency.setValueAtTime(s,c),a.gain.setValueAtTime(.28,c),a.gain.exponentialRampToValueAtTime(.001,c+.45),o.connect(a),a.connect(this.ctx.destination),o.start(c),o.stop(c+.5)})}catch{}}playPickup(){try{if(this.initContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(740,t+.18),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.22)}catch{}}playSirenChirp(){try{if(this.initContext(),!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(650,t),e.frequency.linearRampToValueAtTime(950,t+.12),e.frequency.linearRampToValueAtTime(650,t+.24),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.01,t+.28),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.3)}catch{}}updateEngineSound(t,e,n){try{if(!t||t==="none"||t==="bicycle"){this.isEngineRunning&&this.engineGain&&this.ctx&&(this.engineGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.1),setTimeout(()=>{this.engineOsc&&(this.engineOsc.stop(),this.engineOsc.disconnect(),this.engineOsc=null),this.isEngineRunning=!1},120));return}if(this.initContext(),!this.ctx)return;const s=this.ctx.currentTime,r=Math.min(1,Math.abs(e)/(n||15));if(!this.isEngineRunning||this.currentVehicleType!==t){this.engineOsc&&(this.engineOsc.stop(),this.engineOsc.disconnect()),this.engineOsc=this.ctx.createOscillator(),this.engineGain=this.ctx.createGain(),t==="scooter"?(this.engineOsc.type="sawtooth",this.engineGain.gain.setValueAtTime(.06,s)):t==="danfo"||t==="keke"?(this.engineOsc.type="square",this.engineGain.gain.setValueAtTime(.08,s)):(this.engineOsc.type="triangle",this.engineGain.gain.setValueAtTime(.07,s));const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(t==="scooter"?650:400,s),this.engineOsc.connect(o),o.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start(s),this.isEngineRunning=!0,this.currentVehicleType=t}if(this.engineOsc&&this.engineGain){const a=(t==="scooter"?75:45)+r*(t==="scooter"?160:90);this.engineOsc.frequency.setTargetAtTime(a,s,.05);const c=.05+r*.07;this.engineGain.gain.setTargetAtTime(c,s,.05)}}catch{}}}const we=new _g,xg=document.getElementById("canvas-container"),vg=document.getElementById("fps-counter"),jt=new dd;jt.background=new qt(16759388);jt.fog=new Ea(16759388,.008);const ur=new qe(60,window.innerWidth/window.innerHeight,.1,1e3);ur.position.set(0,4,10);const $i=new rg({antialias:!0});$i.setSize(window.innerWidth,window.innerHeight);$i.setPixelRatio(Math.min(window.devicePixelRatio,2));$i.shadowMap.enabled=!0;$i.shadowMap.type=Sl;xg.appendChild($i.domElement);const Mg=new _d(16772306,4012080,1.2);jt.add(Mg);const Es=new Md(16775910,2.2);Es.position.set(30,50,20);Es.castShadow=!0;Es.shadow.mapSize.width=1024;Es.shadow.mapSize.height=1024;jt.add(Es);const yg=new ce(800,800),Sg=new et({color:2236446,roughness:.95}),Cr=new F(yg,Sg);Cr.rotation.x=-Math.PI/2;Cr.position.y=-.02;Cr.receiveShadow=!0;jt.add(Cr);const nh=new et({color:3026488,roughness:.8}),ih=new et({color:10394259,roughness:.85}),oa=new Ie({color:16236319}),Eg=new Ie({color:16119285}),Ca=new F(new ce(20,600),nh);Ca.rotation.x=-Math.PI/2;Ca.receiveShadow=!0;jt.add(Ca);const Pr=new F(new ce(4,600),ih);Pr.rotation.x=-Math.PI/2;Pr.position.set(-12,.04,0);Pr.receiveShadow=!0;jt.add(Pr);const Lr=new F(new ce(4,600),ih);Lr.rotation.x=-Math.PI/2;Lr.position.set(12,.04,0);Lr.receiveShadow=!0;jt.add(Lr);const Pa=new F(new ce(.3,600),oa);Pa.rotation.x=-Math.PI/2;Pa.position.y=.01;jt.add(Pa);const mr=[];function un(i,t,e,n){mr.push({minX:i-e/2,maxX:i+e/2,minZ:t-n/2,maxZ:t+n/2})}const Nn=[-160,-80,0,80,160];Nn.forEach(i=>{const t=new F(new ce(300,16),nh);t.rotation.x=-Math.PI/2,t.position.set(0,.005,i),t.receiveShadow=!0,jt.add(t);const e=new F(new ce(140,.3),oa);e.rotation.x=-Math.PI/2,e.position.set(80,.012,i),jt.add(e);const n=new F(new ce(140,.3),oa);n.rotation.x=-Math.PI/2,n.position.set(-80,.012,i),jt.add(n);for(let o of[-10.5,10.5])for(let a=-8;a<=8;a+=1.6){const c=new F(new ce(.8,2.5),Eg);c.rotation.x=-Math.PI/2,c.position.set(a,.015,i+o),jt.add(c)}const s=new F(new At(.08,.08,4.2,8),new et({color:4473924}));s.position.set(11.5,2.1,i+9.5),s.castShadow=!0,jt.add(s),un(11.5,i+9.5,.3,.3);const r=new F(new vt(2.4,.6,.1),new et({color:1793568,roughness:.4}));r.position.set(11.5,3.8,i+9.5),r.castShadow=!0,jt.add(r)});const sh=[],Ui=new et({color:2236962,roughness:.8}),wg=new et({color:16720418,emissive:16711680,emissiveIntensity:2.2}),Tg=new et({color:16763904,emissive:16755200,emissiveIntensity:2.2}),bg=new et({color:65382,emissive:56644,emissiveIntensity:2.2});function Zs(i,t,e,n,s){const r=new ee;r.position.set(i,0,t),r.rotation.y=e;const o=new F(new At(.1,.12,5.2,8),new et({color:2899536,roughness:.5,metalness:.4}));o.position.y=2.6,o.castShadow=!0,r.add(o),un(i,t,.4,.4);const a=new F(new vt(.1,.1,2.4),new et({color:2899536,roughness:.5,metalness:.4}));a.position.set(0,4.9,1.2),a.castShadow=!0,r.add(a);const c=new F(new vt(.48,1.3,.35),new et({color:1118481,roughness:.7}));c.position.set(0,4.7,2.2),c.castShadow=!0,r.add(c);for(let p of[5.12,4.72,4.32]){const g=new F(new vt(.38,.05,.2),new et({color:1118481,roughness:.7}));g.position.set(0,p,2.38),r.add(g)}const h=new At(.12,.12,.08,16);h.rotateX(Math.PI/2);const d=new F(h,Ui.clone());d.position.set(0,5,2.36),r.add(d);const f=new F(h,Ui.clone());f.position.set(0,4.7,2.36),r.add(f);const l=new F(h,Ui.clone());l.position.set(0,4.4,2.36),r.add(l),jt.add(r),sh.push({group:r,facing:n,intersectionZ:s,redMesh:d,yellowMesh:f,greenMesh:l})}Nn.forEach(i=>{Zs(-9.5,i-11,0,"south",i),Zs(9.5,i+11,Math.PI,"north",i),Zs(-11,i+9.5,Math.PI/2,"east",i),Zs(11,i-9.5,-Math.PI/2,"west",i)});let Se="avenue_green",Ei=10;function Ag(i){Ei-=i,Ei<=0&&(Se==="avenue_green"?(Se="avenue_yellow",Ei=3):Se==="avenue_yellow"?(Se="cross_green",Ei=10):Se==="cross_green"?(Se="cross_yellow",Ei=3):Se==="cross_yellow"&&(Se="avenue_green",Ei=10));for(const t of sh){const e=t.facing==="north"||t.facing==="south";let n=!1,s=!1,r=!1;e?Se==="avenue_green"?r=!0:Se==="avenue_yellow"?s=!0:n=!0:Se==="cross_green"?r=!0:Se==="cross_yellow"?s=!0:n=!0,t.redMesh.material=n?wg:Ui,t.yellowMesh.material=s?Tg:Ui,t.greenMesh.material=r?bg:Ui}}const gr=new vt(1,1,1),rh=new et({color:14474721,roughness:.8}),Rg=new et({color:14790956,roughness:.85}),Cg=new et({color:11745575,roughness:.9}),Pg=new et({color:1980313,roughness:.6}),Lg=new et({color:4876733,roughness:.4,metalness:.2}),Dg=new et({color:16302737,roughness:.8}),Ri=[rh,Rg,Cg,Pg,Lg,Dg],Ci=new et({color:1976110,roughness:.15,metalness:.85}),aa=new et({color:16775781,emissive:16765738,emissiveIntensity:.6,roughness:.3}),Ig=new et({color:13818594,roughness:.5}),ca=new et({color:1976110,roughness:.4}),Vc=[new et({color:15412998,roughness:.6}),new et({color:1092740,roughness:.6}),new et({color:16417329,roughness:.6}),new et({color:3049182,roughness:.6})],Wc=[new Ie({color:15158332}),new Ie({color:15965202}),new Ie({color:2600544}),new Ie({color:2719929})];function Ug(i){return Nn.some(t=>Math.abs(i-t)<14)}function Xc(i,t,e,n,s,r){const o=new ee,a=Math.floor(Math.abs(t*7+i*3))%Ri.length,c=Ri[a],h=new F(gr,c);h.scale.set(e,n,s),h.position.set(0,n/2,0),h.castShadow=!0,h.receiveShadow=!0,o.add(h);const d=.6,f=new F(new vt(e+.3,d,s+.3),new et({color:3093826,roughness:.7}));f.position.set(0,n+d/2,0),f.castShadow=!0,o.add(f);const l=r==="west"?e/2+.05:-5.55,p=r==="west"?Math.PI/2:-Math.PI/2,g=new F(new ce(e*.75,3.4),Ci);g.position.set(l,2,0),g.rotation.y=p,o.add(g);const M=Vc[Math.floor(Math.abs(t+i))%Vc.length],m=new F(new vt(.8,.12,e*.8),M);m.rotation.z=r==="west"?.35:-.35,m.position.set(r==="west"?e/2+.5:-6,3.8,0),m.castShadow=!0,o.add(m);const u=Math.floor((n-4.5)/3);for(let E=0;E<u;E++){const _=5.2+E*3;for(let A=-2;A<=2;A++){if(A===0&&n>20)continue;const b=A*1.5,R=(A+E+Math.abs(t))%3===0,P=new F(new ce(1,1.4),R?aa:Ci);P.position.set(l,_,b),P.rotation.y=p,o.add(P);const S=new F(new vt(.25,.08,1.2),rh);if(S.position.set(l+(r==="west"?.1:-.1),_-.72,b),o.add(S),(E+A)%4===1){const v=new F(new vt(.45,.4,.65),Ig);v.position.set(l+(r==="west"?.22:-.22),_-.45,b+.35),v.castShadow=!0,o.add(v)}}}const w=new F(new At(.85,.85,1.6,12),ca);if(w.position.set((r==="west"?-1:1)*(e*.2),n+.8,-s*.2),w.castShadow=!0,o.add(w),n>24){const E=new F(new At(.04,.08,5,6),new et({color:9807270,metalness:.8}));E.position.set(0,n+2.5,s*.2),E.castShadow=!0,o.add(E)}if(Math.abs(t)%24<10&&n>16){const E=Wc[Math.floor(Math.abs(t))%Wc.length],_=new F(new vt(.3,3.2,6.8),E);_.position.set(r==="west"?e/2-.5:-5,n+1.8,0),_.castShadow=!0,o.add(_)}o.position.set(i,0,t),jt.add(o),un(i,t,e,s)}for(let i=0;i<48;i++){const t=-235+i*10;if(Ug(t))continue;const e=14+i*13%24,n=11,s=8.5;Xc(-18,t,n,e,s,"west"),Xc(18,t,n,e,s,"east")}for(let i=-240;i<=240;i+=24)for(let t of[-10.8,10.8]){const e=new F(new At(.09,.09,6.5,8),new et({color:3355443}));e.position.set(t,3.25,i),e.castShadow=!0,jt.add(e),un(t,i,.35,.35);const n=new F(new vt(.8,.1,.1),new et({color:3355443}));n.position.set(t>0?t-.4:t+.4,6.4,i),jt.add(n);const s=new F(new vt(.4,.15,.3),new et({color:16775910,emissive:16770730,emissiveIntensity:1.2}));s.position.set(t>0?t-.7:t+.7,6.3,i),jt.add(s)}const qc=[15158332,15844367,3066993,3447003,15105570],Ng=[-55,-25,25,55,-115,115];Ng.forEach((i,t)=>{[-11.2,11.2].forEach((e,n)=>{const s=new F(new vt(1.8,.8,2.2),new et({color:9132587,roughness:.9}));s.position.set(e,.45,i),s.castShadow=!0,jt.add(s),un(e,i,1.8,2.2);const r=qc[(t+n)%qc.length],o=new F(new br(1.6,.6,8),new et({color:r,roughness:.6}));o.position.set(e,2.1,i),o.castShadow=!0,jt.add(o);const a=new F(new At(.04,.04,2.1,6),new et({color:13421772}));a.position.set(e,1.05,i),jt.add(a)})});const oh=[],Yc=[{primaryColor:"#e74c3c",secondaryColor:"#2c3e50",hairColor:"#000000",hat:"cap"},{primaryColor:"#2ecc71",secondaryColor:"#34495e",hairColor:"#1a1a1a",hat:"none"},{primaryColor:"#f39c12",secondaryColor:"#1e272c",hairColor:"#0f0f0f",hat:"none"},{primaryColor:"#9b59b6",secondaryColor:"#2d3436",hairColor:"#171717",hat:"glasses"},{primaryColor:"#1abc9c",secondaryColor:"#2c3e50",hairColor:"#000000",hat:"cap"},{primaryColor:"#e67e22",secondaryColor:"#34495e",hairColor:"#111111",hat:"none"}];for(let i=0;i<12;i++){const e=i%2===0?-11.5:11.5,n=-120+i*20,s=Yc[i%Yc.length],r={id:100+i,name:`Pedestrian ${i+1}`,account:`ped_${i}`,style:{body:"male",primaryColor:s.primaryColor,secondaryColor:s.secondaryColor,skinColor:"#6d4023",hairColor:s.hairColor,hair:"short",hat:s.hat,accessory:"none"},face:""},o=new th(r),a=i%3===0?-1:1;o.group.position.set(e,0,n),o.group.rotation.y=a===1?0:Math.PI,jt.add(o.group),oh.push({avatar:o,x:e,z:n,speed:1.8+i%4*.4,direction:a,minZ:-160,maxZ:160})}Nn.forEach(i=>{for(let t of[26,42,58,-26,-42,-58]){if(i===0&&t===26)continue;const e=10+Math.abs(t)*3%18,n=12,s=10,r=Ri[Math.abs(t+i)%Ri.length],o=Ri[(Math.abs(t-i)+1)%Ri.length],a=new ee,c=new F(gr,r);c.scale.set(n,e,s),c.position.set(0,e/2,0),c.castShadow=!0,c.receiveShadow=!0,a.add(c);const h=new F(new ce(8,2.8),Ci);h.position.set(0,1.8,-s/2-.05),a.add(h);const d=Math.floor((e-4)/3);for(let u=0;u<d;u++)for(let w=-2;w<=2;w++){const E=(u+w)%2===0,_=new F(new ce(1,1.2),E?aa:Ci);_.position.set(w*2,4.5+u*2.8,-s/2-.05),a.add(_)}const f=new F(new At(.7,.7,1.4,8),ca);f.position.set(2.5,e+.7,0),a.add(f),a.position.set(t,0,i+15),jt.add(a),un(t,i+15,n,s);const l=new ee,p=new F(gr,o);p.scale.set(n,e,s),p.position.set(0,e/2,0),p.castShadow=!0,p.receiveShadow=!0,l.add(p);const g=new F(new ce(8,2.8),Ci);g.position.set(0,1.8,s/2+.05),g.rotation.y=Math.PI,l.add(g);const M=Math.floor((e-4)/3);for(let u=0;u<M;u++)for(let w=-2;w<=2;w++){const E=(u+w+1)%2===0,_=new F(new ce(1,1.2),E?aa:Ci);_.position.set(w*2,4.5+u*2.8,s/2+.05),_.rotation.y=Math.PI,l.add(_)}const m=new F(new At(.7,.7,1.4,8),ca);m.position.set(-2.5,e+.7,0),l.add(m),l.position.set(t,0,i-15),jt.add(l),un(t,i-15,n,s)}});const on=new ee,ah=14,ch=12,lh=12,ws=new F(gr,new et({color:15265264,roughness:.5,metalness:.1}));ws.scale.set(ah,ch,lh);ws.position.set(26,ch/2,15);ws.castShadow=!0;ws.receiveShadow=!0;on.add(ws);un(26,15,ah,lh);const hh=new F(new ce(10,6),new et({color:1799396,roughness:.1,metalness:.9}));hh.position.set(26,6.5,8.95);on.add(hh);const La=new F(new vt(6.4,.35,3.2),new et({color:2899536,roughness:.5}));La.position.set(26,3.8,7.4);La.castShadow=!0;on.add(La);for(let i of[23.2,28.8]){const t=new F(new At(.12,.12,3.8,8),new et({color:2899536}));t.position.set(i,1.9,6),t.castShadow=!0,on.add(t),un(i,6,.4,.4)}const uh=new et({color:16711680,emissive:16716049,emissiveIntensity:2.5}),dh=new F(new vt(.5,1.8,.15),uh);dh.position.set(26,4.8,8.9);on.add(dh);const fh=new F(new vt(1.8,.5,.15),uh);fh.position.set(26,4.8,8.9);on.add(fh);const ph=new F(new vt(7.2,.8,.15),new et({color:623843,roughness:.4}));ph.position.set(26,4.2,7.35);on.add(ph);const mh=new et({color:2962486,roughness:.3,metalness:.8}),gh=new F(new ce(1.4,2.6),mh);gh.position.set(25.1,1.3,8.95);on.add(gh);const _h=new F(new ce(1.4,2.6),mh);_h.position.set(26.9,1.3,8.95);on.add(_h);const Ki=new ee;Ki.position.set(20.5,0,6.8);Ki.rotation.y=Math.PI/2;const Da=new F(new vt(2.2,1.8,4.6),new et({color:16777215,roughness:.4}));Da.position.y=1.1;Da.castShadow=!0;Ki.add(Da);const xh=new F(new vt(2.24,.35,4.4),new et({color:15158332,roughness:.4}));xh.position.y=1.1;Ki.add(xh);const vh=new F(new vt(1.2,.2,.4),new et({color:3447003,emissive:623843,emissiveIntensity:2}));vh.position.set(0,2.1,.8);Ki.add(vh);on.add(Ki);un(20.5,6.8,4.6,2.2);jt.add(on);const ti=[],Dr=[],Fg=[{id:1,x:10.8,z:20,yaw:Math.PI,type:"bicycle",color:3069299},{id:2,x:-10.8,z:-20,yaw:0,type:"bicycle",color:3447003},{id:3,x:10.8,z:-70,yaw:Math.PI,type:"bicycle",color:15105570},{id:4,x:-7.6,z:22,yaw:0,type:"scooter",color:15158332},{id:5,x:7.6,z:-25,yaw:Math.PI,type:"scooter",color:15965202},{id:6,x:-7.6,z:95,yaw:0,type:"scooter",color:10181046},{id:7,x:-7.5,z:45,yaw:0,type:"danfo",color:16236319},{id:8,x:-7.5,z:70,yaw:0,type:"sedan",color:2899536},{id:9,x:-7.5,z:-45,yaw:0,type:"keke",color:16236319},{id:10,x:-7.5,z:-110,yaw:0,type:"danfo",color:16236319},{id:11,x:7.5,z:50,yaw:Math.PI,type:"sedan",color:11882541},{id:12,x:7.5,z:-45,yaw:Math.PI,type:"danfo",color:16236319},{id:13,x:7.5,z:-115,yaw:Math.PI,type:"keke",color:16236319},{id:14,x:35,z:5.5,yaw:Math.PI/2,type:"danfo",color:16236319},{id:15,x:-35,z:-5.5,yaw:-Math.PI/2,type:"sedan",color:1482885},{id:16,x:50,z:-74.5,yaw:Math.PI/2,type:"keke",color:16236319},{id:17,x:-50,z:-85.5,yaw:-Math.PI/2,type:"danfo",color:16236319},{id:18,x:42,z:85.5,yaw:Math.PI/2,type:"sedan",color:13849600}];Fg.forEach(i=>{const t=eh({type:i.type,primaryColor:i.color});t.position.set(i.x,0,i.z),t.rotation.y=i.yaw,jt.add(t);let e=16,n=2.4;i.type==="bicycle"?(e=11,n=3.2):i.type==="scooter"?(e=18,n=2.8):i.type==="danfo"?(e=17,n=1.8):i.type==="keke"&&(e=13,n=2.6),Dr.push({id:i.id,type:i.type,mesh:t,pos:new N(i.x,0,i.z),yaw:i.yaw,speed:0,maxSpeed:e,turnSpeed:n})});const Og=[{type:"danfo",color:16236319,x:3.6,z:120,speed:13,direction:"north"},{type:"sedan",color:2719929,x:3.6,z:50,speed:13,direction:"north"},{type:"keke",color:16236319,x:3.6,z:-20,speed:13,direction:"north"},{type:"danfo",color:16236319,x:3.6,z:-90,speed:13,direction:"north"},{type:"sedan",color:15158332,x:3.6,z:-160,speed:13,direction:"north"},{type:"danfo",color:16236319,x:-3.6,z:-160,speed:13,direction:"south"},{type:"sedan",color:9323693,x:-3.6,z:-90,speed:13,direction:"south"},{type:"keke",color:16236319,x:-3.6,z:-20,speed:13,direction:"south"},{type:"danfo",color:16236319,x:-3.6,z:50,speed:13,direction:"south"},{type:"sedan",color:2600544,x:-3.6,z:120,speed:13,direction:"south"},{type:"danfo",color:16236319,x:-80,z:-3.2,speed:11,direction:"east"},{type:"sedan",color:15965202,x:20,z:-3.2,speed:11,direction:"east"},{type:"keke",color:16236319,x:80,z:3.2,speed:11,direction:"west"},{type:"danfo",color:16236319,x:-20,z:3.2,speed:11,direction:"west"},{type:"sedan",color:3426654,x:-60,z:-83.2,speed:11,direction:"east"},{type:"danfo",color:16236319,x:60,z:-76.8,speed:11,direction:"west"},{type:"keke",color:16236319,x:-60,z:76.8,speed:11,direction:"east"},{type:"sedan",color:1752220,x:60,z:83.2,speed:11,direction:"west"}];Og.forEach((i,t)=>{const e=eh({type:i.type,primaryColor:i.color});e.position.set(i.x,0,i.z);let n="z",s=-180,r=180,o=i.x;const a=i.type==="danfo"?5.2:i.type==="sedan"?4.5:2.5;i.direction==="north"?(e.rotation.y=Math.PI,n="z",o=i.x):i.direction==="south"?(e.rotation.y=0,n="z",o=i.x):i.direction==="east"?(e.rotation.y=Math.PI/2,n="x",s=-140,r=140,o=i.z):i.direction==="west"&&(e.rotation.y=-Math.PI/2,n="x",s=-140,r=140,o=i.z),jt.add(e),ti.push({id:t,mesh:e,baseSpeed:i.speed,currentSpeed:i.speed,direction:i.direction,axis:n,minBound:s,maxBound:r,laneCoord:o,length:a})});let Fn={id:1,name:"Lagos Driver",account:"driver_eko",style:{body:"male",primaryColor:"#f7bf1f",secondaryColor:"#2e2e38",skinColor:"#8d5524",hairColor:"#17120f",hair:"short",hat:"cap",accessory:"glasses"},face:""},Ye=null;const dn=new ee;dn.position.set(0,0,0);jt.add(dn);function Mh(i){Ye&&dn.remove(Ye.group),Ye=new th(i),dn.add(Ye.group)}Mh(Fn);async function Ia(){try{const t=new URLSearchParams(window.location.hash.slice(1)).get("startng_session");t&&(sessionStorage.setItem("startng_session",t),window.history.replaceState(null,"",window.location.pathname+window.location.search));const e=sessionStorage.getItem("startng_session");let n=null;if(e)try{const s=window.location.hostname.split(".")[0]||"lagos-hustle",r=await fetch(`https://api.start.ng/games/${s}/player`,{headers:{Authorization:`Bearer ${e}`}});if(r.ok){const o=await r.json();o&&o.style&&(n={id:o.id,name:o.name,account:o.name.toLowerCase().replace(/\s+/g,"_"),style:o.style,face:o.face||""})}}catch(s){console.warn("Direct start.ng player session fetch error:",s)}if(!n){const s=await Ra({type:"startng:whoami"},"startng:user",5e3);n=s?.user??s?.guest??null,s?.user?.account&&n&&(n.account=s.user.account)}if(n){Fn=n,Mh(n);const s=document.getElementById("player-card"),r=document.getElementById("player-face"),o=document.getElementById("player-name"),a=document.getElementById("player-account"),c=document.getElementById("player-sign-in");if(s&&r&&o&&a){if(n.face&&(r.src=n.face),o.textContent=n.name||"Lagos Hustler",a.textContent=n.account?`@${n.account}`:"Guest",c){const h=!!(e||n.id!==0);c.style.display=h?"none":"inline-block",c.onclick=()=>{window.location.href=`https://start.ng/?return_to=${encodeURIComponent(window.location.origin+window.location.pathname)}`}}s.style.display="flex"}}}catch(i){console.error("initIdentity failure:",i)}}Ia();window.addEventListener("focus",()=>{Ia()});window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Ia()});let _r=!1;const po=document.getElementById("intro-screen"),Bg=document.getElementById("intro-start-btn");function yh(){_r||(_r=!0,we.playIntroJingle(),setTimeout(()=>we.playDanfoHorn(),350),po&&(po.classList.add("fade-out"),setTimeout(()=>{po.style.display="none"},850)))}Bg?.addEventListener("click",()=>{yh()});const de={};window.addEventListener("keydown",i=>{if(!_r&&(i.code==="Space"||i.code==="Enter")){yh();return}de[i.code]=!0});window.addEventListener("keyup",i=>{de[i.code]=!1});let ei=Math.PI,xr=.32,vr=7.5,Ir=!1,la=0,ha=0;window.addEventListener("pointerdown",i=>{_r&&(Ir=!0,la=i.clientX,ha=i.clientY)});window.addEventListener("pointermove",i=>{if(!Ir)return;const t=i.clientX-la,e=i.clientY-ha;la=i.clientX,ha=i.clientY,ei-=t*.005,xr=Math.max(.05,Math.min(1.1,xr+e*.004))});window.addEventListener("pointerup",()=>{Ir=!1});window.addEventListener("pointercancel",()=>{Ir=!1});window.addEventListener("wheel",i=>{vr=Math.max(3.5,Math.min(15,vr+Math.sign(i.deltaY)*.8))},{passive:!0});let Pt=new N(11.2,.05,16),ri=Math.PI;const $c=7;let ht=null;const wi=document.getElementById("vehicle-prompt");window.addEventListener("keydown",i=>{if(i.code==="KeyE")if(ht)Eh();else{const t=Na(3.2);t&&Sh(t)}else i.code==="KeyH"&&Ua()});function Ua(){ht&&ht.type==="bicycle"?we.playBicycleBell():we.playDanfoHorn()}function Na(i=3.2){let t=null,e=i;for(const n of Dr){const s=Pt.distanceTo(n.pos);s<e&&(e=s,t=n)}return t}function Sh(i){ht=i,Pt.copy(i.pos),ri=i.yaw,i.type==="bicycle"||i.type==="scooter"?Pt.y=.2:Pt.y=.4;const t=i.type==="bicycle"?"DISPATCH BICYCLE":i.type==="scooter"?"OKADA SCOOTER":i.type==="danfo"?"DANFO BUS":i.type==="keke"?"KEKE NAPEP":"SEDAN CAR";ae&&(ae.textContent=`🚀 MOUNTED ${t}! PRESS [E] TO DISMOUNT`,ae.style.display="block",setTimeout(()=>{ae.style.display="none"},2500))}function Eh(){ht&&(Pt.x+=Math.sin(ri+Math.PI/2)*1.5,Pt.y=.05,ht.speed=0,ht=null,ae&&(ae.textContent="🚶 DISMOUNTED TO FOOT",ae.style.display="block",setTimeout(()=>{ae.style.display="none"},1800)))}let si=!1,Mr=0,Mn=new N;const hs=document.getElementById("wasted-screen");let Te=0,yr=0,Sr=0,us=0,js=null,gs=0,On="pickup";const kn=[{id:1,title:"Mama Bola Hot Jollof",pickupDesc:"Pick up steaming Jollof Rice package from Mama Bola's East sidewalk food stall.",dropoffDesc:"Deliver the hot food parcel safely across the avenue to the customer at Ojuelegba Kiosk.",pickupPos:new N(11.2,.45,25),pickupLabel:"Mama Bola Food Stall",dropoffPos:new N(-11.5,.45,-55),dropoffLabel:"Ojuelegba Customer",reward:5e3,itemType:"food"},{id:2,title:"Computer Village Spare Parts",pickupDesc:"Collect electronic components from the electronics dealer at Broad Street cross road.",dropoffDesc:"Rush the package to the phone repair vendor on West Avenue sidewalk before closing.",pickupPos:new N(35,.45,0),pickupLabel:"Electronics Dealer",dropoffPos:new N(-11.2,.45,55),dropoffLabel:"Phone Repair Vendor",reward:7500,itemType:"parts"},{id:3,title:"Danfo Vulcanizer Tyre Run",pickupDesc:"Pick up a heavy patched tyre from the vulcanizer at Marina Road intersection.",dropoffDesc:"Carry tyre to the stranded yellow Danfo bus waiting along the north avenue curb.",pickupPos:new N(-35,.45,-80),pickupLabel:"Vulcanizer Workshop",dropoffPos:new N(7.5,.45,-40),dropoffLabel:"Stranded Danfo Bus",reward:1e4,itemType:"tyre"},{id:4,title:"VIP Glover Suya Express",pickupDesc:"Pick up freshly grilled peppered Suya skewers wrapped in newspaper at South cross road.",dropoffDesc:"Deliver the VIP order to the executive commercial office entrance.",pickupPos:new N(42,.45,80),pickupLabel:"Mai Suya Spot",dropoffPos:new N(14,.45,-20),dropoffLabel:"Office Executive Plaza",reward:12500,itemType:"suya"}],Vi=new ee,Fa=new F(new vt(.42,.32,.42),new et({color:13849600,roughness:.8}));Fa.position.set(0,.9,.32);Fa.castShadow=!0;Vi.add(Fa);const wh=new F(new vt(.44,.06,.44),new et({color:15844367,roughness:.5}));wh.position.set(0,.9,.32);Vi.add(wh);Vi.visible=!1;dn.add(Vi);const Zi=new ee,zg=new ba(.7,0),as=new et({color:16236319,emissive:15965202,emissiveIntensity:1.5,roughness:.2}),Ni=new F(zg,as);Ni.position.y=1.9;Ni.castShadow=!0;Zi.add(Ni);const kg=new Ar(.9,1.25,24),ua=new Ie({color:16236319,side:en,transparent:!0,opacity:.85}),_s=new F(kg,ua);_s.rotation.x=-Math.PI/2;_s.position.y=.04;Zi.add(_s);const Gg=new Ar(1.4,1.6,24),Hg=new Ie({color:3069299,side:en,transparent:!0,opacity:.5}),xs=new F(Gg,Hg);xs.rotation.x=-Math.PI/2;xs.position.y=.035;Zi.add(xs);const Vg=new At(.18,.18,12,12),da=new Ie({color:16236319,transparent:!0,opacity:.25}),Th=new F(Vg,da);Th.position.y=6;Zi.add(Th);jt.add(Zi);const Kc=document.getElementById("task-title"),Zc=document.getElementById("task-desc"),mo=document.getElementById("task-step"),jc=document.getElementById("task-reward-tag"),Jc=document.getElementById("task-target"),Er=document.getElementById("wallet-balance"),ae=document.getElementById("toast-notification");let Qc=!1,tl=!1,el=!1,Wi=!1;const ds=90;let tn=ds;const Js=document.getElementById("timer-bar-fill"),Qs=document.getElementById("timer-text"),ss=document.getElementById("lastma-banner"),nl=document.getElementById("shop-btn"),wr=document.getElementById("shop-modal"),il=document.getElementById("shop-close"),tr=document.getElementById("buy-turbo-btn"),er=document.getElementById("buy-outfit-btn"),nr=document.getElementById("buy-agbada-btn"),ir=document.getElementById("buy-hotbox-btn"),sl=document.getElementById("horn-btn");sl&&sl.addEventListener("click",()=>{Ua()});nl&&wr&&nl.addEventListener("click",()=>{wr.style.display="flex"});il&&wr&&il.addEventListener("click",()=>{wr.style.display="none"});const rl=document.getElementById("leaderboard-btn"),Dn=document.getElementById("leaderboard-modal"),ol=document.getElementById("leaderboard-close"),rs=document.getElementById("leaderboard-rows"),sr=document.getElementById("leaderboard-loading"),Ti=document.getElementById("leaderboard-table"),al=document.getElementById("leaderboard-guest-callout"),cl=document.getElementById("leaderboard-signin-btn"),ll=document.getElementById("my-summary-name"),hl=document.getElementById("my-stat-earnings"),ul=document.getElementById("my-stat-deliveries"),dl=document.getElementById("my-stat-distance"),fl=document.getElementById("my-stat-lap");function bh(i){if(!i||i<=0)return"--:--";const t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${e<10?"0":""}${e}`}function Wg(){ll&&(ll.textContent=Fn?.name||"Lagos Hustler"),hl&&(hl.textContent=Math.round(Te).toLocaleString()),ul&&(ul.textContent=yr.toString());const i=(Sr/1e3).toFixed(1);dl&&(dl.textContent=i),fl&&(fl.textContent=bh(us));const t=!!(sessionStorage.getItem("startng_session")||Fn&&Fn.id!==0);al&&(al.style.display=t?"none":"flex")}let go=!1,pl="";async function ji(i=!1){if(Te===0&&yr===0&&Sr<100||go)return;const t={earnings:Math.max(0,Math.round(Te)),deliveries:Math.max(0,yr),distance_km:Math.max(0,Math.floor(Sr/1e3)),best_time:Math.max(1,Math.round(us||90))},e=JSON.stringify(t);if(!(e===pl&&!i)){go=!0;try{const n=await lg(t);if(n&&n.ok&&(pl=e,n.result?.improved&&(we.playLeaderboardFanfare(),ae))){const s=n.result.rank?" #"+n.result.rank:"";ae.textContent=`🌟 NEW PERSONAL BEST ON LEADERBOARD${s}! ₦${t.earnings.toLocaleString()}`,ae.style.display="block",setTimeout(()=>{ae.style.display="none"},4e3)}}catch(n){console.warn("Leaderboard score sync error:",n)}finally{go=!1}}}async function Xg(){Wg(),sr&&(sr.style.display="block"),Ti&&(Ti.style.display="none"),ji(!1);const i=await hg(25);if(sr&&(sr.style.display="none"),!i||i.length===0){rs&&(rs.innerHTML='<tr><td colspan="6" style="text-align: center; color: #a4b0be; padding: 24px;">No runs recorded yet on start.ng. Be the first to rank on Lagos Hustle!</td></tr>'),Ti&&(Ti.style.display="table");return}rs&&(rs.innerHTML="",i.forEach((t,e)=>{const n=Fn&&Fn.id!==0&&t.player_id===Fn.id,s=t.rank||e+1;let r="lb-rank-other";s===1?r="lb-rank-1":s===2?r="lb-rank-2":s===3&&(r="lb-rank-3");const o=t.stats||{},a=Number(o.earnings??t.score??0),c=Number(o.deliveries??0),h=Number(o.distance_km??0),d=Number(o.best_time??0),f=document.createElement("tr");n&&f.classList.add("lb-row-self"),f.innerHTML=`
        <td><span class="lb-rank-badge ${r}">${s}</span></td>
        <td>
          <div class="lb-player-cell">
            <span class="lb-color-dot" style="background: ${t.color||"#f7bf1f"};"></span>
            <span style="font-weight: ${n?"900":"700"}; color: ${n?"#f7bf1f":"#fff"};">${t.name||"Anonymous"}${n?" (YOU)":""}</span>
          </div>
        </td>
        <td style="text-align: right; font-family: monospace; font-weight: 800; color: #2ed573;">₦${a.toLocaleString()}</td>
        <td style="text-align: center; font-family: monospace; font-weight: 700;">${c}</td>
        <td style="text-align: center; font-family: monospace; font-weight: 700;">${h} km</td>
        <td style="text-align: right; font-family: monospace; font-weight: 700; color: #f7bf1f;">${bh(d)}</td>
      `,rs.appendChild(f)})),Ti&&(Ti.style.display="table")}rl&&Dn&&rl.addEventListener("click",()=>{Dn.style.display="flex",Xg()});ol&&Dn&&ol.addEventListener("click",()=>{Dn.style.display="none"});Dn&&Dn.addEventListener("click",i=>{i.target===Dn&&(Dn.style.display="none")});cl&&cl.addEventListener("click",()=>{ug()});tr&&tr.addEventListener("click",()=>{Te>=1e4&&!Qc&&(Te-=1e4,Qc=!0,tr.textContent="INSTALLED ✓",tr.classList.add("bought"),Dr.forEach(i=>{i.type==="scooter"&&(i.maxSpeed=24)}),we.playCashChime(!0),Ji(),ji(!1))});er&&er.addEventListener("click",()=>{Te>=7500&&!tl&&(Te-=7500,tl=!0,er.textContent="EQUIPPED ✓",er.classList.add("bought"),Ye&&Ye.setOutfit(65416,1976110),we.playCashChime(!0),Ji(),ji(!1))});nr&&nr.addEventListener("click",()=>{Te>=25e3&&!el&&(Te-=25e3,el=!0,nr.textContent="EQUIPPED ✓",nr.classList.add("bought"),Ye&&Ye.setOutfit(15844367,15965202),we.playCashChime(!0),Ji(),ji(!1))});ir&&ir.addEventListener("click",()=>{Te>=15e3&&!Wi&&(Te-=15e3,Wi=!0,ir.textContent="ACTIVE ✓",ir.classList.add("bought"),we.playCashChime(!0),Ji(),ji(!1))});const qg=document.getElementById("touch-up"),Yg=document.getElementById("touch-down"),$g=document.getElementById("touch-left"),Kg=document.getElementById("touch-right"),ml=document.getElementById("touch-mount"),gl=document.getElementById("touch-horn"),_l=document.getElementById("mobile-controls"),xl=document.getElementById("mobile-actions");("ontouchstart"in window||navigator.maxTouchPoints>0)&&(_l&&(_l.style.display="flex"),xl&&(xl.style.display="flex"));function Ur(i,t){if(!i)return;const e=s=>{s.preventDefault(),de[t]=!0},n=s=>{s.preventDefault(),de[t]=!1};i.addEventListener("touchstart",e),i.addEventListener("touchend",n),i.addEventListener("mousedown",e),i.addEventListener("mouseup",n)}Ur(qg,"KeyW");Ur(Yg,"KeyS");Ur($g,"KeyA");Ur(Kg,"KeyD");ml&&ml.addEventListener("click",i=>{if(i.preventDefault(),ht)Eh();else{const t=Na(3.2);t&&Sh(t)}});gl&&gl.addEventListener("click",i=>{i.preventDefault(),Ua()});function Ji(){const i=kn[gs%kn.length],t=On==="pickup",e=t?i.pickupPos:i.dropoffPos;Zi.position.copy(e),t?(as.color.setHex(16236319),as.emissive.setHex(15965202),ua.color.setHex(16236319),da.color.setHex(16236319),Vi.visible=!1):(as.color.setHex(3069299),as.emissive.setHex(2535263),ua.color.setHex(3069299),da.color.setHex(3069299),Vi.visible=!0),Kc&&(Kc.textContent=i.title),Zc&&(Zc.textContent=t?i.pickupDesc:i.dropoffDesc),mo&&(mo.textContent=t?`📦 STAGE 1: PICKUP (${i.pickupLabel})`:`🎯 STAGE 2: DELIVER (${i.dropoffLabel})`,mo.style.color=t?"#ff9f43":"#2ed573"),jc&&(jc.textContent=`+₦${i.reward.toLocaleString()}`),Er&&(Er.textContent=`₦${Te.toLocaleString()}`)}Ji();function Zg(){const i=kn[gs%kn.length];if(On==="pickup")On="dropoff",tn=ds,we.playPickup(),ae&&(ae.textContent=`📦 PACKAGE COLLECTED! NOW DELIVER TO ${i.dropoffLabel.toUpperCase()}`,ae.style.display="block",setTimeout(()=>{ae.style.display="none"},2500));else{let t=0;tn>45?t=Wi?5e3:2500:tn>15&&(t=Wi?2e3:1e3);const e=Math.max(1,Math.round(ds-tn));(us===0||e<us)&&(us=e);const n=i.reward+t;if(Te+=n,yr++,On="pickup",gs++,tn=ds,we.playCashChime(t>0),ae){const s=t>0?` (+₦${t.toLocaleString()} FAST TIP!)`:"";ae.textContent=`+₦${n.toLocaleString()} EARNED!${s} ${i.title.toUpperCase()} COMPLETE!`,ae.style.display="block",setTimeout(()=>{ae.style.display="none"},3500)}ji(!0)}Ji()}function jg(i){if(si)return;si=!0,Mr=2.5,we.playCrashSound(),ht&&(ht.speed=0,ht=null);const t=new N(0,0,0);i.axis==="z"?t.z=i.direction==="north"?-1:1:t.x=i.direction==="east"?1:-1,Mn.copy(t).multiplyScalar(i.currentSpeed*.9),Mn.y=4.5,dn.rotation.x=-Math.PI/2,hs&&(hs.style.display="flex",hs.style.opacity="1")}function Jg(){si=!1,Mr=0,Mn.set(0,0,0),dn.rotation.x=0,dn.rotation.z=0,Pt.set(26,.05,8.2),ri=Math.PI,ei=Math.PI,hs&&(hs.style.display="none"),ae&&(ae.textContent="🏥 DISCHARGED FROM EKO GENERAL HOSPITAL — BACK TO THE HUSTLE!",ae.style.display="block",setTimeout(()=>{ae.style.display="none"},3200))}const fs=document.getElementById("minimap-canvas"),vl=fs?fs.getContext("2d"):null;function Qg(){if(!fs||!vl)return;const i=vl,t=fs.width,e=fs.height,n=t/2,s=e/2,r=.55;i.fillStyle="#0f141a",i.fillRect(0,0,t,e),i.strokeStyle="rgba(255, 255, 255, 0.08)",i.lineWidth=1,i.beginPath(),i.arc(n,s,30,0,Math.PI*2),i.arc(n,s,65,0,Math.PI*2),i.stroke();function o(A,b){return{x:n+(A-Pt.x)*r,y:s+(b-Pt.z)*r}}const a=o(-10,-200),c=o(10,200);i.fillStyle="#2c3e50",i.fillRect(a.x,0,c.x-a.x,e);const h=o(0,0);i.strokeStyle="#f1c40f",i.lineWidth=1.5,i.beginPath(),i.moveTo(h.x,0),i.lineTo(h.x,e),i.stroke(),Nn.forEach(A=>{const b=o(-150,A-8),R=16*r;i.fillStyle="#2c3e50",i.fillRect(0,b.y,t,R),i.strokeStyle="#f1c40f",i.lineWidth=1.2,i.beginPath(),i.moveTo(0,b.y+R/2),i.lineTo(t,b.y+R/2),i.stroke()}),i.fillStyle="rgba(99, 110, 114, 0.85)";for(const A of mr){const b=o(A.minX,A.minZ),R=o(A.maxX,A.maxZ),P=R.x-b.x,S=R.y-b.y;b.x+P>-10&&b.x<t+10&&b.y+S>-10&&b.y<e+10&&i.fillRect(b.x,b.y,P,S)}const d=o(26,15);i.fillStyle="#0984e3",i.fillRect(d.x-7*r,d.y-6*r,14*r,12*r),i.fillStyle="#ff4757",i.font="bold 9px monospace",i.textAlign="center",i.fillText("+",d.x,d.y+3);for(const A of Dr){if(ht&&ht.id===A.id)continue;const b=o(A.pos.x,A.pos.z);b.x>0&&b.x<t&&b.y>0&&b.y<e&&(i.fillStyle=A.type==="bicycle"?"#2ed573":A.type==="scooter"?"#ff4757":"#f7bf1f",i.beginPath(),i.arc(b.x,b.y,3,0,Math.PI*2),i.fill())}for(const A of ti){const b=o(A.mesh.position.x,A.mesh.position.z);b.x>0&&b.x<t&&b.y>0&&b.y<e&&(i.fillStyle=A.direction==="north"||A.direction==="south"?"#f39c12":"#e74c3c",i.beginPath(),i.arc(b.x,b.y,2.5,0,Math.PI*2),i.fill())}const f=kn[gs%kn.length],l=On==="pickup"?f.pickupPos:f.dropoffPos,p=o(l.x,l.z),g=p.x-n,M=p.y-s,m=Math.hypot(g,M),u=t/2-12;let w=p.x,E=p.y;m>u&&(w=n+g/m*u,E=s+M/m*u);const _=On==="pickup"?"#f7bf1f":"#2ed573";i.fillStyle=_,i.beginPath(),i.arc(w,E,5,0,Math.PI*2),i.fill(),i.strokeStyle="#fff",i.lineWidth=1.5,i.stroke(),i.save(),i.translate(n,s),i.rotate(ri),i.fillStyle="#00d2d3",i.beginPath(),i.moveTo(0,6),i.lineTo(-4,-5),i.lineTo(4,-5),i.closePath(),i.fill(),i.strokeStyle="#ffffff",i.lineWidth=1.5,i.stroke(),i.restore()}let Ml=performance.now(),_o=0,xo=performance.now();function Ah(){requestAnimationFrame(Ah);const i=performance.now(),t=Math.min((i-Ml)/1e3,.1);if(Ml=i,_o++,i-xo>=500){const l=Math.round(_o*1e3/(i-xo));vg.textContent=`FPS: ${l}`,_o=0,xo=i}if(Ag(t),si)Mr-=t,Mn.y-=15*t,Pt.x+=Mn.x*t,Pt.y=Math.max(.1,Pt.y+Mn.y*t),Pt.z+=Mn.z*t,Mn.x*=.96,Mn.z*=.96,Mr<=0&&Jg();else{if(de.KeyQ&&(ei+=1.8*t),de.KeyE&&(ei-=1.8*t),!ht&&wi){const l=Na(3.2);if(l){const p=l.type==="bicycle"?"BICYCLE":l.type==="scooter"?"OKADA SCOOTER":l.type==="danfo"?"DANFO BUS":l.type==="keke"?"KEKE":"CAR";wi.textContent=`PRESS [E] TO RIDE ${p}`,wi.style.display="block"}else wi.style.display="none"}else wi&&(wi.style.display="none");if(ht){let l=function(R,P){for(const S of mr)if(R+A>S.minX&&R-A<S.maxX&&P+A>S.minZ&&P-A<S.maxZ)return!0;for(const S of ti){const v=S.axis==="z"?S.length*.45:1.4,C=(R-S.mesh.position.x)**2+(P-S.mesh.position.z)**2,O=A+v;if(C<O*O)return!0}return!1},p=0,g=0;(de.KeyW||de.ArrowUp)&&(p+=1),(de.KeyS||de.ArrowDown)&&(p-=.6),(de.KeyA||de.ArrowLeft)&&(g+=1),(de.KeyD||de.ArrowRight)&&(g-=1);const M=ht.type==="bicycle"?14:ht.type==="scooter"?22:18,m=6;if(p!==0?(ht.speed+=p*M*t,ht.speed=Math.max(-6,Math.min(ht.maxSpeed,ht.speed))):ht.speed>0?ht.speed=Math.max(0,ht.speed-m*t):ht.speed<0&&(ht.speed=Math.min(0,ht.speed+m*t)),g!==0&&Math.abs(ht.speed)>.1){const R=ht.speed<0?-1:1;ht.yaw+=g*ht.turnSpeed*t*R}const u=Math.sin(ht.yaw)*ht.speed*t,w=Math.cos(ht.yaw)*ht.speed*t,E=ht.pos.x+u,_=ht.pos.z+w,A=ht.type==="bicycle"||ht.type==="scooter"?.6:1.4;l(E,ht.pos.z)?ht.speed*=.3:ht.pos.x=E,l(ht.pos.x,_)?ht.speed*=.3:ht.pos.z=_,Nn.some(R=>Math.abs(ht.pos.z-R)<=7)?ht.pos.x=Math.max(-140,Math.min(140,ht.pos.x)):ht.pos.x=Math.max(-13,Math.min(13,ht.pos.x)),ht.pos.z=Math.max(-280,Math.min(280,ht.pos.z)),ht.mesh.position.copy(ht.pos),ht.mesh.rotation.y=ht.yaw,Pt.copy(ht.pos),ri=ht.yaw,ht.type==="bicycle"||ht.type==="scooter"?Pt.y=.25:Pt.y=.45,Ye&&Ye.updateRidingAnimation(t,ht.type,ht.speed),we.updateEngineSound(ht.type,ht.speed,ht.maxSpeed)}else{we.updateEngineSound(null,0,0);let l=0,p=0;(de.KeyW||de.ArrowUp)&&(p-=1),(de.KeyS||de.ArrowDown)&&(p+=1),(de.KeyA||de.ArrowLeft)&&(l-=1),(de.KeyD||de.ArrowRight)&&(l+=1);const g=l!==0||p!==0;if(g){let M=function(j,H){for(const it of mr)if(j+W>it.minX&&j-W<it.maxX&&H+W>it.minZ&&H-W<it.maxZ)return!0;return!1};const m=ei+Math.PI,u=Math.sin(m),w=Math.cos(m),E=-w,_=u,A=Math.hypot(l,p),b=-p/A,R=l/A,P=u*b+E*R,S=w*b+_*R;ri=Math.atan2(P,S);const v=P*$c*t,C=S*$c*t;let O=Pt.x+v,B=Pt.z+C;const W=.45;M(O,Pt.z)||(Pt.x=O),M(Pt.x,B)||(Pt.z=B);const $=Nn.some(j=>Math.abs(Pt.z-j)<=7);$?Pt.x=Math.max(-140,Math.min(140,Pt.x)):Pt.x=Math.max(-13.5,Math.min(13.5,Pt.x)),Pt.z=Math.max(-280,Math.min(280,Pt.z));const X=Math.abs(Pt.x)>=10&&!$;Pt.y=X?.05:0}Ye&&Ye.updateAnimation(t,g,1.2)}}if(js){const l=js.distanceTo(Pt);l>.001&&l<20&&(Sr+=l)}else js=new N;js.copy(Pt),dn.position.copy(Pt),si||(dn.rotation.y=ri);const e=vr*Math.cos(xr),n=vr*Math.sin(xr),s=new N(Pt.x+Math.sin(ei)*e,Pt.y+1.2+n,Pt.z+Math.cos(ei)*e);if(ur.position.lerp(s,.15),ur.lookAt(Pt.x,Pt.y+1.3,Pt.z),!si&&!ht)for(const l of ti){const p=Math.abs(Pt.x-l.mesh.position.x),g=Math.abs(Pt.z-l.mesh.position.z),M=l.axis==="z"?1.8:l.length/2+.4,m=l.axis==="z"?l.length/2+.4:1.8;if(p<M&&g<m&&l.currentSpeed>1.5){jg(l);break}}const r=16,o=8.5;for(const l of ti){let p=l.baseSpeed;l.honkCooldown&&l.honkCooldown>0&&(l.honkCooldown-=t);const g=ht?ht.pos:Pt;let M=-1,m=!1;if(l.axis==="z"?(m=Math.abs(l.mesh.position.x-g.x)<2.5,m&&(l.direction==="north"?M=l.mesh.position.z-g.z:M=g.z-l.mesh.position.z)):(m=Math.abs(l.mesh.position.z-g.z)<2.5,m&&(l.direction==="east"?M=g.x-l.mesh.position.x:M=l.mesh.position.x-g.x)),M>0&&M<22){if(M<8)p=0;else{const E=(M-8)/14;p=Math.min(p,l.baseSpeed*Math.max(0,E*.5))}(!l.honkCooldown||l.honkCooldown<=0)&&(l.honkCooldown=2+Math.random()*1.5,we.playDanfoHorn())}for(const E of ti)if(l.id!==E.id&&l.axis===E.axis&&l.direction===E.direction&&Math.abs(l.laneCoord-E.laneCoord)<1){let _=999;if(l.direction==="north"?_=l.mesh.position.z-E.mesh.position.z:l.direction==="south"?_=E.mesh.position.z-l.mesh.position.z:l.direction==="east"?_=E.mesh.position.x-l.mesh.position.x:l.direction==="west"&&(_=l.mesh.position.x-E.mesh.position.x),_>0&&_<r)if(_<o)p=0;else{const A=(_-o)/(r-o);p=Math.min(p,E.currentSpeed*A)}}const u=Se==="cross_green"||Se==="cross_yellow",w=Se==="avenue_green"||Se==="avenue_yellow";for(const E of Nn)if(l.axis==="z"){if(u){if(l.direction==="north"){const _=l.mesh.position.z-(E+11.5);_>0&&_<16&&(_<3?p=0:p=Math.min(p,l.baseSpeed*(_/16)))}else if(l.direction==="south"){const _=E-11.5-l.mesh.position.z;_>0&&_<16&&(_<3?p=0:p=Math.min(p,l.baseSpeed*(_/16)))}}}else if(l.axis==="x"&&Math.abs(l.laneCoord-E)<2&&w){if(l.direction==="east"){const _=-11.5-l.mesh.position.x;_>0&&_<16&&(_<3?p=0:p=Math.min(p,l.baseSpeed*(_/16)))}else if(l.direction==="west"){const _=l.mesh.position.x-11.5;_>0&&_<16&&(_<3?p=0:p=Math.min(p,l.baseSpeed*(_/16)))}}l.axis==="x"&&Math.abs(l.mesh.position.x)<14&&ti.some(A=>A.axis==="z"&&Math.abs(A.mesh.position.z-l.laneCoord)<8&&Math.abs(A.mesh.position.x)<6)&&(p=0),l.currentSpeed=Fu.lerp(l.currentSpeed,p,t*5),l.axis==="z"?l.direction==="north"?(l.mesh.position.z-=l.currentSpeed*t,l.mesh.position.z<l.minBound&&(l.mesh.position.z=l.maxBound)):(l.mesh.position.z+=l.currentSpeed*t,l.mesh.position.z>l.maxBound&&(l.mesh.position.z=l.minBound)):l.direction==="east"?(l.mesh.position.x+=l.currentSpeed*t,l.mesh.position.x>l.maxBound&&(l.mesh.position.x=l.minBound)):(l.mesh.position.x-=l.currentSpeed*t,l.mesh.position.x<l.minBound&&(l.mesh.position.x=l.maxBound))}for(const l of oh)l.z+=l.speed*l.direction*t,l.direction===1&&l.z>l.maxZ?(l.direction=-1,l.avatar.group.rotation.y=Math.PI):l.direction===-1&&l.z<l.minZ&&(l.direction=1,l.avatar.group.rotation.y=0),l.avatar.group.position.z=l.z,l.avatar.updateAnimation(t,!0,1);if(Ni&&(Ni.rotation.y+=t*2.5,Ni.position.y=1.9+Math.sin(i*.005)*.25),_s){const l=1+Math.sin(i*.006)*.15;_s.scale.set(l,l,1)}if(xs){const l=1+Math.cos(i*.006)*.18;xs.scale.set(l,l,1)}const a=kn[gs%kn.length],c=On==="pickup"?a.pickupPos:a.dropoffPos,h=Pt.distanceTo(c);if(Jc&&(Jc.textContent=`📍 ${Math.round(h)}m away`),On==="dropoff"){tn=Math.max(0,tn-t);const l=tn/ds*100;if(Js&&(Js.style.width=`${l}%`),Qs){const p=tn>45?Wi?5e3:2500:tn>15?Wi?2e3:1e3:0,g=p>0?`(TIP: +₦${p.toLocaleString()})`:"(COLD - NO TIP)";Qs.textContent=`⏱️ ${Math.ceil(tn)}s ${g}`}}else Js&&(Js.style.width="100%"),Qs&&(Qs.textContent="⏱️ 90s (PICKUP STAGE)");const d=Math.abs(Pt.z)<16&&Math.abs(Pt.x)<8,f=Se==="cross_green"||Se==="cross_yellow";d&&ht&&(ht.speed>13||f)&&ss&&ss.style.display!=="block"&&(ss.style.display="block",we.playSirenChirp(),Te>=500&&(Te=Math.max(0,Te-500),Er&&(Er.textContent=`₦${Te.toLocaleString()}`)),setTimeout(()=>{ss&&(ss.style.display="none")},3e3)),!si&&h<2.8&&Zg(),$i.render(jt,ur),Qg()}Ah();

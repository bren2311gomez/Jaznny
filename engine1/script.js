// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_bubbles(b,l,n){var e=jQuery;var f=e(this);var i=b.noCanvas||!document.createElement("canvas").getContext;var k=b.width,p=b.height;var g=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_bubbles").appendTo(n);if(!i){var a=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(g);var o=a.get(0).getContext("2d")}var j={easeOutBack:function(u,v,h,z,y,w){if(w==undefined){w=1.70158}return z*((v=v/y-1)*v*((w+1)*v+w)+1)+h},easeOutBackCubic:function(u,v,h,A,z,w){var y=(v/=z)*v;return h+A*(-1.5*y*v*y+2*y*y+4*y*v+-9*y+5.5*v)},easeOutCubic:function(u,v,h,y,w){return y*((v=v/w-1)*v*v+1)+h},easeOutExpo:function(u,v,h,y,w){return(v==w)?h+y:y*(-Math.pow(2,-10*v/w)+1)+h}};var s=[["#bbbbbb",0.5,0.5],["#b3b3b3",0.2,0.2],["#b6b6b6",0.5,0.2],["#b9b9b9",0.8,0.2],["#cccccc",0.2,0.8],["#c3c3c3",0.5,0.8],["#c6c6c6",0.8,0.8]];var c=[[[0.5,0.5,0.7,0.15],[0.5,0.5,0.6,0.3],[0.5,0.5,0.5,0.45],[0.5,0.5,0.4,0.6],[0.5,0.5,0.3,0.75],[0.5,0.5,0.2,0.9],[0.5,0.5,0.1,1]],[[0.5,0.5,0.7,1],[0.5,0.5,0.6,0.9],[0.5,0.5,0.5,0.75],[0.5,0.5,0.4,0.6],[0.5,0.5,0.3,0.45],[0.5,0.5,0.2,0.3],[0.5,0.5,0.1,0.15]]];var m=[[[0.5,0.5,0,1],[0.5,0.5,0,0.9],[0.5,0.5,0,0.75],[0.5,0.5,0,0.6],[0.5,0.5,0,0.45],[0.5,0.5,0,0.3],[0.5,0.5,0,0.15]],[[0.5,0.5,0,0.15],[0.5,0.5,0,0.3],[0.5,0.5,0,0.45],[0.5,0.5,0,0.6],[0.5,0.5,0,0.75],[0.5,0.5,0,0.9],[0.5,0.5,0,1]],[[0.5,7.5,0.7,0.75],[0.5,7.5,0.6,0.15],[0.5,7.5,0.5,1],[0.5,7.5,0.4,0.3],[0.5,7.5,0.3,0.45],[0.5,7.5,0.2,0.6],[0.5,7.5,0.1,0.9]],[[0.5,7.5,0.7,1],[0.5,7.5,0.6,0.9],[0.5,7.5,0.5,0.75],[0.5,7.5,0.4,0.6],[0.5,7.5,0.3,0.45],[0.5,7.5,0.2,0.3],[0.5,7.5,0.1,0.15]]];function d(u){if(Object.prototype.toString.call(u)==="[object Array]"){return u[Math.floor(Math.random()*(u.length))]}else{var h;var t=0;for(var v in u){if(Math.random()<1/++t){h=v}}return/linear|swing/g.test(h)?d(u):h}}function q(B,A,v,z,t){B.clearRect(0,0,k,p);for(var u=0,y=v.length;u<y;u++){var h=Math.max(0,Math.min(1,A-v[u][3]*(1-A)));if(t&&j[t]){h=j[t](1,h,0,1,1,1)}var w=k;if(k/p<=1.8&&k/p>0.7){w*=2}else{if(k/p<=0.7){w=p*2}}var x=v[u][2]*h*w;if(z){x=(v[u][2]+(z[u][2]-v[u][2])*h)*w}x=Math.max(0,x);B.beginPath();B.arc((v[u][0]+((z?z[u][0]:0.5)-v[u][0])*h)*k,(v[u][1]+((z?z[u][1]:0.5)-v[u][1])*h)*p,x,0,2*Math.PI,false);B.fillStyle=s[u][0];B.fill()}}this.go=function(B,w){if(i){n.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(B?-B+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},b.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}else{k=n.width();p=n.height();a.attr({width:k,height:p});var z=l.get(w);for(var x=0,A=s.length;x<A;x++){var u=Math.abs(s[x][1]),h=Math.abs(s[x][2]);s[x][0]=r(z,{x:u*k,y:h*p,w:2,h:2})||s[x][0]}var t=d(c);var v=d(m);var y=d(j);wowAnimate(function(C){q(o,C,t,0,y)},0,1,b.duration/2,function(){n.find(".ws_list").css({left:(B?-B+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});y=d(j);wowAnimate(function(C){q(o,1-C,v,t,y)},0,1,b.duration/2,function(){o.clearRect(0,0,k,p);f.trigger("effectEnd")})})}};function r(C,t){t=t||{};var E=1,w=t.exclude||[],B;var y=document.createElement("canvas"),v=y.getContext("2d"),u=y.width=C.naturalWidth,I=y.height=C.naturalHeight;v.drawImage(C,0,0,C.naturalWidth,C.naturalHeight);try{B=v.getImageData(t.x?t.x:0,t.y?t.y:0,t.w?t.w:C.width,t.h?t.h:C.height)["data"]}catch(D){return false}var x=(t.w?t.w:C.width*t.h?t.h:C.height)||B.length,z={},G="",F=[],h={dominant:{name:"",count:0}};var A=0;while(A<x){F[0]=B[A];F[1]=B[A+1];F[2]=B[A+2];G=F.join(",");if(G in z){z[G]=z[G]+1}else{z[G]=1}if(w.indexOf(["rgb(",G,")"].join(""))===-1){var H=z[G];if(H>h.dominant.count){h.dominant.name=G;h.dominant.count=H}}A+=E*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blur(r,p,c){var h=jQuery;var o=h(this);var n=h("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(c);var b=!r.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(b){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(m){b=0}}var d;function k(s,e,t){wowAnimate(s.css({visibility:"visible"}),{opacity:0},{opacity:1},e,t)}function i(s,e,t){wowAnimate(s,{opacity:1},{opacity:0},e,t)}var l;this.go=function(e,s){if(l){return -1}l=1;var w=h(p.get(s)),u=h(p.get(e)),x={width:w.width(),height:w.height(),marginTop:w.css("marginTop"),marginLeft:w.css("marginLeft")};var v;if(b){if(!d){d='<canvas width="'+x.width+'" height="'+x.height+'"/>';d=h(d+d).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(n)}d.css(x).attr({width:x.width,height:x.height});v=g(w,x,30,d.get(0))}if(b&&v){var t=g(u,x,30,d.get(1));k(v,r.duration/3,function(){c.find(".ws_list").css({visibility:"hidden"});i(v,r.duration/6);k(t,r.duration/6,function(){v.css({visibility:"hidden"});c.find(".ws_list").css({visibility:"visible"});o.trigger("effectEnd",{delay:r.duration/2});i(t,r.duration/2,function(){l=0})})})}else{b=0;v=g(w,x,8);v.fadeIn(r.duration/3,"linear",function(){o.trigger("effectEnd",{delay:r.duration/3});v.fadeOut(r.duration/3,"linear",function(){v.remove();l=0})})}};function g(z,v,w,s){var C=(parseInt(z.parent().css("z-index"))||0)+1;if(b){var F=s.getContext("2d");F.drawImage(z.get(0),0,0,v.width,v.height);if(!j(F,0,0,s.width,s.height,w)){return 0}return h(s)}var G=h("<div></div>").css({position:"absolute","z-index":C,left:0,top:0,display:"none"}).css(v).appendTo(n);var E=(Math.sqrt(5)+1)/2;var t=1-E/2;for(var u=0;t*u<w;u++){var A=Math.PI*E*u;var e=(t*u+1);var D=e*Math.cos(A);var B=e*Math.sin(A);h(document.createElement("img")).attr("src",z.attr("src")).css({opacity:1/(u/1.8+1),position:"absolute","z-index":C,left:Math.round(D)+"px",top:Math.round(B)+"px",width:"100%",height:"100%"}).appendTo(G)}return G}var q=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var a=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function j(aj,R,P,s,t,aa){if(isNaN(aa)||aa<1){return}aa|=0;var ae;try{ae=aj.getImageData(R,P,s,t)}catch(ai){console.log("error:unable to access image data: "+ai);return false}var z=ae.data;var Y,X,ag,ad,G,J,D,v,w,O,E,Q,M,U,Z,H,C,I,K,T;var ah=aa+aa+1;var V=s<<2;var F=s-1;var ac=t-1;var B=aa+1;var ab=B*(B+1)/2;var S=new f();var N=S;for(ag=1;ag<ah;ag++){N=N.next=new f();if(ag==B){var A=N}}N.next=S;var af=null;var W=null;D=J=0;var L=q[aa];var u=a[aa];for(X=0;X<t;X++){U=Z=H=v=w=O=0;E=B*(C=z[J]);Q=B*(I=z[J+1]);M=B*(K=z[J+2]);v+=ab*C;w+=ab*I;O+=ab*K;N=S;for(ag=0;ag<B;ag++){N.r=C;N.g=I;N.b=K;N=N.next}for(ag=1;ag<B;ag++){ad=J+((F<ag?F:ag)<<2);v+=(N.r=(C=z[ad]))*(T=B-ag);w+=(N.g=(I=z[ad+1]))*T;O+=(N.b=(K=z[ad+2]))*T;U+=C;Z+=I;H+=K;N=N.next}af=S;W=A;for(Y=0;Y<s;Y++){z[J]=(v*L)>>u;z[J+1]=(w*L)>>u;z[J+2]=(O*L)>>u;v-=E;w-=Q;O-=M;E-=af.r;Q-=af.g;M-=af.b;ad=(D+((ad=Y+aa+1)<F?ad:F))<<2;U+=(af.r=z[ad]);Z+=(af.g=z[ad+1]);H+=(af.b=z[ad+2]);v+=U;w+=Z;O+=H;af=af.next;E+=(C=W.r);Q+=(I=W.g);M+=(K=W.b);U-=C;Z-=I;H-=K;W=W.next;J+=4}D+=s}for(Y=0;Y<s;Y++){Z=H=U=w=O=v=0;J=Y<<2;E=B*(C=z[J]);Q=B*(I=z[J+1]);M=B*(K=z[J+2]);v+=ab*C;w+=ab*I;O+=ab*K;N=S;for(ag=0;ag<B;ag++){N.r=C;N.g=I;N.b=K;N=N.next}G=s;for(ag=1;ag<=aa;ag++){J=(G+Y)<<2;v+=(N.r=(C=z[J]))*(T=B-ag);w+=(N.g=(I=z[J+1]))*T;O+=(N.b=(K=z[J+2]))*T;U+=C;Z+=I;H+=K;N=N.next;if(ag<ac){G+=s}}J=Y;af=S;W=A;for(X=0;X<t;X++){ad=J<<2;z[ad]=(v*L)>>u;z[ad+1]=(w*L)>>u;z[ad+2]=(O*L)>>u;v-=E;w-=Q;O-=M;E-=af.r;Q-=af.g;M-=af.b;ad=(Y+(((ad=X+B)<ac?ad:ac)*s))<<2;v+=(U+=(af.r=z[ad]));w+=(Z+=(af.g=z[ad+1]));O+=(H+=(af.b=z[ad+2]));af=af.next;E+=(C=W.r);Q+=(I=W.g);M+=(K=W.b);U-=C;Z-=I;H-=K;W=W.next;J+=s}}aj.putImageData(ae,R,P);return true}function f(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"bubbles,blur,basic",prev:"",next:"",duration:20*100,delay:41*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});
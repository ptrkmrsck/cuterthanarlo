import{S as ge,i as pe,s as ye,e as r,t as k,k as p,c as o,a as i,h as T,d as c,m as y,b as t,R as b,G as q,g as be,H as e,I as P,J as _e,T as Ee,K as ze,L as de}from"../chunks/vendor-36c099ed.js";import{l as ae}from"../chunks/loading-310782a9.js";import{s as ke}from"../chunks/supabase-b18e6b47.js";function Te(n){let a,h,v,O,l,u,A,D,m,_,F,d,U,S,V,g,E,w,J,R,K,L,z,Q,W,M,X,Y,I,Z,$,N,x,ee,B,j,te,se,le;return{c(){a=r("main"),h=r("h1"),v=k("cuter than arlo?"),O=p(),l=r("div"),u=r("button"),A=k("\u25C0"),D=p(),m=r("figure"),_=r("img"),d=p(),U=r("figcaption"),S=k("(not arlo)"),V=p(),g=r("figure"),E=r("img"),J=p(),R=r("figcaption"),K=k("(arlo)"),L=p(),z=r("button"),Q=k("\u25B6"),W=p(),M=r("h3"),X=k("is this dog cuter than arlo?"),Y=p(),I=r("button"),Z=k("yes"),$=p(),N=r("button"),x=k("no"),ee=p(),B=r("nav"),j=r("a"),te=k("arlo stats"),this.h()},l(f){a=o(f,"MAIN",{class:!0});var s=i(a);h=o(s,"H1",{class:!0});var re=i(h);v=T(re,"cuter than arlo?"),re.forEach(c),O=y(s),l=o(s,"DIV",{class:!0});var G=i(l);u=o(G,"BUTTON",{class:!0});var oe=i(u);A=T(oe,"\u25C0"),oe.forEach(c),D=y(G),m=o(G,"FIGURE",{class:!0});var C=i(m);_=o(C,"IMG",{class:!0,src:!0,alt:!0}),d=y(C),U=o(C,"FIGCAPTION",{});var ce=i(U);S=T(ce,"(not arlo)"),ce.forEach(c),C.forEach(c),V=y(G),g=o(G,"FIGURE",{class:!0});var H=i(g);E=o(H,"IMG",{class:!0,src:!0,alt:!0}),J=y(H),R=o(H,"FIGCAPTION",{});var ne=i(R);K=T(ne,"(arlo)"),ne.forEach(c),H.forEach(c),L=y(G),z=o(G,"BUTTON",{class:!0});var ie=i(z);Q=T(ie,"\u25B6"),ie.forEach(c),G.forEach(c),W=y(s),M=o(s,"H3",{class:!0});var ue=i(M);X=T(ue,"is this dog cuter than arlo?"),ue.forEach(c),Y=y(s),I=o(s,"BUTTON",{"data-yesno":!0,class:!0});var fe=i(I);Z=T(fe,"yes"),fe.forEach(c),$=y(s),N=o(s,"BUTTON",{"data-yesno":!0,class:!0});var he=i(N);x=T(he,"no"),he.forEach(c),ee=y(s),B=o(s,"NAV",{class:!0});var me=i(B);j=o(me,"A",{href:!0,class:!0});var ve=i(j);te=T(ve,"arlo stats"),ve.forEach(c),me.forEach(c),s.forEach(c),this.h()},h(){t(h,"class","svelte-yl6mzs"),t(u,"class","left-right left svelte-yl6mzs"),b(u,"active",!n[2]),t(_,"class","dog svelte-yl6mzs"),q(_.src,F=n[0])||t(_,"src",F),t(_,"alt","incoming other dog :)"),t(m,"class","svelte-yl6mzs"),b(m,"active",n[2]),t(E,"class","arlo svelte-yl6mzs"),q(E.src,w=n[1])||t(E,"src",w),t(E,"alt","pix of arlo"),t(g,"class","svelte-yl6mzs"),b(g,"active",!n[2]),t(z,"class","left-right right svelte-yl6mzs"),b(z,"active",n[2]),t(l,"class","imgs svelte-yl6mzs"),b(l,"loading",n[3]),t(M,"class","svelte-yl6mzs"),t(I,"data-yesno","true"),t(I,"class","svelte-yl6mzs"),t(N,"data-yesno","false"),t(N,"class","svelte-yl6mzs"),t(j,"href","./arlo-stats"),t(j,"class","svelte-yl6mzs"),t(B,"class","svelte-yl6mzs"),t(a,"class","svelte-yl6mzs")},m(f,s){be(f,a,s),e(a,h),e(h,v),e(a,O),e(a,l),e(l,u),e(u,A),e(l,D),e(l,m),e(m,_),e(m,d),e(m,U),e(U,S),e(l,V),e(l,g),e(g,E),e(g,J),e(g,R),e(R,K),e(l,L),e(l,z),e(z,Q),e(a,W),e(a,M),e(M,X),e(a,Y),e(a,I),e(I,Z),e(a,$),e(a,N),e(N,x),e(a,ee),e(a,B),e(B,j),e(j,te),se||(le=[P(u,"click",n[5]),P(z,"click",n[6]),P(I,"click",n[4]),P(N,"click",n[4])],se=!0)},p(f,[s]){s&4&&b(u,"active",!f[2]),s&1&&!q(_.src,F=f[0])&&t(_,"src",F),s&4&&b(m,"active",f[2]),s&2&&!q(E.src,w=f[1])&&t(E,"src",w),s&4&&b(g,"active",!f[2]),s&4&&b(z,"active",f[2]),s&8&&b(l,"loading",f[3])},i:_e,o:_e,d(f){f&&c(a),se=!1,Ee(le)}}}function Ie(n,a,h){let v;ze(n,ae,d=>h(3,v=d));let O,l,u=!0,A=async()=>{de(ae,v=!0,v);let U=await(await fetch("https://dog.ceo/api/breeds/image/random")).json();D(U)},D=d=>{h(0,O=d.message),h(1,l=`/arlopix/${Math.floor(Math.random()*10)+1}.jpg`),setTimeout(()=>de(ae,v=!1,v),1e3)},m=async d=>{await ke.from("arlocuterthan").insert([{yesno:d.target.dataset.yesno,arlo_photo:l,other_dog_url:O}]),A()};return A(),[O,l,u,v,m,()=>h(2,u=!0),()=>h(2,u=!1)]}class Ue extends ge{constructor(a){super();pe(this,a,Ie,Te,ye,{})}}export{Ue as default};

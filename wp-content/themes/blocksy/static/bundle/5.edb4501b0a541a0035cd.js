(window.blocksyJsonP=window.blocksyJsonP||[]).push([[5],{27:function(t,e,n){"use strict";n.r(e),n.d(e,"mount",(function(){return o}));var r=n(7);const o=t=>{if(t.hasListener)return;t.hasListener=!0;var e=!1;const n=()=>{var t=document.querySelector(".ct-back-to-top");t&&(window.scrollY>500?t.classList.add("ct-show"):t.classList.remove("ct-show"))};n(),window.addEventListener("scroll",()=>{e||(e=!0,requestAnimationFrame(()=>{n(),e=!1}))}),t.addEventListener("click",t=>{t.preventDefault();var e=window.scrollY,n=null;const o=t=>{n||(n=t);var r=t-n;var s,a,i,c=Math.max((s=r,a=e,i=-e,(s/=700/2)<1?i/2*s*s+a:-i/2*(--s*(s-2)-1)+a),0);scrollTo(0,c),r<700&&requestAnimationFrame(o)};r.areWeDealingWithSafari?requestAnimationFrame(o):scrollTo(0,0)})}}}]);
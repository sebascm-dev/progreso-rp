import"./DropdownNavBar.astro_astro_type_script_index_0_lang.C22dg0lO.js";let m=new Date("Jul 1, 2024 19:00:00").toISOString();function f(i){var t=Date.parse(i)-Date.now(),e=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60),s=Math.floor(t/(1e3*60*60)%24),a=Math.floor(t/(1e3*60*60*24));return{total:t,days:a.toString(),hours:("0"+s).slice(-2),minutes:("0"+o).slice(-2),seconds:("0"+e).slice(-2)}}function u(i,t){var e=document.getElementById(i),o=e?.querySelector(".days"),s=e?.querySelector(".hours"),a=e?.querySelector(".minutes"),l=e?.querySelector(".seconds");function r(){var n=f(t);o&&(o.innerHTML=n.days),s&&(s.innerHTML=n.hours),a&&(a.innerHTML=n.minutes),l&&(l.innerHTML=n.seconds),n.total<=0&&clearInterval(c)}r();var c=setInterval(r,1e3)}u("clockdiv",m);const g=document.getElementsByClassName("ticket");Array.from(g).forEach(i=>{const t=i;t.addEventListener("mousemove",e=>{t.style.transition="transform .03s ease-in-out";const{offsetX:o,offsetY:s}=e,{width:a,height:l}=t.getBoundingClientRect(),r=a/2,c=l/2,n=(c-s)/c*15,d=(o-r)/r*15;t.style.transform=`rotateX(${n}deg) rotateY(${d}deg)`}),t.addEventListener("mouseleave",()=>{t.style.transition="transform 1s ease-in-out",t.style.transform="rotateX(0deg) rotateY(0deg)"})});const h=document.getElementsByClassName("image");Array.from(h).forEach(i=>{const t=i;t.addEventListener("mousemove",e=>{t.style.transition="transform .03s ease-in-out";const{offsetX:o,offsetY:s}=e,{width:a,height:l}=t.getBoundingClientRect(),r=a/2,c=l/2,n=(c-s)/c*4,d=(o-r)/r*4;t.style.transform=`rotateX(${n}deg) rotateY(${d}deg)`}),t.addEventListener("mouseleave",()=>{t.style.transition="transform 1s ease-in-out",t.style.transform="rotateX(0deg) rotateY(0deg)"})});
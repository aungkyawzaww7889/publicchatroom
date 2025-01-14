import{c as q,d as L,T as O,a as Y,o as $,q as E,b as H,w as F}from"./main-Bp-TG0sP.js";import{t as h,n as C,g as T,m as v,a as y,e as U,b as A}from"./en-US-Bwl4LgA_.js";/* empty css                */function N(n,t){let e=n,a=t;const r=q(L,"chats");let o=null;return{addChat:async u=>{const g=new Date,c={username:a,room:e,message:u,created_at:O.fromDate(g)};try{return await Y(r,c)}catch(i){throw console.log("Error addchat = ",i),i}},getChats:u=>{o&&o(),o=$(E(r,F("room","==",e),H("created_at")),g=>{g.docChanges().forEach(c=>{c.type==="added"&&u(c.doc.data())})})},updateChatroom:u=>{e=u,console.log(`Room changed to ${e}`)},updateUsername:u=>{a=u,localStorage.setItem("username",a),console.log(`Username changed to ${a}`)}}}function x(n,t){const e=+h(n)-+h(t);return e<0?-1:e>0?1:e}function R(n,t,e){const[a,r]=C(e==null?void 0:e.in,n,t),o=a.getFullYear()-r.getFullYear(),l=a.getMonth()-r.getMonth();return o*12+l}function z(n){return t=>{const a=(n?Math[n]:Math.trunc)(t);return a===0?0:a}}function j(n,t){return+h(n)-+h(t)}function k(n,t){const e=h(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function G(n,t){const e=h(n,t==null?void 0:t.in),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function B(n,t){const e=h(n,t==null?void 0:t.in);return+k(e,t)==+G(e,t)}function J(n,t,e){const[a,r,o]=C(e==null?void 0:e.in,n,n,t),l=x(r,o),s=Math.abs(R(r,o));if(s<1)return 0;r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-l*s);let m=x(r,o)===-l;B(a)&&s===1&&x(a,o)===1&&(m=!1);const d=l*(s-+m);return d===0?0:d}function K(n,t,e){const a=j(n,t)/1e3;return z(e==null?void 0:e.roundingMethod)(a)}function P(n,t,e){const a=A(),r=(e==null?void 0:e.locale)??a.locale??U,o=2520,l=x(n,t);if(isNaN(l))throw new RangeError("Invalid time value");const s=Object.assign({},e,{addSuffix:e==null?void 0:e.addSuffix,comparison:l}),[m,d]=C(e==null?void 0:e.in,...l>0?[t,n]:[n,t]),u=K(d,m),g=(T(d)-T(m))/1e3,c=Math.round((u-g)/60);let i;if(c<2)return e!=null&&e.includeSeconds?u<5?r.formatDistance("lessThanXSeconds",5,s):u<10?r.formatDistance("lessThanXSeconds",10,s):u<20?r.formatDistance("lessThanXSeconds",20,s):u<40?r.formatDistance("halfAMinute",0,s):u<60?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",1,s):c===0?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",c,s);if(c<45)return r.formatDistance("xMinutes",c,s);if(c<90)return r.formatDistance("aboutXHours",1,s);if(c<v){const f=Math.round(c/60);return r.formatDistance("aboutXHours",f,s)}else{if(c<o)return r.formatDistance("xDays",1,s);if(c<y){const f=Math.round(c/v);return r.formatDistance("xDays",f,s)}else if(c<y*2)return i=Math.round(c/y),r.formatDistance("aboutXMonths",i,s)}if(i=J(d,m),i<12){const f=Math.round(c/y);return r.formatDistance("xMonths",f,s)}else{const f=i%12,S=Math.trunc(i/12);return f<3?r.formatDistance("aboutXYears",S,s):f<9?r.formatDistance("overXYears",S,s):r.formatDistance("almostXYears",S+1,s)}}function Q(n){return{newli:a=>{const r=P(a.created_at.toDate(),new Date,{addSuffix:!0}),o=`
                <li class="shadow rounded-lg px-4 py-2">
                    <div class="flex justify-between">
                        <h5 class="text-gray-600 font-medium text-sm">${a.username}</h5>
                        <i class="text-gray-300 text-xs">${r}</i>
                    </div>
                    <p class="text-gray-600 text-sm">${a.message}</p>
                </li>`;n.innerHTML+=o},resetli:()=>{n.innerHTML=""}}}const V=document.querySelector(".chatrooms"),W=document.querySelector(".chat-ul"),w=document.querySelector(".chat-form"),D=document.querySelector(".user-form"),_=document.querySelector(".msg"),I=document.querySelector(".roomtitle"),X=localStorage.username?localStorage.username:"Guest";D.username.placeholder=`username is ${X}`;const M=N("general",X);I.textContent="General";const b=Q(W);w.addEventListener("submit",n=>{n.preventDefault();const t=w.message.value.trim();M.addChat(t).then(()=>w.reset()).catch(e=>console.log(e))});D.addEventListener("submit",n=>{n.preventDefault();const t=D.username.value.trim();M.updateUsername(t),D.reset(),_.innerText=`New name updated to ${t}`,D.username.placeholder=`username is ${t}`,setTimeout(()=>_.innerText=" ",3e3)});V.addEventListener("click",n=>{n.preventDefault();const t=n.target.closest("button");if(t){b.resetli();const e=t.getAttribute("id"),a=t.querySelector("h3").textContent;console.log(a),I.innerText=a,M.updateChatroom(e),M.getChats(r=>{b.newli(r)})}});M.getChats(n=>{b.newli(n)});

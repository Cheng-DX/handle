import{d as q,a as b,o as l,c as u,p as V,b as K,e as n,f as m,g as B,u as h,h as O,r as D,t as f,i as G,F as T,j as M,w as U,v as Z,k as j,n as z,l as W,m as J,q as Q}from"./vendor.687cb7ef.js";const X=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}};X();const N=q({id:"theme",state:()=>({theme:"light"}),actions:{changeTheme(){this.theme==="light"?this.theme="dark":this.theme="light"}}});var x=(e,o)=>{const a=e.__vccOpts||e;for(const[r,t]of o)a[r]=t;return a};const R=e=>(V("data-v-fe96cc9e"),e=e(),K(),e),ee={class:"icon"},te={key:0,t:"1648444735542",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2390"},ne=R(()=>n("path",{d:"M512 640a128 128 0 1 1 0-256 128 128 0 0 1 0 256z",fill:"#000000","p-id":"2391"},null,-1)),se=R(()=>n("path",{d:"M832 448H896a64 64 0 0 1 0 128h-64a64 64 0 0 1 0-128z m-146.773333-197.504l45.269333-45.226667a64 64 0 0 1 90.538667 90.496l-45.269334 45.226667a64 64 0 1 1-90.496-90.453333z m0 525.269333a64 64 0 1 1 90.538666-90.496l45.226667 45.226667a64 64 0 0 1-90.453333 90.538667l-45.269334-45.269334zM128 448h64a64 64 0 0 1 0 128H128a64 64 0 0 1 0-128z m384-384A64 64 0 0 1 576 128v64a64 64 0 0 1-128 0V128A64 64 0 0 1 512 64zM512 768a64 64 0 0 1 64 64V896a64 64 0 0 1-128 0v-64A64 64 0 0 1 512 768zM205.226667 205.226667a64 64 0 0 1 90.538666 0l45.226667 45.269333a64 64 0 0 1-90.453333 90.538667L205.226667 295.765333a64 64 0 0 1 0-90.496z m0 615.808a64 64 0 0 1 0-90.538667l45.269333-45.226667a64 64 0 1 1 90.538667 90.496l-45.269334 45.226667a64 64 0 0 1-90.496 0z",fill:"#000000",opacity:".3","p-id":"2392"},null,-1)),oe=[ne,se],ae={key:1,t:"1648445221852",viewBox:"0 0 1026 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6022","data-spm-anchor-id":"a313x.7781069.0.i9"},re=R(()=>n("path",{d:"M513.519886 1023.719955A511.851345 511.851345 0 1 1 645.945839 17.904265a46.513105 46.513105 0 0 1 4.247299 88.571726 209.257178 209.257178 0 1 0 269.064675 268.892021 45.753426 45.753426 0 0 1 45.857019-30.249057 46.547636 46.547636 0 0 1 42.8183 34.530887 510.331985 510.331985 0 0 1-494.413246 644.070113z m-8.356475-930.538355a418.790603 418.790603 0 1 0 427.388794 427.112547A302.145265 302.145265 0 0 1 505.163411 93.1816z","p-id":"6023",fill:"#faf5f5"},null,-1)),le=[re],ue=b({props:{theme:{type:String,default:"light"}},setup(e){return(o,a)=>(l(),u("div",ee,[e.theme==="light"?(l(),u("svg",te,oe)):(l(),u("svg",ae,le))]))}});var ie=x(ue,[["__scopeId","data-v-fe96cc9e"]]);const ce={class:"icon"},he={t:"1648461878471",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2192",width:"200",height:"200"},de=["fill"],_e=b({props:{theme:{type:String,default:"light"}},setup(e){return(o,a)=>(l(),u("div",ce,[(l(),u("svg",he,[n("path",{d:"M512 51.2a460.8 460.8 0 1 0 0 921.6 460.8 460.8 0 0 0 0-921.6z m0 855.7568a394.9568 394.9568 0 1 1 0-789.9136 394.9568 394.9568 0 0 1 0 789.9136zM512 281.6a120.4736 120.4736 0 0 0-131.6352 125.0816h59.904A65.8432 65.8432 0 0 1 512 336.896c35.5328 0 65.8432 17.7664 65.8432 59.2384 0 30.9248-18.432 45.4144-48.0768 65.8432a116.5312 116.5312 0 0 0-58.5728 98.0992v23.04h59.904v-17.8176c0-35.5328 13.1584-46.08 49.3568-73.728a119.1424 119.1424 0 0 0 63.1808-99.3792A115.2 115.2 0 0 0 512 281.6z m-50.0224 399.872a46.08 46.08 0 0 0 92.16-1.5872 45.4144 45.4144 0 0 0-48.7424-46.08 46.08 46.08 0 0 0-43.4176 47.7184z","p-id":"2193",fill:e.theme==="light"?"#333":"#e6e6e6"},null,8,de)]))]))}});var pe=x(_e,[["__scopeId","data-v-e57138fc"]]);const ve=e=>(V("data-v-40e70111"),e=e(),K(),e),fe={class:"header-root"},me={class:"the-header"},ge=ve(()=>n("h1",{class:"title"},"HANDLE",-1)),ye=b({setup(e){const o=N(),a=m(()=>o.theme);function r(){o.changeTheme()}function t(){window.open("https://handle.antfu.me")}return(s,c)=>(l(),u("div",fe,[n("div",me,[n("button",{class:"options-button",onClick:t},[B(pe,{theme:h(a)},null,8,["theme"])]),ge,n("button",{class:"options-button",onClick:r},[B(ie,{theme:h(a)},null,8,["theme"])])])]))}});var we=x(ye,[["__scopeId","data-v-40e70111"]]);function Ce(){const e=["\u5409\u661F\u9AD8\u7167","\u73ED\u95E8\u5F04\u65A7","\u6C34\u843D\u77F3\u51FA","\u5DE7\u593A\u5929\u5DE5","\u540D\u9707\u5929\u4E0B","\u6B66\u8FD0\u660C\u9686","\u9B3C\u65A7\u795E\u5DE5","\u64C5\u4F5C\u4E3B\u5F20"];return e[Math.floor(Math.random()*e.length)]}function H(){const e=Ce(),o=O(e,{pattern:"initial"}).split(" "),a=O(e,{pattern:"final",toneType:"none"}).split(" "),r=[...e];return{answer:e,answerSheng:o,answerYun:a,answerArr:r}}function Ae(e){return/^[\u4E00-\u9FA5]+$/.test(e)}function P(e,o=4){const a=m(()=>O(e.value,{pattern:"initial",nonZh:"removed"}).split(" ").splice(0,o)),r=m(()=>O(e.value,{pattern:"final",toneType:"none",nonZh:"removed"}).split(" ").splice(0,o)),t=m(()=>[...e.value].filter(s=>Ae(s)).splice(0,o));return{sheng:a,yun:r,inputArr:t}}const k="#65aef4",L="#eebe14",I="grey";function be(e,o){const{answerSheng:a,answerYun:r,answerArr:t}=o,{sheng:s,yun:c,inputArr:d}=P(e);let S={input:e.value,charactors:[]};for(let i=0;i<d.value.length;i++){let g=s.value[i],C=c.value[i],p=d.value[i],_=I,y=I,A=I,$=!1;p===t[i]?($=!0,_=k):t.includes(p)&&(_=L),g===a[i]?y=k:a.includes(g)&&(y=L),C===r[i]?A=k:r.includes(C)&&(A=L),S.charactors.push({character:p,charColor:_,sheng:g,shengColor:y,yun:C,yunColor:A,isRightChar:$})}return S}const xe={key:0,class:"modal"},Se={class:"modal-content"},$e={class:"main-root"},Ee={class:"history-list"},De={class:"line"},Te={class:"char-box"},ze={class:"realtime"},Be={class:"char-box"},Oe={class:"charactor"},Fe=["onKeyup"],Me=["disabled"],ke=b({setup(e){const o=m(()=>N().theme);let{answer:a,answerSheng:r,answerYun:t,answerArr:s}=H();const c=D(a),d=D(""),{sheng:S,yun:i,inputArr:g}=P(d),C=m(()=>g.value.length===s.length),p=D(!1),_=D([]);function y(){const F=be(d,{answerSheng:r,answerYun:t,answerArr:s});_.value.push(F),d.value="",F.charactors.every(E=>E.isRightChar)&&(p.value=!0)}function A(){({answer:a,answerSheng:r,answerYun:t,answerArr:s}=H()),c.value=a,p.value=!1,_.value=[]}function $(){_.value=[]}return(F,E)=>(l(),u(T,null,[p.value?(l(),u("div",xe,[n("div",Se,[n("div",null,f(c.value),1),n("button",{onClick:A,class:"submit-button"},"\u518D\u6765\u4E00\u5C40")])])):G("",!0),n("div",$e,[n("div",null,[n("div",Ee,[(l(!0),u(T,null,M(_.value,v=>(l(),u("div",De,[(l(!0),u(T,null,M(v.charactors,w=>(l(),u("div",Te,[n("div",null,[n("span",{style:z({color:w.shengColor})},f(w.sheng),5),n("span",{style:z({color:w.yunColor})},f(w.yun),5)]),n("div",{style:z({color:w.charColor}),class:"charactor"},f(w.character),5)]))),256))]))),256))]),n("div",ze,[(l(!0),u(T,null,M(h(s).length,v=>(l(),u("div",Be,[n("div",null,[n("span",null,f(h(S)[v-1]),1),n("span",null,f(h(i)[v-1]),1)]),n("div",Oe,f(h(g)[v-1]),1)]))),256))])]),U(n("input",{"onUpdate:modelValue":E[0]||(E[0]=v=>d.value=v),placeholder:"\u8F93\u5165\u56DB\u5B57\u8BCD\u8BED...",onKeyup:j(y,["enter"]),style:z({color:h(o)==="light"?"#333":"#fff"}),class:"user-input"},null,44,Fe),[[Z,d.value]]),n("div",null,[n("button",{onClick:$,class:"submit-button"},"\u6E05\u7A7A\u5386\u53F2"),n("button",{onClick:y,disabled:!h(C),class:"submit-button"}," \u786E\u5B9A ",8,Me)])])],64))}});var Le=x(ke,[["__scopeId","data-v-7f74905d"]]);const Ie=b({setup(e){const o=m(()=>N().theme);return(a,r)=>(l(),u("div",{class:W(["root",h(o)])},[B(we),B(Le)],2))}});var Ne=x(Ie,[["__scopeId","data-v-5d4a4316"]]);const Y=J(Ne);Y.use(Q());Y.mount("#app");
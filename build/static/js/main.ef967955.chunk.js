(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(33),r=n.n(i),s=(n(98),n(36)),l=n.n(s),o=n(76),u=n(11),d=n(87),j=n(42),b=n.n(j),h=n(79),x=n.n(h),O=n(157),f=n(159),p=n(155),v=n(161),g=n(154),m=n(83),k=n.n(m),y=n(85),w=n.n(y),C=n(86),S=n.n(C),N=n(1);function I(e){var t=e.value,n=e.hendleKeyDown,c=e.hendleChange,a=e.hendleClick,i=e.listening,r=e.loading,s=e.hendleSendBtn,l=e.transcript;return Object(N.jsxs)("div",{className:"input-container",children:[Object(N.jsxs)("div",{className:"input-recognition",children:[Object(N.jsx)(O.a,{color:"secondary",variant:i&&!r?"dot":null,overlap:"circular",badgeContent:i?" ":null,children:Object(N.jsx)(g.a,{variant:i?"extended":"circular",disabled:r,onClick:a,maxwidth:"sm",children:i?Object(N.jsx)(k.a,{}):Object(N.jsx)(w.a,{})})}),Object(N.jsx)(f.a,{variant:"body1",className:"input-container__text",children:l})]}),Object(N.jsx)("div",{className:"input-text",children:Object(N.jsx)(p.a,{fullWidth:!0,multiline:!0,sx:{direction:"rtl",display:"flex",alignItems:"center",border:0,outline:0},endAdornment:Object(N.jsx)(v.a,{position:"end",children:Object(N.jsx)(g.a,{variant:"extended",disabled:r,onClick:s,maxwidth:"sm",children:Object(N.jsx)(S.a,{sx:{transform:"rotate(180deg)"}})})}),type:"text",autoFocus:!0,placeholder:"\u05d0\u05e4\u05e9\u05e8 \u05dc\u05e9\u05d0\u05d5\u05dc \u05d0\u05d5\u05ea\u05d9 \u05db\u05dc \u05d3\u05d1\u05e8, \u05d0\u05e2\u05e9\u05d4 \u05db\u05de\u05d9\u05d8\u05d1 \u05d9\u05db\u05d5\u05dc\u05ea\u05d9!",value:t,onChange:c,onKeyDown:n})})]})}var L=n(156),E=n(160);function J(){var e="https://magniv.cf/codex",t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),h=s[0],O=s[1],f=function(e,t){var n="codex-"+e,a=Object(c.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),i=Object(u.a)(a,2),r=i[0],s=i[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,s]}("results",""),p=Object(u.a)(f,2),v=p[0],g=p[1],m=Object(j.useSpeechRecognition)(),k=m.transcript,y=m.finalTranscript,w=m.listening,C=m.resetTranscript,S=b.a.startListening,J=b.a.stopListening,B=b.a.abortListening,D=Object(c.useCallback)((function(){S({continuous:!0,interimResults:!0,language:"iw-IL"})}),[S]),K=Object(c.useCallback)((function(){return J()}),[J]),z=Object(c.useCallback)(function(){var t=Object(o.a)(l.a.mark((function t(n){var c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,O(!0),t.next=4,x.a.post("".concat(e,"?q=").concat(n));case 4:c=t.sent,a=c.data,g((function(e){return"".concat(e,"\n\n/*").concat(n,"*/\n\n").concat(a.answer.trim())})),O(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),[e,g]),A=Object(c.useCallback)((function(e){e&&""!==e&&(z(e),C(),i(""),C())}),[z,C]);return Object(c.useEffect)((function(){y&&""!==y&&y===k&&A(y)}),[y,k,B,C,A]),Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("div",{className:"aditor-container",children:Object(N.jsx)(I,{value:a,transcript:k,loading:h,hendleClick:w?K:D,hendleSendBtn:function(){return A(a)},hendleChange:function(e){return i(e.target.value)},listening:w,hendleKeyDown:function(e){try{"Enter"===e.key&&A(a)}catch(t){console.log(t)}}})}),Object(N.jsx)("div",{className:"aditor-container",children:Object(N.jsx)(d.a,{style:{width:"100%",height:"100%",position:"relative"},theme:"vs-dark",defaultLanguage:"javascript",value:v,defaultValue:v,onChange:g})}),Object(N.jsx)("div",{children:Object(N.jsx)(L.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:h,children:Object(N.jsx)(E.a,{color:"inherit"})})})]})}r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(J,{})}),document.getElementById("root"))},98:function(e,t,n){}},[[130,1,2]]]);
//# sourceMappingURL=main.ef967955.chunk.js.map
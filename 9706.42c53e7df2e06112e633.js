(self.webpackChunkresguardosApp=self.webpackChunkresguardosApp||[]).push([[9706],{9706:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createSwipeBackGesture:()=>n});var a=r(2377),s=r(7279);r(960);const n=(e,t,r,n,o)=>{const c=e.ownerDocument.defaultView;return(0,s.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:r,onMove:e=>{n(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,r=e.deltaX/t,s=e.velocityX,n=s>=0&&(s>.2||e.deltaX>t/2),i=(n?1-r:r)*t;let u=0;if(i>5){const e=i/Math.abs(s);u=Math.min(e,540)}o(n,r<=0?.01:(0,a.j)(0,r,.9999),u)}})}}}]);
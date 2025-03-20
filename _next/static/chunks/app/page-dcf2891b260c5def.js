(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{784:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(5155),i=s(2115),l=s(8888),r=s(5083),n=s(5565),c=s(8173),o=s.n(c);function d(e){let{backgroundImage:t="",title:s="",subtitle:c="",buttons:d=[],enableZoom:m=!1}=e,x=(0,i.useRef)(null),[u,h]=(0,r.Wx)({triggerOnce:!0});return(0,i.useEffect)(()=>{if(!m)return;let e=()=>{let e=Math.min(1+window.scrollY/window.innerHeight*.2,1.5);x.current&&(x.current.style.transform="scale(".concat(e,")"))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[m]),(0,a.jsxs)("section",{className:"relative h-screen flex items-center justify-center text-center text-white overflow-hidden",children:[(0,a.jsx)("div",{ref:x,className:"absolute inset-0 z-0 w-full h-full transition-transform duration-300 will-change-transform",children:(0,a.jsx)(n.default,{src:t,alt:"Background",fill:!0,className:"w-full h-full object-cover",unoptimized:!0})}),(0,a.jsx)("div",{className:"absolute inset-0 bg-black opacity-40"}),(0,a.jsxs)("div",{className:"relative z-10 max-w-3xl mx-auto px-6",children:[(0,a.jsx)("h1",{className:"text-4xl md:text-6xl font-bold",children:s}),(0,a.jsx)(l.P.div,{className:"max-w-3xl mt-4 text-lg text-gray-300",ref:u,initial:{opacity:0,y:30},animate:h?{opacity:1,y:0}:{},transition:{duration:.8},children:c}),d.length>0&&(0,a.jsx)("div",{className:"mt-6 flex justify-center space-x-4",children:d.map((e,t)=>(0,a.jsx)(o(),{href:e.href,className:"px-6 py-2 rounded transition ".concat(e.primary?"bg-white text-black hover:opacity-80":"border border-white text-white hover:bg-white hover:text-black"),children:e.text},t))})]})]})}},1659:(e,t,s)=>{Promise.resolve().then(s.bind(s,9809))},2260:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var a=s(5155),i=s(2115),l=s(8888),r=s(5083),n=s(814);async function c(e){let t=await fetch("https://fastapi-agr.vercel.app/api/py/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Request failed: ".concat(t.statusText));let s=await t.json();return console.log("✅ Correo enviado con \xe9xito:",s),s}async function o(e){n.o.promise(c(e),{loading:"Sending email...",success:"\uD83D\uDCE7 Email successfully sent!",error:"❌ Failed to send email"})}let d=async(e,t)=>{if(e.preventDefault(),!(null==t?void 0:t.current))return;let s=new FormData(null==t?void 0:t.current),a={name:"New client",email:s.get("email"),subject:s.get("subject"),message:s.get("message"),termsAccepted:"on"===s.get("termsAccepted")};console.log("Form Data Submitted:",a),o(a),console.log(a)};function m(e){let{isMain:t=!1}=e,[s,n]=(0,r.Wx)({triggerOnce:!0}),[c,o]=(0,r.Wx)({triggerOnce:!0}),[m,x]=(0,r.Wx)({triggerOnce:!0}),u=(0,i.useRef)(null),[h,p]=(0,i.useState)(!1),[f,g]=(0,i.useState)(!1),[j,v]=(0,i.useState)({email:"",subject:"",message:"",termsAccepted:!1}),[b,y]=(0,i.useState)({email:"",subject:"",message:"",termsAccepted:""}),w=(0,i.useCallback)(()=>{let e={email:j.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j.email)?"":"Invalid email format":"Email is required",subject:j.subject.trim()?"":"Subject is required",message:j.message.trim()?"":"Message is required",termsAccepted:j.termsAccepted?"":"You must accept the terms"};y(e),p(Object.values(e).every(e=>""===e))},[j]);(0,i.useEffect)(()=>{f&&w()},[w,f]);let N=e=>{let{name:t,type:s,value:a}=e.target;v({...j,[t]:"checkbox"===s?e.target.checked:a}),"checkbox"===s&&g(e.target.checked)};return(0,a.jsxs)("section",{className:"".concat(t?"":"py-16 mt-25"," text-center  px-6 bg-white"),children:[!t&&(0,a.jsxs)("div",{children:[(0,a.jsx)(l.P.div,{className:"text-3xl md:text-4xl font-bold mb-4",ref:s,initial:{opacity:0,y:50},animate:n?{opacity:1,y:0}:{},transition:{duration:.8},children:"Contact Me"}),(0,a.jsx)(l.P.div,{className:"text-lg text-gray-600 max-w-2xl mx-auto",ref:c,initial:{opacity:0,y:30},animate:o?{opacity:1,y:0}:{},transition:{duration:.8},children:"I'd love to hear from you! Reach out today."})]}),(0,a.jsx)(l.P.div,{className:"max-w-lg mx-auto mt-8",ref:m,initial:{opacity:0,y:150},animate:x?{opacity:1,y:0}:{},transition:{duration:1},children:(0,a.jsxs)("form",{ref:u,className:"space-y-4",onSubmit:e=>{e.preventDefault(),g(!0),w(),h&&d(e,u)},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-left text-gray-500 font-medium",children:"Email"}),(0,a.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email",className:"w-full p-3 shadow-xl rounded-md focus:outline-none focus:ring-2 ".concat(b.email?"border-red-500 focus:ring-red-500":"focus:ring-blue-500"),value:j.email,onChange:N}),b.email&&(0,a.jsx)("p",{className:"text-red-500 text-sm",children:b.email})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-left text-gray-500 font-medium",children:"Subject"}),(0,a.jsx)("input",{type:"text",name:"subject",placeholder:"Subject",className:"w-full p-3 shadow-xl rounded-md focus:outline-none focus:ring-2 ".concat(b.subject?"border-red-500 focus:ring-red-500":"focus:ring-blue-500"),value:j.subject,onChange:N}),b.subject&&(0,a.jsx)("p",{className:"text-red-500 text-sm",children:b.subject})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-left text-gray-500 font-medium",children:"Message"}),(0,a.jsx)("textarea",{name:"message",placeholder:"Type your message",className:"w-full p-3 shadow-xl rounded-md focus:outline-none focus:ring-2 ".concat(b.message?"border-red-500 focus:ring-red-500":"focus:ring-blue-500"),value:j.message,onChange:N}),b.message&&(0,a.jsx)("p",{className:"text-red-500 text-sm",children:b.message})]}),(0,a.jsxs)("div",{className:"flex items-center text-left",children:[(0,a.jsx)("input",{type:"checkbox",name:"termsAccepted",checked:j.termsAccepted,onChange:N,className:"mr-2"}),(0,a.jsx)("label",{className:"text-gray-700",children:"I accept the Terms"})]}),b.termsAccepted&&(0,a.jsx)("p",{className:"text-red-500 text-sm",children:b.termsAccepted}),(0,a.jsx)("button",{type:"submit",className:"btn-normal-pp btn-blue-400-reverse ".concat(h?"":"opacity-50 cursor-not-allowed"),disabled:!h,children:"Submit"})]})})]})}},4146:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return c},getImageProps:function(){return n}});let a=s(306),i=s(666),l=s(7970),r=a._(s(5514));function n(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let c=l.Image},5565:(e,t,s)=>{"use strict";s.d(t,{default:()=>i.a});var a=s(4146),i=s.n(a)},5820:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var a=s(5155),i=s(5565);function l(e){let{project:t,isMain:s}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("section",{className:"py-16 px-6 mt-20",children:[(0,a.jsx)("div",{className:"relative max-w-5xl mx-auto h-120 rounded-md",children:(0,a.jsx)(i.default,{src:t.image,alt:t.altText,className:"w-full rounded-lg shadow-lg object-cover",fill:!0,unoptimized:!0})}),(0,a.jsxs)("div",{className:"max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-10",children:[(0,a.jsxs)("div",{className:"text-left",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold italic mb-2",children:t.title}),(0,a.jsx)("p",{className:"".concat(s?"text-white":"text-gray-600"," mb-4"),children:t.description}),(0,a.jsx)("div",{className:"".concat(s?"text-white":"text-gray-600"," mt-4 text-gray-600 text-sm"),children:t.tags.map((e,t)=>(0,a.jsxs)("span",{className:"block",children:["# ",e]},t))})]}),(0,a.jsx)("div",{className:"".concat(s?"text-white":"text-gray-700"," grid grid-cols-2 gap-4 text-sm font-medium"),children:t.details.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-bold",children:e.title}),(0,a.jsx)("p",{children:e.value})]},t))})]})]}),t.overview&&(0,a.jsx)("section",{className:"py-16 px-6 bg-white max-w-5xl mx-auto",children:(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 items-start",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"text-3xl font-bold",children:t.title})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"text-gray-600",children:[(0,a.jsx)("strong",{children:"Project Overview:"})," ",t.overview]}),(0,a.jsx)("div",{className:"mt-10 space-y-6 text-sm text-gray-700",children:t.details.map((e,t)=>(0,a.jsxs)("div",{className:"border-t pt-2 flex justify-between",children:[(0,a.jsx)("h1",{className:"font-bold",children:e.title}),(0,a.jsx)("p",{children:e.value})]},t))})]})]})})]})}},9809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var a=s(5155),i=s(5565),l=s(8888),r=s(5083),n=s(5820),c=s(784),o=s(8173),d=s.n(o),m=s(2260);function x(){let[e,t]=(0,r.Wx)({triggerOnce:!0}),[s,o]=(0,r.Wx)({triggerOnce:!0}),[x,u]=(0,r.Wx)({triggerOnce:!0}),[h,p]=(0,r.Wx)({triggerOnce:!0}),[f,g]=(0,r.Wx)({triggerOnce:!0});return(0,a.jsxs)("div",{children:[(0,a.jsx)(c.default,{backgroundImage:"/images/tenweb_media_rczvprsdi.webp",title:"Crafting Efficient and Scalable Solutions",subtitle:"As a senior full-stack developer, I specialize in optimizing code for performance and scalability. My expertise lies in Python, React, and software architecture, ensuring robust and efficient solutions.",buttons:[{text:"View Portfolio",href:"/portfolio"},{text:"Contact Me",href:"/contact",primary:!0}],enableZoom:!0}),(0,a.jsx)("section",{className:"p-12 rounded-lg max-w-6xl mx-auto ",children:(0,a.jsx)(l.P.div,{className:"flex justify-center items-center h-120 md:h-90",ref:e,initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-start",children:[(0,a.jsx)("h1",{className:"text-5xl font-bold text-left ",children:"Meet your Developer"}),(0,a.jsx)("p",{className:"text-gray-700 animate-fade-in-up opacity-0",children:"Welcome to my personal space! I am a Senior Full Stack Developer with a passion for crafting efficient software solutions. My expertise lies in Python and React, where I focus on building scalable applications and optimizing code for performance. With a strong foundation in software architecture, I strive to deliver innovative solutions that meet client needs. My approach combines technical proficiency with a commitment to quality, ensuring that every project I undertake is executed with precision and care. Let's create something amazing together!"})]})})}),(0,a.jsxs)("section",{className:"bg-black text-white py-16 px-6 md:px-16",children:[(0,a.jsxs)("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start ",children:[(0,a.jsxs)(l.P.h2,{className:"text-3xl md:text-5xl font-bold",ref:s,initial:{opacity:0,y:50},animate:o?{opacity:1,y:0}:{},transition:{duration:.8},children:["My ",(0,a.jsx)("span",{className:"italic",children:"Expertise"})," in Delivering ",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"italic",children:"High-Quality"})," Software ",(0,a.jsx)("br",{}),"Development Services"]}),(0,a.jsxs)(l.P.div,{className:"flex flex-col gap-4",ref:x,initial:{opacity:0,y:30},animate:u?{opacity:1,y:0}:{},transition:{duration:.8},children:[(0,a.jsx)("p",{className:"mt-6 text-gray-200",children:"I offer a comprehensive suite of software development services designed to meet your unique needs. From optimizing existing code to building scalable backend architectures, I am committed to delivering excellence and driving your business forward."}),(0,a.jsxs)("div",{className:"mt-10 grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-2xl font-bold",children:"Code Optimization"}),(0,a.jsx)("p",{className:"mt-2 text-gray-200",children:"Improve application performance with our code optimization and refactoring services."})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-2xl font-bold",children:"Backend Development"}),(0,a.jsx)("p",{className:"mt-2 text-gray-200",children:"Build scalable and efficient backend systems with our backend development services."})]})]})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)(n.A,{project:{image:"/images/tenweb_media_swuqor0ij.webp",altText:"Project Showcase",title:"Showcasing My Projects",description:"Explore my past projects that highlight my expertise in Python, React, and software optimization, demonstrating real-world impacts.",tags:["Enhanced performance and scalability","Implemented innovative solutions","Achieved measurable results"],details:[{title:"Software",value:"Optimization"},{title:"API",value:"Development"},{title:"Real-time",value:"Processing"},{title:"Impact",value:"Results"}]},isMain:!0})})]}),(0,a.jsxs)("section",{className:"bg-white px-6 md:px-12 max-w-6xl mx-auto ",children:[(0,a.jsx)("div",{className:"p-6 relative",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[300px]",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-left",children:"My Technical Expertise Powers Your Project's Success"}),(0,a.jsx)("p",{className:"text-gray-600 mt-0",children:"I leverage my deep technical expertise in Python, React, and software optimization to deliver exceptional results. Our commitment to clean code, efficient architecture, and continuous improvement ensures that your project is built on a solid foundation. I am dedicated to providing innovative solutions that meet your specific needs and exceed your expectations."})]})}),(0,a.jsxs)(l.P.div,{className:"grid md:grid-cols-3 gap-8 mt-12 mb-12",ref:f,initial:{opacity:0,y:30},animate:g?{opacity:1,y:0}:{},transition:{duration:.8},children:[(0,a.jsxs)("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full",children:[(0,a.jsx)("div",{className:"relative w-full h-70 object-cover",children:(0,a.jsx)(i.default,{src:"/images/tenweb_media_rtcqbht1j.webp",alt:"Leak Detection Software",fill:!0,unoptimized:!0})}),(0,a.jsxs)("div",{className:"p-6 flex flex-col flex-grow",children:[(0,a.jsx)("h1",{className:"text-xl font-bold text-gray-900",children:"Python Proficiency"}),(0,a.jsx)("p",{className:"text-gray-600 mt-2 text-sm flex-grow",children:"Our expertise in Python allows us to build robust and scalable backend systems. I leverage frameworks like Django and Flask to create efficient and maintainable code."}),(0,a.jsx)("div",{className:"mt-auto pt-4",children:(0,a.jsx)(d(),{href:"/services/python-proficiency",children:(0,a.jsx)("button",{className:"btn-normal-pp btn-blue-400",children:"Learn More"})})})]})]}),(0,a.jsxs)("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full",children:[(0,a.jsx)("div",{className:"relative w-full h-70 object-cover",children:(0,a.jsx)(i.default,{src:"/images/tenweb_media_rine15hqp.webp",alt:"Railway Safety Enhancement",className:"w-full h-52 object-cover",fill:!0,unoptimized:!0})}),(0,a.jsxs)("div",{className:"p-6 flex flex-col flex-grow",children:[(0,a.jsx)("h3",{className:"text-xl font-bold text-gray-900",children:"React Development"}),(0,a.jsx)("p",{className:"text-gray-600 mt-2 text-sm flex-grow",children:"With React, I create engaging and responsive user interfaces that provide a seamless user experience. Our expertise ensures your application is both visually appealing and highly functional."}),(0,a.jsx)("div",{className:"mt-auto pt-4",children:(0,a.jsx)(d(),{href:"/services/react-development",children:(0,a.jsx)("button",{className:"btn-normal-pp btn-blue-400",children:"Learn More"})})})]})]}),(0,a.jsxs)("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full",children:[(0,a.jsx)("div",{className:"relative w-full h-70 object-cover",children:(0,a.jsx)(i.default,{src:"/images/tenweb_media_r39302ibv.webp",alt:"Urban Sound Monitoring",className:"w-full h-52 object-cover",fill:!0,unoptimized:!0})}),(0,a.jsxs)("div",{className:"p-6 flex flex-col flex-grow",children:[(0,a.jsx)("h3",{className:"text-xl font-bold text-gray-900",children:"Software optimization"}),(0,a.jsx)("p",{className:"text-gray-600 mt-2 text-sm flex-grow",children:"I optimize your software for peak performance, ensuring it runs efficiently and reliably. My optimization techniques reduce resource consumption and improve overall system responsiveness."}),(0,a.jsx)("div",{className:"mt-auto pt-4",children:(0,a.jsx)(d(),{href:"/services/optimice",children:(0,a.jsx)("button",{className:"btn-normal-pp btn-blue-400",children:"Learn More"})})})]})]})]})]}),(0,a.jsx)("section",{className:"max-w-6xl mx-auto ",children:(0,a.jsx)(l.P.div,{className:"container mx-auto px-4 py-12",ref:h,initial:{opacity:0,y:50},animate:p?{opacity:1,y:0}:{},transition:{duration:.8},children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-3xl font-bold",children:"Get in Touch"}),(0,a.jsx)("p",{className:"text-gray-600 mt-2",children:"Reach out for inquiries or collaborations."}),(0,a.jsxs)("div",{className:"mt-6 space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("span",{className:"text-gray-600",children:"\uD83D\uDCE7"}),(0,a.jsx)("span",{className:"text-gray-700",children:"contact@agrubio.dev"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("span",{className:"text-gray-600",children:"\uD83D\uDCCD"}),(0,a.jsx)("span",{className:"text-gray-700",children:"Innsbruck"})]})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)(m.A,{isMain:!0})})]})})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[970,526,814,441,587,358],()=>t(1659)),_N_E=e.O()}]);
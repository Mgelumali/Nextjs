(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[709],{760:(e,t,i)=>{Promise.resolve().then(i.bind(i,8286)),Promise.resolve().then(i.bind(i,182)),Promise.resolve().then(i.bind(i,2533))},8286:(e,t,i)=>{"use strict";i.d(t,{default:()=>l});var r=i(5155),n=i(2115),s=i(6733),a=i(5565),o=i(8781);let d=[{id:1,title:"Scroll",image:"/images/home/commonImage.png",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:2,title:"Springs",image:"/images/home/compareImageTwo.webp",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:3,title:"Transforms",image:"/images/home/compareImageOne.webp",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}];function l(){var e,t,i;let[l,c]=(0,n.useState)(0),m=(0,n.useRef)(null),{scrollY:u}=(0,n.useContext)(o.z);return(0,n.useEffect)(()=>{let e=()=>{m.current&&c(Math.max(0,Math.min(Math.floor((u-m.current.offsetTop)/(m.current.offsetHeight-window.innerHeight)*d.length),d.length-1)))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),(0,r.jsx)("section",{className:"container",children:(0,r.jsx)("div",{className:"py-20",ref:m,children:(0,r.jsx)("section",{className:"relative h-[200vh] bg-gray-900 text-white",children:(0,r.jsxs)("div",{className:"sticky top-0 h-screen flex",children:[(0,r.jsx)("div",{className:"w-1/2 flex flex-col justify-center pl-16 space-y-8",children:d.map((e,t)=>(0,r.jsxs)(s.P.div,{initial:{opacity:0===t?1:.6,y:0===t?0:20},animate:{opacity:l===t?1:.6,y:l===t?0:20},transition:{duration:.3},className:"space-y-2",children:[(0,r.jsx)("h2",{className:"transition-all font-bold ".concat(l===t?"text-purple-400 text-3xl":"text-gray-400 text-xl"),children:e.title}),l===t&&(0,r.jsx)("p",{className:"text-gray-300 text-lg",children:e.description})]},e.id))}),(0,r.jsx)("div",{className:"w-1/2 flex items-center justify-center",children:(0,r.jsx)(s.P.div,{initial:{opacity:0===l?1:0,scale:0===l?1:.8},animate:{opacity:1,scale:1},transition:{duration:.5},className:"w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg",children:(0,r.jsx)(a.default,{width:400,height:400,src:null===(e=d[l])||void 0===e?void 0:e.image,alt:null===(t=d[l])||void 0===t?void 0:t.title,className:"w-full h-full object-cover"})},null===(i=d[l])||void 0===i?void 0:i.image)})]})})})})}},182:(e,t,i)=>{"use strict";i.d(t,{default:()=>c});var r=i(5155);i(2115);var n=i(831),s=i(6733),a=i(5565);let o=e=>{let{feature:t}=e,{icon:i,title:n,description:o}=t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.P.div,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0},hover:{y:-10,boxShadow:"rgba(255, 255, 255, 0.2) 0px 7px 29px 0px",opacity:1}},initial:"hidden",whileInView:"visible",whileHover:"hover",transition:{duration:1,delay:.1,type:"spring"},viewport:{once:!1},className:"border-primary rounded-2xl border p-7 hover:opacity text-center  bg-gradient-to-br from-amber-500/30 to-40%",children:[(0,r.jsx)("div",{className:"relative flex items-start justify-center rounded-[4px] mb-5",children:(0,r.jsx)(a.default,{src:i,width:100,height:100,alt:n})}),(0,r.jsx)("h3",{className:"mb-5 text-xl font-semibold",children:n}),(0,r.jsx)("p",{children:o})]})})},d="/images/features/icon-03.svg",l={heading:"What we offer to your Industry Solutions",headerButton:{text:"OUR FEATURES"},description:"Get quick answers to common questions about our services and products. Everything you need, all in one place!",cards:[{id:1,icon:d,title:"Mobile Commerce Application",description:"Deliver seamless shopping experiences directly to your customers' smartphones. "},{id:2,icon:d,title:"Web Commerce Application",description:"Provide an easy-to-navigate website for online orders. "},{id:3,icon:d,title:"Admin Web Panel",description:"Gain full control over your operations with an intuitive admin dashboard"},{id:4,icon:d,title:"B2B Web & Mobile commerce",description:"Enable seamless bulk ordering and real-time tracking for our B2B orders with mobile and web commerce platform—optimized for efficient pricing, territory-specific product visibility, and multi-tier account management."}]},c=()=>(0,r.jsx)("section",{className:"container",children:(0,r.jsxs)("div",{className:" mx-auto py-16 md:py-20",children:[(0,r.jsx)(n.A,{headerInfo:{title:l.heading,buttonText:l.headerButton.text,description:l.description}}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ",children:l.cards.map((e,t)=>(0,r.jsx)(o,{feature:e},t))})]})})},831:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var r=i(5155),n=i(6733),s=i(3312);let a=e=>{let{headerInfo:t}=e,{buttonText:i,title:a,description:o}=t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(n.P.div,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{duration:1,delay:.1},viewport:{once:!0},className:"animate_top mx-auto text-center mb-12",children:[(0,r.jsxs)(s.$,{variant:"outline",className:"pointer-events-none mx-auto block mb-3",children:["   ",i]}),(0,r.jsx)("h2",{className:"text-3xl font-bold text-center mb-4 xl:text-hero ",children:a}),(0,r.jsx)("p",{className:"max-w-xl mx-auto text-muted-foreground text-center",children:o})]})})}},2533:(e,t,i)=>{"use strict";i.d(t,{default:()=>o});var r=i(5155),n=i(5565),s=i(3312);let a={heading:"Revolutionize Your Dairy Business with ScaleKart ",subheading:"Ready to elevate your dairy venture",description:" Solid Pro - Packed with all the key integrations you need for swift SaaS startup launch, including - Auth, Database, Sanity Blog,Essential Components, Pages and More. Built-winth - Next.js 13, React18 and TypeScript.",button:{text:"Learn More",href:""},image:{src:"/images/industry/heroImage.svg",alt:"heroImage"}};function o(){return(0,r.jsxs)("section",{className:"container grid min-h-[calc(100dvh-var(--header-height))] grid-cols-1 items-center gap-6 overflow-hidden py-5 pt-10 md:grid-cols-2 2xl:min-h-[550px]",children:[(0,r.jsxs)("div",{className:"order-2 md:order-1",children:[(0,r.jsx)("h1",{className:"xl:text-hero mb-3 text-3xl font-bold",children:a.heading}),(0,r.jsx)("h4",{className:"mb-4.5 pb-3 text-lg font-normal text-muted-foreground",children:a.subheading}),(0,r.jsx)("p",{className:"text-muted-foreground text-md",children:a.description}),(0,r.jsx)(s.$,{className:"mt-7",children:a.button.text})]}),(0,r.jsx)("div",{className:"order-1 md:order-2",children:(0,r.jsx)(n.default,{width:700,height:700,src:a.image.src,alt:a.image.alt})})]})}},8781:(e,t,i)=>{"use strict";i.d(t,{default:()=>o,z:()=>a});var r=i(5155),n=i(4741);i(6477);var s=i(2115);let a=(0,s.createContext)({scrollY:0}),o=e=>{let{children:t}=e,i=(0,s.useRef)(null),[o,d]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=new n.A;e.on("scroll",e=>{d(e.targetScroll)}),requestAnimationFrame(function t(i){e.raf(i),requestAnimationFrame(t)})},[]),(0,r.jsx)(a.Provider,{value:{scrollY:o},children:(0,r.jsx)("div",{ref:i,children:t})})}},3312:(e,t,i)=>{"use strict";i.d(t,{$:()=>l});var r=i(5155),n=i(2115),s=i(2317),a=i(1027),o=i(1567);let d=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef((e,t)=>{let{className:i,variant:n,size:a,asChild:l=!1,...c}=e,m=l?s.DX:"button";return(0,r.jsx)(m,{className:(0,o.cn)(d({variant:n,size:a,className:i})),ref:t,...c})});l.displayName="Button"},1567:(e,t,i)=>{"use strict";i.d(t,{cn:()=>s});var r=i(3463),n=i(9795);function s(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,n.QP)((0,r.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[956,729,201,441,517,358],()=>t(760)),_N_E=e.O()}]);
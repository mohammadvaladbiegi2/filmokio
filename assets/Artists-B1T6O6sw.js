import{j as e,L as u,u as w,a as v,r,g as N,b as y}from"./index-M4dbiQW8.js";import{S as d}from"./Select-40QbwZk_.js";import"./index.esm-HqIaf_Xd.js";import"./index.esm-iBKnzYEP.js";function h({name:x,jobTitle:s,nameIR:m,DateofBirth:o,age:i,URL:l,image:n}){return e.jsxs("div",{className:"animate__animated animate__fadeInRight  bg-[#111618] w-[280px] sm:w-[320px] px-2 my-8",children:[e.jsx("div",{className:"w-[130px] h-[200px] sm:w-[170px] sm:h-[250px] m-auto mt-[-50px]",children:e.jsx("img",{src:n,alt:"",className:"w-full h-full rounded-lg object-cover card__placeholder"})}),e.jsxs("div",{className:"text-center mt-5 ",children:[e.jsx("h1",{className:"font-medium text-white text-[1.375rem]",children:x}),e.jsx("span",{className:"text-[#ccc] text-sm",children:s})]}),e.jsxs("div",{className:"flex flex-col gap-3 mt-3",children:[e.jsxs("div",{className:"flex justify-between px-2 info_Artist relative",children:[e.jsx("span",{className:"text-white font-medium text-sm",children:"نام فارسی :"}),e.jsx("span",{className:"text-white font-medium text-sm",children:m})]}),e.jsxs("div",{className:"flex justify-between px-2 info_Artist_Date relative",children:[e.jsx("span",{className:"text-white font-medium text-sm",children:"تاریخ تولد :"}),e.jsx("span",{className:"text-white font-medium text-sm",children:o})]}),e.jsxs("div",{className:"flex justify-between px-2 info_Artist_Age relative",children:[e.jsx("span",{className:"text-white font-medium text-sm",children:"سن :"}),e.jsxs("span",{className:"text-white font-medium text-sm",children:[i," سال"]})]})]}),e.jsx(u,{to:l,children:e.jsx("button",{className:"bg-[#f5ad11] w-full my-5 py-2 rounded-xl font-medium",children:"پروفایل IMDB"})})]})}function _(){const x=w(),{AllArtist:s,isLoading:m,isreject:o}=v(t=>t.Artist),[i,l]=r.useState("all"),[n,c]=r.useState([]);return r.useEffect(()=>{x(N())},[i]),r.useEffect(()=>{switch(i){case"all":c(s);break;case"Man":const t=[...s].filter(a=>a.gender==="Man");c(t);break;case"Woman":const f=[...s].filter(a=>a.gender==="Woman");c(f);break;case"Actor":const j=[...s].filter(a=>a.profession==="Actor");c(j);break;case"Director":const p=[...s].filter(a=>a.profession==="Director");c(p);break}},[i]),e.jsxs("div",{className:"pt-[200px]",children:[e.jsx("h1",{className:"font-medium text-center text-white text-5xl",children:"آرشیو هنرمندان"}),e.jsxs("div",{className:"px-[4.8rem]",children:[e.jsxs("div",{className:"flex items-center justify-center md:flex-row  flex-col  mt-10",children:[e.jsxs(d,{Ordered:i,title:"جنسیت",children:[e.jsx("div",{onClick:()=>l("all"),className:"hover:text-yellow-500 py-2",children:"هردو"}),e.jsx("hr",{}),e.jsx("div",{onClick:()=>l("Man"),className:"hover:text-yellow-500 py-2",children:"مرد"}),e.jsx("hr",{}),e.jsx("div",{onClick:()=>l("Woman"),className:"hover:text-yellow-500 py-2",children:"زن"})]}),e.jsxs(d,{Ordered:i,title:"پیشه",children:[e.jsx("div",{onClick:()=>l("all"),className:"hover:text-yellow-500 py-2",children:"هردو"}),e.jsx("hr",{}),e.jsx("div",{onClick:()=>l("Actor"),className:"hover:text-yellow-500 py-2",children:"بازیگر"}),e.jsx("hr",{}),e.jsx("div",{onClick:()=>l("Director"),className:"hover:text-yellow-500 py-2",children:"کارگردان"})]})]}),e.jsx("div",{className:"flex justify-center items-center flex-wrap gap-5 mt-20",children:m?e.jsx(y,{}):n.length?n.map(t=>r.createElement(h,{...t,key:t.id})):s.map(t=>r.createElement(h,{...t,key:t.id}))})]})]})}export{_ as default};
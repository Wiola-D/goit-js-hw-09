const e=document.querySelector(".js-start"),t=document.querySelector(".js-stop"),d=document.querySelector("body");let l=null;t.disabled=!0,e.addEventListener("click",(()=>{l=setInterval((()=>{d.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(l),console.log(`Interval with id ${l} has stopped!`),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.a67ace06.js.map
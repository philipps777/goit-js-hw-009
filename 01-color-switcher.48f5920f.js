const t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),e=document.body;t.addEventListener("click",(function(){t.disabled=!0,o.disabled=!1,colorBody=setInterval((function(){e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),o.addEventListener("click",(function(){t.disabled=!1,o.disabled=!0,clearInterval(colorBody)}));
//# sourceMappingURL=01-color-switcher.48f5920f.js.map

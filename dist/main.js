(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="",n.alt="jason chen",n.height="300",t.appendChild(n);const c=document.createElement("h1");c.textContent="Welcome to our restaurant!",t.appendChild(c);const o=document.createElement("p");o.textContent="We serve the best food in town. Come and taste",t.appendChild(o),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}const n=()=>{const n=document.querySelector("#content"),c=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div");c.setAttribute("id","home-btn"),o.setAttribute("id","menu-btn"),d.setAttribute("id","contact-btn"),c.textContent="Home",o.textContent="Menu",d.textContent="Contact",n.appendChild(c),n.appendChild(o),n.appendChild(d),c.addEventListener("click",(()=>{t(),e()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("ul"),c=document.createElement("li");c.textContent="beef";const o=document.createElement("li");o.textContent="turkey",n.appendChild(c),n.appendChild(o),t.appendChild(n),e.appendChild(t)})()})),d.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("div");n.textContent="720",t.append(n),e.append(t)})()}))};n(),e()})();
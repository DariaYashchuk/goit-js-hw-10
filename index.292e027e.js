const e={select:document.querySelector(".breed-select"),value:document.querySelector("option"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catCard:document.querySelector(".cat-info")};function n(n){e.catCard.insertAdjacentHTML("beforeend",function(e){return console.log(e),`\n     <div class = "cat-info">\n        <img\n            src="${e.url}"\n            alt="${e.breeds[0].name}"\n            width="300px"\n        />\n        <div class = "main-info">\n       <h1>${e.breeds[0].name}</h1>\n        <p><span>Description: </span>${e.breeds[0].description}</p>\n        <p><span>Temperament: </span>${e.breeds[0].temperament}</p>\n    </div>\n    </div>\n    `}(...n)),e.loader.hidden=!0}e.select.hidden=!0,e.error.hidden=!0,fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_9NQ1iBJZ1wBNuHv00WL0mialjmLWdOpxplfwfATgN4Rrux61anAIs4mZrhH41v0d"}}).then((n=>n.ok?n.json():(console.log("data not ok"),e.loader.hidden=!0,void(e.error.hidden=!1)))).then((e=>e)).then((function(n){e.select.insertAdjacentHTML("beforeend",(r=n,r.map((e=>`\n     <option value="${e.id}">${e.name}</option>\n    `)).join(""))),e.select.hidden=!1,e.loader.hidden=!0;var r})),e.select.addEventListener("change",(r=>{var t;e.loader.hidden=!1,e.catCard.innerHTML="",(t=r.target.value,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`,{headers:{"x-api-key":"live_9NQ1iBJZ1wBNuHv00WL0mialjmLWdOpxplfwfATgN4Rrux61anAIs4mZrhH41v0d"}}).then((e=>e.json())).then((e=>e))).then(n)}));
//# sourceMappingURL=index.292e027e.js.map
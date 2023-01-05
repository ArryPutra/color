let background = document.body;
let txt = document.querySelector("span");
let button = document.querySelector("button");
let inputColor = document.querySelector("input");``

button.addEventListener("click", function() {
    let hex = ("ABCDEF0123456789");

    let random1 = Math.floor(Math.random() * hex.length);
    let random2 = Math.floor(Math.random() * hex.length);
    let random3 = Math.floor(Math.random() * hex.length);
    let random4 = Math.floor(Math.random() * hex.length);
    let random5 = Math.floor(Math.random() * hex.length);
    let random6 = Math.floor(Math.random() * hex.length);
    
    let hexCode = "#" + hex[random1]+hex[random2]+hex[random3]+hex[random4]+hex[random5]+hex[random6];
    localStorage.setItem("hexCode", hexCode);
    txt.textContent = localStorage.getItem("hexCode");
    background.style.background = localStorage.getItem("hexCode");
    background.style.transition = 0.2 + "s";
    inputColor.value = localStorage.getItem("hexCode");
    
    console.log(random1);
    console.log(random2);
    console.log(random3);
    console.log(random4);
    console.log(random5);
    console.log(random6);

});

txt.textContent = localStorage.getItem("hexCode");
background.style.background = localStorage.getItem("hexCode");
inputColor.value = localStorage.getItem("hexCode");

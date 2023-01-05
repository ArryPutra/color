let background = document.body;
let txt = document.querySelector("span");
let button = document.querySelector("button");
let inputTxt = document.querySelector("#inputTxt");
let inputColor = document.querySelector("#color");

background.style.transition = 0.1 + "s";

button.addEventListener("click", function() {
    let hex = ("ABCDEF0123456789");

    let random1 = Math.floor(Math.random() * hex.length);
    let random2 = Math.floor(Math.random() * hex.length);
    let random3 = Math.floor(Math.random() * hex.length);
    let random4 = Math.floor(Math.random() * hex.length);
    let random5 = Math.floor(Math.random() * hex.length);
    let random6 = Math.floor(Math.random() * hex.length);
    
    let hexCode = "#" + hex[random1]+hex[random2]+hex[random3]+hex[random4]+hex[random5]+hex[random6];

    background.style.background = hexCode;
    inputTxt.value = hexCode;
    inputColor.value = hexCode;

});
inputTxt.oninput = function() {
    background.style.background = inputTxt.value;
    inputColor.value = inputTxt.value;
}
inputColor.oninput = function() {
    background.style.background = inputColor.value;
    inputTxt.value = inputColor.value;
}

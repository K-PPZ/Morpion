let img_x = document.getElementById("img_x");
let img_o = document.getElementById("img_o");
let turn = document.getElementById("turn");

img_x.addEventListener("click", () => {
    img_x.id = "img_x_on";
    img_o.id = "img_o";
    // turn.style.backgroundImage = "url('../../img/icon-x-grey.svg')";
});

img_o.addEventListener("click", () => {
    img_o.id = "img_o_on";
    img_x.id = "img_x";
    // turn.style.backgroundImage = "url('../../img/icon-o-grey.svg')";
});
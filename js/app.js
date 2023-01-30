let img_x = document.getElementById("img_x");
let img_o = document.getElementById("img_o");

img_x.addEventListener("click", () => {
    img_x.id = "img_x_on";
    img_o.id = "img_o";
    // img_x.style.backgroundImage = "url('../img/icon-x-outline-grey.svg')";
    // img_x.style.backgroundColor = "#A8BFC9";

    // img_o.style.backgroundImage = "url('../img/icon-o-grey.svg')";
    // img_o.style.backgroundColor = "#192A32";
});

img_o.addEventListener("click", () => {
    img_o.id = "img_o_on";
    img_x.id = "img_x";
    // img_o.style.backgroundImage = "url('../img/icon-o-outline-grey.svg')";
    // img_o.style.backgroundColor = "#A8BFC9";

    // img_x.style.backgroundImage = "url('../img/icon-x-grey.svg')";
    // img_x.style.backgroundColor = "#192A32";
});
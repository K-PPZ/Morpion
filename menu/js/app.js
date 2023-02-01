let img_x = document.getElementById("img_x");
let img_o = document.getElementById("img_o");

img_x.addEventListener("click", () => {
    img_x.id = "img_x_on";
    img_o.id = "img_o";
});

img_o.addEventListener("click", () => {
    img_o.id = "img_o_on";
    img_x.id = "img_x";
});
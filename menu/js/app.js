let img_x = document.getElementById("img_x");
let img_o = document.getElementById("img_o");

let liens_game_solo = document.getElementById("btn_yellow");
let liens_game_multi = document.getElementById("btn_blue");

img_x.addEventListener("click", () => {
    img_x.id = "img_x_on";
    img_o.id = "img_o";
    liens_game_solo.href = "../game_solo/game_solo.html?text=x";
    liens_game_multi.href = "../game_multi/game_multi.html?text=x";
});

img_o.addEventListener("click", () => {
    img_o.id = "img_o_on";
    img_x.id = "img_x";
    liens_game_solo.href = "../game_solo/game_solo.html?text=o";
    liens_game_multi.href = "../game_multi/game_multi.html?text=o";
});
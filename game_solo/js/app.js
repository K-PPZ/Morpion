if (document.location.href == "http://127.0.0.1:5173/game_solo/game_solo.html?text=x") {
    let cases = document.getElementsByClassName("cases_morpion");
    let cpu = Math.floor(Math.random() * (8 - 0)) + 0;
    let player_img = document.getElementById("player_img");
    player_img.src = "../../img/icon-x-grey.svg";

    for (let i = 0; i < cases.length; i++) {
        cases[i].classList.add("hover_x");
        let round = true;
    
        cases[i].addEventListener("click", () => {
            if (round) {
                cases[i].classList.add("case_x");
            }
        });
    }
}

if (document.location.href == "http://127.0.0.1:5173/game_solo/game_solo.html?text=o") {
    let cases = document.getElementsByClassName("cases_morpion");
    let cpu = Math.floor(Math.random() * (8 - 0)) + 0;
    let player_img = document.getElementById("player_img");
    player_img.src = "../../img/icon-o-grey.svg";

    for (let i = 0; i < cases.length; i++) {
        cases[i].classList.add("hover_o");
        let round = true;
    
        cases[i].addEventListener("click", () => {
            if (round) {
                cases[i].classList.add("case_o");
            }
        });
    }
}
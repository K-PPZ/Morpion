let url_x = new URL("http://127.0.0.1:5173/game_multi/game_multi.html?text=x");
let url_o = new URL("http://127.0.0.1:5173/game_multi/game_multi.html?text=o");


let restart = document.getElementById("restart");

if (document.location.href == url_x) {
    let cases = document.getElementsByClassName("cases_morpion");

    restart.addEventListener("click", () => {
        for (let i = 0; i < cases.length; i++) {
            cases[i].classList.remove("case_x");
            cases[i].classList.remove("case_o");
        }
    });

    function p1 (cases) {
        let player_img = document.getElementById("player_img");
        player_img.src = "../../img/icon-x-grey.svg";

        for (let i = 0; i < cases.length; i++) {
            cases[i].classList.add("hover_x");
            cases[i].addEventListener("click", () => {
                cases[i].classList.add("case_x");
                p2(cases);
            });
        }
    }
    p1(cases);

    function p2(cases) {
        let player_img = document.getElementById("player_img");
        player_img.src = "../../img/icon-o-grey.svg";

        for (let i = 0; i < cases.length; i++) {
            cases[i].classList.add("hover_o");
            cases[i].addEventListener("click", () => {
                cases[i].classList.add("case_o");
                p1(cases);
            });
        }
    }


    // for (let i = 0; i < cases.length; i++) {
    //     cases[i].classList.add("hover_x");
    //     let round = true;
    
    //     cases[i].addEventListener("click", () => {
    //         if (round) {
    //             cases[i].classList.add("case_x");
    //         }
    //     });
    // }
}

// if (document.location.href == url_o) {
//     let cases = document.getElementsByClassName("cases_morpion");
//     let cpu = Math.floor(Math.random() * (8 - 0)) + 0;
//     let player_img = document.getElementById("player_img");
//     player_img.src = "../../img/icon-o-grey.svg";

//     for (let i = 0; i < cases.length; i++) {
//         cases[i].classList.add("hover_o");
//         let round = true;
    
//         cases[i].addEventListener("click", () => {
//             if (round) {
//                 cases[i].classList.add("case_o");
//             }
//         });
//     }
// }
let url_x = new URL("http://127.0.0.1:5173/game_solo/game_solo.html?text=x");
let url_o = new URL("http://127.0.0.1:5173/game_solo/game_solo.html?text=o");

// let cases = document.getElementsByClassName("cases_morpion");
// for (let i = 0; i < cases.length; i++) {
//     cases[i].addEventListener("click", () => {
//         console.log(i);
//         console.log("cpu", Math.floor(Math.random() * (cases.length - 0)) + 0);
//     });
// }

let restart = document.getElementById("restart");

if (document.location.href == url_x) {
    let cases = document.getElementsByClassName("cases_morpion");

    restart.addEventListener("click", () => {
        for (let i = 0; i < cases.length; i++) {
            cases[i].classList.remove("case_x");
            cases[i].classList.remove("case_o");
        }
    });

    function round_player (cases) {
        // let cases = document.getElementsByClassName("cases_morpion");
        let player_img = document.getElementById("player_img");
        player_img.src = "../../img/icon-x-grey.svg";
    
        for (let i = 0; i < cases.length; i++) {
            cases[i].classList.add("hover_x");
            cases[i].addEventListener("click", () => {
                cases[i].classList.add("case_x");
                round_cpu(cases);
                // cases[i].classList.remove("cases_morpion");
            });
        }
    }
    round_player(cases);

    function round_cpu (cases) {
        // let cases = document.getElementsByClassName("cases_morpion");
        let cpu = Math.floor(Math.random() * (cases.length - 0)) + 0;
        let player_img = document.getElementById("player_img");
        player_img.src = "../../img/icon-o-grey.svg";

        if (cases[cpu].style.backgroundImage == "url('../../img/icon-x.svg')" || cases[cpu].style.backgroundImage == "url('../../img/icon-o.svg')") {
            clearTimeout(interv_cpu);
            round_cpu(cases);
        } else {
            let interv_cpu = setTimeout(() => {
                cases[cpu].classList.add("case_o");
                // cases[cpu].classList.remove("cases_morpion");
                clearTimeout(interv_cpu);
                round_player(cases);
            }, 2000);
        }
    }
    
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
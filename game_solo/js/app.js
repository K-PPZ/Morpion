let url_x = new URL("http://127.0.0.1:5173/game_solo/game_solo.html?text=x");
let url_o = new URL("http://127.0.0.1:5173/game_solo/game_solo.html?text=o");


let restart = document.getElementById("restart");
let player_img = document.getElementById("player_img");



if (document.location.href == url_x) {
    let cases = document.getElementsByClassName("cases_morpion");

    let turn = true;

    restart.addEventListener("click", () => {
        for (let i = 0; i < cases.length; i++) {
            cases[i].classList.remove("case_x");
            cases[i].classList.remove("case_o");
        }
    });

    function round_player (cases, turn) {
        player_img.src = "../../img/icon-x-grey.svg";

        for (let i = 0; i < cases.length; i++) {
            cases[i].classList.add("hover_x");

            cases[i].addEventListener("click", () => {
                cases[i].classList.add("case_x");
                console.log("round_player ");

                turn = false;
                round(turn);
            });

        }
    }

    function round_cpu (cases, turn) {
        player_img.src = "../../img/icon-o-grey.svg";
        let cpu = Math.floor(Math.random() * (cases.length - 0)) + 0;

        console.log("round_cpu ");

        turn = true;
        round(turn);
    }

    
    
    let turn_player = round_player(cases, turn);
    let turn_cpu = round_cpu(cases, turn);

    function round (turn) {
        if (turn) {
           turn_player;
        }

        if (turn == false) {
            turn_cpu;
        }
    }
    round(turn);

    // if (turn) {
    //     turn = false;
    //     round(turn);
    // } else {
    //     turn = true;
    //     round(turn);
    // }
}









// if (document.location.href == url_x) {
//     let cases = document.getElementsByClassName("cases_morpion");

//     restart.addEventListener("click", () => {
//         for (let i = 0; i < cases.length; i++) {
//             cases[i].classList.remove("case_x");
//             cases[i].classList.remove("case_o");
//         }
//     });

//     function round_player (cases) {
//         let player_img = document.getElementById("player_img");
//         player_img.src = "../../img/icon-x-grey.svg";
    
//         for (let i = 0; i < cases.length; i++) {
//             cases[i].classList.add("hover_x");
//             cases[i].addEventListener("click", () => {
//                 cases[i].classList.add("case_x");
//                 round_cpu(cases);
//                 // cases[i].classList.remove("cases_morpion");
//             });
//         }
//     }

//     function round_cpu (cases) {
//         let cpu = Math.floor(Math.random() * (cases.length - 0)) + 0;
//         let player_img = document.getElementById("player_img");
//         player_img.src = "../../img/icon-o-grey.svg";

//         if (cases[cpu].style.backgroundImage == "url('../../img/icon-x.svg')" || cases[cpu].style.backgroundImage == "url('../../img/icon-o.svg')") {
//             clearTimeout(interv_cpu);
//             round_cpu(cases);
//         } else {
//             let interv_cpu = setTimeout(() => {
//                 cases[cpu].classList.add("case_o");
//                 // cases[cpu].classList.remove("cases_morpion");
//                 clearTimeout(interv_cpu);
//                 round_player(cases);
//             }, 2000);
//         }
//     }

//     function round (cases) {
        
//     }
//     round(cases);
    
// }








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
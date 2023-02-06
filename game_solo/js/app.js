let cases = document.getElementsByClassName("cases_morpion");
let cpu = Math.floor(Math.random() * (8 - 0)) + 0;

for (let i = 0; i < cases.length; i++) {
    let round = true;

    cases[i].addEventListener("click", () => {
        if (round) {
            cases[i].classList.add("case_x");
        }
    });
}
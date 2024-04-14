const h1display = document.getElementById("h1display");
const h2display = document.getElementById("h2display");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const reset = document.getElementById("reset");
const displaychange = document.getElementById("playto");

let winingScore = 1;
let h2 = 0;
let h1 = 0;
let isGameOver = false;
player1.addEventListener("click", function () {
    if (!isGameOver) {
        h1 += 1;
        if (h1 === winingScore) {
            isGameOver = true;
            h1display
                .classList
                .add("has-text-success");
            h2display
                .classList
                .add("has-text-danger");
            player1
                .classList
                .add("is-static");
            player2
                .classList
                .add("is-static");
        }
        h1display.textContent = h1;
    }
});

player2.addEventListener("click", function () {
    if (!isGameOver) {
        h2 += 1;
        if (h2 === winingScore) {
            isGameOver = true;
            h1display
                .classList
                .add("has-text-danger");
            h2display
                .classList
                .add("has-text-success");
            player1
                .classList
                .add("is-static");
            player2
                .classList
                .add("is-static");
        }
        h2display.textContent = h2;
    }
});

displaychange.addEventListener("change", function () {
    winingScore = parseInt(this.value);
    resetter();

})

reset.addEventListener("click", resetter);
function resetter() {
    h1 = 0;
    h2 = 0;
    h1display.textContent = 0;
    h2display.textContent = 0;
    isGameOver = false;
    h1display
        .classList
        .remove("has-text-success", "has-text-danger");
    h2display
        .classList
        .remove("has-text-success", "has-text-danger");

    player1
        .classList
        .remove("is-static");
    player2
        .classList
        .remove("is-static");
}

const player1 = {
    score: 0,
    button: document.getElementById("player1"),
    display: document.getElementById("h1display")

}

const player2 = {
    score: 0,
    button: document.getElementById("player2"),
    display: document.getElementById("h2display")

}
const reset = document.getElementById("reset");
const displaychange = document.getElementById("playto");
let winingScore = 1;
let isGameOver = false;


function updateScore(player,opponent){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winingScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.classList.add("is-static");
            opponent.button.classList.add("is-static");
        }
        player.display.textContent = player.score;
    }

}
player1.button.addEventListener("click", function () {
  updateScore(player1,player2)
})

player2.button.addEventListener("click", function () {
    updateScore(player2,player1)
})

displaychange.addEventListener("change", function () {
    winingScore = parseInt(this.value);
    resetter();

})

reset.addEventListener("click", resetter);
function resetter() {
    player1.score = 0;
    player2.score = 0;
    player1.display.textContent = 0;
    player2.display.textContent = 0;
    isGameOver = false;
    player1.display.classList.remove("has-text-success", "has-text-danger");
    player2.display.classList.remove("has-text-success", "has-text-danger");
    player1.button.classList.remove("is-static");
    player2.button.classList.remove("is-static");
}

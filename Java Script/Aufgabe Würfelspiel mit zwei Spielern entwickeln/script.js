const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const overlay = document.getElementById("overlay");
const winnerText = document.getElementById("winnerText");
const again = document.getElementById("again");

let p1Rolled = false;
let p2Rolled = false;
let p1Value = 0;
let p2Value = 0;

function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

btn1.addEventListener("click", () => {
    p1Value = roll();
    num1.textContent = p1Value;
    btn1.disabled = true;
    p1Rolled = true;
    checkWinner();
});

btn2.addEventListener("click", () => {
    p2Value = roll();
    num2.textContent = p2Value;
    btn2.disabled = true;
    p2Rolled = true;
    checkWinner();
});

function checkWinner() {
    if (p1Rolled && p2Rolled) {
        overlay.style.display = "flex";

        if (p1Value > p2Value) {
            winnerText.textContent = "Player 1 - Won!";
        } else if (p2Value > p1Value) {
            winnerText.textContent = "Player 2 - Won!";
        } else {
            winnerText.textContent = "Unentschieden";
        }
    }
}

again.addEventListener("click", () => {
    location.reload();
});

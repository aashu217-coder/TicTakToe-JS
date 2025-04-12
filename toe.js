let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let chance = "X";

function change_chance() {
    if (chance == "X") {
        chance = "0";
    } else {
        chance = "X";
    }
}

function checkWin() {
    // Check rows
    if (
        (btn1.innerText == btn2.innerText && btn2.innerText == btn3.innerText && btn1.innerText != "") ||
        (btn4.innerText == btn5.innerText && btn5.innerText == btn6.innerText && btn4.innerText != "") ||
        (btn7.innerText == btn8.innerText && btn8.innerText == btn9.innerText && btn7.innerText != "")
    ) {
        alert(chance + " Wins!");
        resetGame();
        return;
    }

    // Check columns
    if (
        (btn1.innerText == btn4.innerText && btn4.innerText == btn7.innerText && btn1.innerText != "") ||
        (btn2.innerText == btn5.innerText && btn5.innerText == btn8.innerText && btn2.innerText != "") ||
        (btn3.innerText == btn6.innerText && btn6.innerText == btn9.innerText && btn3.innerText != "")
    ) {
        alert(chance + " Wins!");
        resetGame();
        return;
    }

    // Check diagonals
    if (
        (btn1.innerText == btn5.innerText && btn5.innerText == btn9.innerText && btn1.innerText != "") ||
        (btn3.innerText == btn5.innerText && btn5.innerText == btn7.innerText && btn3.innerText != "")
    ) {
        alert(chance + " Wins!");
        resetGame();
        return;
    }

    // Check for draw
    if (
        btn1.innerText != "" &&
        btn2.innerText != "" &&
        btn3.innerText != "" &&
        btn4.innerText != "" &&
        btn5.innerText != "" &&
        btn6.innerText != "" &&
        btn7.innerText != "" &&
        btn8.innerText != "" &&
        btn9.innerText != ""
    ) {
        alert("It's a Draw!");
        resetGame();
    }
}

function resetGame() {
    btn1.innerText = "";
    btn2.innerText = "";
    btn3.innerText = "";
    btn4.innerText = "";
    btn5.innerText = "";
    btn6.innerText = "";
    btn7.innerText = "";
    btn8.innerText = "";
    btn9.innerText = "";
    chance = "X";
}

function handleClick(button) {
    if (button.innerText == "") {
        button.innerText = chance;
        checkWin();
        change_chance();
    } else {
        alert("Invalid move! This cell is already taken.");
    }
}

btn1.onclick = () => handleClick(btn1);
btn2.onclick = () => handleClick(btn2);
btn3.onclick = () => handleClick(btn3);
btn4.onclick = () => handleClick(btn4);
btn5.onclick = () => handleClick(btn5);
btn6.onclick = () => handleClick(btn6);
btn7.onclick = () => handleClick(btn7);
btn8.onclick = () => handleClick(btn8);
btn9.onclick = () => handleClick(btn9);
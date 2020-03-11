const tictactoeTable = document.querySelector(".tttTable");
const tbody = tictactoeTable.querySelector("tbody");
const tr = tbody.querySelectorAll("tr");
const td = tbody.querySelectorAll("td");
var turn = "X";

function showLocation(e) {
    var myTarget = e.target;
    // console.log(myTarget.textContent);

    if (myTarget.textContent !== "") {
        console.log(`빈칸이 아님`);
    } else {
        console.log(`빈칸임`);
        myTarget.textContent = turn;
        console.log(myTarget.textContent);

        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    }

}

tictactoeTable.addEventListener("click", showLocation);
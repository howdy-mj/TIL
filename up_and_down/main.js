const gameContainer = document.querySelector(".game");
const gameForm = gameContainer.querySelector("form");
const gameInput = gameContainer.querySelector("input");
const gameResult = gameContainer.querySelector(".result");

var computerNum;
function randomNum() {
    computerNum = Math.floor(Math.random() * 99) + 1;
    console.log(computerNum);
}
randomNum();

var incorrect = 0;

gameForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    if (computerNum === Number(gameInput.value)) {
        // console.log(computerNum, gameInput.value);
        gameResult.textContent = `정답! 다음 숫자를 맞춰보세요!`;
        gameInput.value = "";
        gameInput.focus();

        randomNum();
    } else {
        if ( incorrect > 3) {
            gameResult.textContent = `맞추기 실패ㅠㅠ.. 정답은 ${computerNum}였습니다. 다음 문제로 넘어갑니다!`;
            incorrect = 0;

            gameInput.value = "";
            gameInput.focus();
            randomNum();
        } else {
            if (computerNum < Number(gameInput.value)) {
                // console.log("컴퓨터보다 높음");
                incorrect += 1;
                console.log(incorrect);

                gameResult.textContent = `UP! 더 낮은 숫자를 입력하세요. (남은 횟수: ${5-incorrect}번)`;
                gameInput.value = "";
                gameInput.focus();
            } else if (computerNum > Number(gameInput.value)) {
                // console.log("컴퓨터보다 낮음");
                incorrect += 1;
                console.log(incorrect);

                gameResult.textContent = `DOWN! 더 높은 숫자를 입력하세요. (남은 횟수: ${5-incorrect}번)`;
                gameInput.value = "";
                gameInput.focus();
            }
        }
    }
});
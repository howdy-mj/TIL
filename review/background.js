const bgContainer = document.querySelector(".bgcolor");
const bgBtn = bgContainer.querySelector("button");
const bgHex = document.querySelector(".bgcolorHex");

bgBtn.addEventListener("click", changeBG);

function changeBG() {
    const hexValue = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
    var hexColor = "#";

    for(var i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hexValue.length);
        hexColor += hexValue[random];
    }
    // console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    bgHex.innerText = hexColor;

}


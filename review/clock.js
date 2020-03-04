const timeContainer = document.querySelector(".time");
const timeTxt = timeContainer.querySelector("h3");

function time() {
    const clock = new Date();
    const year = clock.getFullYear();
    const month = clock.getMonth() +1;
    const date = clock.getDate();
    const hour = clock.getHours();
    const min = clock.getMinutes();
    const second = clock.getSeconds();

    timeTxt.innerText = `${year}/${month}/${date} ${
                                                    hour < 10 ? `0${hour}` : hour}:${
                                                    min < 10 ? `0${min}` : min}:${
                                                    second < 10 ? `0${second}` : second}`;
}

function init() {
    time();
    setInterval(time, 1000);
}
init();
const helloContainer = document.querySelector(".hello");
const helloInput = helloContainer.querySelector("input");
const helloName = document.querySelector(".helloName");

const USER_LS = "currentUser";
const SHOWING_CLASS = "showing";

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function submitName(event) {
    event.preventDefault();
    
    const currentName = helloInput.value;
    // console.log(currentName);
    loadName(currentName);
    saveName(currentName);
}

function writeName() {
    helloContainer.classList.add(SHOWING_CLASS);
    // console.log(helloInput.value);
    helloContainer.addEventListener("submit", submitName);
}

function loadName(name) {
    helloContainer.classList.remove(SHOWING_CLASS);
    helloName.classList.add(SHOWING_CLASS)
    helloName.innerHTML = `Hello, ${name}`;
}

function showName() {
    const username = localStorage.getItem(USER_LS)
    if (username === null) {
        writeName();
    } else {
        loadName(username);
    }
}

function init() {
    showName();
}
init();
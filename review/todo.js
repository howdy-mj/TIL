const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");

const TODOS_LS = "toDos";
let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function writeToDo(text) {
    // console.log(localStorage.getItem(TODOS_LS));
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");

    delBtn.innerText = "삭제";
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);

    const todoObj = {
        text: text
    }
    toDos.push(todoObj);
    saveToDo();
}

function submitToDo(event) {
    event.preventDefault();
    currentValue = todoInput.value;
    // console.log(currentValue);
    writeToDo(currentValue);
    todoInput.value = "";
}

function loadToDo() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach( function(toDo) {
            writeToDo(toDo.text);
        })
    }
}

function init() {
    loadToDo();
    todoForm.addEventListener("submit", submitToDo);
}
init();
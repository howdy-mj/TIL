const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id); // li.id가 String이라 숫자로 변환
    });
    toDos = cleanToDos;
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JS값이나 객체를 JSON 문자열로 변경
}

function writeToDo(text) {
    // console.log(localStorage.getItem(TODOS_LS));
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "삭제";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);

    const todoObj = {
        text: text,
        id: newId
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
        const parsedToDos = JSON.parse(loadedToDos); // JSON 문자열을 JS값이나 객체로 반환
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
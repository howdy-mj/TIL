const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");

const toDos = [];

function loadToDo() {
    const loadedToDo = localStorage.getItem(toDos);
    if(loadedToDo !== null) {
        
    }
}

function init() {
    loadToDo();
}
init();
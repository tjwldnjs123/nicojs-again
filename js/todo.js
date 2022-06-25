const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

function saveTodos() {
  localStorage.setItem("toDos", JSON.stringify(toDos))
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo)=>toDo.id !== parseInt(li.id))
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "␡";
  button.addEventListener("click",deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos
  parsedToDos.forEach(paintTodo)
}
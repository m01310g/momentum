// todo list 작성, 화면에 표시/삭제

const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// toDos array가 빈 상태로 시작하면 새로고침을 했을 때 localStorage에는 새로 입력한 것으로 덮어씌워짐
let toDos = [];

function saveToDos() {
    // localStorage에 toDos 저장
    // JSON.stringify: array 모양의 string으로 저장할 수 있도록 해줌
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // 어떤 요소를 삭제해야 되는가?
    // event가 일어난 target 요소의 부모 요소를 삭제(여기에서는 li)
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    // span 내부에 작성한 todo 입력
    span.innerText = newTodo;

    const button = document.createElement("button");

    button.innerText = "❌"

    // button의 click event 감지
    button.addEventListener("click", deleteToDo); 

    li.appendChild(span);

    // li에 x button 추가
    li.appendChild(button);

    // li에 추가된 span에 작성된 todo를 저장함 -> li를 todoList에 저장하기만 하면 list를 표시할 수 있음
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    // input value 저장
    const newTodo = todoInput.value;

    // input 창 비우기
    todoInput.value = "";
    // todo 저장하기 위해 toDos array에 새로 입력되는 todo 저장
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

// string으로 저장되어 있는 array를 실제 활용 가능한 array로 변경
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    
    // toDos array에 이전 todos 저장
    toDos = parsedToDos;

    // 각각의 item에 대해 function 실행
    // parsedToDos.forEach(sayHello);
    parsedToDos.forEach(paintToDo);
}
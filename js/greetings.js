// 환영 인사("Hello, xxx!") 화면에 표시 

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");   // greeting id를 불러옴

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// 함수가 argument를 받도록 하고, 그걸 JS에 넘겨줌
// argument는 공간을 만들어준 것
function onLoginSubmit(event) {
    // preventDefault 함수는 어떤 event의 기본 행동이 발생되지 않도록 막는 역할
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    // localStorage에 username 저장(Key-Value 쌍)
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// EventListener function의 첫번째 argument는 항상 방금 막 일어난 일에 대한 정보
// loginForm.addEventListener("submit", onLoginSubmit);    // form을 submit 할 때 입력값 받아냄(페이지가 자동으로 새로고침)

// username 값이 있으면 form 대신 greeting 보여주기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}
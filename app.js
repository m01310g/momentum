// loginForm은 HTML element -> HTML 내부 바로 검색 가능
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// username의 validity 검사 필요
function onLoginBtnClick() {
    const username = loginInput.value;
    // browser 자체 기능으로도 존재(form)
    // if (username === "") {
    //     alert("Please write yourname");
    // } else if (username.length > 15) {
    //     alert("Your name is too long.")
    // }

    // HTML의 form 기능 이용 -> form을 계속 submit 하기 때문에 입력창의 내용이 버튼을 누르면 계속 비워짐(browser refresh)
    // button의 click event를 확인할 필요가 없어짐(enter을 눌러도 form은 submit 됨)
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
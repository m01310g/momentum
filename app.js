const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

// 함수가 argument를 받도록 하고, 그걸 JS에 넘겨줌
// argument는 공간을 만들어준 것
function onLoginSubmit(event) {
    // preventDefault 함수는 어떤 event의 기본 행동이 발생되지 않도록 막는 역할
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

function handleLinkClick(event) {
    // preventDefault 때문에 기본 동작 실행 x -> 링크로 이동되지 않음
    event.preventDefault();
    console.log(event);
    // alert가 페이지가 다른 동작을 못하도록 막음, OK 클릭해서 alert 사라지면 기본 동작 실행
    // alert("clicked!");
}

// loginForm의 submit event 감지
// event가 발생할 때 브라우저가 function 호출

// EventListener function의 첫번째 argument는 항상 방금 막 일어난 일에 대한 정보
loginForm.addEventListener("submit", onLoginSubmit);    // form을 submit 할 때 입력값 받아냄(페이지가 자동으로 새로고침)

link.addEventListener("click", handleLinkClick);
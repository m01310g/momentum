// js는 html을 읽어옴
// console에 document 입력 -> 작성한 html 불러오기 가능
// js를 통해 html을 수정 또한 가능

// getElementById -> id를 이용해 element를 가져옴, className이나 innerText를 더 자주 사용
// tag name을 이용해서 관련 element의 array를 모두 불러올 수 있음
// const title = document.getElementsByTagName("h1");


// CSS Selector 형태로 원하는 element를 불러옴, 한 개의 element만 return
const h1 = document.querySelector(".Hello h1"); 
console.log(h1);

function handleTitleClick() {
    h1.style.color = "blue";
    console.log("title was clicked!");
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("All Good");
}

// click event 발생하는지 확인, 함수 넣을 때 괄호는 필요 없음
// h1.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;

// 조건에 부합하는 모든 element return
// const title2 = document.querySelectorAll(".Hello h1");
// console.log(title2);

// event를 찾는 방법 -> e.g. h1 html element mdn 검색, Wbe APIs 페이지 확인, HTMLelement
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
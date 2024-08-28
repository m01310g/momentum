// js는 html을 읽어옴
// console에 document 입력 -> 작성한 html 불러오기 가능
// js를 통해 html을 수정 또한 가능

// getElementById -> id를 이용해 element를 가져옴, className이나 innerText를 더 자주 사용
// tag name을 이용해서 관련 element의 array를 모두 불러올 수 있음
// const title = document.getElementsByTagName("h1");


// CSS Selector 형태로 원하는 element를 불러옴, 한 개의 element만 return
const h1 = document.querySelector("div.Hello:first-child h1"); 

function handleTitleClick() {
    const currentColor = h1.style.color
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

// click event 발생하는지 확인, 함수 넣을 때 괄호는 필요 없음
h1.addEventListener("click", handleTitleClick);
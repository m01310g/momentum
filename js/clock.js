// 현재 시각 화면에 표시 

const clock = document.querySelector("h1#clock");

// padStart 함수: 2개의 인자를 받음(원하는 길이, 채울 문자)
// 만약 string이 원하는 길이가 아니라면 앞에 문자를 채워줌
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval 함수: 2개의 인자를 받음(실행하고자 하는 function, 간격(ms))
// interval은 설정한 시간만큼 함수의 실행이 반복됨
getClock();
setInterval(getClock, 1000);

// setTimeout 함수: setInterval 함수와 같이 2개의 인자를 받음
// timeout은 함수의 실행을 설정한 시간만큼 지연시켜줌
// setTimeout(sayHello, 5000);
// user의 geolocation(위치)를 전달
// 화면에 날씨 표시

// navigator 모듈 사용

import config from "./apikey";

const API_KEY = config.apikey;

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        // span에서 날씨를 알려줄 변수
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    // promise는 시간이 좀 지연된 후 실행
}

function onGeoError() {
    console("Can't find you. No weather for you.");
}

// 첫번째 인수는 curremt position 탐색을 성공했을 경우, 두번째 인수는 실패했을 경우
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
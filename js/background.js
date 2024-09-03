// 배경 사진 랜덤 변경

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 이미지를 실제로 html에 추가
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.classList.add("bgImage");

// html의 body를 불러옴
// appendChild()는 body에 html을 추가함
document.body.appendChild(bgImage);
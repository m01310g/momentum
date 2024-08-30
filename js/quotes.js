const quotes = [
    {
        quote: "인생은 자전거를 타는 것과 같다. 균형을 유지하기 위해서는 계속 움직여야만 한다.",
        author: "아인슈타인",
    },
    {
        quote: "좋은 친구는 네잎클로버와 같다. 발견하기 어렵지만 얻게 되면 행운이 온다.",
        author: "아일랜드 속담",
    },
    {
        quote: "잘 보낸 하루가 편안한 잠을 주듯이 잘 쓰인 인생은 편안한 죽음을 준다.",
        author: "레오나르도 다빈치",
    },
    {
        quote: "한 번도 실수를 해보지 않은 사람은 한 번도 새로운 것을 시도한 것이 없는 사람이다.",
        author: "아인슈타인",
    },
    {
        quote: "살면서 저지르는 가장 큰 실수는 실수할까봐 계속 걱정하는 것이다.",
        author: "엘버트 하버드",
    },
    {
        quote: "실수할 자유가 없는 자유란 가치가 없다.",
        author: "마하트마 간디",
    },
    {
        quote: "우리가 하는 독창적인 일은 실수 뿐이다.",
        author: "빌리 조엘",
    },
    {
        quote: "현명하고 올바른 사람은 오류와 실수를 통해 미래를 사는 지혜를 깨우친다.",
        author: "플루타르코스",
    },
    {
        quote: "아무것도 배우지 않고 있기보다는 쓸모없는 것이라도 배우는 편이 낫다.",
        author: "세네키",
    },
    {
        quote: "돈은 최선의 종이요, 최악의 주인이다.",
        author: "프란시스 베이컨",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// randomness로 quote에 접근, 출력
// Math module 사용
// Math.random() -> 0~1 사이의 랜덤한 숫자
// Math.floor() -> 숫자 내림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
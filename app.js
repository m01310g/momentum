// functions

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("Capybara", 10);
// sayHello("Gyodon", 12);

// 함수의 인수 a, b는 함수 내부에서만 존재
// 함수 외부에서 console.log(a) 하면 a가 존재하지 않기 때문에 오류 발생
function plus(a, b) {
    console.log(a + b);
}

plus(1, 4);

function divide(a, b) {
    console.log(a / b);
}

divide(98, 20);

const player = {
    name: "capybara",
    sayHello: function(otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("gyodon");
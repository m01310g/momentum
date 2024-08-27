// Conditionals(조건문)

// prompt -> 사용자에게 창을 띄우고 값을 입력하도록 설정, 하지만 오래된 방법이라 잘 사용되지 않음
// parseInt -> string을 number로 변환해줌

const age = parseInt(prompt("How old are you?"));

// console.log(age);

// isNaN -> Boolean 값을 반환함 number이면 false, 아니면 true 반환

// ||(OR) 연산자 -> 둘 중 하나의 조건만 참이면 참
if (isNaN(age) || age < 0) {
    // isNaN(age) == true일 경우, number가 아니므로 다시 입력 받아야 함
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young.");
    // &&(AND) 연산자 -> 모든 조건이 단 만족해야 참
} else if (age >= 18 && age <= 50) { 
    console.log("You can drink.")
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}
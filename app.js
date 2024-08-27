// 계산기
// function에 return 사용

const calculator = {
    // 더하기
    add: function(a, b) {
        return a + b;
    },
    // 빼기
    minus: function(a, b) {
        return a - b;
    },
    // 나누기
    divide: function(a, b) {
        return a / b;
    },
    // 곱하기
    multi: function(a, b) {
        return a * b;
    },
    // 제곱
    power: function(a, b) {
        return a ** b ;
    }
};

const plusResult = calculator.add(1, 2);
console.log(plusResult);

const minusResult = calculator.minus(plusResult, 3);
console.log(minusResult);

const timesResult = calculator.multi(10, minusResult);
console.log(timesResult);

const divideResult = calculator.divide(timesResult, plusResult);
console.log(divideResult);

const powerResult = calculator.power(divideResult, minusResult);
console.log(powerResult);
// 계산기

const calculator = {
    // 더하기
    add: function(a, b) {
        console.log(a + b);
    },
    // 빼기
    minus: function(a, b) {
        console.log(a - b);
    },
    // 나누기
    divide: function(a, b) {
        console.log(a / b);
    },
    // 곱하기
    multi: function(a, b) {
        console.log(a * b);
    },
    // 제곱
    power: function(a, b) {
        console.log(a ** b);
    }
};

calculator.add(1, 2);
calculator.minus(4, 3);
calculator.divide(10, 2);
calculator.multi(20, 3);
calculator.power(3, 4);
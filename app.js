// const playerName = "m01310g";
// const playerPoints = 121212;
// const playerHandsome = true;
// const playerFat = "little bit";

// array -> 어떤 특성인지 알려주지 못하고 있음
// const player = ["m01310g", 121212, true, "little bit"];

// object 이용

const player = {
    name: "m01310g",
    points: 10,
    fat: false,
};

console.log(player);
console.log(player.name);

player.fat = true;
console.log(player);

// 특성 추가
player.lastName = "Kim";
console.log(player);
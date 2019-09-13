let johnScore1 = 89;
let johnScore2 = 120;
let johnScore3 = 103;

let mikeScore1 = 116;
let mikeScore2 = 94;
let mikeScore3 = 123;

let johnAvg = (johnScore1 + johnScore2 + johnScore3) / 3;
let mikeAvg = (mikeScore1 + mikeScore2 + mikeScore3) /3;

console.log(johnAvg);
console.log(mikeAvg);

if (johnAvg > mikeAvg) {
    console.log(`John is winner, Score -> ${johnAvg}`)
} else {
    console.log(`Mike is winner, Score -> ${mikeAvg}`)
}
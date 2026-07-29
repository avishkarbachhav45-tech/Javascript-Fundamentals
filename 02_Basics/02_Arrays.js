const mcu_heros = ["Thor", "Ironman", "Hulk"]
const dc_heros = ["Batman", "Superman", "Flash"]

// mcu_heros.push(dc_heros);

// console.log(mcu_heros);
// console.log(mcu_heros[3][0]);

// const superHeros = mcu_heros.concat(dc_heros)
// console.log(superHeros);
// console.log(superHeros[4]);

const indi_heros = ["Shaktiman", "Krish", "Murali"]

const allHeros = [...mcu_heros, ...dc_heros, ...indi_heros]
// console.log(allHeros);

const anotherArr = [1, 2, [3, 4, [5, 6], 7], 8, 9]
// console.log(anotherArr);

let finalArr = anotherArr.flat(Infinity)
// console.log(finalArr);

// console.log(Array.isArray([5,2]));
// console.log(Array.isArray("Rohit"));
// console.log(Array.from("Rohit"));
// console.log(Array.from({name : "Rohit"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
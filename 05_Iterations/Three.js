const myArr = [1, 2, 3, 4, 5]
for (const num of myArr) {
    // console.log(`Value is ${num}`);   
}

const greeting = "WelCome"
for (const greet of greeting) {
    // console.log(greet);
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

const myObj = {
    username : "Rohit",
    jearsy :45 
}

// for (const [player, num] of myObj) {
//     console.log(`Name of player is ${player} and jearsy no is ${num}`)
// }
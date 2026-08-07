let i = 0

while (i <= 10) {
    // console.log(`Value of i is ${i}`);
    i = i + 2
}

let myArray = ['thor', 'ironman', 'hulk']
let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr++
}

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
    if(score == 6){
        console.log(`6 detected`);
        break
    }
    
} while (score <= 10);
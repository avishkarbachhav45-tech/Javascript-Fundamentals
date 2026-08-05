var c = 930
let a = 450

if(true){
    let a = 45
    const b = 18
    var c = 93
    // console.log(`Inner a : ${a}`);
    // console.log(`Inner c : ${c}`);
}

// console.log(`Outer a : ${a}`);
// // console.log(b);
// console.log(`Outer c : ${c}`);



// Scope level and mini hoisting

function one(){
    const username = "Rohit"

    function two(){
        let price = 45
        // console.log(username);
    }
    // console.log(price);
    
    // two()
}

one()


if(true){
    const username = "Rohit"
    if(username === "Rohit"){
        let price = 455
        // console.log(`Username is ${username} and price is ${price}`);
    }
    // console.log(price);
    // console.log(username);
}
// console.log(username);

console.log(addOne(5))
function addOne(num){
    return num + 1
}


addTwo(5) 
const newFunction = function addTwo(num){
    return num + 2
}
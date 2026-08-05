// function myName (){
//     console.log("R");
//     console.log("O");
//     console.log("H");
//     console.log("I");
//     console.log("T");
// }

// myName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(2, 5)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
}

const result = addTwoNumbers(35, 10)
// console.log(`Result : ${result}`);

function loginUserMessage(username = "Ro"){
    if(!username){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rohit"));
// console.log(loginUserMessage());

// Functions with objects and arrays

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,55,455,145));

const user={
    username : "Rohit",
    price : 455
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username : "Virat",
    price : 188
})

const myNewArray = [18, 45, 93, 99]

function returnSecondValue(getArr){
    return getArr
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([18, 45, 93, 99]));
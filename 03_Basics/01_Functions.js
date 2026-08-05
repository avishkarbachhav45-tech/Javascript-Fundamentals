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
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rohit"));
console.log(loginUserMessage());
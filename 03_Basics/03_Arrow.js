const user = {
    username : "Rohit",
    price : 450,

    welcomeMsg : function(){
        // console.log(`${this.username}, Welcome to the website`);
        // console.log(this);
        
    }
}

user.welcomeMsg()
user.username = "Virat"
user.welcomeMsg()
// console.log(this);

// function chai(){
//     username : "Code"
//     console.log(this.username);
// }

// const chai = function (){
//     username : "Code"
//     console.log(this.username);
// }

// const chai = () => {
//     username : "Code"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(30, 15));

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(30, 15))

const addTwo = (num1, num2) => ({username : "Ro"})
console.log(addTwo());
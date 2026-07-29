const name = "Rohit"
const number = 45

console.log(`Hello my name is ${name} and my jearsy number is ${number}`);



const gameName = new String("Cricket")

console.log(gameName[0]);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-7, 2)
console.log(anotherString);

const url = "www.hitman.com/rohit%45sharma"
console.log(url.replace('%45', '-'));

const newStringOne = "   Rohit   "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(url.includes("rohit"));

const stringSplit = "Hello my name is Avi"
console.log(stringSplit.split(' '));
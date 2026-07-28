// Dates 

let myDate = new Date;

// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2026,7,28)
let myCreatedDate = new Date(2026,7,28, 5,46)
// let myCreatedDate = new Date("2005-12-17")
// let myCreatedDate = new Date("12-17-2005")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.round(Date.now() / 1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));

// Singleton
// object.create

// object literals

const mySymb = Symbol("key1")

const JsUser = {

    name : "Rohit",
    [mySymb] : "mykey1",
    "full name" : "Rohit Gurunath Sharma",
    age : 39,
    email : "Rohit45@gmail.com",
    location : "Mumbai",
    isLoggedIn : true,
    loginDevices : ["Oppo", "Vivo", "Apple"]
}

// console.log(typeof JsUser[mySymb]);

// console.log(JsUser.name);
// console.log(JsUser["full name"]);

JsUser.email = "Rohit45@google.com"
// Object.freeze(JsUser)
JsUser.email = "Rohit45@cric.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
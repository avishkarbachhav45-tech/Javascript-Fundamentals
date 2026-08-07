const userEmail = []

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have email");
}

// Truthy Values

// true, 1, " ", "false", [], {}, '0', function() {}

// Falsy values

// false, 0, "", BigInt 0n, null, undefined, NaN

if(userEmail.length == 1){
    console.log("Valid Email");
} else{
    console.log("Invalid Email");
}
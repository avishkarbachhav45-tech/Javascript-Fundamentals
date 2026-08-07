const userEmail = []

if(userEmail){
    // console.log("Got user email");
} else{
    // console.log("Don't have email");
}

// Truthy Values

// true, 1, " ", "false", [], {}, '0', function() {}

// Falsy values

// false, 0, "", BigInt 0n, null, undefined, NaN

// if(userEmail.length == 1){
//     console.log("Valid Email");
// } else{
//     console.log("Invalid Email");
// }

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    // console.log("Object is empty");
}

// Nullish Coalescing operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

// console.log(val1);

// Ternary operator

const teaPrice = 100

teaPrice <= 80 ?  console.log("less than 80") :console.log("greater than 80")
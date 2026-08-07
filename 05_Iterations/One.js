// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner lopp value : ${j} loop value : ${i}`);
        
    // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

const myArr = ["Thor", "Iron Man", "Captian America"]
// console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

//  Break and Continue keyword

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        // break
        continue
    }
    console.log(`Value of i is ${i}`);
    
}
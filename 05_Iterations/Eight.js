const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and current value: ${currVal}`);
//     return acc + currVal
// }, 9)

const myTotal = myNums.reduce( (acc, currVal) => (acc + currVal), 0)
// console.log(`acc : ${acc} and current value: ${currVal}`);

// console.log(myTotal);

const shoppingCart = [
    {
        courseName: "JS course",
        price: 1999
    },
    {
        courseName: "pyhton course",
        price: 999
    },
    {
        courseName: "Java course",
        price: 7999
    },
    {
        courseName: "Data Science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, currVal) => acc + currVal.price, 0)

console.log(priceToPay);
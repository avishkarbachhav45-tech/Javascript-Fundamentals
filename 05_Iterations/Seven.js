const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = numbers.map( (nums) => nums + 10)


const newNums = numbers
    .map( (nums) => nums * 5 )
    .map( (nums) => nums - 10)
    .filter( (nums) => nums >= 30)

console.log(newNums);

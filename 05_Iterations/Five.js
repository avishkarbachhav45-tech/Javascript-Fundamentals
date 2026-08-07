const coding = ["JS", "PY", "CPP", "RB"]

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (i, j, k) => {
//     console.log(i, j, k);
// })

const codingLang = [
    {
        langName : "JavaScript",
        fileName : "js"
    },
    {
        langName : "Java",
        fileName : "java"
    },
    {
        langName : "python",
        fileName : "py"
    }
]

codingLang.forEach( (item) => {
    console.log(item.langName);
} )
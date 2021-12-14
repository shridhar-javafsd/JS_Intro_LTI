

let fun = (arg) => { // 2. function definition 
    console.log('fun output'); // 3
    arg(); // function call  //  4
}

let anotherFun = () => { // 5. function definition
    console.log('another function output'); // 6 
}

fun(anotherFun); // 1. function call 


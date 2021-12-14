

let fun = (arg) => { // 2. function definition 
    console.log('fun output'); // 3
    arg(); // function call  //  4 // callback 
}

let anotherFun = () => { // 5. function definition // callback function 
    console.log('another function output'); // 6 
}

fun(anotherFun); // 1. function call 

fun(() => {
    console.log('yet another, anonymous function');
});
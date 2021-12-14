
// callbacks in JS 

let fun = (a, b) => {
    console.log(a + b); 
}

fun(10, 20); // 10, 20 addition operator 
fun('abc', 'def'); // 'abc', 'def' concatenation operator 

// c - strongly typed language 
// int num = 10;

// JS - dynamically typed language 
let num = 10;
let num2 = 20;

fun(num, num2);

fun2 = () => {
    console.log('fun2');
}

fun2();


fun3 = (arg) => { 
    
    console.log(arg);
 }

let arg = 10;

fun3(arg);







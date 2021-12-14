
class FunClass {

    constructor() {

    }

    funMethod = () => {
        console.log('funMethod');
    }

}

// JS objects are of two types 
// 1. Objects of a class 
let obj = new FunClass();
obj.funMethod();

// proper JS objects 
let emp = {
    eid: 101,
    ename: 'Sonu',
    salary: 45000,
    email: 'sonu@lti.com',
    address: {
        street: 'ECIL road', 
        PIN: 500001,
        city: 'Hyderabad'
    },
    phones : [9876543210, 78978967543]
};

console.log(emp.ename);
console.log(emp.address.city);
console.log(emp);


objname = { p1: 'v1', p2 : 'v2'};
arrayName = [10, 20, 30];
console.log(arrayName[1]);




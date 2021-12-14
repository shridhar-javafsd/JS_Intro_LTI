


// delay of 2 seconds 

setTimeout(() => {
    console.log('one');
    callback();
}, 2000);


let callback = () => {
    console.log('two');
}


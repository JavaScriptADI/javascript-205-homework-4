let numbers =[];
let countGreater = 0;
let countLess = 0;
for (let i=0; i <100; i++) {
    Math.floor(Math.random () *100)+1;
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
 numbers.push(randomNumber);
}
console.log(numbers);
for(let i=0; i <numbers.length; i++ ) {
    if (numbers [i]>500 ) {
        countGreater++;
    }  
    if (numbers[i] <100) {
        countLess++;
    }
}
console.log(`Numbers greater than 500: ${countGreater}`);
console.log(`Numbers less than 100: ${countLess}`);
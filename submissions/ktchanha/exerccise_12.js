let numbers = [];

let max = -1000;
let min = 1000;

let positive = 0;
let negative = 0;
let zeros = 0;

let even = 0;
let odd = 0;

let count100 = 0;

for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 2001) - 1000;
    numbers.push(randomNumber);
}
for (let i = 0; i < numbers.length; i++) {
    if (numbers [i]> max) {
        max =numbers[i];
    }
 if (numbers[i]<min){
    min = numbers[i];
 }
  
 if (numbers[i]>0){
    positive++;

 }

 if (numbers[i]<0){
    negative++;
 }
 if (numbers[i]===0){
    zeros++;
 }
 if (numbers[i] % 2 === 0) {
    even++;
} else {
    odd++;
}
if (numbers[i]===100) {
    count100++;
}
}
console.log("===== Statistics =====");

console.log(`Biggest number: ${max}`);
console.log(`Smallest number: ${min}`);

console.log(`Positive numbers: ${positive}`);
console.log(`Negative numbers: ${negative}`);
console.log(`Zeros: ${zeros}`);

console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);

console.log(`100 appeared: ${count100} times`);
let numbers = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,];
let min = numbers [0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(`The minimum value is: ${min}`);
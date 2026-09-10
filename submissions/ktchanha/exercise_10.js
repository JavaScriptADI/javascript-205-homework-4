let numbers = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,];
let max = numbers [0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(`The maximum value is: ${max}`);
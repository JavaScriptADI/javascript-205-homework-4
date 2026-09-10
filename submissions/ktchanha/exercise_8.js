let numbers = [5, 10, 5, 20, 5, 30];
let find = 5;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
        console.log(`Found ${find} at index ${i}`);
        count++;
    }
}

console.log(`${find} appeared ${count} times`);
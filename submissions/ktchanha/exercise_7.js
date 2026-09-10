const numbers = [12, 45, 7, 99, 31, 18, 50, 3];
const find = 50;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
        console.log(`Found ${find} at index ${i}`);
        found = true;
        break;
    }
}

if (found === false) {
    console.log(`${find} was not found`);
}
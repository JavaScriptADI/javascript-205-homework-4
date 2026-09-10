const numbers = [8, 14, 21, 33, 47, 62, 75, 91];
const target = 75;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        console.log(`🎯 Found ${target} at index ${i}!`);
        found = true;
        break;
    }
}

if (found === false) {
    console.log(`❌ Number ${target} was not found.`);
}
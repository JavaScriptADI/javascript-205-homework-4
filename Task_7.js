const numbers = [12, 45, 7, 99, 31, 18, 50, 3];
find = 50;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
        console.log(`Found ${find} at index ${i}`);
        break;
    } else {console.log(`${find} was not found.`)};
}
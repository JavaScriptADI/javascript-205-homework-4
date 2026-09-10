let numbers = [1, 2, 25, 5, 7, 24, 89, 2, 85, 7,41, 2, 36, 47, 45, 2, 48, 6, 79, 125, 2, 54, 59,];
let find = 2;
let count = 0;
for ( let i=0; i< numbers.length; i++) {
    if (numbers[i] === find) {
        count++;
    }
}
console.log(`${find} appears ${count} times`);
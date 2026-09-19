const randomNumbers2 = [];
let countGreater = 0;
let countLess = 0;

for (let i = 0; i < 100; i++) {
    randomNumbers2.push(Math.floor(Math.random() * 1000));
    if (randomNumbers2[i] > 500) {
        countGreater++;
    } else if (randomNumbers2[i] < 100) {
        countLess++;
    }
}
console.log(`Total numbers: ${randomNumbers2.length}`);
console.log(`Numbers greater than 500: ${countGreater}`);
console.log(`Numbers less than 100: ${countLess}`);